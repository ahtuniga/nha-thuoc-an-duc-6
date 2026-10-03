/* =========================================================
   DANH SÁCH BÁO GIÁ / ĐẶT HÀNG QUA ZALO — NHÀ THUỐC AN ĐỨC 6
   File độc lập: tự chèn CSS + HTML, không cần backend, không thanh toán.

   Cách hoạt động:
   - Khách bấm nút "Thêm vào danh sách báo giá" ở thẻ sản phẩm hoặc trang chi tiết.
   - Danh sách lưu trên trình duyệt của khách (localStorage), không gửi đi đâu.
   - Bấm "Gửi qua Zalo": nội dung đơn được SAO CHÉP và Zalo của nhà thuốc được mở.
     (Zalo không cho điền sẵn tin nhắn qua đường link, nên khách chỉ cần Dán rồi Gửi.)

   Nút thêm sản phẩm là bất kỳ phần tử nào có các thuộc tính:
     data-add-to-cart="sp_1"  data-name="Tên ngắn"  data-image="images/x.webp"  data-url="san-pham/x.html"
   (đường dẫn image/url tính từ thư mục gốc của website)
   ========================================================= */
(function () {
    "use strict";

    /* ---------- CẤU HÌNH (chỉ sửa ở đây) ---------- */
    var CONFIG = {
        zalo: "0932101016",          // số Zalo nhận đơn
        phone: "0932101016",         // số điện thoại cho nút "Gọi điện"
        storeName: "Nhà Thuốc An Đức 6",
        maxQty: 99,
        storageKey: "anduc_quote_cart_v1"
    };

    /* Thư mục gốc của website, suy ra từ vị trí file gio-hang.js (chạy đúng cả ở trang con) */
    var script = document.currentScript;
    var BASE = script && script.src ? script.src.split("?")[0].replace(/[^\/]*$/, "") : "";

    var items = load();
    var els = {};
    var lastFocus = null;

    /* ---------- LƯU TRỮ ---------- */
    function load() {
        try {
            var arr = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
            return Array.isArray(arr) ? arr.filter(function (x) {
                return x && typeof x.id === "string" && typeof x.name === "string" && x.qty > 0;
            }) : [];
        } catch (e) { return []; }
    }
    function save() {
        try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(items)); } catch (e) { /* bỏ qua: chế độ riêng tư */ }
    }
    function count() {
        return items.reduce(function (n, it) { return n + it.qty; }, 0);
    }

    /* ---------- THAO TÁC GIỎ ---------- */
    function add(data) {
        var found = items.filter(function (x) { return x.id === data.id; })[0];
        if (found) {
            found.qty = Math.min(CONFIG.maxQty, found.qty + 1);
        } else {
            items.push({ id: data.id, name: data.name, image: data.image || "", url: data.url || "", qty: 1 });
        }
        save();
        render();
    }
    function setQty(id, qty) {
        items.forEach(function (x) { if (x.id === id) x.qty = Math.max(1, Math.min(CONFIG.maxQty, qty)); });
        save();
        render();
    }
    function remove(id) {
        items = items.filter(function (x) { return x.id !== id; });
        save();
        render();
    }
    function clearAll() {
        items = [];
        save();
        render();
    }

    /* ---------- TIỆN ÍCH ---------- */
    function h(tag, attrs, children) {
        var el = document.createElement(tag);
        Object.keys(attrs || {}).forEach(function (k) {
            if (k === "text") el.textContent = attrs[k];
            else if (k === "class") el.className = attrs[k];
            else el.setAttribute(k, attrs[k]);
        });
        (children || []).forEach(function (c) { if (c) el.appendChild(c); });
        return el;
    }
    function cartIcon() {
        var wrap = document.createElement("span");
        wrap.className = "agh-ico";
        wrap.setAttribute("aria-hidden", "true");
        wrap.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2"/><circle cx="9.5" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></svg>';
        return wrap;
    }
    function toast(msg, withOpen) {
        els.toast.innerHTML = "";
        els.toast.appendChild(h("span", { text: msg }));
        if (withOpen) {
            var b = h("button", { type: "button", class: "agh-toast-link", text: "Xem danh sách" });
            b.addEventListener("click", openDrawer);
            els.toast.appendChild(b);
        }
        els.toast.classList.add("agh-show");
        clearTimeout(toast._t);
        toast._t = setTimeout(function () { els.toast.classList.remove("agh-show"); }, 3200);
    }

    /* ---------- NỘI DUNG TIN NHẮN ---------- */
    function buildMessage() {
        var v = function (el) { return (el.value || "").replace(/\s+/g, " ").trim(); };
        var lines = ["Xin chào " + CONFIG.storeName + ", tôi muốn hỏi giá và đặt các sản phẩm sau:", ""];
        items.forEach(function (it, i) { lines.push((i + 1) + ". " + it.name + " × " + it.qty); });
        lines.push("");
        if (v(els.fName)) lines.push("Họ tên: " + v(els.fName));
        if (v(els.fPhone)) lines.push("SĐT: " + v(els.fPhone));
        if (v(els.fNote)) lines.push("Ghi chú: " + v(els.fNote));
        if (/^https?:/.test(BASE)) { lines.push(""); lines.push("(Gửi từ website: " + BASE + ")"); }
        return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
    }

    function copyText(text, done) {
        var ok = false;
        try {
            var ta = document.createElement("textarea");
            ta.value = text;
            ta.setAttribute("readonly", "");
            ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;";
            document.body.appendChild(ta);
            ta.select();
            ta.setSelectionRange(0, text.length);
            ok = document.execCommand("copy");
            document.body.removeChild(ta);
        } catch (e) { ok = false; }
        if (ok) { done(true); return; }
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
        } else {
            done(false);
        }
    }

    function setStatus(msg, isError) {
        els.status.textContent = msg;
        els.status.classList.toggle("agh-err", !!isError);
    }
    function afterCopy(ok, viaZalo) {
        if (ok) {
            setStatus(viaZalo
                ? "Đã sao chép nội dung đơn. Trong Zalo, nhấn giữ ô soạn tin → Dán → Gửi."
                : "Đã sao chép nội dung đơn. Bạn có thể dán vào Zalo hoặc tin nhắn bất kỳ.");
        } else {
            els.preview.open = true;
            els.previewText.focus();
            els.previewText.select();
            setStatus("Không tự sao chép được. Hãy chọn và sao chép nội dung bên dưới, rồi dán vào Zalo.", true);
        }
    }

    /* ---------- DỰNG GIAO DIỆN ---------- */
    function buildUI() {
        var css = h("style", { id: "aghStyle" });
        css.textContent = [
            ".agh-add{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:inherit;font-weight:600;font-size:13px;line-height:1.2;color:var(--green,#24623a);background:transparent;border:1.5px solid var(--green,#24623a);border-radius:999px;padding:9px 14px;cursor:pointer;transition:background .2s,color .2s,transform .15s}",
            ".agh-add:hover{background:var(--green,#24623a);color:#fff}",
            ".agh-add:active{transform:scale(.97)}",
            ".agh-add.agh-done{background:var(--green,#24623a);color:#fff}",
            ".agh-add--card{width:100%;margin-top:12px;color:#fff;border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.08)}",
            ".agh-add--card:hover{background:#fff;color:#164d2a;border-color:#fff}",
            ".agh-add--card.agh-done{background:#9be3b4;color:#164d2a;border-color:#9be3b4}",
            ".agh-add--detail{font-size:15px;padding:12px 22px;margin:16px 0 4px;background:var(--green,#24623a);color:#fff}",
            ".agh-add--detail:hover{background:var(--green-dark,#164d2a)}",
            ".agh-hgroup{display:flex;align-items:center;gap:8px;flex-shrink:0}",
            ".agh-hbtn{position:relative;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;flex-shrink:0;border-radius:50%;border:1px solid var(--line,#dce5dc);background:var(--white,#fff);color:var(--text,#183a26);cursor:pointer;transition:border-color .2s}",
            ".agh-hbtn:hover{border-color:var(--green,#24623a)}",
            ".agh-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:#d8402f;color:#fff;font:700 11px/18px sans-serif;text-align:center;display:none}",
            ".agh-has .agh-badge{display:block}",
            ".agh-fab{position:fixed;right:24px;bottom:84px;z-index:900;width:52px;height:52px;border-radius:50%;border:none;background:var(--green,#24623a);color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.22);cursor:pointer;display:none;align-items:center;justify-content:center}",
            ".agh-fab.agh-has{display:inline-flex}",
            ".agh-fab.agh-bump{animation:aghBump .4s}",
            "@keyframes aghBump{40%{transform:scale(1.18)}}",
            ".agh-overlay{position:fixed;inset:0;z-index:10000;background:rgba(10,25,15,.5);opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s}",
            ".agh-drawer{position:fixed;top:0;right:0;z-index:10001;height:100%;width:min(440px,100%);display:flex;flex-direction:column;background:var(--white,#fff);color:var(--text,#183a26);box-shadow:-20px 0 60px rgba(0,0,0,.2);transform:translateX(100%);visibility:hidden;transition:transform .3s ease,visibility .3s}",
            ".agh-open .agh-overlay{opacity:1;visibility:visible}",
            ".agh-open .agh-drawer{transform:none;visibility:visible}",
            ".agh-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px;border-bottom:1px solid var(--line,#dce5dc)}",
            ".agh-head h2{margin:0;font-size:18px;color:var(--green-dark,#164d2a)}",
            ".agh-x{width:36px;height:36px;border-radius:50%;border:1px solid var(--line,#dce5dc);background:transparent;color:inherit;font-size:20px;line-height:1;cursor:pointer}",
            ".agh-body{flex:1;overflow-y:auto;padding:16px 20px}",
            ".agh-note{margin:0 0 14px;padding:10px 12px;border-radius:12px;background:var(--cream,#f5f7f1);color:var(--text-light,#68766c);font-size:13px;line-height:1.5}",
            ".agh-list{list-style:none;margin:0;padding:0}",
            ".agh-item{display:grid;grid-template-columns:56px 1fr;gap:12px;padding:12px 0;border-bottom:1px solid var(--line,#dce5dc)}",
            ".agh-item img{width:56px;height:56px;object-fit:contain;border-radius:10px;background:var(--cream,#f5f7f1)}",
            ".agh-item-name{display:block;font-size:14px;font-weight:600;line-height:1.35;color:inherit;text-decoration:none}",
            ".agh-item-row{display:flex;align-items:center;justify-content:space-between;margin-top:8px}",
            ".agh-qty{display:inline-flex;align-items:center;border:1px solid var(--line,#dce5dc);border-radius:999px;overflow:hidden}",
            ".agh-qty button{width:32px;height:32px;border:none;background:transparent;color:inherit;font-size:16px;cursor:pointer}",
            ".agh-qty button:hover{background:var(--cream,#f5f7f1)}",
            ".agh-qty span{min-width:30px;text-align:center;font-size:14px;font-weight:600}",
            ".agh-rm{border:none;background:none;color:var(--text-light,#68766c);font-size:13px;text-decoration:underline;cursor:pointer}",
            ".agh-empty{padding:40px 10px;text-align:center;color:var(--text-light,#68766c)}",
            ".agh-empty a{color:var(--green,#24623a);font-weight:600}",
            ".agh-form{margin-top:18px;display:grid;gap:10px}",
            ".agh-form label{display:grid;gap:4px;font-size:13px;font-weight:600}",
            ".agh-form input,.agh-form textarea,.agh-preview textarea{width:100%;box-sizing:border-box;font-family:inherit;font-weight:400;font-size:14px;line-height:1.4;color:inherit;background:var(--cream,#f5f7f1);border:1px solid var(--line,#dce5dc);border-radius:10px;padding:10px 12px}",
            ".agh-form textarea{min-height:64px;resize:vertical}",
            ".agh-preview{margin-top:12px;font-size:13px}",
            ".agh-preview summary{cursor:pointer;color:var(--text-light,#68766c)}",
            ".agh-preview textarea{min-height:150px;margin-top:8px;font-size:13px}",
            ".agh-foot{padding:14px 20px 18px;border-top:1px solid var(--line,#dce5dc);display:grid;gap:10px}",
            ".agh-status{margin:0;min-height:18px;font-size:13px;line-height:1.45;color:var(--green,#24623a)}",
            ".agh-status.agh-err{color:#c0392b}",
            ".agh-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}",
            ".agh-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:13px 14px;border-radius:999px;border:1.5px solid var(--green,#24623a);background:transparent;color:var(--green,#24623a);font-family:inherit;font-weight:600;font-size:14px;line-height:1.2;text-decoration:none;cursor:pointer}",
            ".agh-btn:hover{background:var(--cream,#f5f7f1)}",
            ".agh-btn--zalo{grid-column:1/-1;background:#0068ff;border-color:#0068ff;color:#fff;font-size:15px}",
            ".agh-btn--zalo:hover{background:#0057d9}",
            ".agh-clear{justify-self:center;border:none;background:none;color:var(--text-light,#68766c);font-size:13px;text-decoration:underline;cursor:pointer}",
            ".agh-toast{position:fixed;left:0;right:0;margin:0 auto;width:max-content;bottom:28px;z-index:10002;transform:translateY(20px);display:flex;align-items:center;gap:12px;max-width:calc(100% - 32px);padding:11px 16px;border-radius:999px;background:#183a26;color:#fff;font-size:14px;box-shadow:0 10px 30px rgba(0,0,0,.3);opacity:0;pointer-events:none;transition:opacity .25s,transform .25s}",
            ".agh-toast.agh-show{opacity:1;transform:none;pointer-events:auto}",
            ".agh-toast-link{border:none;background:none;color:#9be3b4;font-family:inherit;font-weight:600;font-size:14px;text-decoration:underline;cursor:pointer;white-space:nowrap}",
            "body.agh-lock{overflow:hidden}",
            "@media(max-width:700px){.agh-hgroup{margin-left:auto;gap:6px}}",
            "@media(max-width:560px){.agh-fab{right:16px;bottom:76px}.agh-toast{bottom:90px}}",
            "@media(prefers-reduced-motion:reduce){.agh-drawer,.agh-overlay,.agh-toast{transition:none}.agh-fab.agh-bump{animation:none}}"
        ].join("\n");
        document.head.appendChild(css);

        /* nút giỏ trên header */
        var headerInner = document.querySelector(".site-header .header-inner");
        els.hbtn = h("button", { type: "button", class: "agh-hbtn", "aria-label": "Mở danh sách báo giá" }, [cartIcon(), h("span", { class: "agh-badge", "aria-hidden": "true" })]);
        if (headerInner) {
            /* Gom giỏ + nút Sáng/Tối thành một nhóm sát nhau ở góc phải,
               để header (đang căn space-between) không chia đều khoảng trống giữa chúng */
            var themeBtn = headerInner.querySelector("#themeToggle");
            var group = h("div", { class: "agh-hgroup" });
            headerInner.insertBefore(group, themeBtn || null);
            group.appendChild(els.hbtn);
            if (themeBtn) group.appendChild(themeBtn);
        }

        /* nút nổi */
        els.fab = h("button", { type: "button", class: "agh-fab", "aria-label": "Mở danh sách báo giá" }, [cartIcon(), h("span", { class: "agh-badge", "aria-hidden": "true" })]);

        /* ngăn kéo */
        els.root = h("div", { class: "agh-root" });
        els.overlay = h("div", { class: "agh-overlay" });
        els.close = h("button", { type: "button", class: "agh-x", "aria-label": "Đóng", text: "×" });
        els.list = h("ul", { class: "agh-list" });
        els.empty = h("div", { class: "agh-empty" });
        els.empty.appendChild(h("p", { text: "Chưa có sản phẩm nào trong danh sách." }));
        els.empty.appendChild(h("a", { href: BASE + "index.html#san-pham", text: "Xem sản phẩm" }));

        els.fName = h("input", { type: "text", autocomplete: "name", placeholder: "Không bắt buộc" });
        els.fPhone = h("input", { type: "tel", autocomplete: "tel", inputmode: "tel", placeholder: "Không bắt buộc" });
        els.fNote = h("textarea", { placeholder: "Ví dụ: cần giao tận nơi, hỏi thêm cách dùng…" });
        els.form = h("div", { class: "agh-form" }, [
            h("label", { text: "Họ tên" }, [els.fName]),
            h("label", { text: "Số điện thoại" }, [els.fPhone]),
            h("label", { text: "Ghi chú" }, [els.fNote])
        ]);

        els.previewText = h("textarea", { readonly: "", "aria-label": "Nội dung tin nhắn" });
        els.preview = h("details", { class: "agh-preview" }, [h("summary", { text: "Xem nội dung sẽ gửi" }), els.previewText]);

        els.body = h("div", { class: "agh-body" }, [
            h("p", { class: "agh-note", text: "Đây là danh sách để hỏi giá, không phải thanh toán online. Dược sĩ sẽ xác nhận giá, tồn kho và tư vấn cách dùng trước khi bạn mua." }),
            els.list, els.empty, els.form, els.preview
        ]);

        els.status = h("p", { class: "agh-status", role: "status", "aria-live": "polite" });
        els.zalo = h("a", { class: "agh-btn agh-btn--zalo", href: "https://zalo.me/" + CONFIG.zalo, target: "_blank", rel: "noopener", text: "Gửi qua Zalo" });
        els.copy = h("button", { type: "button", class: "agh-btn", text: "Sao chép" });
        els.call = h("a", { class: "agh-btn", href: "tel:" + CONFIG.phone, text: "Gọi điện" });
        els.clear = h("button", { type: "button", class: "agh-clear", text: "Xóa danh sách" });
        els.foot = h("div", { class: "agh-foot" }, [
            els.status,
            h("div", { class: "agh-actions" }, [els.zalo, els.copy, els.call]),
            els.clear
        ]);

        els.drawer = h("aside", { class: "agh-drawer", role: "dialog", "aria-modal": "true", "aria-labelledby": "aghTitle" }, [
            h("div", { class: "agh-head" }, [h("h2", { id: "aghTitle", text: "Danh sách báo giá" }), els.close]),
            els.body, els.foot
        ]);
        els.toast = h("div", { class: "agh-toast", role: "status", "aria-live": "polite" });

        els.root.appendChild(els.overlay);
        els.root.appendChild(els.drawer);
        document.body.appendChild(els.root);
        document.body.appendChild(els.fab);
        document.body.appendChild(els.toast);
    }

    /* ---------- VẼ LẠI ---------- */
    function render() {
        var n = count();
        [els.hbtn, els.fab].forEach(function (b) {
            if (!b) return;
            b.classList.toggle("agh-has", n > 0);
            var badge = b.querySelector(".agh-badge");
            if (badge) badge.textContent = n > 99 ? "99+" : String(n);
        });

        els.list.innerHTML = "";
        items.forEach(function (it) {
            var img = h("img", { src: BASE + it.image, alt: "", loading: "lazy", width: "56", height: "56" });
            img.addEventListener("error", function () { img.style.visibility = "hidden"; });
            var name = it.url
                ? h("a", { class: "agh-item-name", href: BASE + it.url, text: it.name })
                : h("span", { class: "agh-item-name", text: it.name });
            var minus = h("button", { type: "button", "aria-label": "Giảm số lượng", text: "−" });
            var plus = h("button", { type: "button", "aria-label": "Tăng số lượng", text: "+" });
            minus.addEventListener("click", function () { setQty(it.id, it.qty - 1); });
            plus.addEventListener("click", function () { setQty(it.id, it.qty + 1); });
            var rm = h("button", { type: "button", class: "agh-rm", text: "Xóa" });
            rm.addEventListener("click", function () { remove(it.id); });
            var qty = h("div", { class: "agh-qty" }, [minus, h("span", { text: String(it.qty), "aria-label": "Số lượng " + it.qty }), plus]);
            els.list.appendChild(h("li", { class: "agh-item" }, [
                img,
                h("div", {}, [name, h("div", { class: "agh-item-row" }, [qty, rm])])
            ]));
        });

        var has = items.length > 0;
        els.list.style.display = has ? "" : "none";
        els.empty.style.display = has ? "none" : "";
        els.form.style.display = has ? "" : "none";
        els.preview.style.display = has ? "" : "none";
        els.foot.style.display = has ? "" : "none";
        els.previewText.value = has ? buildMessage() : "";
    }

    /* ---------- MỞ / ĐÓNG ---------- */
    function openDrawer() {
        lastFocus = document.activeElement;
        els.status.textContent = "";
        els.status.classList.remove("agh-err");
        render();
        els.root.classList.add("agh-open");
        document.body.classList.add("agh-lock");
        els.toast.classList.remove("agh-show");
        setTimeout(function () { els.close.focus(); }, 50);
    }
    function closeDrawer() {
        els.root.classList.remove("agh-open");
        document.body.classList.remove("agh-lock");
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function isOpen() { return els.root.classList.contains("agh-open"); }

    /* ---------- SỰ KIỆN ---------- */
    function bind() {
        els.hbtn.addEventListener("click", openDrawer);
        els.fab.addEventListener("click", openDrawer);
        els.close.addEventListener("click", closeDrawer);
        els.overlay.addEventListener("click", closeDrawer);
        els.clear.addEventListener("click", function () {
            clearAll();
            setStatus("");
        });

        [els.fName, els.fPhone, els.fNote].forEach(function (f) {
            f.addEventListener("input", function () { els.previewText.value = buildMessage(); });
        });

        els.copy.addEventListener("click", function () {
            copyText(buildMessage(), function (ok) { afterCopy(ok, false); });
        });
        /* Zalo là thẻ <a>: trình duyệt luôn cho mở tab mới; ta chỉ sao chép ngay trước khi chuyển đi */
        els.zalo.addEventListener("click", function () {
            copyText(buildMessage(), function (ok) { afterCopy(ok, true); });
        });

        document.addEventListener("keydown", function (e) {
            if (!isOpen()) return;
            if (e.key === "Escape") { closeDrawer(); return; }
            if (e.key === "Tab") {
                var f = els.drawer.querySelectorAll("a[href],button,input,textarea,summary");
                var vis = Array.prototype.filter.call(f, function (x) { return x.offsetParent !== null; });
                if (!vis.length) return;
                var first = vis[0], last = vis[vis.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        });

        /* Bấm nút "thêm" ở bất kỳ đâu (kể cả nút nằm trong thẻ <a> sản phẩm) */
        document.addEventListener("click", function (e) {
            var btn = e.target.closest && e.target.closest("[data-add-to-cart]");
            if (!btn) return;
            e.preventDefault();
            e.stopPropagation();
            add({
                id: btn.getAttribute("data-add-to-cart"),
                name: btn.getAttribute("data-name") || "Sản phẩm",
                image: btn.getAttribute("data-image") || "",
                url: btn.getAttribute("data-url") || ""
            });
            var old = btn.getAttribute("data-label") || btn.textContent;
            btn.setAttribute("data-label", old);
            btn.textContent = "Đã thêm ✓";
            btn.classList.add("agh-done");
            setTimeout(function () { btn.textContent = old; btn.classList.remove("agh-done"); }, 1400);
            els.fab.classList.remove("agh-bump");
            void els.fab.offsetWidth;
            els.fab.classList.add("agh-bump");
            toast("Đã thêm vào danh sách", true);
        }, true);

        /* Đồng bộ giữa các tab đang mở */
        window.addEventListener("storage", function (e) {
            if (e.key === CONFIG.storageKey) { items = load(); render(); }
        });
    }

    /* ---------- KHỞI ĐỘNG ---------- */
    function init() {
        buildUI();
        bind();
        render();
        loadFooterPhoto();
    }

    /* Nạp thêm khối ảnh nhà thuốc ở footer (footer-anh.js). gio-hang.js có mặt ở mọi trang
       nên dùng làm điểm nạp chung, khỏi phải sửa từng trang HTML. */
    function loadFooterPhoto() {
        if (!BASE || document.getElementById("aghFooterPhoto")) return;
        var s = document.createElement("script");
        s.id = "aghFooterPhoto";
        s.src = BASE + "footer-anh.js";
        s.async = true;
        document.body.appendChild(s);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
