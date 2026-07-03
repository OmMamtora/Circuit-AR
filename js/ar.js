// // // // // // const AR_CONFIG = {
// // // // // //     MARKER_MIND_URL: "assets/targets.mind", 
// // // // // //     DEFAULT_VIDEO: "assets/video/amit-ke-circuits-ar-promo.mp4"
// // // // // // };

// // // // // // const TARGET_MEMBERS = [
// // // // // //     "sopan",
// // // // // //     "prashant",
// // // // // //     "prachi",
// // // // // //     "amit",
// // // // // //     "tejaswini",
// // // // // //     "shikha",
// // // // // //     "shubham"
// // // // // // ];
// // // // // // document.addEventListener("DOMContentLoaded", () => {
// // // // // //     // document.documentElement.style.backgroundColor = 'transparent';
// // // // // //     // document.body.style.backgroundColor = 'transparent';

// // // // // //     function track(name, details) {
// // // // // //         console.log("[circuit-ar]", name, details || {});
// // // // // //     }
// // // // // //     const activateBtn = document.getElementById("ar-activate-btn");
// // // // // //     if (activateBtn) {
// // // // // //         const activateScreen = document.getElementById("ar-activate");
// // // // // //         const arStage = document.getElementById("ar-stage");
// // // // // //         const statusText = document.getElementById("ar-status");
// // // // // //         let sceneStarted = false;
// // // // // //         function buildAndInject() {
// // // // // //             let sceneContainer = document.getElementById("ar-scene-container");
// // // // // //             if (!sceneContainer) {
// // // // // //                 sceneContainer = document.createElement("div");
// // // // // //                 sceneContainer.id = "ar-scene-container";
// // // // // //                 sceneContainer.style.position = "absolute";
// // // // // //                 sceneContainer.style.inset = "0";
// // // // // //                 sceneContainer.style.width = "100%";
// // // // // //                 sceneContainer.style.height = "100%";
// // // // // //                 sceneContainer.style.zIndex = "10";
// // // // // //                 arStage.insertBefore(sceneContainer, arStage.firstChild);
// // // // // //             }
// // // // // //             let assetsHTML = "";
// // // // // //             let targetsHTML = "";
// // // // // //             TARGET_MEMBERS.forEach((memberId, index) => {
// // // // // //                 const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
// // // // // //                 const videoSrc = (member && member.videoUrl) ? member.videoUrl : AR_CONFIG.DEFAULT_VIDEO;
                
// // // // // //                 assetsHTML += `<video id="video_${memberId}" src="${videoSrc}" preload="auto" loop="true" playsinline webkit-playsinline crossorigin="anonymous"></video>\n`;
                
// // // // // //                 // Set width="3" and height="3" so the video fully covers the coaster marker.
// // // // // //                 targetsHTML += `
// // // // // //                     <a-entity mindar-image-target="targetIndex: ${index}" class="ar-marker" data-member-id="${memberId}">
// // // // // //                         <a-video src="#video_${memberId}" position="0 0 0" height="3" width="3" rotation="0 0 0"></a-video>
// // // // // //                     </a-entity>\n`;
// // // // // //             });
// // // // // //             sceneContainer.innerHTML = `
// // // // // //                 <a-scene mindar-image="imageTargetSrc: ${AR_CONFIG.MARKER_MIND_URL};" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
// // // // // //                     <a-assets timeout="10000">
// // // // // //                         ${assetsHTML}
// // // // // //                     </a-assets>
// // // // // //                     <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
// // // // // //                     ${targetsHTML}
// // // // // //                 </a-scene>
// // // // // //             `;
// // // // // //             let visitBtn = document.getElementById("visitBtn");
// // // // // //             if (!visitBtn) {
// // // // // //                 visitBtn = document.createElement("a");
// // // // // //                 visitBtn.id = "visitBtn";
// // // // // //                 visitBtn.className = "button button-primary";
// // // // // //                 visitBtn.href = "#";
// // // // // //                 visitBtn.hidden = true;
// // // // // //                 visitBtn.textContent = "Visit Microsite →";
// // // // // //                 visitBtn.style.position = "absolute";
// // // // // //                 visitBtn.style.bottom = "40px";
// // // // // //                 visitBtn.style.left = "50%";
// // // // // //                 visitBtn.style.transform = "translateX(-50%)";
// // // // // //                 visitBtn.style.zIndex = "999";
// // // // // //                 arStage.appendChild(visitBtn);
// // // // // //             } else {
// // // // // //                 visitBtn.hidden = true;
// // // // // //             }
// // // // // //             const markers = sceneContainer.querySelectorAll(".ar-marker");
// // // // // //             markers.forEach(marker => {
// // // // // //                 marker.addEventListener("targetFound", () => {
// // // // // //                     const memberId = marker.getAttribute("data-member-id");
// // // // // //                     const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
// // // // // //                     const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
// // // // // //                     track("ar_target_found", { memberId });
                    
// // // // // //                     if (video) {
// // // // // //                         video.currentTime = 0;
// // // // // //                         video.play().catch(err => track("ar_video_play_blocked", { error: String(err) }));
// // // // // //                     }
// // // // // //                     if (visitBtn && member) {
// // // // // //                         // visitBtn.href = `member.html?id=${encodeURIComponent(member.id)}&source=ar`;
// // // // // //                         visitBtn.href = `https://amit123.onrender.com/member.html?id=${encodeURIComponent(member.id)}&source=ar`;
// // // // // //                         visitBtn.hidden = false;
// // // // // //                     }
// // // // // //                 });
// // // // // //                 marker.addEventListener("targetLost", () => {
// // // // // //                     const memberId = marker.getAttribute("data-member-id");
// // // // // //                     const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
// // // // // //                     track("ar_target_lost", { memberId });
// // // // // //                     if (video) video.pause();
// // // // // //                     if (visitBtn) visitBtn.hidden = true;
// // // // // //                 });
// // // // // //             });
// // // // // //         }
// // // // // //         function startAr() {
// // // // // //             if (sceneStarted) return;
// // // // // //             sceneStarted = true;
// // // // // //             if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
// // // // // //                 if (statusText) statusText.innerText = "Your browser doesn't support camera access.";
// // // // // //                 sceneStarted = false;
// // // // // //                 return;
// // // // // //             }
// // // // // //             track("ar_activate_tap");
// // // // // //             if (statusText) statusText.innerText = "Requesting camera access…";
// // // // // //             activateScreen.hidden = true;
// // // // // //             arStage.hidden = false;
// // // // // //             buildAndInject();
// // // // // //         }
// // // // // //         function stopAr() {
// // // // // //             track("ar_scan_cancelled");
// // // // // //             window.location.href = window.location.pathname + window.location.search;
// // // // // //         }
// // // // // //         activateBtn.addEventListener("click", startAr);
// // // // // //         const backBtn = document.getElementById("ar-back-btn");
// // // // // //         if (backBtn) backBtn.addEventListener("click", stopAr);
// // // // // //     }
// // // // // // });

// // // // // const AR_CONFIG = {
// // // // //     MARKER_MIND_URL: "assets/targets.mind", 
// // // // //     DEFAULT_VIDEO: "assets/video/amit-ke-circuits-ar-promo.mp4"
// // // // // };

// // // // // const TARGET_MEMBERS = [
// // // // //     "sopan",
// // // // //     "prashant",
// // // // //     "prachi",
// // // // //     "amit",
// // // // //     "tejaswini",
// // // // //     "shikha",
// // // // //     "shubham"
// // // // // ];
// // // // // document.addEventListener("DOMContentLoaded", () => {
// // // // //     function track(name, details) {
// // // // //         console.log("[circuit-ar]", name, details || {});
// // // // //     }
// // // // //     const activateBtn = document.getElementById("ar-activate-btn");
// // // // //     if (activateBtn) {
// // // // //         const activateScreen = document.getElementById("ar-activate");
// // // // //         const arStage = document.getElementById("ar-stage");
// // // // //         const statusText = document.getElementById("ar-status");
// // // // //         let sceneStarted = false;
// // // // //         function buildAndInject() {
// // // // //             let sceneContainer = document.getElementById("ar-scene-container");
// // // // //             if (!sceneContainer) {
// // // // //                 sceneContainer = document.createElement("div");
// // // // //                 sceneContainer.id = "ar-scene-container";
// // // // //                 sceneContainer.style.position = "absolute";
// // // // //                 sceneContainer.style.inset = "0";
// // // // //                 sceneContainer.style.width = "100%";
// // // // //                 sceneContainer.style.height = "100%";
// // // // //                 sceneContainer.style.zIndex = "10";
// // // // //                 arStage.insertBefore(sceneContainer, arStage.firstChild);
// // // // //             }
// // // // //             let assetsHTML = "";
// // // // //             let targetsHTML = "";
// // // // //             TARGET_MEMBERS.forEach((memberId, index) => {
// // // // //                 const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
// // // // //                 const videoSrc = (member && member.videoUrl) ? member.videoUrl : AR_CONFIG.DEFAULT_VIDEO;
                
// // // // //                 assetsHTML += `<video id="video_${memberId}" src="${videoSrc}" preload="auto" loop="true" playsinline webkit-playsinline crossorigin="anonymous"></video>\n`;
                
// // // // //                 // Set width="3" and height="3" so the video fully covers the coaster marker.
// // // // //                 targetsHTML += `
// // // // //                     <a-entity mindar-image-target="targetIndex: ${index}" class="ar-marker" data-member-id="${memberId}">
// // // // //                         <a-video src="#video_${memberId}" position="0 0 0" height="3" width="3" rotation="0 0 0"></a-video>
// // // // //                     </a-entity>\n`;
// // // // //             });
// // // // //             sceneContainer.innerHTML = `
// // // // //                 <a-scene mindar-image="imageTargetSrc: ${AR_CONFIG.MARKER_MIND_URL};" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
// // // // //                     <a-assets timeout="10000">
// // // // //                         ${assetsHTML}
// // // // //                     </a-assets>
// // // // //                     <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
// // // // //                     ${targetsHTML}
// // // // //                 </a-scene>
// // // // //             `;
            
// // // // //             const scanningOverlay = document.getElementById("ar-scanning-overlay");
// // // // //             const matchedLayer = document.getElementById("ar-matched-layer");
// // // // //             const playingUi = document.getElementById("ar-playing-ui");
// // // // //             const skipBtns = document.querySelectorAll("a.button-secondary, #ar-skip-btn");
// // // // //             const muteBtn = document.getElementById("ar-mute-btn");
// // // // //             let activeVideo = null;
// // // // //             let matchTimeout = null;

// // // // //             if (muteBtn) {
// // // // //                 muteBtn.addEventListener("click", () => {
// // // // //                     if (activeVideo) {
// // // // //                         activeVideo.muted = !activeVideo.muted;
// // // // //                         muteBtn.textContent = activeVideo.muted ? "UNMUTE" : "MUTE";
// // // // //                     }
// // // // //                 });
// // // // //             }

// // // // //             const markers = sceneContainer.querySelectorAll(".ar-marker");
// // // // //             markers.forEach(marker => {
// // // // //                 marker.addEventListener("targetFound", () => {
// // // // //                     const memberId = marker.getAttribute("data-member-id");
// // // // //                     const member = typeof window.getCircuitMember === "function" ? window.getCircuitMember(memberId) : null;
// // // // //                     const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
// // // // //                     track("ar_target_found", { memberId });
// // // // //                     activeVideo = video;
                    
// // // // //                     if (member) {
// // // // //                         const href = `https://amit123.onrender.com/member.html?id=${encodeURIComponent(member.id)}&source=ar`;
// // // // //                         skipBtns.forEach(btn => btn.href = href);
// // // // //                     }

// // // // //                     if (scanningOverlay) scanningOverlay.classList.add("hidden");
// // // // //                     if (matchedLayer) matchedLayer.classList.add("visible");
                    
// // // // //                     if (video) {
// // // // //                         video.muted = false; 
// // // // //                         if (muteBtn) muteBtn.textContent = "MUTE";
// // // // //                         video.currentTime = 0;
// // // // //                         video.play().catch(err => track("ar_video_play_blocked", { error: String(err) }));
// // // // //                     }

// // // // //                     clearTimeout(matchTimeout);
// // // // //                     matchTimeout = setTimeout(() => {
// // // // //                         if (matchedLayer) matchedLayer.classList.remove("visible");
// // // // //                         if (playingUi) playingUi.classList.add("visible");
// // // // //                     }, 2500);
// // // // //                 });
// // // // //                 marker.addEventListener("targetLost", () => {
// // // // //                     const memberId = marker.getAttribute("data-member-id");
// // // // //                     const video = sceneContainer.querySelector(`#video_${memberId}`);
                    
// // // // //                     track("ar_target_lost", { memberId });
// // // // //                     if (video) video.pause();
// // // // //                     activeVideo = null;
                    
// // // // //                     clearTimeout(matchTimeout);
// // // // //                     if (matchedLayer) matchedLayer.classList.remove("visible");
// // // // //                     if (playingUi) playingUi.classList.remove("visible");
// // // // //                     if (scanningOverlay) scanningOverlay.classList.remove("hidden");
// // // // //                 });
// // // // //             });
// // // // //         }
// // // // //         function startAr() {
// // // // //             if (sceneStarted) return;
// // // // //             sceneStarted = true;
// // // // //             if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
// // // // //                 if (statusText) statusText.innerText = "Your browser doesn't support camera access.";
// // // // //                 sceneStarted = false;
// // // // //                 return;
// // // // //             }
// // // // //             track("ar_activate_tap");
// // // // //             if (statusText) statusText.innerText = "Requesting camera access…";
// // // // //             activateScreen.hidden = true;
// // // // //             arStage.hidden = false;
// // // // //             buildAndInject();
// // // // //         }
// // // // //         function stopAr() {
// // // // //             track("ar_scan_cancelled");
// // // // //             window.location.href = window.location.pathname + window.location.search;
// // // // //         }
// // // // //         activateBtn.addEventListener("click", startAr);
// // // // //         const backBtn = document.getElementById("ar-back-btn");
// // // // //         if (backBtn) backBtn.addEventListener("click", stopAr);
// // // // //     }
// // // // // });

// // // // (function () {
// // // //   var APPROVED_HOSTS = ["circuits.labdox.com", "labdox.com", "learn.labdox.com", "drive.google.com"];
// // // //   var APPROVED_KEYWORDS = ["amit", "circuits", "labdox"];
// // // //   var startCamera = document.getElementById("startCamera");
// // // //   var cameraStage = document.getElementById("cameraStage");
// // // //   var cameraFeed = document.getElementById("cameraFeed");
// // // //   var closeCamera = document.getElementById("closeCamera");
// // // //   var statusTitle = document.getElementById("statusTitle");
// // // //   var statusCopy = document.getElementById("statusCopy");
// // // //   var scanProgress = document.getElementById("scanProgress");
// // // //   var videoLayer = document.getElementById("videoLayer");
// // // //   var arVideo = document.getElementById("arVideo");
// // // //   var afterActions = document.getElementById("afterActions");
// // // //   var muteVideo = document.getElementById("muteVideo");
// // // //   var skipWebsite = document.getElementById("skipWebsite");
// // // //   var stream = null;
// // // //   var detectionTimer = null;
// // // //   var detector = null;
// // // //   var stableValue = "";
// // // //   var stableCount = 0;

// // // //   function track(eventName, params) {
// // // //     if (window.gtag) window.gtag("event", eventName, params || {});
// // // //   }
// // // //   function normalizeQrValue(value) {
// // // //     value = String(value || "").trim();
// // // //     if (!value) return "";
// // // //     try {
// // // //       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
// // // //       return url.origin + url.pathname.replace(/\/$/, "");
// // // //     } catch (error) {
// // // //       return value.replace(/\/$/, "");
// // // //     }
// // // //   }
// // // //   function isApprovedQr(value) {
// // // //     value = String(value || "").trim();
// // // //     if (!value) return false;
// // // //     var lowerValue = value.toLowerCase();
// // // //     try {
// // // //       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
// // // //       var host = url.hostname.replace(/^www\./, "").toLowerCase();
// // // //       if (APPROVED_HOSTS.indexOf(host) !== -1 || host.endsWith(".labdox.com")) return true;
// // // //       return /^https?:\/\//i.test(value);
// // // //     } catch (error) {
// // // //       return APPROVED_KEYWORDS.some(function (keyword) { return lowerValue.indexOf(keyword) !== -1; });
// // // //     }
// // // //   }
// // // //   function stopCamera() {
// // // //     if (detectionTimer) window.clearInterval(detectionTimer);
// // // //     detectionTimer = null;
// // // //     stableValue = "";
// // // //     stableCount = 0;
// // // //     scanProgress.style.width = "0%";
// // // //     if (stream) {
// // // //       stream.getTracks().forEach(function (track) { track.stop(); });
// // // //       stream = null;
// // // //     }
// // // //     cameraStage.classList.remove("is-active");
// // // //   }
// // // //   function launchVideo(triggerValue) {
// // // //     stopCamera();
// // // //     videoLayer.classList.add("is-active");
// // // //     afterActions.classList.add("is-visible");
// // // //     arVideo.currentTime = 0;
// // // //     arVideo.muted = false;
// // // //     updateMuteButton();
// // // //     var playPromise = arVideo.play();
// // // //     if (playPromise && playPromise.catch) {
// // // //       playPromise.catch(function () {
// // // //         arVideo.muted = true;
// // // //         updateMuteButton();
// // // //         arVideo.play().catch(function () {});
// // // //       });
// // // //     }
// // // //     track("ar_qr_video_started", { video_name: "all_circuits_ar_promo", qr_value: normalizeQrValue(triggerValue) });
// // // //   }
// // // //   function updateMuteButton() {
// // // //     muteVideo.textContent = arVideo.muted ? "Unmute" : "Mute";
// // // //   }
// // // //   function goToWebsite(reason, delay) {
// // // //     track("ar_qr_website_opened", { source: reason || "video_action" });
// // // //     window.setTimeout(function () {
// // // //       window.location.href = "index.html"; // "SKIP TO WEBSITE" દબાવતા આ પેજ પર જશે
// // // //     }, delay || 0);
// // // //   }
// // // //   function openWebsiteAfterVideo() {
// // // //     track("ar_qr_video_completed", { video_name: "all_circuits_ar_promo", next_step: "auto_open_website" });
// // // //     goToWebsite("video_completed", 700);
// // // //   }
// // // //   async function detectQrFrame() {
// // // //     if (!detector || !cameraFeed.videoWidth) return;
// // // //     try {
// // // //       var codes = await detector.detect(cameraFeed);
// // // //       if (!codes || !codes.length) {
// // // //         stableValue = "";
// // // //         stableCount = 0;
// // // //         scanProgress.style.width = "20%";
// // // //         statusTitle.textContent = "Scanning QR...";
// // // //         statusCopy.textContent = "Coaster ya presentation ka existing QR square frame mein lao.";
// // // //         return;
// // // //       }
// // // //       var approved = codes.find(function (code) { return isApprovedQr(code.rawValue); });
// // // //       if (!approved) {
// // // //         stableValue = "";
// // // //         stableCount = 0;
// // // //         scanProgress.style.width = "45%";
// // // //         statusTitle.textContent = "QR Found, Not Supported";
// // // //         statusCopy.textContent = "Yeh readable web/event QR nahi lag raha. Coaster ya slide ka QR scan karo.";
// // // //         return;
// // // //       }
// // // //       var value = normalizeQrValue(approved.rawValue);
// // // //       if (stableValue === value) stableCount += 1;
// // // //       else {
// // // //         stableValue = value;
// // // //         stableCount = 1;
// // // //       }
// // // //       scanProgress.style.width = stableCount >= 2 ? "100%" : "78%";
// // // //       statusTitle.textContent = "Circuit QR Matched";
// // // //       statusCopy.textContent = "Magic start ho raha hai...";
// // // //       if (stableCount >= 2) {
// // // //         track("ar_qr_trigger_matched", { qr_value: value });
// // // //         launchVideo(approved.rawValue);
// // // //       }
// // // //     } catch (error) {
// // // //       statusTitle.textContent = "Scanner Warming Up";
// // // //       statusCopy.textContent = "Camera ko QR par steady rakho. Agar issue aaye toh Chrome update/open karo.";
// // // //     }
// // // //   }
// // // //   function startDetection() {
// // // //     if (detectionTimer) window.clearInterval(detectionTimer);
// // // //     scanProgress.style.width = "12%";
// // // //     statusTitle.textContent = "Circuit QR Detector";
// // // //     statusCopy.textContent = "Existing coaster/slide QR ko square frame mein lao. QR match hote hi video start hoga.";
// // // //     detectionTimer = window.setInterval(detectQrFrame, 300);
// // // //   }
// // // //   async function setupDetector() {
// // // //     if (!("BarcodeDetector" in window)) {
// // // //       statusTitle.textContent = "QR Detector Not Supported";
// // // //       statusCopy.textContent = "Is phone/browser mein built-in QR detector available nahi hai. Android Chrome latest version use karo.";
// // // //       throw new Error("BarcodeDetector unavailable");
// // // //     }
// // // //     var formats = [];
// // // //     if (window.BarcodeDetector.getSupportedFormats) {
// // // //       formats = await window.BarcodeDetector.getSupportedFormats();
// // // //     }
// // // //     if (formats.length && formats.indexOf("qr_code") === -1) {
// // // //       statusTitle.textContent = "QR Detector Not Supported";
// // // //       statusCopy.textContent = "Browser QR detection support nahi de raha. Android Chrome latest version use karo.";
// // // //       throw new Error("QR format unavailable");
// // // //     }
// // // //     detector = new BarcodeDetector({ formats: ["qr_code"] });
// // // //   }
// // // //   async function openCamera() {
// // // //     cameraStage.classList.add("is-active");
// // // //     try {
// // // //       await setupDetector();
// // // //       stream = await navigator.mediaDevices.getUserMedia({
// // // //         video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 1280 } },
// // // //         audio: false
// // // //       });
// // // //       cameraFeed.srcObject = stream;
// // // //       await cameraFeed.play();
// // // //       track("ar_qr_camera_started");
// // // //       startDetection();
// // // //     } catch (error) {
// // // //       if (stream) stopCamera();
// // // //       cameraStage.classList.add("is-active");
// // // //       track("ar_qr_camera_error", { error_name: error && error.name ? error.name : "unknown" });
// // // //     }
// // // //   }
// // // //   startCamera.addEventListener("click", openCamera);
// // // //   closeCamera.addEventListener("click", stopCamera);
// // // //   arVideo.addEventListener("ended", function () {
// // // //     openWebsiteAfterVideo();
// // // //   });
// // // //   muteVideo.addEventListener("click", function () {
// // // //     arVideo.muted = !arVideo.muted;
// // // //     updateMuteButton();
// // // //     track("ar_qr_video_mute_toggled", { muted: arVideo.muted });
// // // //   });
// // // //   skipWebsite.addEventListener("click", function () {
// // // //     arVideo.pause();
// // // //     goToWebsite("video_skipped", 0);
// // // //   });
// // // //   document.addEventListener("visibilitychange", function () {
// // // //     if (document.hidden) stopCamera();
// // // //   });
// // // // }());

// // // document.addEventListener("DOMContentLoaded", function () {
// // //   var APPROVED_HOSTS = ["circuits.labdox.com", "labdox.com", "learn.labdox.com", "drive.google.com", "amit123.onrender.com"];
// // //   var APPROVED_KEYWORDS = ["amit", "circuits", "labdox"];
  
// // //   var startCamera = document.getElementById("startCamera");
// // //   var cameraStage = document.getElementById("cameraStage");
// // //   var cameraFeed = document.getElementById("cameraFeed");
// // //   var closeCamera = document.getElementById("closeCamera");
// // //   var statusTitle = document.getElementById("statusTitle");
// // //   var statusCopy = document.getElementById("statusCopy");
// // //   var scanProgress = document.getElementById("scanProgress");
// // //   var videoLayer = document.getElementById("videoLayer");
// // //   var arVideo = document.getElementById("arVideo");
// // //   var afterActions = document.getElementById("afterActions");
// // //   var muteVideo = document.getElementById("muteVideo");
// // //   var skipWebsite = document.getElementById("skipWebsite");
  
// // //   var stream = null;
// // //   var detectionTimer = null;
// // //   var detector = null;
// // //   var stableValue = "";
// // //   var stableCount = 0;

// // //   // જો HTML માં ટેગ્સ ના મળે તો ચેતવણી આપો (એરર નહિ આવે)
// // //   if (!startCamera || !arVideo) {
// // //       console.error("Required DOM elements not found. Please ensure you updated index.html with the new code containing id='startCamera' and id='arVideo'.");
// // //       return;
// // //   }

// // //   function track(eventName, params) {
// // //     if (window.gtag) window.gtag("event", eventName, params || {});
// // //   }
  
// // //   function normalizeQrValue(value) {
// // //     value = String(value || "").trim();
// // //     if (!value) return "";
// // //     try {
// // //       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
// // //       return url.origin + url.pathname.replace(/\/$/, "");
// // //     } catch (error) {
// // //       return value.replace(/\/$/, "");
// // //     }
// // //   }
  
// // //   function isApprovedQr(value) {
// // //     value = String(value || "").trim();
// // //     if (!value) return false;
// // //     var lowerValue = value.toLowerCase();
// // //     try {
// // //       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
// // //       var host = url.hostname.replace(/^www\./, "").toLowerCase();
// // //       if (APPROVED_HOSTS.indexOf(host) !== -1 || host.endsWith(".labdox.com")) return true;
// // //       return /^https?:\/\//i.test(value);
// // //     } catch (error) {
// // //       return APPROVED_KEYWORDS.some(function (keyword) { return lowerValue.indexOf(keyword) !== -1; });
// // //     }
// // //   }
  
// // //   function stopCamera() {
// // //     if (detectionTimer) window.clearInterval(detectionTimer);
// // //     detectionTimer = null;
// // //     stableValue = "";
// // //     stableCount = 0;
// // //     if (scanProgress) scanProgress.style.width = "0%";
// // //     if (stream) {
// // //       stream.getTracks().forEach(function (track) { track.stop(); });
// // //       stream = null;
// // //     }
// // //     if (cameraStage) cameraStage.classList.remove("is-active");
// // //   }
  
// // //   function launchVideo(triggerValue) {
// // //     stopCamera();
// // //     if (videoLayer) videoLayer.classList.add("is-active");
// // //     if (afterActions) afterActions.classList.add("is-visible");
// // //     arVideo.currentTime = 0;
// // //     arVideo.muted = false;
// // //     updateMuteButton();
// // //     var playPromise = arVideo.play();
// // //     if (playPromise && playPromise.catch) {
// // //       playPromise.catch(function () {
// // //         arVideo.muted = true;
// // //         updateMuteButton();
// // //         arVideo.play().catch(function () {});
// // //       });
// // //     }
// // //     track("ar_qr_video_started", { video_name: "all_circuits_ar_promo", qr_value: normalizeQrValue(triggerValue) });
// // //   }
  
// // //   function updateMuteButton() {
// // //     if (muteVideo) muteVideo.textContent = arVideo.muted ? "Unmute" : "Mute";
// // //   }
  
// // //   function goToWebsite(reason, delay) {
// // //     track("ar_qr_website_opened", { source: reason || "video_action" });
// // //     window.setTimeout(function () {
// // //       // અહી સાચી લિંક મૂકી છે જે તમે માંગી હતી
// // //       window.location.href = "https://amit123.onrender.com"; 
// // //     }, delay || 0);
// // //   }
  
// // //   function openWebsiteAfterVideo() {
// // //     track("ar_qr_video_completed", { video_name: "all_circuits_ar_promo", next_step: "auto_open_website" });
// // //     goToWebsite("video_completed", 700);
// // //   }
  
// // //   async function detectQrFrame() {
// // //     if (!detector || !cameraFeed || !cameraFeed.videoWidth) return;
// // //     try {
// // //       var codes = await detector.detect(cameraFeed);
// // //       if (!codes || !codes.length) {
// // //         stableValue = "";
// // //         stableCount = 0;
// // //         if (scanProgress) scanProgress.style.width = "20%";
// // //         if (statusTitle) statusTitle.textContent = "Scanning QR...";
// // //         if (statusCopy) statusCopy.textContent = "Coaster ya presentation ka existing QR square frame mein lao.";
// // //         return;
// // //       }
// // //       var approved = codes.find(function (code) { return isApprovedQr(code.rawValue); });
// // //       if (!approved) {
// // //         stableValue = "";
// // //         stableCount = 0;
// // //         if (scanProgress) scanProgress.style.width = "45%";
// // //         if (statusTitle) statusTitle.textContent = "QR Found, Not Supported";
// // //         if (statusCopy) statusCopy.textContent = "Yeh readable web/event QR nahi lag raha. Coaster ya slide ka QR scan karo.";
// // //         return;
// // //       }
// // //       var value = normalizeQrValue(approved.rawValue);
// // //       if (stableValue === value) stableCount += 1;
// // //       else {
// // //         stableValue = value;
// // //         stableCount = 1;
// // //       }
// // //       if (scanProgress) scanProgress.style.width = stableCount >= 2 ? "100%" : "78%";
// // //       if (statusTitle) statusTitle.textContent = "Circuit QR Matched";
// // //       if (statusCopy) statusCopy.textContent = "Magic start ho raha hai...";
// // //       if (stableCount >= 2) {
// // //         track("ar_qr_trigger_matched", { qr_value: value });
// // //         launchVideo(approved.rawValue);
// // //       }
// // //     } catch (error) {
// // //       if (statusTitle) statusTitle.textContent = "Scanner Warming Up";
// // //       if (statusCopy) statusCopy.textContent = "Camera ko QR par steady rakho. Agar issue aaye toh Chrome update/open karo.";
// // //     }
// // //   }
  
// // //   function startDetection() {
// // //     if (detectionTimer) window.clearInterval(detectionTimer);
// // //     if (scanProgress) scanProgress.style.width = "12%";
// // //     if (statusTitle) statusTitle.textContent = "Circuit QR Detector";
// // //     if (statusCopy) statusCopy.textContent = "Existing coaster/slide QR ko square frame mein lao. QR match hote hi video start hoga.";
// // //     detectionTimer = window.setInterval(detectQrFrame, 300);
// // //   }
  
// // //   async function setupDetector() {
// // //     if (!("BarcodeDetector" in window)) {
// // //       if (statusTitle) statusTitle.textContent = "QR Detector Not Supported";
// // //       if (statusCopy) statusCopy.textContent = "Is phone/browser mein built-in QR detector available nahi hai. Android Chrome latest version use karo.";
// // //       throw new Error("BarcodeDetector unavailable");
// // //     }
// // //     var formats = [];
// // //     if (window.BarcodeDetector.getSupportedFormats) {
// // //       formats = await window.BarcodeDetector.getSupportedFormats();
// // //     }
// // //     if (formats.length && formats.indexOf("qr_code") === -1) {
// // //       if (statusTitle) statusTitle.textContent = "QR Detector Not Supported";
// // //       if (statusCopy) statusCopy.textContent = "Browser QR detection support nahi de raha. Android Chrome latest version use karo.";
// // //       throw new Error("QR format unavailable");
// // //     }
// // //     detector = new BarcodeDetector({ formats: ["qr_code"] });
// // //   }
  
// // //   async function openCamera() {
// // //     if (cameraStage) cameraStage.classList.add("is-active");
// // //     try {
// // //       await setupDetector();
// // //       stream = await navigator.mediaDevices.getUserMedia({
// // //         video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 1280 } },
// // //         audio: false
// // //       });
// // //       if (cameraFeed) {
// // //           cameraFeed.srcObject = stream;
// // //           await cameraFeed.play();
// // //       }
// // //       track("ar_qr_camera_started");
// // //       startDetection();
// // //     } catch (error) {
// // //       if (stream) stopCamera();
// // //       if (cameraStage) cameraStage.classList.add("is-active");
// // //       track("ar_qr_camera_error", { error_name: error && error.name ? error.name : "unknown" });
// // //     }
// // //   }
  
// // //   // Event Listeners જોડીએ છીએ
// // //   if (startCamera) startCamera.addEventListener("click", openCamera);
// // //   if (closeCamera) closeCamera.addEventListener("click", stopCamera);
  
// // //   if (arVideo) {
// // //       arVideo.addEventListener("ended", function () {
// // //         openWebsiteAfterVideo();
// // //       });
// // //   }
  
// // //   if (muteVideo) {
// // //       muteVideo.addEventListener("click", function () {
// // //         if (!arVideo) return;
// // //         arVideo.muted = !arVideo.muted;
// // //         updateMuteButton();
// // //         track("ar_qr_video_mute_toggled", { muted: arVideo.muted });
// // //       });
// // //   }
  
// // //   if (skipWebsite) {
// // //       skipWebsite.addEventListener("click", function () {
// // //         if (arVideo) arVideo.pause();
// // //         goToWebsite("video_skipped", 0);
// // //       });
// // //   }
  
// // //   document.addEventListener("visibilitychange", function () {
// // //     if (document.hidden) stopCamera();
// // //   });

// // // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   // Approved keywords to detect in the QR code
// //   var APPROVED_HOSTS = ["circuits.labdox.com", "labdox.com", "learn.labdox.com", "drive.google.com", "amit123.onrender.com"];
// //   var APPROVED_KEYWORDS = ["amit", "circuits", "labdox"];
  
// //   // DOM Elements
// //   var startCamera = document.getElementById("startCamera");
// //   var cameraStage = document.getElementById("cameraStage");
// //   var cameraFeed = document.getElementById("cameraFeed");
// //   var closeCamera = document.getElementById("closeCamera");
// //   var statusTitle = document.getElementById("statusTitle");
// //   var statusCopy = document.getElementById("statusCopy");
// //   var scanProgress = document.getElementById("scanProgress");
// //   var videoLayer = document.getElementById("videoLayer");
// //   var arVideo = document.getElementById("arVideo");
// //   var afterActions = document.getElementById("afterActions");
// //   var muteVideo = document.getElementById("muteVideo");
// //   var skipWebsite = document.getElementById("skipWebsite");
  
// //   var stream = null;
// //   var detectionTimer = null;
// //   var detector = null;
// //   var stableValue = "";
// //   var stableCount = 0;

// //   // Security check to avoid null errors
// //   if (!startCamera || !arVideo) {
// //       console.error("Required DOM elements not found. Please ensure you updated index.html with the new code containing id='startCamera' and id='arVideo'.");
// //       return;
// //   }

// //   function track(eventName, params) {
// //     if (window.gtag) window.gtag("event", eventName, params || {});
// //   }
  
// //   function normalizeQrValue(value) {
// //     value = String(value || "").trim();
// //     if (!value) return "";
// //     try {
// //       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
// //       return url.origin + url.pathname.replace(/\/$/, "");
// //     } catch (error) {
// //       return value.replace(/\/$/, "");
// //     }
// //   }
  
// //   function isApprovedQr(value) {
// //     value = String(value || "").trim();
// //     if (!value) return false;
// //     var lowerValue = value.toLowerCase();
// //     try {
// //       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
// //       var host = url.hostname.replace(/^www\./, "").toLowerCase();
// //       if (APPROVED_HOSTS.indexOf(host) !== -1 || host.endsWith(".labdox.com")) return true;
// //       return /^https?:\/\//i.test(value);
// //     } catch (error) {
// //       return APPROVED_KEYWORDS.some(function (keyword) { return lowerValue.indexOf(keyword) !== -1; });
// //     }
// //   }
  
// //   function stopCamera() {
// //     if (detectionTimer) window.clearInterval(detectionTimer);
// //     detectionTimer = null;
// //     stableValue = "";
// //     stableCount = 0;
// //     if (scanProgress) scanProgress.style.width = "0%";
    
// //     // Stop camera streams
// //     if (stream) {
// //       stream.getTracks().forEach(function (track) { track.stop(); });
// //       stream = null;
// //     }
// //     if (cameraStage) cameraStage.classList.remove("is-active");
// //   }
  
// //   function launchVideo(triggerValue) {
// //     stopCamera();
// //     if (videoLayer) videoLayer.classList.add("is-active");
// //     if (afterActions) afterActions.classList.add("is-visible");
// //     arVideo.currentTime = 0;
// //     arVideo.muted = false;
// //     updateMuteButton();
    
// //     // Play video
// //     var playPromise = arVideo.play();
// //     if (playPromise && playPromise.catch) {
// //       playPromise.catch(function () {
// //         arVideo.muted = true;
// //         updateMuteButton();
// //         arVideo.play().catch(function () {});
// //       });
// //     }
// //     track("ar_qr_video_started", { video_name: "all_circuits_ar_promo", qr_value: normalizeQrValue(triggerValue) });
// //   }
  
// //   function updateMuteButton() {
// //     if (muteVideo) muteVideo.textContent = arVideo.muted ? "Unmute" : "Mute";
// //   }
  
// //   // Navigation function
// //   function goToWebsite(reason, delay) {
// //     track("ar_qr_website_opened", { source: reason || "video_action" });
// //     window.setTimeout(function () {
// //       // Redirects exactly to the requested URL
// //       window.location.href = "https://amit123.onrender.com"; 
// //     }, delay || 0);
// //   }
  
// //   function openWebsiteAfterVideo() {
// //     track("ar_qr_video_completed", { video_name: "all_circuits_ar_promo", next_step: "auto_open_website" });
// //     goToWebsite("video_completed", 700);
// //   }
  
// //   async function detectQrFrame() {
// //     if (!detector || !cameraFeed || !cameraFeed.videoWidth) return;
// //     try {
// //       var codes = await detector.detect(cameraFeed);
// //       if (!codes || !codes.length) {
// //         stableValue = "";
// //         stableCount = 0;
// //         if (scanProgress) scanProgress.style.width = "20%";
// //         if (statusTitle) statusTitle.textContent = "Scanning QR...";
// //         if (statusCopy) statusCopy.textContent = "Coaster ya presentation ka existing QR square frame mein lao.";
// //         return;
// //       }
// //       var approved = codes.find(function (code) { return isApprovedQr(code.rawValue); });
// //       if (!approved) {
// //         stableValue = "";
// //         stableCount = 0;
// //         if (scanProgress) scanProgress.style.width = "45%";
// //         if (statusTitle) statusTitle.textContent = "QR Found, Not Supported";
// //         if (statusCopy) statusCopy.textContent = "Yeh readable web/event QR nahi lag raha. Coaster ya slide ka QR scan karo.";
// //         return;
// //       }
// //       var value = normalizeQrValue(approved.rawValue);
// //       if (stableValue === value) stableCount += 1;
// //       else {
// //         stableValue = value;
// //         stableCount = 1;
// //       }
      
// //       if (scanProgress) scanProgress.style.width = stableCount >= 2 ? "100%" : "78%";
// //       if (statusTitle) statusTitle.textContent = "Circuit QR Matched";
// //       if (statusCopy) statusCopy.textContent = "Magic start ho raha hai...";
      
// //       // Trigger the video if QR is stable
// //       if (stableCount >= 2) {
// //         track("ar_qr_trigger_matched", { qr_value: value });
// //         launchVideo(approved.rawValue);
// //       }
// //     } catch (error) {
// //       if (statusTitle) statusTitle.textContent = "Scanner Warming Up";
// //       if (statusCopy) statusCopy.textContent = "Camera ko QR par steady rakho. Agar issue aaye toh Chrome update/open karo.";
// //     }
// //   }
  
// //   function startDetection() {
// //     if (detectionTimer) window.clearInterval(detectionTimer);
// //     if (scanProgress) scanProgress.style.width = "12%";
// //     if (statusTitle) statusTitle.textContent = "Circuit QR Detector";
// //     if (statusCopy) statusCopy.textContent = "Existing coaster/slide QR ko square frame mein lao. QR match hote hi video start hoga.";
// //     detectionTimer = window.setInterval(detectQrFrame, 300);
// //   }
  
// //   async function setupDetector() {
// //     if (!("BarcodeDetector" in window)) {
// //       if (statusTitle) statusTitle.textContent = "QR Detector Not Supported";
// //       if (statusCopy) statusCopy.textContent = "Is phone/browser mein built-in QR detector available nahi hai. Android Chrome latest version use karo.";
// //       throw new Error("BarcodeDetector unavailable");
// //     }
// //     var formats = [];
// //     if (window.BarcodeDetector.getSupportedFormats) {
// //       formats = await window.BarcodeDetector.getSupportedFormats();
// //     }
// //     if (formats.length && formats.indexOf("qr_code") === -1) {
// //       if (statusTitle) statusTitle.textContent = "QR Detector Not Supported";
// //       if (statusCopy) statusCopy.textContent = "Browser QR detection support nahi de raha. Android Chrome latest version use karo.";
// //       throw new Error("QR format unavailable");
// //     }
// //     detector = new BarcodeDetector({ formats: ["qr_code"] });
// //   }
  
// // //   async function openCamera() {
// // //     if (cameraStage) cameraStage.classList.add("is-active");
// // //     try {
// // //       await setupDetector();
// // //       stream = await navigator.mediaDevices.getUserMedia({
// // //         video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 1280 } },
// // //         audio: false
// // //       });
// // //       if (cameraFeed) {
// // //           cameraFeed.srcObject = stream;
// // //           await cameraFeed.play();
// // //       }
// // //       track("ar_qr_camera_started");
// // //       startDetection();
// // //     } catch (error) {
// // //       if (stream) stopCamera();
// // //       if (cameraStage) cameraStage.classList.add("is-active");
// // //       track("ar_qr_camera_error", { error_name: error && error.name ? error.name : "unknown" });
// // //     }
// // //   }
  
// //   async function openCamera() {
// //     if (cameraStage) cameraStage.classList.add("is-active");
// //     try {
// //       // 1. ASKS FOR CAMERA FIRST NOW
// //       stream = await navigator.mediaDevices.getUserMedia({
// //         video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 1280 } },
// //         audio: false
// //       });
// //       if (cameraFeed) {
// //           cameraFeed.srcObject = stream;
// //           await cameraFeed.play();
// //       }
// //       track("ar_qr_camera_started");

// //       // 2. THEN SETS UP SCANNER
// //       await setupDetector();
// //       startDetection();
// //     } catch (error) {
// //       if (stream) stopCamera();
// //       if (cameraStage) cameraStage.classList.add("is-active");
// //       track("ar_qr_camera_error", { error_name: error && error.name ? error.name : "unknown" });
// //     }
// //   }

// //   // Attach event listeners
// //   if (startCamera) startCamera.addEventListener("click", openCamera);
// //   if (closeCamera) closeCamera.addEventListener("click", stopCamera);
  
// //   if (arVideo) {
// //       arVideo.addEventListener("ended", function () {
// //         openWebsiteAfterVideo();
// //       });
// //   }
  
// //   if (muteVideo) {
// //       muteVideo.addEventListener("click", function () {
// //         if (!arVideo) return;
// //         arVideo.muted = !arVideo.muted;
// //         updateMuteButton();
// //         track("ar_qr_video_mute_toggled", { muted: arVideo.muted });
// //       });
// //   }
  
// //   if (skipWebsite) {
// //       skipWebsite.addEventListener("click", function () {
// //         if (arVideo) arVideo.pause();
// //         goToWebsite("video_skipped", 0);
// //       });
// //   }
  
// //   document.addEventListener("visibilitychange", function () {
// //     if (document.hidden) stopCamera();
// //   });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   var APPROVED_HOSTS = ["circuits.labdox.com", "labdox.com", "learn.labdox.com", "drive.google.com", "amit123.onrender.com"];
//   var APPROVED_KEYWORDS = ["amit", "circuits", "labdox"];
  
//   var startCamera = document.getElementById("startCamera");
//   var cameraStage = document.getElementById("cameraStage");
//   var cameraFeed = document.getElementById("cameraFeed");
//   var closeCamera = document.getElementById("closeCamera");
//   var statusTitle = document.getElementById("statusTitle");
//   var statusCopy = document.getElementById("statusCopy");
//   var scanProgress = document.getElementById("scanProgress");
//   var videoLayer = document.getElementById("videoLayer");
//   var arVideo = document.getElementById("arVideo");
//   var afterActions = document.getElementById("afterActions");
//   var muteVideo = document.getElementById("muteVideo");
//   var skipWebsite = document.getElementById("skipWebsite");
  
//   var stream = null;
//   var detectionTimer = null;
//   var detector = null;
//   var stableValue = "";
//   var stableCount = 0;

//   if (!startCamera || !arVideo) {
//       console.error("Required DOM elements not found.");
//       return;
//   }

//   function track(eventName, params) {
//     if (window.gtag) window.gtag("event", eventName, params || {});
//   }
  
//   function normalizeQrValue(value) {
//     value = String(value || "").trim();
//     if (!value) return "";
//     try {
//       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
//       return url.origin + url.pathname.replace(/\/$/, "");
//     } catch (error) {
//       return value.replace(/\/$/, "");
//     }
//   }
  
//   function isApprovedQr(value) {
//     value = String(value || "").trim();
//     if (!value) return false;
//     var lowerValue = value.toLowerCase();
//     try {
//       var url = new URL(value.indexOf("http") === 0 ? value : "https://" + value);
//       var host = url.hostname.replace(/^www\./, "").toLowerCase();
//       if (APPROVED_HOSTS.indexOf(host) !== -1 || host.endsWith(".labdox.com")) return true;
//       return /^https?:\/\//i.test(value);
//     } catch (error) {
//       return APPROVED_KEYWORDS.some(function (keyword) { return lowerValue.indexOf(keyword) !== -1; });
//     }
//   }
  
//   function stopCamera() {
//     if (detectionTimer) window.clearInterval(detectionTimer);
//     detectionTimer = null;
//     stableValue = "";
//     stableCount = 0;
//     if (scanProgress) scanProgress.style.width = "0%";
//     if (stream) {
//       stream.getTracks().forEach(function (track) { track.stop(); });
//       stream = null;
//     }
//     if (cameraStage) cameraStage.classList.remove("is-active");
//   }
  
//   function launchVideo(triggerValue) {
//     stopCamera();
//     if (videoLayer) videoLayer.classList.add("is-active");
//     if (afterActions) afterActions.classList.add("is-visible");
//     arVideo.currentTime = 0;
//     arVideo.muted = false;
//     updateMuteButton();
//     var playPromise = arVideo.play();
//     if (playPromise && playPromise.catch) {
//       playPromise.catch(function () {
//         arVideo.muted = true;
//         updateMuteButton();
//         arVideo.play().catch(function () {});
//       });
//     }
//     track("ar_qr_video_started", { video_name: "all_circuits_ar_promo", qr_value: normalizeQrValue(triggerValue) });
//   }
  
//   function updateMuteButton() {
//     if (muteVideo) muteVideo.textContent = arVideo.muted ? "Unmute" : "Mute";
//   }
  
//   function goToWebsite(reason, delay) {
//     track("ar_qr_website_opened", { source: reason || "video_action" });
//     window.setTimeout(function () {
//       window.location.href = "https://amit123.onrender.com"; 
//     }, delay || 0);
//   }
  
//   function openWebsiteAfterVideo() {
//     track("ar_qr_video_completed", { video_name: "all_circuits_ar_promo", next_step: "auto_open_website" });
//     goToWebsite("video_completed", 700);
//   }
  
//   async function detectQrFrame() {
//     if (!detector || !cameraFeed || !cameraFeed.videoWidth) return;
//     try {
//       var codes = await detector.detect(cameraFeed);
//       if (!codes || !codes.length) {
//         stableValue = "";
//         stableCount = 0;
//         if (scanProgress) scanProgress.style.width = "20%";
//         if (statusTitle) statusTitle.textContent = "Scanning QR...";
//         if (statusCopy) statusCopy.textContent = "Coaster ya presentation ka existing QR square frame mein lao.";
//         return;
//       }
//       var approved = codes.find(function (code) { return isApprovedQr(code.rawValue); });
//       if (!approved) {
//         stableValue = "";
//         stableCount = 0;
//         if (scanProgress) scanProgress.style.width = "45%";
//         if (statusTitle) statusTitle.textContent = "QR Found, Not Supported";
//         if (statusCopy) statusCopy.textContent = "Yeh readable web/event QR nahi lag raha. Coaster ya slide ka QR scan karo.";
//         return;
//       }
//       var value = normalizeQrValue(approved.rawValue);
//       if (stableValue === value) stableCount += 1;
//       else {
//         stableValue = value;
//         stableCount = 1;
//       }
//       if (scanProgress) scanProgress.style.width = stableCount >= 2 ? "100%" : "78%";
//       if (statusTitle) statusTitle.textContent = "Circuit QR Matched";
//       if (statusCopy) statusCopy.textContent = "Magic start ho raha hai...";
//       if (stableCount >= 2) {
//         track("ar_qr_trigger_matched", { qr_value: value });
//         launchVideo(approved.rawValue);
//       }
//     } catch (error) {
//       if (statusTitle) statusTitle.textContent = "Scanner Warming Up";
//       if (statusCopy) statusCopy.textContent = "Camera ko QR par steady rakho. Agar issue aaye toh Chrome update/open karo.";
//     }
//   }
  
//   function startDetection() {
//     if (detectionTimer) window.clearInterval(detectionTimer);
//     if (scanProgress) scanProgress.style.width = "12%";
//     if (statusTitle) statusTitle.textContent = "Circuit QR Detector";
//     if (statusCopy) statusCopy.textContent = "Existing coaster/slide QR ko square frame mein lao. QR match hote hi video start hoga.";
//     detectionTimer = window.setInterval(detectQrFrame, 300);
//   }
  
//   async function setupDetector() {
//     // MAGIC FALLBACK: If Desktop PC doesn't have BarcodeDetector, we inject jsQR automatically!
//     if (!("BarcodeDetector" in window)) {
//         if (statusTitle) statusTitle.textContent = "Loading Backup Scanner...";
//         if (statusCopy) statusCopy.textContent = "Setting up universal scanner for Desktop...";
        
//         await new Promise((resolve) => {
//             let script = document.createElement('script');
//             script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js";
//             script.onload = resolve;
//             document.head.appendChild(script);
//         });
        
//         // Mock BarcodeDetector using jsQR so the rest of the code works flawlessly
//         window.BarcodeDetector = class {
//             constructor() {}
//             async detect(videoEl) {
//                 if (!window.jsQR) return [];
//                 const canvas = document.createElement("canvas");
//                 canvas.width = videoEl.videoWidth;
//                 canvas.height = videoEl.videoHeight;
//                 const ctx = canvas.getContext("2d", { willReadFrequently: true });
//                 ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
//                 const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//                 const code = window.jsQR(imageData.data, imageData.width, imageData.height);
//                 if (code) {
//                     return [{ rawValue: code.data }];
//                 }
//                 return [];
//             }
//         };
//         window.BarcodeDetector.getSupportedFormats = async () => ["qr_code"];
//     }

//     // Now BarcodeDetector exists (either native or our mock)
//     var formats = [];
//     if (window.BarcodeDetector.getSupportedFormats) {
//       formats = await window.BarcodeDetector.getSupportedFormats();
//     }
//     detector = new BarcodeDetector({ formats: ["qr_code"] });
//   }
  
//   async function openCamera() {
//     if (cameraStage) cameraStage.classList.add("is-active");
//     try {
//       // 1. Open Camera First
//       stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 1280 } },
//         audio: false
//       });
//       if (cameraFeed) {
//           cameraFeed.srcObject = stream;
//           await cameraFeed.play();
//       }
//       track("ar_qr_camera_started");

//       // 2. Then setup scanner
//       await setupDetector();
//       startDetection();
//     } catch (error) {
//       if (stream) stopCamera();
//       if (cameraStage) cameraStage.classList.add("is-active");
//       track("ar_qr_camera_error", { error_name: error && error.name ? error.name : "unknown" });
//     }
//   }
  
//   if (startCamera) startCamera.addEventListener("click", openCamera);
//   if (closeCamera) closeCamera.addEventListener("click", stopCamera);
  
//   if (arVideo) {
//       arVideo.addEventListener("ended", function () {
//         openWebsiteAfterVideo();
//       });
//   }
  
//   if (muteVideo) {
//       muteVideo.addEventListener("click", function () {
//         if (!arVideo) return;
//         arVideo.muted = !arVideo.muted;
//         updateMuteButton();
//         track("ar_qr_video_mute_toggled", { muted: arVideo.muted });
//       });
//   }
  
//   if (skipWebsite) {
//       skipWebsite.addEventListener("click", function () {
//         if (arVideo) arVideo.pause();
//         goToWebsite("video_skipped", 0);
//       });
//   }
  
//   document.addEventListener("visibilitychange", function () {
//     if (document.hidden) stopCamera();
//   });
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