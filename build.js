#!/usr/bin/env node
/* =========================================================
   NHÀ THUỐC AN ĐỨC 6 — BUILD.JS
   Sinh trang riêng cho từng sản phẩm và từng bài viết kiến thức.

   Cách dùng (cần Node.js >= 16, không cần cài thêm gói nào):
       SITE_URL=https://ten-mien-that.vn node build.js

   Đọc:   products.js, blogs.js, gioi_thieu.html (lấy header/footer)
   Ghi:   san-pham/*.html, kien-thuc/*.html, url-map.js, sitemap.xml, robots.txt
   Chạy lại mỗi khi sửa products.js hoặc blogs.js.
   ========================================================= */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const SITE_URL = (process.env.SITE_URL || "https://YOUR-DOMAIN.vn").replace(/\/+$/, "");
const SITE_NAME = "Nhà Thuốc An Đức 6";
const OG_IMAGE = "images/og-image.jpg";

const CATS = {
  thuc_pham: "Thực phẩm bổ sung",
  dung_cu: "Dụng cụ y tế",
  my_pham: "Mỹ phẩm",
};
const NOTES = {
  thuc_pham: "Thực phẩm bảo vệ sức khỏe không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Hiệu quả tùy thuộc cơ địa mỗi người. Hãy đọc kỹ nhãn sản phẩm và hỏi ý kiến bác sĩ/dược sĩ trước khi dùng.",
  my_pham: "Sản phẩm dùng ngoài da. Ngưng sử dụng nếu có dấu hiệu kích ứng và hỏi ý kiến bác sĩ da liễu nếu cần.",
  dung_cu: "Thiết bị hỗ trợ theo dõi tại nhà, không thay thế chẩn đoán của bác sĩ. Kết quả đo có thể thay đổi theo thời điểm và tư thế đo.",
};
const BLOG_DISCLAIMER = "Bài viết chỉ mang tính tham khảo, không thay thế tư vấn, chẩn đoán hay điều trị của bác sĩ.";

/* ---------- đọc dữ liệu ---------- */
function loadData(file, varName, endMarker) {
  let src = fs.readFileSync(path.join(ROOT, file), "utf8");
  if (endMarker) {
    const i = src.indexOf(endMarker);
    if (i > -1) src = src.slice(0, i); // chỉ lấy phần dữ liệu, bỏ code giao diện
    src = src.replace(/\/\*[^*]*(\*(?!\/)[^*]*)*$/, ""); // bỏ phần mở đầu comment bị cắt dở
  }
  const ctx = vm.createContext({});
  vm.runInContext(src + `\n;this.__out = ${varName};`, ctx);
  return ctx.__out;
}
const products = loadData("products.js", "products");
const blogs = loadData("blogs.js", "blogs", "2. BLOG RENDER");

/* ---------- tiện ích ---------- */
function slugify(str, max = 64) {
  let s = String(str).split(/\s[–—-]\s/)[0]; // bỏ phần mô tả dài sau dấu gạch
  s = s.replace(/đ/g, "d").replace(/Đ/g, "D").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  // bỏ cụm mở đầu chung chung để URL ngắn và có tên sản phẩm ngay đầu
  s = s.replace(/^(thuc-pham-bao-ve-suc-khoe|thuc-pham-bo-sung|vien-uong-ho-tro)-/, "");
  if (s.length > max) { const cut = s.slice(0, max); s = cut.slice(0, cut.lastIndexOf("-") > 20 ? cut.lastIndexOf("-") : max); }
  s = s.replace(/(-(va|bang|cua|cho|voi|la|the|nao|de|trong|khi))+$/, ""); // không kết thúc bằng từ nối
  return s.replace(/^-+|-+$/g, "") || "muc";
}
function uniqueSlugs(items, getText, max) {
  const used = new Set(), map = {};
  items.forEach((it) => {
    let base = slugify(getText(it), max), slug = base, n = 2;
    while (used.has(slug)) slug = `${base}-${n++}`;
    used.add(slug); map[it.id] = slug;
  });
  return map;
}
const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const stripHtml = (h) => String(h || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
function snippet(text, n = 155) {
  const t = stripHtml(text);
  if (t.length <= n) return t;
  const cut = t.slice(0, n); return cut.slice(0, cut.lastIndexOf(" ")) + "…";
}
const abs = (p) => `${SITE_URL}/${p.replace(/^\/+/, "")}`;
// Mỗi trang chỉ nên có 1 <h1>: hạ <h1> nằm trong nội dung xuống <h2>
const demote = (h) => String(h || "").replace(/<h1(?=[\s>])/gi, "<h2").replace(/<\/h1>/gi, "</h2>");
const hasText = (s) => stripHtml(s).length > 0;
const jsonLd = (o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2).replace(/</g, "\\u003c")}\n</script>`;

/* ---------- header / footer lấy từ trang tĩnh sẵn có ---------- */
const shell = fs.readFileSync(path.join(ROOT, "gioi_thieu.html"), "utf8");
const pick = (tag) => (shell.match(new RegExp(`<${tag}[\\s\\S]*?</${tag}>`)) || [""])[0];
const toSub = (html) => html.replace(/(href|src)="(?!https?:|mailto:|tel:|#|\.\.\/)([^"]+)"/g, '$1="../$2"');
const HEADER = toSub(pick("header")), FOOTER = toSub(pick("footer"));
if (!HEADER || !FOOTER) throw new Error("Không tìm thấy <header>/<footer> trong gioi_thieu.html");

/* ---------- khung trang ---------- */
function page({ title, desc, canonicalPath, image, ogType, schema, body }) {
  const url = abs(canonicalPath), img = abs(image);
  return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)} | ${SITE_NAME}</title>
    <meta name="description" content="${esc(desc)}">
    <link rel="canonical" href="${url}">
    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(desc)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${img}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(desc)}">
    <meta name="twitter:image" content="${img}">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../detail.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="../favicon.png">
    <script>
        (function () {
            var saved = localStorage.getItem("theme");
            var theme = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            document.documentElement.setAttribute("data-theme", theme);
        })();
    </script>
    ${jsonLd(schema)}
</head>
<body>
${HEADER}
${body}
${FOOTER}
    <script src="../trang-tinh.js"></script>
    <script src="../theme.js"></script>
    <script src="../gio-hang.js"></script>
</body>
</html>
`;
}

const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});
const crumbHtml = (items) => `<nav class="crumbs" aria-label="Đường dẫn">${items
  .map((it, i) => (i === items.length - 1 ? `<span aria-current="page">${esc(it.name)}</span>` : `<a href="../${it.path}">${esc(it.name)}</a>`))
  .join('<span class="crumb-sep">/</span>')}</nav>`;

/* ---------- trang sản phẩm ---------- */
const pSlug = uniqueSlugs(products, (p) => p.name);
const bSlug = uniqueSlugs(blogs, (b) => b.title, 90);
const pPath = (p) => `san-pham/${pSlug[p.id]}.html`;
const bPath = (b) => `kien-thuc/${bSlug[b.id]}.html`;

function productPage(p) {
  const cat = CATS[p.category] || "";
  const shortName = p.name.split(/\s[–—-]\s/)[0];
  const d = p.details || {};
  const desc = snippet(p.description) || `${shortName} - thông tin sản phẩm tại ${SITE_NAME}.`;
  const crumbs = [{ name: "Trang chủ", path: "index.html" }, { name: "Sản phẩm", path: "index.html#san-pham" }, { name: shortName, path: pPath(p) }];

  const sections = [
    ["Thành phần", d.ingredients], ["Công dụng", d.benefits], ["Cách dùng", d.usage], ["Đối tượng sử dụng", d.users],
  ].filter(([, v]) => hasText(v))
    .map(([h, v]) => `<section class="detail-block"><h2>${h}</h2><p>${demote(v)}</p></section>`).join("\n");
  const note = d.note && hasText(d.note) ? d.note : NOTES[p.category] || "";

  const related = products.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 4);
  const relatedHtml = related.length ? `
        <section class="related">
            <h2>Sản phẩm cùng nhóm</h2>
            <div class="related-grid">
${related.map((r) => `                <a class="related-card" href="../${pPath(r)}">
                    <img src="../${esc(r.image)}" alt="${esc(r.name.split(/\s[–—-]\s/)[0])}" loading="lazy">
                    <span>${esc(r.name.split(/\s[–—-]\s/)[0])}</span>
                </a>`).join("\n")}
            </div>
        </section>` : "";

  const body = `    <main>
        <div class="container">
            <article class="detail-page">
                ${crumbHtml(crumbs)}
                <div class="detail-hero">
                    <div class="detail-image"><img src="../${esc(p.image)}" alt="${esc(shortName)}" width="600" height="600"></div>
                    <div class="detail-head">
                        <span class="detail-tag">${esc(cat)}</span>
                        <h1>${esc(p.name)}</h1>
                        <button type="button" class="agh-add agh-add--detail" data-add-to-cart="${esc(p.id)}" data-name="${esc(shortName)}" data-image="${esc(p.image)}" data-url="${esc(pPath(p))}">+ Thêm vào danh sách báo giá</button>
                        <a class="detail-back" href="../index.html#san-pham">← Tất cả sản phẩm</a>
                    </div>
                </div>
                <section class="detail-block detail-desc">${demote(p.description)}</section>
${sections}
                ${note ? `<p class="detail-note"><strong>Lưu ý:</strong> ${esc(note)}</p>` : ""}
${relatedHtml}
            </article>
        </div>
    </main>`;

  return page({
    title: shortName, desc, canonicalPath: pPath(p), image: p.image, ogType: "website", body,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        // Không khai giá/tồn kho/đánh giá vì website không có dữ liệu thật.
        { "@type": "Product", name: p.name, description: desc, image: abs(p.image), category: cat, url: abs(pPath(p)) },
        breadcrumb(crumbs),
      ],
    },
  });
}

/* ---------- trang bài viết ---------- */
function blogPage(b) {
  const desc = snippet(b.excerpt) || snippet(b.content);
  const crumbs = [{ name: "Trang chủ", path: "index.html" }, { name: "Kiến thức", path: "index.html#kien-thuc" }, { name: b.title, path: bPath(b) }];
  const meta = [
    b.author && `<span>Biên soạn: ${esc(b.author)}</span>`,
    b.reviewer && `<span>Thẩm định: ${esc(b.reviewer)}</span>`,
    b.updated && `<span>Cập nhật: ${esc(b.updated)}</span>`,
  ].filter(Boolean).join("");
  const sources = b.sources && b.sources.length
    ? `<div class="blog-sources"><h2>Nguồn tham khảo</h2><ol>${b.sources.map((s) => `<li>${s}</li>`).join("")}</ol></div>` : "";

  const idx = blogs.indexOf(b), others = blogs.filter((x) => x !== b).sort((x, y) => Math.abs(blogs.indexOf(x) - idx) - Math.abs(blogs.indexOf(y) - idx)).slice(0, 3);
  const moreHtml = `
        <section class="related">
            <h2>Bài viết khác</h2>
            <div class="related-grid">
${others.map((r) => `                <a class="related-card" href="../${bPath(r)}">
                    <img src="../${esc(r.image)}" alt="${esc(r.title)}" loading="lazy">
                    <span>${esc(r.title)}</span>
                </a>`).join("\n")}
            </div>
        </section>`;

  const body = `    <main>
        <div class="container">
            <article class="detail-page article-page">
                ${crumbHtml(crumbs)}
                <span class="detail-tag">${esc(b.category)}</span>
                <h1>${esc(b.title)}</h1>
                ${meta ? `<div class="blog-meta">${meta}</div>` : ""}
                <div class="article-cover"><img src="../${esc(b.image)}" alt="${esc(b.title)}" width="1200" height="630"></div>
                <div class="article-body">
${demote(b.content)}
                </div>
                ${sources}
                <p class="blog-disclaimer">${BLOG_DISCLAIMER}</p>
${moreHtml}
            </article>
        </div>
    </main>`;

  return page({
    title: b.title, desc, canonicalPath: bPath(b), image: b.image, ogType: "article", body,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article", headline: b.title, description: desc, image: abs(b.image), articleSection: b.category,
          mainEntityOfPage: abs(bPath(b)), inLanguage: "vi",
          author: b.author ? { "@type": "Person", name: b.author } : { "@type": "Organization", name: SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: abs("favicon.png") } },
          ...(b.updated ? { dateModified: b.updated } : {}),
        },
        breadcrumb(crumbs),
      ],
    },
  });
}

/* ---------- ghi file ---------- */
function writeDir(dir, items, render, pathOf) {
  const full = path.join(ROOT, dir);
  fs.rmSync(full, { recursive: true, force: true });
  fs.mkdirSync(full, { recursive: true });
  items.forEach((it) => fs.writeFileSync(path.join(ROOT, pathOf(it)), render(it)));
}
writeDir("san-pham", products, productPage, pPath);
writeDir("kien-thuc", blogs, blogPage, bPath);

// Bản đồ id → URL để trang chủ / trang tra cứu trỏ link tới đúng trang riêng
const urlMap = {
  products: Object.fromEntries(products.map((p) => [p.id, pPath(p)])),
  blogs: Object.fromEntries(blogs.map((b) => [b.id, bPath(b)])),
};
fs.writeFileSync(path.join(ROOT, "url-map.js"),
  `/* Tự sinh bởi build.js — đừng sửa tay */\nwindow.PRODUCT_URLS = ${JSON.stringify(urlMap.products, null, 2)};\nwindow.BLOG_URLS = ${JSON.stringify(urlMap.blogs, null, 2)};\n`);

const staticPages = ["", "bach_khoa.html", "gioi_thieu.html", "lien_he.html", "chinh_sach_bao_mat.html"];
const urls = [...staticPages, ...products.map(pPath), ...blogs.map(bPath)];
fs.writeFileSync(path.join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url>\n    <loc>${SITE_URL}/${u}</loc>\n  </url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Đã tạo ${products.length} trang sản phẩm, ${blogs.length} trang bài viết, sitemap ${urls.length} URL.`);
if (SITE_URL.includes("YOUR-DOMAIN")) console.log("⚠ Chưa đặt SITE_URL — canonical/sitemap vẫn dùng YOUR-DOMAIN.vn. Chạy: SITE_URL=https://ten-mien.vn node build.js");
