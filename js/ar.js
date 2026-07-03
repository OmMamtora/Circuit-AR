// const AR_CONFIG = {
//   MARKER_MIND_URL: "assets/targets.mind", 
//    DEFAULT_VIDEO: "assets/video/amit-ke-circuits-ar-promo.mp4"
// };

// const TARGET_MEMBERS = [
//     "sopan",
//     "prashant",
//     "prachi",
//     "amit",
//     "tejaswini",
//     "shikha",
//     "shubham"
// ];
// document.addEventListener("DOMContentLoaded", () => {
//     // document.documentElement.style.backgroundColor = 'transparent';
//     // document.body.style.backgroundColor = 'transparent';

//     function track(name, details) {
//         console.log("[circuit-ar]", name, details || {});
//     }
//     const activateBtn = document.getElementById("ar-activate-btn");
//     if (activateBtn) {
//         const activateScreen = document.getElementById("ar-activate");
//         const arStage = document.getElementById("ar-stage");
//         const statusText = document.getElementById("ar-status");
//         let sceneStarted = false;
//         function buildAndInject() {
//             let sceneContainer = document.getElementById("ar-scene-container");
//             if (!sceneContainer) {
//                 sceneContainer = document.createElement("div");
//                 sceneContainer.id = "ar-scene-container";
//                 sceneContainer.style.position = "absolute";
//                 sceneContainer.style.inset = "0";
//                 sceneContainer.style.width = "100%";
//                 sceneContainer.style.height = "100%";
//                 sceneContainer.style.zIndex = "10";
//                 arStage.insertBefore(sceneContainer, arStage.firstChild);
//             }
//             let assetsHTML = "";
//             let targetsHTML = "";
//             TARGET_MEMBERS.forEach((memberId, index) => {
//                 const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
//                 const videoSrc = (member && member.videoUrl) ? member.videoUrl : AR_CONFIG.DEFAULT_VIDEO;
                
//                 assetsHTML += `<video id="video_${memberId}" src="${videoSrc}" preload="auto" loop="true" playsinline webkit-playsinline crossorigin="anonymous"></video>\n`;
                
//                 // Set width="3" and height="3" so the video fully covers the coaster marker.
//                 targetsHTML += `
//                     <a-entity mindar-image-target="targetIndex: ${index}" class="ar-marker" data-member-id="${memberId}">
//                         <a-video src="#video_${memberId}" position="0 0 0" height="3" width="3" rotation="0 0 0"></a-video>
//                     </a-entity>\n`;
//             });
//             sceneContainer.innerHTML = `
//                 <a-scene mindar-image="imageTargetSrc: ${AR_CONFIG.MARKER_MIND_URL};" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
//                     <a-assets timeout="10000">
//                         ${assetsHTML}
//                     </a-assets>
//                     <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
//                     ${targetsHTML}
//                 </a-scene>
//             `;
//             let visitBtn = document.getElementById("visitBtn");
//             if (!visitBtn) {
//                 visitBtn = document.createElement("a");
//                 visitBtn.id = "visitBtn";
//                 visitBtn.className = "button button-primary";
//                 visitBtn.href = "#";
//                 visitBtn.hidden = true;
//                 visitBtn.textContent = "Visit Microsite →";
//                 visitBtn.style.position = "absolute";
//                 visitBtn.style.bottom = "40px";
//                 visitBtn.style.left = "50%";
//                 visitBtn.style.transform = "translateX(-50%)";
//                 visitBtn.style.zIndex = "999";
//                 arStage.appendChild(visitBtn);
//             } else {
//                 visitBtn.hidden = true;
//             }
//             const markers = sceneContainer.querySelectorAll(".ar-marker");
//             markers.forEach(marker => {
//                 marker.addEventListener("targetFound", () => {
//                     const memberId = marker.getAttribute("data-member-id");
//                     const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
//                     const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
//                     track("ar_target_found", { memberId });
                    
//                     if (video) {
//                         video.currentTime = 0;
//                         video.play().catch(err => track("ar_video_play_blocked", { error: String(err) }));
//                     }
//                     if (visitBtn && member) {
//                         // visitBtn.href = `member.html?id=${encodeURIComponent(member.id)}&source=ar`;
//                         visitBtn.href = `https://amit123.onrender.com/member.html?id=${encodeURIComponent(member.id)}&source=ar`;
//                         visitBtn.hidden = false;
//                     }
//                 });
//                 marker.addEventListener("targetLost", () => {
//                     const memberId = marker.getAttribute("data-member-id");
//                     const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
//                     track("ar_target_lost", { memberId });
//                     if (video) video.pause();
//                     if (visitBtn) visitBtn.hidden = true;
//                 });
//             });
//         }
//         function startAr() {
//             if (sceneStarted) return;
//             sceneStarted = true;
//             if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//                 if (statusText) statusText.innerText = "Your browser doesn't support camera access.";
//                 sceneStarted = false;
//                 return;
//             }
//             track("ar_activate_tap");
//             if (statusText) statusText.innerText = "Requesting camera access…";
//             activateScreen.hidden = true;
//             arStage.hidden = false;
//             buildAndInject();
//         }
//         function stopAr() {
//             track("ar_scan_cancelled");
//             window.location.href = window.location.pathname + window.location.search;
//         }
//         activateBtn.addEventListener("click", startAr);
//         const backBtn = document.getElementById("ar-back-btn");
//         if (backBtn) backBtn.addEventListener("click", stopAr);
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  var startCamera = document.getElementById("startCamera");
  var introCard = document.getElementById("introCard");
  var cameraStage = document.getElementById("cameraStage");
  var statusTitle = document.getElementById("statusTitle");
  var statusCopy = document.getElementById("statusCopy");
  var scanProgress = document.getElementById("scanProgress");
  var videoLayer = document.getElementById("videoLayer");
  var arVideo = document.getElementById("arVideo");
  var afterActions = document.getElementById("afterActions");
  var muteVideo = document.getElementById("muteVideo");
  var skipWebsite = document.getElementById("skipWebsite");
  var closeCamera = document.getElementById("closeCamera");
  
  var sceneStarted = false;

  function launchVideo() {
    // Hide scanning stage, show video layer
    if (cameraStage) cameraStage.classList.remove("is-active");
    if (videoLayer) videoLayer.classList.add("is-active");
    if (afterActions) afterActions.classList.add("is-visible");
    
    // Stop the AR camera in the background
    let arSystem = document.querySelector('a-scene').systems["mindar-image-system"];
    if (arSystem) arSystem.stop();
    
    arVideo.currentTime = 0;
    arVideo.muted = false;
    if (muteVideo) muteVideo.textContent = "Mute";
    
    var playPromise = arVideo.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(function () {
        arVideo.muted = true;
        if (muteVideo) muteVideo.textContent = "Unmute";
        arVideo.play().catch(function () {});
      });
    }
  }

  function goToWebsite() {
    window.location.href = "https://amit123.onrender.com"; 
  }

  function buildAndInjectMindAR() {
      let sceneContainer = document.getElementById("ar-scene-container");
      if (!sceneContainer) {
          sceneContainer = document.createElement("div");
          sceneContainer.id = "ar-scene-container";
          sceneContainer.style.position = "absolute";
          sceneContainer.style.inset = "0";
          sceneContainer.style.zIndex = "-5"; // Puts the camera feed behind the UI
          document.body.appendChild(sceneContainer);
      }

      // Supports up to 7 images inside targets.mind
      let targetsHTML = "";
      for (let i = 0; i < 7; i++) {
          targetsHTML += `<a-entity mindar-image-target="targetIndex: ${i}" class="ar-marker"></a-entity>`;
      }

      // We turn off MindAR's default UI so our beautiful UI shows instead
      sceneContainer.innerHTML = `
          <a-scene mindar-image="imageTargetSrc: assets/targets.mind; uiScanning: no; uiLoading: no;" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
              <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
              ${targetsHTML}
          </a-scene>
      `;

      // Listen for the image detection
      setTimeout(() => {
          const markers = document.querySelectorAll(".ar-marker");
          markers.forEach(marker => {
              marker.addEventListener("targetFound", () => {
                  if (scanProgress) scanProgress.style.width = "100%";
                  if (statusTitle) statusTitle.textContent = "Target Matched!";
                  if (statusCopy) statusCopy.textContent = "Magic start ho raha hai...";
                  
                  // Start video after a short 1 second delay so they see it matched
                  setTimeout(launchVideo, 1000);
              });
          });
      }, 1000); // Small delay to let A-Frame elements render
  }

  function openCamera() {
      if (sceneStarted) return;
      sceneStarted = true;
      
      // Show scanning UI
      if (introCard) introCard.style.display = 'none';
      if (cameraStage) cameraStage.classList.add("is-active");
      
      if (statusTitle) statusTitle.textContent = "Scanning Target...";
      if (statusCopy) statusCopy.textContent = "Frame the entire coaster or slide image in the box.";
      if (scanProgress) scanProgress.style.width = "20%";

      // Start MindAR
      buildAndInjectMindAR();
  }

  function stopCamera() {
      window.location.reload(); // Quickest way to tear down MindAR camera safely
  }

  if (startCamera) startCamera.addEventListener("click", openCamera);
  if (closeCamera) closeCamera.addEventListener("click", stopCamera);
  
  if (arVideo) {
      arVideo.addEventListener("ended", goToWebsite);
  }
  
  if (muteVideo) {
      muteVideo.addEventListener("click", function () {
        if (!arVideo) return;
        arVideo.muted = !arVideo.muted;
        muteVideo.textContent = arVideo.muted ? "Unmute" : "Mute";
      });
  }
  
  if (skipWebsite) {
      skipWebsite.addEventListener("click", function () {
        if (arVideo) arVideo.pause();
        goToWebsite();
      });
  }
});