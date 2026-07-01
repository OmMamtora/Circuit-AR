// // document.addEventListener("DOMContentLoaded",()=>{

// // const params=new URLSearchParams(location.search);

// // const id=params.get("id");

// // const member=window.getCircuitMember(id);

// // const video=document.getElementById("memberVideo");

// // const btn=document.getElementById("visitBtn");

// // if(!member){
// //     document.body.innerHTML="<h1>Member Not Found</h1>";
// //     return;
// // }

// // video.src=`assets/video/${member.id}.mp4`;

// // btn.href=`https://amit123.onrender.com/member.html?id=${member.id}`;

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
//     const member = id ? window.getCircuitMember(id) : null;

//     const playerPage = document.getElementById("player-page");
//     const notFound = document.getElementById("player-not-found");

//     if (!member) {
//         playerPage.hidden = true;
//         notFound.hidden = false;
//         return;
//     }

//     const video = document.getElementById("memberVideo");
//     const unmuteBtn = document.getElementById("unmuteBtn");
//     const nameEl = document.getElementById("player-name");
//     const introEl = document.getElementById("player-intro");
//     const visitBtn = document.getElementById("visitBtn");

//     document.title = `${member.name} — Circuit AR`;
//     nameEl.textContent = member.name;
//     introEl.textContent = member.shortIntro || member.category || "";

//     // Use a per-member videoUrl from data.js if present, otherwise fall
//     // back to the conventional assets/video/<id>.mp4 path.
//     video.src = member.videoUrl || `assets/video/${member.id}.mp4`;
//     if (member.videoPoster) video.poster = member.videoPoster;

//     // Mobile browsers often block autoplay-with-sound. Try unmuted first;
//     // if that's rejected, fall back to a muted autoplay with a tap-to-unmute
//     // prompt so the video still starts moving the instant the page opens.
//     video.play().catch(() => {
//         video.muted = true;
//         unmuteBtn.hidden = false;
//         video.play().catch(() => {
//             // Autoplay fully blocked — the visible native controls let the
//             // person press play manually, so we just leave it there.
//         });
//     });

//     unmuteBtn.addEventListener("click", () => {
//         video.muted = false;
//         unmuteBtn.hidden = true;
//     });

//     video.addEventListener("error", () => {
//         introEl.textContent = "Video unavailable right now — you can still visit the microsite below.";
//     });

//     visitBtn.href = `${MICROSITE_BASE}?id=${encodeURIComponent(member.id)}`;
//     visitBtn.textContent = `Visit ${member.name}'s Microsite →`;
// });

// ─────────────────────────────────────────────────────────────────────────
// Circuit AR — video player page
// Reached right after a successful QR scan via player.html?id=<memberId>.
// Plays that member's intro video, then offers a button to their microsite.
// ─────────────────────────────────────────────────────────────────────────

// The public microsite that "Visit Microsite" links out to.
const MICROSITE_BASE = "https://amit123.onrender.com/member.html";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const member = id ? window.getCircuitMember(id) : null;

    const playerPage = document.getElementById("player-page");
    const notFound = document.getElementById("player-not-found");

    if (!member) {
        playerPage.hidden = true;
        notFound.hidden = false;
        return;
    }

    const video = document.getElementById("memberVideo");
    const unmuteBtn = document.getElementById("unmuteBtn");
    const nameEl = document.getElementById("player-name");
    const introEl = document.getElementById("player-intro");
    const visitBtn = document.getElementById("visitBtn");

    document.title = `${member.name} — Circuit AR`;
    nameEl.textContent = member.name;
    introEl.textContent = member.shortIntro || member.category || "";

    // Use a per-member videoUrl from data.js if present, otherwise fall
    // back to the conventional assets/video/<id>.mp4 path.
    video.src = member.videoUrl || `assets/video/${member.id}.mp4`;
    if (member.videoPoster) video.poster = member.videoPoster;

    // Mobile browsers often block autoplay-with-sound. Try unmuted first;
    // if that's rejected, fall back to a muted autoplay with a tap-to-unmute
    // prompt so the video still starts moving the instant the page opens.
    video.play().catch(() => {
        video.muted = true;
        unmuteBtn.hidden = false;
        video.play().catch(() => {
            // Autoplay fully blocked — the visible native controls let the
            // person press play manually, so we just leave it there.
        });
    });

    unmuteBtn.addEventListener("click", () => {
        video.muted = false;
        unmuteBtn.hidden = true;
    });

    video.addEventListener("error", () => {
        introEl.textContent = "Video unavailable right now — you can still visit the microsite below.";
    });

    visitBtn.href = `${MICROSITE_BASE}?id=${encodeURIComponent(member.id)}`;
    visitBtn.textContent = `Visit ${member.name}'s Microsite →`;
});