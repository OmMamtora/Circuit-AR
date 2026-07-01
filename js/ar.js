// ─────────────────────────────────────────────────────────────────────────
// Circuit AR — QR scanner
//
// Job: scan a QR code → pull the member "id" out of the decoded value →
// open our own player.html?id=... (which plays that member's intro video
// and links out to their microsite). If the id can't be matched to anyone
// on the team, we fall back to opening whatever the QR encoded directly,
// so a scan never dead-ends.
// ─────────────────────────────────────────────────────────────────────────
const CONFIG = {
    REDIRECT_DELAY_MS: 800,
    OPEN_MODE: "same"
};

document.addEventListener("DOMContentLoaded", () => {

    const activateBtn = document.getElementById("ar-activate-btn");
    const activateScreen = document.getElementById("ar-activate");
    const arStage = document.getElementById("ar-stage");
    const scanningOverlay = document.getElementById("scanning-overlay");
    const foundLayer = document.getElementById("found-layer");
    const foundLabel = document.getElementById("found-label");
    const backBtn = document.getElementById("ar-back-btn");

    let html5QrCode = null;
    let isScanning = false;

    // A scanned coaster's QR encodes the member's microsite URL, e.g.
    // ".../member.html?id=prachi&source=qr". We don't jump straight to that
    // microsite — instead we pull the "id" out of it and open our own local
    // player.html?id=... first, which plays that member's intro video and
    // then offers a button to visit the actual microsite.
    function extractMemberId(decodedText) {
        try {
            const u = new URL(decodedText);
            const id = u.searchParams.get("id");
            if (id) return id;
        } catch (e) {
            // Not a full URL — maybe the QR just encodes a bare id.
            if (/^[a-z0-9_-]+$/i.test(decodedText.trim())) {
                return decodedText.trim();
            }
        }
        return null;
    }

    function onScanSuccess(decodedText) {

        scanningOverlay.style.display = "none";

        foundLayer.classList.add("visible");

        // Defensive: if data.js failed to load, or getCircuitMember isn't
        // defined for any reason, we must NOT let that break the redirect.
        let member = null;
        try {
            const memberId = extractMemberId(decodedText);
            if (memberId && typeof window.getCircuitMember === "function") {
                member = window.getCircuitMember(memberId) || null;
            }
        } catch (e) {
            member = null;
        }

        foundLabel.innerHTML = member ? `${member.name} found!` : "Coaster found — opening…";

        const goToDestination = () => {
            isScanning = false;
            if (member) {
                window.location.href = `player.html?id=${encodeURIComponent(member.id)}`;
            } else {
                window.location.href = decodedText;
            }
        };

        // Race the camera's stop() against a short timeout so a stuck
        // camera teardown can never prevent the redirect from happening.
        Promise.race([
            html5QrCode.stop().catch(() => {}),
            new Promise(resolve => setTimeout(resolve, 600))
        ]).then(() => {
            setTimeout(goToDestination, CONFIG.REDIRECT_DELAY_MS);
        });

    }

    function onScanFailure() {}

    function startScanner() {

        scanningOverlay.style.display = "flex";
        foundLayer.classList.remove("visible");

        html5QrCode = new Html5Qrcode("qr-reader");

        html5QrCode.start(

            { facingMode: "environment" },

            {
                fps: 10,
                qrbox: 250
            },

            onScanSuccess,

            onScanFailure

        ).then(() => {
            isScanning = true;
        }).catch(() => {
            isScanning = false;
        });

    }

    function stopScanner() {
        if (!html5QrCode || !isScanning) return Promise.resolve();
        isScanning = false;
        return html5QrCode.stop().then(() => html5QrCode.clear()).catch(() => {});
    }

    activateBtn.addEventListener("click", () => {

        activateScreen.hidden = true;

        arStage.hidden = false;

        startScanner();

    });

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            stopScanner().finally(() => {
                arStage.hidden = true;
                activateScreen.hidden = false;
            });
        });
    }

});