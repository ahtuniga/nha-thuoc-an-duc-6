/* =========================================================
   POPUP THÔNG BÁO / QUẢNG CÁO — NHÀ THUỐC AN ĐỨC 6
   File độc lập: tự chèn CSS + HTML, không sửa style.css.
   Chỉ cần chỉnh phần CẤU HÌNH bên dưới.
   ========================================================= */
(function () {
    /* ---------- CẤU HÌNH (chỉ sửa ở đây) ---------- */
    var CONFIG = {
        enabled: true,              // đặt false để tắt popup
        delayMs: 3000,              // chờ bao lâu rồi mới hiện (3000 = 3 giây)
        showAgainAfterHours: 0,    // sau bao nhiêu giờ mới hiện lại với cùng khách

        // Cách 1: dùng ảnh poster. Ví dụ "images/poster-khuyen-mai.webp"
        // Để trống "" thì sẽ hiện thẻ chữ ở Cách 2.
        posterImage: "images/Combo_vuot_nang_mua.png",
        posterAlt: "Thông báo từ Nhà Thuốc An Đức 6",

        // Cách 2: thẻ chữ (dùng khi posterImage để trống)
        tag: "THÔNG BÁO",
        title: "Đo huyết áp, đo đường huyết miễn phí",
        text: "Ghé Nhà Thuốc An Đức 6 để được dược sĩ hỗ trợ đo và tư vấn.",
        buttonText: "Xem thông tin liên hệ",

        // Bấm vào popup sẽ chuyển tới trang nào ("" = không chuyển)
        link: "lien_he.html"
    };
    /* ---------------------------------------------- */

    if (!CONFIG.enabled) return;

    // Chỉ hiện trên trang chủ
    var path = location.pathname.split("/").pop();
    if (path !== "" && path !== "index.html") return;

    // Kiểm tra đã hiện gần đây chưa
    var KEY = "anduc6_popup_last";
    try {
        var last = parseInt(localStorage.getItem(KEY) || "0", 10);
        if (last && Date.now() - last < CONFIG.showAgainAfterHours * 3600 * 1000) return;
    } catch (e) { /* trình duyệt chặn lưu trữ: vẫn cho hiện */ }

    var css = "\
    .adp-overlay{position:fixed;inset:0;z-index:99990;display:flex;align-items:center;justify-content:center;\
      padding:20px;background:rgba(10,20,14,.6);opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s}\
    .adp-overlay.adp-show{opacity:1;visibility:visible}\
    .adp-box{position:relative;width:100%;max-width:420px;max-height:90vh;overflow:auto;border-radius:20px;\
      background:var(--white,#fff);color:var(--text,#183a26);border:1px solid var(--line,#dce5dc);\
      box-shadow:var(--shadow,0 25px 80px rgba(20,60,35,.2));transform:translateY(16px) scale(.97);transition:transform .3s}\
    .adp-overlay.adp-show .adp-box{transform:none}\
    .adp-box.adp-poster{background:transparent;border:0;box-shadow:none;overflow:visible;width:auto;max-width:min(92vw,480px)}\
    .adp-box img{display:block;max-width:100%;max-height:82vh;border-radius:16px;margin:0 auto}\
    .adp-close{position:absolute;top:10px;right:10px;z-index:2;width:38px;height:38px;border:0;border-radius:50%;\
      background:rgba(255,255,255,.95);color:#183a26;font-size:24px;line-height:1;cursor:pointer;\
      box-shadow:0 2px 10px rgba(0,0,0,.25)}\
    .adp-poster .adp-close{top:-12px;right:-12px}\
    .adp-close:hover{background:#fff;transform:scale(1.06)}\
    .adp-body{padding:36px 28px 28px;text-align:center}\
    .adp-tag{display:inline-block;margin-bottom:14px;padding:5px 12px;border-radius:99px;font-size:12px;\
      font-weight:700;letter-spacing:.08em;background:var(--green-soft,#9ab49a);color:var(--green-dark,#164d2a)}\
    .adp-title{margin:0 0 10px;font-size:24px;line-height:1.3;color:var(--green-dark,#164d2a)}\
    .adp-text{margin:0 0 22px;font-size:16px;line-height:1.6;color:var(--text-light,#68766c)}\
    .adp-btn{display:inline-block;padding:13px 26px;border-radius:99px;background:var(--green,#24623a);\
      color:#fff;font-weight:600;text-decoration:none}\
    .adp-btn:hover{background:var(--green-dark,#164d2a)}\
    .adp-skip{display:block;margin:14px auto 0;background:none;border:0;color:var(--text-light,#68766c);\
      font-size:14px;cursor:pointer;text-decoration:underline}\
    @media (prefers-reduced-motion:reduce){.adp-overlay,.adp-box{transition:none}}";

    function el(tag, cls, html) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (html) n.innerHTML = html;
        return n;
    }

    function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
        });
    }

    function build() {
        var style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);

        var overlay = el("div", "adp-overlay");
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-label", "Thông báo");

        var box = el("div", "adp-box");
        var close = el("button", "adp-close", "&times;");
        close.type = "button";
        close.setAttribute("aria-label", "Đóng thông báo");
        box.appendChild(close);

        if (CONFIG.posterImage) {
            box.classList.add("adp-poster");
            var img = '<img src="' + esc(CONFIG.posterImage) + '" alt="' + esc(CONFIG.posterAlt) + '">';
            var wrap = CONFIG.link
                ? '<a href="' + esc(CONFIG.link) + '">' + img + "</a>"
                : img;
            box.insertAdjacentHTML("beforeend", wrap);
        } else {
            var body = el("div", "adp-body",
                '<span class="adp-tag">' + esc(CONFIG.tag) + "</span>" +
                '<h2 class="adp-title">' + esc(CONFIG.title) + "</h2>" +
                '<p class="adp-text">' + esc(CONFIG.text) + "</p>" +
                (CONFIG.link
                    ? '<a class="adp-btn" href="' + esc(CONFIG.link) + '">' + esc(CONFIG.buttonText) + "</a>"
                    : "") +
                '<button type="button" class="adp-skip">Để sau</button>');
            box.appendChild(body);
            body.querySelector(".adp-skip").addEventListener("click", closePopup);
        }

        overlay.appendChild(box);
        document.body.appendChild(overlay);

        function closePopup() {
            overlay.classList.remove("adp-show");
            document.removeEventListener("keydown", onKey);
            try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {}
            setTimeout(function () { overlay.remove(); }, 350);
        }
        function onKey(e) { if (e.key === "Escape") closePopup(); }

        close.addEventListener("click", closePopup);
        overlay.addEventListener("click", function (e) { if (e.target === overlay) closePopup(); });
        document.addEventListener("keydown", onKey);

        requestAnimationFrame(function () { overlay.classList.add("adp-show"); close.focus(); });
    }

    function start() { setTimeout(build, CONFIG.delayMs); }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
