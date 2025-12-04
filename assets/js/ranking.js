document.addEventListener("DOMContentLoaded", function () {
    const n = document.querySelector(".init-plugin-suite-view-count-ranking");
    if (!n) return;
    const i = parseInt(n.dataset.number) || 5,
        t = n.querySelectorAll(".init-plugin-suite-view-count-ranking-tabs button"),
        e = n.querySelectorAll(".init-plugin-suite-view-count-ranking-panel"),
        s = n.querySelectorAll(".init-plugin-suite-view-count-ranking-content"),
        a = {};
    var rank = 0;

    function r(n) {
        rank++;
        if (rank <= i) {
            return `\n            <div class="init-plugin-suite-view-count-ranking-item">\n                <div class="init-plugin-suite-view-count-ranking-thumb">\n                    <a class="v-thumb" href="${n.link}"><div class="mask"></div>\n                        <img src="${n.thumbnail}" alt="${n.title}">\n                    </a>\n                </div>\n                <div class="init-plugin-suite-view-count-ranking-meta">\n                    <div class="number">${rank}</div><h5 class="init-plugin-suite-view-count-ranking-title">\n                        <a href="${n.link}">${n.title}</a>\n                    </h5>\n<div class="book-author-name">${n.author_name}</div>                    \n                </div>\n            </div>\n        `
        } else {
            return '';
        }
    }

    function o(n, i, t = 5) {
        const e = "undefined" != typeof InitViewRankingI18n && InitViewRankingI18n.postType || "",
            s = e ? `${n}_${e}` : n;
        if (a[s]) return void (i.innerHTML = a[s]);
        /*
        i.innerHTML = function(n) {
            let i = "";
            for (let t = 1; t <= n; t++) i += `\n                <div class="init-plugin-suite-view-count-ranking-item skeleton">\n                <div class="init-plugin-suite-view-count-ranking-thumb">\n                    <div class="v-thumb"><div class="mask"></div>                    </div>\n                </div>\n                <div class="init-plugin-suite-view-count-ranking-meta">\n                    <div class="number">${t}</div><h4 class="init-plugin-suite-view-count-ranking-title">\n                        <a href="#"></a>\n                    </h4>\n<div class="book-author-name"></div>                    \n                </div>\n            </div>            `;
            return i
        }(t);
        */

        const o = ("undefined" != typeof InitViewCountSettings && InitViewCountSettings && InitViewCountSettings.restUrl ? InitViewCountSettings.restUrl : `${window.location.origin}/wp-json/initvico/v1`).replace(/\/+$/, "") + "/",
            u = new URL(o + "top");
        u.searchParams.set("range", n), u.searchParams.set("number", t), e && u.searchParams.set("post_type", e), fetch(u.toString(), {
            method: "GET"
        }).then(n => {
            if (!n.ok) throw new Error(`HTTP ${n.status}`);
            return n.json()
        }).then(n => {
            if (!Array.isArray(n)) throw new Error("Invalid payload");
            const t = n.map(r).join("");
            a[s] = t, i.innerHTML = t || `<div class="init-plugin-suite-view-count-empty">${InitViewRankingI18n.noData}</div>`, i.dataset.loaded = "true"
        }).catch(() => {
            i.innerHTML = `<div class="init-plugin-suite-view-count-error">${InitViewRankingI18n.loadError}</div>`
        })
    }
    const u = {};
    s.forEach(n => {
        const i = n.dataset.range;
        i && (u[i] = n)
    });
    const l = n.querySelector(".init-plugin-suite-view-count-ranking-tabs li.active button");
    l && u[l.dataset.range] && o(l.dataset.range, u[l.dataset.range], i), t.forEach(n => {
        n.addEventListener("click", function () {
            const n = this.dataset.range,
                s = u[n];
            n && s && (t.forEach(n => n.closest("li").classList.remove("active")), this.closest("li").classList.add("active"), e.forEach(n => n.setAttribute("hidden", "hidden")), s.closest(".init-plugin-suite-view-count-ranking-panel")?.removeAttribute("hidden"), "true" !== s.dataset.loaded && o(n, s, i))
        })
    })
});