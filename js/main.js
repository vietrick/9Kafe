var netapk_pick;
const jo = {};
! function() {
    var e, t = window,
        a = document,
        n = setTimeout,
        o = clearTimeout,
        r = Date,
        i = Math,
        l = parseInt,
        s = (btoa, escape, unescape, encodeURIComponent),
        c = (decodeURIComponent, RegExp),
        d = XMLHttpRequest,
        u = (alert, localStorage),
        f = JSON,
        g = Image,
        m = (setInterval, clearInterval, "innerHTML"),
        p = "tagName",
        h = "getElementById",
        y = "querySelector",
        v = "querySelectorAll",
        b = "childNodes",
        A = "createElement",
        w = "className",
        j = "replace",
        I = "indexOf",
        k = "lastIndexOf",
        x = "EventListener",
        D = "add",
        P = "remove",
        C = "id",
        _ = "key",
        S = "parse",
        $ = "length",
        T = "push",
        R = "Attribute",
        B = "set",
        O = "get",
        M = "checked",
        z = "offsetWidth",
        E = "toFixed",
        U = "pageYOffset",
        L = "appendChild",
        q = "firstChild",
        H = "insert",
        G = "Before",
        N = "value",
        F = "match",
        W = "href",
        Y = "src",
        J = "target",
        Q = "closest",
        X = "location",
        V = "trim",
        K = "open",
        Z = "send",
        ee = "random",
        te = "toString",
        ae = "parentElement",
        ne = "preventDefault",
        oe = "substr",
        re = "setRequestHeader",
        ie = "responseText",
        le = "title",
        se = "test",
        ce = "ceil",
        de = "floor",
        ue = "round",
        fe = "min",
        ge = "map",
        me = "contains",
        pe = "textContent",
        he = "Item",
        ye = "nextSibling",
        ve = "load",
        be = "false",
        Ae = "scroll",
        we = "click",
        je = "mousemove",
        Ie = "touchstart",
        ke = "undefined",
        xe = "function",
        De = "Content-Type",
        Pe = "text/html",
        Ce = "pagination",
		sh = "shortcode",
		np = "netapkpick"
        _e = "loadCustomPosts",
        Se = "custom_posts",
        $e = "config",
        Te = "adsbygoogle",
        Re = "analytics",
        Be = "https://",
        Oe = "www.blogger.com/",
        Me = "-rw",
        ze = "devicePixelRatio",
        Ee = typeof isPreview !== ke && isPreview,
        Ue = typeof siteUrl !== ke ? siteUrl.substr(0, siteUrl.length - 1).replace(/(^\w+:|^)\/\//, "") : "",
        Le = Be + Ue,
        qe = typeof currentUrl !== ke ? currentUrl : "",
        He = typeof blogId !== ke ? blogId : "",
        Ge = typeof blogTitle !== ke ? blogTitle : "",
        Ne = typeof titleSeparator !== ke ? titleSeparator : " - ",
        Fe = typeof pageTitle !== ke ? pageTitle : "Page",
        We = typeof analyticId !== ke && analyticId,
        Ye = typeof caPubAdsense !== ke && caPubAdsense.replace(/^\D+/g, ""),
        Je = !!Ye && "ca-pub-" + Ye,
        Qe = typeof innerAdsDelimiter !== ke ? innerAdsDelimiter : "p,br,div",
        Xe = typeof ignoreAdsDelimiter !== ke ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
        Ve = typeof autoTOC !== ke && autoTOC,
        Ke = typeof toc_temp === xe && toc_temp,
        Ze = typeof positionTOC !== ke && positionTOC,
        et = typeof jtCallback === xe && jtCallback;

    function tt(e, t) {
        return -1 < (" " + e[w] + " ")[I](" " + t + " ")
    }

    function at(e, t) {
        var a;
        tt(e, t) || ("" != (a = e[w]) && (t = " " + t), e[w] = a + t)
    }

    function nt(e, t) {
        e[w] = e[w].replace(new c("(?:^|\\s)" + t + "(?!\\S)"), "")[V]()
    }

    function ot(e, t, a) {
        nt(e, t), n(function() {
            nt(e, "d-block")
        }, a || 300)
    }

    function rt(e, t) {
        for (var a = 0; a < e.length; a++)
            if (e[a] === t) return !0;
        return !1
    }

    function it(e, t) {
        return !!(e = new c("[?&]" + e + "=([^&#=]*)"))[se](t) && t[F](e)[1]
    }

    function lt(e) {
        try {
            return f[S](e)
        } catch (e) {
            return !1
        }
    }(e = new g).onload = e.onerror = function() {
        ! function(e) {
            e || (Me = "")
        }(2 == e.height)
    }, e[Y] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    var st = a[h]("header"),
        ct = a[h]("search-toggle"),
        dt = a[h]("search-header"),
        ut = a[h]("navbar-toggle"),
        ft = a[h]("navbar"),
        gt = a[h]("back-to-top"),
        mt = a[h]("dark-toggler"),
        pt = a[y]("html"),
        ht = a[h]("comment-button"),
        yt = a[h]("threaded-comment-form"),
        vt = a[h]("comment-editor"),
        bt = a[h]("comment-editor-src"),
        At = a[h]("comment-script"),
        wt = a[v](".comment-reply"),
        jt = a[v](".entry-text noscript"),
        It = a[v](".contact-form-blogger"),
        kt = a[h]("ads-post"),
        xt = a[h]("post-body"),
        Dt = a[y](".related-posts"),
        Pt = a[y](".related-inline"),
        Ct = it("page", qe),
        _t = null !== u && 1 == u[O + he]("lazy");
    ! function(e) {
        t[D + x](Ae, function() {
            var t, a = this[U];
			
			a > 73.5 ? at(st, "is-fixed"):nt(st, "is-fixed"),
			//Scroll up
			a < e ? at(st, "show"):nt(st, "show"),
			e = a;
			
/*
    $(".header-inner").each(function() {
        var e = $(this);
        if (1 == fixedMenu && e.length > 0) {
            var t = $(document).scrollTop()
              , a = e.offset().top
              , o = e.height()
              , r = a + o + o;
            $(window).scroll(function() {
                var o = $(document).scrollTop();
                o > r ? e.addClass("is-fixed") : (o < a || o <= 1) && e.removeClass("is-fixed"),
                o > t ? e.removeClass("show") : e.addClass("show"),
                t = o
            })
        }
    })
*/
        }, !1)
    }(0);
    var St = function(e) {
        var a, n, o, r, i, l, s, c;	
        "IMG" == e[p] && (
			(c = e.getAttribute("data-src")).match(/(bp.blogspot|blogger.googleusercontent|lh3.googleusercontent)/) ? (s = _t ? t.devicePixelRatio && 1 < t.devicePixelRatio ? t.devicePixelRatio : 1.5 : 1, 
                a = (e.offsetWidth * s).toFixed(0), 
                n = (e.parentElement.offsetWidth * s).toFixed(0), 
                o = (e.parentElement.parentElement.offsetWidth * s).toFixed(0), 
                r = (e.offsetHeight * s).toFixed(0), 
                i = c.split("/"), l = c.lastIndexOf("=") + 1, 
                s = "", 
                s = tt(e.parentElement, "ratio") ? "w" + a + "-h" + r + "-p-k-no-nu" + Me : "s" + (s = a < 30 ? n < 30 ? o : n : a) + Me, 
                c = c.match(/(img\/a|proxy\/)/) ? l ? c.slice(0, l) + s : c + "=" + s : c.replace(i[i.length - 2], s), 
                e.setAttribute("data-src", c)
            ) :
			((c = e.getAttribute("data-src")).match(/(play-lh.googleusercontent)/) ? (
				s = _t ? t.devicePixelRatio && 1 < t.devicePixelRatio ? t.devicePixelRatio : 1.5 : 1,
				a = (e.offsetWidth * s).toFixed(0),
				n = (e.parentElement.offsetWidth * s).toFixed(0),
				o = (e.parentElement.parentElement.offsetWidth * s).toFixed(0),
				r = (e.offsetHeight * s).toFixed(0),
				i = c.split("/"),
				l = c.lastIndexOf("=") + 1,
				s = "",
				s = tt(e.parentElement, "ratio") ? "w" + a + "-h" + r + "-p-k-no-nu" + Me : "s" + (s = a < 30 ? n < 30 ? o : n : a) + Me, 
				c = l ? c.slice(0, l) + s : c + "=" + s ,
				e.setAttribute("data-src", c)

			) :
			c.match(/(img.youtube|i.ytimg)/) && (c = c.substr(0, c.lastIndexOf("/")) + "/sddefault.jpg", e.setAttribute("data-src", c)))

		)
    };

    function $t(e, t) {
        var a = new d;
        a[K](O, e), a[re](De, Pe), a[Z](null), a.addEventListener(ve, function() {
            var e = a[ie].match(/<title>(.*?)<\/title>/);
            t[m] = e[1].replace(Ne + Ge, "")
        })
    }
    

    jo.loadCustomPosts = function(e) {
        
        var a = (Math.random() + 1).toString(36).substr(7),
            n = e.getAttribute("data-label"),
            o = e.getAttribute("data-title"),
            c = e.getAttribute("data-items"),
            d = e.getAttribute("data-shuffle"),
            u = e.getAttribute("data-no-item"),
            f = e.getAttribute("data-func"),
            g = e.getAttribute("data-callback"),
            p = u ? l(c) + 1 : c,
            h = n || e.innerHTML,
            y = h.split(",");

            

        n = "", n = 1 < y.length ? h ? "-/" + s(y[Math.floor(Math.random() * y.length)]) + "/?" : "?" : h && h != be ? "-/" + s(h.trim()) + "/?" : "?";
        Defer.js(Le + "/feeds/posts/summary/" + n + "alt=json&callback=jo." + Se + "_" + _ + "_" + a + "&max-results=" + p),
		jo[Se + "_" + _ + "_" + a] = function(n) {
            var s = l(n.feed.openSearch$totalResults.$t),
                p = n.feed.category;
            if (0 < s) {

                for (var h = {
                        title: o,
                        posts: [],
                        categories: p
                    }, y = n.feed.entry, v = 0, b = 0; b < y.length; ++b) {
                    var A, w, j = y[b],
                        I = j.link[j.link.length - 1].href;

                    if (v == c) break;
                    I != u && (v++, 
					(A = {}).grup_id = a, 
					A.url = I, 
                    A.id = j.id.$t.split("-").pop(),
					A.title = j[le].$t, 
					A.summary = j.summary.$t.trim(), 
					A.img = j.media$thumbnail && j.media$thumbnail.url, 
					A.author = j.author[0].name.$t, 
					A.comment = j.thr$total && j.thr$total.$t, 
					A.label = j.category, 
					w = j.published.$t, 
					j = (I = new Date(w)).getDate(),
					w = I.getMonth() + 1, 
					I = I.getFullYear(), 
					A.date = j + "/" + w + "/" + I, 
					h.posts.push(A))
                }
                typeof(n = t[f]) === xe && 0 < h.posts.length && (d && (h.posts = function(e) {
                    for (var t = e.slice(), a = t.length - 1; 0 < a; a--) {
                        var n = i[de](i.random() * (a + 1)),
                            o = t[a];
                        t[a] = t[n], t[n] = o
                    }
                    return t
                }(h.posts).slice(0, d)), e.innerHTML = n(h).trim(), nt(e, "visually-hidden"), Defer.dom(".lazy-" + a, 1, "loaded", St),bm_tbstatus(), !g || typeof(n = t[g]) === xe && n())
            }
        }


    };
	

	jo[sh] = function(e) {
		
		
		function PostMeta(e) {

			var t = {
					title: "",
					link: "",
					dev: "",
					mod:"",
					img: "",
					logo:"https://lh3.googleusercontent.com/-FHuL4igDbjI/Yoi3IU_pEmI/AAAAAAAAFyc/moRg-vpIFDkbjEmXaKoD8Ia2037h-b7RACNcBGAsYHQ/w100-h100-c-rw/netapk-logo-512.png",
					rate: "4.8",
					rc: "63245",
					version: "Full",
					play: "",
					content: "",
					dl: "#",
					ver: "",
					size:"",
					apk: "",
					os: "4.4",
					age: "4",
					lang: "en",
					cate: "",
					cates: [],
					olds: ""
				},

				a = e.link,
				r = e.summary.$t;
			t.title = e.title.$t, t.img = e.media$thumbnail.url, t.cate = e.category[0].term, t.content = r.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 180)+"...";
			for (var p = 0, o = a; p < o.length; p++) 
				o[p].href.toLowerCase().match("dev.app") && (t.dev = o[p].type),
				o[p].href.toLowerCase().match("mod.app") && (t.mod = o[p].type),
				o[p].href.toLowerCase().match("name.app") && (t.name = o[p].type),
				o[p].href.toLowerCase().match("logo.app") && (t.logo = o[p].type),
				o[p].href.toLowerCase().match("apk.app") && (t.apk = o[p].type),
				o[p].href.toLowerCase().match("play.app") && (t.play = o[p].type),
				o[p].href.toLowerCase().match("age.app") && (t.age = o[p].type),
				o[p].href.toLowerCase().match("os.app") && (t.os = o[p].type),
				o[p].href.toLowerCase().match("lang.app") && (t.lang = o[p].type),
				o[p].href.toLowerCase().match("ra.app") && (t.rate = o[p].type),
				o[p].href.toLowerCase().match("rc.app") && (t.rc = o[p].type),
				o[p].href.toLowerCase().match("size.app") && (t.size = o[p].type),
				o[p].type.toLowerCase().match("text/html") && (t.link = o[p].href),
				o[p].href.toLowerCase().match("ver.app") && (t.version = o[p].type),
				o[p].type.toLowerCase().match("^new:") && (t.dl = o[p].href),
				o[p].type.toLowerCase().match("^new:") && (t.new = o[p].type.replace(/:/g, "|").replace(/^new\|/g, o[p].href + "|")),
				o[p].type.toLowerCase().match("^ver:") && (t.ver += o[p].type.replace(/:/g, "|").replace(/^ver\|/g, o[p].href + "|") + "||"),
				o[p].type.toLowerCase().match("^ver:") && (t.olds += o[p].type.split(":").pop() + "," + o[p].href + ";"),
				o[p].type.toLowerCase().match("^new:") && (t.olds += o[p].type.split(":").pop() + "," + o[p].href + ";"),
				o[p].type.toLowerCase().match("^new:") && (t.ver += o[p].type.replace(/:/g, "|").replace(/^new\|/g, o[p].href + "|") + "||");

			e.category.forEach(function (cc) {t.cates.push(cc.term), (cc.term == mod_cate && t.mod=="")&& (t.mod=mod_def) });
			return t
		}


		console.log("DEBUG SHORTCODE");		
		var data = e.getAttribute("data-shortcode");
			console.log(data);
		var obj = eval('(' + data + ')');
		var furl = siteUrl + "/feeds/posts/summary/-/" + obj.label + "?alt=json&callback=netapk_pick&max-results=" + obj.number;

		Defer.js(furl),
		netapk_pick = function(n) {
			var s = parseInt(n.feed.openSearch$totalResults.$t);
			var r = '<div class="gadget-block">';
			
			if (0 < s && obj.number > 0) {
			
				for ( var i=0;  en = n.feed.entry, i < n.feed.entry.length;  i++ ) {
					var p = PostMeta(n.feed.entry[i]);
					r += '<div class="block-item item-'+i+'">';
					r += '<a class="jt-bg-light d-block shadow-sm br-8 ratio ratio-16x9 mb-2" href="'+ p.link +'"><img alt="'+p.title+'" width="160" height="90" data-src="' + p.img + '" class="br-8 lazyload" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></a>';
					
					r += '<div class="d-flex align-items-center br-8 mb-2">';
						r += '<a class="d-block block-apk-icon shadow-sm me-2 br-8" href="'+ p.link +'"><img alt="'+p.title+'" width="56" height="56" data-src="' + p.logo + '" class="br-8 lazyload" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/></a>';
					r += '<div class="item-content h-100 align-self-start">'
						r += '<h3 class="item-title fw-semibold m-0"><a class="text-reset truncate" href="'+p.link+'">'+ p.title +'</a></h3>';
						r += '<span class="fs-8 truncate">'+ (p.mod ? ('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/></svg> '+ p.mod) : p.cate) +'</span>';
					r += '</div>';
					r += '</div>';
					r += '</div>'

				}
			
			}
			r += '</div>';
			e.innerHTML = e.innerHTML + r,Defer.dom(".gadget-block .lazyload", 1, "loaded", St);
		}
	};

    function Tt() {
        (ct && ct[M] || ut && ut[M] ? nt : at)(st, "header-animate")
    }

    function Rt(e, t) {
        function n(a) {
            e[me](a[J]) || (t(), o())
        }
        var o = function() {
            a[P + x](we, n)
        };
        a.addEventListener(we, n)
    }

    function Bt(e) {
        e != bt.href && (at(yt, "loader"), bt.href = e, vt[Y] = e), tt(yt, "d-none") && (nt(yt, "d-none"), e = At[N][F](/<script.*?src='(.*?)'/)[1], Defer.js(e, "comment-js", 500, function() {
            BLOG_CMT_createIframe(Be + Oe + "rpc_relay.html")
        }))
    }
    ct && ct[D + x]("change", function() {
        Tt(), this[M] && n(function() {
            a[h]("search-input").focus()
        }, 100), Rt(dt, function() {
            ct[M] = !1, Tt()
        })
    }), ut && ut[D + x]("change", function() {
        var e, t;
        Tt(), this[M] ? (t = "show", at(e = ft, "d-block"), n(function() {
            at(e, t)
        }, 100), Rt(ft, function() {
            ut[M] = !1, Tt(), ot(ft, "show")
        })) : ot(ft, "show")
    }), mt && mt[D + x](we, function(e) {
        e[ne](),
            function(e, t) {
                (tt(e, t) ? nt : at)(e, t)
            }(pt, "dark-mode"), null !== u && u[B + he]("theme", tt(pt, "dark-mode") ? "dark" : "light")
    }), t[D + x](Ae, function() {
        (1 <= this[U] && null !== st ? at : nt)(st, "shadow-sm"), (1e3 <= this[U] && null !== gt ? nt : at)(gt, "d-none")
    }, !1), vt && vt[D + x](ve, function(e) {
        nt(yt, "loader")
    }), ht && ht[D + x](we, function(e) {
        e[ne](), Bt(this.href), "add-comment" != yt[ae][C] && a[h]("add-comment")[L](yt)
    });
    for (var Ot = 0; Ot < wt.length; ++Ot) wt[Ot][D + x](we, function(e) {
        e[ne](), e = this.getAttribute("data-comment-id"), Bt(this.href), yt[ae][C] != "c" + e && a[h]("c" + e)[L](yt)
    });
    for (Ot = 0; Ot < It.length; ++Ot) {
        It[Ot][D + x]("submit", function(e) {
            e[ne]();
            var t = e[J];
            at(t, "loading");
            var a = new FormData(t),
                n = "blogID=" + He;
            a.forEach(function(e, t) {
                n += "&" + s(t) + "=" + s(e)
            }), e = Be + Oe + "contact-form.do", (a = new d)[K]("post", e), a[re](De, "application/x-www-form-urlencoded"), a[Z](n), a.onreadystatechange = function() {
                var e;
                nt(t, "loading"), 4 === this.readyState && 200 === this.status && "" != this.response && ((e = lt(this[ie][V]())) && "true" == e.details.emailSentStatus ? (t.reset(), nt(t, "send-error"), at(t, "send-success")) : (nt(t, "send-success"), at(t, "send-error")))
            }
        })
    }

    function Mt(e) {
        if (e && (a[P + x](je, Mt), a[P + x](Ie, Mt), a[P + x](Ae, Mt)), Defer.dom(".custom-posts", 1, null, jo[_e], null, {
                rootMargin: "200%"
            }),
			Defer.dom(".shortcode", 1, null, jo[sh], null, {
                rootMargin: "200%"
            }), 0 < jt.length) {
            for (var t = 0; t < jt.length; ++t) {
                var n = jt[t],
                    o = n[m],
                    r = a[A]("textarea");
                r[m] = o.replace(/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'), (o = a[A]("div"))[m] = r.value, 0 == t && at(o, "feature-image full-width"), n[ae][H + G](o, n)
				
				console.log("loop o:",o);
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", St, null, {
                rootMargin: "200%"
            })
        }
        if (null !== xt) {
            if (null !== Dt 
			&& null !== Pt
			&& (Pt[m] = Dt[m], 
			Pt.setAttribute("data-no-item", 
			Dt.getAttribute("data-no-item"))
			
			), null !== kt) {
                var s = xt[v](Qe + "," + Xe),
                    c = kt[b],
                    d = c.length,
                    u = [];
                for (t = 0; t < s.length; t++) {
                    var f = s[t][Q](Xe);
                    f && s[t] != f || u[T](s[t])
                }
                var g;
                for (t = 0; t < d; t++) t == d - 1 ? xt[L](c[0]) : (g = t == d - 1 ? u.length - 1 : Math.round(u.length / d) * t,
					(g = 0 == t ? u[0] : u[g][ye]) && g[ae][H + G](c[0], g))
            }
            if (Ve && Ve != be && Ke && null !== xt[q]) {
                var h = xt[v]("h2,h3,h4,h5,h6"),
                    w = a[A]("div"),
                    I = (e = xt[y](Ze), []);
                for (t = 0; t < h.length; t++) {
                    var k = h[t],
                        D = k[pe].replace(/[^\w!?]/g, "_").replace(/__/g, "_"),
                        _ = l(k[p].replace("H", ""));
                    k[C] = D, I[T]({
                        level: _,
                        title: k[pe],
                        id: D
                    })
                }
                null === e ? e = xt[q] : e[ye] && (e = e[ye]), 0 < I.length && (w[m] = Ke(I)[V](), e && e[ae][H + G](w, e))
            }
        }
        Ee || (Je && (typeof adsbygoogle === ke && (adsbygoogle = []), Defer.js(Be + "pagead2.googlesyndication.com/pagead/js/" + Te + ".js?client=" + Je, Te, 100)), We && We != be && Defer.js(Be + "www.googletagmanager.com/gtag/js?id=" + We, Re, 100, function() {
            function e() {
                dataLayer[T](arguments)
            }
            e("js", new Date), e($e, We)
        }), et && et()), He && Defer.css(Be + Oe + "dyn-css/authorization.css?targetBlogID=" + He)
    }
    Ct && (a[le] = a[le].replace(Ne, Ne + Fe + " " + Ct + Ne)), Defer.dom(".lazyload", 1, "loaded", St), Defer.dom("#post-pager", 1, null, function(e) {
        for (var t = e[v]("a"), n = 0; n < t.length; ++n) {
            var o = t[n],
                r = o.href,
                i = a[A]("span");
            at(i, "d-block fw-bold pt-2 jt-text-primary"), o[L](i), $t(r, i)
        }
    }, null, {
        rootMargin: "200%"
    }), Defer.dom("#pagination", 1, null, function(e) {
        var n, o, r, c, d, u, f, g;

        function p(e, i, l) {
            var s = a[A]("li"),
                d = a[A]("span");
            return at(d, "btn btn-sm rounded-pill jt-icon-center"), d[m] = l || e, d.setAttribute("data-page", e), e == i ? at(d, "jt-btn-primary") : (at(d, "jt-btn-light hover-btn-primary"), d[D + x](we, function(e) {
                var a;
                e[ne](), 1 == (g = d.getAttribute("data-page")) ? (a = o ? Le + "/search" + c + "?max-results=" + n + "&page=" + g : Le, t[X].href = a) : (a = (g - 1) * n, Defer.js(Le + "/feeds/posts/summary/" + r + "?start-index=" + a + "&alt=json&callback=jo." + Ce + "_date&max-results=1"))
            })), s[L](d), s
        }
		
        e.getAttribute("data-pagination") != be ? (n = e.getAttribute("data-posts"), o = e.getAttribute("data-label"), r = (o = s(o)) ? "-/" + o + "/" : "", c = o ? "/label/" + o : "", Defer.js(Le + "/feeds/posts/summary/" + r + "?alt=json&callback=jo." + Ce + "_" + _ + "&max-results=1"), d = it("max-results", qe), u = it("page", qe), f = d || n, g = u || 1, jo[Ce + "_" + _] = function(t) {
            var o = t.feed,
                r = l(o.openSearch$totalResults.$t);
            if (n < r) {
                t = function(e, t, a, n) {
                    e = l(e), t = l(t), a = l(a), n = l(n);
                    var o, r, s = i[ce](e / a);
                    t < 1 ? t = 1 : s < t && (t = s), r = s <= n ? (o = 1, s) : (e = i[de](n / 2), a = i[ce](n / 2) - 1, t <= e ? (o = 1, n) : s <= t + a ? (o = s - n + 1, s) : (o = t - e, t + a));
                    for (var c = (t - 1) * a, d = (n = i[fe](c + a - 1, e - 1), []), u = 0; u < r + 1 - o; u++) d[T](u);
                    return d = d[ge](function(e) {
                        return o + e
                    }), {
                        totalItems: e,
                        currentPage: t,
                        pageSize: a,
                        totalPages: s,
                        startPage: o,
                        endPage: r,
                        startIndex: c,
                        endIndex: n,
                        pages: d
                    }
                }(r, g, f, 5);
                var s = a[A]("ul");
                o = t.totalPages, 1 != t.currentPage && (r = p(t.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'), s[L](r)), rt(t.pages, 1) || (d = p(1, t.currentPage, "1 . ."), s[L](d));
                for (var c = 0; c < t.pages.length; c++) {
                    var d = p(t.pages[c], t.currentPage);
                    s[L](d)
                }
                rt(t.pages, o) || (d = p(o, t.currentPage, ". . " + o), s[L](d)), t.currentPage != o && (o = p(t.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'), s[L](o)), e[m] = "", at(s, "pagination mb-0"), e[L](s), nt(e, "visually-hidden")
            }
        }, jo[Ce + "_date"] = function(e) {
            e = (e = (e = e.feed.entry[0]).published.$t.substr(0, 19) + e.published.$t.substr(23, 29)).replace("+", "%2B"), e = Le + "/search" + c + "?updated-max=" + e + "&max-results=" + f + "&page=" + g, t[X].href = e
        }) : nt(e, "visually-hidden")
    }, null, {
        rootMargin: "200%"
    }), _t ? Mt(!1) : (null !== u && u[B + he]("lazy", 1), a[D + x](je, Mt), a[D + x](Ie, Mt), a[D + x](Ae, Mt))
}();
