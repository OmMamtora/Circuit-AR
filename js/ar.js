// // ─────────────────────────────────────────────────────────────────────────
// // Circuit AR — QR scanner
// //
// // Job: scan a QR code → pull the member "id" out of the decoded value →
// // open our own player.html?id=... (which plays that member's intro video
// // and links out to their microsite). If the id can't be matched to anyone
// // on the team, we fall back to opening whatever the QR encoded directly,
// // so a scan never dead-ends.
// // ─────────────────────────────────────────────────────────────────────────
// const CONFIG = {
//     REDIRECT_DELAY_MS: 800,
//     OPEN_MODE: "same"
// };

// document.addEventListener("DOMContentLoaded", () => {

//     const activateBtn = document.getElementById("ar-activate-btn");
//     const activateScreen = document.getElementById("ar-activate");
//     const arStage = document.getElementById("ar-stage");
//     const scanningOverlay = document.getElementById("scanning-overlay");
//     const foundLayer = document.getElementById("found-layer");
//     const foundLabel = document.getElementById("found-label");
//     const backBtn = document.getElementById("ar-back-btn");

//     let html5QrCode = null;
//     let isScanning = false;

//     // A scanned coaster's QR encodes the member's microsite URL, e.g.
//     // ".../member.html?id=prachi&source=qr". We don't jump straight to that
//     // microsite — instead we pull the "id" out of it and open our own local
//     // player.html?id=... first, which plays that member's intro video and
//     // then offers a button to visit the actual microsite.
//     function extractMemberId(decodedText) {
//         try {
//             const u = new URL(decodedText);
//             const id = u.searchParams.get("id");
//             if (id) return id;
//         } catch (e) {
//             // Not a full URL — maybe the QR just encodes a bare id.
//             if (/^[a-z0-9_-]+$/i.test(decodedText.trim())) {
//                 return decodedText.trim();
//             }
//         }
//         return null;
//     }

//     function onScanSuccess(decodedText) {

//         scanningOverlay.style.display = "none";

//         foundLayer.classList.add("visible");

//         // Defensive: if data.js failed to load, or getCircuitMember isn't
//         // defined for any reason, we must NOT let that break the redirect.
//         let member = null;
//         try {
//             const memberId = extractMemberId(decodedText);
//             if (memberId && typeof window.getCircuitMember === "function") {
//                 member = window.getCircuitMember(memberId) || null;
//             }
//         } catch (e) {
//             member = null;
//         }

//         foundLabel.innerHTML = member ? `${member.name} found!` : "Coaster found — opening…";

//         const goToDestination = () => {
//             isScanning = false;
//             if (member) {
//                 window.location.href = `player.html?id=${encodeURIComponent(member.id)}`;
//             } else {
//                 window.location.href = decodedText;
//             }
//         };

//         // Race the camera's stop() against a short timeout so a stuck
//         // camera teardown can never prevent the redirect from happening.
//         Promise.race([
//             html5QrCode.stop().catch(() => {}),
//             new Promise(resolve => setTimeout(resolve, 600))
//         ]).then(() => {
//             setTimeout(goToDestination, CONFIG.REDIRECT_DELAY_MS);
//         });

//     }

//     function onScanFailure() {}

//     function startScanner() {

//         scanningOverlay.style.display = "flex";
//         foundLayer.classList.remove("visible");

//         html5QrCode = new Html5Qrcode("qr-reader");

//         html5QrCode.start(

//             { facingMode: "environment" },

//             {
//                 fps: 10,
//                 qrbox: 250
//             },

//             onScanSuccess,

//             onScanFailure

//         ).then(() => {
//             isScanning = true;
//         }).catch(() => {
//             isScanning = false;
//         });

//     }

//     function stopScanner() {
//         if (!html5QrCode || !isScanning) return Promise.resolve();
//         isScanning = false;
//         return html5QrCode.stop().then(() => html5QrCode.clear()).catch(() => {});
//     }

//     activateBtn.addEventListener("click", () => {

//         activateScreen.hidden = true;

//         arStage.hidden = false;

//         startScanner();

//     });

//     if (backBtn) {
//         backBtn.addEventListener("click", () => {
//             stopScanner().finally(() => {
//                 arStage.hidden = true;
//                 activateScreen.hidden = false;
//             });
//         });
//     }

// });

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
    const statusText = document.getElementById("ar-status");
    const fallbackScreen = document.getElementById("ar-fallback");
    const fallbackMessage = document.getElementById("fallback-message");
    const retryBtn = document.getElementById("ar-retry-btn");

    let html5QrCode = null;
    let isScanning = false;

    function showFallback(message) {
        arStage.hidden = true;
        activateScreen.hidden = true;
        if (fallbackMessage) fallbackMessage.textContent = message;
        if (fallbackScreen) fallbackScreen.hidden = false;
    }

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

    function cameraErrorMessage(err) {
        const name = (err && (err.name || err.toString())) || "";
        if (!window.isSecureContext) {
            return "Camera needs a secure (https://) page to work. Open this site over HTTPS, not a plain IP/http address.";
        }
        if (/NotAllowedError|Permission/i.test(name)) {
            return "Camera permission was denied. Allow camera access for this site in your browser settings, then try again.";
        }
        if (/NotFoundError|OverconstrainedError/i.test(name)) {
            return "No usable camera was found on this device.";
        }
        if (/NotReadableError/i.test(name)) {
            return "The camera is already in use by another app. Close other camera apps/tabs and try again.";
        }
        return "Camera or scanner didn't load. Check permissions and your connection, then try again.";
    }

    function startScanner() {

        scanningOverlay.style.display = "flex";
        foundLayer.classList.remove("visible");

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showFallback("This browser doesn't support camera access. Try Chrome or Safari.");
            return;
        }
        if (typeof Html5Qrcode === "undefined") {
            showFallback("The scanner library failed to load. Check your connection and try again.");
            return;
        }

        html5QrCode = new Html5Qrcode("qr-reader", {
            // Narrowing to QR-only speeds up every decode pass.
            formatsToSupport: [ Html5QrcodeSupportedFormats.QR_CODE ],
            // Uses the browser's native BarcodeDetector when available
            // (Chrome/Android) — meaningfully faster & more reliable than
            // the pure-JS decoder, especially for QR codes shown on a
            // screen rather than printed.
            experimentalFeatures: { useBarCodeDetectorIfSupported: true },
            verbose: false
        });

        const config = {
            fps: 15,
            // Bigger, adaptive scan box — much easier to line up a QR code
            // against, especially when scanning one off another screen.
            qrbox: (viewfinderWidth, viewfinderHeight) => {
                const size = Math.floor(Math.min(viewfinderWidth, viewfinderHeight) * 0.7);
                return { width: size, height: size };
            },
            // Continuous autofocus helps a lot when scanning a code shown
            // on a nearby screen rather than a static printed surface.
            videoConstraints: {
                facingMode: "environment",
                advanced: [{ focusMode: "continuous" }]
            }
        };

        html5QrCode.start(

            { facingMode: "environment" },

            config,

            onScanSuccess,

            onScanFailure

        ).then(() => {
            isScanning = true;
        }).catch((err) => {
            isScanning = false;
            showFallback(cameraErrorMessage(err));
        });

    }

    function stopScanner() {
        if (!html5QrCode || !isScanning) return Promise.resolve();
        isScanning = false;
        return html5QrCode.stop().then(() => html5QrCode.clear()).catch(() => {});
    }

    activateBtn.addEventListener("click", () => {

        if (statusText) statusText.textContent = "Requesting camera access…";
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

    if (retryBtn) {
        retryBtn.addEventListener("click", () => {
            if (fallbackScreen) fallbackScreen.hidden = true;
            activateScreen.hidden = false;
        });
    }

});