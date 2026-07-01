// // // // document.addEventListener("DOMContentLoaded",()=>{

// // // // const params=new URLSearchParams(location.search);

// // // // const id=params.get("id");

// // // // const member=window.getCircuitMember(id);

// // // // const video=document.getElementById("memberVideo");

// // // // const btn=document.getElementById("visitBtn");

// // // // if(!member){
// // // //     document.body.innerHTML="<h1>Member Not Found</h1>";
// // // //     return;
// // // // }

// // // // video.src=`assets/video/${member.id}.mp4`;

// // // // btn.href=`https://amit123.onrender.com/member.html?id=${member.id}`;

// // // // });

// // // // ─────────────────────────────────────────────────────────────────────────
// // // // Circuit AR — video player page
// // // // Reached right after a successful QR scan via player.html?id=<memberId>.
// // // // Plays that member's intro video, then offers a button to their microsite.
// // // // ─────────────────────────────────────────────────────────────────────────

// // // // The public microsite that "Visit Microsite" links out to.
// // // const MICROSITE_BASE = "https://amit123.onrender.com/member.html";

// // // document.addEventListener("DOMContentLoaded", () => {
// // //     const params = new URLSearchParams(location.search);
// // //     const id = params.get("id");
// // //     const member = id ? window.getCircuitMember(id) : null;

// // //     const playerPage = document.getElementById("player-page");
// // //     const notFound = document.getElementById("player-not-found");

// // //     if (!member) {
// // //         playerPage.hidden = true;
// // //         notFound.hidden = false;
// // //         return;
// // //     }

// // //     const video = document.getElementById("memberVideo");
// // //     const unmuteBtn = document.getElementById("unmuteBtn");
// // //     const nameEl = document.getElementById("player-name");
// // //     const introEl = document.getElementById("player-intro");
// // //     const visitBtn = document.getElementById("visitBtn");

// // //     document.title = `${member.name} — Circuit AR`;
// // //     nameEl.textContent = member.name;
// // //     introEl.textContent = member.shortIntro || member.category || "";

// // //     // Use a per-member videoUrl from data.js if present, otherwise fall
// // //     // back to the conventional assets/video/<id>.mp4 path.
// // //     video.src = member.videoUrl || `assets/video/${member.id}.mp4`;
// // //     if (member.videoPoster) video.poster = member.videoPoster;

// // //     // Mobile browsers often block autoplay-with-sound. Try unmuted first;
// // //     // if that's rejected, fall back to a muted autoplay with a tap-to-unmute
// // //     // prompt so the video still starts moving the instant the page opens.
// // //     video.play().catch(() => {
// // //         video.muted = true;
// // //         unmuteBtn.hidden = false;
// // //         video.play().catch(() => {
// // //             // Autoplay fully blocked — the visible native controls let the
// // //             // person press play manually, so we just leave it there.
// // //         });
// // //     });

// // //     unmuteBtn.addEventListener("click", () => {
// // //         video.muted = false;
// // //         unmuteBtn.hidden = true;
// // //     });

// // //     video.addEventListener("error", () => {
// // //         introEl.textContent = "Video unavailable right now — you can still visit the microsite below.";
// // //     });

// // //     visitBtn.href = `${MICROSITE_BASE}?id=${encodeURIComponent(member.id)}`;
// // //     visitBtn.textContent = `Visit ${member.name}'s Microsite →`;
// // // });

// // // // ─────────────────────────────────────────────────────────────────────────
// // // // Circuit AR — video player page
// // // // Reached right after a successful QR scan via player.html?id=<memberId>.
// // // // Plays that member's intro video, then offers a button to their microsite.
// // // // ─────────────────────────────────────────────────────────────────────────

// // // // // The public microsite that "Visit Microsite" links out to.
// // // // const MICROSITE_BASE = "https://amit123.onrender.com/member.html";

// // // // document.addEventListener("DOMContentLoaded", () => {
// // // //     const params = new URLSearchParams(location.search);
// // // //     const id = params.get("id");
// // // //     const member = id ? window.getCircuitMember(id) : null;

// // // //     const playerPage = document.getElementById("player-page");
// // // //     const notFound = document.getElementById("player-not-found");

// // // //     if (!member) {
// // // //         playerPage.hidden = true;
// // // //         notFound.hidden = false;
// // // //         return;
// // // //     }

// // // //     const video = document.getElementById("memberVideo");
// // // //     const unmuteBtn = document.getElementById("unmuteBtn");
// // // //     const nameEl = document.getElementById("player-name");
// // // //     const introEl = document.getElementById("player-intro");
// // // //     const visitBtn = document.getElementById("visitBtn");

// // // //     document.title = `${member.name} — Circuit AR`;
// // // //     nameEl.textContent = member.name;
// // // //     introEl.textContent = member.shortIntro || member.category || "";

// // // //     // Use a per-member videoUrl from data.js if present, otherwise fall
// // // //     // back to the conventional assets/video/<id>.mp4 path.
// // // //     video.src = member.videoUrl || `assets/video/${member.id}.mp4`;
// // // //     if (member.videoPoster) video.poster = member.videoPoster;

// // // //     // Mobile browsers often block autoplay-with-sound. Try unmuted first;
// // // //     // if that's rejected, fall back to a muted autoplay with a tap-to-unmute
// // // //     // prompt so the video still starts moving the instant the page opens.
// // // //     video.play().catch(() => {
// // // //         video.muted = true;
// // // //         unmuteBtn.hidden = false;
// // // //         video.play().catch(() => {
// // // //             // Autoplay fully blocked — the visible native controls let the
// // // //             // person press play manually, so we just leave it there.
// // // //         });
// // // //     });

// // // //     unmuteBtn.addEventListener("click", () => {
// // // //         video.muted = false;
// // // //         unmuteBtn.hidden = true;
// // // //     });

// // // //     video.addEventListener("error", () => {
// // // //         introEl.textContent = "Video unavailable right now — you can still visit the microsite below.";
// // // //     });

// // // //     visitBtn.href = `${MICROSITE_BASE}?id=${encodeURIComponent(member.id)}`;
// // // //     visitBtn.textContent = `Visit ${member.name}'s Microsite →`;
// // // // });

// // // ─────────────────────────────────────────────────────────────────────────
// // // Circuit AR — video player page
// // // Reached right after a successful QR scan via player.html?id=<memberId>.
// // // Plays that member's intro video, then offers a button to their microsite.
// // // ─────────────────────────────────────────────────────────────────────────

// // // The public microsite that "Visit Microsite" links out to.
// // const MICROSITE_BASE = "https://amit123.onrender.com/member.html";

// // document.addEventListener("DOMContentLoaded", () => {
// //     const params = new URLSearchParams(location.search);
// //     const id = params.get("id");
// //     const member = id ? window.getCircuitMember(id) : null;

// //     const playerPage = document.getElementById("player-page");
// //     const notFound = document.getElementById("player-not-found");

// //     if (!member) {
// //         playerPage.hidden = true;
// //         notFound.hidden = false;
// //         return;
// //     }

// //     const video = document.getElementById("memberVideo");
// //     const unmuteBtn = document.getElementById("unmuteBtn");
// //     const nameEl = document.getElementById("player-name");
// //     const introEl = document.getElementById("player-intro");
// //     const visitBtn = document.getElementById("visitBtn");

// //     document.title = `${member.name} — Circuit AR`;
// //     nameEl.textContent = member.name;
// //     introEl.textContent = member.shortIntro || member.category || "";

// //     // Use a per-member videoUrl from data.js if present, otherwise fall
// //     // back to the conventional assets/video/<id>.mp4 path.
// //     video.src = member.videoUrl || `assets/video/${member.id}.mp4`;
// //     if (member.videoPoster) video.poster = member.videoPoster;

// //     // Mobile browsers often block autoplay-with-sound. Try unmuted first;
// //     // if that's rejected, fall back to a muted autoplay with a tap-to-unmute
// //     // prompt so the video still starts moving the instant the page opens.
// //     video.play().catch(() => {
// //         video.muted = true;
// //         unmuteBtn.hidden = false;
// //         video.play().catch(() => {
// //             // Autoplay fully blocked — the visible native controls let the
// //             // person press play manually, so we just leave it there.
// //         });
// //     });

// //     unmuteBtn.addEventListener("click", () => {
// //         video.muted = false;
// //         unmuteBtn.hidden = true;
// //     });

// //     video.addEventListener("error", () => {
// //         introEl.textContent = "Video unavailable right now — you can still visit the microsite below.";
// //     });

// //     visitBtn.href = `${MICROSITE_BASE}?id=${encodeURIComponent(member.id)}`;
// //     visitBtn.textContent = `Visit ${member.name}'s Microsite →`;
// // });

// // ─────────────────────────────────────────────────────────────────────────
// // Circuit AR — video player page
// // Reached right after a successful QR scan via player.html?id=<memberId>.
// // Plays that member's intro video, then offers a button to their microsite.
// // ─────────────────────────────────────────────────────────────────────────

// // The public microsite that "Visit Microsite" links out to.
// const MICROSITE_BASE = "https://amit123.onrender.com/member.html";

// document.addEventListener("DOMContentLoaded", () => {
//     const params = new URLSearchParams(location.search);
//     const id = params.get("id");
    
//     // Safely check if getCircuitMember exists in data.js
//     const member = id && typeof window.getCircuitMember === "function" 
//         ? window.getCircuitMember(id) 
//         : null;

//     const playerPage = document.getElementById("player-page");
//     const notFound = document.getElementById("player-not-found");

//     // If ID is invalid, show "Member Not Found"
//     if (!member) {
//         if (playerPage) playerPage.hidden = true;
//         if (notFound) notFound.hidden = false;
//         return;
//     }

//     const video = document.getElementById("memberVideo");
//     const unmuteBtn = document.getElementById("unmuteBtn");
//     const nameEl = document.getElementById("player-name");
//     const introEl = document.getElementById("player-intro");
//     const visitBtn = document.getElementById("visitBtn");

//     document.title = `${member.name} — Circuit AR`;
//     if (nameEl) nameEl.textContent = member.name;
//     if (introEl) introEl.textContent = member.shortIntro || member.category || "";

//     // Configure the Visit Microsite button but hide it initially
//     if (visitBtn) {
//         visitBtn.href = `${MICROSITE_BASE}?id=${encodeURIComponent(member.id)}`;
//         visitBtn.textContent = `Visit ${member.name}'s Microsite →`;
        
//         // Hide button initially, fade in later
//         visitBtn.style.opacity = "0";
//         visitBtn.style.visibility = "hidden";
//         visitBtn.style.transition = "opacity 1.5s ease-in-out";
//     }

//     let buttonShown = false;
//     const showVisitButton = () => {
//         if (buttonShown || !visitBtn) return;
//         buttonShown = true;
//         visitBtn.style.visibility = "visible";
//         visitBtn.style.opacity = "1";
//     };

//     if (video) {
//         // Automatically load the correct video
//         video.src = member.videoUrl || `assets/video/${member.id}.mp4`;
//         if (member.videoPoster) video.poster = member.videoPoster;

//         // Mobile browsers often block autoplay-with-sound. Try unmuted first;
//         // if rejected, fall back to muted autoplay with a tap-to-unmute prompt.
//         video.play().catch(() => {
//             video.muted = true;
//             if (unmuteBtn) unmuteBtn.hidden = false;
//             video.play().catch(() => {
//                 // Autoplay fully blocked, native controls available.
//             });
//         });

//         if (unmuteBtn) {
//             unmuteBtn.addEventListener("click", () => {
//                 video.muted = false;
//                 unmuteBtn.hidden = true;
//             });
//         }

//         // Show "Visit Microsite" button after 2 seconds of video playback
//         video.addEventListener("timeupdate", () => {
//             if (video.currentTime > 2) {
//                 showVisitButton();
//             }
//         });
        
//         // Also show button if the video finishes playing
//         video.addEventListener("ended", showVisitButton);

//         // Fallback: If video file is missing, still show the button
//         video.addEventListener("error", () => {
//             showVisitButton();
//             if (introEl) introEl.textContent = "Video unavailable right now — you can still visit the microsite below.";
//         });
//     }

//     // Ultimate fallback: Just in case the video events get blocked entirely, 
//     // force the button to appear after 4 seconds so the user isn't stuck.
//     setTimeout(showVisitButton, 4000);
// });

// ─────────────────────────────────────────────────────────────────────────
// Circuit AR — video player page
// Reached right after a successful QR scan via player.html?id=<memberId>.
// ─────────────────────────────────────────────────────────────────────────

// The public microsite that "Visit Microsite" links out to.
const MICROSITE_BASE = "https://amit123.onrender.com/member.html";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    
    // Safely check if getCircuitMember exists in data.js
    const member = id && typeof window.getCircuitMember === "function" 
        ? window.getCircuitMember(id) 
        : null;

    const playerPage = document.getElementById("player-page");
    const notFound = document.getElementById("player-not-found");

    // If ID is invalid, show "Member Not Found"
    if (!member) {
        if (playerPage) playerPage.hidden = true;
        if (notFound) notFound.hidden = false;
        return;
    }

    const video = document.getElementById("memberVideo");
    const unmuteBtn = document.getElementById("unmuteBtn");
    const nameEl = document.getElementById("player-name");
    const introEl = document.getElementById("player-intro");
    const visitBtn = document.getElementById("visitBtn");

    document.title = `${member.name} — Circuit AR`;
    if (nameEl) nameEl.textContent = member.name;
    if (introEl) introEl.textContent = member.shortIntro || member.category || "";

    // Configure the Visit Microsite button but hide it initially
    if (visitBtn) {
        visitBtn.href = `${MICROSITE_BASE}?id=${encodeURIComponent(member.id)}`;
        visitBtn.textContent = `Visit ${member.name}'s Microsite →`;
        
        // Hide button initially, fade in later
        visitBtn.style.opacity = "0";
        visitBtn.style.visibility = "hidden";
        visitBtn.style.transition = "opacity 1.5s ease-in-out";
    }

    let buttonShown = false;
    const showVisitButton = () => {
        if (buttonShown || !visitBtn) return;
        buttonShown = true;
        visitBtn.style.visibility = "visible";
        visitBtn.style.opacity = "1";
    };

    if (video) {
        // ALWAYS load the promo video regardless of which member was scanned
        video.src = `assets/video/amit-ke-circuits-ar-promo.mp4`;

        // Mobile browsers often block autoplay-with-sound. Try unmuted first;
        // if rejected, fall back to muted autoplay with a tap-to-unmute prompt.
        video.play().catch(() => {
            video.muted = true;
            if (unmuteBtn) unmuteBtn.hidden = false;
            video.play().catch(() => {
                // Autoplay fully blocked, native controls available.
            });
        });

        if (unmuteBtn) {
            unmuteBtn.addEventListener("click", () => {
                video.muted = false;
                unmuteBtn.hidden = true;
            });
        }

        // Show "Visit Microsite" button after 2 seconds of video playback
        video.addEventListener("timeupdate", () => {
            if (video.currentTime > 2) {
                showVisitButton();
            }
        });
        
        // Also show button if the video finishes playing
        video.addEventListener("ended", showVisitButton);

        // Fallback: If video file is missing, still show the button
        video.addEventListener("error", () => {
            showVisitButton();
            if (introEl) introEl.textContent = "Video unavailable right now — you can still visit the microsite below.";
        });
    }

    // Ultimate fallback: Just in case the video events get blocked entirely, 
    // force the button to appear after 4 seconds so the user isn't stuck.
    setTimeout(showVisitButton, 4000);
});