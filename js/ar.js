const AR_CONFIG = {
    MARKER_MIND_URL: "assets/targets.mind", 
    DEFAULT_VIDEO: "assets/video/amit-ke-circuits-ar-promo.mp4"
};

const TARGET_MEMBERS = [
    "sopan",
    "prashant",
    "prachi",
    "amit",
    "tejaswini",
    "shikha",
    "shubham"
];
document.addEventListener("DOMContentLoaded", () => {
    // document.documentElement.style.backgroundColor = 'transparent';
    // document.body.style.backgroundColor = 'transparent';

    function track(name, details) {
        console.log("[circuit-ar]", name, details || {});
    }
    const activateBtn = document.getElementById("ar-activate-btn");
    if (activateBtn) {
        const activateScreen = document.getElementById("ar-activate");
        const arStage = document.getElementById("ar-stage");
        const statusText = document.getElementById("ar-status");
        let sceneStarted = false;
        function buildAndInject() {
            let sceneContainer = document.getElementById("ar-scene-container");
            if (!sceneContainer) {
                sceneContainer = document.createElement("div");
                sceneContainer.id = "ar-scene-container";
                sceneContainer.style.position = "absolute";
                sceneContainer.style.inset = "0";
                sceneContainer.style.width = "100%";
                sceneContainer.style.height = "100%";
                sceneContainer.style.zIndex = "10";
                arStage.insertBefore(sceneContainer, arStage.firstChild);
            }
            let assetsHTML = "";
            let targetsHTML = "";
            TARGET_MEMBERS.forEach((memberId, index) => {
                const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
                const videoSrc = (member && member.videoUrl) ? member.videoUrl : AR_CONFIG.DEFAULT_VIDEO;
                
                assetsHTML += `<video id="video_${memberId}" src="${videoSrc}" preload="auto" loop="true" playsinline webkit-playsinline crossorigin="anonymous"></video>\n`;
                
                // Set width="3" and height="3" so the video fully covers the coaster marker.
                targetsHTML += `
                    <a-entity mindar-image-target="targetIndex: ${index}" class="ar-marker" data-member-id="${memberId}">
                        <a-video src="#video_${memberId}" position="0 0 0" height="3" width="3" rotation="0 0 0"></a-video>
                    </a-entity>\n`;
            });
            sceneContainer.innerHTML = `
                <a-scene mindar-image="imageTargetSrc: ${AR_CONFIG.MARKER_MIND_URL};" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
                    <a-assets timeout="10000">
                        ${assetsHTML}
                    </a-assets>
                    <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
                    ${targetsHTML}
                </a-scene>
            `;
            let visitBtn = document.getElementById("visitBtn");
            if (!visitBtn) {
                visitBtn = document.createElement("a");
                visitBtn.id = "visitBtn";
                visitBtn.className = "button button-primary";
                visitBtn.href = "#";
                visitBtn.hidden = true;
                visitBtn.textContent = "Visit Microsite →";
                visitBtn.style.position = "absolute";
                visitBtn.style.bottom = "40px";
                visitBtn.style.left = "50%";
                visitBtn.style.transform = "translateX(-50%)";
                visitBtn.style.zIndex = "999";
                arStage.appendChild(visitBtn);
            } else {
                visitBtn.hidden = true;
            }
            const markers = sceneContainer.querySelectorAll(".ar-marker");
            markers.forEach(marker => {
                marker.addEventListener("targetFound", () => {
                    const memberId = marker.getAttribute("data-member-id");
                    const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
                    const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
                    track("ar_target_found", { memberId });
                    
                    if (video) {
                        video.currentTime = 0;
                        video.play().catch(err => track("ar_video_play_blocked", { error: String(err) }));
                    }
                    if (visitBtn && member) {
                        // visitBtn.href = `member.html?id=${encodeURIComponent(member.id)}&source=ar`;
                        visitBtn.href = `https://amit123.onrender.com/member.html?id=${encodeURIComponent(member.id)}&source=ar`;
                        visitBtn.hidden = false;
                    }
                });
                marker.addEventListener("targetLost", () => {
                    const memberId = marker.getAttribute("data-member-id");
                    const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
                    track("ar_target_lost", { memberId });
                    if (video) video.pause();
                    if (visitBtn) visitBtn.hidden = true;
                });
            });
        }
        function startAr() {
            if (sceneStarted) return;
            sceneStarted = true;
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                if (statusText) statusText.innerText = "Your browser doesn't support camera access.";
                sceneStarted = false;
                return;
            }
            track("ar_activate_tap");
            if (statusText) statusText.innerText = "Requesting camera access…";
            activateScreen.hidden = true;
            arStage.hidden = false;
            buildAndInject();
        }
        function stopAr() {
            track("ar_scan_cancelled");
            window.location.href = window.location.pathname + window.location.search;
        }
        activateBtn.addEventListener("click", startAr);
        const backBtn = document.getElementById("ar-back-btn");
        if (backBtn) backBtn.addEventListener("click", stopAr);
    }
});