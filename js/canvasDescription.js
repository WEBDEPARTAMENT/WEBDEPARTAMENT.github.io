function run() {
    window.scrollTo(0, 0), $("canvas").animate({opacity: 1}, 700), render()
}

function render() {
    window.requestAnimFrame(render), renderThree()
}

function initThree() {
    container = $("#description__canvas")[0], camera = new THREE.PerspectiveCamera(75, $(".description").innerWidth / ($(".description").innerHeight * canvasHeight), 1, 1e4), camera.position.z = 1e3, scene = new THREE.Scene, particles = new Array;
    for (var e = 2 * Math.PI, t = new THREE.SpriteCanvasMaterial({
        color: 0, program: function (t) {
            t.beginPath(), t.arc(0, 0, .5, 0, e, !0), t.fill()
        }
    }), r = 0, n = 0; AMOUNTX > n; n++) for (var i = 0; AMOUNTY > i; i++) particle = particles[r++] = new THREE.Sprite(t), particle.position.x = n * SEPARATION - AMOUNTX * SEPARATION / 2, particle.position.z = i * SEPARATION - AMOUNTY * SEPARATION / 2, scene.add(particle);
    renderer = new THREE.CanvasRenderer({alpha: !0}), renderer.setPixelRatio(window.devicePixelRatio), renderer.setSize(window.innerWidth, window.innerHeight * canvasHeight), renderer.setClearColor(0, 0), container.appendChild(renderer.domElement), document.addEventListener("mousemove", onDocumentMouseMove, !1), document.addEventListener("touchstart", onDocumentTouchStart, !1), document.addEventListener("touchmove", onDocumentTouchMove, !1), window.addEventListener("resize", onWindowResize, !1)
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2, camera.aspect = window.innerWidth / (window.innerHeight * canvasHeight), camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight * canvasHeight)
}

function onDocumentMouseMove(e) {
    mouseX = e.clientX - windowHalfX, mouseY = e.clientY - windowHalfY
}

function onDocumentTouchStart(e) {
    1 === e.touches.length && (mouseX = e.touches[0].pageX - windowHalfX, mouseY = e.touches[0].pageY - windowHalfY)
}

function onDocumentTouchMove(e) {
    1 === e.touches.length && (mouseX = e.touches[0].pageX - windowHalfX, mouseY = e.touches[0].pageY - windowHalfY)
}

function renderThree() {
    camera.position.x += .05 * (mouseX - camera.position.x), camera.position.y += .05 * (-(mouseY + scroll) - camera.position.y), camera.lookAt(scene.position);
    for (var e = 0, t = 0; AMOUNTX > t; t++) for (var r = 0; AMOUNTY > r; r++) particle = particles[e++], particle.position.y = 50 * Math.sin(.3 * (t + count)) + 50 * Math.sin(.5 * (r + count)), particle.scale.x = particle.scale.y = 4 * (Math.sin(.3 * (t + count)) + 1) + 4 * (Math.sin(.5 * (r + count)) + 1);
    renderer.render(scene, camera), count += .1
}

function mobileDesktopCheck() {
    return !isMobile && window.innerWidth < MIN_MOBILE_DESKTOP_WIDTH
}

function mobilecheck() {
    var e = !1;
    return function (t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}

function getRandomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
}

$(document).ready(function () {
    $("#description__canvas").length && (initThree(), run(), onWindowResize())
}), !function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function r(e) {
        var t = "length" in e && e.length, r = J.type(e);
        return "function" !== r && !J.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function n(e, t, r) {
        if (J.isFunction(t)) return J.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== r
        });
        if (t.nodeType) return J.grep(e, function (e) {
            return e === t !== r
        });
        if ("string" == typeof t) {
            if (se.test(t)) return J.filter(t, e, r);
            t = J.filter(t, e)
        }
        return J.grep(e, function (e) {
            return X.call(t, e) >= 0 !== r
        })
    }

    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function o(e) {
        var t = fe[e] = {};
        return J.each(e.match(de) || [], function (e, r) {
            t[r] = !0
        }), t
    }

    function a() {
        Z.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), J.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = J.expando + s.uid++
    }

    function h(e, t, r) {
        var n;
        if (void 0 === r && 1 === e.nodeType) if (n = "data-" + t.replace(ye, "-$1").toLowerCase(), r = e.getAttribute(n), "string" == typeof r) {
            try {
                r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ve.test(r) ? J.parseJSON(r) : r)
            } catch (i) {
            }
            Te.set(e, t, r)
        } else r = void 0;
        return r
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (e) {
        }
    }

    function p(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function f(e) {
        var t = Oe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function E(e, t) {
        for (var r = 0, n = e.length; n > r; r++) ge.set(e[r], "globalEval", !t || ge.get(t[r], "globalEval"))
    }

    function m(e, t) {
        var r, n, i, o, a, s, h, c;
        if (1 === t.nodeType) {
            if (ge.hasData(e) && (o = ge.access(e), a = ge.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (i in c) for (r = 0, n = c[i].length; n > r; r++) J.event.add(t, i, c[i][r])
            }
            Te.hasData(e) && (s = Te.access(e), h = J.extend({}, s), Te.set(t, h))
        }
    }

    function g(e, t) {
        var r = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], r) : r
    }

    function T(e, t) {
        var r = t.nodeName.toLowerCase();
        "input" === r && be.test(e.type) ? t.checked = e.checked : ("input" === r || "textarea" === r) && (t.defaultValue = e.defaultValue)
    }

    function v(t, r) {
        var n, i = J(r.createElement(t)).appendTo(r.body),
            o = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(i[0])) ? n.display : J.css(i[0], "display");
        return i.detach(), o
    }

    function y(e) {
        var t = Z, r = Ue[e];
        return r || (r = v(e, t), "none" !== r && r || (Be = (Be || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Be[0].contentDocument, t.write(), t.close(), r = v(e, t), Be.detach()), Ue[e] = r), r
    }

    function R(e, t, r) {
        var n, i, o, a, s = e.style;
        return r = r || ze(e), r && (a = r.getPropertyValue(t) || r[t]), r && ("" !== a || J.contains(e.ownerDocument, e) || (a = J.style(e, t)), Ie.test(a) && Ge.test(t) && (n = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = r.width, s.width = n, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function x(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function H(e, t) {
        if (t in e) return t;
        for (var r = t[0].toUpperCase() + t.slice(1), n = t, i = Ke.length; i--;) if (t = Ke[i] + r, t in e) return t;
        return n
    }

    function b(e, t, r) {
        var n = We.exec(t);
        return n ? Math.max(0, n[1] - (r || 0)) + (n[2] || "px") : t
    }

    function w(e, t, r, n, i) {
        for (var o = r === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === r && (a += J.css(e, r + xe[o], !0, i)), n ? ("content" === r && (a -= J.css(e, "padding" + xe[o], !0, i)), "margin" !== r && (a -= J.css(e, "border" + xe[o] + "Width", !0, i))) : (a += J.css(e, "padding" + xe[o], !0, i), "padding" !== r && (a += J.css(e, "border" + xe[o] + "Width", !0, i)));
        return a
    }

    function M(e, t, r) {
        var n = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ze(e),
            a = "border-box" === J.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = R(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            n = a && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + w(e, t, r || (a ? "border" : "content"), n, o) + "px"
    }

    function S(e, t) {
        for (var r, n, i, o = [], a = 0, s = e.length; s > a; a++) n = e[a], n.style && (o[a] = ge.get(n, "olddisplay"), r = n.style.display, t ? (o[a] || "none" !== r || (n.style.display = ""), "" === n.style.display && He(n) && (o[a] = ge.access(n, "olddisplay", y(n.nodeName)))) : (i = He(n), "none" === r && i || ge.set(n, "olddisplay", i ? r : J.css(n, "display"))));
        for (a = 0; s > a; a++) n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function _(e, t, r, n, i) {
        return new _.prototype.init(e, t, r, n, i)
    }

    function C() {
        return setTimeout(function () {
            Qe = void 0
        }), Qe = J.now()
    }

    function A(e, t) {
        var r, n = 0, i = {height: e};
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) r = xe[n], i["margin" + r] = i["padding" + r] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, r) {
        for (var n, i = (rt[t] || []).concat(rt["*"]), o = 0, a = i.length; a > o; o++) if (n = i[o].call(r, t, e)) return n
    }

    function P(e, t, r) {
        var n, i, o, a, s, h, c, u, l = this, p = {}, d = e.style, f = e.nodeType && He(e), E = ge.get(e, "fxshow");
        r.queue || (s = J._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, h = s.empty.fire, s.empty.fire = function () {
            s.unqueued || h()
        }), s.unqueued++, l.always(function () {
            l.always(function () {
                s.unqueued--, J.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (r.overflow = [d.overflow, d.overflowX, d.overflowY], c = J.css(e, "display"), u = "none" === c ? ge.get(e, "olddisplay") || y(e.nodeName) : c, "inline" === u && "none" === J.css(e, "float") && (d.display = "inline-block")), r.overflow && (d.overflow = "hidden", l.always(function () {
            d.overflow = r.overflow[0], d.overflowX = r.overflow[1], d.overflowY = r.overflow[2]
        }));
        for (n in t) if (i = t[n], $e.exec(i)) {
            if (delete t[n], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                if ("show" !== i || !E || void 0 === E[n]) continue;
                f = !0
            }
            p[n] = E && E[n] || J.style(e, n)
        } else c = void 0;
        if (J.isEmptyObject(p)) "inline" === ("none" === c ? y(e.nodeName) : c) && (d.display = c); else {
            E ? "hidden" in E && (f = E.hidden) : E = ge.access(e, "fxshow", {}), o && (E.hidden = !f), f ? J(e).show() : l.done(function () {
                J(e).hide()
            }), l.done(function () {
                var t;
                ge.remove(e, "fxshow");
                for (t in p) J.style(e, t, p[t])
            });
            for (n in p) a = L(f ? E[n] : 0, n, l), n in E || (E[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function k(e, t) {
        var r, n, i, o, a;
        for (r in e) if (n = J.camelCase(r), i = t[n], o = e[r], J.isArray(o) && (i = o[1], o = e[r] = o[0]), r !== n && (e[n] = o, delete e[r]), a = J.cssHooks[n], a && "expand" in a) {
            o = a.expand(o), delete e[n];
            for (r in o) r in e || (e[r] = o[r], t[r] = i)
        } else t[n] = i
    }

    function D(e, t, r) {
        var n, i, o = 0, a = tt.length, s = J.Deferred().always(function () {
            delete h.elem
        }), h = function () {
            if (i) return !1;
            for (var t = Qe || C(), r = Math.max(0, c.startTime + c.duration - t), n = r / c.duration || 0, o = 1 - n, a = 0, h = c.tweens.length; h > a; a++) c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, r]), 1 > o && h ? r : (s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e,
            props: J.extend({}, t),
            opts: J.extend(!0, {specialEasing: {}}, r),
            originalProperties: t,
            originalOptions: r,
            startTime: Qe || C(),
            duration: r.duration,
            tweens: [],
            createTween: function (t, r) {
                var n = J.Tween(e, c.opts, t, r, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (t) {
                var r = 0, n = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n > r; r++) c.tweens[r].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (k(u, c.opts.specialEasing); a > o; o++) if (n = tt[o].call(c, e, u, c.opts)) return n;
        return J.map(u, L, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(h, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function F(e) {
        return function (t, r) {
            "string" != typeof t && (r = t, t = "*");
            var n, i = 0, o = t.toLowerCase().match(de) || [];
            if (J.isFunction(r)) for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(r)) : (e[n] = e[n] || []).push(r)
        }
    }

    function O(e, t, r, n) {
        function i(s) {
            var h;
            return o[s] = !0, J.each(e[s] || [], function (e, s) {
                var c = s(t, r, n);
                return "string" != typeof c || a || o[c] ? a ? !(h = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), h
        }

        var o = {}, a = e === vt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function V(e, t) {
        var r, n, i = J.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && J.extend(!0, e, n), e
    }

    function N(e, t, r) {
        for (var n, i, o, a, s = e.contents, h = e.dataTypes; "*" === h[0];) h.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n) for (i in s) if (s[i] && s[i].test(n)) {
            h.unshift(i);
            break
        }
        if (h[0] in r) o = h[0]; else {
            for (i in r) {
                if (!h[0] || e.converters[i + " " + h[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== h[0] && h.unshift(o), r[o]) : void 0
    }

    function B(e, t, r, n) {
        var i, o, a, s, h, c = {}, u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;) if (e.responseFields[o] && (r[e.responseFields[o]] = t), !h && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), h = o, o = u.shift()) if ("*" === o) o = h; else if ("*" !== h && h !== o) {
            if (a = c[h + " " + o] || c["* " + o], !a) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[h + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], u.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (l) {
                return {state: "parsererror", error: a ? l : "No conversion from " + h + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function U(e, t, r, n) {
        var i;
        if (J.isArray(t)) J.each(t, function (t, i) {
            r || bt.test(e) ? n(e, i) : U(e + "[" + ("object" == typeof i ? t : "") + "]", i, r, n)
        }); else if (r || "object" !== J.type(t)) n(e, t); else for (i in t) U(e + "[" + i + "]", t[i], r, n)
    }

    function G(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var I = [], z = I.slice, j = I.concat, W = I.push, X = I.indexOf, q = {}, Y = q.toString, K = q.hasOwnProperty,
        Q = {}, Z = e.document, $ = "2.1.4", J = function (e, t) {
            return new J.fn.init(e, t)
        }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, re = /-([\da-z])/gi, ne = function (e, t) {
            return t.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: $, constructor: J, selector: "", length: 0, toArray: function () {
            return z.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        }, pushStack: function (e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return J.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(J.map(this, function (t, r) {
                return e.call(t, r, t)
            }))
        }, slice: function () {
            return this.pushStack(z.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, r = +e + (0 > e ? t : 0);
            return this.pushStack(r >= 0 && t > r ? [this[r]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: W, sort: I.sort, splice: I.splice
    }, J.extend = J.fn.extend = function () {
        var e, t, r, n, i, o, a = arguments[0] || {}, s = 1, h = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || J.isFunction(a) || (a = {}), s === h && (a = this, s--); h > s; s++) if (null != (e = arguments[s])) for (t in e) r = a[t], n = e[t], a !== n && (c && n && (J.isPlainObject(n) || (i = J.isArray(n))) ? (i ? (i = !1, o = r && J.isArray(r) ? r : []) : o = r && J.isPlainObject(r) ? r : {}, a[t] = J.extend(c, o, n)) : void 0 !== n && (a[t] = n));
        return a
    }, J.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === J.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isPlainObject: function (e) {
            return "object" === J.type(e) && !e.nodeType && !J.isWindow(e) && !(e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[Y.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, r = eval;
            e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : r(e))
        }, camelCase: function (e) {
            return e.replace(te, "ms-").replace(re, ne)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var i, o = 0, a = e.length, s = r(e);
            if (n) {
                if (s) for (; a > o && (i = t.apply(e[o], n), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], n), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? J.merge(n, "string" == typeof e ? [e] : e) : W.call(n, e)), n
        }, inArray: function (e, t, r) {
            return null == t ? -1 : X.call(t, e, r)
        }, merge: function (e, t) {
            for (var r = +t.length, n = 0, i = e.length; r > n; n++) e[i++] = t[n];
            return e.length = i, e
        }, grep: function (e, t, r) {
            for (var n, i = [], o = 0, a = e.length, s = !r; a > o; o++) n = !t(e[o], o), n !== s && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var i, o = 0, a = e.length, s = r(e), h = [];
            if (s) for (; a > o; o++) i = t(e[o], o, n), null != i && h.push(i); else for (o in e) i = t(e[o], o, n), null != i && h.push(i);
            return j.apply([], h)
        }, guid: 1, proxy: function (e, t) {
            var r, n, i;
            return "string" == typeof t && (r = e[t], t = e, e = r), J.isFunction(e) ? (n = z.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(z.call(arguments)))
            }, i.guid = e.guid = e.guid || J.guid++, i) : void 0
        }, now: Date.now, support: Q
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        q["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function (e) {
        function t(e, t, r, n) {
            var i, o, a, s, h, c, l, d, f, E;
            if ((t ? t.ownerDocument || t : U) !== P && L(t), t = t || P, r = r || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return r;
            if (!n && D) {
                if (11 !== s && (i = Te.exec(e))) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return r;
                        if (o.id === a) return r.push(o), r
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && N(t, o) && o.id === a) return r.push(o), r
                } else {
                    if (i[2]) return $.apply(r, t.getElementsByTagName(e)), r;
                    if ((a = i[3]) && R.getElementsByClassName) return $.apply(r, t.getElementsByClassName(a)), r
                }
                if (R.qsa && (!F || !F.test(e))) {
                    if (d = l = B, f = t, E = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = w(e), (l = t.getAttribute("id")) ? d = l.replace(ye, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", h = c.length; h--;) c[h] = d + p(c[h]);
                        f = ve.test(e) && u(t.parentNode) || t, E = c.join(",")
                    }
                    if (E) try {
                        return $.apply(r, f.querySelectorAll(E)), r
                    } catch (m) {
                    } finally {
                        l || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(he, "$1"), t, r, n)
        }

        function r() {
            function e(r, n) {
                return t.push(r + " ") > x.cacheLength && delete e[t.shift()], e[r + " "] = n
            }

            var t = [];
            return e
        }

        function n(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var r = e.split("|"), n = e.length; n--;) x.attrHandle[r[n]] = t
        }

        function a(e, t) {
            var r = t && e,
                n = r && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
            if (n) return n;
            if (r) for (; r = r.nextSibling;) if (r === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var r = t.nodeName.toLowerCase();
                return "input" === r && t.type === e
            }
        }

        function h(e) {
            return function (t) {
                var r = t.nodeName.toLowerCase();
                return ("input" === r || "button" === r) && t.type === e
            }
        }

        function c(e) {
            return n(function (t) {
                return t = +t, n(function (r, n) {
                    for (var i, o = e([], r.length, t), a = o.length; a--;) r[i = o[a]] && (r[i] = !(n[i] = r[i]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function l() {
        }

        function p(e) {
            for (var t = 0, r = e.length, n = ""; r > t; t++) n += e[t].value;
            return n
        }

        function d(e, t, r) {
            var n = t.dir, i = r && "parentNode" === n, o = I++;
            return t.first ? function (t, r, o) {
                for (; t = t[n];) if (1 === t.nodeType || i) return e(t, r, o)
            } : function (t, r, a) {
                var s, h, c = [G, o];
                if (a) {
                    for (; t = t[n];) if ((1 === t.nodeType || i) && e(t, r, a)) return !0
                } else for (; t = t[n];) if (1 === t.nodeType || i) {
                    if (h = t[B] || (t[B] = {}), (s = h[n]) && s[0] === G && s[1] === o) return c[2] = s[2];
                    if (h[n] = c, c[2] = e(t, r, a)) return !0
                }
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, r, n) {
                for (var i = e.length; i--;) if (!e[i](t, r, n)) return !1;
                return !0
            } : e[0]
        }

        function E(e, r, n) {
            for (var i = 0, o = r.length; o > i; i++) t(e, r[i], n);
            return n
        }

        function m(e, t, r, n, i) {
            for (var o, a = [], s = 0, h = e.length, c = null != t; h > s; s++) (o = e[s]) && (!r || r(o, n, i)) && (a.push(o), c && t.push(s));
            return a
        }

        function g(e, t, r, i, o, a) {
            return i && !i[B] && (i = g(i)), o && !o[B] && (o = g(o, a)), n(function (n, a, s, h) {
                var c, u, l, p = [], d = [], f = a.length, g = n || E(t || "*", s.nodeType ? [s] : s, []),
                    T = !e || !n && t ? g : m(g, p, e, s, h), v = r ? o || (n ? e : f || i) ? [] : a : T;
                if (r && r(T, v, s, h), i) for (c = m(v, d), i(c, [], s, h), u = c.length; u--;) (l = c[u]) && (v[d[u]] = !(T[d[u]] = l));
                if (n) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = v.length; u--;) (l = v[u]) && c.push(T[u] = l);
                            o(null, v = [], c, h)
                        }
                        for (u = v.length; u--;) (l = v[u]) && (c = o ? ee(n, l) : p[u]) > -1 && (n[c] = !(a[c] = l))
                    }
                } else v = m(v === a ? v.splice(f, v.length) : v), o ? o(null, a, v, h) : $.apply(a, v)
            })
        }

        function T(e) {
            for (var t, r, n, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, h = d(function (e) {
                return e === t
            }, a, !0), c = d(function (e) {
                return ee(t, e) > -1
            }, a, !0), u = [function (e, r, n) {
                var i = !o && (n || r !== _) || ((t = r).nodeType ? h(e, r, n) : c(e, r, n));
                return t = null, i
            }]; i > s; s++) if (r = x.relative[e[s].type]) u = [d(f(u), r)]; else {
                if (r = x.filter[e[s].type].apply(null, e[s].matches), r[B]) {
                    for (n = ++s; i > n && !x.relative[e[n].type]; n++) ;
                    return g(s > 1 && f(u), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(he, "$1"), r, n > s && T(e.slice(s, n)), i > n && T(e = e.slice(n)), i > n && p(e))
                }
                u.push(r)
            }
            return f(u)
        }

        function v(e, r) {
            var i = r.length > 0, o = e.length > 0, a = function (n, a, s, h, c) {
                var u, l, p, d = 0, f = "0", E = n && [], g = [], T = _, v = n || o && x.find.TAG("*", c),
                    y = G += null == T ? 1 : Math.random() || .1, R = v.length;
                for (c && (_ = a !== P && a); f !== R && null != (u = v[f]); f++) {
                    if (o && u) {
                        for (l = 0; p = e[l++];) if (p(u, a, s)) {
                            h.push(u);
                            break
                        }
                        c && (G = y)
                    }
                    i && ((u = !p && u) && d--, n && E.push(u))
                }
                if (d += f, i && f !== d) {
                    for (l = 0; p = r[l++];) p(E, g, a, s);
                    if (n) {
                        if (d > 0) for (; f--;) E[f] || g[f] || (g[f] = Q.call(h));
                        g = m(g)
                    }
                    $.apply(h, g), c && !n && g.length > 0 && d + r.length > 1 && t.uniqueSort(h)
                }
                return c && (G = y, _ = T), E
            };
            return i ? n(a) : a
        }

        var y, R, x, H, b, w, M, S, _, C, A, L, P, k, D, F, O, V, N, B = "sizzle" + 1 * new Date, U = e.document, G = 0,
            I = 0, z = r(), j = r(), W = r(), X = function (e, t) {
                return e === t && (A = !0), 0
            }, q = 1 << 31, Y = {}.hasOwnProperty, K = [], Q = K.pop, Z = K.push, $ = K.push, J = K.slice,
            ee = function (e, t) {
                for (var r = 0, n = e.length; n > r; r++) if (e[r] === t) return r;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = ne.replace("w", "w#"),
            oe = "\\[" + re + "*(" + ne + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]",
            ae = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(re + "+", "g"), he = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            ce = new RegExp("^" + re + "*," + re + "*"), ue = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            le = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"), pe = new RegExp(ae),
            de = new RegExp("^" + ie + "$"), fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            }, Ee = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/,
            Te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ye = /'|\\/g,
            Re = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"), xe = function (e, t, r) {
                var n = "0x" + t - 65536;
                return n !== n || r ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, He = function () {
                L()
            };
        try {
            $.apply(K = J.call(U.childNodes), U.childNodes), K[U.childNodes.length].nodeType
        } catch (be) {
            $ = {
                apply: K.length ? function (e, t) {
                    Z.apply(e, J.call(t))
                } : function (e, t) {
                    for (var r = e.length, n = 0; e[r++] = t[n++];) ;
                    e.length = r - 1
                }
            }
        }
        R = t.support = {}, b = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, r, n = e ? e.ownerDocument || e : U;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, k = n.documentElement, r = n.defaultView, r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", He, !1) : r.attachEvent && r.attachEvent("onunload", He)), D = !b(n), R.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), R.getElementsByTagName = i(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), R.getElementsByClassName = ge.test(n.getElementsByClassName), R.getById = i(function (e) {
                return k.appendChild(e).id = B, !n.getElementsByName || !n.getElementsByName(B).length
            }), R.getById ? (x.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var r = t.getElementById(e);
                    return r && r.parentNode ? [r] : []
                }
            }, x.filter.ID = function (e) {
                var t = e.replace(Re, xe);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function (e) {
                var t = e.replace(Re, xe);
                return function (e) {
                    var r = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return r && r.value === t
                }
            }), x.find.TAG = R.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : R.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var r, n = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; r = o[i++];) 1 === r.nodeType && n.push(r);
                    return n
                }
                return o
            }, x.find.CLASS = R.getElementsByClassName && function (e, t) {
                return D ? t.getElementsByClassName(e) : void 0
            }, O = [], F = [], (R.qsa = ge.test(n.querySelectorAll)) && (i(function (e) {
                k.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || F.push(".#.+[+~]")
            }), i(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (R.matchesSelector = ge.test(V = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && i(function (e) {
                R.disconnectedMatch = V.call(e, "div"), V.call(e, "[s!='']:x"), O.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(k.compareDocumentPosition), N = t || ge.test(k.contains) ? function (e, t) {
                var r = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t) return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !R.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === U && N(U, e) ? -1 : t === n || t.ownerDocument === U && N(U, t) ? 1 : C ? ee(C, e) - ee(C, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return A = !0, 0;
                var r, i = 0, o = e.parentNode, s = t.parentNode, h = [e], c = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : C ? ee(C, e) - ee(C, t) : 0;
                if (o === s) return a(e, t);
                for (r = e; r = r.parentNode;) h.unshift(r);
                for (r = t; r = r.parentNode;) c.unshift(r);
                for (; h[i] === c[i];) i++;
                return i ? a(h[i], c[i]) : h[i] === U ? -1 : c[i] === U ? 1 : 0
            }, n) : P
        }, t.matches = function (e, r) {
            return t(e, null, null, r)
        }, t.matchesSelector = function (e, r) {
            if ((e.ownerDocument || e) !== P && L(e), r = r.replace(le, "='$1']"), !(!R.matchesSelector || !D || O && O.test(r) || F && F.test(r))) try {
                var n = V.call(e, r);
                if (n || R.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (i) {
            }
            return t(r, P, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== P && L(e), N(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== P && L(e);
            var r = x.attrHandle[t.toLowerCase()],
                n = r && Y.call(x.attrHandle, t.toLowerCase()) ? r(e, t, !D) : void 0;
            return void 0 !== n ? n : R.attributes || !D ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, r = [], n = 0, i = 0;
            if (A = !R.detectDuplicates, C = !R.sortStable && e.slice(0), e.sort(X), A) {
                for (; t = e[i++];) t === e[i] && (n = r.push(i));
                for (; n--;) e.splice(r[n], 1)
            }
            return C = null, e
        }, H = t.getText = function (e) {
            var t, r = "", n = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) r += H(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[n++];) r += H(t);
            return r
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Re, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(Re, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, r = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : r && pe.test(r) && (t = w(r, !0)) && (t = r.indexOf(")", r.length - t) - r.length) && (e[0] = e[0].slice(0, t), e[2] = r.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Re, xe).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, r, n) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === r : !r || (o += "", "=" === r ? o === n : "!=" === r ? o !== n : "^=" === r ? n && 0 === o.indexOf(n) : "*=" === r ? n && o.indexOf(n) > -1 : "$=" === r ? n && o.slice(-n.length) === n : "~=" === r ? (" " + o.replace(se, " ") + " ").indexOf(n) > -1 : "|=" === r && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, r, n, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === n && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, r, h) {
                        var c, u, l, p, d, f, E = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            g = s && t.nodeName.toLowerCase(), T = !h && !s;
                        if (m) {
                            if (o) {
                                for (; E;) {
                                    for (l = t; l = l[E];) if (s ? l.nodeName.toLowerCase() === g : 1 === l.nodeType) return !1;
                                    f = E = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? m.firstChild : m.lastChild], a && T) {
                                for (u = m[B] || (m[B] = {}), c = u[e] || [], d = c[0] === G && c[1], p = c[0] === G && c[2], l = d && m.childNodes[d]; l = ++d && l && l[E] || (p = d = 0) || f.pop();) if (1 === l.nodeType && ++p && l === t) {
                                    u[e] = [G, d, p];
                                    break
                                }
                            } else if (T && (c = (t[B] || (t[B] = {}))[e]) && c[0] === G) p = c[1]; else for (; (l = ++d && l && l[E] || (p = d = 0) || f.pop()) && ((s ? l.nodeName.toLowerCase() !== g : 1 !== l.nodeType) || !++p || (T && ((l[B] || (l[B] = {}))[e] = [G, p]), l !== t));) ;
                            return p -= i, p === n || p % n === 0 && p / n >= 0
                        }
                    }
                }, PSEUDO: function (e, r) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(r) : o.length > 1 ? (i = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                        for (var n, i = o(e, r), a = i.length; a--;) n = ee(e, i[a]), e[n] = !(t[n] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [], r = [], i = M(e.replace(he, "$1"));
                    return i[B] ? n(function (e, t, r, n) {
                        for (var o, a = i(e, null, n, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, n, o) {
                        return t[0] = e, i(t, null, o, r), t[0] = null, !r.pop();
                    }
                }), has: n(function (e) {
                    return function (r) {
                        return t(e, r).length > 0
                    }
                }), contains: n(function (e) {
                    return e = e.replace(Re, xe), function (t) {
                        return (t.textContent || t.innerText || H(t)).indexOf(e) > -1
                    }
                }), lang: n(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Re, xe).toLowerCase(), function (t) {
                        var r;
                        do if (r = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return r = r.toLowerCase(), r === e || 0 === r.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var r = e.location && e.location.hash;
                    return r && r.slice(1) === t.id
                }, root: function (e) {
                    return e === k
                }, focus: function (e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !x.pseudos.empty(e)
                }, header: function (e) {
                    return me.test(e.nodeName)
                }, input: function (e) {
                    return Ee.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, r) {
                    return [0 > r ? r + t : r]
                }), even: c(function (e, t) {
                    for (var r = 0; t > r; r += 2) e.push(r);
                    return e
                }), odd: c(function (e, t) {
                    for (var r = 1; t > r; r += 2) e.push(r);
                    return e
                }), lt: c(function (e, t, r) {
                    for (var n = 0 > r ? r + t : r; --n >= 0;) e.push(n);
                    return e
                }), gt: c(function (e, t, r) {
                    for (var n = 0 > r ? r + t : r; ++n < t;) e.push(n);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[y] = s(y);
        for (y in{submit: !0, reset: !0}) x.pseudos[y] = h(y);
        return l.prototype = x.filters = x.pseudos, x.setFilters = new l, w = t.tokenize = function (e, r) {
            var n, i, o, a, s, h, c, u = j[e + " "];
            if (u) return r ? 0 : u.slice(0);
            for (s = e, h = [], c = x.preFilter; s;) {
                (!n || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), h.push(o = [])), n = !1, (i = ue.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(he, " ")
                }), s = s.slice(n.length));
                for (a in x.filter) !(i = fe[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return r ? s.length : s ? t.error(e) : j(e, h).slice(0)
        }, M = t.compile = function (e, t) {
            var r, n = [], i = [], o = W[e + " "];
            if (!o) {
                for (t || (t = w(e)), r = t.length; r--;) o = T(t[r]), o[B] ? n.push(o) : i.push(o);
                o = W(e, v(i, n)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, r, n) {
            var i, o, a, s, h, c = "function" == typeof e && e, l = !n && w(e = c.selector || e);
            if (r = r || [], 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && R.getById && 9 === t.nodeType && D && x.relative[o[1].type]) {
                    if (t = (x.find.ID(a.matches[0].replace(Re, xe), t) || [])[0], !t) return r;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);) if ((h = x.find[s]) && (n = h(a.matches[0].replace(Re, xe), ve.test(o[0].type) && u(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = n.length && p(o), !e) return $.apply(r, n), r;
                    break
                }
            }
            return (c || M(e, l))(n, t, !D, r, ve.test(e) && u(t.parentNode) || t), r
        }, R.sortStable = B.split("").sort(X).join("") === B, R.detectDuplicates = !!A, L(), R.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, r) {
            return r ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), R.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, r) {
            var n;
            return r ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    J.find = ie, J.expr = ie.selectors, J.expr[":"] = J.expr.pseudos, J.unique = ie.uniqueSort, J.text = ie.getText, J.isXMLDoc = ie.isXML, J.contains = ie.contains;
    var oe = J.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
    J.filter = function (e, t, r) {
        var n = t[0];
        return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? J.find.matchesSelector(n, e) ? [n] : [] : J.find.matches(e, J.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, J.fn.extend({
        find: function (e) {
            var t, r = this.length, n = [], i = this;
            if ("string" != typeof e) return this.pushStack(J(e).filter(function () {
                for (t = 0; r > t; t++) if (J.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) J.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(n(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(n(this, e || [], !0))
        }, is: function (e) {
            return !!n(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
        }
    });
    var he, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = J.fn.init = function (e, t) {
        var r, n;
        if (!e) return this;
        if ("string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ae.test(r[1]) && J.isPlainObject(t)) for (r in t) J.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return n = Z.getElementById(r[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
    };
    ue.prototype = J.fn, he = J(Z);
    var le = /^(?:parents|prev(?:Until|All))/, pe = {children: !0, contents: !0, next: !0, prev: !0};
    J.extend({
        dir: function (e, t, r) {
            for (var n = [], i = void 0 !== r; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && J(e).is(r)) break;
                n.push(e)
            }
            return n
        }, sibling: function (e, t) {
            for (var r = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && r.push(e);
            return r
        }
    }), J.fn.extend({
        has: function (e) {
            var t = J(e, this), r = t.length;
            return this.filter(function () {
                for (var e = 0; r > e; e++) if (J.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            for (var r, n = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i > n; n++) for (r = this[n]; r && r !== t; r = r.parentNode) if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && J.find.matchesSelector(r, e))) {
                o.push(r);
                break
            }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? X.call(J(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return J.dir(e, "parentNode")
        }, parentsUntil: function (e, t, r) {
            return J.dir(e, "parentNode", r)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return J.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return J.dir(e, "previousSibling")
        }, nextUntil: function (e, t, r) {
            return J.dir(e, "nextSibling", r)
        }, prevUntil: function (e, t, r) {
            return J.dir(e, "previousSibling", r)
        }, siblings: function (e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return J.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || J.merge([], e.childNodes)
        }
    }, function (e, t) {
        J.fn[e] = function (r, n) {
            var i = J.map(this, t, r);
            return "Until" !== e.slice(-5) && (n = r), n && "string" == typeof n && (i = J.filter(n, i)), this.length > 1 && (pe[e] || J.unique(i), le.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var de = /\S+/g, fe = {};
    J.Callbacks = function (e) {
        e = "string" == typeof e ? fe[e] || o(e) : J.extend({}, e);
        var t, r, n, i, a, s, h = [], c = !e.once && [], u = function (o) {
            for (t = e.memory && o, r = !0, s = i || 0, i = 0, a = h.length, n = !0; h && a > s; s++) if (h[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            n = !1, h && (c ? c.length && u(c.shift()) : t ? h = [] : l.disable())
        }, l = {
            add: function () {
                if (h) {
                    var r = h.length;
                    !function o(t) {
                        J.each(t, function (t, r) {
                            var n = J.type(r);
                            "function" === n ? e.unique && l.has(r) || h.push(r) : r && r.length && "string" !== n && o(r)
                        })
                    }(arguments), n ? a = h.length : t && (i = r, u(t))
                }
                return this
            }, remove: function () {
                return h && J.each(arguments, function (e, t) {
                    for (var r; (r = J.inArray(t, h, r)) > -1;) h.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                }), this
            }, has: function (e) {
                return e ? J.inArray(e, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], a = 0, this
            }, disable: function () {
                return h = c = t = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return c = void 0, t || l.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return !h || r && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : u(t)), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    }, J.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]],
                r = "pending", n = {
                    state: function () {
                        return r
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return J.Deferred(function (r) {
                            J.each(t, function (t, o) {
                                var a = J.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[o[0] + "With"](this === n ? r.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? J.extend(e, n) : n
                    }
                }, i = {};
            return n.pipe = n.then, J.each(t, function (e, o) {
                var a = o[2], s = o[3];
                n[o[1]] = a.add, s && a.add(function () {
                    r = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? n : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), n.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, r, n, i = 0, o = z.call(arguments), a = o.length,
                s = 1 !== a || e && J.isFunction(e.promise) ? a : 0, h = 1 === s ? e : J.Deferred(),
                c = function (e, r, n) {
                    return function (i) {
                        r[e] = this, n[e] = arguments.length > 1 ? z.call(arguments) : i, n === t ? h.notifyWith(r, n) : --s || h.resolveWith(r, n)
                    }
                };
            if (a > 1) for (t = new Array(a), r = new Array(a), n = new Array(a); a > i; i++) o[i] && J.isFunction(o[i].promise) ? o[i].promise().done(c(i, n, o)).fail(h.reject).progress(c(i, r, t)) : --s;
            return s || h.resolveWith(n, o), h.promise()
        }
    });
    var Ee;
    J.fn.ready = function (e) {
        return J.ready.promise().done(e), this
    }, J.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? J.readyWait++ : J.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (Ee.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
        }
    }), J.ready.promise = function (t) {
        return Ee || (Ee = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), Ee.promise(t)
    }, J.ready.promise();
    var me = J.access = function (e, t, r, n, i, o, a) {
        var s = 0, h = e.length, c = null == r;
        if ("object" === J.type(r)) {
            i = !0;
            for (s in r) J.access(e, t, s, r[s], !0, o, a)
        } else if (void 0 !== n && (i = !0, J.isFunction(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function (e, t, r) {
            return c.call(J(e), r)
        })), t)) for (; h > s; s++) t(e[s], r, a ? n : n.call(e[s], s, t(e[s], r)));
        return i ? e : c ? t.call(e) : h ? t(e[0], r) : o
    };
    J.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = J.acceptData, s.prototype = {
        key: function (e) {
            if (!s.accepts(e)) return 0;
            var t = {}, r = e[this.expando];
            if (!r) {
                r = s.uid++;
                try {
                    t[this.expando] = {value: r}, Object.defineProperties(e, t)
                } catch (n) {
                    t[this.expando] = r, J.extend(e, t)
                }
            }
            return this.cache[r] || (this.cache[r] = {}), r
        }, set: function (e, t, r) {
            var n, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) o[t] = r; else if (J.isEmptyObject(o)) J.extend(this.cache[i], t); else for (n in t) o[n] = t[n];
            return o
        }, get: function (e, t) {
            var r = this.cache[this.key(e)];
            return void 0 === t ? r : r[t]
        }, access: function (e, t, r) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === r ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, J.camelCase(t))) : (this.set(e, t, r), void 0 !== r ? r : t)
        }, remove: function (e, t) {
            var r, n, i, o = this.key(e), a = this.cache[o];
            if (void 0 === t) this.cache[o] = {}; else {
                J.isArray(t) ? n = t.concat(t.map(J.camelCase)) : (i = J.camelCase(t), t in a ? n = [t, i] : (n = i, n = n in a ? [n] : n.match(de) || [])), r = n.length;
                for (; r--;) delete a[n[r]]
            }
        }, hasData: function (e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ge = new s, Te = new s, ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ye = /([A-Z])/g;
    J.extend({
        hasData: function (e) {
            return Te.hasData(e) || ge.hasData(e)
        }, data: function (e, t, r) {
            return Te.access(e, t, r)
        }, removeData: function (e, t) {
            Te.remove(e, t)
        }, _data: function (e, t, r) {
            return ge.access(e, t, r)
        }, _removeData: function (e, t) {
            ge.remove(e, t)
        }
    }), J.fn.extend({
        data: function (e, t) {
            var r, n, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Te.get(o), 1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
                    for (r = a.length; r--;) a[r] && (n = a[r].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), h(o, n, i[n])));
                    ge.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Te.set(this, e)
            }) : me(this, function (t) {
                var r, n = J.camelCase(e);
                if (o && void 0 === t) {
                    if (r = Te.get(o, e), void 0 !== r) return r;
                    if (r = Te.get(o, n), void 0 !== r) return r;
                    if (r = h(o, n, void 0), void 0 !== r) return r
                } else this.each(function () {
                    var r = Te.get(this, n);
                    Te.set(this, n, t), -1 !== e.indexOf("-") && void 0 !== r && Te.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Te.remove(this, e)
            })
        }
    }), J.extend({
        queue: function (e, t, r) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = ge.get(e, t), r && (!n || J.isArray(r) ? n = ge.access(e, t, J.makeArray(r)) : n.push(r)), n || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var r = J.queue(e, t), n = r.length, i = r.shift(), o = J._queueHooks(e, t), a = function () {
                J.dequeue(e, t)
            };
            "inprogress" === i && (i = r.shift(), n--), i && ("fx" === t && r.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var r = t + "queueHooks";
            return ge.get(e, r) || ge.access(e, r, {
                empty: J.Callbacks("once memory").add(function () {
                    ge.remove(e, [t + "queue", r])
                })
            })
        }
    }), J.fn.extend({
        queue: function (e, t) {
            var r = 2;
            return "string" != typeof e && (t = e, e = "fx", r--), arguments.length < r ? J.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var r = J.queue(this, e, t);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && J.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                J.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var r, n = 1, i = J.Deferred(), o = this, a = this.length, s = function () {
                --n || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) r = ge.get(o[a], e + "queueHooks"), r && r.empty && (n++, r.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, xe = ["Top", "Right", "Bottom", "Left"],
        He = function (e, t) {
            return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
        }, be = /^(?:checkbox|radio)$/i;
    !function () {
        var e = Z.createDocumentFragment(), t = e.appendChild(Z.createElement("div")), r = Z.createElement("input");
        r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var we = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Me = /^key/, Se = /^(?:mouse|pointer|contextmenu)|click/, _e = /^(?:focusinfocus|focusoutblur)$/,
        Ce = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function (e, t, r, n, i) {
            var o, a, s, h, c, u, l, p, d, f, E, m = ge.get(e);
            if (m) for (r.handler && (o = r, r = o.handler, i = o.selector), r.guid || (r.guid = J.guid++), (h = m.events) || (h = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                return typeof J !== we && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(de) || [""], c = t.length; c--;) s = Ce.exec(t[c]) || [], d = E = s[1], f = (s[2] || "").split(".").sort(), d && (l = J.event.special[d] || {}, d = (i ? l.delegateType : l.bindType) || d, l = J.event.special[d] || {}, u = J.extend({
                type: d,
                origType: E,
                data: n,
                handler: r,
                guid: r.guid,
                selector: i,
                needsContext: i && J.expr.match.needsContext.test(i),
                namespace: f.join(".")
            }, o), (p = h[d]) || (p = h[d] = [], p.delegateCount = 0, l.setup && l.setup.call(e, n, f, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), l.add && (l.add.call(e, u), u.handler.guid || (u.handler.guid = r.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[d] = !0)
        },
        remove: function (e, t, r, n, i) {
            var o, a, s, h, c, u, l, p, d, f, E, m = ge.hasData(e) && ge.get(e);
            if (m && (h = m.events)) {
                for (t = (t || "").match(de) || [""], c = t.length; c--;) if (s = Ce.exec(t[c]) || [], d = E = s[1], f = (s[2] || "").split(".").sort(), d) {
                    for (l = J.event.special[d] || {}, d = (n ? l.delegateType : l.bindType) || d, p = h[d] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) u = p[o], !i && E !== u.origType || r && r.guid !== u.guid || s && !s.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, l.remove && l.remove.call(e, u));
                    a && !p.length && (l.teardown && l.teardown.call(e, f, m.handle) !== !1 || J.removeEvent(e, d, m.handle), delete h[d])
                } else for (d in h) J.event.remove(e, d + t[c], r, n, !0);
                J.isEmptyObject(h) && (delete m.handle, ge.remove(e, "events"))
            }
        },
        trigger: function (t, r, n, i) {
            var o, a, s, h, c, u, l, p = [n || Z], d = K.call(t, "type") ? t.type : t,
                f = K.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !_e.test(d + J.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[J.expando] ? t : new J.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), r = null == r ? [t] : J.makeArray(r, [t]), l = J.event.special[d] || {}, i || !l.trigger || l.trigger.apply(n, r) !== !1)) {
                if (!i && !l.noBubble && !J.isWindow(n)) {
                    for (h = l.delegateType || d, _e.test(h + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (n.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? h : l.bindType || d, u = (ge.get(a, "events") || {})[t.type] && ge.get(a, "handle"), u && u.apply(a, r), u = c && a[c], u && u.apply && J.acceptData(a) && (t.result = u.apply(a, r), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), r) !== !1 || !J.acceptData(n) || c && J.isFunction(n[d]) && !J.isWindow(n) && (s = n[c], s && (n[c] = null), J.event.triggered = d, n[d](), J.event.triggered = void 0, s && (n[c] = s)), t.result
            }
        },
        dispatch: function (e) {
            e = J.event.fix(e);
            var t, r, n, i, o, a = [], s = z.call(arguments), h = (ge.get(this, "events") || {})[e.type] || [],
                c = J.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = J.event.handlers.call(this, e, h), t = 0; (i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, r = 0; (o = i.handlers[r++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, n = ((J.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var r, n, i, o, a = [], s = t.delegateCount, h = e.target;
            if (s && h.nodeType && (!e.button || "click" !== e.type)) for (; h !== this; h = h.parentNode || this) if (h.disabled !== !0 || "click" !== e.type) {
                for (n = [], r = 0; s > r; r++) o = t[r], i = o.selector + " ", void 0 === n[i] && (n[i] = o.needsContext ? J(i, this).index(h) >= 0 : J.find(i, this, null, [h]).length), n[i] && n.push(o);
                n.length && a.push({elem: h, handlers: n})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var r, n, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || Z, n = r.documentElement, i = r.body, e.pageX = t.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[J.expando]) return e;
            var t, r, n, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Se.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new J.Event(o), t = n.length; t--;) r = n[t], e[r] = o[r];
            return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return J.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, r, n) {
            var i = J.extend(new J.Event, r, {type: e, isSimulated: !0, originalEvent: {}});
            n ? J.event.trigger(i, null, t) : J.event.dispatch.call(t, i), i.isDefaultPrevented() && r.preventDefault()
        }
    }, J.removeEvent = function (e, t, r) {
        e.removeEventListener && e.removeEventListener(t, r, !1)
    }, J.Event = function (e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
    }, J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        J.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var r, n = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== n && !J.contains(n, i)) && (e.type = o.origType, r = o.handler.apply(this, arguments), e.type = t), r
            }
        }
    }), Q.focusinBubbles || J.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var r = function (e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this, i = ge.access(n, t);
                i || n.addEventListener(e, r, !0), ge.access(n, t, (i || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, i = ge.access(n, t) - 1;
                i ? ge.access(n, t, i) : (n.removeEventListener(e, r, !0), ge.remove(n, t))
            }
        }
    }), J.fn.extend({
        on: function (e, t, r, n, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (a in e) this.on(a, t, r, e[a], i);
                return this
            }
            if (null == r && null == n ? (n = t, r = t = void 0) : null == n && ("string" == typeof t ? (n = r, r = void 0) : (n = r, r = t, t = void 0)), n === !1) n = u; else if (!n) return this;
            return 1 === i && (o = n, n = function (e) {
                return J().off(e), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = J.guid++)), this.each(function () {
                J.event.add(this, e, n, r, t)
            })
        }, one: function (e, t, r, n) {
            return this.on(e, t, r, n, 1)
        }, off: function (e, t, r) {
            var n, i;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, J(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = u), this.each(function () {
                J.event.remove(this, e, r, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                J.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var r = this[0];
            return r ? J.event.trigger(e, t, r, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Le = /<([\w:]+)/,
        Pe = /<|&#?\w+;/, ke = /<(?:script|style|link)/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^$|\/(?:java|ecma)script/i, Oe = /^true\/(.*)/, Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ne = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ne.optgroup = Ne.option, Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead, Ne.th = Ne.td, J.extend({
        clone: function (e, t, r) {
            var n, i, o, a, s = e.cloneNode(!0), h = J.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e))) for (a = g(s), o = g(e), n = 0, i = o.length; i > n; n++) T(o[n], a[n]);
            if (t) if (r) for (o = o || g(e), a = a || g(s), n = 0, i = o.length; i > n; n++) m(o[n], a[n]); else m(e, s);
            return a = g(s, "script"), a.length > 0 && E(a, !h && g(e, "script")), s
        }, buildFragment: function (e, t, r, n) {
            for (var i, o, a, s, h, c, u = t.createDocumentFragment(), l = [], p = 0, d = e.length; d > p; p++) if (i = e[p], i || 0 === i) if ("object" === J.type(i)) J.merge(l, i.nodeType ? [i] : i); else if (Pe.test(i)) {
                for (o = o || u.appendChild(t.createElement("div")), a = (Le.exec(i) || ["", ""])[1].toLowerCase(), s = Ne[a] || Ne._default, o.innerHTML = s[1] + i.replace(Ae, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                J.merge(l, o.childNodes), o = u.firstChild, o.textContent = ""
            } else l.push(t.createTextNode(i));
            for (u.textContent = "", p = 0; i = l[p++];) if ((!n || -1 === J.inArray(i, n)) && (h = J.contains(i.ownerDocument, i), o = g(u.appendChild(i), "script"), h && E(o), r)) for (c = 0; i = o[c++];) Fe.test(i.type || "") && r.push(i);
            return u
        }, cleanData: function (e) {
            for (var t, r, n, i, o = J.event.special, a = 0; void 0 !== (r = e[a]); a++) {
                if (J.acceptData(r) && (i = r[ge.expando], i && (t = ge.cache[i]))) {
                    if (t.events) for (n in t.events) o[n] ? J.event.remove(r, n) : J.removeEvent(r, n, t.handle);
                    ge.cache[i] && delete ge.cache[i]
                }
                delete Te.cache[r[Te.expando]]
            }
        }
    }), J.fn.extend({
        text: function (e) {
            return me(this, function (e) {
                return void 0 === e ? J.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var r, n = e ? J.filter(e, this) : this, i = 0; null != (r = n[i]); i++) t || 1 !== r.nodeType || J.cleanData(g(r)), r.parentNode && (t && J.contains(r.ownerDocument, r) && E(g(r, "script")), r.parentNode.removeChild(r));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(g(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return J.clone(this, e, t)
            })
        }, html: function (e) {
            return me(this, function (e) {
                var t = this[0] || {}, r = 0, n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !Ne[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; n > r; r++) t = this[r] || {}, 1 === t.nodeType && (J.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, J.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = j.apply([], e);
            var r, n, i, o, a, s, h = 0, c = this.length, u = this, l = c - 1, p = e[0], E = J.isFunction(p);
            if (E || c > 1 && "string" == typeof p && !Q.checkClone && De.test(p)) return this.each(function (r) {
                var n = u.eq(r);
                E && (e[0] = p.call(this, r, n.html())), n.domManip(e, t)
            });
            if (c && (r = J.buildFragment(e, this[0].ownerDocument, !1, this), n = r.firstChild, 1 === r.childNodes.length && (r = n), n)) {
                for (i = J.map(g(r, "script"), d), o = i.length; c > h; h++) a = r, h !== l && (a = J.clone(a, !0, !0), o && J.merge(i, g(a, "script"))), t.call(this[h], a, h);
                if (o) for (s = i[i.length - 1].ownerDocument, J.map(i, f), h = 0; o > h; h++) a = i[h], Fe.test(a.type || "") && !ge.access(a, "globalEval") && J.contains(s, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(Ve, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        J.fn[e] = function (e) {
            for (var r, n = [], i = J(e), o = i.length - 1, a = 0; o >= a; a++) r = a === o ? this : this.clone(!0), J(i[a])[t](r), W.apply(n, r.get());
            return this.pushStack(n)
        }
    });
    var Be, Ue = {}, Ge = /^margin/, Ie = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"), ze = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            r = "1%" !== t.top, n = "4px" === t.width, i.removeChild(o)
        }

        var r, n, i = Z.documentElement, o = Z.createElement("div"), a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && J.extend(Q, {
            pixelPosition: function () {
                return t(), r
            }, boxSizingReliable: function () {
                return null == n && t(), n
            }, reliableMarginRight: function () {
                var t, r = a.appendChild(Z.createElement("div"));
                return r.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(r, null).marginRight), i.removeChild(o), a.removeChild(r), t
            }
        }))
    }(), J.swap = function (e, t, r, n) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = r.apply(e, n || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var je = /^(none|table(?!-c[ea]).+)/, We = new RegExp("^(" + Re + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + Re + ")", "i"),
        qe = {position: "absolute", visibility: "hidden", display: "block"},
        Ye = {letterSpacing: "0", fontWeight: "400"}, Ke = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var r = R(e, "opacity");
                        return "" === r ? "1" : r
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, r, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = J.camelCase(t), h = e.style;
                return t = J.cssProps[s] || (J.cssProps[s] = H(h, s)), a = J.cssHooks[t] || J.cssHooks[s], void 0 === r ? a && "get" in a && void 0 !== (i = a.get(e, !1, n)) ? i : h[t] : (o = typeof r, "string" === o && (i = Xe.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(J.css(e, t)), o = "number"), void(null != r && r === r && ("number" !== o || J.cssNumber[s] || (r += "px"), Q.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (h[t] = "inherit"), a && "set" in a && void 0 === (r = a.set(e, r, n)) || (h[t] = r))))
            }
        },
        css: function (e, t, r, n) {
            var i, o, a, s = J.camelCase(t);
            return t = J.cssProps[s] || (J.cssProps[s] = H(e.style, s)), a = J.cssHooks[t] || J.cssHooks[s], a && "get" in a && (i = a.get(e, !0, r)), void 0 === i && (i = R(e, t, n)), "normal" === i && t in Ye && (i = Ye[t]), "" === r || r ? (o = parseFloat(i),
                r === !0 || J.isNumeric(o) ? o || 0 : i) : i
        }
    }), J.each(["height", "width"], function (e, t) {
        J.cssHooks[t] = {
            get: function (e, r, n) {
                return r ? je.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, qe, function () {
                    return M(e, t, n)
                }) : M(e, t, n) : void 0
            }, set: function (e, r, n) {
                var i = n && ze(e);
                return b(e, r, n ? w(e, t, n, "border-box" === J.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), J.cssHooks.marginRight = x(Q.reliableMarginRight, function (e, t) {
        return t ? J.swap(e, {display: "inline-block"}, R, [e, "marginRight"]) : void 0
    }), J.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        J.cssHooks[e + t] = {
            expand: function (r) {
                for (var n = 0, i = {}, o = "string" == typeof r ? r.split(" ") : [r]; 4 > n; n++) i[e + xe[n] + t] = o[n] || o[n - 2] || o[0];
                return i
            }
        }, Ge.test(e) || (J.cssHooks[e + t].set = b)
    }), J.fn.extend({
        css: function (e, t) {
            return me(this, function (e, t, r) {
                var n, i, o = {}, a = 0;
                if (J.isArray(t)) {
                    for (n = ze(e), i = t.length; i > a; a++) o[t[a]] = J.css(e, t[a], !1, n);
                    return o
                }
                return void 0 !== r ? J.style(e, t, r) : J.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return S(this, !0)
        }, hide: function () {
            return S(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                He(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = _, _.prototype = {
        constructor: _, init: function (e, t, r, n, i, o) {
            this.elem = e, this.prop = r, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (J.cssNumber[r] ? "" : "px")
        }, cur: function () {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        }, run: function (e) {
            var t, r = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.fx = _.prototype.init, J.fx.step = {};
    var Qe, Ze, $e = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
        et = /queueHooks$/, tt = [P], rt = {
            "*": [function (e, t) {
                var r = this.createTween(e, t), n = r.cur(), i = Je.exec(t), o = i && i[3] || (J.cssNumber[e] ? "" : "px"),
                    a = (J.cssNumber[e] || "px" !== o && +n) && Je.exec(J.css(r.elem, e)), s = 1, h = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +n || 1;
                    do s = s || ".5", a /= s, J.style(r.elem, e, a + o); while (s !== (s = r.cur() / n) && 1 !== s && --h)
                }
                return i && (a = r.start = +a || +n || 0, r.unit = o, r.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), r
            }]
        };
    J.Animation = J.extend(D, {
        tweener: function (e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var r, n = 0, i = e.length; i > n; n++) r = e[n], rt[r] = rt[r] || [], rt[r].unshift(t)
        }, prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), J.speed = function (e, t, r) {
        var n = e && "object" == typeof e ? J.extend({}, e) : {
            complete: r || !r && t || J.isFunction(e) && e,
            duration: e,
            easing: r && t || t && !J.isFunction(t) && t
        };
        return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
        }, n
    }, J.fn.extend({
        fadeTo: function (e, t, r, n) {
            return this.filter(He).css("opacity", 0).show().end().animate({opacity: t}, e, r, n)
        }, animate: function (e, t, r, n) {
            var i = J.isEmptyObject(e), o = J.speed(t, r, n), a = function () {
                var t = D(this, J.extend({}, e), o);
                (i || ge.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, r) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = J.timers, a = ge.get(this);
                if (i) a[i] && a[i].stop && n(a[i]); else for (i in a) a[i] && a[i].stop && et.test(i) && n(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(r), t = !1, o.splice(i, 1));
                (t || !r) && J.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, r = ge.get(this), n = r[e + "queue"], i = r[e + "queueHooks"], o = J.timers,
                    a = n ? n.length : 0;
                for (r.finish = !0, J.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete r.finish
            })
        }
    }), J.each(["toggle", "show", "hide"], function (e, t) {
        var r = J.fn[t];
        J.fn[t] = function (e, n, i) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(A(t, !0), e, n, i)
        }
    }), J.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        J.fn[e] = function (e, r, n) {
            return this.animate(t, e, r, n)
        }
    }), J.timers = [], J.fx.tick = function () {
        var e, t = 0, r = J.timers;
        for (Qe = J.now(); t < r.length; t++) e = r[t], e() || r[t] !== e || r.splice(t--, 1);
        r.length || J.fx.stop(), Qe = void 0
    }, J.fx.timer = function (e) {
        J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
    }, J.fx.interval = 13, J.fx.start = function () {
        Ze || (Ze = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.stop = function () {
        clearInterval(Ze), Ze = null
    }, J.fx.speeds = {slow: 600, fast: 200, _default: 400}, J.fn.delay = function (e, t) {
        return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, r) {
            var n = setTimeout(t, e);
            r.stop = function () {
                clearTimeout(n)
            }
        })
    }, function () {
        var e = Z.createElement("input"), t = Z.createElement("select"), r = t.appendChild(Z.createElement("option"));
        e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = r.selected, t.disabled = !0, Q.optDisabled = !r.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
    }();
    var nt, it, ot = J.expr.attrHandle;
    J.fn.extend({
        attr: function (e, t) {
            return me(this, J.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                J.removeAttr(this, e)
            })
        }
    }), J.extend({
        attr: function (e, t, r) {
            var n, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === we ? J.prop(e, t, r) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), n = J.attrHooks[t] || (J.expr.match.bool.test(t) ? it : nt)), void 0 === r ? n && "get" in n && null !== (i = n.get(e, t)) ? i : (i = J.find.attr(e, t), null == i ? void 0 : i) : null !== r ? n && "set" in n && void 0 !== (i = n.set(e, r, t)) ? i : (e.setAttribute(t, r + ""), r) : void J.removeAttr(e, t)) : void 0
        }, removeAttr: function (e, t) {
            var r, n, i = 0, o = t && t.match(de);
            if (o && 1 === e.nodeType) for (; r = o[i++];) n = J.propFix[r] || r, J.expr.match.bool.test(r) && (e[n] = !1), e.removeAttribute(r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Q.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var r = e.value;
                        return e.setAttribute("type", t), r && (e.value = r), t
                    }
                }
            }
        }
    }), it = {
        set: function (e, t, r) {
            return t === !1 ? J.removeAttr(e, r) : e.setAttribute(r, r), r
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = ot[t] || J.find.attr;
        ot[t] = function (e, t, n) {
            var i, o;
            return n || (o = ot[t], ot[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function (e, t) {
            return me(this, J.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[J.propFix[e] || e]
            })
        }
    }), J.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, r) {
            var n, i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, i = J.propHooks[t]), void 0 !== r ? i && "set" in i && void 0 !== (n = i.set(e, r, t)) ? n : e[t] = r : i && "get" in i && null !== (n = i.get(e, t)) ? n : e[t]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (J.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        J.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function (e) {
            var t, r, n, i, o, a, s = "string" == typeof e && e, h = 0, c = this.length;
            if (J.isFunction(e)) return this.each(function (t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || "").match(de) || []; c > h; h++) if (r = this[h], n = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(st, " ") : " ")) {
                for (o = 0; i = t[o++];) n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                a = J.trim(n), r.className !== a && (r.className = a)
            }
            return this
        }, removeClass: function (e) {
            var t, r, n, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, h = 0, c = this.length;
            if (J.isFunction(e)) return this.each(function (t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || "").match(de) || []; c > h; h++) if (r = this[h], n = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(st, " ") : "")) {
                for (o = 0; i = t[o++];) for (; n.indexOf(" " + i + " ") >= 0;) n = n.replace(" " + i + " ", " ");
                a = e ? J.trim(n) : "", r.className !== a && (r.className = a)
            }
            return this
        }, toggleClass: function (e, t) {
            var r = typeof e;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function (r) {
                J(this).toggleClass(e.call(this, r, this.className, t), t)
            } : function () {
                if ("string" === r) for (var t, n = 0, i = J(this), o = e.match(de) || []; t = o[n++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (r === we || "boolean" === r) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ge.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", r = 0, n = this.length; n > r; r++) if (1 === this[r].nodeType && (" " + this[r].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    J.fn.extend({
        val: function (e) {
            var t, r, n, i = this[0];
            return arguments.length ? (n = J.isFunction(e), this.each(function (r) {
                var i;
                1 === this.nodeType && (i = n ? e.call(this, r, J(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : J.isArray(i) && (i = J.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = J.valHooks[i.type] || J.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(i, "value")) ? r : (r = i.value, "string" == typeof r ? r.replace(ht, "") : null == r ? "" : r)) : void 0
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, r, n = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : n.length, h = 0 > i ? s : o ? i : 0; s > h; h++) if (r = n[h], !(!r.selected && h !== i || (Q.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && J.nodeName(r.parentNode, "optgroup"))) {
                        if (t = J(r).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var r, n, i = e.options, o = J.makeArray(t), a = i.length; a--;) n = i[a], (n.selected = J.inArray(n.value, o) >= 0) && (r = !0);
                    return r || (e.selectedIndex = -1), o
                }
            }
        }
    }), J.each(["radio", "checkbox"], function () {
        J.valHooks[this] = {
            set: function (e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (J.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        J.fn[t] = function (e, r) {
            return arguments.length > 0 ? this.on(t, null, e, r) : this.trigger(t)
        }
    }), J.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, r) {
            return this.on(e, null, t, r)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, r, n) {
            return this.on(t, e, r, n)
        }, undelegate: function (e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }
    });
    var ct = J.now(), ut = /\?/;
    J.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, J.parseXML = function (e) {
        var t, r;
        if (!e || "string" != typeof e) return null;
        try {
            r = new DOMParser, t = r.parseFromString(e, "text/xml")
        } catch (n) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
    };
    var lt = /#.*$/, pt = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Et = /^(?:GET|HEAD)$/, mt = /^\/\//,
        gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Tt = {}, vt = {}, yt = "*/".concat("*"),
        Rt = e.location.href, xt = gt.exec(Rt.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rt,
            type: "GET",
            isLocal: ft.test(xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? V(V(e, J.ajaxSettings), t) : V(J.ajaxSettings, e)
        },
        ajaxPrefilter: F(Tt),
        ajaxTransport: F(vt),
        ajax: function (e, t) {
            function r(e, t, r, a) {
                var h, u, g, T, y, x = t;
                2 !== v && (v = 2, s && clearTimeout(s), n = void 0, o = a || "", R.readyState = e > 0 ? 4 : 0, h = e >= 200 && 300 > e || 304 === e, r && (T = N(l, R, r)), T = B(l, T, R, h), h ? (l.ifModified && (y = R.getResponseHeader("Last-Modified"), y && (J.lastModified[i] = y), y = R.getResponseHeader("etag"), y && (J.etag[i] = y)), 204 === e || "HEAD" === l.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = T.state, u = T.data, g = T.error, h = !g)) : (g = x, (e || !x) && (x = "error", 0 > e && (e = 0))), R.status = e, R.statusText = (t || x) + "", h ? f.resolveWith(p, [u, x, R]) : f.rejectWith(p, [R, x, g]), R.statusCode(m), m = void 0, c && d.trigger(h ? "ajaxSuccess" : "ajaxError", [R, l, h ? u : g]), E.fireWith(p, [R, x]), c && (d.trigger("ajaxComplete", [R, l]), --J.active || J.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, i, o, a, s, h, c, u, l = J.ajaxSetup({}, t), p = l.context || l,
                d = l.context && (p.nodeType || p.jquery) ? J(p) : J.event, f = J.Deferred(),
                E = J.Callbacks("once memory"), m = l.statusCode || {}, g = {}, T = {}, v = 0, y = "canceled", R = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === v) {
                            if (!a) for (a = {}; t = dt.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === v ? o : null
                    }, setRequestHeader: function (e, t) {
                        var r = e.toLowerCase();
                        return v || (e = T[r] = T[r] || e, g[e] = t), this
                    }, overrideMimeType: function (e) {
                        return v || (l.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > v) for (t in e) m[t] = [m[t], e[t]]; else R.always(e[R.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || y;
                        return n && n.abort(t), r(0, t), this
                    }
                };
            if (f.promise(R).complete = E.add, R.success = R.done, R.error = R.fail, l.url = ((e || l.url || Rt) + "").replace(lt, "").replace(mt, xt[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = J.trim(l.dataType || "*").toLowerCase().match(de) || [""], null == l.crossDomain && (h = gt.exec(l.url.toLowerCase()), l.crossDomain = !(!h || h[1] === xt[1] && h[2] === xt[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (xt[3] || ("http:" === xt[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = J.param(l.data, l.traditional)), O(Tt, l, t, R), 2 === v) return R;
            c = J.event && l.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Et.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (ut.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = pt.test(i) ? i.replace(pt, "$1_=" + ct++) : i + (ut.test(i) ? "&" : "?") + "_=" + ct++)), l.ifModified && (J.lastModified[i] && R.setRequestHeader("If-Modified-Since", J.lastModified[i]), J.etag[i] && R.setRequestHeader("If-None-Match", J.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && R.setRequestHeader("Content-Type", l.contentType), R.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : l.accepts["*"]);
            for (u in l.headers) R.setRequestHeader(u, l.headers[u]);
            if (l.beforeSend && (l.beforeSend.call(p, R, l) === !1 || 2 === v)) return R.abort();
            y = "abort";
            for (u in{success: 1, error: 1, complete: 1}) R[u](l[u]);
            if (n = O(vt, l, t, R)) {
                R.readyState = 1, c && d.trigger("ajaxSend", [R, l]), l.async && l.timeout > 0 && (s = setTimeout(function () {
                    R.abort("timeout")
                }, l.timeout));
                try {
                    v = 1, n.send(g, r)
                } catch (x) {
                    if (!(2 > v)) throw x;
                    r(-1, x)
                }
            } else r(-1, "No Transport");
            return R
        },
        getJSON: function (e, t, r) {
            return J.get(e, t, r, "json")
        },
        getScript: function (e, t) {
            return J.get(e, void 0, t, "script")
        }
    }), J.each(["get", "post"], function (e, t) {
        J[t] = function (e, r, n, i) {
            return J.isFunction(r) && (i = i || n, n = r, r = void 0), J.ajax({
                url: e,
                type: t,
                dataType: i,
                data: r,
                success: n
            })
        }
    }), J._evalUrl = function (e) {
        return J.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, J.fn.extend({
        wrapAll: function (e) {
            var t;
            return J.isFunction(e) ? this.each(function (t) {
                J(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(J.isFunction(e) ? function (t) {
                J(this).wrapInner(e.call(this, t))
            } : function () {
                var t = J(this), r = t.contents();
                r.length ? r.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = J.isFunction(e);
            return this.each(function (r) {
                J(this).wrapAll(t ? e.call(this, r) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, J.expr.filters.visible = function (e) {
        return !J.expr.filters.hidden(e)
    };
    var Ht = /%20/g, bt = /\[\]$/, wt = /\r?\n/g, Mt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    J.param = function (e, t) {
        var r, n = [], i = function (e, t) {
            t = J.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function () {
            i(this.name, this.value)
        }); else for (r in e) U(r, e[r], t, i);
        return n.join("&").replace(Ht, "+")
    }, J.fn.extend({
        serialize: function () {
            return J.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && St.test(this.nodeName) && !Mt.test(e) && (this.checked || !be.test(e))
            }).map(function (e, t) {
                var r = J(this).val();
                return null == r ? null : J.isArray(r) ? J.map(r, function (e) {
                    return {name: t.name, value: e.replace(wt, "\r\n")}
                }) : {name: t.name, value: r.replace(wt, "\r\n")}
            }).get()
        }
    }), J.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var _t = 0, Ct = {}, At = {0: 200, 1223: 204}, Lt = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Ct) Ct[e]()
    }), Q.cors = !!Lt && "withCredentials" in Lt, Q.ajax = Lt = !!Lt, J.ajaxTransport(function (e) {
        var t;
        return Q.cors || Lt && !e.crossDomain ? {
            send: function (r, n) {
                var i, o = e.xhr(), a = ++_t;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (i in r) o.setRequestHeader(i, r[i]);
                t = function (e) {
                    return function () {
                        t && (delete Ct[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? n(o.status, o.statusText) : n(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Ct[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            }, abort: function () {
                t && t()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), J.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, r;
            return {
                send: function (n, i) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", r = function (e) {
                        t.remove(), r = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), Z.head.appendChild(t[0])
                }, abort: function () {
                    r && r()
                }
            }
        }
    });
    var Pt = [], kt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Pt.pop() || J.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function (t, r, n) {
        var i, o, a,
            s = t.jsonp !== !1 && (kt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && kt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(kt, "$1" + i) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || J.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, n.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = r.jsonpCallback, Pt.push(i)), a && J.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), J.parseHTML = function (e, t, r) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (r = t, t = !1), t = t || Z;
        var n = ae.exec(e), i = !r && [];
        return n ? [t.createElement(n[1])] : (n = J.buildFragment([e], t, i), i && i.length && J(i).remove(), J.merge([], n.childNodes))
    };
    var Dt = J.fn.load;
    J.fn.load = function (e, t, r) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
        var n, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (n = J.trim(e.slice(s)), e = e.slice(0, s)), J.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && J.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(n ? J("<div>").append(J.parseHTML(e)).find(n) : e)
        }).complete(r && function (e, t) {
            a.each(r, o || [e.responseText, t, e])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        J.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), J.expr.filters.animated = function (e) {
        return J.grep(J.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Ft = e.document.documentElement;
    J.offset = {
        setOffset: function (e, t, r) {
            var n, i, o, a, s, h, c, u = J.css(e, "position"), l = J(e), p = {};
            "static" === u && (e.style.position = "relative"), s = l.offset(), o = J.css(e, "top"), h = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + h).indexOf("auto") > -1, c ? (n = l.position(), a = n.top, i = n.left) : (a = parseFloat(o) || 0, i = parseFloat(h) || 0), J.isFunction(t) && (t = t.call(e, r, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : l.css(p)
        }
    }, J.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                J.offset.setOffset(this, e, t)
            });
            var t, r, n = this[0], i = {top: 0, left: 0}, o = n && n.ownerDocument;
            return o ? (t = o.documentElement, J.contains(t, n) ? (typeof n.getBoundingClientRect !== we && (i = n.getBoundingClientRect()), r = G(o), {
                top: i.top + r.pageYOffset - t.clientTop,
                left: i.left + r.pageXOffset - t.clientLeft
            }) : i) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, r = this[0], n = {top: 0, left: 0};
                return "fixed" === J.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (n = e.offset()), n.top += J.css(e[0], "borderTopWidth", !0), n.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - J.css(r, "marginTop", !0),
                    left: t.left - n.left - J.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Ft; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || Ft
            })
        }
    }), J.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
        var n = "pageYOffset" === r;
        J.fn[t] = function (i) {
            return me(this, function (t, i, o) {
                var a = G(t);
                return void 0 === o ? a ? a[r] : t[i] : void(a ? a.scrollTo(n ? e.pageXOffset : o, n ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), J.each(["top", "left"], function (e, t) {
        J.cssHooks[t] = x(Q.pixelPosition, function (e, r) {
            return r ? (r = R(e, t), Ie.test(r) ? J(e).position()[t] + "px" : r) : void 0
        })
    }), J.each({Height: "height", Width: "width"}, function (e, t) {
        J.each({padding: "inner" + e, content: t, "": "outer" + e}, function (r, n) {
            J.fn[n] = function (n, i) {
                var o = arguments.length && (r || "boolean" != typeof n),
                    a = r || (n === !0 || i === !0 ? "margin" : "border");
                return me(this, function (t, r, n) {
                    var i;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === n ? J.css(t, r, a) : J.style(t, r, n, a)
                }, t, o ? n : void 0, o, null)
            }
        })
    }), J.fn.size = function () {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return J
    });
    var Ot = e.jQuery, Vt = e.$;
    return J.noConflict = function (t) {
        return e.$ === J && (e.$ = Vt), t && e.jQuery === J && (e.jQuery = Ot), J
    }, typeof t === we && (e.jQuery = e.$ = J), J
});
var THREE = {REVISION: "73"};
"function" == typeof define && define.amd ? define("three", THREE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = THREE), void 0 !== self.requestAnimationFrame && void 0 !== self.cancelAnimationFrame || function () {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !self.requestAnimationFrame; ++r) self.requestAnimationFrame = self[t[r] + "RequestAnimationFrame"], self.cancelAnimationFrame = self[t[r] + "CancelAnimationFrame"] || self[t[r] + "CancelRequestAnimationFrame"];
    void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function (t) {
        var r = Date.now(), n = Math.max(0, 16 - (r - e)), i = self.setTimeout(function () {
            t(r + n)
        }, n);
        return e = r + n, i
    }), void 0 === self.cancelAnimationFrame && void 0 !== self.clearTimeout && (self.cancelAnimationFrame = function (e) {
        self.clearTimeout(e)
    })
}(), void 0 === self.performance && (self.performance = {}), void 0 === self.performance.now && function () {
    var e = Date.now();
    self.performance.now = function () {
        return Date.now() - e
    }
}(), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function (e) {
    return 0 > e ? -1 : e > 0 ? 1 : +e
}), void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
    get: function () {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
    }
}), THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
}, THREE.CullFaceNone = 0, THREE.CullFaceBack = 1, THREE.CullFaceFront = 2, THREE.CullFaceFrontBack = 3, THREE.FrontFaceDirectionCW = 0, THREE.FrontFaceDirectionCCW = 1, THREE.BasicShadowMap = 0, THREE.PCFShadowMap = 1, THREE.PCFSoftShadowMap = 2, THREE.FrontSide = 0, THREE.BackSide = 1, THREE.DoubleSide = 2, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NoBlending = 0, THREE.NormalBlending = 1, THREE.AdditiveBlending = 2, THREE.SubtractiveBlending = 3, THREE.MultiplyBlending = 4, THREE.CustomBlending = 5, THREE.AddEquation = 100, THREE.SubtractEquation = 101, THREE.ReverseSubtractEquation = 102, THREE.MinEquation = 103, THREE.MaxEquation = 104, THREE.ZeroFactor = 200, THREE.OneFactor = 201, THREE.SrcColorFactor = 202, THREE.OneMinusSrcColorFactor = 203, THREE.SrcAlphaFactor = 204, THREE.OneMinusSrcAlphaFactor = 205, THREE.DstAlphaFactor = 206, THREE.OneMinusDstAlphaFactor = 207, THREE.DstColorFactor = 208, THREE.OneMinusDstColorFactor = 209, THREE.SrcAlphaSaturateFactor = 210, THREE.NeverDepth = 0, THREE.AlwaysDepth = 1, THREE.LessDepth = 2, THREE.LessEqualDepth = 3, THREE.EqualDepth = 4, THREE.GreaterEqualDepth = 5, THREE.GreaterDepth = 6, THREE.NotEqualDepth = 7, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.AddOperation = 2, THREE.UVMapping = 300, THREE.CubeReflectionMapping = 301, THREE.CubeRefractionMapping = 302, THREE.EquirectangularReflectionMapping = 303, THREE.EquirectangularRefractionMapping = 304, THREE.SphericalReflectionMapping = 305, THREE.RepeatWrapping = 1e3, THREE.ClampToEdgeWrapping = 1001, THREE.MirroredRepeatWrapping = 1002, THREE.NearestFilter = 1003, THREE.NearestMipMapNearestFilter = 1004, THREE.NearestMipMapLinearFilter = 1005, THREE.LinearFilter = 1006, THREE.LinearMipMapNearestFilter = 1007, THREE.LinearMipMapLinearFilter = 1008, THREE.UnsignedByteType = 1009, THREE.ByteType = 1010, THREE.ShortType = 1011, THREE.UnsignedShortType = 1012, THREE.IntType = 1013, THREE.UnsignedIntType = 1014, THREE.FloatType = 1015, THREE.HalfFloatType = 1025, THREE.UnsignedShort4444Type = 1016, THREE.UnsignedShort5551Type = 1017, THREE.UnsignedShort565Type = 1018, THREE.AlphaFormat = 1019, THREE.RGBFormat = 1020, THREE.RGBAFormat = 1021, THREE.LuminanceFormat = 1022, THREE.LuminanceAlphaFormat = 1023, THREE.RGBEFormat = THREE.RGBAFormat, THREE.RGB_S3TC_DXT1_Format = 2001, THREE.RGBA_S3TC_DXT1_Format = 2002, THREE.RGBA_S3TC_DXT3_Format = 2003, THREE.RGBA_S3TC_DXT5_Format = 2004, THREE.RGB_PVRTC_4BPPV1_Format = 2100, THREE.RGB_PVRTC_2BPPV1_Format = 2101, THREE.RGBA_PVRTC_4BPPV1_Format = 2102, THREE.RGBA_PVRTC_2BPPV1_Format = 2103, THREE.LoopOnce = 2200, THREE.LoopRepeat = 2201, THREE.LoopPingPong = 2202,THREE.Projector = function () {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function (e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
    }, this.unprojectVector = function (e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
    }, this.pickingRay = function (e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
},THREE.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function () {
    }, this.render = function () {
    }, this.setClearColor = function () {
    }, this.setSize = function () {
    }
},THREE.Color = function (e) {
    return 3 === arguments.length ? this.fromArray(arguments) : this.set(e)
},THREE.Color.prototype = {
    constructor: THREE.Color, r: 1, g: 1, b: 1, set: function (e) {
        return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
    }, setHex: function (e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
    }, setRGB: function (e, t, r) {
        return this.r = e, this.g = t, this.b = r, this
    }, setHSL: function () {
        function e(e, t, r) {
            return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
        }

        return function (t, r, n) {
            return t = THREE.Math.euclideanModulo(t, 1), r = THREE.Math.clamp(r, 0, 1), n = THREE.Math.clamp(n, 0, 1), 0 === r ? this.r = this.g = this.b = n : (r = .5 >= n ? n * (1 + r) : n + r - n * r, n = 2 * n - r, this.r = e(n, r, t + 1 / 3), this.g = e(n, r, t), this.b = e(n, r, t - 1 / 3)), this
        }
    }(), setStyle: function (e) {
        function t(t) {
            void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }

        var r;
        if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
            var n = r[2];
            switch (r[1]) {
                case"rgb":
                case"rgba":
                    if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, t(r[5]), this;
                    if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, t(r[5]), this;
                    break;
                case"hsl":
                case"hsla":
                    if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) {
                        var n = parseFloat(r[1]) / 360, i = parseInt(r[2], 10) / 100, o = parseInt(r[3], 10) / 100;
                        return t(r[5]), this.setHSL(n, i, o)
                    }
            }
        } else if (r = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
            if (r = r[1], n = r.length, 3 === n) return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, this;
            if (6 === n) return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, this
        }
        return e && 0 < e.length && (r = THREE.ColorKeywords[e], void 0 !== r ? this.setHex(r) : console.warn("THREE.Color: Unknown color " + e)), this
    }, clone: function () {
        return new this.constructor(this.r, this.g, this.b)
    }, copy: function (e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this
    }, copyGammaToLinear: function (e, t) {
        return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
    }, copyLinearToGamma: function (e, t) {
        void 0 === t && (t = 2);
        var r = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, r),
            this.g = Math.pow(e.g, r), this.b = Math.pow(e.b, r), this
    }, convertGammaToLinear: function () {
        var e = this.r, t = this.g, r = this.b;
        return this.r = e * e, this.g = t * t, this.b = r * r, this
    }, convertLinearToGamma: function () {
        return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
    }, getHex: function () {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }, getHexString: function () {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }, getHSL: function (e) {
        e = e || {h: 0, s: 0, l: 0};
        var t, r = this.r, n = this.g, i = this.b, o = Math.max(r, n, i), a = Math.min(r, n, i), s = (a + o) / 2;
        if (a === o) a = t = 0; else {
            var h = o - a, a = .5 >= s ? h / (o + a) : h / (2 - o - a);
            switch (o) {
                case r:
                    t = (n - i) / h + (i > n ? 6 : 0);
                    break;
                case n:
                    t = (i - r) / h + 2;
                    break;
                case i:
                    t = (r - n) / h + 4
            }
            t /= 6
        }
        return e.h = t, e.s = a, e.l = s, e
    }, getStyle: function () {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }, offsetHSL: function (e, t, r) {
        var n = this.getHSL();
        return n.h += e, n.s += t, n.l += r, this.setHSL(n.h, n.s, n.l), this
    }, add: function (e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this
    }, addColors: function (e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    }, addScalar: function (e) {
        return this.r += e, this.g += e, this.b += e, this
    }, multiply: function (e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    }, multiplyScalar: function (e) {
        return this.r *= e, this.g *= e, this.b *= e, this
    }, lerp: function (e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    }, equals: function (e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
    }
},THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
},THREE.Quaternion = function (e, t, r, n) {
    this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== n ? n : 1
},THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion, get x() {
        return this._x
    }, set x(e) {
        this._x = e, this.onChangeCallback()
    }, get y() {
        return this._y
    }, set y(e) {
        this._y = e, this.onChangeCallback()
    }, get z() {
        return this._z
    }, set z(e) {
        this._z = e, this.onChangeCallback()
    }, get w() {
        return this._w
    }, set w(e) {
        this._w = e, this.onChangeCallback()
    }, set: function (e, t, r, n) {
        return this._x = e, this._y = t, this._z = r, this._w = n, this.onChangeCallback(), this
    }, clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._w)
    }, copy: function (e) {
        return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
    }, setFromEuler: function (e, t) {
        if (0 == e instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var r = Math.cos(e._x / 2), n = Math.cos(e._y / 2), i = Math.cos(e._z / 2), o = Math.sin(e._x / 2),
            a = Math.sin(e._y / 2), s = Math.sin(e._z / 2), h = e.order;
        return "XYZ" === h ? (this._x = o * n * i + r * a * s, this._y = r * a * i - o * n * s, this._z = r * n * s + o * a * i, this._w = r * n * i - o * a * s) : "YXZ" === h ? (this._x = o * n * i + r * a * s, this._y = r * a * i - o * n * s, this._z = r * n * s - o * a * i, this._w = r * n * i + o * a * s) : "ZXY" === h ? (this._x = o * n * i - r * a * s, this._y = r * a * i + o * n * s, this._z = r * n * s + o * a * i, this._w = r * n * i - o * a * s) : "ZYX" === h ? (this._x = o * n * i - r * a * s, this._y = r * a * i + o * n * s, this._z = r * n * s - o * a * i, this._w = r * n * i + o * a * s) : "YZX" === h ? (this._x = o * n * i + r * a * s, this._y = r * a * i + o * n * s, this._z = r * n * s - o * a * i, this._w = r * n * i - o * a * s) : "XZY" === h && (this._x = o * n * i - r * a * s, this._y = r * a * i - o * n * s, this._z = r * n * s + o * a * i, this._w = r * n * i + o * a * s), !1 !== t && this.onChangeCallback(), this
    }, setFromAxisAngle: function (e, t) {
        var r = t / 2, n = Math.sin(r);
        return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(r), this.onChangeCallback(), this
    }, setFromRotationMatrix: function (e) {
        var t = e.elements, r = t[0];
        e = t[4];
        var n = t[8], i = t[1], o = t[5], a = t[9], s = t[2], h = t[6], t = t[10], c = r + o + t;
        return c > 0 ? (r = .5 / Math.sqrt(c + 1), this._w = .25 / r, this._x = (h - a) * r, this._y = (n - s) * r, this._z = (i - e) * r) : r > o && r > t ? (r = 2 * Math.sqrt(1 + r - o - t), this._w = (h - a) / r, this._x = .25 * r, this._y = (e + i) / r, this._z = (n + s) / r) : o > t ? (r = 2 * Math.sqrt(1 + o - r - t), this._w = (n - s) / r, this._x = (e + i) / r, this._y = .25 * r, this._z = (a + h) / r) : (r = 2 * Math.sqrt(1 + t - r - o), this._w = (i - e) / r, this._x = (n + s) / r, this._y = (a + h) / r, this._z = .25 * r), this.onChangeCallback(), this
    }, setFromUnitVectors: function () {
        var e, t;
        return function (r, n) {
            return void 0 === e && (e = new THREE.Vector3), t = r.dot(n) + 1, 1e-6 > t ? (t = 0, Math.abs(r.x) > Math.abs(r.z) ? e.set(-r.y, r.x, 0) : e.set(0, -r.z, r.y)) : e.crossVectors(r, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize(), this
        }
    }(), inverse: function () {
        return this.conjugate().normalize(), this
    }, conjugate: function () {
        return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
    }, dot: function (e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }, lengthSq: function () {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }, length: function () {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }, normalize: function () {
        var e = this.length();
        return 0 === e ? (this._z = this._y = this._x = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this.onChangeCallback(), this
    }, multiply: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    }, multiplyQuaternions: function (e, t) {
        var r = e._x, n = e._y, i = e._z, o = e._w, a = t._x, s = t._y, h = t._z, c = t._w;
        return this._x = r * c + o * a + n * h - i * s, this._y = n * c + o * s + i * a - r * h, this._z = i * c + o * h + r * s - n * a, this._w = o * c - r * a - n * s - i * h, this.onChangeCallback(), this
    }, multiplyVector3: function (e) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
    }, slerp: function (e, t) {
        if (0 === t) return this;
        if (1 === t) return this.copy(e);
        var r = this._x, n = this._y, i = this._z, o = this._w, a = o * e._w + r * e._x + n * e._y + i * e._z;
        if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = r, this._y = n, this._z = i, this;
        var s = Math.acos(a), h = Math.sqrt(1 - a * a);
        return .001 > Math.abs(h) ? (this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (n + this._y), this._z = .5 * (i + this._z), this) : (a = Math.sin((1 - t) * s) / h, s = Math.sin(t * s) / h, this._w = o * a + this._w * s, this._x = r * a + this._x * s, this._y = n * a + this._y * s, this._z = i * a + this._z * s, this.onChangeCallback(), this)
    }, equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
    }, onChange: function (e) {
        return this.onChangeCallback = e, this
    }, onChangeCallback: function () {
    }
},THREE.Quaternion.slerp = function (e, t, r, n) {
    return r.copy(e).slerp(t, n)
},THREE.Vector2 = function (e, t) {
    this.x = e || 0, this.y = t || 0
},THREE.Vector2.prototype = {
    constructor: THREE.Vector2, get width() {
        return this.x
    }, set width(e) {
        this.x = e
    }, get height() {
        return this.y
    }, set height(e) {
        this.y = e
    }, set: function (e, t) {
        return this.x = e, this.y = t, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + e)
        }
    }, clone: function () {
        return new this.constructor(this.x, this.y)
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this
    }, add: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this
    }, addScaledVector: function (e, t) {
        return this.x += e.x * t, this.y += e.y * t, this
    }, sub: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
    }, subScalar: function (e) {
        return this.x -= e, this.y -= e, this
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this
    }, multiply: function (e) {
        return this.x *= e.x, this.y *= e.y, this
    }, multiplyScalar: function (e) {
        return isFinite(e) ? (this.x *= e, this.y *= e) : this.y = this.x = 0, this
    }, divide: function (e) {
        return this.x /= e.x, this.y /= e.y, this
    }, divideScalar: function (e) {
        return this.multiplyScalar(1 / e)
    }, min: function (e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
    }, max: function (e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
    }, clamp: function (e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
    }, clampScalar: function () {
        var e, t;
        return function (r, n) {
            return void 0 === e && (e = new THREE.Vector2, t = new THREE.Vector2), e.set(r, r), t.set(n, n), this.clamp(e, t)
        }
    }(), clampLength: function (e, t) {
        var r = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r), this
    }, floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }, roundToZero: function () {
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
    }, distanceToSquared: function (e) {
        var t = this.x - e.x;
        return e = this.y - e.y, t * t + e * e
    }, setLength: function (e) {
        return this.multiplyScalar(e / this.length())
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    }, lerpVectors: function (e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e), this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
    }, fromAttribute: function (e, t, r) {
        return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this
    }, rotateAround: function (e, t) {
        var r = Math.cos(t), n = Math.sin(t), i = this.x - e.x, o = this.y - e.y;
        return this.x = i * r - o * n + e.x, this.y = i * n + o * r + e.y, this
    }
},THREE.Vector3 = function (e, t, r) {
    this.x = e || 0, this.y = t || 0, this.z = r || 0
},THREE.Vector3.prototype = {
    constructor: THREE.Vector3, set: function (e, t, r) {
        return this.x = e, this.y = t, this.z = r, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setZ: function (e) {
        return this.z = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " + e)
        }
    }, clone: function () {
        return new this.constructor(this.x, this.y, this.z)
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this
    }, add: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    }, addScaledVector: function (e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
    }, sub: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    }, subScalar: function (e) {
        return this.x -= e, this.y -= e, this.z -= e, this
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    }, multiply: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    }, multiplyScalar: function (e) {
        return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e) : this.z = this.y = this.x = 0, this
    }, multiplyVectors: function (e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    }, applyEuler: function () {
        var e;
        return function (t) {
            return 0 == t instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this
        }
    }(), applyAxisAngle: function () {
        var e;
        return function (t, r) {
            return void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, r)), this
        }
    }(), applyMatrix3: function (e) {
        var t = this.x, r = this.y, n = this.z;
        return e = e.elements, this.x = e[0] * t + e[3] * r + e[6] * n, this.y = e[1] * t + e[4] * r + e[7] * n, this.z = e[2] * t + e[5] * r + e[8] * n, this
    }, applyMatrix4: function (e) {
        var t = this.x, r = this.y, n = this.z;
        return e = e.elements, this.x = e[0] * t + e[4] * r + e[8] * n + e[12], this.y = e[1] * t + e[5] * r + e[9] * n + e[13], this.z = e[2] * t + e[6] * r + e[10] * n + e[14], this
    }, applyProjection: function (e) {
        var t = this.x, r = this.y, n = this.z;
        e = e.elements;
        var i = 1 / (e[3] * t + e[7] * r + e[11] * n + e[15]);
        return this.x = (e[0] * t + e[4] * r + e[8] * n + e[12]) * i, this.y = (e[1] * t + e[5] * r + e[9] * n + e[13]) * i, this.z = (e[2] * t + e[6] * r + e[10] * n + e[14]) * i, this
    }, applyQuaternion: function (e) {
        var t = this.x, r = this.y, n = this.z, i = e.x, o = e.y, a = e.z;
        e = e.w;
        var s = e * t + o * n - a * r, h = e * r + a * t - i * n, c = e * n + i * r - o * t, t = -i * t - o * r - a * n;
        return this.x = s * e + t * -i + h * -a - c * -o, this.y = h * e + t * -o + c * -i - s * -a, this.z = c * e + t * -a + s * -o - h * -i, this
    }, project: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
        }
    }(), unproject: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
        }
    }(), transformDirection: function (e) {
        var t = this.x, r = this.y, n = this.z;
        return e = e.elements, this.x = e[0] * t + e[4] * r + e[8] * n, this.y = e[1] * t + e[5] * r + e[9] * n, this.z = e[2] * t + e[6] * r + e[10] * n, this.normalize(), this
    }, divide: function (e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    }, divideScalar: function (e) {
        return this.multiplyScalar(1 / e)
    }, min: function (e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
    }, max: function (e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
    }, clamp: function (e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
    }, clampScalar: function () {
        var e, t;
        return function (r, n) {
            return void 0 === e && (e = new THREE.Vector3, t = new THREE.Vector3), e.set(r, r, r), t.set(n, n, n), this.clamp(e, t)
        }
    }(), clampLength: function (e, t) {
        var r = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r), this
    }, floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }, roundToZero: function () {
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (e) {
        return this.multiplyScalar(e / this.length())
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    }, lerpVectors: function (e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e), this
    }, cross: function (e, t) {
        if (void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
        var r = this.x, n = this.y, i = this.z;
        return this.x = n * e.z - i * e.y, this.y = i * e.x - r * e.z, this.z = r * e.y - n * e.x, this
    }, crossVectors: function (e, t) {
        var r = e.x, n = e.y, i = e.z, o = t.x, a = t.y, s = t.z;
        return this.x = n * s - i * a, this.y = i * o - r * s, this.z = r * a - n * o, this
    }, projectOnVector: function () {
        var e, t;
        return function (r) {
            return void 0 === e && (e = new THREE.Vector3), e.copy(r).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
        }
    }(), projectOnPlane: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
        }
    }(), reflect: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
        }
    }(), angleTo: function (e) {
        return e = this.dot(e) / (this.length() * e.length()), Math.acos(THREE.Math.clamp(e, -1, 1))
    }, distanceTo: function (e) {
        return Math.sqrt(this.distanceToSquared(e))
    }, distanceToSquared: function (e) {
        var t = this.x - e.x, r = this.y - e.y;
        return e = this.z - e.z, t * t + r * r + e * e
    }, setEulerFromRotationMatrix: function (e, t) {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    }, setEulerFromQuaternion: function (e, t) {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    }, getPositionFromMatrix: function (e) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
    }, getScaleFromMatrix: function (e) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
    }, getColumnFromMatrix: function (e, t) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
    }, setFromMatrixPosition: function (e) {
        return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
    }, setFromMatrixScale: function (e) {
        var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
            r = this.set(e.elements[4], e.elements[5], e.elements[6]).length();
        return e = this.set(e.elements[8], e.elements[9], e.elements[10]).length(), this.x = t, this.y = r, this.z = e, this
    }, setFromMatrixColumn: function (e, t) {
        var r = 4 * e, n = t.elements;
        return this.x = n[r], this.y = n[r + 1], this.z = n[r + 2], this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
    }, fromAttribute: function (e, t, r) {
        return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
    }
},THREE.Vector4 = function (e, t, r, n) {
    this.x = e || 0, this.y = t || 0, this.z = r || 0, this.w = void 0 !== n ? n : 1
},THREE.Vector4.prototype = {
    constructor: THREE.Vector4, set: function (e, t, r, n) {
        return this.x = e, this.y = t, this.z = r, this.w = n, this
    }, setX: function (e) {
        return this.x = e, this
    }, setY: function (e) {
        return this.y = e, this
    }, setZ: function (e) {
        return this.z = e, this
    }, setW: function (e) {
        return this.w = e, this
    }, setComponent: function (e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw Error("index is out of range: " + e)
        }
    }, getComponent: function (e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + e)
        }
    }, clone: function () {
        return new this.constructor(this.x, this.y, this.z, this.w)
    }, copy: function (e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
    }, add: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    }, addScalar: function (e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this
    }, addVectors: function (e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    }, addScaledVector: function (e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
    }, sub: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    }, subScalar: function (e) {
        return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
    }, subVectors: function (e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    }, multiplyScalar: function (e) {
        return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e, this.w *= e) : this.w = this.z = this.y = this.x = 0, this
    }, applyMatrix4: function (e) {
        var t = this.x, r = this.y, n = this.z, i = this.w;
        return e = e.elements, this.x = e[0] * t + e[4] * r + e[8] * n + e[12] * i, this.y = e[1] * t + e[5] * r + e[9] * n + e[13] * i, this.z = e[2] * t + e[6] * r + e[10] * n + e[14] * i, this.w = e[3] * t + e[7] * r + e[11] * n + e[15] * i, this
    }, divideScalar: function (e) {
        return this.multiplyScalar(1 / e)
    }, setAxisAngleFromQuaternion: function (e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return 1e-4 > t ? (this.x = 1, this.z = this.y = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    }, setAxisAngleFromRotationMatrix: function (e) {
        var t, r, n;
        e = e.elements;
        var i = e[0];
        n = e[4];
        var o = e[8], a = e[1], s = e[5], h = e[9];
        r = e[2], t = e[6];
        var c = e[10];
        return .01 > Math.abs(n - a) && .01 > Math.abs(o - r) && .01 > Math.abs(h - t) ? .1 > Math.abs(n + a) && .1 > Math.abs(o + r) && .1 > Math.abs(h + t) && .1 > Math.abs(i + s + c - 3) ? (this.set(1, 0, 0, 0), this) : (e = Math.PI, i = (i + 1) / 2, s = (s + 1) / 2, c = (c + 1) / 2, n = (n + a) / 4, o = (o + r) / 4, h = (h + t) / 4, i > s && i > c ? .01 > i ? (t = 0, n = r = .707106781) : (t = Math.sqrt(i), r = n / t, n = o / t) : s > c ? .01 > s ? (t = .707106781, r = 0, n = .707106781) : (r = Math.sqrt(s), t = n / r, n = h / r) : .01 > c ? (r = t = .707106781, n = 0) : (n = Math.sqrt(c), t = o / n, r = h / n), this.set(t, r, n, e), this) : (e = Math.sqrt((t - h) * (t - h) + (o - r) * (o - r) + (a - n) * (a - n)), .001 > Math.abs(e) && (e = 1), this.x = (t - h) / e, this.y = (o - r) / e, this.z = (a - n) / e, this.w = Math.acos((i + s + c - 1) / 2), this)
    }, min: function (e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
    }, max: function (e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
    }, clamp: function (e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
    }, clampScalar: function () {
        var e, t;
        return function (r, n) {
            return void 0 === e && (e = new THREE.Vector4, t = new THREE.Vector4), e.set(r, r, r, r), t.set(n, n, n, n), this.clamp(e, t)
        }
    }(), floor: function () {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }, ceil: function () {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }, round: function () {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }, roundToZero: function () {
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w), this
    }, negate: function () {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }, dot: function (e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }, length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, setLength: function (e) {
        return this.multiplyScalar(e / this.length())
    }, lerp: function (e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    }, lerpVectors: function (e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e), this
    }, equals: function (e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }, fromArray: function (e, t) {
        return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
    }, toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
    }, fromAttribute: function (e, t, r) {
        return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this
    }
},THREE.Euler = function (e, t, r, n) {
    this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = n || THREE.Euler.DefaultOrder
},THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "),THREE.Euler.DefaultOrder = "XYZ",THREE.Euler.prototype = {
    constructor: THREE.Euler,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e, this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e, this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e, this.onChangeCallback()
    },
    get order() {
        return this._order
    },
    set order(e) {
        this._order = e, this.onChangeCallback()
    },
    set: function (e, t, r, n) {
        return this._x = e, this._y = t, this._z = r, this._order = n || this._order, this.onChangeCallback(), this
    },
    clone: function () {
        return new this.constructor(this._x, this._y, this._z, this._order)
    },
    copy: function (e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
    },
    setFromRotationMatrix: function (e, t, r) {
        var n = THREE.Math.clamp, i = e.elements;
        e = i[0];
        var o = i[4], a = i[8], s = i[1], h = i[5], c = i[9], u = i[2], l = i[6], i = i[10];
        return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(n(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2(-c, i), this._z = Math.atan2(-o, e)) : (this._x = Math.atan2(l, h), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-n(c, -1, 1)), .99999 > Math.abs(c) ? (this._y = Math.atan2(a, i), this._z = Math.atan2(s, h)) : (this._y = Math.atan2(-u, e), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(n(l, -1, 1)), .99999 > Math.abs(l) ? (this._y = Math.atan2(-u, i), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(s, e))) : "ZYX" === t ? (this._y = Math.asin(-n(u, -1, 1)), .99999 > Math.abs(u) ? (this._x = Math.atan2(l, i), this._z = Math.atan2(s, e)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === t ? (this._z = Math.asin(n(s, -1, 1)), .99999 > Math.abs(s) ? (this._x = Math.atan2(-c, h), this._y = Math.atan2(-u, e)) : (this._x = 0, this._y = Math.atan2(a, i))) : "XZY" === t ? (this._z = Math.asin(-n(o, -1, 1)), .99999 > Math.abs(o) ? (this._x = Math.atan2(l, h), this._y = Math.atan2(a, e)) : (this._x = Math.atan2(-c, i), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, !1 !== r && this.onChangeCallback(), this
    },
    setFromQuaternion: function () {
        var e;
        return function (t, r, n) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, r, n), this
        }
    }(),
    setFromVector3: function (e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
    },
    reorder: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            e.setFromEuler(this), this.setFromQuaternion(e, t)
        }
    }(),
    equals: function (e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    fromArray: function (e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
    },
    toArray: function (e, t) {
        return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
    },
    toVector3: function (e) {
        return e ? e.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z)
    },
    onChange: function (e) {
        return this.onChangeCallback = e, this
    },
    onChangeCallback: function () {
    }
},THREE.Line3 = function (e, t) {
    this.start = void 0 !== e ? e : new THREE.Vector3, this.end = void 0 !== t ? t : new THREE.Vector3
},THREE.Line3.prototype = {
    constructor: THREE.Line3, set: function (e, t) {
        return this.start.copy(e), this.end.copy(t), this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.start.copy(e.start), this.end.copy(e.end), this
    }, center: function (e) {
        return (e || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
    }, delta: function (e) {
        return (e || new THREE.Vector3).subVectors(this.end, this.start)
    }, distanceSq: function () {
        return this.start.distanceToSquared(this.end)
    }, distance: function () {
        return this.start.distanceTo(this.end)
    }, at: function (e, t) {
        var r = t || new THREE.Vector3;
        return this.delta(r).multiplyScalar(e).add(this.start)
    }, closestPointToPointParameter: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r, n) {
            e.subVectors(r, this.start), t.subVectors(this.end, this.start);
            var i = t.dot(t), i = t.dot(e) / i;
            return n && (i = THREE.Math.clamp(i, 0, 1)), i
        }
    }(), closestPointToPoint: function (e, t, r) {
        return e = this.closestPointToPointParameter(e, t), r = r || new THREE.Vector3, this.delta(r).multiplyScalar(e).add(this.start)
    }, applyMatrix4: function (e) {
        return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
    }, equals: function (e) {
        return e.start.equals(this.start) && e.end.equals(this.end)
    }
},THREE.Box2 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector2((-(1 / 0)), (-(1 / 0)))
},THREE.Box2.prototype = {
    constructor: THREE.Box2, set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }, setFromPoints: function (e) {
        this.makeEmpty();
        for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
        return this
    }, setFromCenterAndSize: function () {
        var e = new THREE.Vector2;
        return function (t, r) {
            var n = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y
    }, center: function (e) {
        return (e || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (e) {
        return (e || new THREE.Vector2).subVectors(this.max, this.min)
    }, expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this
    }, expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this
    }, expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }, containsPoint: function (e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
    }, containsBox: function (e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
    }, getParameter: function (e, t) {
        return (t || new THREE.Vector2).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    }, isIntersectionBox: function (e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
    }, clampPoint: function (e, t) {
        return (t || new THREE.Vector2).copy(e).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var e = new THREE.Vector2;
        return function (t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    }(), intersect: function (e) {
        return this.min.max(e.min), this.max.min(e.max), this
    }, union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }, translate: function (e) {
        return this.min.add(e), this.max.add(e), this
    }, equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},THREE.Box3 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector3((-(1 / 0)), (-(1 / 0)), (-(1 / 0)))
},THREE.Box3.prototype = {
    constructor: THREE.Box3, set: function (e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }, setFromPoints: function (e) {
        this.makeEmpty();
        for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
        return this
    }, setFromCenterAndSize: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            var n = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
        }
    }(), setFromObject: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var r = this;
            return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function (t) {
                var n = t.geometry;
                if (void 0 !== n) if (n instanceof THREE.Geometry) for (var i = n.vertices, n = 0, o = i.length; o > n; n++) e.copy(i[n]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e); else if (n instanceof THREE.BufferGeometry && void 0 !== n.attributes.position) for (i = n.attributes.position.array, n = 0, o = i.length; o > n; n += 3) e.set(i[n], i[n + 1], i[n + 2]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e)
            }), this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }, makeEmpty: function () {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
    }, empty: function () {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }, center: function (e) {
        return (e || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
    }, size: function (e) {
        return (e || new THREE.Vector3).subVectors(this.max, this.min)
    }, expandByPoint: function (e) {
        return this.min.min(e), this.max.max(e), this
    }, expandByVector: function (e) {
        return this.min.sub(e), this.max.add(e), this
    }, expandByScalar: function (e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }, containsPoint: function (e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }, containsBox: function (e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }, getParameter: function (e, t) {
        return (t || new THREE.Vector3).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }, isIntersectionBox: function (e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }, clampPoint: function (e, t) {
        return (t || new THREE.Vector3).copy(e).clamp(this.min, this.max)
    }, distanceToPoint: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    }(), getBoundingSphere: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return t = t || new THREE.Sphere, t.center = this.center(), t.radius = .5 * this.size(e).length(), t
        }
    }(), intersect: function (e) {
        return this.min.max(e.min), this.max.min(e.max), this
    }, union: function (e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }, applyMatrix4: function () {
        var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function (t) {
            return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this
        }
    }(), translate: function (e) {
        return this.min.add(e), this.max.add(e), this
    }, equals: function (e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},THREE.Matrix3 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), 0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
},THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3, set: function (e, t, r, n, i, o, a, s, h) {
        var c = this.elements;
        return c[0] = e, c[3] = t, c[6] = r, c[1] = n, c[4] = i, c[7] = o, c[2] = a, c[5] = s, c[8] = h, this
    }, identity: function () {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }, clone: function () {
        return (new this.constructor).fromArray(this.elements)
    }, copy: function (e) {
        return e = e.elements, this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
    }, multiplyVector3: function (e) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
    }, multiplyVector3Array: function (e) {
        return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
    }, applyToVector3Array: function () {
        var e;
        return function (t, r, n) {
            void 0 === e && (e = new THREE.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length);
            for (var i = 0; n > i; i += 3, r += 3) e.fromArray(t, r), e.applyMatrix3(this), e.toArray(t, r);
            return t
        }
    }(), applyToBuffer: function () {
        var e;
        return function (t, r, n) {
            void 0 === e && (e = new THREE.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length / t.itemSize);
            for (var i = 0; n > i; i++, r++) e.x = t.getX(r), e.y = t.getY(r), e.z = t.getZ(r), e.applyMatrix3(this), t.setXYZ(e.x, e.y, e.z);
            return t
        }
    }(), multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    }, determinant: function () {
        var e = this.elements, t = e[0], r = e[1], n = e[2], i = e[3], o = e[4], a = e[5], s = e[6], h = e[7], e = e[8];
        return t * o * e - t * a * h - r * i * e + r * a * s + n * i * h - n * o * s
    }, getInverse: function (e, t) {
        var r = e.elements, n = this.elements;
        if (n[0] = r[10] * r[5] - r[6] * r[9], n[1] = -r[10] * r[1] + r[2] * r[9], n[2] = r[6] * r[1] - r[2] * r[5], n[3] = -r[10] * r[4] + r[6] * r[8], n[4] = r[10] * r[0] - r[2] * r[8], n[5] = -r[6] * r[0] + r[2] * r[4], n[6] = r[9] * r[4] - r[5] * r[8], n[7] = -r[9] * r[0] + r[1] * r[8], n[8] = r[5] * r[0] - r[1] * r[4], r = r[0] * n[0] + r[1] * n[3] + r[2] * n[6], 0 === r) {
            if (t) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            return console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0"), this.identity(), this
        }
        return this.multiplyScalar(1 / r), this
    }, transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    }, flattenToArrayOffset: function (e, t) {
        var r = this.elements;
        return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e
    }, getNormalMatrix: function (e) {
        return this.getInverse(e).transpose(), this
    }, transposeIntoArray: function (e) {
        var t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    }, fromArray: function (e) {
        return this.elements.set(e), this
    }, toArray: function () {
        var e = this.elements;
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
    }
},THREE.Matrix4 = function () {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), 0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
},THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (e, t, r, n, i, o, a, s, h, c, u, l, p, d, f, E) {
        var m = this.elements;
        return m[0] = e, m[4] = t, m[8] = r, m[12] = n, m[1] = i, m[5] = o, m[9] = a, m[13] = s, m[2] = h, m[6] = c, m[10] = u, m[14] = l, m[3] = p, m[7] = d, m[11] = f, m[15] = E, this
    },
    identity: function () {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    clone: function () {
        return (new THREE.Matrix4).fromArray(this.elements)
    },
    copy: function (e) {
        return this.elements.set(e.elements), this
    },
    extractPosition: function (e) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
    },
    copyPosition: function (e) {
        var t = this.elements;
        return e = e.elements, t[12] = e[12], t[13] = e[13], t[14] = e[14], this
    },
    extractBasis: function (e, t, r) {
        var n = this.elements;
        return e.set(n[0], n[1], n[2]), t.set(n[4], n[5], n[6]), r.set(n[8], n[9], n[10]), this
    },
    makeBasis: function (e, t, r) {
        return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1), this
    },
    extractRotation: function () {
        var e;
        return function (t) {
            void 0 === e && (e = new THREE.Vector3);
            var r = this.elements;
            t = t.elements;
            var n = 1 / e.set(t[0], t[1], t[2]).length(), i = 1 / e.set(t[4], t[5], t[6]).length(),
                o = 1 / e.set(t[8], t[9], t[10]).length();
            return r[0] = t[0] * n, r[1] = t[1] * n, r[2] = t[2] * n, r[4] = t[4] * i, r[5] = t[5] * i, r[6] = t[6] * i, r[8] = t[8] * o, r[9] = t[9] * o, r[10] = t[10] * o, this
        }
    }(),
    makeRotationFromEuler: function (e) {
        0 == e instanceof THREE.Euler && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var t = this.elements, r = e.x, n = e.y, i = e.z, o = Math.cos(r), r = Math.sin(r), a = Math.cos(n),
            n = Math.sin(n), s = Math.cos(i), i = Math.sin(i);
        if ("XYZ" === e.order) {
            e = o * s;
            var h = o * i, c = r * s, u = r * i;
            t[0] = a * s, t[4] = -a * i, t[8] = n, t[1] = h + c * n, t[5] = e - u * n, t[9] = -r * a, t[2] = u - e * n, t[6] = c + h * n, t[10] = o * a
        } else "YXZ" === e.order ? (e = a * s, h = a * i, c = n * s, u = n * i, t[0] = e + u * r, t[4] = c * r - h, t[8] = o * n, t[1] = o * i, t[5] = o * s, t[9] = -r, t[2] = h * r - c, t[6] = u + e * r, t[10] = o * a) : "ZXY" === e.order ? (e = a * s, h = a * i, c = n * s, u = n * i, t[0] = e - u * r, t[4] = -o * i, t[8] = c + h * r, t[1] = h + c * r, t[5] = o * s, t[9] = u - e * r, t[2] = -o * n, t[6] = r, t[10] = o * a) : "ZYX" === e.order ? (e = o * s, h = o * i, c = r * s, u = r * i, t[0] = a * s, t[4] = c * n - h, t[8] = e * n + u, t[1] = a * i, t[5] = u * n + e, t[9] = h * n - c, t[2] = -n, t[6] = r * a, t[10] = o * a) : "YZX" === e.order ? (e = o * a, h = o * n, c = r * a, u = r * n, t[0] = a * s, t[4] = u - e * i, t[8] = c * i + h, t[1] = i, t[5] = o * s, t[9] = -r * s, t[2] = -n * s, t[6] = h * i + c, t[10] = e - u * i) : "XZY" === e.order && (e = o * a, h = o * n, c = r * a, u = r * n, t[0] = a * s, t[4] = -i, t[8] = n * s, t[1] = e * i + u, t[5] = o * s, t[9] = h * i - c, t[2] = c * i - h, t[6] = r * s, t[10] = u * i + e);
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    },
    setRotationFromQuaternion: function (e) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
    },
    makeRotationFromQuaternion: function (e) {
        var t = this.elements, r = e.x, n = e.y, i = e.z, o = e.w, a = r + r, s = n + n, h = i + i;
        e = r * a;
        var c = r * s, r = r * h, u = n * s, n = n * h, i = i * h, a = o * a, s = o * s, o = o * h;
        return t[0] = 1 - (u + i), t[4] = c - o, t[8] = r + s, t[1] = c + o, t[5] = 1 - (e + i), t[9] = n - a, t[2] = r - s, t[6] = n + a, t[10] = 1 - (e + u), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    },
    lookAt: function () {
        var e, t, r;
        return function (n, i, o) {
            void 0 === e && (e = new THREE.Vector3), void 0 === t && (t = new THREE.Vector3), void 0 === r && (r = new THREE.Vector3);
            var a = this.elements;
            return r.subVectors(n, i).normalize(), 0 === r.lengthSq() && (r.z = 1), e.crossVectors(o, r).normalize(), 0 === e.lengthSq() && (r.x += 1e-4, e.crossVectors(o, r).normalize()), t.crossVectors(r, e), a[0] = e.x, a[4] = t.x, a[8] = r.x, a[1] = e.y, a[5] = t.y, a[9] = r.y, a[2] = e.z, a[6] = t.z, a[10] = r.z, this
        }
    }(),
    multiply: function (e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    },
    multiplyMatrices: function (e, t) {
        var r = e.elements, n = t.elements, i = this.elements, o = r[0], a = r[4], s = r[8], h = r[12], c = r[1],
            u = r[5], l = r[9], p = r[13], d = r[2], f = r[6], E = r[10], m = r[14], g = r[3], T = r[7], v = r[11],
            r = r[15], y = n[0], R = n[4], x = n[8], H = n[12], b = n[1], w = n[5], M = n[9], S = n[13], _ = n[2],
            C = n[6], A = n[10], L = n[14], P = n[3], k = n[7], D = n[11], n = n[15];
        return i[0] = o * y + a * b + s * _ + h * P, i[4] = o * R + a * w + s * C + h * k, i[8] = o * x + a * M + s * A + h * D, i[12] = o * H + a * S + s * L + h * n, i[1] = c * y + u * b + l * _ + p * P, i[5] = c * R + u * w + l * C + p * k, i[9] = c * x + u * M + l * A + p * D, i[13] = c * H + u * S + l * L + p * n, i[2] = d * y + f * b + E * _ + m * P, i[6] = d * R + f * w + E * C + m * k, i[10] = d * x + f * M + E * A + m * D, i[14] = d * H + f * S + E * L + m * n, i[3] = g * y + T * b + v * _ + r * P, i[7] = g * R + T * w + v * C + r * k, i[11] = g * x + T * M + v * A + r * D, i[15] = g * H + T * S + v * L + r * n, this
    },
    multiplyToArray: function (e, t, r) {
        var n = this.elements;
        return this.multiplyMatrices(e, t), r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = n[3], r[4] = n[4], r[5] = n[5], r[6] = n[6], r[7] = n[7], r[8] = n[8], r[9] = n[9], r[10] = n[10], r[11] = n[11], r[12] = n[12], r[13] = n[13], r[14] = n[14], r[15] = n[15], this
    },
    multiplyScalar: function (e) {
        var t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    },
    multiplyVector3: function (e) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
    },
    multiplyVector4: function (e) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
    },
    multiplyVector3Array: function (e) {
        return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
    },
    applyToVector3Array: function () {
        var e;
        return function (t, r, n) {
            void 0 === e && (e = new THREE.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length);
            for (var i = 0; n > i; i += 3, r += 3) e.fromArray(t, r), e.applyMatrix4(this), e.toArray(t, r);
            return t
        }
    }(),
    applyToBuffer: function () {
        var e;
        return function (t, r, n) {
            void 0 === e && (e = new THREE.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length / t.itemSize);
            for (var i = 0; n > i; i++, r++) e.x = t.getX(r), e.y = t.getY(r), e.z = t.getZ(r), e.applyMatrix4(this), t.setXYZ(e.x, e.y, e.z);
            return t
        }
    }(),
    rotateAxis: function (e) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
    },
    crossVector: function (e) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
    },
    determinant: function () {
        var e = this.elements, t = e[0], r = e[4], n = e[8], i = e[12], o = e[1], a = e[5], s = e[9], h = e[13],
            c = e[2], u = e[6], l = e[10], p = e[14];
        return e[3] * (+i * s * u - n * h * u - i * a * l + r * h * l + n * a * p - r * s * p) + e[7] * (+t * s * p - t * h * l + i * o * l - n * o * p + n * h * c - i * s * c) + e[11] * (+t * h * u - t * a * p - i * o * u + r * o * p + i * a * c - r * h * c) + e[15] * (-n * a * c - t * s * u + t * a * l + n * o * u - r * o * l + r * s * c)
    },
    transpose: function () {
        var e, t = this.elements;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    },
    flattenToArrayOffset: function (e, t) {
        var r = this.elements;
        return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e[t + 9] = r[9], e[t + 10] = r[10], e[t + 11] = r[11], e[t + 12] = r[12], e[t + 13] = r[13], e[t + 14] = r[14], e[t + 15] = r[15], e
    },
    getPosition: function () {
        var e;
        return function () {
            void 0 === e && (e = new THREE.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            var t = this.elements;
            return e.set(t[12], t[13], t[14])
        }
    }(),
    setPosition: function (e) {
        var t = this.elements;
        return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
    },
    getInverse: function (e, t) {
        var r = this.elements, n = e.elements, i = n[0], o = n[4], a = n[8], s = n[12], h = n[1], c = n[5], u = n[9],
            l = n[13], p = n[2], d = n[6], f = n[10], E = n[14], m = n[3], g = n[7], T = n[11], n = n[15];
        if (r[0] = u * E * g - l * f * g + l * d * T - c * E * T - u * d * n + c * f * n, r[4] = s * f * g - a * E * g - s * d * T + o * E * T + a * d * n - o * f * n, r[8] = a * l * g - s * u * g + s * c * T - o * l * T - a * c * n + o * u * n, r[12] = s * u * d - a * l * d - s * c * f + o * l * f + a * c * E - o * u * E, r[1] = l * f * m - u * E * m - l * p * T + h * E * T + u * p * n - h * f * n, r[5] = a * E * m - s * f * m + s * p * T - i * E * T - a * p * n + i * f * n, r[9] = s * u * m - a * l * m - s * h * T + i * l * T + a * h * n - i * u * n, r[13] = a * l * p - s * u * p + s * h * f - i * l * f - a * h * E + i * u * E, r[2] = c * E * m - l * d * m + l * p * g - h * E * g - c * p * n + h * d * n, r[6] = s * d * m - o * E * m - s * p * g + i * E * g + o * p * n - i * d * n, r[10] = o * l * m - s * c * m + s * h * g - i * l * g - o * h * n + i * c * n, r[14] = s * c * p - o * l * p - s * h * d + i * l * d + o * h * E - i * c * E, r[3] = u * d * m - c * f * m - u * p * g + h * f * g + c * p * T - h * d * T, r[7] = o * f * m - a * d * m + a * p * g - i * f * g - o * p * T + i * d * T, r[11] = a * c * m - o * u * m - a * h * g + i * u * g + o * h * T - i * c * T, r[15] = o * u * p - a * c * p + a * h * d - i * u * d - o * h * f + i * c * f, r = i * r[0] + h * r[4] + p * r[8] + m * r[12], 0 === r) {
            if (t) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            return console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"), this.identity(), this
        }
        return this.multiplyScalar(1 / r), this
    },
    translate: function (e) {
        console.error("THREE.Matrix4: .translate() has been removed.")
    },
    rotateX: function (e) {
        console.error("THREE.Matrix4: .rotateX() has been removed.")
    },
    rotateY: function (e) {
        console.error("THREE.Matrix4: .rotateY() has been removed.")
    },
    rotateZ: function (e) {
        console.error("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function (e, t) {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    },
    scale: function (e) {
        var t = this.elements, r = e.x, n = e.y;
        return e = e.z, t[0] *= r, t[4] *= n, t[8] *= e, t[1] *= r, t[5] *= n, t[9] *= e, t[2] *= r, t[6] *= n, t[10] *= e, t[3] *= r, t[7] *= n, t[11] *= e, this
    },
    getMaxScaleOnAxis: function () {
        var e = this.elements;
        return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10]))
    },
    makeTranslation: function (e, t, r) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this
    },
    makeRotationX: function (e) {
        var t = Math.cos(e);
        return e = Math.sin(e), this.set(1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function (e) {
        var t = Math.cos(e);
        return e = Math.sin(e), this.set(t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function (e) {
        var t = Math.cos(e);
        return e = Math.sin(e), this.set(t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function (e, t) {
        var r = Math.cos(t), n = Math.sin(t), i = 1 - r, o = e.x, a = e.y, s = e.z, h = i * o, c = i * a;
        return this.set(h * o + r, h * a - n * s, h * s + n * a, 0, h * a + n * s, c * a + r, c * s - n * o, 0, h * s - n * a, c * s + n * o, i * s * s + r, 0, 0, 0, 0, 1), this
    },
    makeScale: function (e, t, r) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
    },
    compose: function (e, t, r) {
        return this.makeRotationFromQuaternion(t), this.scale(r), this.setPosition(e), this
    },
    decompose: function () {
        var e, t;
        return function (r, n, i) {
            void 0 === e && (e = new THREE.Vector3), void 0 === t && (t = new THREE.Matrix4);
            var o = this.elements, a = e.set(o[0], o[1], o[2]).length(), s = e.set(o[4], o[5], o[6]).length(),
                h = e.set(o[8], o[9], o[10]).length();
            0 > this.determinant() && (a = -a), r.x = o[12], r.y = o[13], r.z = o[14], t.elements.set(this.elements), r = 1 / a;
            var o = 1 / s, c = 1 / h;
            return t.elements[0] *= r, t.elements[1] *= r, t.elements[2] *= r, t.elements[4] *= o, t.elements[5] *= o, t.elements[6] *= o, t.elements[8] *= c, t.elements[9] *= c, t.elements[10] *= c, n.setFromRotationMatrix(t), i.x = a, i.y = s, i.z = h, this
        }
    }(),
    makeFrustum: function (e, t, r, n, i, o) {
        var a = this.elements;
        return a[0] = 2 * i / (t - e), a[4] = 0, a[8] = (t + e) / (t - e), a[12] = 0, a[1] = 0, a[5] = 2 * i / (n - r), a[9] = (n + r) / (n - r), a[13] = 0, a[2] = 0, a[6] = 0, a[10] = -(o + i) / (o - i), a[14] = -2 * o * i / (o - i), a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
    },
    makePerspective: function (e, t, r, n) {
        e = r * Math.tan(THREE.Math.degToRad(.5 * e));
        var i = -e;
        return this.makeFrustum(i * t, e * t, i, e, r, n)
    },
    makeOrthographic: function (e, t, r, n, i, o) {
        var a = this.elements, s = t - e, h = r - n, c = o - i;
        return a[0] = 2 / s, a[4] = 0, a[8] = 0, a[12] = -((t + e) / s), a[1] = 0, a[5] = 2 / h, a[9] = 0, a[13] = -((r + n) / h), a[2] = 0, a[6] = 0, a[10] = -2 / c, a[14] = -((o + i) / c), a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
    },
    equals: function (e) {
        var t = this.elements;
        e = e.elements;
        for (var r = 0; 16 > r; r++) if (t[r] !== e[r]) return !1;
        return !0
    },
    fromArray: function (e) {
        return this.elements.set(e), this
    },
    toArray: function () {
        var e = this.elements;
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
    }
},THREE.Ray = function (e, t) {
    this.origin = void 0 !== e ? e : new THREE.Vector3, this.direction = void 0 !== t ? t : new THREE.Vector3
},THREE.Ray.prototype = {
    constructor: THREE.Ray, set: function (e, t) {
        return this.origin.copy(e), this.direction.copy(t), this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    }, at: function (e, t) {
        return (t || new THREE.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)
    }, recast: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return this.origin.copy(this.at(t, e)), this
        }
    }(), closestPointToPoint: function (e, t) {
        var r = t || new THREE.Vector3;
        r.subVectors(e, this.origin);
        var n = r.dot(this.direction);
        return 0 > n ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(n).add(this.origin)
    }, distanceToPoint: function (e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }, distanceSqToPoint: function () {
        var e = new THREE.Vector3;
        return function (t) {
            var r = e.subVectors(t, this.origin).dot(this.direction);
            return 0 > r ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceToSquared(t))
        }
    }(), distanceSqToSegment: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3;
        return function (n, i, o, a) {
            e.copy(n).add(i).multiplyScalar(.5), t.copy(i).sub(n).normalize(), r.copy(this.origin).sub(e);
            var s, h = .5 * n.distanceTo(i), c = -this.direction.dot(t), u = r.dot(this.direction), l = -r.dot(t),
                p = r.lengthSq(), d = Math.abs(1 - c * c);
            return d > 0 ? (n = c * l - u, i = c * u - l, s = h * d, n >= 0 ? i >= -s ? s >= i ? (h = 1 / d, n *= h, i *= h, c = n * (n + c * i + 2 * u) + i * (c * n + i + 2 * l) + p) : (i = h, n = Math.max(0, -(c * i + u)), c = -n * n + i * (i + 2 * l) + p) : (i = -h, n = Math.max(0, -(c * i + u)), c = -n * n + i * (i + 2 * l) + p) : -s >= i ? (n = Math.max(0, -(-c * h + u)), i = n > 0 ? -h : Math.min(Math.max(-h, -l), h), c = -n * n + i * (i + 2 * l) + p) : s >= i ? (n = 0, i = Math.min(Math.max(-h, -l), h), c = i * (i + 2 * l) + p) : (n = Math.max(0, -(c * h + u)), i = n > 0 ? h : Math.min(Math.max(-h, -l), h), c = -n * n + i * (i + 2 * l) + p)) : (i = c > 0 ? -h : h, n = Math.max(0, -(c * i + u)), c = -n * n + i * (i + 2 * l) + p), o && o.copy(this.direction).multiplyScalar(n).add(this.origin), a && a.copy(t).multiplyScalar(i).add(e), c
        }
    }(), isIntersectionSphere: function (e) {
        return this.distanceToPoint(e.center) <= e.radius
    }, intersectSphere: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            e.subVectors(t.center, this.origin);
            var n = e.dot(this.direction), i = e.dot(e) - n * n, o = t.radius * t.radius;
            return i > o ? null : (o = Math.sqrt(o - i), i = n - o, n += o, 0 > i && 0 > n ? null : 0 > i ? this.at(n, r) : this.at(i, r))
        }
    }(), isIntersectionPlane: function (e) {
        var t = e.distanceToPoint(this.origin);
        return 0 === t || 0 > e.normal.dot(this.direction) * t
    }, distanceToPlane: function (e) {
        var t = e.normal.dot(this.direction);
        return 0 === t ? 0 === e.distanceToPoint(this.origin) ? 0 : null : (e = -(this.origin.dot(e.normal) + e.constant) / t, e >= 0 ? e : null)
    }, intersectPlane: function (e, t) {
        var r = this.distanceToPlane(e);
        return null === r ? null : this.at(r, t)
    }, isIntersectionBox: function () {
        var e = new THREE.Vector3;
        return function (t) {
            return null !== this.intersectBox(t, e)
        }
    }(), intersectBox: function (e, t) {
        var r, n, i, o, a;
        n = 1 / this.direction.x, o = 1 / this.direction.y, a = 1 / this.direction.z;
        var s = this.origin;
        return n >= 0 ? (r = (e.min.x - s.x) * n, n *= e.max.x - s.x) : (r = (e.max.x - s.x) * n, n *= e.min.x - s.x), o >= 0 ? (i = (e.min.y - s.y) * o, o *= e.max.y - s.y) : (i = (e.max.y - s.y) * o, o *= e.min.y - s.y), r > o || i > n ? null : ((i > r || r !== r) && (r = i), (n > o || n !== n) && (n = o), a >= 0 ? (i = (e.min.z - s.z) * a, a *= e.max.z - s.z) : (i = (e.max.z - s.z) * a, a *= e.min.z - s.z), r > a || i > n ? null : ((i > r || r !== r) && (r = i), (n > a || n !== n) && (n = a), 0 > n ? null : this.at(r >= 0 ? r : n, t)))
    }, intersectTriangle: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3, n = new THREE.Vector3;
        return function (i, o, a, s, h) {
            if (t.subVectors(o, i), r.subVectors(a, i), n.crossVectors(t, r), o = this.direction.dot(n), o > 0) {
                if (s) return null;
                s = 1
            } else {
                if (!(0 > o)) return null;
                s = -1, o = -o
            }
            return e.subVectors(this.origin, i), i = s * this.direction.dot(r.crossVectors(e, r)), 0 > i ? null : (a = s * this.direction.dot(t.cross(e)), 0 > a || i + a > o ? null : (i = -s * e.dot(n), 0 > i ? null : this.at(i / o, h)))
        }
    }(), applyMatrix4: function (e) {
        return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
    }, equals: function (e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
},THREE.Sphere = function (e, t) {
    this.center = void 0 !== e ? e : new THREE.Vector3, this.radius = void 0 !== t ? t : 0
},THREE.Sphere.prototype = {
    constructor: THREE.Sphere, set: function (e, t) {
        return this.center.copy(e), this.radius = t, this
    }, setFromPoints: function () {
        var e = new THREE.Box3;
        return function (t, r) {
            var n = this.center;
            void 0 !== r ? n.copy(r) : e.setFromPoints(t).center(n);
            for (var i = 0, o = 0, a = t.length; a > o; o++) i = Math.max(i, n.distanceToSquared(t[o]));
            return this.radius = Math.sqrt(i), this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.center.copy(e.center), this.radius = e.radius, this
    }, empty: function () {
        return 0 >= this.radius
    }, containsPoint: function (e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }, distanceToPoint: function (e) {
        return e.distanceTo(this.center) - this.radius
    }, intersectsSphere: function (e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }, clampPoint: function (e, t) {
        var r = this.center.distanceToSquared(e), n = t || new THREE.Vector3;
        return n.copy(e), r > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n
    }, getBoundingBox: function (e) {
        return e = e || new THREE.Box3, e.set(this.center, this.center), e.expandByScalar(this.radius), e
    }, applyMatrix4: function (e) {
        return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this
    }, translate: function (e) {
        return this.center.add(e), this
    }, equals: function (e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
},THREE.Frustum = function (e, t, r, n, i, o) {
    this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== o ? o : new THREE.Plane]
},THREE.Frustum.prototype = {
    constructor: THREE.Frustum, set: function (e, t, r, n, i, o) {
        var a = this.planes;
        return a[0].copy(e), a[1].copy(t), a[2].copy(r), a[3].copy(n), a[4].copy(i), a[5].copy(o), this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        for (var t = this.planes, r = 0; 6 > r; r++) t[r].copy(e.planes[r]);
        return this
    }, setFromMatrix: function (e) {
        var t = this.planes, r = e.elements;
        e = r[0];
        var n = r[1], i = r[2], o = r[3], a = r[4], s = r[5], h = r[6], c = r[7], u = r[8], l = r[9], p = r[10],
            d = r[11], f = r[12], E = r[13], m = r[14], r = r[15];
        return t[0].setComponents(o - e, c - a, d - u, r - f).normalize(), t[1].setComponents(o + e, c + a, d + u, r + f).normalize(), t[2].setComponents(o + n, c + s, d + l, r + E).normalize(), t[3].setComponents(o - n, c - s, d - l, r - E).normalize(), t[4].setComponents(o - i, c - h, d - p, r - m).normalize(), t[5].setComponents(o + i, c + h, d + p, r + m).normalize(), this
    }, intersectsObject: function () {
        var e = new THREE.Sphere;
        return function (t) {
            var r = t.geometry;
            return null === r.boundingSphere && r.computeBoundingSphere(), e.copy(r.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
        }
    }(), intersectsSphere: function (e) {
        var t = this.planes, r = e.center;
        e = -e.radius;
        for (var n = 0; 6 > n; n++) if (t[n].distanceToPoint(r) < e) return !1;
        return !0
    }, intersectsBox: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r) {
            for (var n = this.planes, i = 0; 6 > i; i++) {
                var o = n[i];
                e.x = 0 < o.normal.x ? r.min.x : r.max.x, t.x = 0 < o.normal.x ? r.max.x : r.min.x, e.y = 0 < o.normal.y ? r.min.y : r.max.y, t.y = 0 < o.normal.y ? r.max.y : r.min.y, e.z = 0 < o.normal.z ? r.min.z : r.max.z, t.z = 0 < o.normal.z ? r.max.z : r.min.z;
                var a = o.distanceToPoint(e), o = o.distanceToPoint(t);
                if (0 > a && 0 > o) return !1
            }
            return !0
        }
    }(), containsPoint: function (e) {
        for (var t = this.planes, r = 0; 6 > r; r++) if (0 > t[r].distanceToPoint(e)) return !1;
        return !0
    }
},THREE.Plane = function (e, t) {
    this.normal = void 0 !== e ? e : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
},THREE.Plane.prototype = {
    constructor: THREE.Plane, set: function (e, t) {
        return this.normal.copy(e), this.constant = t, this
    }, setComponents: function (e, t, r, n) {
        return this.normal.set(e, t, r), this.constant = n, this
    }, setFromNormalAndCoplanarPoint: function (e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    }, setFromCoplanarPoints: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r, n, i) {
            return n = e.subVectors(i, n).cross(t.subVectors(r, n)).normalize(), this.setFromNormalAndCoplanarPoint(n, r), this
        }
    }(), clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this
    }, normalize: function () {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this
    }, negate: function () {
        return this.constant *= -1, this.normal.negate(), this
    }, distanceToPoint: function (e) {
        return this.normal.dot(e) + this.constant
    }, distanceToSphere: function (e) {
        return this.distanceToPoint(e.center) - e.radius
    }, projectPoint: function (e, t) {
        return this.orthoPoint(e, t).sub(e).negate()
    }, orthoPoint: function (e, t) {
        var r = this.distanceToPoint(e);
        return (t || new THREE.Vector3).copy(this.normal).multiplyScalar(r)
    }, isIntersectionLine: function (e) {
        var t = this.distanceToPoint(e.start);
        return e = this.distanceToPoint(e.end), 0 > t && e > 0 || 0 > e && t > 0
    }, intersectLine: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            var n = r || new THREE.Vector3, i = t.delta(e), o = this.normal.dot(i);
            return 0 !== o ? (o = -(t.start.dot(this.normal) + this.constant) / o, 0 > o || o > 1 ? void 0 : n.copy(i).multiplyScalar(o).add(t.start)) : 0 === this.distanceToPoint(t.start) ? n.copy(t.start) : void 0
        }
    }(), coplanarPoint: function (e) {
        return (e || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    }, applyMatrix4: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Matrix3;
        return function (n, i) {
            var o = i || r.getNormalMatrix(n), o = e.copy(this.normal).applyMatrix3(o), a = this.coplanarPoint(t);
            return a.applyMatrix4(n), this.setFromNormalAndCoplanarPoint(o, a), this
        }
    }(), translate: function (e) {
        return this.constant -= e.dot(this.normal), this
    }, equals: function (e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
},THREE.Math = {
    generateUUID: function () {
        var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = Array(36), n = 0;
        return function () {
            for (var i = 0; 36 > i; i++) 8 === i || 13 === i || 18 === i || 23 === i ? r[i] = "-" : 14 === i ? r[i] = "4" : (2 >= n && (n = 33554432 + 16777216 * Math.random() | 0), e = 15 & n, n >>= 4, r[i] = t[19 === i ? 3 & e | 8 : e]);
            return r.join("")
        }
    }(), clamp: function (e, t, r) {
        return Math.max(t, Math.min(r, e))
    }, euclideanModulo: function (e, t) {
        return (e % t + t) % t
    }, mapLinear: function (e, t, r, n, i) {
        return n + (e - t) * (i - n) / (r - t)
    }, smoothstep: function (e, t, r) {
        return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
    }, smootherstep: function (e, t, r) {
        return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
    }, random16: function () {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    }, randInt: function (e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    }, randFloat: function (e, t) {
        return e + Math.random() * (t - e)
    }, randFloatSpread: function (e) {
        return e * (.5 - Math.random())
    }, degToRad: function () {
        var e = Math.PI / 180;
        return function (t) {
            return t * e
        }
    }(), radToDeg: function () {
        var e = 180 / Math.PI;
        return function (t) {
            return t * e
        }
    }(), isPowerOfTwo: function (e) {
        return 0 === (e & e - 1) && 0 !== e
    }, nearestPowerOfTwo: function (e) {
        return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    }, nextPowerOfTwo: function (e) {
        return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
    }
},THREE.Spline = function (e) {
    function t(e, t, r, n, i, o, a) {
        return e = .5 * (r - e), n = .5 * (n - t), (2 * (t - r) + e + n) * a + (-3 * (t - r) - 2 * e - n) * o + e * i + t
    }

    this.points = e;
    var r, n, i, o, a, s, h, c, u, l = [], p = {x: 0, y: 0, z: 0};
    this.initFromArray = function (e) {
        this.points = [];
        for (var t = 0; t < e.length; t++) this.points[t] = {x: e[t][0], y: e[t][1], z: e[t][2]}
    }, this.getPoint = function (e) {
        return r = (this.points.length - 1) * e, n = Math.floor(r), i = r - n, l[0] = 0 === n ? n : n - 1, l[1] = n, l[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1, l[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2, s = this.points[l[0]], h = this.points[l[1]], c = this.points[l[2]], u = this.points[l[3]], o = i * i, a = i * o, p.x = t(s.x, h.x, c.x, u.x, i, o, a), p.y = t(s.y, h.y, c.y, u.y, i, o, a), p.z = t(s.z, h.z, c.z, u.z, i, o, a), p
    }, this.getControlPointsArray = function () {
        var e, t, r = this.points.length, n = [];
        for (e = 0; r > e; e++) t = this.points[e], n[e] = [t.x, t.y, t.z];
        return n
    }, this.getLength = function (e) {
        var t, r, n, i = t = t = 0, o = new THREE.Vector3, a = new THREE.Vector3, s = [], h = 0;
        for (s[0] = 0, e || (e = 100), r = this.points.length * e, o.copy(this.points[0]), e = 1; r > e; e++) t = e / r, n = this.getPoint(t), a.copy(n), h += a.distanceTo(o), o.copy(n), t *= this.points.length - 1, t = Math.floor(t), t !== i && (s[t] = h, i = t);
        return s[s.length] = h, {chunks: s, total: h}
    }, this.reparametrizeByArcLength = function (e) {
        var t, r, n, i, o, a, s = [], h = new THREE.Vector3, c = this.getLength();
        for (s.push(h.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
            for (r = c.chunks[t] - c.chunks[t - 1], a = Math.ceil(e * r / c.total), i = (t - 1) / (this.points.length - 1), o = t / (this.points.length - 1), r = 1; a - 1 > r; r++) n = i + 1 / a * r * (o - i), n = this.getPoint(n), s.push(h.copy(n).clone());
            s.push(h.copy(this.points[t]).clone())
        }
        this.points = s
    }
},THREE.Triangle = function (e, t, r) {
    this.a = void 0 !== e ? e : new THREE.Vector3, this.b = void 0 !== t ? t : new THREE.Vector3, this.c = void 0 !== r ? r : new THREE.Vector3
},THREE.Triangle.normal = function () {
    var e = new THREE.Vector3;
    return function (t, r, n, i) {
        return i = i || new THREE.Vector3, i.subVectors(n, r), e.subVectors(t, r), i.cross(e), t = i.lengthSq(), t > 0 ? i.multiplyScalar(1 / Math.sqrt(t)) : i.set(0, 0, 0)
    }
}(),THREE.Triangle.barycoordFromPoint = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3;
    return function (n, i, o, a, s) {
        e.subVectors(a, i), t.subVectors(o, i), r.subVectors(n, i), n = e.dot(e), i = e.dot(t), o = e.dot(r);
        var h = t.dot(t);
        a = t.dot(r);
        var c = n * h - i * i;
        return s = s || new THREE.Vector3, 0 === c ? s.set(-2, -1, -1) : (c = 1 / c, h = (h * o - i * a) * c, n = (n * a - i * o) * c, s.set(1 - h - n, n, h))
    }
}(),THREE.Triangle.containsPoint = function () {
    var e = new THREE.Vector3;
    return function (t, r, n, i) {
        return t = THREE.Triangle.barycoordFromPoint(t, r, n, i, e), 0 <= t.x && 0 <= t.y && 1 >= t.x + t.y
    }
}(),THREE.Triangle.prototype = {
    constructor: THREE.Triangle, set: function (e, t, r) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(r), this
    }, setFromPointsAndIndices: function (e, t, r, n) {
        return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[n]), this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    }, area: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function () {
            return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
        }
    }(), midpoint: function (e) {
        return (e || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }, normal: function (e) {
        return THREE.Triangle.normal(this.a, this.b, this.c, e)
    }, plane: function (e) {
        return (e || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    }, barycoordFromPoint: function (e, t) {
        return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
    }, containsPoint: function (e) {
        return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
    }, equals: function (e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
},THREE.Channels = function () {
    this.mask = 1
},THREE.Channels.prototype = {
    constructor: THREE.Channels, set: function (e) {
        this.mask = 1 << e
    }, enable: function (e) {
        this.mask |= 1 << e
    }, toggle: function (e) {
        this.mask ^= 1 << e
    }, disable: function (e) {
        this.mask &= ~(1 << e)
    }
},THREE.Clock = function (e) {
    this.autoStart = void 0 === e || e, this.elapsedTime = this.oldTime = this.startTime = 0, this.running = !1
},THREE.Clock.prototype = {
    constructor: THREE.Clock, start: function () {
        this.oldTime = this.startTime = self.performance.now(), this.running = !0
    }, stop: function () {
        this.getElapsedTime(), this.running = !1
    }, getElapsedTime: function () {
        return this.getDelta(), this.elapsedTime
    }, getDelta: function () {
        var e = 0;
        if (this.autoStart && !this.running && this.start(), this.running) {
            var t = self.performance.now(), e = .001 * (t - this.oldTime);
            this.oldTime = t, this.elapsedTime += e
        }
        return e
    }
},THREE.EventDispatcher = function () {
},THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher, apply: function (e) {
        e.addEventListener = THREE.EventDispatcher.prototype.addEventListener, e.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener, e.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    }, addEventListener: function (e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var r = this._listeners;
        void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t)
    }, hasEventListener: function (e, t) {
        if (void 0 === this._listeners) return !1;
        var r = this._listeners;
        return void 0 !== r[e] && -1 !== r[e].indexOf(t)
    }, removeEventListener: function (e, t) {
        if (void 0 !== this._listeners) {
            var r = this._listeners[e];
            if (void 0 !== r) {
                var n = r.indexOf(t);
                -1 !== n && r.splice(n, 1)
            }
        }
    }, dispatchEvent: function (e) {
        if (void 0 !== this._listeners) {
            var t = this._listeners[e.type];
            if (void 0 !== t) {
                e.target = this;
                for (var r = [], n = t.length, i = 0; n > i; i++) r[i] = t[i];
                for (i = 0; n > i; i++) r[i].call(this, e)
            }
        }
    }
},function (e) {
    function t(e, t) {
        return e.distance - t.distance
    }

    function r(e, t, n, i) {
        if (!1 !== e.visible && (e.raycast(t, n), !0 === i)) {
            e = e.children, i = 0;
            for (var o = e.length; o > i; i++) r(e[i], t, n, !0)
        }
    }

    e.Raycaster = function (t, r, n, i) {
        this.ray = new e.Ray(t, r), this.near = n || 0, this.far = i || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {threshold: 1},
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function () {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }, e.Raycaster.prototype = {
        constructor: e.Raycaster, linePrecision: 1, set: function (e, t) {
            this.ray.set(e, t)
        }, setFromCamera: function (t, r) {
            r instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(r.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(this.ray.origin).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        }, intersectObject: function (e, n) {
            var i = [];
            return r(e, this, i, n), i.sort(t), i
        }, intersectObjects: function (e, n) {
            var i = [];
            if (!1 === Array.isArray(e)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
            for (var o = 0, a = e.length; a > o; o++) r(e[o], this, i, n);
            return i.sort(t), i
        }
    }
}(THREE),THREE.Object3D = function () {
    Object.defineProperty(this, "id", {value: THREE.Object3DIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.channels = new THREE.Channels, this.children = [], this.up = THREE.Object3D.DefaultUp.clone();
    var e = new THREE.Vector3, t = new THREE.Euler, r = new THREE.Quaternion, n = new THREE.Vector3(1, 1, 1);
    t.onChange(function () {
        r.setFromEuler(t, !1)
    }), r.onChange(function () {
        t.setFromQuaternion(r, void 0, !1)
    }), Object.defineProperties(this, {
        position: {enumerable: !0, value: e},
        rotation: {enumerable: !0, value: t},
        quaternion: {enumerable: !0, value: r},
        scale: {enumerable: !0, value: n},
        modelViewMatrix: {value: new THREE.Matrix4},
        normalMatrix: {value: new THREE.Matrix3}
    }), this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
},THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0),THREE.Object3D.DefaultMatrixAutoUpdate = !0,THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get eulerOrder() {
        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
    },
    set eulerOrder(e) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
    },
    get useQuaternion() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set useQuaternion(e) {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set renderDepth(e) {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
    },
    applyMatrix: function (e) {
        this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function (e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    },
    setRotationFromEuler: function (e) {
        this.quaternion.setFromEuler(e, !0)
    },
    setRotationFromMatrix: function (e) {
        this.quaternion.setFromRotationMatrix(e)
    },
    setRotationFromQuaternion: function (e) {
        this.quaternion.copy(e)
    },
    rotateOnAxis: function () {
        var e = new THREE.Quaternion;
        return function (t, r) {
            return e.setFromAxisAngle(t, r), this.quaternion.multiply(e), this
        }
    }(),
    rotateX: function () {
        var e = new THREE.Vector3(1, 0, 0);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateY: function () {
        var e = new THREE.Vector3(0, 1, 0);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    rotateZ: function () {
        var e = new THREE.Vector3(0, 0, 1);
        return function (t) {
            return this.rotateOnAxis(e, t)
        }
    }(),
    translateOnAxis: function () {
        var e = new THREE.Vector3;
        return function (t, r) {
            return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(r)), this
        }
    }(),
    translate: function (e, t) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
    },
    translateX: function () {
        var e = new THREE.Vector3(1, 0, 0);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateY: function () {
        var e = new THREE.Vector3(0, 1, 0);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    translateZ: function () {
        var e = new THREE.Vector3(0, 0, 1);
        return function (t) {
            return this.translateOnAxis(e, t)
        }
    }(),
    localToWorld: function (e) {
        return e.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function () {
        var e = new THREE.Matrix4;
        return function (t) {
            return t.applyMatrix4(e.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function () {
        var e = new THREE.Matrix4;
        return function (t) {
            e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
        }
    }(),
    add: function (e) {
        if (1 < arguments.length) {
            for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof THREE.Object3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({type: "added"}), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
    },
    remove: function (e) {
        if (1 < arguments.length) for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        t = this.children.indexOf(e), -1 !== t && (e.parent = null, e.dispatchEvent({type: "removed"}), this.children.splice(t, 1))
    },
    getChildByName: function (e) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
    },
    getObjectById: function (e) {
        return this.getObjectByProperty("id", e)
    },
    getObjectByName: function (e) {
        return this.getObjectByProperty("name", e)
    },
    getObjectByProperty: function (e, t) {
        if (this[e] === t) return this;
        for (var r = 0, n = this.children.length; n > r; r++) {
            var i = this.children[r].getObjectByProperty(e, t);
            if (void 0 !== i) return i
        }
    },
    getWorldPosition: function (e) {
        return e = e || new THREE.Vector3, this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function () {
        var e = new THREE.Vector3, t = new THREE.Vector3;
        return function (r) {
            return r = r || new THREE.Quaternion, this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, r, t), r
        }
    }(),
    getWorldRotation: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            return t = t || new THREE.Euler, this.getWorldQuaternion(e), t.setFromQuaternion(e, this.rotation.order, !1)
        }
    }(),
    getWorldScale: function () {
        var e = new THREE.Vector3, t = new THREE.Quaternion;
        return function (r) {
            return r = r || new THREE.Vector3, this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, r), r
        }
    }(),
    getWorldDirection: function () {
        var e = new THREE.Quaternion;
        return function (t) {
            return t = t || new THREE.Vector3, this.getWorldQuaternion(e), t.set(0, 0, 1).applyQuaternion(e)
        }
    }(),
    raycast: function () {
    },
    traverse: function (e) {
        e(this);
        for (var t = this.children, r = 0, n = t.length; n > r; r++) t[r].traverse(e)
    },
    traverseVisible: function (e) {
        if (!1 !== this.visible) {
            e(this);
            for (var t = this.children, r = 0, n = t.length; n > r; r++) t[r].traverseVisible(e)
        }
    },
    traverseAncestors: function (e) {
        var t = this.parent;
        null !== t && (e(t), t.traverseAncestors(e))
    },
    updateMatrix: function () {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function (e) {
        !0 === this.matrixAutoUpdate && this.updateMatrix(), (!0 === this.matrixWorldNeedsUpdate || !0 === e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
    },
    toJSON: function (e) {
        function t(e) {
            var t, r = [];
            for (t in e) {
                var n = e[t];
                delete n.metadata, r.push(n)
            }
            return r
        }

        var r = void 0 === e, n = {};
        r && (e = {geometries: {}, materials: {}, textures: {}, images: {}}, n.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var i = {};
        if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), i.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), i.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), i.material = this.material.uuid), 0 < this.children.length) {
            i.children = [];
            for (var o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(e).object)
        }
        if (r) {
            var r = t(e.geometries), o = t(e.materials), a = t(e.textures);
            e = t(e.images), 0 < r.length && (n.geometries = r), 0 < o.length && (n.materials = o), 0 < a.length && (n.textures = a), 0 < e.length && (n.images = e)
        }
        return n.object = i, n
    },
    clone: function (e) {
        return (new this.constructor).copy(this, e)
    },
    copy: function (e, t) {
        if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.rotationAutoUpdate = e.rotationAutoUpdate, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t) for (var r = 0; r < e.children.length; r++) this.add(e.children[r].clone());
        return this
    }
},THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),THREE.Object3DIdCount = 0,THREE.Face3 = function (e, t, r, n, i, o) {
    this.a = e, this.b = t, this.c = r, this.normal = n instanceof THREE.Vector3 ? n : new THREE.Vector3, this.vertexNormals = Array.isArray(n) ? n : [], this.color = i instanceof THREE.Color ? i : new THREE.Color, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== o ? o : 0
},THREE.Face3.prototype = {
    constructor: THREE.Face3, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
        for (var t = 0, r = e.vertexNormals.length; r > t; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
        for (t = 0, r = e.vertexColors.length; r > t; t++) this.vertexColors[t] = e.vertexColors[t].clone();
        return this
    }
},THREE.Face4 = function (e, t, r, n, i, o, a) {
    return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new THREE.Face3(e, t, r, i, o, a)
},THREE.BufferAttribute = function (e, t) {
    this.uuid = THREE.Math.generateUUID(), this.array = e, this.itemSize = t, this.dynamic = !1, this.updateRange = {
        offset: 0,
        count: -1
    }, this.version = 0
},THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute, get length() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
    }, get count() {
        return this.array.length / this.itemSize
    }, set needsUpdate(e) {
        !0 === e && this.version++
    }, setDynamic: function (e) {
        return this.dynamic = e, this
    }, copy: function (e) {
        return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.dynamic = e.dynamic, this
    }, copyAt: function (e, t, r) {
        e *= this.itemSize, r *= t.itemSize;
        for (var n = 0, i = this.itemSize; i > n; n++) this.array[e + n] = t.array[r + n];
        return this
    }, copyArray: function (e) {
        return this.array.set(e), this
    }, copyColorsArray: function (e) {
        for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
            var o = e[n];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), o = new THREE.Color), t[r++] = o.r, t[r++] = o.g, t[r++] = o.b
        }
        return this
    }, copyIndicesArray: function (e) {
        for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
            var o = e[n];
            t[r++] = o.a, t[r++] = o.b, t[r++] = o.c
        }
        return this
    }, copyVector2sArray: function (e) {
        for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
            var o = e[n];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), o = new THREE.Vector2), t[r++] = o.x, t[r++] = o.y
        }
        return this
    }, copyVector3sArray: function (e) {
        for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
            var o = e[n];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), o = new THREE.Vector3), t[r++] = o.x, t[r++] = o.y, t[r++] = o.z
        }
        return this
    }, copyVector4sArray: function (e) {
        for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
            var o = e[n];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), o = new THREE.Vector4), t[r++] = o.x, t[r++] = o.y, t[r++] = o.z, t[r++] = o.w
        }
        return this
    }, set: function (e, t) {
        return void 0 === t && (t = 0), this.array.set(e, t), this
    }, getX: function (e) {
        return this.array[e * this.itemSize]
    }, setX: function (e, t) {
        return this.array[e * this.itemSize] = t, this
    }, getY: function (e) {
        return this.array[e * this.itemSize + 1]
    }, setY: function (e, t) {
        return this.array[e * this.itemSize + 1] = t, this
    }, getZ: function (e) {
        return this.array[e * this.itemSize + 2]
    }, setZ: function (e, t) {
        return this.array[e * this.itemSize + 2] = t, this
    }, getW: function (e) {
        return this.array[e * this.itemSize + 3]
    }, setW: function (e, t) {
        return this.array[e * this.itemSize + 3] = t, this
    }, setXY: function (e, t, r) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this
    }, setXYZ: function (e, t, r, n) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = n, this
    }, setXYZW: function (e, t, r, n, i) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = n, this.array[e + 3] = i, this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }
},THREE.Int8Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Int8Array(e), t)
},THREE.Uint8Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Uint8Array(e), t)
},THREE.Uint8ClampedAttribute = function (e, t) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(e), t)
},THREE.Int16Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Int16Array(e), t)
},THREE.Uint16Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Uint16Array(e), t)
},THREE.Int32Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Int32Array(e), t)
},THREE.Uint32Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Uint32Array(e), t)
},THREE.Float32Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Float32Array(e), t)
},THREE.Float64Attribute = function (e, t) {
    return new THREE.BufferAttribute(new Float64Array(e), t)
},THREE.DynamicBufferAttribute = function (e, t) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new THREE.BufferAttribute(e, t).setDynamic(!0)
},THREE.InstancedBufferAttribute = function (e, t, r) {
    THREE.BufferAttribute.call(this, e, t), this.meshPerAttribute = r || 1
},THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype),THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute,THREE.InstancedBufferAttribute.prototype.copy = function (e) {
    return THREE.BufferAttribute.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
},THREE.InterleavedBuffer = function (e, t) {
    this.uuid = THREE.Math.generateUUID(), this.array = e, this.stride = t, this.dynamic = !1, this.updateRange = {
        offset: 0,
        count: -1
    }, this.version = 0
},THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer, get length() {
        return this.array.length
    }, get count() {
        return this.array.length / this.stride
    }, set needsUpdate(e) {
        !0 === e && this.version++
    }, setDynamic: function (e) {
        return this.dynamic = e, this
    }, copy: function (e) {
        this.array = new e.array.constructor(e.array), this.stride = e.stride, this.dynamic = e.dynamic
    }, copyAt: function (e, t, r) {
        e *= this.stride, r *= t.stride;
        for (var n = 0, i = this.stride; i > n; n++) this.array[e + n] = t.array[r + n];
        return this
    }, set: function (e, t) {
        return void 0 === t && (t = 0), this.array.set(e, t), this
    }, clone: function () {
        return (new this.constructor).copy(this)
    }
},THREE.InstancedInterleavedBuffer = function (e, t, r) {
    THREE.InterleavedBuffer.call(this, e, t), this.meshPerAttribute = r || 1
},THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype),THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer,THREE.InstancedInterleavedBuffer.prototype.copy = function (e) {
    return THREE.InterleavedBuffer.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
},THREE.InterleavedBufferAttribute = function (e, t, r) {
    this.uuid = THREE.Math.generateUUID(), this.data = e, this.itemSize = t, this.offset = r
},THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute, get length() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
    }, get count() {
        return this.data.array.length / this.data.stride
    }, setX: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t, this
    }, setY: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t, this
    }, setZ: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t, this
    }, setW: function (e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t, this
    }, getX: function (e) {
        return this.data.array[e * this.data.stride + this.offset]
    }, getY: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    }, getZ: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    }, getW: function (e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    }, setXY: function (e, t, r) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this
    }, setXYZ: function (e, t, r, n) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = n, this
    }, setXYZW: function (e, t, r, n, i) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = n, this.data.array[e + 3] = i, this
    }
},THREE.Geometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
},THREE.Geometry.prototype = {
    constructor: THREE.Geometry, applyMatrix: function (e) {
        for (var t = (new THREE.Matrix3).getNormalMatrix(e), r = 0, n = this.vertices.length; n > r; r++) this.vertices[r].applyMatrix4(e);
        for (r = 0, n = this.faces.length; n > r; r++) {
            e = this.faces[r], e.normal.applyMatrix3(t).normalize();
            for (var i = 0, o = e.vertexNormals.length; o > i; i++) e.vertexNormals[i].applyMatrix3(t).normalize()
        }
        null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.normalsNeedUpdate = this.verticesNeedUpdate = !0
    }, rotateX: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
        }
    }(), rotateY: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
        }
    }(), rotateZ: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
        }
    }(), translate: function () {
        var e;
        return function (t, r, n) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeTranslation(t, r, n), this.applyMatrix(e), this
        }
    }(), scale: function () {
        var e;
        return function (t, r, n) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeScale(t, r, n), this.applyMatrix(e), this
        }
    }(), lookAt: function () {
        var e;
        return function (t) {
            void 0 === e && (e = new THREE.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
        }
    }(), fromBufferGeometry: function (e) {
        function t(e, t, n) {
            var i = void 0 !== a ? [u[e].clone(), u[t].clone(), u[n].clone()] : [],
                o = void 0 !== s ? [r.colors[e].clone(), r.colors[t].clone(), r.colors[n].clone()] : [],
                i = new THREE.Face3(e, t, n, i, o);
            r.faces.push(i), void 0 !== h && r.faceVertexUvs[0].push([l[e].clone(), l[t].clone(), l[n].clone()]), void 0 !== c && r.faceVertexUvs[1].push([p[e].clone(), p[t].clone(), p[n].clone()])
        }

        var r = this, n = null !== e.index ? e.index.array : void 0, i = e.attributes, o = i.position.array,
            a = void 0 !== i.normal ? i.normal.array : void 0, s = void 0 !== i.color ? i.color.array : void 0,
            h = void 0 !== i.uv ? i.uv.array : void 0, c = void 0 !== i.uv2 ? i.uv2.array : void 0;
        void 0 !== c && (this.faceVertexUvs[1] = []);
        for (var u = [], l = [], p = [], d = i = 0; i < o.length; i += 3, d += 2) r.vertices.push(new THREE.Vector3(o[i], o[i + 1], o[i + 2])), void 0 !== a && u.push(new THREE.Vector3(a[i], a[i + 1], a[i + 2])), void 0 !== s && r.colors.push(new THREE.Color(s[i], s[i + 1], s[i + 2])), void 0 !== h && l.push(new THREE.Vector2(h[d], h[d + 1])), void 0 !== c && p.push(new THREE.Vector2(c[d], c[d + 1]));
        if (void 0 !== n) if (o = e.groups, 0 < o.length) for (i = 0; i < o.length; i++) for (var d = o[i], f = d.start, E = d.count, d = f, f = f + E; f > d; d += 3) t(n[d], n[d + 1], n[d + 2]); else for (i = 0; i < n.length; i += 3) t(n[i], n[i + 1], n[i + 2]); else for (i = 0; i < o.length / 3; i += 3) t(i, i + 1, i + 2);
        return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
    }, center: function () {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z), e
    }, normalize: function () {
        this.computeBoundingSphere();
        var e = this.boundingSphere.center, t = this.boundingSphere.radius, t = 0 === t ? 1 : 1 / t,
            r = new THREE.Matrix4;
        return r.set(t, 0, 0, -t * e.x, 0, t, 0, -t * e.y, 0, 0, t, -t * e.z, 0, 0, 0, 1), this.applyMatrix(r), this
    }, computeFaceNormals: function () {
        for (var e = new THREE.Vector3, t = new THREE.Vector3, r = 0, n = this.faces.length; n > r; r++) {
            var i = this.faces[r], o = this.vertices[i.a], a = this.vertices[i.b];
            e.subVectors(this.vertices[i.c], a), t.subVectors(o, a), e.cross(t), e.normalize(), i.normal.copy(e)
        }
    }, computeVertexNormals: function (e) {
        var t, r, n;
        for (n = Array(this.vertices.length), t = 0, r = this.vertices.length; r > t; t++) n[t] = new THREE.Vector3;
        if (e) {
            var i, o, a, s = new THREE.Vector3, h = new THREE.Vector3;
            for (e = 0, t = this.faces.length; t > e; e++) r = this.faces[e], i = this.vertices[r.a], o = this.vertices[r.b], a = this.vertices[r.c], s.subVectors(a, o), h.subVectors(i, o), s.cross(h), n[r.a].add(s), n[r.b].add(s), n[r.c].add(s)
        } else for (e = 0, t = this.faces.length; t > e; e++) r = this.faces[e], n[r.a].add(r.normal), n[r.b].add(r.normal), n[r.c].add(r.normal);
        for (t = 0, r = this.vertices.length; r > t; t++) n[t].normalize();
        for (e = 0, t = this.faces.length; t > e; e++) r = this.faces[e], i = r.vertexNormals, 3 === i.length ? (i[0].copy(n[r.a]), i[1].copy(n[r.b]), i[2].copy(n[r.c])) : (i[0] = n[r.a].clone(), i[1] = n[r.b].clone(), i[2] = n[r.c].clone())
    }, computeMorphNormals: function () {
        var e, t, r, n, i;
        for (r = 0, n = this.faces.length; n > r; r++) for (i = this.faces[r], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; t > e; e++) i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
        var o = new THREE.Geometry;
        for (o.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
            if (!this.morphNormals[e]) {
                this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [], i = this.morphNormals[e].faceNormals;
                var a, s, h = this.morphNormals[e].vertexNormals;
                for (r = 0, n = this.faces.length; n > r; r++) a = new THREE.Vector3, s = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                }, i.push(a), h.push(s)
            }
            for (h = this.morphNormals[e], o.vertices = this.morphTargets[e].vertices, o.computeFaceNormals(), o.computeVertexNormals(), r = 0, n = this.faces.length; n > r; r++) i = this.faces[r], a = h.faceNormals[r], s = h.vertexNormals[r], a.copy(i.normal), s.a.copy(i.vertexNormals[0]), s.b.copy(i.vertexNormals[1]), s.c.copy(i.vertexNormals[2])
        }
        for (r = 0, n = this.faces.length; n > r; r++) i = this.faces[r], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
    }, computeTangents: function () {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    }, computeLineDistances: function () {
        for (var e = 0, t = this.vertices, r = 0, n = t.length; n > r; r++) r > 0 && (e += t[r].distanceTo(t[r - 1])), this.lineDistances[r] = e
    }, computeBoundingBox: function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
    }, computeBoundingSphere: function () {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromPoints(this.vertices)
    }, merge: function (e, t, r) {
        if (0 == e instanceof THREE.Geometry) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e); else {
            var n, i = this.vertices.length, o = this.vertices, a = e.vertices, s = this.faces, h = e.faces,
                c = this.faceVertexUvs[0];
            e = e.faceVertexUvs[0], void 0 === r && (r = 0), void 0 !== t && (n = (new THREE.Matrix3).getNormalMatrix(t));
            for (var u = 0, l = a.length; l > u; u++) {
                var p = a[u].clone();
                void 0 !== t && p.applyMatrix4(t), o.push(p)
            }
            for (u = 0, l = h.length; l > u; u++) {
                var d, a = h[u], f = a.vertexNormals, E = a.vertexColors,
                    p = new THREE.Face3(a.a + i, a.b + i, a.c + i);
                for (p.normal.copy(a.normal), void 0 !== n && p.normal.applyMatrix3(n).normalize(), t = 0, o = f.length; o > t; t++) d = f[t].clone(), void 0 !== n && d.applyMatrix3(n).normalize(), p.vertexNormals.push(d);
                for (p.color.copy(a.color), t = 0, o = E.length; o > t; t++) d = E[t], p.vertexColors.push(d.clone());
                p.materialIndex = a.materialIndex + r, s.push(p)
            }
            for (u = 0, l = e.length; l > u; u++) if (r = e[u], n = [], void 0 !== r) {
                for (t = 0, o = r.length; o > t; t++) n.push(r[t].clone());
                c.push(n)
            }
        }
    }, mergeMesh: function (e) {
        0 == e instanceof THREE.Mesh ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix))
    }, mergeVertices: function () {
        var e, t, r, n = {}, i = [], o = [], a = Math.pow(10, 4);
        for (t = 0, r = this.vertices.length; r > t; t++) e = this.vertices[t], e = Math.round(e.x * a) + "_" + Math.round(e.y * a) + "_" + Math.round(e.z * a), void 0 === n[e] ? (n[e] = t, i.push(this.vertices[t]), o[t] = i.length - 1) : o[t] = o[n[e]];
        for (n = [], t = 0, r = this.faces.length; r > t; t++) for (a = this.faces[t], a.a = o[a.a], a.b = o[a.b], a.c = o[a.c], a = [a.a, a.b, a.c], e = 0; 3 > e; e++) if (a[e] === a[(e + 1) % 3]) {
            n.push(t);
            break
        }
        for (t = n.length - 1; t >= 0; t--) for (a = n[t], this.faces.splice(a, 1), o = 0, r = this.faceVertexUvs.length; r > o; o++) this.faceVertexUvs[o].splice(a, 1);
        return t = this.vertices.length - i.length, this.vertices = i, t
    }, sortFacesByMaterialIndex: function () {
        for (var e = this.faces, t = e.length, r = 0; t > r; r++) e[r]._id = r;
        e.sort(function (e, t) {
            return e.materialIndex - t.materialIndex
        });
        var n, i, o = this.faceVertexUvs[0], a = this.faceVertexUvs[1];
        for (o && o.length === t && (n = []), a && a.length === t && (i = []), r = 0; t > r; r++) {
            var s = e[r]._id;
            n && n.push(o[s]), i && i.push(a[s])
        }
        n && (this.faceVertexUvs[0] = n), i && (this.faceVertexUvs[1] = i)
    }, toJSON: function () {
        function e(e, t, r) {
            return r ? e | 1 << t : e & ~(1 << t)
        }

        function t(e) {
            var t = e.x.toString() + e.y.toString() + e.z.toString();
            return void 0 !== c[t] ? c[t] : (c[t] = h.length / 3, h.push(e.x, e.y, e.z), c[t])
        }

        function r(e) {
            var t = e.r.toString() + e.g.toString() + e.b.toString();
            return void 0 !== l[t] ? l[t] : (l[t] = u.length, u.push(e.getHex()), l[t])
        }

        function n(e) {
            var t = e.x.toString() + e.y.toString();
            return void 0 !== d[t] ? d[t] : (d[t] = p.length / 2, p.push(e.x, e.y), d[t])
        }

        var i = {metadata: {version: 4.4, type: "Geometry", generator: "Geometry.toJSON"}};
        if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), void 0 !== this.parameters) {
            var o, a = this.parameters;
            for (o in a) void 0 !== a[o] && (i[o] = a[o]);
            return i
        }
        for (a = [], o = 0; o < this.vertices.length; o++) {
            var s = this.vertices[o];
            a.push(s.x, s.y, s.z)
        }
        var s = [], h = [], c = {}, u = [], l = {}, p = [], d = {};
        for (o = 0; o < this.faces.length; o++) {
            var f = this.faces[o], E = void 0 !== this.faceVertexUvs[0][o], m = 0 < f.normal.length(),
                g = 0 < f.vertexNormals.length, T = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
                v = 0 < f.vertexColors.length, y = 0, y = e(y, 0, 0), y = e(y, 1, !1), y = e(y, 2, !1), y = e(y, 3, E),
                y = e(y, 4, m), y = e(y, 5, g), y = e(y, 6, T), y = e(y, 7, v);
            s.push(y), s.push(f.a, f.b, f.c), E && (E = this.faceVertexUvs[0][o], s.push(n(E[0]), n(E[1]), n(E[2]))), m && s.push(t(f.normal)), g && (m = f.vertexNormals, s.push(t(m[0]), t(m[1]), t(m[2]))), T && s.push(r(f.color)), v && (f = f.vertexColors, s.push(r(f[0]), r(f[1]), r(f[2])))
        }
        return i.data = {}, i.data.vertices = a, i.data.normals = h, 0 < u.length && (i.data.colors = u), 0 < p.length && (i.data.uvs = [p]), i.data.faces = s, i
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        this.vertices = [], this.faces = [], this.faceVertexUvs = [[]];
        for (var t = e.vertices, r = 0, n = t.length; n > r; r++) this.vertices.push(t[r].clone());
        for (t = e.faces, r = 0, n = t.length; n > r; r++) this.faces.push(t[r].clone());
        for (r = 0, n = e.faceVertexUvs.length; n > r; r++) {
            t = e.faceVertexUvs[r], void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
            for (var i = 0, o = t.length; o > i; i++) {
                for (var a = t[i], s = [], h = 0, c = a.length; c > h; h++) s.push(a[h].clone());
                this.faceVertexUvs[r].push(s)
            }
        }
        return this
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),THREE.GeometryIdCount = 0,THREE.DirectGeometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
},THREE.DirectGeometry.prototype = {
    constructor: THREE.DirectGeometry,
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function () {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
    },
    computeVertexNormals: function () {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
    },
    computeGroups: function (e) {
        var t, r, n = [];
        e = e.faces;
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.materialIndex !== r && (r = o.materialIndex, void 0 !== t && (t.count = 3 * i - t.start, n.push(t)), t = {
                start: 3 * i,
                materialIndex: r
            })
        }
        void 0 !== t && (t.count = 3 * i - t.start, n.push(t)), this.groups = n
    },
    fromGeometry: function (e) {
        var t = e.faces, r = e.vertices, n = e.faceVertexUvs, i = n[0] && 0 < n[0].length, o = n[1] && 0 < n[1].length,
            a = e.morphTargets, s = a.length;
        if (s > 0) {
            for (var h = [], c = 0; s > c; c++) h[c] = [];
            this.morphTargets.position = h
        }
        var u = e.morphNormals, l = u.length;
        if (l > 0) {
            for (var p = [], c = 0; l > c; c++) p[c] = [];
            this.morphTargets.normal = p
        }
        for (var d = e.skinIndices, f = e.skinWeights, E = d.length === r.length, m = f.length === r.length, c = 0; c < t.length; c++) {
            var g = t[c];
            this.vertices.push(r[g.a], r[g.b], r[g.c]);
            var T = g.vertexNormals;
            for (3 === T.length ? this.normals.push(T[0], T[1], T[2]) : (T = g.normal, this.normals.push(T, T, T)), T = g.vertexColors, 3 === T.length ? this.colors.push(T[0], T[1], T[2]) : (T = g.color, this.colors.push(T, T, T)), !0 === i && (T = n[0][c], void 0 !== T ? this.uvs.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))), !0 === o && (T = n[1][c], void 0 !== T ? this.uvs2.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))), T = 0; s > T; T++) {
                var v = a[T].vertices;
                h[T].push(v[g.a], v[g.b], v[g.c])
            }
            for (T = 0; l > T; T++) v = u[T].vertexNormals[c], p[T].push(v.a, v.b, v.c);
            E && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), m && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
        }
        return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
    },
    dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype),THREE.BufferGeometry = function () {
    Object.defineProperty(this, "id", {value: THREE.GeometryIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.drawRange = {
        start: 0,
        count: 1 / 0
    }
},THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry, addIndex: function (e) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
    }, getIndex: function () {
        return this.index
    }, setIndex: function (e) {
        this.index = e
    }, addAttribute: function (e, t, r) {
        0 == t instanceof THREE.BufferAttribute && 0 == t instanceof THREE.InterleavedBufferAttribute ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(e, new THREE.BufferAttribute(t, r))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t)) : this.attributes[e] = t
    }, getAttribute: function (e) {
        return this.attributes[e]
    }, removeAttribute: function (e) {
        delete this.attributes[e]
    }, get drawcalls() {
        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
    }, get offsets() {
        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
    }, addDrawCall: function (e, t, r) {
        void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
    }, clearDrawCalls: function () {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
    }, addGroup: function (e, t, r) {
        this.groups.push({start: e, count: t, materialIndex: void 0 !== r ? r : 0})
    }, clearGroups: function () {
        this.groups = []
    }, setDrawRange: function (e, t) {
        this.drawRange.start = e, this.drawRange.count = t
    }, applyMatrix: function (e) {
        var t = this.attributes.position;
        void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0), t = this.attributes.normal, void 0 !== t && ((new THREE.Matrix3).getNormalMatrix(e).applyToVector3Array(t.array), t.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere()
    }, rotateX: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
        }
    }(), rotateY: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
        }
    }(), rotateZ: function () {
        var e;
        return function (t) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
        }
    }(), translate: function () {
        var e;
        return function (t, r, n) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeTranslation(t, r, n), this.applyMatrix(e), this
        }
    }(), scale: function () {
        var e;
        return function (t, r, n) {
            return void 0 === e && (e = new THREE.Matrix4), e.makeScale(t, r, n), this.applyMatrix(e), this
        }
    }(), lookAt: function () {
        var e;
        return function (t) {
            void 0 === e && (e = new THREE.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
        }
    }(), center: function () {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z), e
    }, setFromObject: function (e) {
        var t = e.geometry;
        if (e instanceof THREE.Points || e instanceof THREE.Line) {
            e = new THREE.Float32Attribute(3 * t.vertices.length, 3);
            var r = new THREE.Float32Attribute(3 * t.colors.length, 3);
            this.addAttribute("position", e.copyVector3sArray(t.vertices)), this.addAttribute("color", r.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length && (e = new THREE.Float32Attribute(t.lineDistances.length, 1), this.addAttribute("lineDistance", e.copyArray(t.lineDistances))), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
        } else e instanceof THREE.Mesh && t instanceof THREE.Geometry && this.fromGeometry(t);
        return this
    }, updateFromObject: function (e) {
        var t = e.geometry;
        if (e instanceof THREE.Mesh) {
            var r = t.__directGeometry;
            if (void 0 === r) return this.fromGeometry(t);
            r.verticesNeedUpdate = t.verticesNeedUpdate, r.normalsNeedUpdate = t.normalsNeedUpdate, r.colorsNeedUpdate = t.colorsNeedUpdate, r.uvsNeedUpdate = t.uvsNeedUpdate, r.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = r
        }
        return !0 === t.verticesNeedUpdate && (r = this.attributes.position, void 0 !== r && (r.copyVector3sArray(t.vertices), r.needsUpdate = !0), t.verticesNeedUpdate = !1), !0 === t.normalsNeedUpdate && (r = this.attributes.normal, void 0 !== r && (r.copyVector3sArray(t.normals), r.needsUpdate = !0), t.normalsNeedUpdate = !1), !0 === t.colorsNeedUpdate && (r = this.attributes.color, void 0 !== r && (r.copyColorsArray(t.colors), r.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (r = this.attributes.uv, void 0 !== r && (r.copyVector2sArray(t.uvs), r.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, void 0 !== r && (r.copyArray(t.lineDistances), r.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
    }, fromGeometry: function (e) {
        return e.__directGeometry = (new THREE.DirectGeometry).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
    }, fromDirectGeometry: function (e) {
        var t = new Float32Array(3 * e.vertices.length);
        this.addAttribute("position", new THREE.BufferAttribute(t, 3).copyVector3sArray(e.vertices)), 0 < e.normals.length && (t = new Float32Array(3 * e.normals.length), this.addAttribute("normal", new THREE.BufferAttribute(t, 3).copyVector3sArray(e.normals))), 0 < e.colors.length && (t = new Float32Array(3 * e.colors.length), this.addAttribute("color", new THREE.BufferAttribute(t, 3).copyColorsArray(e.colors))), 0 < e.uvs.length && (t = new Float32Array(2 * e.uvs.length), this.addAttribute("uv", new THREE.BufferAttribute(t, 2).copyVector2sArray(e.uvs))), 0 < e.uvs2.length && (t = new Float32Array(2 * e.uvs2.length), this.addAttribute("uv2", new THREE.BufferAttribute(t, 2).copyVector2sArray(e.uvs2))), 0 < e.indices.length && (t = new (65535 < e.vertices.length ? Uint32Array : Uint16Array)(3 * e.indices.length), this.setIndex(new THREE.BufferAttribute(t, 1).copyIndicesArray(e.indices))), this.groups = e.groups;
        for (var r in e.morphTargets) {
            for (var t = [], n = e.morphTargets[r], i = 0, o = n.length; o > i; i++) {
                var a = n[i], s = new THREE.Float32Attribute(3 * a.length, 3);
                t.push(s.copyVector3sArray(a))
            }
            this.morphAttributes[r] = t
        }
        return 0 < e.skinIndices.length && (r = new THREE.Float32Attribute(4 * e.skinIndices.length, 4), this.addAttribute("skinIndex", r.copyVector4sArray(e.skinIndices))), 0 < e.skinWeights.length && (r = new THREE.Float32Attribute(4 * e.skinWeights.length, 4), this.addAttribute("skinWeight", r.copyVector4sArray(e.skinWeights))), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
    }, computeBoundingBox: function () {
        var e = new THREE.Vector3;
        return function () {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var t = this.attributes.position.array;
            if (t) {
                var r = this.boundingBox;
                r.makeEmpty();
                for (var n = 0, i = t.length; i > n; n += 3) e.fromArray(t, n), r.expandByPoint(e)
            }
            (void 0 === t || 0 === t.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
    }(), computeBoundingSphere: function () {
        var e = new THREE.Box3, t = new THREE.Vector3;
        return function () {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var r = this.attributes.position.array;
            if (r) {
                e.makeEmpty();
                for (var n = this.boundingSphere.center, i = 0, o = r.length; o > i; i += 3) t.fromArray(r, i), e.expandByPoint(t);
                e.center(n);
                for (var a = 0, i = 0, o = r.length; o > i; i += 3) t.fromArray(r, i), a = Math.max(a, n.distanceToSquared(t));
                this.boundingSphere.radius = Math.sqrt(a), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
    }(), computeFaceNormals: function () {
    }, computeVertexNormals: function () {
        var e = this.index, t = this.attributes, r = this.groups;
        if (t.position) {
            var n = t.position.array;
            if (void 0 === t.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(n.length), 3)); else for (var i = t.normal.array, o = 0, a = i.length; a > o; o++) i[o] = 0;
            var s, h, c, i = t.normal.array, u = new THREE.Vector3, l = new THREE.Vector3, p = new THREE.Vector3,
                d = new THREE.Vector3, f = new THREE.Vector3;
            if (e) {
                e = e.array, 0 === r.length && this.addGroup(0, e.length);
                for (var E = 0, m = r.length; m > E; ++E) for (o = r[E], a = o.start, s = o.count, o = a, a += s; a > o; o += 3) s = 3 * e[o + 0], h = 3 * e[o + 1], c = 3 * e[o + 2], u.fromArray(n, s), l.fromArray(n, h), p.fromArray(n, c), d.subVectors(p, l), f.subVectors(u, l), d.cross(f), i[s] += d.x, i[s + 1] += d.y, i[s + 2] += d.z, i[h] += d.x, i[h + 1] += d.y, i[h + 2] += d.z, i[c] += d.x, i[c + 1] += d.y, i[c + 2] += d.z
            } else for (o = 0, a = n.length; a > o; o += 9) u.fromArray(n, o), l.fromArray(n, o + 3), p.fromArray(n, o + 6), d.subVectors(p, l), f.subVectors(u, l), d.cross(f), i[o] = d.x, i[o + 1] = d.y, i[o + 2] = d.z, i[o + 3] = d.x, i[o + 4] = d.y, i[o + 5] = d.z, i[o + 6] = d.x, i[o + 7] = d.y, i[o + 8] = d.z;
            this.normalizeNormals(), t.normal.needsUpdate = !0
        }
    }, computeTangents: function () {
        console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
    }, computeOffsets: function (e) {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
    }, merge: function (e, t) {
        if (0 != e instanceof THREE.BufferGeometry) {
            void 0 === t && (t = 0);
            var r, n = this.attributes;
            for (r in n) if (void 0 !== e.attributes[r]) for (var i = n[r].array, o = e.attributes[r], a = o.array, s = 0, o = o.itemSize * t; s < a.length; s++, o++) i[o] = a[s];
            return this
        }
        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
    }, normalizeNormals: function () {
        for (var e, t, r, n = this.attributes.normal.array, i = 0, o = n.length; o > i; i += 3) e = n[i], t = n[i + 1], r = n[i + 2], e = 1 / Math.sqrt(e * e + t * t + r * r), n[i] *= e, n[i + 1] *= e, n[i + 2] *= e
    }, toJSON: function () {
        var e = {metadata: {version: 4.4, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
        if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
            var t, r = this.parameters;
            for (t in r) void 0 !== r[t] && (e[t] = r[t]);
            return e
        }
        e.data = {attributes: {}};
        var n = this.index;
        null !== n && (r = Array.prototype.slice.call(n.array), e.data.index = {
            type: n.array.constructor.name,
            array: r
        }), n = this.attributes;
        for (t in n) {
            var i = n[t], r = Array.prototype.slice.call(i.array);
            e.data.attributes[t] = {itemSize: i.itemSize, type: i.array.constructor.name, array: r}
        }
        return t = this.groups, 0 < t.length && (e.data.groups = JSON.parse(JSON.stringify(t))), t = this.boundingSphere, null !== t && (e.data.boundingSphere = {
            center: t.center.toArray(),
            radius: t.radius
        }), e
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        var t = e.index;
        null !== t && this.setIndex(t.clone());
        var r, t = e.attributes;
        for (r in t) this.addAttribute(r, t[r].clone());
        for (e = e.groups, r = 0, t = e.length; t > r; r++) {
            var n = e[r];
            this.addGroup(n.start, n.count)
        }
        return this
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),THREE.BufferGeometry.MaxIndex = 65535,THREE.InstancedBufferGeometry = function () {
    THREE.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
},THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry,THREE.InstancedBufferGeometry.prototype.addGroup = function (e, t, r) {
    this.groups.push({start: e, count: t, instances: r})
},THREE.InstancedBufferGeometry.prototype.copy = function (e) {
    var t = e.index;
    null !== t && this.setIndex(t.clone());
    var r, t = e.attributes;
    for (r in t) this.addAttribute(r, t[r].clone());
    for (e = e.groups, r = 0, t = e.length; t > r; r++) {
        var n = e[r];
        this.addGroup(n.start, n.count, n.instances)
    }
    return this
},THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype),THREE.AnimationAction = function (e, t, r, n, i) {
    if (void 0 === e) throw Error("clip is null");
    this.clip = e, this.localRoot = null, this.startTime = t || 0, this.timeScale = r || 1, this.weight = n || 1, this.loop = i || THREE.LoopRepeat, this.loopCount = 0, this.enabled = !0, this.actionTime = -this.startTime, this.clipTime = 0, this.propertyBindings = []
},THREE.AnimationAction.prototype = {
    constructor: THREE.AnimationAction, setLocalRoot: function (e) {
        return this.localRoot = e, this
    }, updateTime: function (e) {
        var t = this.clipTime, r = this.loopCount, n = this.clip.duration;
        return this.actionTime += e, this.loop === THREE.LoopOnce ? (this.loopCount = 0, this.clipTime = Math.min(Math.max(this.actionTime, 0), n), this.clipTime !== t && (this.clipTime === n ? this.mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: 1
        }) : 0 === this.clipTime && this.mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: -1
        })), this.clipTime) : (this.loopCount = Math.floor(this.actionTime / n), e = this.actionTime - this.loopCount * n, e %= n, this.loop == THREE.LoopPingPong && 1 === Math.abs(this.loopCount % 2) && (e = n - e), this.clipTime = e, this.loopCount !== r && this.mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: this.loopCount - this.loopCount
        }), this.clipTime)
    }, syncWith: function (e) {
        return this.actionTime = e.actionTime, this.timeScale = e.timeScale, this
    }, warpToDuration: function (e) {
        return this.timeScale = this.clip.duration / e, this
    }, init: function (e) {
        return this.clipTime = e - this.startTime, this
    }, update: function (e) {
        return this.updateTime(e), this.clip.getAt(this.clipTime)
    }, getTimeScaleAt: function (e) {
        return this.timeScale.getAt ? this.timeScale.getAt(e) : this.timeScale
    }, getWeightAt: function (e) {
        return this.weight.getAt ? this.weight.getAt(e) : this.weight
    }
},THREE.AnimationClip = function (e, t, r) {
    if (this.name = e, this.tracks = r, this.duration = void 0 !== t ? t : -1, 0 > this.duration) for (e = 0; e < this.tracks.length; e++) t = this.tracks[e], this.duration = Math.max(t.keys[t.keys.length - 1].time);
    this.trim(), this.optimize(), this.results = []
},THREE.AnimationClip.prototype = {
    constructor: THREE.AnimationClip, getAt: function (e) {
        e = Math.max(0, Math.min(e, this.duration));
        for (var t = 0; t < this.tracks.length; t++) this.results[t] = this.tracks[t].getAt(e);
        return this.results
    }, trim: function () {
        for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
        return this
    }, optimize: function () {
        for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
        return this
    }
},THREE.AnimationClip.CreateFromMorphTargetSequence = function (e, t, r) {
    for (var n = t.length, i = [], o = 0; n > o; o++) {
        var a = [];
        a.push({time: (o + n - 1) % n, value: 0}), a.push({time: o, value: 1}), a.push({
            time: (o + 1) % n,
            value: 0
        }), a.sort(THREE.KeyframeTrack.keyComparer), 0 === a[0].time && a.push({
            time: n,
            value: a[0].value
        }), i.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + t[o].name + "]", a).scale(1 / r))
    }
    return new THREE.AnimationClip(e, (-1), i)
},THREE.AnimationClip.findByName = function (e, t) {
    for (var r = 0; r < e.length; r++) if (e[r].name === t) return e[r];
    return null
},THREE.AnimationClip.CreateClipsFromMorphTargetSequences = function (e, t) {
    for (var r = {}, n = /^([\w-]*?)([\d]+)$/, i = 0, o = e.length; o > i; i++) {
        var a = e[i], s = a.name.match(n);
        if (s && 1 < s.length) {
            var h = s[1];
            (s = r[h]) || (r[h] = s = []), s.push(a)
        }
    }
    n = [];
    for (h in r) n.push(THREE.AnimationClip.CreateFromMorphTargetSequence(h, r[h], t));
    return n
},THREE.AnimationClip.parse = function (e) {
    for (var t = [], r = 0; r < e.tracks.length; r++) t.push(THREE.KeyframeTrack.parse(e.tracks[r]).scale(1 / e.fps));
    return new THREE.AnimationClip(e.name, e.duration, t)
},THREE.AnimationClip.parseAnimation = function (e, t, r) {
    if (!e) return console.error("  no animation in JSONLoader data"), null;
    var n = function (e, t, r, n, i) {
        for (var o = [], a = 0; a < t.length; a++) {
            var s = t[a];
            void 0 !== s[r] && o.push({time: s.time, value: i(s)})
        }
        return 0 < o.length ? new n(e, o) : null
    }, i = [], o = e.name || "default", a = e.length || -1, s = e.fps || 30;
    e = e.hierarchy || [];
    for (var h = 0; h < e.length; h++) {
        var c = e[h].keys;
        if (c && 0 != c.length) if (c[0].morphTargets) {
            for (var a = {}, u = 0; u < c.length; u++) if (c[u].morphTargets) for (var l = 0; l < c[u].morphTargets.length; l++) a[c[u].morphTargets[l]] = -1;
            for (var p in a) {
                for (var d = [], l = 0; l < c[u].morphTargets.length; l++) {
                    var f = c[u];
                    d.push({time: f.time, value: f.morphTarget === p ? 1 : 0})
                }
                i.push(new THREE.NumberKeyframeTrack(r + ".morphTargetInfluence[" + p + "]", d))
            }
            a = a.length * (s || 1)
        } else u = r + ".bones[" + t[h].name + "]", (l = n(u + ".position", c, "pos", THREE.VectorKeyframeTrack, function (e) {
            return (new THREE.Vector3).fromArray(e.pos)
        })) && i.push(l), (l = n(u + ".quaternion", c, "rot", THREE.QuaternionKeyframeTrack, function (e) {
            return e.rot.slerp ? e.rot.clone() : (new THREE.Quaternion).fromArray(e.rot)
        })) && i.push(l), (c = n(u + ".scale", c, "scl", THREE.VectorKeyframeTrack, function (e) {
            return (new THREE.Vector3).fromArray(e.scl)
        })) && i.push(c)
    }
    return 0 === i.length ? null : new THREE.AnimationClip(o, a, i)
},THREE.AnimationMixer = function (e) {
    this.root = e, this.time = 0, this.timeScale = 1, this.actions = [], this.propertyBindingMap = {}
},THREE.AnimationMixer.prototype = {
    constructor: THREE.AnimationMixer, addAction: function (e) {
        this.actions.push(e), e.init(this.time), e.mixer = this;
        for (var t = e.clip.tracks, r = e.localRoot || this.root, n = 0; n < t.length; n++) {
            var i = t[n], o = r.uuid + "-" + i.name, a = this.propertyBindingMap[o];
            void 0 === a && (a = new THREE.PropertyBinding(r, i.name), this.propertyBindingMap[o] = a), e.propertyBindings.push(a), a.referenceCount += 1
        }
    }, removeAllActions: function () {
        for (var e = 0; e < this.actions.length; e++) this.actions[e].mixer = null;
        for (var t in this.propertyBindingMap) this.propertyBindingMap[t].unbind();
        return this.actions = [], this.propertyBindingMap = {}, this
    }, removeAction: function (e) {
        var t = this.actions.indexOf(e);
        -1 !== t && (this.actions.splice(t, 1), e.mixer = null), t = e.localRoot || this.root, e = e.clip.tracks;
        for (var r = 0; r < e.length; r++) {
            var n = t.uuid + "-" + e[r].name, i = this.propertyBindingMap[n];
            i.referenceCount -= 1, 0 >= i.referenceCount && (i.unbind(), delete this.propertyBindingMap[n])
        }
        return this
    }, findActionByName: function (e) {
        for (var t = 0; t < this.actions.length; t++) if (this.actions[t].name === e) return this.actions[t];
        return null
    }, play: function (e, t) {
        return e.startTime = this.time, this.addAction(e), this
    }, fadeOut: function (e, t) {
        var r = [];
        return r.push({time: this.time, value: 1}), r.push({
            time: this.time + t,
            value: 0
        }), e.weight = new THREE.NumberKeyframeTrack("weight", r), this
    }, fadeIn: function (e, t) {
        var r = [];
        return r.push({time: this.time, value: 0}), r.push({
            time: this.time + t,
            value: 1
        }), e.weight = new THREE.NumberKeyframeTrack("weight", r), this
    }, warp: function (e, t, r, n) {
        var i = [];
        return i.push({time: this.time, value: t}), i.push({
            time: this.time + n,
            value: r
        }), e.timeScale = new THREE.NumberKeyframeTrack("timeScale", i), this
    }, crossFade: function (e, t, r, n) {
        if (this.fadeOut(e, r), this.fadeIn(t, r), n) {
            n = e.clip.duration / t.clip.duration;
            var i = 1 / n;
            this.warp(e, 1, n, r), this.warp(t, i, 1, r)
        }
        return this
    }, update: function (e) {
        e *= this.timeScale, this.time += e;
        for (var t = 0; t < this.actions.length; t++) {
            var r = this.actions[t], n = r.getWeightAt(this.time), i = r.getTimeScaleAt(this.time), i = r.update(e * i);
            if (!(0 >= r.weight) && r.enabled) for (var o = 0; o < i.length; o++) r.propertyBindings[o].accumulate(i[o], n)
        }
        for (var a in this.propertyBindingMap) this.propertyBindingMap[a].apply();
        return this
    }
},THREE.EventDispatcher.prototype.apply(THREE.AnimationMixer.prototype),THREE.AnimationUtils = {
    getEqualsFunc: function (e) {
        return e.equals ? function (e, t) {
            return e.equals(t)
        } : function (e, t) {
            return e === t
        }
    }, clone: function (e) {
        if ("object" == typeof e) {
            if (e.clone) return e.clone();
            console.error("can not figure out how to copy exemplarValue", e)
        }
        return e
    }, lerp: function (e, t, r, n) {
        return THREE.AnimationUtils.getLerpFunc(e, n)(e, t, r)
    }, lerp_object: function (e, t, r) {
        return e.lerp(t, r)
    }, slerp_object: function (e, t, r) {
        return e.slerp(t, r)
    }, lerp_number: function (e, t, r) {
        return e * (1 - r) + t * r
    }, lerp_boolean: function (e, t, r) {
        return .5 > r ? e : t
    }, lerp_boolean_immediate: function (e, t, r) {
        return e
    }, lerp_string: function (e, t, r) {
        return .5 > r ? e : t
    }, lerp_string_immediate: function (e, t, r) {
        return e
    }, getLerpFunc: function (e, t) {
        if (void 0 === e || null === e) throw Error("examplarValue is null");
        switch (typeof e) {
            case"object":
                if (e.lerp) return THREE.AnimationUtils.lerp_object;
                if (e.slerp) return THREE.AnimationUtils.slerp_object;
                break;
            case"number":
                return THREE.AnimationUtils.lerp_number;
            case"boolean":
                return t ? THREE.AnimationUtils.lerp_boolean : THREE.AnimationUtils.lerp_boolean_immediate;
            case"string":
                return t ? THREE.AnimationUtils.lerp_string : THREE.AnimationUtils.lerp_string_immediate
        }
    }
},THREE.KeyframeTrack = function (e, t) {
    if (void 0 === e) throw Error("track name is undefined");
    if (void 0 === t || 0 === t.length) throw Error("no keys in track named " + e);
    this.name = e, this.keys = t, this.lastIndex = 0, this.validate(), this.optimize()
},THREE.KeyframeTrack.prototype = {
    constructor: THREE.KeyframeTrack, getAt: function (e) {
        for (; this.lastIndex < this.keys.length && e >= this.keys[this.lastIndex].time;) this.lastIndex++;
        for (; 0 < this.lastIndex && e < this.keys[this.lastIndex - 1].time;) this.lastIndex--;
        if (this.lastIndex >= this.keys.length) return this.setResult(this.keys[this.keys.length - 1].value), this.result;
        if (0 === this.lastIndex) return this.setResult(this.keys[0].value), this.result;
        var t = this.keys[this.lastIndex - 1];
        if (this.setResult(t.value), t.constantToNext) return this.result;
        var r = this.keys[this.lastIndex];
        return this.result = this.lerpValues(this.result, r.value, (e - t.time) / (r.time - t.time))
    }, shift: function (e) {
        if (0 !== e) for (var t = 0; t < this.keys.length; t++) this.keys[t].time += e;
        return this
    }, scale: function (e) {
        if (1 !== e) for (var t = 0; t < this.keys.length; t++) this.keys[t].time *= e;
        return this
    }, trim: function (e, t) {
        for (var r = 0, n = 1; n < this.keys.length; n++) this.keys[n] <= e && r++;
        for (var i = 0, n = this.keys.length - 2; n > 0 && this.keys[n] >= t; n++) i++;
        return r + i > 0 && (this.keys = this.keys.splice(r, this.keys.length - i - r)), this
    }, validate: function () {
        var e = null;
        if (0 !== this.keys.length) {
            for (var t = 0; t < this.keys.length; t++) {
                var r = this.keys[t];
                if (!r) return void console.error("  key is null in track", this, t);
                if ("number" != typeof r.time || isNaN(r.time)) return void console.error("  key.time is not a valid number", this, t, r);
                if (void 0 === r.value || null === r.value) return void console.error("  key.value is null in track", this, t, r);
                if (e && e.time > r.time) return void console.error("  key.time is less than previous key time, out of order keys", this, t, r, e);
                e = r
            }
            return this
        }
        console.error("  track is empty, no keys", this)
    }, optimize: function () {
        var e = [], t = this.keys[0];
        e.push(t), THREE.AnimationUtils.getEqualsFunc(t.value);
        for (var r = 1; r < this.keys.length - 1; r++) {
            var n = this.keys[r], i = this.keys[r + 1];
            t.time === n.time || this.compareValues(t.value, n.value) && this.compareValues(n.value, i.value) || (t.constantToNext = this.compareValues(t.value, n.value), e.push(n), t = n)
        }
        return e.push(this.keys[this.keys.length - 1]), this.keys = e, this
    }
},THREE.KeyframeTrack.keyComparer = function (e, t) {
    return e.time - t.time
},THREE.KeyframeTrack.parse = function (e) {
    if (void 0 === e.type) throw Error("track type undefined, can not parse");
    return THREE.KeyframeTrack.GetTrackTypeForTypeName(e.type).parse(e)
},THREE.KeyframeTrack.GetTrackTypeForTypeName = function (e) {
    switch (e.toLowerCase()) {
        case"vector":
        case"vector2":
        case"vector3":
        case"vector4":
            return THREE.VectorKeyframeTrack;
        case"quaternion":
            return THREE.QuaternionKeyframeTrack;
        case"integer":
        case"scalar":
        case"double":
        case"float":
        case"number":
            return THREE.NumberKeyframeTrack;
        case"bool":
        case"boolean":
            return THREE.BooleanKeyframeTrack;
        case"string":
            return THREE.StringKeyframeTrack
    }
    throw Error("Unsupported typeName: " + e)
},THREE.PropertyBinding = function (e, t) {
    this.rootNode = e, this.trackName = t, this.referenceCount = 0, this.originalValue = null;
    var r = THREE.PropertyBinding.parseTrackName(t);
    this.directoryName = r.directoryName, this.nodeName = r.nodeName, this.objectName = r.objectName, this.objectIndex = r.objectIndex, this.propertyName = r.propertyName, this.propertyIndex = r.propertyIndex, this.node = THREE.PropertyBinding.findNode(e, this.nodeName) || e, this.cumulativeValue = null, this.cumulativeWeight = 0
},THREE.PropertyBinding.prototype = {
    constructor: THREE.PropertyBinding, reset: function () {
        this.cumulativeValue = null, this.cumulativeWeight = 0
    }, accumulate: function (e, t) {
        this.isBound || this.bind(), 0 === this.cumulativeWeight ? t > 0 && (null === this.cumulativeValue && (this.cumulativeValue = THREE.AnimationUtils.clone(e)), this.cumulativeWeight = t) : (this.cumulativeValue = this.lerpValue(this.cumulativeValue, e, t / (this.cumulativeWeight + t)), this.cumulativeWeight += t)
    }, unbind: function () {
        this.isBound && (this.setValue(this.originalValue), this.triggerDirty = this.equalsValue = this.lerpValue = this.getValue = this.setValue = null, this.isBound = !1)
    }, bind: function () {
        if (!this.isBound) {
            var e = this.node;
            if (e) {
                if (this.objectName) {
                    if ("materials" === this.objectName) {
                        if (!e.material) return void console.error("  can not bind to material as node does not have a material", this);
                        if (!e.material.materials) return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                        e = e.material.materials
                    } else if ("bones" === this.objectName) {
                        if (!e.skeleton) return void console.error("  can not bind to bones as node does not have a skeleton", this);
                        for (var e = e.skeleton.bones, t = 0; t < e.length; t++) if (e[t].name === this.objectIndex) {
                            this.objectIndex = t;
                            break
                        }
                    } else {
                        if (void 0 === e[this.objectName]) return void console.error("  can not bind to objectName of node, undefined", this);
                        e = e[this.objectName]
                    }
                    if (void 0 !== this.objectIndex) {
                        if (void 0 === e[this.objectIndex]) return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                        e = e[this.objectIndex]
                    }
                }
                var r = e[this.propertyName];
                if (r) {
                    if (void 0 !== this.propertyIndex) {
                        if ("morphTargetInfluences" === this.propertyName) for (e.geometry || console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this), e.geometry.morphTargets || console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this), t = 0; t < this.node.geometry.morphTargets.length; t++) if (e.geometry.morphTargets[t].name === this.propertyIndex) {
                            this.propertyIndex = t;
                            break
                        }
                        this.setValue = function (e) {
                            return !this.equalsValue(r[this.propertyIndex], e) && (r[this.propertyIndex] = e, !0)
                        }, this.getValue = function () {
                            return r[this.propertyIndex]
                        }
                    } else r.copy ? (this.setValue = function (e) {
                        return !this.equalsValue(r, e) && (r.copy(e), !0)
                    }, this.getValue = function () {
                        return r
                    }) : (this.setValue = function (t) {
                        return !this.equalsValue(e[this.propertyName], t) && (e[this.propertyName] = t, !0)
                    }, this.getValue = function () {
                        return e[this.propertyName]
                    });
                    void 0 !== e.needsUpdate ? this.triggerDirty = function () {
                        this.node.needsUpdate = !0
                    } : void 0 !== e.matrixWorldNeedsUpdate && (this.triggerDirty = function () {
                        e.matrixWorldNeedsUpdate = !0
                    }), this.originalValue = this.getValue(), this.equalsValue = THREE.AnimationUtils.getEqualsFunc(this.originalValue), this.lerpValue = THREE.AnimationUtils.getLerpFunc(this.originalValue, !0), this.isBound = !0
                } else console.error("  trying to update property for track: " + this.nodeName + "." + this.propertyName + " but it wasn't found.", e)
            } else console.error("  trying to update node for track: " + this.trackName + " but it wasn't found.")
        }
    }, apply: function () {
        if (this.isBound || this.bind(), 0 < this.cumulativeWeight) {
            if (1 > this.cumulativeWeight) {
                var e = 1 - this.cumulativeWeight;
                this.cumulativeValue = this.lerpValue(this.cumulativeValue, this.originalValue, e / (this.cumulativeWeight + e))
            }
            this.setValue(this.cumulativeValue) && this.triggerDirty && this.triggerDirty(), this.cumulativeValue = null, this.cumulativeWeight = 0
        }
    }
},THREE.PropertyBinding.parseTrackName = function (e) {
    var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_. ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,
        r = t.exec(e);
    if (!r) throw Error("cannot parse trackName at all: " + e);
    if (r.index === t.lastIndex && t.lastIndex++, t = {
        directoryName: r[1],
        nodeName: r[3],
        objectName: r[5],
        objectIndex: r[7],
        propertyName: r[9],
        propertyIndex: r[11]
    }, null === t.propertyName || 0 === t.propertyName.length) throw Error("can not parse propertyName from trackName: " + e);
    return t
},THREE.PropertyBinding.findNode = function (e, t) {
    function r(e) {
        for (var r = 0; r < e.bones.length; r++) {
            var n = e.bones[r];
            if (n.name === t) return n
        }
        return null
    }

    function n(e) {
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            if (i.name === t || i.uuid === t || (i = n(i.children))) return i
        }
        return null
    }

    if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
        var i = r(e.skeleton);
        if (i) return i
    }
    return e.children && (i = n(e.children)) ? i : null
},THREE.VectorKeyframeTrack = function (e, t) {
    THREE.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value.clone()
},THREE.VectorKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),
THREE.VectorKeyframeTrack.prototype.constructor = THREE.VectorKeyframeTrack,THREE.VectorKeyframeTrack.prototype.setResult = function (e) {
    this.result.copy(e)
},THREE.VectorKeyframeTrack.prototype.lerpValues = function (e, t, r) {
    return e.lerp(t, r)
},THREE.VectorKeyframeTrack.prototype.compareValues = function (e, t) {
    return e.equals(t)
},THREE.VectorKeyframeTrack.prototype.clone = function () {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({time: r.time, value: r.value.clone()})
    }
    return new THREE.VectorKeyframeTrack(this.name, e)
},THREE.VectorKeyframeTrack.parse = function (e) {
    for (var t = THREE["Vector" + e.keys[0].value.length], r = [], n = 0; n < e.keys.length; n++) {
        var i = e.keys[n];
        r.push({value: (new t).fromArray(i.value), time: i.time})
    }
    return new THREE.VectorKeyframeTrack(e.name, r)
},THREE.QuaternionKeyframeTrack = function (e, t) {
    THREE.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value.clone()
},THREE.QuaternionKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),THREE.QuaternionKeyframeTrack.prototype.constructor = THREE.QuaternionKeyframeTrack,THREE.QuaternionKeyframeTrack.prototype.setResult = function (e) {
    this.result.copy(e)
},THREE.QuaternionKeyframeTrack.prototype.lerpValues = function (e, t, r) {
    return e.slerp(t, r)
},THREE.QuaternionKeyframeTrack.prototype.compareValues = function (e, t) {
    return e.equals(t)
},THREE.QuaternionKeyframeTrack.prototype.multiply = function (e) {
    for (var t = 0; t < this.keys.length; t++) this.keys[t].value.multiply(e);
    return this
},THREE.QuaternionKeyframeTrack.prototype.clone = function () {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({time: r.time, value: r.value.clone()})
    }
    return new THREE.QuaternionKeyframeTrack(this.name, e)
},THREE.QuaternionKeyframeTrack.parse = function (e) {
    for (var t = [], r = 0; r < e.keys.length; r++) {
        var n = e.keys[r];
        t.push({value: (new THREE.Quaternion).fromArray(n.value), time: n.time})
    }
    return new THREE.QuaternionKeyframeTrack(e.name, t)
},THREE.StringKeyframeTrack = function (e, t) {
    THREE.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value
},THREE.StringKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),THREE.StringKeyframeTrack.prototype.constructor = THREE.StringKeyframeTrack,THREE.StringKeyframeTrack.prototype.setResult = function (e) {
    this.result = e
},THREE.StringKeyframeTrack.prototype.lerpValues = function (e, t, r) {
    return 1 > r ? e : t
},THREE.StringKeyframeTrack.prototype.compareValues = function (e, t) {
    return e === t
},THREE.StringKeyframeTrack.prototype.clone = function () {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({time: r.time, value: r.value})
    }
    return new THREE.StringKeyframeTrack(this.name, e)
},THREE.StringKeyframeTrack.parse = function (e) {
    return new THREE.StringKeyframeTrack(e.name, e.keys)
},THREE.BooleanKeyframeTrack = function (e, t) {
    THREE.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value
},THREE.BooleanKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),THREE.BooleanKeyframeTrack.prototype.constructor = THREE.BooleanKeyframeTrack,THREE.BooleanKeyframeTrack.prototype.setResult = function (e) {
    this.result = e
},THREE.BooleanKeyframeTrack.prototype.lerpValues = function (e, t, r) {
    return 1 > r ? e : t
},THREE.BooleanKeyframeTrack.prototype.compareValues = function (e, t) {
    return e === t
},THREE.BooleanKeyframeTrack.prototype.clone = function () {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({time: r.time, value: r.value})
    }
    return new THREE.BooleanKeyframeTrack(this.name, e)
},THREE.BooleanKeyframeTrack.parse = function (e) {
    return new THREE.BooleanKeyframeTrack(e.name, e.keys)
},THREE.NumberKeyframeTrack = function (e, t) {
    THREE.KeyframeTrack.call(this, e, t), this.result = this.keys[0].value
},THREE.NumberKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),THREE.NumberKeyframeTrack.prototype.constructor = THREE.NumberKeyframeTrack,THREE.NumberKeyframeTrack.prototype.setResult = function (e) {
    this.result = e
},THREE.NumberKeyframeTrack.prototype.lerpValues = function (e, t, r) {
    return e * (1 - r) + t * r
},THREE.NumberKeyframeTrack.prototype.compareValues = function (e, t) {
    return e === t
},THREE.NumberKeyframeTrack.prototype.clone = function () {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({time: r.time, value: r.value})
    }
    return new THREE.NumberKeyframeTrack(this.name, e)
},THREE.NumberKeyframeTrack.parse = function (e) {
    return new THREE.NumberKeyframeTrack(e.name, e.keys)
},THREE.Camera = function () {
    THREE.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4
},THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),THREE.Camera.prototype.constructor = THREE.Camera,THREE.Camera.prototype.getWorldDirection = function () {
    var e = new THREE.Quaternion;
    return function (t) {
        return t = t || new THREE.Vector3, this.getWorldQuaternion(e), t.set(0, 0, -1).applyQuaternion(e)
    }
}(),THREE.Camera.prototype.lookAt = function () {
    var e = new THREE.Matrix4;
    return function (t) {
        e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
    }
}(),THREE.Camera.prototype.clone = function () {
    return (new this.constructor).copy(this)
},THREE.Camera.prototype.copy = function (e) {
    return THREE.Object3D.prototype.copy.call(this, e), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
},THREE.CubeCamera = function (e, t, r) {
    THREE.Object3D.call(this), this.type = "CubeCamera";
    var n = new THREE.PerspectiveCamera(90, 1, e, t);
    n.up.set(0, -1, 0), n.lookAt(new THREE.Vector3(1, 0, 0)), this.add(n);
    var i = new THREE.PerspectiveCamera(90, 1, e, t);
    i.up.set(0, -1, 0), i.lookAt(new THREE.Vector3((-1), 0, 0)), this.add(i);
    var o = new THREE.PerspectiveCamera(90, 1, e, t);
    o.up.set(0, 0, 1), o.lookAt(new THREE.Vector3(0, 1, 0)), this.add(o);
    var a = new THREE.PerspectiveCamera(90, 1, e, t);
    a.up.set(0, 0, -1), a.lookAt(new THREE.Vector3(0, (-1), 0)), this.add(a);
    var s = new THREE.PerspectiveCamera(90, 1, e, t);
    s.up.set(0, -1, 0), s.lookAt(new THREE.Vector3(0, 0, 1)), this.add(s);
    var h = new THREE.PerspectiveCamera(90, 1, e, t);
    h.up.set(0, -1, 0), h.lookAt(new THREE.Vector3(0, 0, (-1))), this.add(h), this.renderTarget = new THREE.WebGLRenderTargetCube(r, r, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    }), this.updateCubeMap = function (e, t) {
        null === this.parent && this.updateMatrixWorld();
        var r = this.renderTarget, c = r.texture.generateMipmaps;
        r.texture.generateMipmaps = !1, r.activeCubeFace = 0, e.render(t, n, r), r.activeCubeFace = 1, e.render(t, i, r), r.activeCubeFace = 2, e.render(t, o, r), r.activeCubeFace = 3, e.render(t, a, r), r.activeCubeFace = 4, e.render(t, s, r), r.texture.generateMipmaps = c, r.activeCubeFace = 5, e.render(t, h, r), e.setRenderTarget(null)
    }
},THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype),THREE.CubeCamera.prototype.constructor = THREE.CubeCamera,THREE.OrthographicCamera = function (e, t, r, n, i, o) {
    THREE.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = e, this.right = t, this.top = r, this.bottom = n, this.near = void 0 !== i ? i : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
},THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype),THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera,THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
    var e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom),
        r = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(r - e, r + e, n + t, n - t, this.near, this.far)
},THREE.OrthographicCamera.prototype.copy = function (e) {
    return THREE.Camera.prototype.copy.call(this, e), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this
},THREE.OrthographicCamera.prototype.toJSON = function (e) {
    return e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, e
},THREE.PerspectiveCamera = function (e, t, r, n) {
    THREE.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== n ? n : 2e3, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera,THREE.PerspectiveCamera.prototype.setLens = function (e, t) {
    void 0 === t && (t = 24), this.fov = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.setViewOffset = function (e, t, r, n, i, o) {
    this.fullWidth = e, this.fullHeight = t, this.x = r, this.y = n, this.width = i, this.height = o, this.updateProjectionMatrix()
},THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    var e = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
    if (this.fullWidth) {
        var t = this.fullWidth / this.fullHeight, e = Math.tan(THREE.Math.degToRad(.5 * e)) * this.near, r = -e,
            n = t * r, t = Math.abs(t * e - n), r = Math.abs(e - r);
        this.projectionMatrix.makeFrustum(n + this.x * t / this.fullWidth, n + (this.x + this.width) * t / this.fullWidth, e - (this.y + this.height) * r / this.fullHeight, e - this.y * r / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far)
},THREE.PerspectiveCamera.prototype.copy = function (e) {
    return THREE.Camera.prototype.copy.call(this, e), this.fov = e.fov, this.aspect = e.aspect, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this
},THREE.PerspectiveCamera.prototype.toJSON = function (e) {
    return e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.zoom = this.zoom, e.object.fov = this.fov, e.object.aspect = this.aspect, e.object.near = this.near, e.object.far = this.far, e
},THREE.Light = function (e) {
    THREE.Object3D.call(this), this.type = "Light", this.color = new THREE.Color(e), this.receiveShadow = void 0
},THREE.Light.prototype = Object.create(THREE.Object3D.prototype),THREE.Light.prototype.constructor = THREE.Light,Object.defineProperties(THREE.Light.prototype, {
    onlyShadow: {
        set: function (e) {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    }, shadowCameraFov: {
        set: function (e) {
            this.shadow.camera.fov = e
        }
    }, shadowCameraLeft: {
        set: function (e) {
            this.shadow.camera.left = e
        }
    }, shadowCameraRight: {
        set: function (e) {
            this.shadow.camera.right = e
        }
    }, shadowCameraTop: {
        set: function (e) {
            this.shadow.camera.top = e
        }
    }, shadowCameraBottom: {
        set: function (e) {
            this.shadow.camera.bottom = e
        }
    }, shadowCameraNear: {
        set: function (e) {
            this.shadow.camera.near = e
        }
    }, shadowCameraFar: {
        set: function (e) {
            this.shadow.camera.far = e
        }
    }, shadowCameraVisible: {
        set: function (e) {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow ) instead.")
        }
    }, shadowBias: {
        set: function (e) {
            this.shadow.bias = e
        }
    }, shadowDarkness: {
        set: function (e) {
            this.shadow.darkness = e
        }
    }, shadowMapWidth: {
        set: function (e) {
            this.shadow.mapSize.width = e
        }
    }, shadowMapHeight: {
        set: function (e) {
            this.shadow.mapSize.height = e
        }
    }
}),THREE.Light.prototype.copy = function (e) {
    return THREE.Object3D.prototype.copy.call(this, e), this.color.copy(e.color), this
},THREE.Light.prototype.toJSON = function (e) {
    return e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.color = this.color.getHex(), void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.intensity && (e.object.intensity = this.intensity), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.exponent && (e.object.exponent = this.exponent), e
},THREE.LightShadow = function (e) {
    this.camera = e, this.bias = 0, this.darkness = 1, this.mapSize = new THREE.Vector2(512, 512), this.matrix = this.map = null
},THREE.LightShadow.prototype = {
    constructor: THREE.LightShadow, copy: function (e) {
        this.camera = e.camera.clone(), this.bias = e.bias, this.darkness = e.darkness, this.mapSize.copy(e.mapSize)
    }, clone: function () {
        return (new this.constructor).copy(this)
    }
},THREE.AmbientLight = function (e) {
    THREE.Light.call(this, e), this.type = "AmbientLight", this.castShadow = void 0
},THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype),THREE.AmbientLight.prototype.constructor = THREE.AmbientLight,THREE.DirectionalLight = function (e, t) {
    THREE.Light.call(this, e), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new THREE.Object3D, this.intensity = void 0 !== t ? t : 1, this.shadow = new THREE.LightShadow(new THREE.OrthographicCamera((-500), 500, 500, (-500), 50, 5e3))
},THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype),THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight,THREE.DirectionalLight.prototype.copy = function (e) {
    return THREE.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
},THREE.HemisphereLight = function (e, t, r) {
    THREE.Light.call(this, e), this.type = "HemisphereLight", this.castShadow = void 0, this.position.set(0, 1, 0), this.updateMatrix(), this.groundColor = new THREE.Color(t), this.intensity = void 0 !== r ? r : 1
},THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype),THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight,THREE.HemisphereLight.prototype.copy = function (e) {
    return THREE.Light.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this.intensity = e.intensity, this
},THREE.PointLight = function (e, t, r, n) {
    THREE.Light.call(this, e), this.type = "PointLight", this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90, 1, 1, 500))
},THREE.PointLight.prototype = Object.create(THREE.Light.prototype),THREE.PointLight.prototype.constructor = THREE.PointLight,THREE.PointLight.prototype.copy = function (e) {
    return THREE.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
},THREE.SpotLight = function (e, t, r, n, i, o) {
    THREE.Light.call(this, e), this.type = "SpotLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new THREE.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.exponent = void 0 !== i ? i : 10, this.decay = void 0 !== o ? o : 1, this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50, 1, 50, 5e3))
},THREE.SpotLight.prototype = Object.create(THREE.Light.prototype),THREE.SpotLight.prototype.constructor = THREE.SpotLight,THREE.SpotLight.prototype.copy = function (e) {
    return THREE.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.distance = e.distance, this.angle = e.angle, this.exponent = e.exponent, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
},THREE.Cache = {
    enabled: !1, files: {}, add: function (e, t) {
        !1 !== this.enabled && (this.files[e] = t)
    }, get: function (e) {
        return !1 !== this.enabled ? this.files[e] : void 0
    }, remove: function (e) {
        delete this.files[e]
    }, clear: function () {
        this.files = {}
    }
},THREE.Loader = function () {
    this.onLoadStart = function () {
    }, this.onLoadProgress = function () {
    }, this.onLoadComplete = function () {
    }
},THREE.Loader.prototype = {
    constructor: THREE.Loader, crossOrigin: void 0, extractUrlBase: function (e) {
        return e = e.split("/"), 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
    }, initMaterials: function (e, t, r) {
        for (var n = [], i = 0; i < e.length; ++i) n[i] = this.createMaterial(e[i], t, r);
        return n
    }, createMaterial: function () {
        var e, t, r;
        return function (n, i, o) {
            function a(e, r, n, a, s) {
                e = i + e;
                var c = THREE.Loader.Handlers.get(e);
                return null !== c ? e = c.load(e) : (t.setCrossOrigin(o), e = t.load(e)), void 0 !== r && (e.repeat.fromArray(r), 1 !== r[0] && (e.wrapS = THREE.RepeatWrapping), 1 !== r[1] && (e.wrapT = THREE.RepeatWrapping)), void 0 !== n && e.offset.fromArray(n), void 0 !== a && ("repeat" === a[0] && (e.wrapS = THREE.RepeatWrapping), "mirror" === a[0] && (e.wrapS = THREE.MirroredRepeatWrapping), "repeat" === a[1] && (e.wrapT = THREE.RepeatWrapping), "mirror" === a[1] && (e.wrapT = THREE.MirroredRepeatWrapping)), void 0 !== s && (e.anisotropy = s), r = THREE.Math.generateUUID(), h[r] = e, r
            }

            void 0 === e && (e = new THREE.Color), void 0 === t && (t = new THREE.TextureLoader), void 0 === r && (r = new THREE.MaterialLoader);
            var s, h = {}, c = {uuid: THREE.Math.generateUUID(), type: "MeshLambertMaterial"};
            for (s in n) {
                var u = n[s];
                switch (s) {
                    case"DbgColor":
                        c.color = u;
                        break;
                    case"DbgIndex":
                    case"opticalDensity":
                    case"illumination":
                        break;
                    case"DbgName":
                        c.name = u;
                        break;
                    case"blending":
                        c.blending = THREE[u];
                        break;
                    case"colorDiffuse":
                        c.color = e.fromArray(u).getHex();
                        break;
                    case"colorSpecular":
                        c.specular = e.fromArray(u).getHex();
                        break;
                    case"colorEmissive":
                        c.emissive = e.fromArray(u).getHex();
                        break;
                    case"specularCoef":
                        c.shininess = u;
                        break;
                    case"shading":
                        "basic" === u.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (c.type = "MeshPhongMaterial");
                        break;
                    case"mapDiffuse":
                        c.map = a(u, n.mapDiffuseRepeat, n.mapDiffuseOffset, n.mapDiffuseWrap, n.mapDiffuseAnisotropy);
                        break;
                    case"mapDiffuseRepeat":
                    case"mapDiffuseOffset":
                    case"mapDiffuseWrap":
                    case"mapDiffuseAnisotropy":
                        break;
                    case"mapLight":
                        c.lightMap = a(u, n.mapLightRepeat, n.mapLightOffset, n.mapLightWrap, n.mapLightAnisotropy);
                        break;
                    case"mapLightRepeat":
                    case"mapLightOffset":
                    case"mapLightWrap":
                    case"mapLightAnisotropy":
                        break;
                    case"mapAO":
                        c.aoMap = a(u, n.mapAORepeat, n.mapAOOffset, n.mapAOWrap, n.mapAOAnisotropy);
                        break;
                    case"mapAORepeat":
                    case"mapAOOffset":
                    case"mapAOWrap":
                    case"mapAOAnisotropy":
                        break;
                    case"mapBump":
                        c.bumpMap = a(u, n.mapBumpRepeat, n.mapBumpOffset, n.mapBumpWrap, n.mapBumpAnisotropy);
                        break;
                    case"mapBumpScale":
                        c.bumpScale = u;
                        break;
                    case"mapBumpRepeat":
                    case"mapBumpOffset":
                    case"mapBumpWrap":
                    case"mapBumpAnisotropy":
                        break;
                    case"mapNormal":
                        c.normalMap = a(u, n.mapNormalRepeat, n.mapNormalOffset, n.mapNormalWrap, n.mapNormalAnisotropy);
                        break;
                    case"mapNormalFactor":
                        c.normalScale = [u, u];
                        break;
                    case"mapNormalRepeat":
                    case"mapNormalOffset":
                    case"mapNormalWrap":
                    case"mapNormalAnisotropy":
                        break;
                    case"mapSpecular":
                        c.specularMap = a(u, n.mapSpecularRepeat, n.mapSpecularOffset, n.mapSpecularWrap, n.mapSpecularAnisotropy);
                        break;
                    case"mapSpecularRepeat":
                    case"mapSpecularOffset":
                    case"mapSpecularWrap":
                    case"mapSpecularAnisotropy":
                        break;
                    case"mapAlpha":
                        c.alphaMap = a(u, n.mapAlphaRepeat, n.mapAlphaOffset, n.mapAlphaWrap, n.mapAlphaAnisotropy);
                        break;
                    case"mapAlphaRepeat":
                    case"mapAlphaOffset":
                    case"mapAlphaWrap":
                    case"mapAlphaAnisotropy":
                        break;
                    case"flipSided":
                        c.side = THREE.BackSide;
                        break;
                    case"doubleSided":
                        c.side = THREE.DoubleSide;
                        break;
                    case"transparency":
                        console.warn("THREE.Loader: transparency has been renamed to opacity"), c.opacity = u;
                        break;
                    case"opacity":
                    case"transparent":
                    case"depthTest":
                    case"depthWrite":
                    case"transparent":
                    case"visible":
                    case"wireframe":
                        c[s] = u;
                        break;
                    case"vertexColors":
                        !0 === u && (c.vertexColors = THREE.VertexColors), "face" === u && (c.vertexColors = THREE.FaceColors);
                        break;
                    default:
                        console.error("Loader.createMaterial: Unsupported", s, u)
                }
            }
            return "MeshPhongMaterial" !== c.type && delete c.specular, 1 > c.opacity && (c.transparent = !0), r.setTextures(h), r.parse(c)
        }
    }()
},THREE.Loader.Handlers = {
    handlers: [], add: function (e, t) {
        this.handlers.push(e, t)
    }, get: function (e) {
        for (var t = this.handlers, r = 0, n = t.length; n > r; r += 2) {
            var i = t[r + 1];
            if (t[r].test(e)) return i
        }
        return null
    }
},THREE.XHRLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader, load: function (e, t, r, n) {
        var i = this, o = THREE.Cache.get(e);
        if (void 0 !== o) return t && setTimeout(function () {
            t(o)
        }, 0), o;
        var a = new XMLHttpRequest;
        return a.open("GET", e, !0), a.addEventListener("load", function (r) {
            r = r.target.response, THREE.Cache.add(e, r), t && t(r), i.manager.itemEnd(e)
        }, !1), void 0 !== r && a.addEventListener("progress", function (e) {
            r(e)
        }, !1), a.addEventListener("error", function (t) {
            n && n(t), i.manager.itemError(e)
        }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (a.responseType = this.responseType), void 0 !== this.withCredentials && (a.withCredentials = this.withCredentials), a.send(null), i.manager.itemStart(e), a
    }, setResponseType: function (e) {
        this.responseType = e
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, setWithCredentials: function (e) {
        this.withCredentials = e
    }
},THREE.ImageLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader, load: function (e, t, r, n) {
        var i = this, o = THREE.Cache.get(e);
        if (void 0 !== o) return i.manager.itemStart(e), t ? setTimeout(function () {
            t(o), i.manager.itemEnd(e)
        }, 0) : i.manager.itemEnd(e), o;
        var a = document.createElement("img");
        return a.addEventListener("load", function (r) {
            THREE.Cache.add(e, this), t && t(this), i.manager.itemEnd(e)
        }, !1), void 0 !== r && a.addEventListener("progress", function (e) {
            r(e)
        }, !1), a.addEventListener("error", function (t) {
            n && n(t), i.manager.itemError(e)
        }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), i.manager.itemStart(e), a.src = e, a
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.JSONLoader = function (e) {
    "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.withCredentials = !1
},THREE.JSONLoader.prototype = {
    constructor: THREE.JSONLoader, get statusDomElement() {
        return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")), console.warn("THREE.JSONLoader: .statusDomElement has been removed."), this._statusDomElement
    }, load: function (e, t, r, n) {
        var i = this,
            o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(e);
        r = new THREE.XHRLoader(this.manager), r.setCrossOrigin(this.crossOrigin), r.setWithCredentials(this.withCredentials), r.load(e, function (r) {
            r = JSON.parse(r);
            var n = r.metadata;
            if (void 0 !== n) {
                if ("object" === n.type) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                if ("scene" === n.type) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
            }
            r = i.parse(r, o), t(r.geometry, r.materials)
        })
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, setTexturePath: function (e) {
        this.texturePath = e
    }, parse: function (e, t) {
        var r = new THREE.Geometry, n = void 0 !== e.scale ? 1 / e.scale : 1;
        return function (t) {
            var n, i, o, a, s, h, c, u, l, p, d, f, E, m = e.faces;
            h = e.vertices;
            var g = e.normals, T = e.colors, v = 0;
            if (void 0 !== e.uvs) {
                for (n = 0; n < e.uvs.length; n++) e.uvs[n].length && v++;
                for (n = 0; v > n; n++) r.faceVertexUvs[n] = []
            }
            for (a = 0, s = h.length; s > a;) n = new THREE.Vector3, n.x = h[a++] * t, n.y = h[a++] * t, n.z = h[a++] * t, r.vertices.push(n);
            for (a = 0, s = m.length; s > a;) if (t = m[a++], l = 1 & t, o = 2 & t, n = 8 & t, c = 16 & t, p = 32 & t, h = 64 & t, t &= 128, l) {
                if (l = new THREE.Face3, l.a = m[a], l.b = m[a + 1], l.c = m[a + 3], d = new THREE.Face3, d.a = m[a + 1], d.b = m[a + 2], d.c = m[a + 3], a += 4, o && (o = m[a++], l.materialIndex = o, d.materialIndex = o), o = r.faces.length, n) for (n = 0; v > n; n++) for (f = e.uvs[n], r.faceVertexUvs[n][o] = [], r.faceVertexUvs[n][o + 1] = [], i = 0; 4 > i; i++) u = m[a++], E = f[2 * u], u = f[2 * u + 1], E = new THREE.Vector2(E, u), 2 !== i && r.faceVertexUvs[n][o].push(E), 0 !== i && r.faceVertexUvs[n][o + 1].push(E);
                if (c && (c = 3 * m[a++], l.normal.set(g[c++], g[c++], g[c]), d.normal.copy(l.normal)), p) for (n = 0; 4 > n; n++) c = 3 * m[a++], p = new THREE.Vector3(g[c++], g[c++], g[c]), 2 !== n && l.vertexNormals.push(p), 0 !== n && d.vertexNormals.push(p);
                if (h && (h = m[a++], h = T[h], l.color.setHex(h), d.color.setHex(h)), t) for (n = 0; 4 > n; n++) h = m[a++], h = T[h], 2 !== n && l.vertexColors.push(new THREE.Color(h)), 0 !== n && d.vertexColors.push(new THREE.Color(h));
                r.faces.push(l), r.faces.push(d)
            } else {
                if (l = new THREE.Face3, l.a = m[a++], l.b = m[a++], l.c = m[a++], o && (o = m[a++], l.materialIndex = o), o = r.faces.length, n) for (n = 0; v > n; n++) for (f = e.uvs[n], r.faceVertexUvs[n][o] = [], i = 0; 3 > i; i++) u = m[a++], E = f[2 * u], u = f[2 * u + 1], E = new THREE.Vector2(E, u), r.faceVertexUvs[n][o].push(E);
                if (c && (c = 3 * m[a++], l.normal.set(g[c++], g[c++], g[c])), p) for (n = 0; 3 > n; n++) c = 3 * m[a++], p = new THREE.Vector3(g[c++], g[c++], g[c]), l.vertexNormals.push(p);
                if (h && (h = m[a++], l.color.setHex(T[h])), t) for (n = 0; 3 > n; n++) h = m[a++], l.vertexColors.push(new THREE.Color(T[h]));
                r.faces.push(l)
            }
        }(n), function () {
            var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
            if (e.skinWeights) for (var n = 0, i = e.skinWeights.length; i > n; n += t) r.skinWeights.push(new THREE.Vector4(e.skinWeights[n], t > 1 ? e.skinWeights[n + 1] : 0, t > 2 ? e.skinWeights[n + 2] : 0, t > 3 ? e.skinWeights[n + 3] : 0));
            if (e.skinIndices) for (n = 0, i = e.skinIndices.length; i > n; n += t) r.skinIndices.push(new THREE.Vector4(e.skinIndices[n], t > 1 ? e.skinIndices[n + 1] : 0, t > 2 ? e.skinIndices[n + 2] : 0, t > 3 ? e.skinIndices[n + 3] : 0));
            r.bones = e.bones, r.bones && 0 < r.bones.length && (r.skinWeights.length !== r.skinIndices.length || r.skinIndices.length !== r.vertices.length) && console.warn("When skinning, number of vertices (" + r.vertices.length + "), skinIndices (" + r.skinIndices.length + "), and skinWeights (" + r.skinWeights.length + ") should match.")
        }(), function (t) {
            if (void 0 !== e.morphTargets) for (var n = 0, i = e.morphTargets.length; i > n; n++) {
                r.morphTargets[n] = {}, r.morphTargets[n].name = e.morphTargets[n].name, r.morphTargets[n].vertices = [];
                for (var o = r.morphTargets[n].vertices, a = e.morphTargets[n].vertices, s = 0, h = a.length; h > s; s += 3) {
                    var c = new THREE.Vector3;
                    c.x = a[s] * t, c.y = a[s + 1] * t, c.z = a[s + 2] * t, o.push(c)
                }
            }
            if (void 0 !== e.morphColors && 0 < e.morphColors.length) for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'), t = r.faces, o = e.morphColors[0].colors, n = 0, i = t.length; i > n; n++) t[n].color.fromArray(o, 3 * n)
        }(n), function () {
            var t = [], n = [];
            void 0 !== e.animation && n.push(e.animation), void 0 !== e.animations && (e.animations.length ? n = n.concat(e.animations) : n.push(e.animations));
            for (var i = 0; i < n.length; i++) {
                var o = THREE.AnimationClip.parseAnimation(n[i], r.bones);
                o && t.push(o)
            }
            r.morphTargets && (n = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(r.morphTargets, 10), t = t.concat(n)), 0 < t.length && (r.animations = t)
        }(), r.computeFaceNormals(), r.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length ? {geometry: r} : (n = THREE.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin), {
            geometry: r,
            materials: n
        })
    }
},THREE.LoadingManager = function (e, t, r) {
    var n = this, i = !1, o = 0, a = 0;
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = r, this.itemStart = function (e) {
        a++, !1 === i && void 0 !== n.onStart && n.onStart(e, o, a), i = !0
    }, this.itemEnd = function (e) {
        o++, void 0 !== n.onProgress && n.onProgress(e, o, a), o === a && (i = !1, void 0 !== n.onLoad) && n.onLoad()
    }, this.itemError = function (e) {
        void 0 !== n.onError && n.onError(e)
    }
},THREE.DefaultLoadingManager = new THREE.LoadingManager,THREE.BufferGeometryLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader, load: function (e, t, r, n) {
        var i = this, o = new THREE.XHRLoader(i.manager);
        o.setCrossOrigin(this.crossOrigin), o.load(e, function (e) {
            t(i.parse(JSON.parse(e)))
        }, r, n)
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, parse: function (e) {
        var t = new THREE.BufferGeometry, r = e.data.index;
        void 0 !== r && (r = new self[r.type](r.array), t.setIndex(new THREE.BufferAttribute(r, 1)));
        var n, i = e.data.attributes;
        for (n in i) {
            var o = i[n], r = new self[o.type](o.array);
            t.addAttribute(n, new THREE.BufferAttribute(r, o.itemSize))
        }
        if (n = e.data.groups || e.data.drawcalls || e.data.offsets, void 0 !== n) for (r = 0, i = n.length; r !== i; ++r) o = n[r], t.addGroup(o.start, o.count);
        return e = e.data.boundingSphere, void 0 !== e && (n = new THREE.Vector3, void 0 !== e.center && n.fromArray(e.center), t.boundingSphere = new THREE.Sphere(n, e.radius)), t
    }
},THREE.MaterialLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.textures = {}
},THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader, load: function (e, t, r, n) {
        var i = this, o = new THREE.XHRLoader(i.manager);
        o.setCrossOrigin(this.crossOrigin), o.load(e, function (e) {
            t(i.parse(JSON.parse(e)))
        }, r, n)
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, setTextures: function (e) {
        this.textures = e
    }, getTexture: function (e) {
        var t = this.textures;
        return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
    }, parse: function (e) {
        var t = new THREE[e.type];
        if (t.uuid = e.uuid, void 0 !== e.name && (t.name = e.name), void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest), void 0 !== e.depthTest && (t.depthTest = e.depthTest), void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.size && (t.size = e.size), void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (t.map = this.getTexture(e.map)), void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap), t.transparent = !0), void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)), void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale), void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)), e.normalScale && (t.normalScale = new THREE.Vector2(e.normalScale, e.normalScale)), void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)), void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias), void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)), void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap), t.combine = THREE.MultiplyOperation), e.reflectivity && (t.reflectivity = e.reflectivity), void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)), void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)), void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity), void 0 !== e.materials) for (var r = 0, n = e.materials.length; n > r; r++) t.materials.push(this.parse(e.materials[r]));
        return t
    }
},THREE.ObjectLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.texturePath = ""
},THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader, load: function (e, t, r, n) {
        "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
        var i = this, o = new THREE.XHRLoader(i.manager);
        o.setCrossOrigin(this.crossOrigin), o.load(e, function (e) {
            i.parse(JSON.parse(e), t)
        }, r, n)
    }, setTexturePath: function (e) {
        this.texturePath = e
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }, parse: function (e, t) {
        var r = this.parseGeometries(e.geometries), n = this.parseImages(e.images, function () {
                void 0 !== t && t(i)
            }), n = this.parseTextures(e.textures, n), n = this.parseMaterials(e.materials, n),
            i = this.parseObject(e.object, r, n);
        return e.animations && (i.animations = this.parseAnimations(e.animations)), void 0 !== e.images && 0 !== e.images.length || void 0 === t || t(i), i
    }, parseGeometries: function (e) {
        var t = {};
        if (void 0 !== e) for (var r = new THREE.JSONLoader, n = new THREE.BufferGeometryLoader, i = 0, o = e.length; o > i; i++) {
            var a, s = e[i];
            switch (s.type) {
                case"PlaneGeometry":
                case"PlaneBufferGeometry":
                    a = new THREE[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                    break;
                case"BoxGeometry":
                case"CubeGeometry":
                    a = new THREE.BoxGeometry(s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                    break;
                case"CircleBufferGeometry":
                    a = new THREE.CircleBufferGeometry(s.radius, s.segments, s.thetaStart, s.thetaLength);
                    break;
                case"CircleGeometry":
                    a = new THREE.CircleGeometry(s.radius, s.segments, s.thetaStart, s.thetaLength);
                    break;
                case"CylinderGeometry":
                    a = new THREE.CylinderGeometry(s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                    break;
                case"SphereGeometry":
                    a = new THREE.SphereGeometry(s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                    break;
                case"SphereBufferGeometry":
                    a = new THREE.SphereBufferGeometry(s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                    break;
                case"DodecahedronGeometry":
                    a = new THREE.DodecahedronGeometry(s.radius, s.detail);
                    break;
                case"IcosahedronGeometry":
                    a = new THREE.IcosahedronGeometry(s.radius, s.detail);
                    break;
                case"OctahedronGeometry":
                    a = new THREE.OctahedronGeometry(s.radius, s.detail);
                    break;
                case"TetrahedronGeometry":
                    a = new THREE.TetrahedronGeometry(s.radius, s.detail);
                    break;
                case"RingGeometry":
                    a = new THREE.RingGeometry(s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                    break;
                case"TorusGeometry":
                    a = new THREE.TorusGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                    break;
                case"TorusKnotGeometry":
                    a = new THREE.TorusKnotGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.p, s.q, s.heightScale);
                    break;
                case"BufferGeometry":
                    a = n.parse(s);
                    break;
                case"Geometry":
                    a = r.parse(s.data, this.texturePath).geometry;
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                    continue
            }
            a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), t[s.uuid] = a
        }
        return t
    }, parseMaterials: function (e, t) {
        var r = {};
        if (void 0 !== e) {
            var n = new THREE.MaterialLoader;
            n.setTextures(t);
            for (var i = 0, o = e.length; o > i; i++) {
                var a = n.parse(e[i]);
                r[a.uuid] = a
            }
        }
        return r
    }, parseAnimations: function (e) {
        for (var t = [], r = 0; r < e.length; r++) {
            var n = THREE.AnimationClip.parse(e[r]);
            t.push(n)
        }
        return t
    }, parseImages: function (e, t) {
        function r(e) {
            return n.manager.itemStart(e), a.load(e, function () {
                n.manager.itemEnd(e)
            })
        }

        var n = this, i = {};
        if (void 0 !== e && 0 < e.length) {
            var o = new THREE.LoadingManager(t), a = new THREE.ImageLoader(o);
            a.setCrossOrigin(this.crossOrigin);
            for (var o = 0, s = e.length; s > o; o++) {
                var h = e[o], c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : n.texturePath + h.url;
                i[h.uuid] = r(c)
            }
        }
        return i
    }, parseTextures: function (e, t) {
        function r(e) {
            return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), THREE[e])
        }

        var n = {};
        if (void 0 !== e) for (var i = 0, o = e.length; o > i; i++) {
            var a = e[i];
            void 0 === a.image && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), void 0 === t[a.image] && console.warn("THREE.ObjectLoader: Undefined image", a.image);
            var s = new THREE.Texture(t[a.image]);
            s.needsUpdate = !0, s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), void 0 !== a.mapping && (s.mapping = r(a.mapping)), void 0 !== a.offset && (s.offset = new THREE.Vector2(a.offset[0], a.offset[1])), void 0 !== a.repeat && (s.repeat = new THREE.Vector2(a.repeat[0], a.repeat[1])), void 0 !== a.minFilter && (s.minFilter = r(a.minFilter)), void 0 !== a.magFilter && (s.magFilter = r(a.magFilter)), void 0 !== a.anisotropy && (s.anisotropy = a.anisotropy), Array.isArray(a.wrap) && (s.wrapS = r(a.wrap[0]), s.wrapT = r(a.wrap[1])), n[a.uuid] = s
        }
        return n
    }, parseObject: function () {
        var e = new THREE.Matrix4;
        return function (t, r, n) {
            function i(e) {
                return void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), r[e]
            }

            function o(e) {
                return void 0 !== e ? (void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e), n[e]) : void 0
            }

            var a;
            switch (t.type) {
                case"Scene":
                    a = new THREE.Scene;
                    break;
                case"PerspectiveCamera":
                    a = new THREE.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                    break;
                case"OrthographicCamera":
                    a = new THREE.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                    break;
                case"AmbientLight":
                    a = new THREE.AmbientLight(t.color);
                    break;
                case"DirectionalLight":
                    a = new THREE.DirectionalLight(t.color, t.intensity);
                    break;
                case"PointLight":
                    a = new THREE.PointLight(t.color, t.intensity, t.distance, t.decay);
                    break;
                case"SpotLight":
                    a = new THREE.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent, t.decay);
                    break;
                case"HemisphereLight":
                    a = new THREE.HemisphereLight(t.color, t.groundColor, t.intensity);
                    break;
                case"Mesh":
                    a = new THREE.Mesh(i(t.geometry), o(t.material));
                    break;
                case"LOD":
                    a = new THREE.LOD;
                    break;
                case"Line":
                    a = new THREE.Line(i(t.geometry), o(t.material), t.mode);
                    break;
                case"PointCloud":
                case"Points":
                    a = new THREE.Points(i(t.geometry), o(t.material));
                    break;
                case"Sprite":
                    a = new THREE.Sprite(o(t.material));
                    break;
                case"Group":
                    a = new THREE.Group;
                    break;
                default:
                    a = new THREE.Object3D
            }
            if (a.uuid = t.uuid, void 0 !== t.name && (a.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== t.position && a.position.fromArray(t.position), void 0 !== t.rotation && a.rotation.fromArray(t.rotation), void 0 !== t.scale && a.scale.fromArray(t.scale)), void 0 !== t.castShadow && (a.castShadow = t.castShadow), void 0 !== t.receiveShadow && (a.receiveShadow = t.receiveShadow), void 0 !== t.visible && (a.visible = t.visible), void 0 !== t.userData && (a.userData = t.userData), void 0 !== t.children) for (var s in t.children) a.add(this.parseObject(t.children[s], r, n));
            if ("LOD" === t.type) {
                t = t.levels;
                for (var h = 0; h < t.length; h++) {
                    var c = t[h];
                    s = a.getObjectByProperty("uuid", c.object), void 0 !== s && a.addLevel(s, c.distance)
                }
            }
            return a
        }
    }()
},THREE.TextureLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader, load: function (e, t, r, n) {
        var i = new THREE.Texture, o = new THREE.ImageLoader(this.manager);
        return o.setCrossOrigin(this.crossOrigin), o.load(e, function (e) {
            i.image = e, i.needsUpdate = !0, void 0 !== t && t(i)
        }, r, n), i
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.CubeTextureLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
},THREE.CubeTextureLoader.prototype = {
    constructor: THREE.CubeTextureLoader, load: function (e, t, r, n) {
        function i(r) {
            a.load(e[r], function (e) {
                o.images[r] = e, s++, 6 === s && (o.needsUpdate = !0, t && t(o))
            }, void 0, n)
        }

        var o = new THREE.CubeTexture([]), a = new THREE.ImageLoader;
        a.setCrossOrigin(this.crossOrigin);
        var s = 0;
        for (r = 0; r < e.length; ++r) i(r);
        return o
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.DataTextureLoader = THREE.BinaryTextureLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this._parser = null
},THREE.BinaryTextureLoader.prototype = {
    constructor: THREE.BinaryTextureLoader, load: function (e, t, r, n) {
        var i = this, o = new THREE.DataTexture, a = new THREE.XHRLoader(this.manager);
        return a.setCrossOrigin(this.crossOrigin), a.setResponseType("arraybuffer"), a.load(e, function (e) {
            (e = i._parser(e)) && (void 0 !== e.image ? o.image = e.image : void 0 !== e.data && (o.image.width = e.width, o.image.height = e.height, o.image.data = e.data), o.wrapS = void 0 !== e.wrapS ? e.wrapS : THREE.ClampToEdgeWrapping, o.wrapT = void 0 !== e.wrapT ? e.wrapT : THREE.ClampToEdgeWrapping, o.magFilter = void 0 !== e.magFilter ? e.magFilter : THREE.LinearFilter, o.minFilter = void 0 !== e.minFilter ? e.minFilter : THREE.LinearMipMapLinearFilter, o.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1, void 0 !== e.format && (o.format = e.format), void 0 !== e.type && (o.type = e.type), void 0 !== e.mipmaps && (o.mipmaps = e.mipmaps), 1 === e.mipmapCount && (o.minFilter = THREE.LinearFilter), o.needsUpdate = !0, t && t(o, e))
        }, r, n), o
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.CompressedTextureLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this._parser = null
},THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader, load: function (e, t, r, n) {
        var i = this, o = [], a = new THREE.CompressedTexture;
        a.image = o;
        var s = new THREE.XHRLoader(this.manager);
        if (s.setCrossOrigin(this.crossOrigin), s.setResponseType("arraybuffer"), Array.isArray(e)) for (var h = 0, c = function (c) {
            s.load(e[c], function (e) {
                e = i._parser(e, !0), o[c] = {
                    width: e.width,
                    height: e.height,
                    format: e.format,
                    mipmaps: e.mipmaps
                }, h += 1, 6 === h && (1 === e.mipmapCount && (a.minFilter = THREE.LinearFilter), a.format = e.format, a.needsUpdate = !0, t && t(a))
            }, r, n)
        }, u = 0, l = e.length; l > u; ++u) c(u); else s.load(e, function (e) {
            if (e = i._parser(e, !0), e.isCubemap) for (var r = e.mipmaps.length / e.mipmapCount, n = 0; r > n; n++) {
                o[n] = {mipmaps: []};
                for (var s = 0; s < e.mipmapCount; s++) o[n].mipmaps.push(e.mipmaps[n * e.mipmapCount + s]), o[n].format = e.format, o[n].width = e.width, o[n].height = e.height
            } else a.image.width = e.width, a.image.height = e.height, a.mipmaps = e.mipmaps;
            1 === e.mipmapCount && (a.minFilter = THREE.LinearFilter), a.format = e.format, a.needsUpdate = !0, t && t(a)
        }, r, n);
        return a
    }, setCrossOrigin: function (e) {
        this.crossOrigin = e
    }
},THREE.Material = function () {
    Object.defineProperty(this, "id", {value: THREE.MaterialIdCount++}), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Material", this.side = THREE.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = THREE.NormalBlending, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null, this.depthFunc = THREE.LessEqualDepth, this.colorWrite = this.depthWrite = this.depthTest = !0, this.precision = null, this.polygonOffset = !1, this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this._needsUpdate = this.visible = !0
},THREE.Material.prototype = {
    constructor: THREE.Material, get needsUpdate() {
        return this._needsUpdate
    }, set needsUpdate(e) {
        !0 === e && this.update(), this._needsUpdate = e
    }, setValues: function (e) {
        if (void 0 !== e) for (var t in e) {
            var r = e[t];
            if (void 0 === r) console.warn("THREE.Material: '" + t + "' parameter is undefined."); else {
                var n = this[t];
                void 0 === n ? console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.") : n instanceof THREE.Color ? n.set(r) : n instanceof THREE.Vector3 && r instanceof THREE.Vector3 ? n.copy(r) : this[t] = "overdraw" === t ? Number(r) : r
            }
        }
    }, toJSON: function (e) {
        var t = {metadata: {version: 4.4, type: "Material", generator: "Material.toJSON"}};
        return t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), this.color instanceof THREE.Color && (t.color = this.color.getHex()), this.emissive instanceof THREE.Color && (t.emissive = this.emissive.getHex()), this.specular instanceof THREE.Color && (t.specular = this.specular.getHex()), void 0 !== this.shininess && (t.shininess = this.shininess), this.map instanceof THREE.Texture && (t.map = this.map.toJSON(e).uuid), this.alphaMap instanceof THREE.Texture && (t.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap instanceof THREE.Texture && (t.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap instanceof THREE.Texture && (t.bumpMap = this.bumpMap.toJSON(e).uuid, t.bumpScale = this.bumpScale), this.normalMap instanceof THREE.Texture && (t.normalMap = this.normalMap.toJSON(e).uuid, t.normalScale = this.normalScale), this.displacementMap instanceof THREE.Texture && (t.displacementMap = this.displacementMap.toJSON(e).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias), this.specularMap instanceof THREE.Texture && (t.specularMap = this.specularMap.toJSON(e).uuid), this.envMap instanceof THREE.Texture && (t.envMap = this.envMap.toJSON(e).uuid, t.reflectivity = this.reflectivity), void 0 !== this.size && (t.size = this.size), void 0 !== this.sizeAttenuation && (t.sizeAttenuation = this.sizeAttenuation), void 0 !== this.vertexColors && this.vertexColors !== THREE.NoColors && (t.vertexColors = this.vertexColors), void 0 !== this.shading && this.shading !== THREE.SmoothShading && (t.shading = this.shading), void 0 !== this.blending && this.blending !== THREE.NormalBlending && (t.blending = this.blending), void 0 !== this.side && this.side !== THREE.FrontSide && (t.side = this.side), 1 > this.opacity && (t.opacity = this.opacity), !0 === this.transparent && (t.transparent = this.transparent), 0 < this.alphaTest && (t.alphaTest = this.alphaTest), !0 === this.wireframe && (t.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (t.wireframeLinewidth = this.wireframeLinewidth), t
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.name = e.name, this.side = e.side, this.opacity = e.opacity, this.transparent = e.transparent, this.blending = e.blending, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.alphaTest = e.alphaTest, this.overdraw = e.overdraw, this.visible = e.visible, this
    }, update: function () {
        this.dispatchEvent({type: "update"})
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }, get wrapAround() {
        console.warn("THREE." + this.type + ": .wrapAround has been removed.")
    }, set wrapAround(e) {
        console.warn("THREE." + this.type + ": .wrapAround has been removed.")
    }, get wrapRGB() {
        return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new THREE.Color
    }
},THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),THREE.MaterialIdCount = 0,THREE.LineBasicMaterial = function (e) {
    THREE.Material.call(this), this.type = "LineBasicMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.linejoin = this.linecap = "round", this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(e)
},THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial,THREE.LineBasicMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.vertexColors = e.vertexColors, this.fog = e.fog, this
},THREE.LineDashedMaterial = function (e) {
    THREE.Material.call(this), this.type = "LineDashedMaterial", this.color = new THREE.Color(16777215), this.scale = this.linewidth = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
},THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial,THREE.LineDashedMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this.vertexColors = e.vertexColors, this.fog = e.fog, this
},THREE.MeshBasicMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshBasicMaterial", this.color = new THREE.Color(16777215), this.aoMap = this.map = null, this.aoMapIntensity = 1, this.envMap = this.alphaMap = this.specularMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphTargets = this.skinning = !1, this.setValues(e)
},THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial,THREE.MeshBasicMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
},THREE.MeshLambertMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshLambertMaterial", this.color = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.envMap = this.alphaMap = this.specularMap = this.map = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
},THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial,THREE.MeshLambertMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.emissive.copy(e.emissive), this.map = e.map, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
},THREE.MeshPhongMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshPhongMaterial", this.color = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.specular = new THREE.Color(1118481), this.shininess = 30, this.metal = !1, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.specularMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
},THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial,THREE.MeshPhongMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.emissive.copy(e.emissive), this.specular.copy(e.specular), this.shininess = e.shininess, this.metal = e.metal, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissiveMap = e.emissiveMap, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
},THREE.MeshDepthMaterial = function (e) {
    THREE.Material.call(this), this.type = "MeshDepthMaterial", this.wireframe = this.morphTargets = !1, this.wireframeLinewidth = 1, this.setValues(e)
},THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial,THREE.MeshDepthMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
},THREE.MeshNormalMaterial = function (e) {
    THREE.Material.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
},THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial,THREE.MeshNormalMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
},THREE.MultiMaterial = function (e) {
    this.uuid = THREE.Math.generateUUID(), this.type = "MultiMaterial", this.materials = e instanceof Array ? e : [], this.visible = !0
},THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial, toJSON: function () {
        for (var e = {
            metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, t = 0, r = this.materials.length; r > t; t++) e.materials.push(this.materials[t].toJSON());
        return e.visible = this.visible, e
    }, clone: function () {
        for (var e = new this.constructor, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
        return e.visible = this.visible, e
    }
},THREE.MeshFaceMaterial = THREE.MultiMaterial,THREE.PointsMaterial = function (e) {
    THREE.Material.call(this), this.type = "PointsMaterial", this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(e)
},THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype),THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial,THREE.PointsMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.vertexColors = e.vertexColors, this.fog = e.fog, this
},THREE.PointCloudMaterial = function (e) {
    return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
},THREE.ParticleBasicMaterial = function (e) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
},THREE.ParticleSystemMaterial = function (e) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
},THREE.ShaderMaterial = function (e) {
    THREE.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = THREE.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.vertexColors = THREE.NoColors, this.derivatives = this.morphNormals = this.morphTargets = this.skinning = !1, this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    }, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
},THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial,THREE.ShaderMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.attributes = e.attributes, this.defines = e.defines, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.derivatives = e.derivatives, this
},THREE.ShaderMaterial.prototype.toJSON = function (e) {
    return e = THREE.Material.prototype.toJSON.call(this, e), e.uniforms = this.uniforms, e.attributes = this.attributes, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
},THREE.RawShaderMaterial = function (e) {
    THREE.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial"
},THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial,THREE.SpriteMaterial = function (e) {
    THREE.Material.call(this), this.type = "SpriteMaterial", this.color = new THREE.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e)
},THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial,THREE.SpriteMaterial.prototype.copy = function (e) {
    return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this.fog = e.fog, this
},THREE.Texture = function (e, t, r, n, i, o, a, s, h) {
    Object.defineProperty(this, "id", {value: THREE.TextureIdCount++}), this.uuid = THREE.Math.generateUUID(), this.sourceFile = this.name = "", this.image = void 0 !== e ? e : THREE.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : THREE.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== n ? n : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== i ? i : THREE.LinearFilter, this.minFilter = void 0 !== o ? o : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== a ? a : THREE.RGBAFormat, this.type = void 0 !== s ? s : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.version = 0, this.onUpdate = null
},THREE.Texture.DEFAULT_IMAGE = void 0,THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping,THREE.Texture.prototype = {
    constructor: THREE.Texture,
    set needsUpdate(e) {
        !0 === e && this.version++
    },
    clone: function () {
        return (new this.constructor).copy(this)
    },
    copy: function (e) {
        return this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this
    },
    toJSON: function (e) {
        if (void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
        var t = {
            metadata: {version: 4.4, type: "Texture", generator: "Texture.toJSON"},
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy
        };
        if (void 0 !== this.image) {
            var r = this.image;
            if (void 0 === r.uuid && (r.uuid = THREE.Math.generateUUID()), void 0 === e.images[r.uuid]) {
                var n, i = e.images, o = r.uuid, a = r.uuid;
                void 0 !== r.toDataURL ? n = r : (n = document.createElement("canvas"), n.width = r.width, n.height = r.height, n.getContext("2d").drawImage(r, 0, 0, r.width, r.height)), n = 2048 < n.width || 2048 < n.height ? n.toDataURL("image/jpeg", .6) : n.toDataURL("image/png"), i[o] = {
                    uuid: a,
                    url: n
                }
            }
            t.image = r.uuid
        }
        return e.textures[this.uuid] = t
    },
    dispose: function () {
        this.dispatchEvent({type: "dispose"})
    },
    transformUv: function (e) {
        if (this.mapping === THREE.UVMapping) {
            if (e.multiply(this.repeat), e.add(this.offset), 0 > e.x || 1 < e.x) switch (this.wrapS) {
                case THREE.RepeatWrapping:
                    e.x -= Math.floor(e.x);
                    break;
                case THREE.ClampToEdgeWrapping:
                    e.x = 0 > e.x ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x)
            }
            if (0 > e.y || 1 < e.y) switch (this.wrapT) {
                case THREE.RepeatWrapping:
                    e.y -= Math.floor(e.y);
                    break;
                case THREE.ClampToEdgeWrapping:
                    e.y = 0 > e.y ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y)
            }
            this.flipY && (e.y = 1 - e.y)
        }
    }
},THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),THREE.TextureIdCount = 0,THREE.CanvasTexture = function (e, t, r, n, i, o, a, s, h) {
    THREE.Texture.call(this, e, t, r, n, i, o, a, s, h), this.needsUpdate = !0
},THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype),THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture,THREE.CubeTexture = function (e, t, r, n, i, o, a, s, h) {
    t = void 0 !== t ? t : THREE.CubeReflectionMapping, THREE.Texture.call(this, e, t, r, n, i, o, a, s, h), this.images = e, this.flipY = !1
},THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype),THREE.CubeTexture.prototype.constructor = THREE.CubeTexture,THREE.CubeTexture.prototype.copy = function (e) {
    return THREE.Texture.prototype.copy.call(this, e), this.images = e.images, this
},THREE.CompressedTexture = function (e, t, r, n, i, o, a, s, h, c, u) {
    THREE.Texture.call(this, null, o, a, s, h, c, n, i, u), this.image = {
        width: t,
        height: r
    }, this.mipmaps = e, this.generateMipmaps = this.flipY = !1
},THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture,THREE.DataTexture = function (e, t, r, n, i, o, a, s, h, c, u) {
    THREE.Texture.call(this, null, o, a, s, h, c, n, i, u), this.image = {
        data: e,
        width: t,
        height: r
    }, this.magFilter = void 0 !== h ? h : THREE.NearestFilter, this.minFilter = void 0 !== c ? c : THREE.NearestFilter, this.generateMipmaps = this.flipY = !1
},THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),THREE.DataTexture.prototype.constructor = THREE.DataTexture,THREE.VideoTexture = function (e, t, r, n, i, o, a, s, h) {
    function c() {
        requestAnimationFrame(c), e.readyState === e.HAVE_ENOUGH_DATA && (u.needsUpdate = !0)
    }

    THREE.Texture.call(this, e, t, r, n, i, o, a, s, h), this.generateMipmaps = !1;
    var u = this;
    c()
},THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype),THREE.VideoTexture.prototype.constructor = THREE.VideoTexture,THREE.Group = function () {
    THREE.Object3D.call(this), this.type = "Group"
},THREE.Group.prototype = Object.create(THREE.Object3D.prototype),THREE.Group.prototype.constructor = THREE.Group,THREE.Points = function (e, t) {
    THREE.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.PointsMaterial({color: 16777215 * Math.random()})
},THREE.Points.prototype = Object.create(THREE.Object3D.prototype),THREE.Points.prototype.constructor = THREE.Points,THREE.Points.prototype.raycast = function () {
    var e = new THREE.Matrix4, t = new THREE.Ray;
    return function (r, n) {
        function i(e, i) {
            var a = t.distanceSqToPoint(e);
            if (h > a) {
                var s = t.closestPointToPoint(e);
                s.applyMatrix4(o.matrixWorld);
                var c = r.ray.origin.distanceTo(s);
                c < r.near || c > r.far || n.push({
                    distance: c,
                    distanceToRay: Math.sqrt(a),
                    point: s.clone(),
                    index: i,
                    face: null,
                    object: o
                })
            }
        }

        var o = this, a = o.geometry, s = r.params.Points.threshold;
        if (e.getInverse(this.matrixWorld), t.copy(r.ray).applyMatrix4(e), null === a.boundingBox || !1 !== t.isIntersectionBox(a.boundingBox)) {
            var s = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), h = s * s, s = new THREE.Vector3;
            if (a instanceof THREE.BufferGeometry) {
                var c = a.index, a = a.attributes.position.array;
                if (null !== c) for (var u = c.array, c = 0, l = u.length; l > c; c++) {
                    var p = u[c];
                    s.fromArray(a, 3 * p), i(s, p)
                } else for (c = 0, u = a.length / 3; u > c; c++) s.fromArray(a, 3 * c), i(s, c)
            } else for (s = a.vertices, c = 0, u = s.length; u > c; c++) i(s[c], c)
        }
    }
}(),THREE.Points.prototype.clone = function () {
    return new this.constructor(this.geometry, this.material).copy(this)
},THREE.PointCloud = function (e, t) {
    return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new THREE.Points(e, t)
},THREE.ParticleSystem = function (e, t) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new THREE.Points(e, t)
},THREE.Line = function (e, t, r) {
    return 1 === r ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new THREE.LineSegments(e, t)) : (THREE.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new THREE.Geometry, void(this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({color: 16777215 * Math.random()})))
},THREE.Line.prototype = Object.create(THREE.Object3D.prototype),THREE.Line.prototype.constructor = THREE.Line,THREE.Line.prototype.raycast = function () {
    var e = new THREE.Matrix4, t = new THREE.Ray, r = new THREE.Sphere;
    return function (n, i) {
        var o = n.linePrecision, o = o * o, a = this.geometry;
        if (null === a.boundingSphere && a.computeBoundingSphere(), r.copy(a.boundingSphere), r.applyMatrix4(this.matrixWorld), !1 !== n.ray.isIntersectionSphere(r)) {
            e.getInverse(this.matrixWorld), t.copy(n.ray).applyMatrix4(e);
            var s = new THREE.Vector3, h = new THREE.Vector3, c = new THREE.Vector3, u = new THREE.Vector3,
                l = this instanceof THREE.LineSegments ? 2 : 1;
            if (a instanceof THREE.BufferGeometry) {
                var p = a.index, d = a.attributes;
                if (null !== p) for (var a = p.array, d = d.position.array, p = 0, f = a.length - 1; f > p; p += l) {
                    var E = a[p + 1];
                    s.fromArray(d, 3 * a[p]), h.fromArray(d, 3 * E), E = t.distanceSqToSegment(s, h, u, c), E > o || (u.applyMatrix4(this.matrixWorld), E = n.ray.origin.distanceTo(u), E < n.near || E > n.far || i.push({
                        distance: E,
                        point: c.clone().applyMatrix4(this.matrixWorld),
                        index: p,
                        face: null,
                        faceIndex: null,
                        object: this
                    }))
                } else for (d = d.position.array, p = 0, f = d.length / 3 - 1; f > p; p += l) s.fromArray(d, 3 * p), h.fromArray(d, 3 * p + 3), E = t.distanceSqToSegment(s, h, u, c), E > o || (u.applyMatrix4(this.matrixWorld), E = n.ray.origin.distanceTo(u), E < n.near || E > n.far || i.push({
                    distance: E,
                    point: c.clone().applyMatrix4(this.matrixWorld),
                    index: p,
                    face: null,
                    faceIndex: null,
                    object: this
                }))
            } else if (a instanceof THREE.Geometry) for (s = a.vertices, h = s.length, p = 0; h - 1 > p; p += l) E = t.distanceSqToSegment(s[p], s[p + 1], u, c), E > o || (u.applyMatrix4(this.matrixWorld), E = n.ray.origin.distanceTo(u), E < n.near || E > n.far || i.push({
                distance: E,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: p,
                face: null,
                faceIndex: null,
                object: this
            }))
        }
    }
}(),THREE.Line.prototype.clone = function () {
    return new this.constructor(this.geometry, this.material).copy(this)
},THREE.LineStrip = 0,THREE.LinePieces = 1,THREE.LineSegments = function (e, t) {
    THREE.Line.call(this, e, t), this.type = "LineSegments"
},THREE.LineSegments.prototype = Object.create(THREE.Line.prototype),THREE.LineSegments.prototype.constructor = THREE.LineSegments,
THREE.Mesh = function (e, t) {
    THREE.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new THREE.Geometry, this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({color: 16777215 * Math.random()}), this.updateMorphTargets()
},THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype),THREE.Mesh.prototype.constructor = THREE.Mesh,THREE.Mesh.prototype.updateMorphTargets = function () {
    if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
        this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
    }
},THREE.Mesh.prototype.getMorphTargetIndexByName = function (e) {
    return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
},THREE.Mesh.prototype.raycast = function () {
    function e(e, t, r, n, i, o, a) {
        return THREE.Triangle.barycoordFromPoint(e, t, r, n, E), i.multiplyScalar(E.x), o.multiplyScalar(E.y), a.multiplyScalar(E.z), i.add(o).add(a), i.clone()
    }

    function t(e, t, r, n, i, o, a) {
        var s = e.material;
        return null === (s.side === THREE.BackSide ? r.intersectTriangle(o, i, n, !0, a) : r.intersectTriangle(n, i, o, s.side !== THREE.DoubleSide, a)) ? null : (g.copy(a), g.applyMatrix4(e.matrixWorld), r = t.ray.origin.distanceTo(g), r < t.near || r > t.far ? null : {
            distance: r,
            point: g.clone(),
            object: e
        })
    }

    function r(r, n, i, o, c, u, l, E) {
        return a.fromArray(o, 3 * u), s.fromArray(o, 3 * l), h.fromArray(o, 3 * E), (r = t(r, n, i, a, s, h, m)) && (c && (p.fromArray(c, 2 * u), d.fromArray(c, 2 * l), f.fromArray(c, 2 * E), r.uv = e(m, a, s, h, p, d, f)), r.face = new THREE.Face3(u, l, E, THREE.Triangle.normal(a, s, h)), r.faceIndex = u), r
    }

    var n = new THREE.Matrix4, i = new THREE.Ray, o = new THREE.Sphere, a = new THREE.Vector3, s = new THREE.Vector3,
        h = new THREE.Vector3, c = new THREE.Vector3, u = new THREE.Vector3, l = new THREE.Vector3,
        p = new THREE.Vector2, d = new THREE.Vector2, f = new THREE.Vector2, E = new THREE.Vector3,
        m = new THREE.Vector3, g = new THREE.Vector3;
    return function (E, g) {
        var T = this.geometry, v = this.material;
        if (void 0 !== v) {
            null === T.boundingSphere && T.computeBoundingSphere();
            var y = this.matrixWorld;
            if (o.copy(T.boundingSphere), o.applyMatrix4(y), !1 !== E.ray.isIntersectionSphere(o) && (n.getInverse(y), i.copy(E.ray).applyMatrix4(n), null === T.boundingBox || !1 !== i.isIntersectionBox(T.boundingBox))) {
                var R, x;
                if (T instanceof THREE.BufferGeometry) {
                    var H, b, v = T.index, y = T.attributes, T = y.position.array;
                    if (void 0 !== y.uv && (R = y.uv.array), null !== v) for (var y = v.array, w = 0, M = y.length; M > w; w += 3) v = y[w], H = y[w + 1], b = y[w + 2], (x = r(this, E, i, T, R, v, H, b)) && (x.faceIndex = Math.floor(w / 3), g.push(x)); else for (w = 0, M = T.length; M > w; w += 9) v = w / 3, H = v + 1, b = v + 2, (x = r(this, E, i, T, R, v, H, b)) && (x.index = v, g.push(x))
                } else if (T instanceof THREE.Geometry) {
                    var S, _, y = v instanceof THREE.MeshFaceMaterial, w = !0 === y ? v.materials : null,
                        M = T.vertices;
                    H = T.faces, b = T.faceVertexUvs[0], 0 < b.length && (R = b);
                    for (var C = 0, A = H.length; A > C; C++) {
                        var L = H[C];
                        if (x = !0 === y ? w[L.materialIndex] : v, void 0 !== x) {
                            if (b = M[L.a], S = M[L.b], _ = M[L.c], !0 === x.morphTargets) {
                                x = T.morphTargets;
                                var P = this.morphTargetInfluences;
                                a.set(0, 0, 0), s.set(0, 0, 0), h.set(0, 0, 0);
                                for (var k = 0, D = x.length; D > k; k++) {
                                    var F = P[k];
                                    if (0 !== F) {
                                        var O = x[k].vertices;
                                        a.addScaledVector(c.subVectors(O[L.a], b), F), s.addScaledVector(u.subVectors(O[L.b], S), F), h.addScaledVector(l.subVectors(O[L.c], _), F)
                                    }
                                }
                                a.add(b), s.add(S), h.add(_), b = a, S = s, _ = h
                            }
                            (x = t(this, E, i, b, S, _, m)) && (R && (P = R[C], p.copy(P[0]), d.copy(P[1]), f.copy(P[2]), x.uv = e(m, b, S, _, p, d, f)), x.face = L, x.faceIndex = C, g.push(x))
                        }
                    }
                }
            }
        }
    }
}(),THREE.Mesh.prototype.clone = function () {
    return new this.constructor(this.geometry, this.material).copy(this)
},THREE.Bone = function (e) {
    THREE.Object3D.call(this), this.type = "Bone", this.skin = e
},THREE.Bone.prototype = Object.create(THREE.Object3D.prototype),THREE.Bone.prototype.constructor = THREE.Bone,THREE.Bone.prototype.copy = function (e) {
    return THREE.Object3D.prototype.copy.call(this, e), this.skin = e.skin, this
},THREE.Skeleton = function (e, t, r) {
    if (this.useVertexTexture = void 0 === r || r, this.identityMatrix = new THREE.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture ? (e = Math.sqrt(4 * this.bones.length), e = THREE.Math.nextPowerOfTwo(Math.ceil(e)), this.boneTextureHeight = this.boneTextureWidth = e = Math.max(e, 4), this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType)) : this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === t) this.calculateInverses(); else if (this.bones.length === t.length) this.boneInverses = t.slice(0); else for (console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], t = 0, e = this.bones.length; e > t; t++) this.boneInverses.push(new THREE.Matrix4)
},THREE.Skeleton.prototype.calculateInverses = function () {
    this.boneInverses = [];
    for (var e = 0, t = this.bones.length; t > e; e++) {
        var r = new THREE.Matrix4;
        this.bones[e] && r.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(r)
    }
},THREE.Skeleton.prototype.pose = function () {
    for (var e, t = 0, r = this.bones.length; r > t; t++) (e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
    for (t = 0, r = this.bones.length; r > t; t++) (e = this.bones[t]) && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
},THREE.Skeleton.prototype.update = function () {
    var e = new THREE.Matrix4;
    return function () {
        for (var t = 0, r = this.bones.length; r > t; t++) e.multiplyMatrices(this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix, this.boneInverses[t]), e.flattenToArrayOffset(this.boneMatrices, 16 * t);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}(),THREE.Skeleton.prototype.clone = function () {
    return new THREE.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
},THREE.SkinnedMesh = function (e, t, r) {
    if (THREE.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new THREE.Matrix4, this.bindMatrixInverse = new THREE.Matrix4, e = [], this.geometry && void 0 !== this.geometry.bones) {
        for (var n, i = 0, o = this.geometry.bones.length; o > i; ++i) n = this.geometry.bones[i], t = new THREE.Bone(this), e.push(t), t.name = n.name, t.position.fromArray(n.pos), t.quaternion.fromArray(n.rotq), void 0 !== n.scl && t.scale.fromArray(n.scl);
        for (i = 0, o = this.geometry.bones.length; o > i; ++i) n = this.geometry.bones[i], -1 !== n.parent && null !== n.parent ? e[n.parent].add(e[i]) : this.add(e[i])
    }
    this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new THREE.Skeleton(e, (void 0), r), this.matrixWorld)
},THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype),THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh,THREE.SkinnedMesh.prototype.bind = function (e, t) {
    this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
},THREE.SkinnedMesh.prototype.pose = function () {
    this.skeleton.pose()
},THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
    if (this.geometry instanceof THREE.Geometry) for (var e = 0; e < this.geometry.skinIndices.length; e++) {
        var t = this.geometry.skinWeights[e], r = 1 / t.lengthManhattan();
        1 / 0 !== r ? t.multiplyScalar(r) : t.set(1)
    }
},THREE.SkinnedMesh.prototype.updateMatrixWorld = function (e) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
},THREE.SkinnedMesh.prototype.clone = function () {
    return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
},THREE.LOD = function () {
    THREE.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
        levels: {enumerable: !0, value: []},
        objects: {
            get: function () {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    })
},THREE.LOD.prototype = Object.create(THREE.Object3D.prototype),THREE.LOD.prototype.constructor = THREE.LOD,THREE.LOD.prototype.addLevel = function (e, t) {
    void 0 === t && (t = 0), t = Math.abs(t);
    for (var r = this.levels, n = 0; n < r.length && !(t < r[n].distance); n++) ;
    r.splice(n, 0, {distance: t, object: e}), this.add(e)
},THREE.LOD.prototype.getObjectForDistance = function (e) {
    for (var t = this.levels, r = 1, n = t.length; n > r && !(e < t[r].distance); r++) ;
    return t[r - 1].object
},THREE.LOD.prototype.raycast = function () {
    var e = new THREE.Vector3;
    return function (t, r) {
        e.setFromMatrixPosition(this.matrixWorld);
        var n = t.ray.origin.distanceTo(e);
        this.getObjectForDistance(n).raycast(t, r)
    }
}(),THREE.LOD.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3;
    return function (r) {
        var n = this.levels;
        if (1 < n.length) {
            e.setFromMatrixPosition(r.matrixWorld), t.setFromMatrixPosition(this.matrixWorld), r = e.distanceTo(t), n[0].object.visible = !0;
            for (var i = 1, o = n.length; o > i && r >= n[i].distance; i++) n[i - 1].object.visible = !1, n[i].object.visible = !0;
            for (; o > i; i++) n[i].object.visible = !1
        }
    }
}(),THREE.LOD.prototype.copy = function (e) {
    THREE.Object3D.prototype.copy.call(this, e, !1), e = e.levels;
    for (var t = 0, r = e.length; r > t; t++) {
        var n = e[t];
        this.addLevel(n.object.clone(), n.distance)
    }
    return this
},THREE.LOD.prototype.toJSON = function (e) {
    e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.levels = [];
    for (var t = this.levels, r = 0, n = t.length; n > r; r++) {
        var i = t[r];
        e.object.levels.push({object: i.object.uuid, distance: i.distance})
    }
    return e
},THREE.Sprite = function () {
    var e = new Uint16Array([0, 1, 2, 0, 2, 3]), t = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
        r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), n = new THREE.BufferGeometry;
    return n.setIndex(new THREE.BufferAttribute(e, 1)), n.addAttribute("position", new THREE.BufferAttribute(t, 3)), n.addAttribute("uv", new THREE.BufferAttribute(r, 2)), function (e) {
        THREE.Object3D.call(this), this.type = "Sprite", this.geometry = n, this.material = void 0 !== e ? e : new THREE.SpriteMaterial
    }
}(),THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype),THREE.Sprite.prototype.constructor = THREE.Sprite,THREE.Sprite.prototype.raycast = function () {
    var e = new THREE.Vector3;
    return function (t, r) {
        e.setFromMatrixPosition(this.matrixWorld);
        var n = t.ray.distanceSqToPoint(e);
        n > this.scale.x * this.scale.y || r.push({
            distance: Math.sqrt(n),
            point: this.position,
            face: null,
            object: this
        })
    }
}(),THREE.Sprite.prototype.clone = function () {
    return new this.constructor(this.material).copy(this)
},THREE.Particle = THREE.Sprite,THREE.LensFlare = function (e, t, r, n, i) {
    THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, r, n, i)
},THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),THREE.LensFlare.prototype.constructor = THREE.LensFlare,THREE.LensFlare.prototype.add = function (e, t, r, n, i, o) {
    void 0 === t && (t = -1), void 0 === r && (r = 0), void 0 === o && (o = 1), void 0 === i && (i = new THREE.Color(16777215)), void 0 === n && (n = THREE.NormalBlending), r = Math.min(r, Math.max(0, r)), this.lensFlares.push({
        texture: e,
        size: t,
        distance: r,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 0,
        opacity: o,
        color: i,
        blending: n
    })
},THREE.LensFlare.prototype.updateLensFlares = function () {
    var e, t, r = this.lensFlares.length, n = 2 * -this.positionScreen.x, i = 2 * -this.positionScreen.y;
    for (e = 0; r > e; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + n * t.distance, t.y = this.positionScreen.y + i * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
},THREE.LensFlare.prototype.copy = function (e) {
    THREE.Object3D.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
    for (var t = 0, r = e.lensFlares.length; r > t; t++) this.lensFlares.push(e.lensFlares[t]);
    return this
},THREE.Scene = function () {
    THREE.Object3D.call(this), this.type = "Scene", this.overrideMaterial = this.fog = null, this.autoUpdate = !0
},THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),THREE.Scene.prototype.constructor = THREE.Scene,THREE.Scene.prototype.copy = function (e) {
    return THREE.Object3D.prototype.copy.call(this, e), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
},THREE.Fog = function (e, t, r) {
    this.name = "", this.color = new THREE.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== r ? r : 1e3
},THREE.Fog.prototype.clone = function () {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
},THREE.FogExp2 = function (e, t) {
    this.name = "", this.color = new THREE.Color(e), this.density = void 0 !== t ? t : 25e-5
},THREE.FogExp2.prototype.clone = function () {
    return new THREE.FogExp2(this.color.getHex(), this.density)
},THREE.ShaderChunk = {},THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n",THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n\ttotalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n",THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif",THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n",THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif",THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n",THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif",THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif",THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n\tif ( decayExponent > 0.0 ) {\n\n\t  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t}\n\n\treturn 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n\n\tfloat fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n\n\treturn ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( lightDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n\t#ifdef GAMMA_INPUT\n\n\t\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n",THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n",THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n",THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n",THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n\ttotalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n",THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n",THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n",THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n",THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n",THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n",THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif",THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif",THREE.ShaderChunk.hemilight_fragment = "#if MAX_HEMI_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = hemisphereLightDirection[ i ];\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalAmbientLight += lightColor;\n\n\t}\n\n#endif\n\n",THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n\ttotalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n",THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif",THREE.ShaderChunk.lights_lambert_pars_vertex = "#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n",THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec3 lVector = lightPosition - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\n\t\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = directionalLightDirection[ i ];\n\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = hemisphereLightDirection[ i ];\n\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tfloat hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n",THREE.ShaderChunk.lights_phong_fragment = "vec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec3 lightPosition = pointLightPosition[ i ];\n\t\tvec3 lVector = lightPosition + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec3 lVector = lightPosition + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\n\t\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\n\t\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = directionalLightDirection[ i ];\n\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * cosineTerm;\n\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n\t}\n\n#endif\n",THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n",THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\n#endif\n",THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif\n",THREE.ShaderChunk.linear_to_gamma_fragment = "\n\toutgoingLight = linearToOutput( outgoingLight );\n",THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif",THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n",THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif",THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif",THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif\n",THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif",THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n",THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n",THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n",
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif",THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n",THREE.ShaderChunk.normal_phong_fragment = "#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n",THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n",THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n",THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n\tfor ( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tfloat texelSizeY =  1.0 / shadowMapSize[ i ].y;\n\n\t\tfloat shadow = 0.0;\n\n#if defined( POINT_LIGHT_SHADOWS )\n\n\t\tbool isPointLight = shadowDarkness[ i ] < 0.0;\n\n\t\tif ( isPointLight ) {\n\n\t\t\tfloat realShadowDarkness = abs( shadowDarkness[ i ] );\n\n\t\t\tvec3 lightToPosition = vShadowCoord[ i ].xyz;\n\n\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tfloat dp = length( lightToPosition );\n\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\n\n\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tconst float Dr = 1.25;\n\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tconst float Dr = 2.25;\n\t#endif\n\n\t\t\tfloat os = Dr *  2.0 * texelSizeY;\n\n\t\t\tconst vec3 Gsd = vec3( - 1, 0, 1 );\n\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\n\t\t\tshadow *= realShadowDarkness * ( 1.0 / 21.0 );\n\n\t#else \n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tfloat dp = length( lightToPosition );\n\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\n\t\t\tshadow *= realShadowDarkness;\n\n\t#endif\n\n\t\t} else {\n\n#endif \n\t\t\tfloat texelSizeX =  1.0 / shadowMapSize[ i ].x;\n\n\t\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\n\t\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t\tbool frustumTest = all( frustumTestVec );\n\n\t\t\tif ( frustumTest ) {\n\n\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\n\t\t\t\t/*\n\t\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\t\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\t\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\t\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\t\tshadow += 1.0;\n\t\t\t\t\t}\n\t\t\t\t\tshadow /= 9.0;\n\t\t\t\t*/\n\n\t\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t\tconst float ShadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = texelSizeX;\n\t\t\t\tfloat yPixelOffset = texelSizeY;\n\n\t\t\t\tfloat dx0 = - 1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = - 1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfloat fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n\t\t\t\tshadow *= shadowDarkness[ i ];\n\n\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\n\t\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t\tfloat xPixelOffset = texelSizeX;\n\t\t\t\tfloat yPixelOffset = texelSizeY;\n\n\t\t\t\tfloat dx0 = - 1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = - 1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[ 0 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[ 0 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[ 0 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[ 1 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[ 1 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[ 1 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[ 2 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[ 2 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[ 2 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[ 0 ] = vec3( lessThan( depthKernel[ 0 ], shadowZ ) );\n\t\t\t\tshadowKernel[ 0 ] *= vec3( 0.25 );\n\n\t\t\t\tshadowKernel[ 1 ] = vec3( lessThan( depthKernel[ 1 ], shadowZ ) );\n\t\t\t\tshadowKernel[ 1 ] *= vec3( 0.25 );\n\n\t\t\t\tshadowKernel[ 2 ] = vec3( lessThan( depthKernel[ 2 ], shadowZ ) );\n\t\t\t\tshadowKernel[ 2 ] *= vec3( 0.25 );\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[ i ].xy );\n\n\t\t\t\tshadowKernel[ 0 ] = mix( shadowKernel[ 1 ], shadowKernel[ 0 ], fractionalCoord.x );\n\t\t\t\tshadowKernel[ 1 ] = mix( shadowKernel[ 2 ], shadowKernel[ 1 ], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[ 0 ][ 1 ], shadowKernel[ 0 ][ 0 ], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[ 0 ][ 2 ], shadowKernel[ 0 ][ 1 ], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[ 1 ][ 1 ], shadowKernel[ 1 ][ 0 ], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[ 1 ][ 2 ], shadowKernel[ 1 ][ 1 ], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) ) * shadowDarkness[ i ];\n\n\t#else \n\t\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\tshadow = shadowDarkness[ i ];\n\n\t#endif\n\n\t\t\t}\n\n#ifdef SHADOWMAP_DEBUG\n\n\t\t\tif ( inFrustum ) {\n\n\t\t\t\tif ( i == 0 ) {\n\n\t\t\t\t\toutgoingLight *= vec3( 1.0, 0.5, 0.0 );\n\n\t\t\t\t} else if ( i == 1 ) {\n\n\t\t\t\t\toutgoingLight *= vec3( 0.0, 1.0, 0.8 );\n\n\t\t\t\t} else {\n\n\t\t\t\t\toutgoingLight *= vec3( 0.0, 0.5, 1.0 );\n\n\t\t\t\t}\n\n\t\t\t}\n\n#endif\n\n#if defined( POINT_LIGHT_SHADOWS )\n\n\t\t}\n\n#endif\n\n\t\tshadowMask = shadowMask * vec3( 1.0 - shadow );\n\n\t}\n\n#endif\n",THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n\t#if defined(POINT_LIGHT_SHADOWS)\n\n\n\t\tvoid adjustShadowValue1K( const float testDepth, const vec4 textureData, const float bias, inout float shadowValue ) {\n\n\t\t\tconst vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\t\tif ( testDepth >= dot( textureData, bitSh ) * 1000.0 + bias )\n\t\t\t\tshadowValue += 1.0;\n\n\t\t}\n\n\n\t\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\n\t\t\tvec3 absV = abs( v );\n\n\n\t\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\t\tabsV *= scaleToCube;\n\n\n\t\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\n\n\t\t\tvec2 planar = v.xy;\n\n\t\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\t\tif ( absV.z >= almostOne ) {\n\n\t\t\t\tif ( v.z > 0.0 )\n\t\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\t\tfloat signX = sign( v.x );\n\t\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\t\tfloat signY = sign( v.y );\n\t\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t\t}\n\n\n\t\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t\t}\n\n\t#endif\n\n#endif\n",THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n#endif",THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n\tfor ( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif",THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif",THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n",THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n",THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n",THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif",THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif",THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif",THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif",THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif",THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\n#endif",THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n",THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif",THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n\t#endif\n\n#endif\n",THREE.UniformsUtils = {
    merge: function (e) {
        for (var t = {}, r = 0; r < e.length; r++) {
            var n, i = this.clone(e[r]);
            for (n in i) t[n] = i[n]
        }
        return t
    }, clone: function (e) {
        var t, r = {};
        for (t in e) {
            r[t] = {};
            for (var n in e[t]) {
                var i = e[t][n];
                i instanceof THREE.Color || i instanceof THREE.Vector2 || i instanceof THREE.Vector3 || i instanceof THREE.Vector4 || i instanceof THREE.Matrix3 || i instanceof THREE.Matrix4 || i instanceof THREE.Texture ? r[t][n] = i.clone() : Array.isArray(i) ? r[t][n] = i.slice() : r[t][n] = i
            }
        }
        return r
    }
},THREE.UniformsLib = {
    common: {
        diffuse: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        map: {type: "t", value: null},
        offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)},
        specularMap: {type: "t", value: null},
        alphaMap: {type: "t", value: null},
        envMap: {type: "t", value: null},
        flipEnvMap: {type: "f", value: -1},
        reflectivity: {type: "f", value: 1},
        refractionRatio: {type: "f", value: .98}
    },
    aomap: {aoMap: {type: "t", value: null}, aoMapIntensity: {type: "f", value: 1}},
    lightmap: {lightMap: {type: "t", value: null}, lightMapIntensity: {type: "f", value: 1}},
    emissivemap: {emissiveMap: {type: "t", value: null}},
    bumpmap: {bumpMap: {type: "t", value: null}, bumpScale: {type: "f", value: 1}},
    normalmap: {normalMap: {type: "t", value: null}, normalScale: {type: "v2", value: new THREE.Vector2(1, 1)}},
    displacementmap: {
        displacementMap: {type: "t", value: null},
        displacementScale: {type: "f", value: 1},
        displacementBias: {type: "f", value: 0}
    },
    fog: {
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    lights: {
        ambientLightColor: {type: "fv", value: []},
        directionalLightDirection: {type: "fv", value: []},
        directionalLightColor: {type: "fv", value: []},
        hemisphereLightDirection: {type: "fv", value: []},
        hemisphereLightSkyColor: {type: "fv", value: []},
        hemisphereLightGroundColor: {type: "fv", value: []},
        pointLightColor: {type: "fv", value: []},
        pointLightPosition: {type: "fv", value: []},
        pointLightDistance: {type: "fv1", value: []},
        pointLightDecay: {type: "fv1", value: []},
        spotLightColor: {type: "fv", value: []},
        spotLightPosition: {type: "fv", value: []},
        spotLightDirection: {type: "fv", value: []},
        spotLightDistance: {type: "fv1", value: []},
        spotLightAngleCos: {type: "fv1", value: []},
        spotLightExponent: {type: "fv1", value: []},
        spotLightDecay: {type: "fv1", value: []}
    },
    points: {
        psColor: {type: "c", value: new THREE.Color(15658734)},
        opacity: {type: "f", value: 1},
        size: {type: "f", value: 1},
        scale: {type: "f", value: 1},
        map: {type: "t", value: null},
        offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)},
        fogDensity: {type: "f", value: 25e-5},
        fogNear: {type: "f", value: 1},
        fogFar: {type: "f", value: 2e3},
        fogColor: {type: "c", value: new THREE.Color(16777215)}
    },
    shadowmap: {
        shadowMap: {type: "tv", value: []},
        shadowMapSize: {type: "v2v", value: []},
        shadowBias: {type: "fv1", value: []},
        shadowDarkness: {type: "fv1", value: []},
        shadowMatrix: {type: "m4v", value: []}
    }
},THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.uv_pars_vertex, THREE.ShaderChunk.uv2_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.uv_vertex, THREE.ShaderChunk.uv2_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "\t#ifdef USE_ENVMAP", THREE.ShaderChunk.beginnormal_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "\t#endif", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.uv_pars_fragment, THREE.ShaderChunk.uv2_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.aomap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tvec3 totalAmbientLight = vec3( 1.0 );\n\tvec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.aomap_fragment, THREE.ShaderChunk.shadowmap_fragment, "\toutgoingLight = diffuseColor.rgb * totalAmbientLight * shadowMask;", THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            }
        }]),
        vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.uv_pars_vertex, THREE.ShaderChunk.uv2_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.uv_vertex, THREE.ShaderChunk.uv2_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.beginnormal_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nuniform vec3 ambientLightColor;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.uv_pars_fragment, THREE.ShaderChunk.uv2_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tvec3 totalAmbientLight = ambientLightColor;\n\tvec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.shadowmap_fragment, "\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * ( vLightBack * shadowMask + totalAmbientLight ) + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;\n\t#endif", THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            }, specular: {type: "c", value: new THREE.Color(1118481)}, shininess: {type: "f", value: 30}
        }]),
        vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.uv_pars_vertex, THREE.ShaderChunk.uv2_pars_vertex, THREE.ShaderChunk.displacementmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.uv_vertex, THREE.ShaderChunk.uv2_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.beginnormal_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.displacementmap_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "\tvViewPosition = - mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.uv_pars_fragment, THREE.ShaderChunk.uv2_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.aomap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.emissivemap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tvec3 totalAmbientLight = ambientLightColor;\n\tvec3 totalEmissiveLight = emissive;\n\tvec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.normal_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.hemilight_fragment, THREE.ShaderChunk.aomap_fragment, THREE.ShaderChunk.emissivemap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.shadowmap_fragment, "totalDiffuseLight *= shadowMask;\ntotalSpecularLight *= shadowMask;\n#ifdef METAL\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n#else\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n#endif", THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );\n\tvec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.shadowmap_fragment, "\toutgoingLight = diffuseColor.rgb * shadowMask;", THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            }, dashSize: {type: "f", value: 1}, totalSize: {type: "f", value: 2}
        }]),
        vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, "\toutgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    depth: {
        uniforms: {mNear: {type: "f", value: 1}, mFar: {type: "f", value: 2e3}, opacity: {type: "f", value: 1}},
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float mNear;\nuniform float mFar;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")
    },
    normal: {
        uniforms: {opacity: {type: "f", value: 1}},
        vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float opacity;\nvarying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    cube: {
        uniforms: {tCube: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
        vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    equirect: {
        uniforms: {tEquirect: {type: "t", value: null}, tFlip: {type: "f", value: -1}},
        vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")
    },
    distanceRGBA: {
        uniforms: {lightPos: {type: "v3", value: new THREE.Vector3(0, 0, 0)}},
        vertexShader: ["varying vec4 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.worldpos_vertex, "vWorldPosition = worldPosition;\n}"].join("\n"),
        fragmentShader: ["uniform vec3 lightPos;\nvarying vec4 vWorldPosition;", THREE.ShaderChunk.common, "vec4 pack1K ( float depth ) {\n   depth /= 1000.0;\n   const vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = fract( depth * bitSh );\n\tres -= res.xxyz * bitMsk;\n\treturn res; \n}\nfloat unpack1K ( vec4 color ) {\n\tconst vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\treturn dot( color, bitSh ) * 1000.0;\n}\nvoid main () {\n\tgl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );\n}"].join("\n")
    }
},THREE.WebGLRenderer = function (e) {
    function t(e, t, r, n) {
        !0 === N && (e *= n, t *= n, r *= n), ge.clearColor(e, t, r, n)
    }

    function r() {
        Re.init(), ge.viewport(ne, ie, oe, ae), t(U.r, U.g, U.b, G)
    }

    function n() {
        te = Z = null, ee = "", J = -1, de = !0, Re.reset()
    }

    function i(e) {
        e.preventDefault(), n(), r(), xe.clear()
    }

    function o(e) {
        e = e.target, e.removeEventListener("dispose", o);
        e:{
            var t = xe.get(e);
            if (e.image && t.__image__webglTextureCube) ge.deleteTexture(t.__image__webglTextureCube); else {
                if (void 0 === t.__webglInit) break e;
                ge.deleteTexture(t.__webglTexture)
            }
            xe["delete"](e)
        }
        Ee.textures--
    }

    function a(e) {
        e = e.target, e.removeEventListener("dispose", a);
        var t = xe.get(e), r = xe.get(e.texture);
        if (e && void 0 !== r.__webglTexture) {
            if (ge.deleteTexture(r.__webglTexture), e instanceof THREE.WebGLRenderTargetCube) for (r = 0; 6 > r; r++) ge.deleteFramebuffer(t.__webglFramebuffer[r]), ge.deleteRenderbuffer(t.__webglRenderbuffer[r]); else ge.deleteFramebuffer(t.__webglFramebuffer), ge.deleteRenderbuffer(t.__webglRenderbuffer);
            xe["delete"](e.texture), xe["delete"](e)
        }
        Ee.textures--
    }

    function s(e) {
        e = e.target, e.removeEventListener("dispose", s), h(e), xe["delete"](e)
    }

    function h(e) {
        var t = xe.get(e).program;
        e.program = void 0, void 0 !== t && be.releaseProgram(t)
    }

    function c(e, t) {
        return t[0] - e[0]
    }

    function u(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }

    function l(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }

    function p(e, t, r, n, i) {
        var o;
        r.transparent ? (n = W, o = ++X) : (n = z, o = ++j), o = n[o], void 0 !== o ? (o.id = e.id, o.object = e, o.geometry = t, o.material = r, o.z = le.z, o.group = i) : (o = {
            id: e.id,
            object: e,
            geometry: t,
            material: r,
            z: le.z,
            group: i
        }, n.push(o))
    }

    function d(e, t) {
        if (!1 !== e.visible) {
            if (0 !== (e.channels.mask & t.channels.mask)) if (e instanceof THREE.Light) I.push(e); else if (e instanceof THREE.Sprite) Y.push(e); else if (e instanceof THREE.LensFlare) K.push(e); else if (e instanceof THREE.ImmediateRenderObject) !0 === Q.sortObjects && (le.setFromMatrixPosition(e.matrixWorld), le.applyProjection(ue)), p(e, null, e.material, le.z, null); else if ((e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && (e instanceof THREE.SkinnedMesh && e.skeleton.update(), !1 === e.frustumCulled || !0 === ce.intersectsObject(e))) {
                var r = e.material;
                if (!0 === r.visible) {
                    !0 === Q.sortObjects && (le.setFromMatrixPosition(e.matrixWorld), le.applyProjection(ue));
                    var n = He.update(e);
                    if (r instanceof THREE.MeshFaceMaterial) for (var i = n.groups, o = r.materials, r = 0, a = i.length; a > r; r++) {
                        var s = i[r], h = o[s.materialIndex];
                        !0 === h.visible && p(e, n, h, le.z, s)
                    } else p(e, n, r, le.z, null)
                }
            }
            for (n = e.children, r = 0, a = n.length; a > r; r++) d(n[r], t)
        }
    }

    function f(e, t, r, n, i) {
        for (var o = 0, a = e.length; a > o; o++) {
            var s = e[o], h = s.object, c = s.geometry, u = void 0 === i ? s.material : i, s = s.group;
            if (h.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, h.matrixWorld), h.normalMatrix.getNormalMatrix(h.modelViewMatrix), h instanceof THREE.ImmediateRenderObject) {
                E(u);
                var l = m(t, r, n, u, h);
                ee = "", h.render(function (e) {
                    Q.renderBufferImmediate(e, l, u)
                })
            } else Q.renderBufferDirect(t, r, n, c, u, h, s)
        }
    }

    function E(e) {
        e.side !== THREE.DoubleSide ? Re.enable(ge.CULL_FACE) : Re.disable(ge.CULL_FACE), Re.setFlipSided(e.side === THREE.BackSide), !0 === e.transparent ? Re.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha) : Re.setBlending(THREE.NoBlending), Re.setDepthFunc(e.depthFunc), Re.setDepthTest(e.depthTest), Re.setDepthWrite(e.depthWrite), Re.setColorWrite(e.colorWrite), Re.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
    }

    function m(e, t, r, n, i) {
        re = 0;
        var o = xe.get(n);
        if (n.needsUpdate || !o.program) {
            e:{
                var a = xe.get(n), c = be.getParameters(n, t, r, i), u = be.getProgramCode(n, c), l = a.program, p = !0;
                if (void 0 === l) n.addEventListener("dispose", s); else if (l.code !== u) h(n); else {
                    if (void 0 !== c.shaderID) break e;
                    p = !1
                }
                if (p && (c.shaderID ? (l = THREE.ShaderLib[c.shaderID], a.__webglShader = {
                    name: n.type,
                    uniforms: THREE.UniformsUtils.clone(l.uniforms),
                    vertexShader: l.vertexShader,
                    fragmentShader: l.fragmentShader
                }) : a.__webglShader = {
                    name: n.type,
                    uniforms: n.uniforms,
                    vertexShader: n.vertexShader,
                    fragmentShader: n.fragmentShader
                }, n.__webglShader = a.__webglShader, l = be.acquireProgram(n, c, u), a.program = l, n.program = l), c = l.getAttributes(), n.morphTargets) for (u = n.numSupportedMorphTargets = 0; u < Q.maxMorphTargets; u++) 0 <= c["morphTarget" + u] && n.numSupportedMorphTargets++;
                if (n.morphNormals) for (u = n.numSupportedMorphNormals = 0; u < Q.maxMorphNormals; u++) 0 <= c["morphNormal" + u] && n.numSupportedMorphNormals++;
                a.uniformsList = [];
                var d, c = a.program.getUniforms();
                for (d in a.__webglShader.uniforms) (u = c[d]) && a.uniformsList.push([a.__webglShader.uniforms[d], u])
            }
            n.needsUpdate = !1
        }
        if (u = l = p = !1, a = o.program, d = a.getUniforms(), c = o.__webglShader.uniforms, a.id !== Z && (ge.useProgram(a.program), Z = a.id, u = l = p = !0), n.id !== J && (-1 === J && (u = !0), J = n.id, l = !0), (p || e !== te) && (ge.uniformMatrix4fv(d.projectionMatrix, !1, e.projectionMatrix.elements), ye.logarithmicDepthBuffer && ge.uniform1f(d.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)), e !== te && (te = e), (n instanceof THREE.ShaderMaterial || n instanceof THREE.MeshPhongMaterial || n.envMap) && void 0 !== d.cameraPosition && (le.setFromMatrixPosition(e.matrixWorld), ge.uniform3f(d.cameraPosition, le.x, le.y, le.z)), (n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshBasicMaterial || n instanceof THREE.ShaderMaterial || n.skinning) && void 0 !== d.viewMatrix && ge.uniformMatrix4fv(d.viewMatrix, !1, e.matrixWorldInverse.elements)), n.skinning && (i.bindMatrix && void 0 !== d.bindMatrix && ge.uniformMatrix4fv(d.bindMatrix, !1, i.bindMatrix.elements), i.bindMatrixInverse && void 0 !== d.bindMatrixInverse && ge.uniformMatrix4fv(d.bindMatrixInverse, !1, i.bindMatrixInverse.elements), ye.floatVertexTextures && i.skeleton && i.skeleton.useVertexTexture ? (void 0 !== d.boneTexture && (p = T(), ge.uniform1i(d.boneTexture, p), Q.setTexture(i.skeleton.boneTexture, p)), void 0 !== d.boneTextureWidth && ge.uniform1i(d.boneTextureWidth, i.skeleton.boneTextureWidth), void 0 !== d.boneTextureHeight && ge.uniform1i(d.boneTextureHeight, i.skeleton.boneTextureHeight)) : i.skeleton && i.skeleton.boneMatrices && void 0 !== d.boneGlobalMatrices && ge.uniformMatrix4fv(d.boneGlobalMatrices, !1, i.skeleton.boneMatrices)), l) {
            if (r && n.fog && (c.fogColor.value = r.color, r instanceof THREE.Fog ? (c.fogNear.value = r.near, c.fogFar.value = r.far) : r instanceof THREE.FogExp2 && (c.fogDensity.value = r.density)), n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial || n.lights) {
                if (de) {
                    var f, E, m, y, u = !0, R = p = 0, x = 0, w = fe, M = e.matrixWorldInverse,
                        S = w.directional.colors, _ = w.directional.positions, A = w.point.colors,
                        L = w.point.positions, P = w.point.distances, k = w.point.decays, D = w.spot.colors,
                        F = w.spot.positions, O = w.spot.distances, V = w.spot.directions, N = w.spot.anglesCos,
                        B = w.spot.exponents, U = w.spot.decays, G = w.hemi.skyColors, I = w.hemi.groundColors,
                        z = w.hemi.positions, j = 0, W = 0, X = 0, q = 0, Y = 0, K = 0, $ = 0, ee = 0, ne = f = 0;
                    for (r = y = ne = 0, l = t.length; l > r; r++) f = t[r], E = f.color, m = f.intensity, y = f.distance, f instanceof THREE.AmbientLight ? f.visible && (p += E.r, R += E.g, x += E.b) : f instanceof THREE.DirectionalLight ? (Y += 1, f.visible && (pe.setFromMatrixPosition(f.matrixWorld), le.setFromMatrixPosition(f.target.matrixWorld), pe.sub(le), pe.transformDirection(M), f = 3 * j, _[f + 0] = pe.x, _[f + 1] = pe.y, _[f + 2] = pe.z, v(S, f, E, m), j += 1)) : f instanceof THREE.PointLight ? (K += 1, f.visible && (ne = 3 * W, v(A, ne, E, m), le.setFromMatrixPosition(f.matrixWorld), le.applyMatrix4(M), L[ne + 0] = le.x, L[ne + 1] = le.y, L[ne + 2] = le.z, P[W] = y, k[W] = 0 === f.distance ? 0 : f.decay, W += 1)) : f instanceof THREE.SpotLight ? ($ += 1, f.visible && (ne = 3 * X, v(D, ne, E, m), pe.setFromMatrixPosition(f.matrixWorld), le.copy(pe).applyMatrix4(M), F[ne + 0] = le.x, F[ne + 1] = le.y, F[ne + 2] = le.z, O[X] = y, le.setFromMatrixPosition(f.target.matrixWorld), pe.sub(le), pe.transformDirection(M), V[ne + 0] = pe.x, V[ne + 1] = pe.y, V[ne + 2] = pe.z, N[X] = Math.cos(f.angle), B[X] = f.exponent, U[X] = 0 === f.distance ? 0 : f.decay, X += 1)) : f instanceof THREE.HemisphereLight && (ee += 1, f.visible && (pe.setFromMatrixPosition(f.matrixWorld), pe.transformDirection(M), y = 3 * q, z[y + 0] = pe.x, z[y + 1] = pe.y, z[y + 2] = pe.z, E = f.color, f = f.groundColor, v(G, y, E, m), v(I, y, f, m), q += 1));
                    for (r = 3 * j, l = Math.max(S.length, 3 * Y); l > r; r++) S[r] = 0;
                    for (r = 3 * W, l = Math.max(A.length, 3 * K); l > r; r++) A[r] = 0;
                    for (r = 3 * X, l = Math.max(D.length, 3 * $); l > r; r++) D[r] = 0;
                    for (r = 3 * q, l = Math.max(G.length, 3 * ee); l > r; r++) G[r] = 0;
                    for (r = 3 * q, l = Math.max(I.length, 3 * ee); l > r; r++) I[r] = 0;
                    w.directional.length = j, w.point.length = W, w.spot.length = X, w.hemi.length = q, w.ambient[0] = p, w.ambient[1] = R, w.ambient[2] = x, de = !1
                }
                u ? (u = fe, c.ambientLightColor.value = u.ambient, c.directionalLightColor.value = u.directional.colors, c.directionalLightDirection.value = u.directional.positions, c.pointLightColor.value = u.point.colors, c.pointLightPosition.value = u.point.positions, c.pointLightDistance.value = u.point.distances, c.pointLightDecay.value = u.point.decays, c.spotLightColor.value = u.spot.colors, c.spotLightPosition.value = u.spot.positions, c.spotLightDistance.value = u.spot.distances, c.spotLightDirection.value = u.spot.directions, c.spotLightAngleCos.value = u.spot.anglesCos, c.spotLightExponent.value = u.spot.exponents, c.spotLightDecay.value = u.spot.decays, c.hemisphereLightSkyColor.value = u.hemi.skyColors, c.hemisphereLightGroundColor.value = u.hemi.groundColors, c.hemisphereLightDirection.value = u.hemi.positions, g(c, !0)) : g(c, !1)
            }
            if (n instanceof THREE.MeshBasicMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshPhongMaterial) {
                c.opacity.value = n.opacity, c.diffuse.value = n.color, n.emissive && (c.emissive.value = n.emissive), c.map.value = n.map, c.specularMap.value = n.specularMap, c.alphaMap.value = n.alphaMap, n.aoMap && (c.aoMap.value = n.aoMap, c.aoMapIntensity.value = n.aoMapIntensity);
                var ie;
                n.map ? ie = n.map : n.specularMap ? ie = n.specularMap : n.displacementMap ? ie = n.displacementMap : n.normalMap ? ie = n.normalMap : n.bumpMap ? ie = n.bumpMap : n.alphaMap ? ie = n.alphaMap : n.emissiveMap && (ie = n.emissiveMap), void 0 !== ie && (ie instanceof THREE.WebGLRenderTarget && (ie = ie.texture), u = ie.offset, ie = ie.repeat, c.offsetRepeat.value.set(u.x, u.y, ie.x, ie.y)), c.envMap.value = n.envMap, c.flipEnvMap.value = n.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1, c.reflectivity.value = n.reflectivity, c.refractionRatio.value = n.refractionRatio
            }
            if (n instanceof THREE.LineBasicMaterial ? (c.diffuse.value = n.color, c.opacity.value = n.opacity) : n instanceof THREE.LineDashedMaterial ? (c.diffuse.value = n.color, c.opacity.value = n.opacity, c.dashSize.value = n.dashSize, c.totalSize.value = n.dashSize + n.gapSize, c.scale.value = n.scale) : n instanceof THREE.PointsMaterial ? (c.psColor.value = n.color, c.opacity.value = n.opacity, c.size.value = n.size, c.scale.value = C.height / 2, c.map.value = n.map, null !== n.map && (e = n.map.offset, ie = n.map.repeat, c.offsetRepeat.value.set(e.x, e.y, ie.x, ie.y))) : n instanceof THREE.MeshPhongMaterial ? (c.specular.value = n.specular, c.shininess.value = Math.max(n.shininess, 1e-4), n.lightMap && (c.lightMap.value = n.lightMap, c.lightMapIntensity.value = n.lightMapIntensity), n.emissiveMap && (c.emissiveMap.value = n.emissiveMap), n.bumpMap && (c.bumpMap.value = n.bumpMap, c.bumpScale.value = n.bumpScale), n.normalMap && (c.normalMap.value = n.normalMap, c.normalScale.value.copy(n.normalScale)), n.displacementMap && (c.displacementMap.value = n.displacementMap, c.displacementScale.value = n.displacementScale, c.displacementBias.value = n.displacementBias)) : n instanceof THREE.MeshDepthMaterial ? (c.mNear.value = e.near, c.mFar.value = e.far, c.opacity.value = n.opacity) : n instanceof THREE.MeshNormalMaterial && (c.opacity.value = n.opacity), i.receiveShadow && !n._shadowPass && c.shadowMatrix) for (e = n = 0, ie = t.length; ie > e; e++) u = t[e], !0 === u.castShadow && (u instanceof THREE.PointLight || u instanceof THREE.SpotLight || u instanceof THREE.DirectionalLight) && (r = u.shadow, u instanceof THREE.PointLight ? (le.setFromMatrixPosition(u.matrixWorld).negate(), r.matrix.identity().setPosition(le), c.shadowDarkness.value[n] = -r.darkness) : c.shadowDarkness.value[n] = r.darkness, c.shadowMatrix.value[n] = r.matrix, c.shadowMap.value[n] = r.map, c.shadowMapSize.value[n] = r.mapSize, c.shadowBias.value[n] = r.bias, n++);
            for (t = o.uniformsList, o = 0, n = t.length; n > o; o++) if (e = t[o][0], !1 !== e.needsUpdate) switch (c = e.type, r = e.value, ie = t[o][1], c) {
                case"1i":
                    ge.uniform1i(ie, r);
                    break;
                case"1f":
                    ge.uniform1f(ie, r);
                    break;
                case"2f":
                    ge.uniform2f(ie, r[0], r[1]);
                    break;
                case"3f":
                    ge.uniform3f(ie, r[0], r[1], r[2]);
                    break;
                case"4f":
                    ge.uniform4f(ie, r[0], r[1], r[2], r[3]);
                    break;
                case"1iv":
                    ge.uniform1iv(ie, r);
                    break;
                case"3iv":
                    ge.uniform3iv(ie, r);
                    break;
                case"1fv":
                    ge.uniform1fv(ie, r);
                    break;
                case"2fv":
                    ge.uniform2fv(ie, r);
                    break;
                case"3fv":
                    ge.uniform3fv(ie, r);
                    break;
                case"4fv":
                    ge.uniform4fv(ie, r);
                    break;
                case"Matrix3fv":
                    ge.uniformMatrix3fv(ie, !1, r);
                    break;
                case"Matrix4fv":
                    ge.uniformMatrix4fv(ie, !1, r);
                    break;
                case"i":
                    ge.uniform1i(ie, r);
                    break;
                case"f":
                    ge.uniform1f(ie, r);
                    break;
                case"v2":
                    ge.uniform2f(ie, r.x, r.y);
                    break;
                case"v3":
                    ge.uniform3f(ie, r.x, r.y, r.z);
                    break;
                case"v4":
                    ge.uniform4f(ie, r.x, r.y, r.z, r.w);
                    break;
                case"c":
                    ge.uniform3f(ie, r.r, r.g, r.b);
                    break;
                case"iv1":
                    ge.uniform1iv(ie, r);
                    break;
                case"iv":
                    ge.uniform3iv(ie, r);
                    break;
                case"fv1":
                    ge.uniform1fv(ie, r);
                    break;
                case"fv":
                    ge.uniform3fv(ie, r);
                    break;
                case"v2v":
                    for (void 0 === e._array && (e._array = new Float32Array(2 * r.length)), l = c = 0, u = r.length; u > c; c++, l += 2) e._array[l + 0] = r[c].x, e._array[l + 1] = r[c].y;
                    ge.uniform2fv(ie, e._array);
                    break;
                case"v3v":
                    for (void 0 === e._array && (e._array = new Float32Array(3 * r.length)), l = c = 0, u = r.length; u > c; c++, l += 3) e._array[l + 0] = r[c].x, e._array[l + 1] = r[c].y, e._array[l + 2] = r[c].z;
                    ge.uniform3fv(ie, e._array);
                    break;
                case"v4v":
                    for (void 0 === e._array && (e._array = new Float32Array(4 * r.length)), l = c = 0, u = r.length; u > c; c++, l += 4) e._array[l + 0] = r[c].x, e._array[l + 1] = r[c].y, e._array[l + 2] = r[c].z, e._array[l + 3] = r[c].w;
                    ge.uniform4fv(ie, e._array);
                    break;
                case"m3":
                    ge.uniformMatrix3fv(ie, !1, r.elements);
                    break;
                case"m3v":
                    for (void 0 === e._array && (e._array = new Float32Array(9 * r.length)), c = 0, u = r.length; u > c; c++) r[c].flattenToArrayOffset(e._array, 9 * c);
                    ge.uniformMatrix3fv(ie, !1, e._array);
                    break;
                case"m4":
                    ge.uniformMatrix4fv(ie, !1, r.elements);
                    break;
                case"m4v":
                    for (void 0 === e._array && (e._array = new Float32Array(16 * r.length)), c = 0, u = r.length; u > c; c++) r[c].flattenToArrayOffset(e._array, 16 * c);
                    ge.uniformMatrix4fv(ie, !1, e._array);
                    break;
                case"t":
                    if (l = T(), ge.uniform1i(ie, l), !r) continue;
                    r instanceof THREE.CubeTexture || Array.isArray(r.image) && 6 === r.image.length ? H(r, l) : r instanceof THREE.WebGLRenderTargetCube ? b(r.texture, l) : r instanceof THREE.WebGLRenderTarget ? Q.setTexture(r.texture, l) : Q.setTexture(r, l);
                    break;
                case"tv":
                    for (void 0 === e._array && (e._array = []), c = 0, u = e.value.length; u > c; c++) e._array[c] = T();
                    for (ge.uniform1iv(ie, e._array), c = 0, u = e.value.length; u > c; c++) r = e.value[c], l = e._array[c], r && (r instanceof THREE.CubeTexture || r.image instanceof Array && 6 === r.image.length ? H(r, l) : r instanceof THREE.WebGLRenderTarget ? Q.setTexture(r.texture, l) : r instanceof THREE.WebGLRenderTargetCube ? b(r.texture, l) : Q.setTexture(r, l));
                    break;
                default:
                    console.warn("THREE.WebGLRenderer: Unknown uniform type: " + c)
            }
        }
        return ge.uniformMatrix4fv(d.modelViewMatrix, !1, i.modelViewMatrix.elements), d.normalMatrix && ge.uniformMatrix3fv(d.normalMatrix, !1, i.normalMatrix.elements), void 0 !== d.modelMatrix && ge.uniformMatrix4fv(d.modelMatrix, !1, i.matrixWorld.elements), a
    }

    function g(e, t) {
        e.ambientLightColor.needsUpdate = t, e.directionalLightColor.needsUpdate = t, e.directionalLightDirection.needsUpdate = t, e.pointLightColor.needsUpdate = t, e.pointLightPosition.needsUpdate = t, e.pointLightDistance.needsUpdate = t, e.pointLightDecay.needsUpdate = t, e.spotLightColor.needsUpdate = t, e.spotLightPosition.needsUpdate = t, e.spotLightDistance.needsUpdate = t, e.spotLightDirection.needsUpdate = t, e.spotLightAngleCos.needsUpdate = t, e.spotLightExponent.needsUpdate = t, e.spotLightDecay.needsUpdate = t, e.hemisphereLightSkyColor.needsUpdate = t, e.hemisphereLightGroundColor.needsUpdate = t, e.hemisphereLightDirection.needsUpdate = t
    }

    function T() {
        var e = re;
        return e >= ye.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + ye.maxTextures), re += 1, e
    }

    function v(e, t, r, n) {
        e[t + 0] = r.r * n, e[t + 1] = r.g * n, e[t + 2] = r.b * n
    }

    function y(e, t, r) {
        r ? (ge.texParameteri(e, ge.TEXTURE_WRAP_S, _(t.wrapS)), ge.texParameteri(e, ge.TEXTURE_WRAP_T, _(t.wrapT)), ge.texParameteri(e, ge.TEXTURE_MAG_FILTER, _(t.magFilter)), ge.texParameteri(e, ge.TEXTURE_MIN_FILTER, _(t.minFilter))) : (ge.texParameteri(e, ge.TEXTURE_WRAP_S, ge.CLAMP_TO_EDGE), ge.texParameteri(e, ge.TEXTURE_WRAP_T, ge.CLAMP_TO_EDGE), t.wrapS === THREE.ClampToEdgeWrapping && t.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", t), ge.texParameteri(e, ge.TEXTURE_MAG_FILTER, S(t.magFilter)), ge.texParameteri(e, ge.TEXTURE_MIN_FILTER, S(t.minFilter)), t.minFilter !== THREE.NearestFilter && t.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", t)), !(r = ve.get("EXT_texture_filter_anisotropic")) || t.type === THREE.FloatType && null === ve.get("OES_texture_float_linear") || t.type === THREE.HalfFloatType && null === ve.get("OES_texture_half_float_linear") || !(1 < t.anisotropy || xe.get(t).__currentAnisotropy) || (ge.texParameterf(e, r.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Q.getMaxAnisotropy())), xe.get(t).__currentAnisotropy = t.anisotropy)
    }

    function R(e, t) {
        if (e.width > t || e.height > t) {
            var r = t / Math.max(e.width, e.height), n = document.createElement("canvas");
            return n.width = Math.floor(e.width * r), n.height = Math.floor(e.height * r), n.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + n.width + "x" + n.height, e), n
        }
        return e
    }

    function x(e) {
        return THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height)
    }

    function H(e, t) {
        var r = xe.get(e);
        if (6 === e.image.length) if (0 < e.version && r.__version !== e.version) {
            r.__image__webglTextureCube || (e.addEventListener("dispose", o), r.__image__webglTextureCube = ge.createTexture(), Ee.textures++), Re.activeTexture(ge.TEXTURE0 + t), Re.bindTexture(ge.TEXTURE_CUBE_MAP, r.__image__webglTextureCube), ge.pixelStorei(ge.UNPACK_FLIP_Y_WEBGL, e.flipY);
            for (var n = e instanceof THREE.CompressedTexture, i = e.image[0] instanceof THREE.DataTexture, a = [], s = 0; 6 > s; s++) a[s] = !Q.autoScaleCubemaps || n || i ? i ? e.image[s].image : e.image[s] : R(e.image[s], ye.maxCubemapSize);
            var h = x(a[0]), c = _(e.format), u = _(e.type);
            for (y(ge.TEXTURE_CUBE_MAP, e, h), s = 0; 6 > s; s++) if (n) for (var l, p = a[s].mipmaps, d = 0, f = p.length; f > d; d++) l = p[d], e.format !== THREE.RGBAFormat && e.format !== THREE.RGBFormat ? -1 < Re.getCompressedTextureFormats().indexOf(c) ? Re.compressedTexImage2D(ge.TEXTURE_CUBE_MAP_POSITIVE_X + s, d, c, l.width, l.height, 0, l.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : Re.texImage2D(ge.TEXTURE_CUBE_MAP_POSITIVE_X + s, d, c, l.width, l.height, 0, c, u, l.data); else i ? Re.texImage2D(ge.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, c, a[s].width, a[s].height, 0, c, u, a[s].data) : Re.texImage2D(ge.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, c, c, u, a[s]);
            e.generateMipmaps && h && ge.generateMipmap(ge.TEXTURE_CUBE_MAP), r.__version = e.version, e.onUpdate && e.onUpdate(e)
        } else Re.activeTexture(ge.TEXTURE0 + t), Re.bindTexture(ge.TEXTURE_CUBE_MAP, r.__image__webglTextureCube)
    }

    function b(e, t) {
        Re.activeTexture(ge.TEXTURE0 + t), Re.bindTexture(ge.TEXTURE_CUBE_MAP, xe.get(e).__webglTexture)
    }

    function w(e, t, r) {
        ge.bindFramebuffer(ge.FRAMEBUFFER, e), ge.framebufferTexture2D(ge.FRAMEBUFFER, ge.COLOR_ATTACHMENT0, r, xe.get(t.texture).__webglTexture, 0)
    }

    function M(e, t) {
        ge.bindRenderbuffer(ge.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (ge.renderbufferStorage(ge.RENDERBUFFER, ge.DEPTH_COMPONENT16, t.width, t.height), ge.framebufferRenderbuffer(ge.FRAMEBUFFER, ge.DEPTH_ATTACHMENT, ge.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (ge.renderbufferStorage(ge.RENDERBUFFER, ge.DEPTH_STENCIL, t.width, t.height), ge.framebufferRenderbuffer(ge.FRAMEBUFFER, ge.DEPTH_STENCIL_ATTACHMENT, ge.RENDERBUFFER, e)) : ge.renderbufferStorage(ge.RENDERBUFFER, ge.RGBA4, t.width, t.height)
    }

    function S(e) {
        return e === THREE.NearestFilter || e === THREE.NearestMipMapNearestFilter || e === THREE.NearestMipMapLinearFilter ? ge.NEAREST : ge.LINEAR
    }

    function _(e) {
        var t;
        if (e === THREE.RepeatWrapping) return ge.REPEAT;
        if (e === THREE.ClampToEdgeWrapping) return ge.CLAMP_TO_EDGE;
        if (e === THREE.MirroredRepeatWrapping) return ge.MIRRORED_REPEAT;
        if (e === THREE.NearestFilter) return ge.NEAREST;
        if (e === THREE.NearestMipMapNearestFilter) return ge.NEAREST_MIPMAP_NEAREST;
        if (e === THREE.NearestMipMapLinearFilter) return ge.NEAREST_MIPMAP_LINEAR;
        if (e === THREE.LinearFilter) return ge.LINEAR;
        if (e === THREE.LinearMipMapNearestFilter) return ge.LINEAR_MIPMAP_NEAREST;
        if (e === THREE.LinearMipMapLinearFilter) return ge.LINEAR_MIPMAP_LINEAR;
        if (e === THREE.UnsignedByteType) return ge.UNSIGNED_BYTE;
        if (e === THREE.UnsignedShort4444Type) return ge.UNSIGNED_SHORT_4_4_4_4;
        if (e === THREE.UnsignedShort5551Type) return ge.UNSIGNED_SHORT_5_5_5_1;
        if (e === THREE.UnsignedShort565Type) return ge.UNSIGNED_SHORT_5_6_5;
        if (e === THREE.ByteType) return ge.BYTE;
        if (e === THREE.ShortType) return ge.SHORT;
        if (e === THREE.UnsignedShortType) return ge.UNSIGNED_SHORT;
        if (e === THREE.IntType) return ge.INT;
        if (e === THREE.UnsignedIntType) return ge.UNSIGNED_INT;
        if (e === THREE.FloatType) return ge.FLOAT;
        if (t = ve.get("OES_texture_half_float"), null !== t && e === THREE.HalfFloatType) return t.HALF_FLOAT_OES;
        if (e === THREE.AlphaFormat) return ge.ALPHA;
        if (e === THREE.RGBFormat) return ge.RGB;
        if (e === THREE.RGBAFormat) return ge.RGBA;
        if (e === THREE.LuminanceFormat) return ge.LUMINANCE;
        if (e === THREE.LuminanceAlphaFormat) return ge.LUMINANCE_ALPHA;
        if (e === THREE.AddEquation) return ge.FUNC_ADD;
        if (e === THREE.SubtractEquation) return ge.FUNC_SUBTRACT;
        if (e === THREE.ReverseSubtractEquation) return ge.FUNC_REVERSE_SUBTRACT;
        if (e === THREE.ZeroFactor) return ge.ZERO;
        if (e === THREE.OneFactor) return ge.ONE;
        if (e === THREE.SrcColorFactor) return ge.SRC_COLOR;
        if (e === THREE.OneMinusSrcColorFactor) return ge.ONE_MINUS_SRC_COLOR;
        if (e === THREE.SrcAlphaFactor) return ge.SRC_ALPHA;
        if (e === THREE.OneMinusSrcAlphaFactor) return ge.ONE_MINUS_SRC_ALPHA;
        if (e === THREE.DstAlphaFactor) return ge.DST_ALPHA;
        if (e === THREE.OneMinusDstAlphaFactor) return ge.ONE_MINUS_DST_ALPHA;
        if (e === THREE.DstColorFactor) return ge.DST_COLOR;
        if (e === THREE.OneMinusDstColorFactor) return ge.ONE_MINUS_DST_COLOR;
        if (e === THREE.SrcAlphaSaturateFactor) return ge.SRC_ALPHA_SATURATE;
        if (t = ve.get("WEBGL_compressed_texture_s3tc"), null !== t) {
            if (e === THREE.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (e === THREE.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (t = ve.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
            if (e === THREE.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (t = ve.get("EXT_blend_minmax"), null !== t) {
            if (e === THREE.MinEquation) return t.MIN_EXT;
            if (e === THREE.MaxEquation) return t.MAX_EXT
        }
        return 0
    }

    console.log("THREE.WebGLRenderer", THREE.REVISION), e = e || {};
    var C = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
        A = void 0 !== e.context ? e.context : null, L = C.width, P = C.height, k = 1,
        D = void 0 !== e.alpha && e.alpha, F = void 0 === e.depth || e.depth, O = void 0 === e.stencil || e.stencil,
        V = void 0 !== e.antialias && e.antialias, N = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
        B = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer, U = new THREE.Color(0), G = 0, I = [],
        z = [], j = -1, W = [], X = -1, q = new Float32Array(8), Y = [], K = [];
    this.domElement = C, this.context = null, this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.gammaFactor = 2, this.gammaOutput = this.gammaInput = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0;
    var Q = this, Z = null, $ = null, J = -1, ee = "", te = null, re = 0, ne = 0, ie = 0, oe = C.width, ae = C.height,
        se = 0, he = 0, ce = new THREE.Frustum, ue = new THREE.Matrix4, le = new THREE.Vector3, pe = new THREE.Vector3,
        de = !0, fe = {
            ambient: [0, 0, 0],
            directional: {length: 0, colors: [], positions: []},
            point: {length: 0, colors: [], positions: [], distances: [], decays: []},
            spot: {
                length: 0,
                colors: [],
                positions: [],
                distances: [],
                directions: [],
                anglesCos: [],
                exponents: [],
                decays: []
            },
            hemi: {length: 0, skyColors: [], groundColors: [], positions: []}
        }, Ee = {geometries: 0, textures: 0}, me = {calls: 0, vertices: 0, faces: 0, points: 0};
    this.info = {render: me, memory: Ee, programs: null};
    var ge;
    try {
        if (D = {
            alpha: D,
            depth: F,
            stencil: O,
            antialias: V,
            premultipliedAlpha: N,
            preserveDrawingBuffer: B
        }, ge = A || C.getContext("webgl", D) || C.getContext("experimental-webgl", D), null === ge) {
            if (null !== C.getContext("webgl")) throw"Error creating WebGL context with your selected attributes.";
            throw"Error creating WebGL context."
        }
        C.addEventListener("webglcontextlost", i, !1)
    } catch (Te) {
        console.error("THREE.WebGLRenderer: " + Te)
    }
    var ve = new THREE.WebGLExtensions(ge);
    ve.get("OES_texture_float"), ve.get("OES_texture_float_linear"), ve.get("OES_texture_half_float"), ve.get("OES_texture_half_float_linear"), ve.get("OES_standard_derivatives"), ve.get("ANGLE_instanced_arrays"), ve.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var ye = new THREE.WebGLCapabilities(ge, ve, e), Re = new THREE.WebGLState(ge, ve, _),
        xe = new THREE.WebGLProperties, He = new THREE.WebGLObjects(ge, xe, this.info),
        be = new THREE.WebGLPrograms(this, ye);
    this.info.programs = be.programs;
    var we = new THREE.WebGLBufferRenderer(ge, ve, me), Me = new THREE.WebGLIndexedBufferRenderer(ge, ve, me);
    r(), this.context = ge, this.capabilities = ye, this.extensions = ve, this.state = Re;
    var Se = new THREE.WebGLShadowMap(this, I, He);
    this.shadowMap = Se;
    var _e = new THREE.SpritePlugin(this, Y), Ce = new THREE.LensFlarePlugin(this, K);
    this.getContext = function () {
        return ge
    }, this.getContextAttributes = function () {
        return ge.getContextAttributes()
    }, this.forceContextLoss = function () {
        ve.get("WEBGL_lose_context").loseContext()
    }, this.getMaxAnisotropy = function () {
        var e;
        return function () {
            if (void 0 !== e) return e;
            var t = ve.get("EXT_texture_filter_anisotropic");
            return e = null !== t ? ge.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
    }(), this.getPrecision = function () {
        return ye.precision
    }, this.getPixelRatio = function () {
        return k
    }, this.setPixelRatio = function (e) {
        void 0 !== e && (k = e)
    }, this.getSize = function () {
        return {width: L, height: P}
    }, this.setSize = function (e, t, r) {
        L = e, P = t, C.width = e * k, C.height = t * k, !1 !== r && (C.style.width = e + "px", C.style.height = t + "px"), this.setViewport(0, 0, e, t)
    }, this.setViewport = function (e, t, r, n) {
        ne = e * k, ie = t * k, oe = r * k, ae = n * k, ge.viewport(ne, ie, oe, ae)
    }, this.getViewport = function (e) {
        e.x = ne / k, e.y = ie / k, e.z = oe / k, e.w = ae / k
    }, this.setScissor = function (e, t, r, n) {
        ge.scissor(e * k, t * k, r * k, n * k)
    }, this.enableScissorTest = function (e) {
        Re.setScissorTest(e)
    }, this.getClearColor = function () {
        return U
    }, this.setClearColor = function (e, r) {
        U.set(e), G = void 0 !== r ? r : 1, t(U.r, U.g, U.b, G)
    }, this.getClearAlpha = function () {
        return G
    }, this.setClearAlpha = function (e) {
        G = e, t(U.r, U.g, U.b, G)
    }, this.clear = function (e, t, r) {
        var n = 0;
        (void 0 === e || e) && (n |= ge.COLOR_BUFFER_BIT), (void 0 === t || t) && (n |= ge.DEPTH_BUFFER_BIT), (void 0 === r || r) && (n |= ge.STENCIL_BUFFER_BIT), ge.clear(n)
    }, this.clearColor = function () {
        ge.clear(ge.COLOR_BUFFER_BIT)
    }, this.clearDepth = function () {
        ge.clear(ge.DEPTH_BUFFER_BIT)
    }, this.clearStencil = function () {
        ge.clear(ge.STENCIL_BUFFER_BIT)
    }, this.clearTarget = function (e, t, r, n) {
        this.setRenderTarget(e), this.clear(t, r, n)
    }, this.resetGLState = n, this.dispose = function () {
        C.removeEventListener("webglcontextlost", i, !1)
    }, this.renderBufferImmediate = function (e, t, r) {
        Re.initAttributes();
        var n = xe.get(e);
        if (e.hasPositions && !n.position && (n.position = ge.createBuffer()), e.hasNormals && !n.normal && (n.normal = ge.createBuffer()), e.hasUvs && !n.uv && (n.uv = ge.createBuffer()), e.hasColors && !n.color && (n.color = ge.createBuffer()), t = t.getAttributes(), e.hasPositions && (ge.bindBuffer(ge.ARRAY_BUFFER, n.position), ge.bufferData(ge.ARRAY_BUFFER, e.positionArray, ge.DYNAMIC_DRAW), Re.enableAttribute(t.position), ge.vertexAttribPointer(t.position, 3, ge.FLOAT, !1, 0, 0)), e.hasNormals) {
            if (ge.bindBuffer(ge.ARRAY_BUFFER, n.normal), "MeshPhongMaterial" !== r.type && r.shading === THREE.FlatShading) for (var i = 0, o = 3 * e.count; o > i; i += 9) {
                var a = e.normalArray, s = (a[i + 0] + a[i + 3] + a[i + 6]) / 3,
                    h = (a[i + 1] + a[i + 4] + a[i + 7]) / 3, c = (a[i + 2] + a[i + 5] + a[i + 8]) / 3;
                a[i + 0] = s, a[i + 1] = h, a[i + 2] = c, a[i + 3] = s, a[i + 4] = h, a[i + 5] = c, a[i + 6] = s, a[i + 7] = h, a[i + 8] = c
            }
            ge.bufferData(ge.ARRAY_BUFFER, e.normalArray, ge.DYNAMIC_DRAW), Re.enableAttribute(t.normal), ge.vertexAttribPointer(t.normal, 3, ge.FLOAT, !1, 0, 0)
        }
        e.hasUvs && r.map && (ge.bindBuffer(ge.ARRAY_BUFFER, n.uv), ge.bufferData(ge.ARRAY_BUFFER, e.uvArray, ge.DYNAMIC_DRAW), Re.enableAttribute(t.uv), ge.vertexAttribPointer(t.uv, 2, ge.FLOAT, !1, 0, 0)), e.hasColors && r.vertexColors !== THREE.NoColors && (ge.bindBuffer(ge.ARRAY_BUFFER, n.color), ge.bufferData(ge.ARRAY_BUFFER, e.colorArray, ge.DYNAMIC_DRAW), Re.enableAttribute(t.color), ge.vertexAttribPointer(t.color, 3, ge.FLOAT, !1, 0, 0)), Re.disableUnusedAttributes(), ge.drawArrays(ge.TRIANGLES, 0, e.count), e.count = 0
    }, this.renderBufferDirect = function (e, t, r, n, i, o, a) {
        E(i);
        var s = m(e, t, r, i, o), h = !1;
        if (e = n.id + "_" + s.id + "_" + i.wireframe, e !== ee && (ee = e, h = !0), t = o.morphTargetInfluences, void 0 !== t) {
            for (e = [], r = 0, h = t.length; h > r; r++) {
                var u = t[r];
                e.push([u, r])
            }
            e.sort(c), 8 < e.length && (e.length = 8);
            var l = n.morphAttributes;
            for (r = 0, h = e.length; h > r; r++) u = e[r], q[r] = u[0], 0 !== u[0] ? (t = u[1], !0 === i.morphTargets && l.position && n.addAttribute("morphTarget" + r, l.position[t]), !0 === i.morphNormals && l.normal && n.addAttribute("morphNormal" + r, l.normal[t])) : (!0 === i.morphTargets && n.removeAttribute("morphTarget" + r), !0 === i.morphNormals && n.removeAttribute("morphNormal" + r));
            e = s.getUniforms(), null !== e.morphTargetInfluences && ge.uniform1fv(e.morphTargetInfluences, q), h = !0
        }
        if (t = n.index, r = n.attributes.position, !0 === i.wireframe && (t = He.getWireframeAttribute(n)), null !== t ? (e = Me, e.setIndex(t)) : e = we, h) {
            var p, h = void 0;
            if (n instanceof THREE.InstancedBufferGeometry && (p = ve.get("ANGLE_instanced_arrays"), null === p)) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); else {
                void 0 === h && (h = 0), Re.initAttributes();
                var d, u = n.attributes, s = s.getAttributes(), l = i.defaultAttributeValues;
                for (d in s) {
                    var f = s[d];
                    if (f >= 0) {
                        var g = u[d];
                        if (void 0 !== g) {
                            var T = g.itemSize, v = He.getAttributeBuffer(g);
                            if (g instanceof THREE.InterleavedBufferAttribute) {
                                var y = g.data, R = y.stride, g = g.offset;
                                y instanceof THREE.InstancedInterleavedBuffer ? (Re.enableAttributeAndDivisor(f, y.meshPerAttribute, p), void 0 === n.maxInstancedCount && (n.maxInstancedCount = y.meshPerAttribute * y.count)) : Re.enableAttribute(f), ge.bindBuffer(ge.ARRAY_BUFFER, v), ge.vertexAttribPointer(f, T, ge.FLOAT, !1, R * y.array.BYTES_PER_ELEMENT, (h * R + g) * y.array.BYTES_PER_ELEMENT)
                            } else g instanceof THREE.InstancedBufferAttribute ? (Re.enableAttributeAndDivisor(f, g.meshPerAttribute, p), void 0 === n.maxInstancedCount && (n.maxInstancedCount = g.meshPerAttribute * g.count)) : Re.enableAttribute(f), ge.bindBuffer(ge.ARRAY_BUFFER, v), ge.vertexAttribPointer(f, T, ge.FLOAT, !1, 0, h * T * 4)
                        } else if (void 0 !== l && (T = l[d], void 0 !== T)) switch (T.length) {
                            case 2:
                                ge.vertexAttrib2fv(f, T);
                                break;
                            case 3:
                                ge.vertexAttrib3fv(f, T);
                                break;
                            case 4:
                                ge.vertexAttrib4fv(f, T);
                                break;
                            default:
                                ge.vertexAttrib1fv(f, T)
                        }
                    }
                }
                Re.disableUnusedAttributes()
            }
            null !== t && ge.bindBuffer(ge.ELEMENT_ARRAY_BUFFER, He.getAttributeBuffer(t))
        }
        p = 1 / 0, null !== t ? p = t.count : void 0 !== r && (p = r.count), d = n.drawRange.start, t = n.drawRange.count, r = null !== a ? a.start : 0, h = null !== a ? a.count : 1 / 0, a = Math.max(0, d, r), p = Math.min(0 + p, d + t, r + h) - 1, p = Math.max(0, p - a + 1), o instanceof THREE.Mesh ? (!0 === i.wireframe ? (Re.setLineWidth(i.wireframeLinewidth * k), e.setMode(ge.LINES)) : e.setMode(ge.TRIANGLES), n instanceof THREE.InstancedBufferGeometry && 0 < n.maxInstancedCount ? e.renderInstances(n) : e.render(a, p)) : o instanceof THREE.Line ? (n = i.linewidth, void 0 === n && (n = 1), Re.setLineWidth(n * k), o instanceof THREE.LineSegments ? e.setMode(ge.LINES) : e.setMode(ge.LINE_STRIP), e.render(a, p)) : o instanceof THREE.Points && (e.setMode(ge.POINTS), e.render(a, p))
    }, this.render = function (e, t, r, n) {
        if (0 == t instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); else {
            var i = e.fog;
            ee = "", J = -1, te = null, de = !0, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), ue.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ce.setFromMatrix(ue), I.length = 0, X = j = -1, Y.length = 0, K.length = 0, d(e, t), z.length = j + 1, W.length = X + 1, !0 === Q.sortObjects && (z.sort(u), W.sort(l)), Se.render(e), me.calls = 0, me.vertices = 0, me.faces = 0, me.points = 0, this.setRenderTarget(r), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), e.overrideMaterial ? (n = e.overrideMaterial, f(z, t, I, i, n), f(W, t, I, i, n)) : (Re.setBlending(THREE.NoBlending), f(z, t, I, i), f(W, t, I, i)), _e.render(e, t), Ce.render(e, t, se, he), r && (e = r.texture, t = x(r), e.generateMipmaps && t && e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter && (e = r instanceof THREE.WebGLRenderTargetCube ? ge.TEXTURE_CUBE_MAP : ge.TEXTURE_2D, r = xe.get(r.texture).__webglTexture, Re.bindTexture(e, r), ge.generateMipmap(e), Re.bindTexture(e, null))), Re.setDepthTest(!0), Re.setDepthWrite(!0), Re.setColorWrite(!0)
        }
    }, this.setFaceCulling = function (e, t) {
        e === THREE.CullFaceNone ? Re.disable(ge.CULL_FACE) : (t === THREE.FrontFaceDirectionCW ? ge.frontFace(ge.CW) : ge.frontFace(ge.CCW), e === THREE.CullFaceBack ? ge.cullFace(ge.BACK) : e === THREE.CullFaceFront ? ge.cullFace(ge.FRONT) : ge.cullFace(ge.FRONT_AND_BACK), Re.enable(ge.CULL_FACE))
    }, this.setTexture = function (e, t) {
        var r = xe.get(e);
        if (0 < e.version && r.__version !== e.version) {
            var n = e.image;
            if (void 0 === n) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e); else if (!1 === n.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e); else {
                if (void 0 === r.__webglInit && (r.__webglInit = !0, e.addEventListener("dispose", o), r.__webglTexture = ge.createTexture(), Ee.textures++), Re.activeTexture(ge.TEXTURE0 + t), Re.bindTexture(ge.TEXTURE_2D, r.__webglTexture), ge.pixelStorei(ge.UNPACK_FLIP_Y_WEBGL, e.flipY), ge.pixelStorei(ge.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), ge.pixelStorei(ge.UNPACK_ALIGNMENT, e.unpackAlignment), e.image = R(e.image, ye.maxTextureSize), (e.wrapS !== THREE.ClampToEdgeWrapping || e.wrapT !== THREE.ClampToEdgeWrapping || e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter) && !1 === x(e.image)) {
                    if (n = e.image, n instanceof HTMLImageElement || n instanceof HTMLCanvasElement) {
                        var i = document.createElement("canvas");
                        i.width = THREE.Math.nearestPowerOfTwo(n.width), i.height = THREE.Math.nearestPowerOfTwo(n.height), i.getContext("2d").drawImage(n, 0, 0, i.width, i.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + n.width + "x" + n.height + "). Resized to " + i.width + "x" + i.height, n), n = i
                    }
                    e.image = n
                }
                var a = e.image, n = x(a), i = _(e.format), s = _(e.type);
                y(ge.TEXTURE_2D, e, n);
                var h = e.mipmaps;
                if (e instanceof THREE.DataTexture) if (0 < h.length && n) {
                    for (var c = 0, u = h.length; u > c; c++) a = h[c], Re.texImage2D(ge.TEXTURE_2D, c, i, a.width, a.height, 0, i, s, a.data);
                    e.generateMipmaps = !1
                } else Re.texImage2D(ge.TEXTURE_2D, 0, i, a.width, a.height, 0, i, s, a.data); else if (e instanceof THREE.CompressedTexture) for (c = 0, u = h.length; u > c; c++) a = h[c], e.format !== THREE.RGBAFormat && e.format !== THREE.RGBFormat ? -1 < Re.getCompressedTextureFormats().indexOf(i) ? Re.compressedTexImage2D(ge.TEXTURE_2D, c, i, a.width, a.height, 0, a.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Re.texImage2D(ge.TEXTURE_2D, c, i, a.width, a.height, 0, i, s, a.data); else if (0 < h.length && n) {
                    for (c = 0, u = h.length; u > c; c++) a = h[c], Re.texImage2D(ge.TEXTURE_2D, c, i, i, s, a);
                    e.generateMipmaps = !1
                } else Re.texImage2D(ge.TEXTURE_2D, 0, i, i, s, e.image);
                e.generateMipmaps && n && ge.generateMipmap(ge.TEXTURE_2D), r.__version = e.version, e.onUpdate && e.onUpdate(e)
            }
        } else Re.activeTexture(ge.TEXTURE0 + t), Re.bindTexture(ge.TEXTURE_2D, r.__webglTexture)
    }, this.setRenderTarget = function (e) {
        var t = e instanceof THREE.WebGLRenderTargetCube;
        if (e && void 0 === xe.get(e).__webglFramebuffer) {
            var r = xe.get(e), n = xe.get(e.texture);
            void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", a), n.__webglTexture = ge.createTexture(), Ee.textures++;
            var i = x(e), o = _(e.texture.format), s = _(e.texture.type);
            if (t) {
                for (r.__webglFramebuffer = [], r.__webglRenderbuffer = [], Re.bindTexture(ge.TEXTURE_CUBE_MAP, n.__webglTexture), y(ge.TEXTURE_CUBE_MAP, e.texture, i), n = 0; 6 > n; n++) r.__webglFramebuffer[n] = ge.createFramebuffer(), r.__webglRenderbuffer[n] = ge.createRenderbuffer(), Re.texImage2D(ge.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, o, e.width, e.height, 0, o, s, null), w(r.__webglFramebuffer[n], e, ge.TEXTURE_CUBE_MAP_POSITIVE_X + n), M(r.__webglRenderbuffer[n], e);
                e.texture.generateMipmaps && i && ge.generateMipmap(ge.TEXTURE_CUBE_MAP)
            } else r.__webglFramebuffer = ge.createFramebuffer(), r.__webglRenderbuffer = e.shareDepthFrom ? e.shareDepthFrom.__webglRenderbuffer : ge.createRenderbuffer(), Re.bindTexture(ge.TEXTURE_2D, n.__webglTexture), y(ge.TEXTURE_2D, e.texture, i), Re.texImage2D(ge.TEXTURE_2D, 0, o, e.width, e.height, 0, o, s, null), w(r.__webglFramebuffer, e, ge.TEXTURE_2D), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? ge.framebufferRenderbuffer(ge.FRAMEBUFFER, ge.DEPTH_ATTACHMENT, ge.RENDERBUFFER, r.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && ge.framebufferRenderbuffer(ge.FRAMEBUFFER, ge.DEPTH_STENCIL_ATTACHMENT, ge.RENDERBUFFER, r.__webglRenderbuffer) : M(r.__webglRenderbuffer, e), e.texture.generateMipmaps && i && ge.generateMipmap(ge.TEXTURE_2D);
            t ? Re.bindTexture(ge.TEXTURE_CUBE_MAP, null) : Re.bindTexture(ge.TEXTURE_2D, null), ge.bindRenderbuffer(ge.RENDERBUFFER, null), ge.bindFramebuffer(ge.FRAMEBUFFER, null)
        }
        e ? (r = xe.get(e), n = t ? r.__webglFramebuffer[e.activeCubeFace] : r.__webglFramebuffer, r = e.width, i = e.height, s = o = 0) : (n = null, r = oe, i = ae, o = ne, s = ie), n !== $ && (ge.bindFramebuffer(ge.FRAMEBUFFER, n), ge.viewport(o, s, r, i), $ = n), t && (n = xe.get(e.texture), ge.framebufferTexture2D(ge.FRAMEBUFFER, ge.COLOR_ATTACHMENT0, ge.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, n.__webglTexture, 0)), se = r, he = i
    }, this.readRenderTargetPixels = function (e, t, r, n, i, o) {
        if (0 == e instanceof THREE.WebGLRenderTarget) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); else {
            var a = xe.get(e).__webglFramebuffer;
            if (a) {
                var s = !1;
                a !== $ && (ge.bindFramebuffer(ge.FRAMEBUFFER, a), s = !0);
                try {
                    var h = e.texture;
                    h.format !== THREE.RGBAFormat && _(h.format) !== ge.getParameter(ge.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : h.type === THREE.UnsignedByteType || _(h.type) === ge.getParameter(ge.IMPLEMENTATION_COLOR_READ_TYPE) || h.type === THREE.FloatType && ve.get("WEBGL_color_buffer_float") || h.type === THREE.HalfFloatType && ve.get("EXT_color_buffer_half_float") ? ge.checkFramebufferStatus(ge.FRAMEBUFFER) === ge.FRAMEBUFFER_COMPLETE ? ge.readPixels(t, r, n, i, _(h.format), _(h.type), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                } finally {
                    s && ge.bindFramebuffer(ge.FRAMEBUFFER, $)
                }
            }
        }
    }, this.supportsFloatTextures = function () {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), ve.get("OES_texture_float")
    }, this.supportsHalfFloatTextures = function () {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), ve.get("OES_texture_half_float")
    }, this.supportsStandardDerivatives = function () {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), ve.get("OES_standard_derivatives")
    }, this.supportsCompressedTextureS3TC = function () {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), ve.get("WEBGL_compressed_texture_s3tc")
    }, this.supportsCompressedTexturePVRTC = function () {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), ve.get("WEBGL_compressed_texture_pvrtc")
    }, this.supportsBlendMinMax = function () {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), ve.get("EXT_blend_minmax")
    }, this.supportsVertexTextures = function () {
        return ye.vertexTextures
    }, this.supportsInstancedArrays = function () {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), ve.get("ANGLE_instanced_arrays")
    }, this.initMaterial = function () {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    }, this.addPrePlugin = function () {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    }, this.addPostPlugin = function () {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    }, this.updateShadowMap = function () {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    }, Object.defineProperties(this, {
        shadowMapEnabled: {
            get: function () {
                return Se.enabled
            }, set: function (e) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), Se.enabled = e
            }
        }, shadowMapType: {
            get: function () {
                return Se.type
            }, set: function (e) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), Se.type = e
            }
        }, shadowMapCullFace: {
            get: function () {
                return Se.cullFace
            }, set: function (e) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), Se.cullFace = e
            }
        }, shadowMapDebug: {
            get: function () {
                return Se.debug
            }, set: function (e) {
                console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug."), Se.debug = e
            }
        }
    })
},THREE.WebGLRenderTarget = function (e, t, r) {
    this.uuid = THREE.Math.generateUUID(), this.width = e, this.height = t, r = r || {}, void 0 === r.minFilter && (r.minFilter = THREE.LinearFilter), this.texture = new THREE.Texture((void 0), (void 0), r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy), this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer, this.stencilBuffer = void 0 === r.stencilBuffer || r.stencilBuffer, this.shareDepthFrom = void 0 !== r.shareDepthFrom ? r.shareDepthFrom : null
},THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget, get wrapS() {
        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
    }, set wrapS(e) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
    }, get wrapT() {
        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
    }, set wrapT(e) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
    }, get magFilter() {
        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
    }, set magFilter(e) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
    }, get minFilter() {
        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
    }, set minFilter(e) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
    }, get anisotropy() {
        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
    }, set anisotropy(e) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
    }, get offset() {
        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
    }, set offset(e) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
    }, get repeat() {
        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
    }, set repeat(e) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
    }, get format() {
        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
    }, set format(e) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
    }, get type() {
        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
    }, set type(e) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
    }, get generateMipmaps() {
        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
    }, set generateMipmaps(e) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
    }, setSize: function (e, t) {
        (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose())
    }, clone: function () {
        return (new this.constructor).copy(this)
    }, copy: function (e) {
        return this.width = e.width, this.height = e.height, this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.shareDepthFrom = e.shareDepthFrom, this
    }, dispose: function () {
        this.dispatchEvent({type: "dispose"})
    }
},THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube = function (e, t, r) {
    THREE.WebGLRenderTarget.call(this, e, t, r), this.activeCubeFace = 0
},THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube,THREE.WebGLBufferRenderer = function (e, t, r) {
    var n;
    this.setMode = function (e) {
        n = e
    }, this.render = function (t, i) {
        e.drawArrays(n, t, i), r.calls++, r.vertices += i, n === e.TRIANGLES && (r.faces += i / 3)
    }, this.renderInstances = function (e) {
        var r = t.get("ANGLE_instanced_arrays");
        if (null === r) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); else {
            var i = e.attributes.position;
            i instanceof THREE.InterleavedBufferAttribute ? r.drawArraysInstancedANGLE(n, 0, i.data.count, e.maxInstancedCount) : r.drawArraysInstancedANGLE(n, 0, i.count, e.maxInstancedCount)
        }
    }
},THREE.WebGLIndexedBufferRenderer = function (e, t, r) {
    var n, i, o;
    this.setMode = function (e) {
        n = e
    }, this.setIndex = function (r) {
        r.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (i = e.UNSIGNED_INT, o = 4) : (i = e.UNSIGNED_SHORT, o = 2)
    }, this.render = function (t, a) {
        e.drawElements(n, a, i, t * o), r.calls++, r.vertices += a, n === e.TRIANGLES && (r.faces += a / 3)
    }, this.renderInstances = function (e) {
        var r = t.get("ANGLE_instanced_arrays");
        null === r ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : r.drawElementsInstancedANGLE(n, e.index.array.length, i, 0, e.maxInstancedCount)
    }
},THREE.WebGLExtensions = function (e) {
    var t = {};
    this.get = function (r) {
        if (void 0 !== t[r]) return t[r];
        var n;
        switch (r) {
            case"EXT_texture_filter_anisotropic":
                n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case"WEBGL_compressed_texture_s3tc":
                n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case"WEBGL_compressed_texture_pvrtc":
                n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                n = e.getExtension(r)
        }
        return null === n && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."), t[r] = n
    }
},THREE.WebGLCapabilities = function (e, t, r) {
    function n(t) {
        if ("highp" === t) {
            if (0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision) return "highp";
            t = "mediump"
        }
        return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
    }

    this.getMaxPrecision = n, this.precision = void 0 !== r.precision ? r.precision : "highp", this.logarithmicDepthBuffer = void 0 !== r.logarithmicDepthBuffer && r.logarithmicDepthBuffer, this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS), this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = 0 < this.maxVertexTextures, this.floatFragmentTextures = !!t.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures, r = n(this.precision), r !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", r, "instead."), this.precision = r), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
},THREE.WebGLGeometries = function (e, t, r) {
    function n(e) {
        e = e.target;
        var a, s = o[e.id].attributes;
        for (a in s) i(s[a]);
        e.removeEventListener("dispose", n), delete o[e.id], a = t.get(e), a.wireframe && i(a.wireframe), r.memory.geometries--
    }

    function i(r) {
        var n;
        n = r instanceof THREE.InterleavedBufferAttribute ? t.get(r.data).__webglBuffer : t.get(r).__webglBuffer, void 0 !== n && (e.deleteBuffer(n), r instanceof THREE.InterleavedBufferAttribute ? t["delete"](r.data) : t["delete"](r))
    }

    var o = {};
    this.get = function (e) {
        var t = e.geometry;
        if (void 0 !== o[t.id]) return o[t.id];
        t.addEventListener("dispose", n);
        var i;
        return t instanceof THREE.BufferGeometry ? i = t : t instanceof THREE.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new THREE.BufferGeometry).setFromObject(e)), i = t._bufferGeometry), o[t.id] = i, r.memory.geometries++, i
    }
},THREE.WebGLObjects = function (e, t, r) {
    function n(r, n) {
        var i = r instanceof THREE.InterleavedBufferAttribute ? r.data : r, o = t.get(i);
        void 0 === o.__webglBuffer ? (o.__webglBuffer = e.createBuffer(), e.bindBuffer(n, o.__webglBuffer), e.bufferData(n, i.array, i.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW), o.version = i.version) : o.version !== i.version && (e.bindBuffer(n, o.__webglBuffer), !1 === i.dynamic || -1 === i.updateRange.count ? e.bufferSubData(n, 0, i.array) : 0 === i.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(n, i.updateRange.offset * i.array.BYTES_PER_ELEMENT, i.array.subarray(i.updateRange.offset, i.updateRange.offset + i.updateRange.count)), i.updateRange.count = 0), o.version = i.version)
    }

    function i(e, t, r) {
        if (t > r) {
            var n = t;
            t = r, r = n
        }
        return n = e[t], void 0 === n ? (e[t] = [r], !0) : -1 === n.indexOf(r) && (n.push(r), !0)
    }

    var o = new THREE.WebGLGeometries(e, t, r);
    this.getAttributeBuffer = function (e) {
        return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
    }, this.getWireframeAttribute = function (r) {
        var o = t.get(r);
        if (void 0 !== o.wireframe) return o.wireframe;
        var a = [], s = r.index, h = r.attributes;
        if (r = h.position, null !== s) for (var h = {}, s = s.array, c = 0, u = s.length; u > c; c += 3) {
            var l = s[c + 0], p = s[c + 1], d = s[c + 2];
            i(h, l, p) && a.push(l, p), i(h, p, d) && a.push(p, d), i(h, d, l) && a.push(d, l)
        } else for (s = h.position.array, c = 0, u = s.length / 3 - 1; u > c; c += 3) l = c + 0, p = c + 1, d = c + 2, a.push(l, p, p, d, d, l);
        return a = new THREE.BufferAttribute(new (65535 < r.count ? Uint32Array : Uint16Array)(a), 1), n(a, e.ELEMENT_ARRAY_BUFFER), o.wireframe = a
    }, this.update = function (t) {
        var r = o.get(t);
        t.geometry instanceof THREE.Geometry && r.updateFromObject(t), t = r.index;
        var i = r.attributes;
        null !== t && n(t, e.ELEMENT_ARRAY_BUFFER);
        for (var a in i) n(i[a], e.ARRAY_BUFFER);
        t = r.morphAttributes;
        for (a in t) for (var i = t[a], s = 0, h = i.length; h > s; s++) n(i[s], e.ARRAY_BUFFER);
        return r
    }
},THREE.WebGLProgram = function () {
    function e(e) {
        var t, r = [];
        for (t in e) {
            var n = e[t];
            !1 !== n && r.push("#define " + t + " " + n)
        }
        return r.join("\n")
    }

    function t(e) {
        return "" !== e
    }

    var r = 0;
    return function (n, i, o, a) {
        var s = n.context, h = o.defines, c = o.__webglShader.vertexShader, u = o.__webglShader.fragmentShader,
            l = "SHADOWMAP_TYPE_BASIC";
        a.shadowMapType === THREE.PCFShadowMap ? l = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === THREE.PCFSoftShadowMap && (l = "SHADOWMAP_TYPE_PCF_SOFT");
        var p = "ENVMAP_TYPE_CUBE", d = "ENVMAP_MODE_REFLECTION", f = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (o.envMap.mapping) {
                case THREE.CubeReflectionMapping:
                case THREE.CubeRefractionMapping:
                    p = "ENVMAP_TYPE_CUBE";
                    break;
                case THREE.EquirectangularReflectionMapping:
                case THREE.EquirectangularRefractionMapping:
                    p = "ENVMAP_TYPE_EQUIREC";
                    break;
                case THREE.SphericalReflectionMapping:
                    p = "ENVMAP_TYPE_SPHERE"
            }
            switch (o.envMap.mapping) {
                case THREE.CubeRefractionMapping:
                case THREE.EquirectangularRefractionMapping:
                    d = "ENVMAP_MODE_REFRACTION"
            }
            switch (o.combine) {
                case THREE.MultiplyOperation:
                    f = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case THREE.MixOperation:
                    f = "ENVMAP_BLENDING_MIX";
                    break;
                case THREE.AddOperation:
                    f = "ENVMAP_BLENDING_ADD"
            }
        }
        var E = 0 < n.gammaFactor ? n.gammaFactor : 1, m = e(h), g = s.createProgram();
        o instanceof THREE.RawShaderMaterial ? n = h = "" : (h = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + o.__webglShader.name, m, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", n.gammaInput ? "#define GAMMA_INPUT" : "", n.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + E, "#define MAX_DIR_LIGHTS " + a.maxDirLights, "#define MAX_POINT_LIGHTS " + a.maxPointLights, "#define MAX_SPOT_LIGHTS " + a.maxSpotLights, "#define MAX_HEMI_LIGHTS " + a.maxHemiLights, "#define MAX_SHADOWS " + a.maxShadows, "#define MAX_BONES " + a.maxBones, a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", 0 < a.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && n.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(t).join("\n"), n = [a.bumpMap || a.normalMap || a.flatShading || o.derivatives ? "#extension GL_OES_standard_derivatives : enable" : "", a.logarithmicDepthBuffer && n.extensions.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + o.__webglShader.name, m, "#define MAX_DIR_LIGHTS " + a.maxDirLights, "#define MAX_POINT_LIGHTS " + a.maxPointLights, "#define MAX_SPOT_LIGHTS " + a.maxSpotLights, "#define MAX_HEMI_LIGHTS " + a.maxHemiLights, "#define MAX_SHADOWS " + a.maxShadows, a.alphaTest ? "#define ALPHATEST " + a.alphaTest : "", n.gammaInput ? "#define GAMMA_INPUT" : "", n.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + E, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.metal ? "#define METAL" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", 0 < a.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && n.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "\n"].filter(t).join("\n")), u = n + u, c = THREE.WebGLShader(s, s.VERTEX_SHADER, h + c), u = THREE.WebGLShader(s, s.FRAGMENT_SHADER, u), s.attachShader(g, c), s.attachShader(g, u), void 0 !== o.index0AttributeName ? s.bindAttribLocation(g, 0, o.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(g, 0, "position"),
            s.linkProgram(g), a = s.getProgramInfoLog(g), l = s.getShaderInfoLog(c), p = s.getShaderInfoLog(u), f = d = !0, !1 === s.getProgramParameter(g, s.LINK_STATUS) ? (d = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "gl.VALIDATE_STATUS", s.getProgramParameter(g, s.VALIDATE_STATUS), "gl.getProgramInfoLog", a, l, p)) : "" !== a ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a) : ("" === l || "" === p) && (f = !1), f && (this.diagnostics = {
            runnable: d,
            material: o,
            programLog: a,
            vertexShader: {log: l, prefix: h},
            fragmentShader: {log: p, prefix: n}
        }), s.deleteShader(c), s.deleteShader(u);
        var T;
        this.getUniforms = function () {
            if (void 0 === T) {
                for (var e = {}, t = s.getProgramParameter(g, s.ACTIVE_UNIFORMS), r = 0; t > r; r++) {
                    var n = s.getActiveUniform(g, r).name, i = s.getUniformLocation(g, n), o = n.lastIndexOf("[0]");
                    -1 !== o && o === n.length - 3 && (e[n.substr(0, o)] = i), e[n] = i
                }
                T = e
            }
            return T
        };
        var v;
        return this.getAttributes = function () {
            if (void 0 === v) {
                for (var e = {}, t = s.getProgramParameter(g, s.ACTIVE_ATTRIBUTES), r = 0; t > r; r++) {
                    var n = s.getActiveAttrib(g, r).name;
                    e[n] = s.getAttribLocation(g, n)
                }
                v = e
            }
            return v
        }, this.destroy = function () {
            s.deleteProgram(g), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            }, attributes: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.id = r++, this.code = i, this.usedTimes = 1, this.program = g, this.vertexShader = c, this.fragmentShader = u, this
    }
}(),THREE.WebGLPrograms = function (e, t) {
    var r = [], n = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        },
        i = "precision supportsVertexTextures map envMap envMapMode lightMap aoMap emissiveMap bumpMap normalMap displacementMap specularMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals maxDirLights maxPointLights maxSpotLights maxHemiLights maxShadows shadowMapEnabled pointLightShadows shadowMapType shadowMapDebug alphaTest metal doubleSided flipSided".split(" ");
    this.getParameters = function (r, i, o, a) {
        var s, h, c, u, l, p = n[r.type];
        s = l = u = c = h = 0;
        for (var d = i.length; d > s; s++) {
            var f = i[s];
            !1 !== f.visible && (f instanceof THREE.DirectionalLight && h++, f instanceof THREE.PointLight && c++, f instanceof THREE.SpotLight && u++, f instanceof THREE.HemisphereLight && l++)
        }
        for (var f = s = d = 0, E = i.length; E > f; f++) {
            var m = i[f];
            m.castShadow && ((m instanceof THREE.SpotLight || m instanceof THREE.DirectionalLight) && d++, m instanceof THREE.PointLight && (d++, s++))
        }
        return i = d, t.floatVertexTextures && a && a.skeleton && a.skeleton.useVertexTexture ? d = 1024 : (d = Math.floor((t.maxVertexUniforms - 20) / 4), void 0 !== a && a instanceof THREE.SkinnedMesh && (d = Math.min(a.skeleton.bones.length, d), d < a.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + a.skeleton.bones.length + ", this GPU supports just " + d + " (try OpenGL instead of ANGLE)"))), f = e.getPrecision(), null !== r.precision && (f = t.getMaxPrecision(r.precision), f !== r.precision && console.warn("THREE.WebGLRenderer.initMaterial:", r.precision, "not supported, using", f, "instead.")), {
            shaderID: p,
            precision: f,
            supportsVertexTextures: t.vertexTextures,
            map: !!r.map,
            envMap: !!r.envMap,
            envMapMode: r.envMap && r.envMap.mapping,
            lightMap: !!r.lightMap,
            aoMap: !!r.aoMap,
            emissiveMap: !!r.emissiveMap,
            bumpMap: !!r.bumpMap,
            normalMap: !!r.normalMap,
            displacementMap: !!r.displacementMap,
            specularMap: !!r.specularMap,
            alphaMap: !!r.alphaMap,
            combine: r.combine,
            vertexColors: r.vertexColors,
            fog: o,
            useFog: r.fog,
            fogExp: o instanceof THREE.FogExp2,
            flatShading: r.shading === THREE.FlatShading,
            sizeAttenuation: r.sizeAttenuation,
            logarithmicDepthBuffer: t.logarithmicDepthBuffer,
            skinning: r.skinning,
            maxBones: d,
            useVertexTexture: t.floatVertexTextures && a && a.skeleton && a.skeleton.useVertexTexture,
            morphTargets: r.morphTargets,
            morphNormals: r.morphNormals,
            maxMorphTargets: e.maxMorphTargets,
            maxMorphNormals: e.maxMorphNormals,
            maxDirLights: h,
            maxPointLights: c,
            maxSpotLights: u,
            maxHemiLights: l,
            maxShadows: i,
            pointLightShadows: s,
            shadowMapEnabled: e.shadowMap.enabled && a.receiveShadow && i > 0,
            shadowMapType: e.shadowMap.type,
            shadowMapDebug: e.shadowMap.debug,
            alphaTest: r.alphaTest,
            metal: r.metal,
            doubleSided: r.side === THREE.DoubleSide,
            flipSided: r.side === THREE.BackSide
        }
    }, this.getProgramCode = function (e, t) {
        var r = [];
        if (t.shaderID ? r.push(t.shaderID) : (r.push(e.fragmentShader), r.push(e.vertexShader)), void 0 !== e.defines) for (var n in e.defines) r.push(n), r.push(e.defines[n]);
        for (n = 0; n < i.length; n++) {
            var o = i[n];
            r.push(o), r.push(t[o])
        }
        return r.join()
    }, this.acquireProgram = function (t, n, i) {
        for (var o, a = 0, s = r.length; s > a; a++) {
            var h = r[a];
            if (h.code === i) {
                o = h, ++o.usedTimes;
                break
            }
        }
        return void 0 === o && (o = new THREE.WebGLProgram(e, i, t, n), r.push(o)), o
    }, this.releaseProgram = function (e) {
        if (0 === --e.usedTimes) {
            var t = r.indexOf(e);
            r[t] = r[r.length - 1], r.pop(), e.destroy()
        }
    }, this.programs = r
},THREE.WebGLProperties = function () {
    var e = {};
    this.get = function (t) {
        t = t.uuid;
        var r = e[t];
        return void 0 === r && (r = {}, e[t] = r), r
    }, this["delete"] = function (t) {
        delete e[t.uuid]
    }, this.clear = function () {
        e = {}
    }
},THREE.WebGLShader = function () {
    function e(e) {
        e = e.split("\n");
        for (var t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
        return e.join("\n")
    }

    return function (t, r, n) {
        var i = t.createShader(r);
        return t.shaderSource(i, n), t.compileShader(i), !1 === t.getShaderParameter(i, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", r === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(i), e(n)), i
    }
}(),THREE.WebGLShadowMap = function (e, t, r) {
    function n(e, t, r, n) {
        var i = e.geometry, o = null, o = p, a = e.customDepthMaterial;
        return r && (o = d, a = e.customDistanceMaterial), a ? o = a : (e = e instanceof THREE.SkinnedMesh && t.skinning, a = 0, void 0 !== i.morphTargets && 0 < i.morphTargets.length && t.morphTargets && (a |= 1), e && (a |= 2), o = o[a]), o.visible = t.visible, o.wireframe = t.wireframe, o.wireframeLinewidth = t.wireframeLinewidth, r && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(n), o
    }

    function i(e, t) {
        if (!1 !== e.visible) {
            (e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && e.castShadow && (!1 === e.frustumCulled || !0 === s.intersectsObject(e)) && !0 === e.material.visible && (e.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), l.push(e));
            for (var r = e.children, n = 0, o = r.length; o > n; n++) i(r[n], t)
        }
    }

    var o = e.context, a = e.state, s = new THREE.Frustum, h = new THREE.Matrix4;
    new THREE.Vector3, new THREE.Vector3;
    for (var c = new THREE.Vector3, u = new THREE.Vector3, l = [], p = Array(4), d = Array(4), f = [new THREE.Vector3(1, 0, 0), new THREE.Vector3((-1), 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, (-1)), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, (-1), 0)], E = [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, (-1))], m = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], g = new THREE.Vector4, T = THREE.ShaderLib.depthRGBA, v = THREE.UniformsUtils.clone(T.uniforms), y = THREE.ShaderLib.distanceRGBA, R = THREE.UniformsUtils.clone(y.uniforms), x = 0; 4 !== x; ++x) {
        var H = 0 !== (1 & x), b = 0 !== (2 & x), w = new THREE.ShaderMaterial({
            uniforms: v,
            vertexShader: T.vertexShader,
            fragmentShader: T.fragmentShader,
            morphTargets: H,
            skinning: b
        });
        w._shadowPass = !0, p[x] = w, H = new THREE.ShaderMaterial({
            uniforms: R,
            vertexShader: y.vertexShader,
            fragmentShader: y.fragmentShader,
            morphTargets: H,
            skinning: b
        }), H._shadowPass = !0, d[x] = H
    }
    var M = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = THREE.PCFShadowMap, this.cullFace = THREE.CullFaceFront, this.render = function (p) {
        var d, T;
        if (!1 !== M.enabled && (!1 !== M.autoUpdate || !1 !== M.needsUpdate)) {
            o.clearColor(1, 1, 1, 1), a.disable(o.BLEND), a.enable(o.CULL_FACE), o.frontFace(o.CCW), o.cullFace(M.cullFace === THREE.CullFaceFront ? o.FRONT : o.BACK), a.setDepthTest(!0), e.getViewport(g);
            for (var v = 0, y = t.length; y > v; v++) {
                var R = t[v];
                if (!0 === R.castShadow) {
                    var x = R.shadow, H = x.camera, b = x.mapSize;
                    if (R instanceof THREE.PointLight) {
                        d = 6, T = !0;
                        var w = b.x / 4, S = b.y / 2;
                        m[0].set(2 * w, S, w, S), m[1].set(0, S, w, S), m[2].set(3 * w, S, w, S), m[3].set(w, S, w, S), m[4].set(3 * w, 0, w, S), m[5].set(w, 0, w, S)
                    } else d = 1, T = !1;
                    for (null === x.map && (w = THREE.LinearFilter, M.type === THREE.PCFSoftShadowMap && (w = THREE.NearestFilter), x.map = new THREE.WebGLRenderTarget(b.x, b.y, {
                        minFilter: w,
                        magFilter: w,
                        format: THREE.RGBAFormat
                    }), x.matrix = new THREE.Matrix4, R instanceof THREE.SpotLight && (H.aspect = b.x / b.y), H.updateProjectionMatrix()), b = x.map, x = x.matrix, u.setFromMatrixPosition(R.matrixWorld), H.position.copy(u), e.setRenderTarget(b), e.clear(), b = 0; d > b; b++) for (T ? (c.copy(H.position), c.add(f[b]), H.up.copy(E[b]), H.lookAt(c), w = m[b], e.setViewport(w.x, w.y, w.z, w.w)) : (c.setFromMatrixPosition(R.target.matrixWorld), H.lookAt(c)), H.updateMatrixWorld(), H.matrixWorldInverse.getInverse(H.matrixWorld), x.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), x.multiply(H.projectionMatrix), x.multiply(H.matrixWorldInverse), h.multiplyMatrices(H.projectionMatrix, H.matrixWorldInverse), s.setFromMatrix(h), l.length = 0, i(p, H), w = 0, S = l.length; S > w; w++) {
                        var _ = l[w], C = r.update(_), A = _.material;
                        if (A instanceof THREE.MeshFaceMaterial) for (var L = C.groups, A = A.materials, P = 0, k = L.length; k > P; P++) {
                            var D = L[P], F = A[D.materialIndex];
                            !0 === F.visible && (F = n(_, F, T, u), e.renderBufferDirect(H, t, null, C, F, _, D))
                        } else F = n(_, A, T, u), e.renderBufferDirect(H, t, null, C, F, _, null)
                    }
                    e.resetGLState()
                }
            }
            e.setViewport(g.x, g.y, g.z, g.w), p = e.getClearColor(), d = e.getClearAlpha(), e.setClearColor(p, d), a.enable(o.BLEND), M.cullFace === THREE.CullFaceFront && o.cullFace(o.BACK), e.resetGLState(), M.needsUpdate = !1
        }
    }
},THREE.WebGLState = function (e, t, r) {
    var n = this, i = new Uint8Array(16), o = new Uint8Array(16), a = new Uint8Array(16), s = {}, h = null, c = null,
        u = null, l = null, p = null, d = null, f = null, E = null, m = null, g = null, T = null, v = null, y = null,
        R = null, x = null, H = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), b = void 0, w = {};
    this.init = function () {
        e.clearColor(0, 0, 0, 1), e.clearDepth(1), e.clearStencil(0), this.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.frontFace(e.CCW), e.cullFace(e.BACK), this.enable(e.CULL_FACE), this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)
    }, this.initAttributes = function () {
        for (var e = 0, t = i.length; t > e; e++) i[e] = 0
    }, this.enableAttribute = function (r) {
        i[r] = 1, 0 === o[r] && (e.enableVertexAttribArray(r), o[r] = 1), 0 !== a[r] && (t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(r, 0), a[r] = 0)
    }, this.enableAttributeAndDivisor = function (t, r, n) {
        i[t] = 1, 0 === o[t] && (e.enableVertexAttribArray(t), o[t] = 1), a[t] !== r && (n.vertexAttribDivisorANGLE(t, r), a[t] = r)
    }, this.disableUnusedAttributes = function () {
        for (var t = 0, r = o.length; r > t; t++) o[t] !== i[t] && (e.disableVertexAttribArray(t), o[t] = 0)
    }, this.enable = function (t) {
        !0 !== s[t] && (e.enable(t), s[t] = !0)
    }, this.disable = function (t) {
        !1 !== s[t] && (e.disable(t), s[t] = !1)
    }, this.getCompressedTextureFormats = function () {
        if (null === h && (h = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc"))) for (var r = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), n = 0; n < r.length; n++) h.push(r[n]);
        return h
    }, this.setBlending = function (t, n, i, o, a, s, h) {
        t !== c && (t === THREE.NoBlending ? this.disable(e.BLEND) : t === THREE.AdditiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === THREE.SubtractiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === THREE.MultiplyBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : t === THREE.CustomBlending ? this.enable(e.BLEND) : (this.enable(e.BLEND), e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), c = t), t === THREE.CustomBlending ? (a = a || n, s = s || i, h = h || o, (n !== u || a !== d) && (e.blendEquationSeparate(r(n), r(a)), u = n, d = a), (i !== l || o !== p || s !== f || h !== E) && (e.blendFuncSeparate(r(i), r(o), r(s), r(h)), l = i, p = o, f = s, E = h)) : E = f = d = p = l = u = null
    }, this.setDepthFunc = function (t) {
        if (m !== t) {
            if (t) switch (t) {
                case THREE.NeverDepth:
                    e.depthFunc(e.NEVER);
                    break;
                case THREE.AlwaysDepth:
                    e.depthFunc(e.ALWAYS);
                    break;
                case THREE.LessDepth:
                    e.depthFunc(e.LESS);
                    break;
                case THREE.LessEqualDepth:
                    e.depthFunc(e.LEQUAL);
                    break;
                case THREE.EqualDepth:
                    e.depthFunc(e.EQUAL);
                    break;
                case THREE.GreaterEqualDepth:
                    e.depthFunc(e.GEQUAL);
                    break;
                case THREE.GreaterDepth:
                    e.depthFunc(e.GREATER);
                    break;
                case THREE.NotEqualDepth:
                    e.depthFunc(e.NOTEQUAL);
                    break;
                default:
                    e.depthFunc(e.LEQUAL)
            } else e.depthFunc(e.LEQUAL);
            m = t
        }
    }, this.setDepthTest = function (t) {
        t ? this.enable(e.DEPTH_TEST) : this.disable(e.DEPTH_TEST)
    }, this.setDepthWrite = function (t) {
        g !== t && (e.depthMask(t), g = t)
    }, this.setColorWrite = function (t) {
        T !== t && (e.colorMask(t, t, t, t), T = t)
    }, this.setFlipSided = function (t) {
        v !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), v = t)
    }, this.setLineWidth = function (t) {
        t !== y && (e.lineWidth(t), y = t)
    }, this.setPolygonOffset = function (t, r, n) {
        t ? this.enable(e.POLYGON_OFFSET_FILL) : this.disable(e.POLYGON_OFFSET_FILL), !t || R === r && x === n || (e.polygonOffset(r, n), R = r, x = n)
    }, this.setScissorTest = function (t) {
        t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
    }, this.activeTexture = function (t) {
        void 0 === t && (t = e.TEXTURE0 + H - 1), b !== t && (e.activeTexture(t), b = t)
    }, this.bindTexture = function (t, r) {
        void 0 === b && n.activeTexture();
        var i = w[b];
        void 0 === i && (i = {
            type: void 0,
            texture: void 0
        }, w[b] = i), (i.type !== t || i.texture !== r) && (e.bindTexture(t, r), i.type = t, i.texture = r)
    }, this.compressedTexImage2D = function () {
        try {
            e.compressedTexImage2D.apply(e, arguments)
        } catch (t) {
            console.error(t)
        }
    }, this.texImage2D = function () {
        try {
            e.texImage2D.apply(e, arguments)
        } catch (t) {
            console.error(t)
        }
    }, this.reset = function () {
        for (var t = 0; t < o.length; t++) 1 === o[t] && (e.disableVertexAttribArray(t), o[t] = 0);
        s = {}, v = T = g = c = h = null
    }
},THREE.LensFlarePlugin = function (e, t) {
    var r, n, i, o, a, s, h, c, u, l, p, d, f, E, m, g, T = e.context, v = e.state;
    this.render = function (y, R, x, H) {
        if (0 !== t.length) {
            y = new THREE.Vector3;
            var b = H / x, w = .5 * x, M = .5 * H, S = 16 / H, _ = new THREE.Vector2(S * b, S),
                C = new THREE.Vector3(1, 1, 0), A = new THREE.Vector2(1, 1);
            if (void 0 === f) {
                var S = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                    L = new Uint16Array([0, 1, 2, 0, 2, 3]);
                p = T.createBuffer(), d = T.createBuffer(), T.bindBuffer(T.ARRAY_BUFFER, p), T.bufferData(T.ARRAY_BUFFER, S, T.STATIC_DRAW), T.bindBuffer(T.ELEMENT_ARRAY_BUFFER, d), T.bufferData(T.ELEMENT_ARRAY_BUFFER, L, T.STATIC_DRAW), m = T.createTexture(), g = T.createTexture(), v.bindTexture(T.TEXTURE_2D, m), T.texImage2D(T.TEXTURE_2D, 0, T.RGB, 16, 16, 0, T.RGB, T.UNSIGNED_BYTE, null), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_WRAP_S, T.CLAMP_TO_EDGE), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_WRAP_T, T.CLAMP_TO_EDGE), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MAG_FILTER, T.NEAREST), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MIN_FILTER, T.NEAREST), v.bindTexture(T.TEXTURE_2D, g), T.texImage2D(T.TEXTURE_2D, 0, T.RGBA, 16, 16, 0, T.RGBA, T.UNSIGNED_BYTE, null), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_WRAP_S, T.CLAMP_TO_EDGE), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_WRAP_T, T.CLAMP_TO_EDGE), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MAG_FILTER, T.NEAREST), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MIN_FILTER, T.NEAREST);
                var S = (E = 0 < T.getParameter(T.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
                        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                        fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                    } : {
                        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                        fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                    }, L = T.createProgram(), P = T.createShader(T.FRAGMENT_SHADER), k = T.createShader(T.VERTEX_SHADER),
                    D = "precision " + e.getPrecision() + " float;\n";
                T.shaderSource(P, D + S.fragmentShader), T.shaderSource(k, D + S.vertexShader), T.compileShader(P), T.compileShader(k), T.attachShader(L, P), T.attachShader(L, k), T.linkProgram(L), f = L, u = T.getAttribLocation(f, "position"), l = T.getAttribLocation(f, "uv"), r = T.getUniformLocation(f, "renderType"), n = T.getUniformLocation(f, "map"), i = T.getUniformLocation(f, "occlusionMap"), o = T.getUniformLocation(f, "opacity"), a = T.getUniformLocation(f, "color"), s = T.getUniformLocation(f, "scale"), h = T.getUniformLocation(f, "rotation"), c = T.getUniformLocation(f, "screenPosition")
            }
            for (T.useProgram(f), v.initAttributes(), v.enableAttribute(u), v.enableAttribute(l), v.disableUnusedAttributes(), T.uniform1i(i, 0), T.uniform1i(n, 1), T.bindBuffer(T.ARRAY_BUFFER, p), T.vertexAttribPointer(u, 2, T.FLOAT, !1, 16, 0), T.vertexAttribPointer(l, 2, T.FLOAT, !1, 16, 8), T.bindBuffer(T.ELEMENT_ARRAY_BUFFER, d), v.disable(T.CULL_FACE), T.depthMask(!1), L = 0, P = t.length; P > L; L++) if (S = 16 / H, _.set(S * b, S), k = t[L], y.set(k.matrixWorld.elements[12], k.matrixWorld.elements[13], k.matrixWorld.elements[14]), y.applyMatrix4(R.matrixWorldInverse), y.applyProjection(R.projectionMatrix), C.copy(y), A.x = C.x * w + w, A.y = C.y * M + M, E || 0 < A.x && A.x < x && 0 < A.y && A.y < H) {
                v.activeTexture(T.TEXTURE0), v.bindTexture(T.TEXTURE_2D, null), v.activeTexture(T.TEXTURE1), v.bindTexture(T.TEXTURE_2D, m), T.copyTexImage2D(T.TEXTURE_2D, 0, T.RGB, A.x - 8, A.y - 8, 16, 16, 0), T.uniform1i(r, 0), T.uniform2f(s, _.x, _.y), T.uniform3f(c, C.x, C.y, C.z), v.disable(T.BLEND), v.enable(T.DEPTH_TEST), T.drawElements(T.TRIANGLES, 6, T.UNSIGNED_SHORT, 0), v.activeTexture(T.TEXTURE0), v.bindTexture(T.TEXTURE_2D, g), T.copyTexImage2D(T.TEXTURE_2D, 0, T.RGBA, A.x - 8, A.y - 8, 16, 16, 0), T.uniform1i(r, 1), v.disable(T.DEPTH_TEST), v.activeTexture(T.TEXTURE1), v.bindTexture(T.TEXTURE_2D, m), T.drawElements(T.TRIANGLES, 6, T.UNSIGNED_SHORT, 0), k.positionScreen.copy(C), k.customUpdateCallback ? k.customUpdateCallback(k) : k.updateLensFlares(), T.uniform1i(r, 2), v.enable(T.BLEND);
                for (var D = 0, F = k.lensFlares.length; F > D; D++) {
                    var O = k.lensFlares[D];
                    .001 < O.opacity && .001 < O.scale && (C.x = O.x, C.y = O.y, C.z = O.z, S = O.size * O.scale / H, _.x = S * b, _.y = S, T.uniform3f(c, C.x, C.y, C.z), T.uniform2f(s, _.x, _.y), T.uniform1f(h, O.rotation), T.uniform1f(o, O.opacity), T.uniform3f(a, O.color.r, O.color.g, O.color.b), v.setBlending(O.blending, O.blendEquation, O.blendSrc, O.blendDst), e.setTexture(O.texture, 1), T.drawElements(T.TRIANGLES, 6, T.UNSIGNED_SHORT, 0))
                }
            }
            v.enable(T.CULL_FACE), v.enable(T.DEPTH_TEST), T.depthMask(!0), e.resetGLState()
        }
    }
},THREE.SpritePlugin = function (e, t) {
    function r(e, t) {
        return e.z !== t.z ? t.z - e.z : t.id - e.id
    }

    var n, i, o, a, s, h, c, u, l, p, d, f, E, m, g, T, v, y, R, x, H, b = e.context, w = e.state,
        M = new THREE.Vector3, S = new THREE.Quaternion, _ = new THREE.Vector3;
    this.render = function (C, A) {
        if (0 !== t.length) {
            if (void 0 === x) {
                var L = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                    P = new Uint16Array([0, 1, 2, 0, 2, 3]);
                y = b.createBuffer(), R = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, y), b.bufferData(b.ARRAY_BUFFER, L, b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, R), b.bufferData(b.ELEMENT_ARRAY_BUFFER, P, b.STATIC_DRAW);
                var L = b.createProgram(), P = b.createShader(b.VERTEX_SHADER), k = b.createShader(b.FRAGMENT_SHADER);
                b.shaderSource(P, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")), b.shaderSource(k, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")), b.compileShader(P), b.compileShader(k), b.attachShader(L, P), b.attachShader(L, k), b.linkProgram(L), x = L, T = b.getAttribLocation(x, "position"), v = b.getAttribLocation(x, "uv"), n = b.getUniformLocation(x, "uvOffset"), i = b.getUniformLocation(x, "uvScale"), o = b.getUniformLocation(x, "rotation"), a = b.getUniformLocation(x, "scale"), s = b.getUniformLocation(x, "color"), h = b.getUniformLocation(x, "map"), c = b.getUniformLocation(x, "opacity"), u = b.getUniformLocation(x, "modelViewMatrix"), l = b.getUniformLocation(x, "projectionMatrix"), p = b.getUniformLocation(x, "fogType"), d = b.getUniformLocation(x, "fogDensity"), f = b.getUniformLocation(x, "fogNear"), E = b.getUniformLocation(x, "fogFar"), m = b.getUniformLocation(x, "fogColor"), g = b.getUniformLocation(x, "alphaTest"), L = document.createElement("canvas"), L.width = 8, L.height = 8, P = L.getContext("2d"), P.fillStyle = "white", P.fillRect(0, 0, 8, 8), H = new THREE.Texture(L), H.needsUpdate = !0
            }
            b.useProgram(x), w.initAttributes(), w.enableAttribute(T), w.enableAttribute(v), w.disableUnusedAttributes(), w.disable(b.CULL_FACE), w.enable(b.BLEND), b.bindBuffer(b.ARRAY_BUFFER, y), b.vertexAttribPointer(T, 2, b.FLOAT, !1, 16, 0), b.vertexAttribPointer(v, 2, b.FLOAT, !1, 16, 8), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, R), b.uniformMatrix4fv(l, !1, A.projectionMatrix.elements), w.activeTexture(b.TEXTURE0), b.uniform1i(h, 0), P = L = 0, (k = C.fog) ? (b.uniform3f(m, k.color.r, k.color.g, k.color.b), k instanceof THREE.Fog ? (b.uniform1f(f, k.near), b.uniform1f(E, k.far), b.uniform1i(p, 1), P = L = 1) : k instanceof THREE.FogExp2 && (b.uniform1f(d, k.density), b.uniform1i(p, 2), P = L = 2)) : (b.uniform1i(p, 0), P = L = 0);
            for (var k = 0, D = t.length; D > k; k++) {
                var F = t[k];
                F.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, F.matrixWorld), F.z = -F.modelViewMatrix.elements[14]
            }
            t.sort(r);
            for (var O = [], k = 0, D = t.length; D > k; k++) {
                var F = t[k], V = F.material;
                b.uniform1f(g, V.alphaTest), b.uniformMatrix4fv(u, !1, F.modelViewMatrix.elements), F.matrixWorld.decompose(M, S, _), O[0] = _.x, O[1] = _.y, F = 0, C.fog && V.fog && (F = P), L !== F && (b.uniform1i(p, F), L = F), null !== V.map ? (b.uniform2f(n, V.map.offset.x, V.map.offset.y), b.uniform2f(i, V.map.repeat.x, V.map.repeat.y)) : (b.uniform2f(n, 0, 0), b.uniform2f(i, 1, 1)), b.uniform1f(c, V.opacity), b.uniform3f(s, V.color.r, V.color.g, V.color.b), b.uniform1f(o, V.rotation), b.uniform2fv(a, O), w.setBlending(V.blending, V.blendEquation, V.blendSrc, V.blendDst), w.setDepthTest(V.depthTest), w.setDepthWrite(V.depthWrite), V.map && V.map.image && V.map.image.width ? e.setTexture(V.map, 0) : e.setTexture(H, 0), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0)
            }
            w.enable(b.CULL_FACE), e.resetGLState()
        }
    }
},THREE.CurveUtils = {
    tangentQuadraticBezier: function (e, t, r, n) {
        return 2 * (1 - e) * (r - t) + 2 * e * (n - r)
    }, tangentCubicBezier: function (e, t, r, n, i) {
        return -3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * n * (1 - e) - 3 * e * e * n + 3 * e * e * i
    }, tangentSpline: function (e, t, r, n, i) {
        return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + (-6 * e * e + 6 * e) + (3 * e * e - 2 * e)
    }, interpolate: function (e, t, r, n, i) {
        e = .5 * (r - e), n = .5 * (n - t);
        var o = i * i;
        return (2 * t - 2 * r + e + n) * i * o + (-3 * t + 3 * r - 2 * e - n) * o + e * i + t
    }
},THREE.GeometryUtils = {
    merge: function (e, t, r) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var n;
        t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), n = t.matrix, t = t.geometry), e.merge(t, n, r)
    }, center: function (e) {
        return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
    }
},THREE.ImageUtils = {
    crossOrigin: void 0, loadTexture: function (e, t, r, n) {
        console.warn("THREE.ImageUtils.loadTexture is being deprecated. Use THREE.TextureLoader() instead.");
        var i = new THREE.TextureLoader;
        return i.setCrossOrigin(this.crossOrigin), e = i.load(e, r, void 0, n), t && (e.mapping = t), e
    }, loadTextureCube: function (e, t, r, n) {
        console.warn("THREE.ImageUtils.loadTextureCube is being deprecated. Use THREE.CubeTextureLoader() instead.");
        var i = new THREE.CubeTextureLoader;
        return i.setCrossOrigin(this.crossOrigin), e = i.load(e, r, void 0, n), t && (e.mapping = t), e
    }, loadCompressedTexture: function () {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }, loadCompressedTextureCube: function () {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
},THREE.SceneUtils = {
    createMultiMaterialObject: function (e, t) {
        for (var r = new THREE.Group, n = 0, i = t.length; i > n; n++) r.add(new THREE.Mesh(e, t[n]));
        return r
    }, detach: function (e, t, r) {
        e.applyMatrix(t.matrixWorld), t.remove(e), r.add(e)
    }, attach: function (e, t, r) {
        var n = new THREE.Matrix4;
        n.getInverse(r.matrixWorld), e.applyMatrix(n), t.remove(e), r.add(e)
    }
},THREE.ShapeUtils = {
    area: function (e) {
        for (var t = e.length, r = 0, n = t - 1, i = 0; t > i; n = i++) r += e[n].x * e[i].y - e[i].x * e[n].y;
        return .5 * r
    }, triangulate: function () {
        return function (e, t) {
            var r = e.length;
            if (3 > r) return null;
            var n, i, o, a = [], s = [], h = [];
            if (0 < THREE.ShapeUtils.area(e)) for (i = 0; r > i; i++) s[i] = i; else for (i = 0; r > i; i++) s[i] = r - 1 - i;
            var c = 2 * r;
            for (i = r - 1; r > 2;) {
                if (0 >= c--) {
                    console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                    break
                }
                n = i, n >= r && (n = 0), i = n + 1, i >= r && (i = 0), o = i + 1, o >= r && (o = 0);
                var u;
                e:{
                    var l = u = void 0, p = void 0, d = void 0, f = void 0, E = void 0, m = void 0, g = void 0,
                        T = void 0, l = e[s[n]].x, p = e[s[n]].y, d = e[s[i]].x, f = e[s[i]].y, E = e[s[o]].x,
                        m = e[s[o]].y;
                    if (Number.EPSILON > (d - l) * (m - p) - (f - p) * (E - l)) u = !1; else {
                        var v = void 0, y = void 0, R = void 0, x = void 0, H = void 0, b = void 0, w = void 0,
                            M = void 0, S = void 0, _ = void 0, S = M = w = T = g = void 0, v = E - d, y = m - f,
                            R = l - E, x = p - m, H = d - l, b = f - p;
                        for (u = 0; r > u; u++) if (g = e[s[u]].x, T = e[s[u]].y, !(g === l && T === p || g === d && T === f || g === E && T === m) && (w = g - l, M = T - p, S = g - d, _ = T - f, g -= E, T -= m, S = v * _ - y * S, w = H * M - b * w, M = R * T - x * g, S >= -Number.EPSILON && M >= -Number.EPSILON && w >= -Number.EPSILON)) {
                            u = !1;
                            break e
                        }
                        u = !0
                    }
                }
                if (u) {
                    for (a.push([e[s[n]], e[s[i]], e[s[o]]]), h.push([s[n], s[i], s[o]]), n = i, o = i + 1; r > o; n++, o++) s[n] = s[o];
                    r--, c = 2 * r
                }
            }
            return t ? h : a
        }
    }(), triangulateShape: function (e, t) {
        function r(e, t, r) {
            return e.x !== t.x ? e.x < t.x ? e.x <= r.x && r.x <= t.x : t.x <= r.x && r.x <= e.x : e.y < t.y ? e.y <= r.y && r.y <= t.y : t.y <= r.y && r.y <= e.y
        }

        function n(e, t, n, i, o) {
            var a = t.x - e.x, s = t.y - e.y, h = i.x - n.x, c = i.y - n.y, u = e.x - n.x, l = e.y - n.y,
                p = s * h - a * c, d = s * u - a * l;
            if (Math.abs(p) > Number.EPSILON) {
                if (p > 0) {
                    if (0 > d || d > p) return [];
                    if (h = c * u - h * l, 0 > h || h > p) return []
                } else {
                    if (d > 0 || p > d) return [];
                    if (h = c * u - h * l, h > 0 || p > h) return []
                }
                return 0 === h ? !o || 0 !== d && d !== p ? [e] : [] : h === p ? !o || 0 !== d && d !== p ? [t] : [] : 0 === d ? [n] : d === p ? [i] : (o = h / p, [{
                    x: e.x + o * a,
                    y: e.y + o * s
                }])
            }
            return 0 !== d || c * u !== h * l ? [] : (s = 0 === a && 0 === s, h = 0 === h && 0 === c, s && h ? e.x !== n.x || e.y !== n.y ? [] : [e] : s ? r(n, i, e) ? [e] : [] : h ? r(e, t, n) ? [n] : [] : (0 !== a ? (e.x < t.x ? (a = e, h = e.x, s = t, e = t.x) : (a = t, h = t.x, s = e, e = e.x), n.x < i.x ? (t = n, p = n.x, c = i, n = i.x) : (t = i, p = i.x, c = n, n = n.x)) : (e.y < t.y ? (a = e, h = e.y, s = t, e = t.y) : (a = t, h = t.y, s = e, e = e.y), n.y < i.y ? (t = n, p = n.y, c = i, n = i.y) : (t = i, p = i.y, c = n, n = n.y)), p >= h ? p > e ? [] : e === p ? o ? [] : [t] : n >= e ? [t, s] : [t, c] : h > n ? [] : h === n ? o ? [] : [a] : n >= e ? [a, s] : [a, c]))
        }

        function i(e, t, r, n) {
            var i = t.x - e.x, o = t.y - e.y;
            t = r.x - e.x, r = r.y - e.y;
            var a = n.x - e.x;
            return n = n.y - e.y, e = i * r - o * t, i = i * n - o * a, Math.abs(e) > Number.EPSILON ? (t = a * r - n * t, e > 0 ? i >= 0 && t >= 0 : i >= 0 || t >= 0) : i > 0
        }

        var o, a, s, h, c, u = {};
        for (s = e.concat(), o = 0, a = t.length; a > o; o++) Array.prototype.push.apply(s, t[o]);
        for (o = 0, a = s.length; a > o; o++) c = s[o].x + ":" + s[o].y, void 0 !== u[c] && console.warn("THREE.Shape: Duplicate point", c), u[c] = o;
        o = function (e, t) {
            function r(e, t) {
                var r = m.length - 1, n = e - 1;
                0 > n && (n = r);
                var o = e + 1;
                return o > r && (o = 0), !!(r = i(m[e], m[n], m[o], s[t])) && (r = s.length - 1, n = t - 1, 0 > n && (n = r), o = t + 1, o > r && (o = 0), !!(r = i(s[t], s[n], s[o], m[e])))
            }

            function o(e, t) {
                var r, i;
                for (r = 0; r < m.length; r++) if (i = r + 1, i %= m.length, i = n(e, t, m[r], m[i], !0), 0 < i.length) return !0;
                return !1
            }

            function a(e, r) {
                var i, o, a, s;
                for (i = 0; i < g.length; i++) for (o = t[g[i]], a = 0; a < o.length; a++) if (s = a + 1, s %= o.length, s = n(e, r, o[a], o[s], !0), 0 < s.length) return !0;
                return !1
            }

            var s, h, c, u, l, p, d, f, E, m = e.concat(), g = [], T = [], v = 0;
            for (h = t.length; h > v; v++) g.push(v);
            d = 0;
            for (var y = 2 * g.length; 0 < g.length;) {
                if (y--, 0 > y) {
                    console.log("Infinite Loop! Holes left:" + g.length + ", Probably Hole outside Shape!");
                    break
                }
                for (c = d; c < m.length; c++) {
                    for (u = m[c], h = -1, v = 0; v < g.length; v++) if (l = g[v], p = u.x + ":" + u.y + ":" + l, void 0 === T[p]) {
                        for (s = t[l], f = 0; f < s.length; f++) if (l = s[f], r(c, f) && !o(u, l) && !a(u, l)) {
                            h = f, g.splice(v, 1), d = m.slice(0, c + 1), l = m.slice(c), f = s.slice(h), E = s.slice(0, h + 1), m = d.concat(f).concat(E).concat(l), d = c;
                            break
                        }
                        if (h >= 0) break;
                        T[p] = !0
                    }
                    if (h >= 0) break
                }
            }
            return m
        }(e, t);
        var l = THREE.ShapeUtils.triangulate(o, !1);
        for (o = 0, a = l.length; a > o; o++) for (h = l[o], s = 0; 3 > s; s++) c = h[s].x + ":" + h[s].y, c = u[c], void 0 !== c && (h[s] = c);
        return l.concat()
    }, isClockWise: function (e) {
        return 0 > THREE.ShapeUtils.area(e)
    }, b2: function () {
        return function (e, t, r, n) {
            var i = 1 - e;
            return i * i * t + 2 * (1 - e) * e * r + e * e * n
        }
    }(), b3: function () {
        return function (e, t, r, n, i) {
            var o = 1 - e, a = 1 - e;
            return o * o * o * t + 3 * a * a * e * r + 3 * (1 - e) * e * e * n + e * e * e * i
        }
    }()
},THREE.Audio = function (e) {
    THREE.Object3D.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.panner = this.context.createPanner(), this.panner.connect(this.gain), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1
},THREE.Audio.prototype = Object.create(THREE.Object3D.prototype),
THREE.Audio.prototype.constructor = THREE.Audio,THREE.Audio.prototype.load = function (e) {
    var t = this, r = new XMLHttpRequest;
    return r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function (e) {
        t.context.decodeAudioData(this.response, function (e) {
            t.source.buffer = e, t.autoplay && t.play()
        })
    }, r.send(), this
},THREE.Audio.prototype.play = function () {
    if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing."); else {
        var e = this.context.createBufferSource();
        e.buffer = this.source.buffer, e.loop = this.source.loop, e.onended = this.source.onended, e.start(0, this.startTime), e.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = e, this.connect()
    }
},THREE.Audio.prototype.pause = function () {
    this.source.stop(), this.startTime = this.context.currentTime
},THREE.Audio.prototype.stop = function () {
    this.source.stop(), this.startTime = 0
},THREE.Audio.prototype.connect = function () {
    void 0 !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.panner)) : this.source.connect(this.panner)
},THREE.Audio.prototype.disconnect = function () {
    void 0 !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.panner)) : this.source.disconnect(this.panner)
},THREE.Audio.prototype.setFilter = function (e) {
    !0 === this.isPlaying ? (this.disconnect(), this.filter = e, this.connect()) : this.filter = e
},THREE.Audio.prototype.getFilter = function () {
    return this.filter
},THREE.Audio.prototype.setPlaybackRate = function (e) {
    this.playbackRate = e, !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate)
},THREE.Audio.prototype.getPlaybackRate = function () {
    return this.playbackRate
},THREE.Audio.prototype.onEnded = function () {
    this.isPlaying = !1
},THREE.Audio.prototype.setLoop = function (e) {
    this.source.loop = e
},THREE.Audio.prototype.getLoop = function () {
    return this.source.loop
},THREE.Audio.prototype.setRefDistance = function (e) {
    this.panner.refDistance = e
},THREE.Audio.prototype.getRefDistance = function () {
    return this.panner.refDistance
},THREE.Audio.prototype.setRolloffFactor = function (e) {
    this.panner.rolloffFactor = e
},THREE.Audio.prototype.getRolloffFactor = function () {
    return this.panner.rolloffFactor
},THREE.Audio.prototype.setVolume = function (e) {
    this.gain.gain.value = e
},THREE.Audio.prototype.getVolume = function () {
    return this.gain.gain.value
},THREE.Audio.prototype.updateMatrixWorld = function () {
    var e = new THREE.Vector3;
    return function (t) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
    }
}(),THREE.AudioListener = function () {
    THREE.Object3D.call(this), this.type = "AudioListener", this.context = new (window.AudioContext || window.webkitAudioContext)
},THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype),THREE.AudioListener.prototype.constructor = THREE.AudioListener,THREE.AudioListener.prototype.updateMatrixWorld = function () {
    var e = new THREE.Vector3, t = new THREE.Quaternion, r = new THREE.Vector3, n = new THREE.Vector3;
    return function (i) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, i), i = this.context.listener;
        var o = this.up;
        this.matrixWorld.decompose(e, t, r), n.set(0, 0, -1).applyQuaternion(t), i.setPosition(e.x, e.y, e.z), i.setOrientation(n.x, n.y, n.z, o.x, o.y, o.z)
    }
}(),THREE.Curve = function () {
},THREE.Curve.prototype = {
    constructor: THREE.Curve, getPoint: function (e) {
        return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
    }, getPointAt: function (e) {
        return e = this.getUtoTmapping(e), this.getPoint(e)
    }, getPoints: function (e) {
        e || (e = 5);
        var t, r = [];
        for (t = 0; e >= t; t++) r.push(this.getPoint(t / e));
        return r
    }, getSpacedPoints: function (e) {
        e || (e = 5);
        var t, r = [];
        for (t = 0; e >= t; t++) r.push(this.getPointAt(t / e));
        return r
    }, getLength: function () {
        var e = this.getLengths();
        return e[e.length - 1]
    }, getLengths: function (e) {
        if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t, r, n = [], i = this.getPoint(0), o = 0;
        for (n.push(0), r = 1; e >= r; r++) t = this.getPoint(r / e), o += t.distanceTo(i), n.push(o), i = t;
        return this.cacheArcLengths = n
    }, updateArcLengths: function () {
        this.needsUpdate = !0, this.getLengths()
    }, getUtoTmapping: function (e, t) {
        var r, n = this.getLengths(), i = 0, o = n.length;
        r = t ? t : e * n[o - 1];
        for (var a, s = 0, h = o - 1; h >= s;) if (i = Math.floor(s + (h - s) / 2), a = n[i] - r, 0 > a) s = i + 1; else {
            if (!(a > 0)) {
                h = i;
                break
            }
            h = i - 1
        }
        return i = h, n[i] === r ? i / (o - 1) : (s = n[i], n = (i + (r - s) / (n[i + 1] - s)) / (o - 1))
    }, getTangent: function (e) {
        var t = e - 1e-4;
        return e += 1e-4, 0 > t && (t = 0), e > 1 && (e = 1), t = this.getPoint(t), this.getPoint(e).clone().sub(t).normalize()
    }, getTangentAt: function (e) {
        return e = this.getUtoTmapping(e), this.getTangent(e)
    }
},THREE.Curve.Utils = THREE.CurveUtils,THREE.Curve.create = function (e, t) {
    return e.prototype = Object.create(THREE.Curve.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
},THREE.CurvePath = function () {
    this.curves = [], this.autoClose = !1
},THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype),THREE.CurvePath.prototype.constructor = THREE.CurvePath,THREE.CurvePath.prototype.add = function (e) {
    this.curves.push(e)
},THREE.CurvePath.prototype.closePath = function () {
    var e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new THREE.LineCurve(t, e))
},THREE.CurvePath.prototype.getPoint = function (e) {
    for (var t = e * this.getLength(), r = this.getCurveLengths(), n = 0; n < r.length;) {
        if (r[n] >= t) return e = this.curves[n], t = 1 - (r[n] - t) / e.getLength(), e.getPointAt(t);
        n++
    }
    return null
},THREE.CurvePath.prototype.getLength = function () {
    var e = this.getCurveLengths();
    return e[e.length - 1]
},THREE.CurvePath.prototype.getCurveLengths = function () {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    for (var e = [], t = 0, r = 0, n = this.curves.length; n > r; r++) t += this.curves[r].getLength(), e.push(t);
    return this.cacheLengths = e
},THREE.CurvePath.prototype.createPointsGeometry = function (e) {
    return e = this.getPoints(e, !0), this.createGeometry(e)
},THREE.CurvePath.prototype.createSpacedPointsGeometry = function (e) {
    return e = this.getSpacedPoints(e, !0), this.createGeometry(e)
},THREE.CurvePath.prototype.createGeometry = function (e) {
    for (var t = new THREE.Geometry, r = 0, n = e.length; n > r; r++) {
        var i = e[r];
        t.vertices.push(new THREE.Vector3(i.x, i.y, i.z || 0))
    }
    return t
},THREE.Path = function (e) {
    THREE.CurvePath.call(this), this.actions = [], e && this.fromPoints(e)
},THREE.Path.prototype = Object.create(THREE.CurvePath.prototype),THREE.Path.prototype.constructor = THREE.Path,THREE.Path.prototype.fromPoints = function (e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, r = e.length; r > t; t++) this.lineTo(e[t].x, e[t].y)
},THREE.Path.prototype.moveTo = function (e, t) {
    this.actions.push({action: "moveTo", args: [e, t]})
},THREE.Path.prototype.lineTo = function (e, t) {
    var r = this.actions[this.actions.length - 1].args,
        r = new THREE.LineCurve(new THREE.Vector2(r[r.length - 2], r[r.length - 1]), new THREE.Vector2(e, t));
    this.curves.push(r), this.actions.push({action: "lineTo", args: [e, t]})
},THREE.Path.prototype.quadraticCurveTo = function (e, t, r, n) {
    var i = this.actions[this.actions.length - 1].args,
        i = new THREE.QuadraticBezierCurve(new THREE.Vector2(i[i.length - 2], i[i.length - 1]), new THREE.Vector2(e, t), new THREE.Vector2(r, n));
    this.curves.push(i), this.actions.push({action: "quadraticCurveTo", args: [e, t, r, n]})
},THREE.Path.prototype.bezierCurveTo = function (e, t, r, n, i, o) {
    var a = this.actions[this.actions.length - 1].args,
        a = new THREE.CubicBezierCurve(new THREE.Vector2(a[a.length - 2], a[a.length - 1]), new THREE.Vector2(e, t), new THREE.Vector2(r, n), new THREE.Vector2(i, o));
    this.curves.push(a), this.actions.push({action: "bezierCurveTo", args: [e, t, r, n, i, o]})
},THREE.Path.prototype.splineThru = function (e) {
    var t = Array.prototype.slice.call(arguments), r = this.actions[this.actions.length - 1].args,
        r = [new THREE.Vector2(r[r.length - 2], r[r.length - 1])];
    Array.prototype.push.apply(r, e), r = new THREE.SplineCurve(r), this.curves.push(r), this.actions.push({
        action: "splineThru",
        args: t
    })
},THREE.Path.prototype.arc = function (e, t, r, n, i, o) {
    var a = this.actions[this.actions.length - 1].args;
    this.absarc(e + a[a.length - 2], t + a[a.length - 1], r, n, i, o)
},THREE.Path.prototype.absarc = function (e, t, r, n, i, o) {
    this.absellipse(e, t, r, r, n, i, o)
},THREE.Path.prototype.ellipse = function (e, t, r, n, i, o, a, s) {
    var h = this.actions[this.actions.length - 1].args;
    this.absellipse(e + h[h.length - 2], t + h[h.length - 1], r, n, i, o, a, s)
},THREE.Path.prototype.absellipse = function (e, t, r, n, i, o, a, s) {
    var h = [e, t, r, n, i, o, a, s || 0];
    e = new THREE.EllipseCurve(e, t, r, n, i, o, a, s), this.curves.push(e), e = e.getPoint(1), h.push(e.x), h.push(e.y), this.actions.push({
        action: "ellipse",
        args: h
    })
},THREE.Path.prototype.getSpacedPoints = function (e, t) {
    e || (e = 40);
    for (var r = [], n = 0; e > n; n++) r.push(this.getPoint(n / e));
    return r
},THREE.Path.prototype.getPoints = function (e, t) {
    e = e || 12;
    for (var r, n, i, o, a, s, h, c, u, l, p = THREE.ShapeUtils.b2, d = THREE.ShapeUtils.b3, f = [], E = 0, m = this.actions.length; m > E; E++) {
        u = this.actions[E];
        var g = u.args;
        switch (u.action) {
            case"moveTo":
                f.push(new THREE.Vector2(g[0], g[1]));
                break;
            case"lineTo":
                f.push(new THREE.Vector2(g[0], g[1]));
                break;
            case"quadraticCurveTo":
                for (r = g[2], n = g[3], a = g[0], s = g[1], 0 < f.length ? (u = f[f.length - 1], h = u.x, c = u.y) : (u = this.actions[E - 1].args, h = u[u.length - 2], c = u[u.length - 1]), g = 1; e >= g; g++) l = g / e, u = p(l, h, a, r), l = p(l, c, s, n), f.push(new THREE.Vector2(u, l));
                break;
            case"bezierCurveTo":
                for (r = g[4], n = g[5], a = g[0], s = g[1], i = g[2], o = g[3], 0 < f.length ? (u = f[f.length - 1], h = u.x, c = u.y) : (u = this.actions[E - 1].args, h = u[u.length - 2], c = u[u.length - 1]), g = 1; e >= g; g++) l = g / e, u = d(l, h, a, i, r), l = d(l, c, s, o, n), f.push(new THREE.Vector2(u, l));
                break;
            case"splineThru":
                for (u = this.actions[E - 1].args, l = [new THREE.Vector2(u[u.length - 2], u[u.length - 1])], u = e * g[0].length, l = l.concat(g[0]), l = new THREE.SplineCurve(l), g = 1; u >= g; g++) f.push(l.getPointAt(g / u));
                break;
            case"arc":
                for (r = g[0], n = g[1], s = g[2], i = g[3], u = g[4], a = !!g[5], h = u - i, c = 2 * e, g = 1; c >= g; g++) l = g / c, a || (l = 1 - l), l = i + l * h, u = r + s * Math.cos(l), l = n + s * Math.sin(l), f.push(new THREE.Vector2(u, l));
                break;
            case"ellipse":
                r = g[0], n = g[1], s = g[2], o = g[3], i = g[4], u = g[5], a = !!g[6];
                var T = g[7];
                h = u - i, c = 2 * e;
                var v, y;
                for (0 !== T && (v = Math.cos(T), y = Math.sin(T)), g = 1; c >= g; g++) {
                    if (l = g / c, a || (l = 1 - l), l = i + l * h, u = r + s * Math.cos(l), l = n + o * Math.sin(l), 0 !== T) {
                        var R = u;
                        u = (R - r) * v - (l - n) * y + r, l = (R - r) * y + (l - n) * v + n
                    }
                    f.push(new THREE.Vector2(u, l))
                }
        }
    }
    return p = f[f.length - 1], Math.abs(p.x - f[0].x) < Number.EPSILON && Math.abs(p.y - f[0].y) < Number.EPSILON && f.splice(f.length - 1, 1), t && f.push(f[0]), f
},THREE.Path.prototype.toShapes = function (e, t) {
    function r(e) {
        for (var t = [], r = 0, n = e.length; n > r; r++) {
            var i = e[r], o = new THREE.Shape;
            o.actions = i.actions, o.curves = i.curves, t.push(o)
        }
        return t
    }

    function n(e, t) {
        for (var r = t.length, n = !1, i = r - 1, o = 0; r > o; i = o++) {
            var a = t[i], s = t[o], h = s.x - a.x, c = s.y - a.y;
            if (Math.abs(c) > Number.EPSILON) {
                if (0 > c && (a = t[o], h = -h, s = t[i], c = -c), !(e.y < a.y || e.y > s.y)) if (e.y === a.y) {
                    if (e.x === a.x) return !0
                } else {
                    if (i = c * (e.x - a.x) - h * (e.y - a.y), 0 === i) return !0;
                    0 > i || (n = !n)
                }
            } else if (e.y === a.y && (s.x <= e.x && e.x <= a.x || a.x <= e.x && e.x <= s.x)) return !0
        }
        return n
    }

    var i = THREE.ShapeUtils.isClockWise, o = function (e) {
        for (var t = [], r = new THREE.Path, n = 0, i = e.length; i > n; n++) {
            var o = e[n], a = o.args, o = o.action;
            "moveTo" === o && 0 !== r.actions.length && (t.push(r), r = new THREE.Path), r[o].apply(r, a)
        }
        return 0 !== r.actions.length && t.push(r), t
    }(this.actions);
    if (0 === o.length) return [];
    if (!0 === t) return r(o);
    var a, s, h, c = [];
    if (1 === o.length) return s = o[0], h = new THREE.Shape, h.actions = s.actions, h.curves = s.curves, c.push(h), c;
    var u = !i(o[0].getPoints()), u = e ? !u : u;
    h = [];
    var l, p = [], d = [], f = 0;
    p[f] = void 0, d[f] = [];
    for (var E = 0, m = o.length; m > E; E++) s = o[E], l = s.getPoints(), a = i(l), (a = e ? !a : a) ? (!u && p[f] && f++, p[f] = {
        s: new THREE.Shape,
        p: l
    }, p[f].s.actions = s.actions, p[f].s.curves = s.curves, u && f++, d[f] = []) : d[f].push({h: s, p: l[0]});
    if (!p[0]) return r(o);
    if (1 < p.length) {
        for (E = !1, s = [], i = 0, o = p.length; o > i; i++) h[i] = [];
        for (i = 0, o = p.length; o > i; i++) for (a = d[i], u = 0; u < a.length; u++) {
            for (f = a[u], l = !0, m = 0; m < p.length; m++) n(f.p, p[m].p) && (i !== m && s.push({
                froms: i,
                tos: m,
                hole: u
            }), l ? (l = !1, h[m].push(f)) : E = !0);
            l && h[i].push(f)
        }
        0 < s.length && (E || (d = h))
    }
    for (E = 0, i = p.length; i > E; E++) for (h = p[E].s, c.push(h), s = d[E], o = 0, a = s.length; a > o; o++) h.holes.push(s[o].h);
    return c
},THREE.Shape = function () {
    THREE.Path.apply(this, arguments), this.holes = []
},THREE.Shape.prototype = Object.create(THREE.Path.prototype),THREE.Shape.prototype.constructor = THREE.Shape,THREE.Shape.prototype.extrude = function (e) {
    return new THREE.ExtrudeGeometry(this, e)
},THREE.Shape.prototype.makeGeometry = function (e) {
    return new THREE.ShapeGeometry(this, e)
},THREE.Shape.prototype.getPointsHoles = function (e) {
    for (var t = [], r = 0, n = this.holes.length; n > r; r++) t[r] = this.holes[r].getPoints(e);
    return t
},THREE.Shape.prototype.extractAllPoints = function (e) {
    return {shape: this.getPoints(e), holes: this.getPointsHoles(e)}
},THREE.Shape.prototype.extractPoints = function (e) {
    return this.extractAllPoints(e)
},THREE.Shape.Utils = THREE.ShapeUtils,THREE.LineCurve = function (e, t) {
    this.v1 = e, this.v2 = t
},THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),THREE.LineCurve.prototype.constructor = THREE.LineCurve,THREE.LineCurve.prototype.getPoint = function (e) {
    var t = this.v2.clone().sub(this.v1);
    return t.multiplyScalar(e).add(this.v1), t
},THREE.LineCurve.prototype.getPointAt = function (e) {
    return this.getPoint(e)
},THREE.LineCurve.prototype.getTangent = function (e) {
    return this.v2.clone().sub(this.v1).normalize()
},THREE.QuadraticBezierCurve = function (e, t, r) {
    this.v0 = e, this.v1 = t, this.v2 = r
},THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype),THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve,THREE.QuadraticBezierCurve.prototype.getPoint = function (e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y))
},THREE.QuadraticBezierCurve.prototype.getTangent = function (e) {
    var t = THREE.CurveUtils.tangentQuadraticBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
},THREE.CubicBezierCurve = function (e, t, r, n) {
    this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = n
},THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype),THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve,THREE.CubicBezierCurve.prototype.getPoint = function (e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
},THREE.CubicBezierCurve.prototype.getTangent = function (e) {
    var t = THREE.CurveUtils.tangentCubicBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
},THREE.SplineCurve = function (e) {
    this.points = void 0 == e ? [] : e
},THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype),THREE.SplineCurve.prototype.constructor = THREE.SplineCurve,THREE.SplineCurve.prototype.getPoint = function (e) {
    var t = this.points;
    e *= t.length - 1;
    var r = Math.floor(e);
    e -= r;
    var n = t[0 === r ? r : r - 1], i = t[r], o = t[r > t.length - 2 ? t.length - 1 : r + 1],
        t = t[r > t.length - 3 ? t.length - 1 : r + 2], r = THREE.CurveUtils.interpolate;
    return new THREE.Vector2(r(n.x, i.x, o.x, t.x, e), r(n.y, i.y, o.y, t.y, e))
},THREE.EllipseCurve = function (e, t, r, n, i, o, a, s) {
    this.aX = e, this.aY = t, this.xRadius = r, this.yRadius = n, this.aStartAngle = i, this.aEndAngle = o, this.aClockwise = a, this.aRotation = s || 0
},THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype),THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve,THREE.EllipseCurve.prototype.getPoint = function (e) {
    var t = this.aEndAngle - this.aStartAngle;
    0 > t && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI), t = !0 === this.aClockwise ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t, e = this.aX + this.xRadius * Math.cos(t);
    var r = this.aY + this.yRadius * Math.sin(t);
    if (0 !== this.aRotation) {
        var t = Math.cos(this.aRotation), n = Math.sin(this.aRotation), i = e;
        e = (i - this.aX) * t - (r - this.aY) * n + this.aX, r = (i - this.aX) * n + (r - this.aY) * t + this.aY
    }
    return new THREE.Vector2(e, r)
},THREE.ArcCurve = function (e, t, r, n, i, o) {
    THREE.EllipseCurve.call(this, e, t, r, r, n, i, o)
},THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype),THREE.ArcCurve.prototype.constructor = THREE.ArcCurve,THREE.LineCurve3 = THREE.Curve.create(function (e, t) {
    this.v1 = e, this.v2 = t
}, function (e) {
    var t = new THREE.Vector3;
    return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
}),THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (e, t, r) {
    this.v0 = e, this.v1 = t, this.v2 = r
}, function (e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y), t(e, this.v0.z, this.v1.z, this.v2.z))
}),THREE.CubicBezierCurve3 = THREE.Curve.create(function (e, t, r, n) {
    this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = n
}, function (e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
}),THREE.SplineCurve3 = THREE.Curve.create(function (e) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == e ? [] : e
}, function (e) {
    var t = this.points;
    e *= t.length - 1;
    var r = Math.floor(e);
    e -= r;
    var n = t[0 == r ? r : r - 1], i = t[r], o = t[r > t.length - 2 ? t.length - 1 : r + 1],
        t = t[r > t.length - 3 ? t.length - 1 : r + 2], r = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(r(n.x, i.x, o.x, t.x, e), r(n.y, i.y, o.y, t.y, e), r(n.z, i.z, o.z, t.z, e))
}),THREE.CatmullRomCurve3 = function () {
    function e() {
    }

    var t = new THREE.Vector3, r = new e, n = new e, i = new e;
    return e.prototype.init = function (e, t, r, n) {
        this.c0 = e, this.c1 = r, this.c2 = -3 * e + 3 * t - 2 * r - n, this.c3 = 2 * e - 2 * t + r + n
    }, e.prototype.initNonuniformCatmullRom = function (e, t, r, n, i, o, a) {
        e = ((t - e) / i - (r - e) / (i + o) + (r - t) / o) * o, n = ((r - t) / o - (n - t) / (o + a) + (n - r) / a) * o, this.init(t, r, e, n)
    }, e.prototype.initCatmullRom = function (e, t, r, n, i) {
        this.init(t, r, i * (r - e), i * (n - t))
    }, e.prototype.calc = function (e) {
        var t = e * e;
        return this.c0 + this.c1 * e + this.c2 * t + this.c3 * t * e
    }, THREE.Curve.create(function (e) {
        this.points = e || []
    }, function (e) {
        var o, a, s = this.points;
        a = s.length, 2 > a && console.log("duh, you need at least 2 points"), e *= a - 1, o = Math.floor(e), e -= o, 0 === e && o === a - 1 && (o = a - 2, e = 1);
        var h, c, u;
        if (0 === o ? (t.subVectors(s[0], s[1]).add(s[0]), h = t) : h = s[o - 1], c = s[o], u = s[o + 1], a > o + 2 ? s = s[o + 2] : (t.subVectors(s[a - 1], s[a - 2]).add(s[a - 2]), s = t), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var l = "chordal" === this.type ? .5 : .25;
            a = Math.pow(h.distanceToSquared(c), l), o = Math.pow(c.distanceToSquared(u), l), l = Math.pow(u.distanceToSquared(s), l), 1e-4 > o && (o = 1), 1e-4 > a && (a = o), 1e-4 > l && (l = o), r.initNonuniformCatmullRom(h.x, c.x, u.x, s.x, a, o, l), n.initNonuniformCatmullRom(h.y, c.y, u.y, s.y, a, o, l), i.initNonuniformCatmullRom(h.z, c.z, u.z, s.z, a, o, l)
        } else "catmullrom" === this.type && (a = void 0 !== this.tension ? this.tension : .5, r.initCatmullRom(h.x, c.x, u.x, s.x, a), n.initCatmullRom(h.y, c.y, u.y, s.y, a), i.initCatmullRom(h.z, c.z, u.z, s.z, a));
        return new THREE.Vector3(r.calc(e), n.calc(e), i.calc(e))
    })
}(),THREE.ClosedSplineCurve3 = THREE.Curve.create(function (e) {
    this.points = void 0 == e ? [] : e
}, function (e) {
    var t = this.points;
    e *= t.length - 0;
    var r = Math.floor(e);
    e -= r;
    var r = r + (r > 0 ? 0 : (Math.floor(Math.abs(r) / t.length) + 1) * t.length), n = t[(r - 1) % t.length],
        i = t[r % t.length], o = t[(r + 1) % t.length], t = t[(r + 2) % t.length], r = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(r(n.x, i.x, o.x, t.x, e), r(n.y, i.y, o.y, t.y, e), r(n.z, i.z, o.z, t.z, e))
}),THREE.BoxGeometry = function (e, t, r, n, i, o) {
    function a(e, t, r, n, i, o, a, h) {
        var c, u = s.widthSegments, l = s.heightSegments, p = i / 2, d = o / 2, f = s.vertices.length;
        "x" === e && "y" === t || "y" === e && "x" === t ? c = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (c = "y", l = s.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (c = "x", u = s.depthSegments);
        var E = u + 1, m = l + 1, g = i / u, T = o / l, v = new THREE.Vector3;
        for (v[c] = a > 0 ? 1 : -1, i = 0; m > i; i++) for (o = 0; E > o; o++) {
            var y = new THREE.Vector3;
            y[e] = (o * g - p) * r, y[t] = (i * T - d) * n, y[c] = a, s.vertices.push(y)
        }
        for (i = 0; l > i; i++) for (o = 0; u > o; o++) d = o + E * i, e = o + E * (i + 1), t = o + 1 + E * (i + 1), r = o + 1 + E * i, n = new THREE.Vector2(o / u, 1 - i / l), a = new THREE.Vector2(o / u, 1 - (i + 1) / l), c = new THREE.Vector2((o + 1) / u, 1 - (i + 1) / l), p = new THREE.Vector2((o + 1) / u, 1 - i / l), d = new THREE.Face3(d + f, e + f, r + f), d.normal.copy(v), d.vertexNormals.push(v.clone(), v.clone(), v.clone()), d.materialIndex = h, s.faces.push(d), s.faceVertexUvs[0].push([n, a, p]), d = new THREE.Face3(e + f, t + f, r + f), d.normal.copy(v), d.vertexNormals.push(v.clone(), v.clone(), v.clone()), d.materialIndex = h, s.faces.push(d), s.faceVertexUvs[0].push([a.clone(), c, p.clone()])
    }

    THREE.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
        width: e,
        height: t,
        depth: r,
        widthSegments: n,
        heightSegments: i,
        depthSegments: o
    }, this.widthSegments = n || 1, this.heightSegments = i || 1, this.depthSegments = o || 1;
    var s = this;
    n = e / 2, i = t / 2, o = r / 2, a("z", "y", -1, -1, r, t, n, 0), a("z", "y", 1, -1, r, t, -n, 1), a("x", "z", 1, 1, e, r, i, 2), a("x", "z", 1, -1, e, r, -i, 3), a("x", "y", 1, -1, e, t, o, 4), a("x", "y", -1, -1, e, t, -o, 5), this.mergeVertices()
},THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry,THREE.BoxGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.BoxGeometry(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
},THREE.CubeGeometry = THREE.BoxGeometry,THREE.CircleGeometry = function (e, t, r, n) {
    THREE.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: n
    }, this.fromBufferGeometry(new THREE.CircleBufferGeometry(e, t, r, n))
},THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry,THREE.CircleGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.CircleGeometry(e.radius, e.segments, e.thetaStart, e.thetaLength)
},THREE.CircleBufferGeometry = function (e, t, r, n) {
    THREE.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: n
    }, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI;
    var i = t + 2, o = new Float32Array(3 * i), a = new Float32Array(3 * i), i = new Float32Array(2 * i);
    a[2] = 1, i[0] = .5, i[1] = .5;
    for (var s = 0, h = 3, c = 2; t >= s; s++, h += 3, c += 2) {
        var u = r + s / t * n;
        o[h] = e * Math.cos(u), o[h + 1] = e * Math.sin(u), a[h + 2] = 1, i[c] = (o[h] / e + 1) / 2, i[c + 1] = (o[h + 1] / e + 1) / 2
    }
    for (r = [], h = 1; t >= h; h++) r.push(h, h + 1, 0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(r), 1)), this.addAttribute("position", new THREE.BufferAttribute(o, 3)), this.addAttribute("normal", new THREE.BufferAttribute(a, 3)), this.addAttribute("uv", new THREE.BufferAttribute(i, 2)), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
},THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry,THREE.CircleBufferGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.CircleBufferGeometry(e.radius, e.segments, e.thetaStart, e.thetaLength)
},THREE.CylinderGeometry = function (e, t, r, n, i, o, a, s) {
    THREE.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: r,
        radialSegments: n,
        heightSegments: i,
        openEnded: o,
        thetaStart: a,
        thetaLength: s
    }, e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, r = void 0 !== r ? r : 100, n = n || 8, i = i || 1, o = void 0 !== o && o, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : 2 * Math.PI;
    var h, c, u = r / 2, l = [], p = [];
    for (c = 0; i >= c; c++) {
        var d = [], f = [], E = c / i, m = E * (t - e) + e;
        for (h = 0; n >= h; h++) {
            var g = h / n, T = new THREE.Vector3;
            T.x = m * Math.sin(g * s + a), T.y = -E * r + u, T.z = m * Math.cos(g * s + a), this.vertices.push(T), d.push(this.vertices.length - 1), f.push(new THREE.Vector2(g, 1 - E))
        }
        l.push(d), p.push(f)
    }
    for (r = (t - e) / r, h = 0; n > h; h++) for (0 !== e ? (a = this.vertices[l[0][h]].clone(), s = this.vertices[l[0][h + 1]].clone()) : (a = this.vertices[l[1][h]].clone(), s = this.vertices[l[1][h + 1]].clone()), a.setY(Math.sqrt(a.x * a.x + a.z * a.z) * r).normalize(), s.setY(Math.sqrt(s.x * s.x + s.z * s.z) * r).normalize(), c = 0; i > c; c++) {
        var d = l[c][h], f = l[c + 1][h], E = l[c + 1][h + 1], m = l[c][h + 1], g = a.clone(), T = a.clone(),
            v = s.clone(), y = s.clone(), R = p[c][h].clone(), x = p[c + 1][h].clone(), H = p[c + 1][h + 1].clone(),
            b = p[c][h + 1].clone();
        this.faces.push(new THREE.Face3(d, f, m, [g, T, y])), this.faceVertexUvs[0].push([R, x, b]), this.faces.push(new THREE.Face3(f, E, m, [T.clone(), v, y.clone()])), this.faceVertexUvs[0].push([x.clone(), H, b.clone()])
    }
    if (!1 === o && e > 0) for (this.vertices.push(new THREE.Vector3(0, u, 0)), h = 0; n > h; h++) d = l[0][h], f = l[0][h + 1], E = this.vertices.length - 1, g = new THREE.Vector3(0, 1, 0), T = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(0, 1, 0), R = p[0][h].clone(), x = p[0][h + 1].clone(), H = new THREE.Vector2(x.x, 0), this.faces.push(new THREE.Face3(d, f, E, [g, T, v], (void 0), 1)), this.faceVertexUvs[0].push([R, x, H]);
    if (!1 === o && t > 0) for (this.vertices.push(new THREE.Vector3(0, (-u), 0)), h = 0; n > h; h++) d = l[i][h + 1], f = l[i][h], E = this.vertices.length - 1, g = new THREE.Vector3(0, (-1), 0), T = new THREE.Vector3(0, (-1), 0), v = new THREE.Vector3(0, (-1), 0), R = p[i][h + 1].clone(), x = p[i][h].clone(), H = new THREE.Vector2(x.x, 1), this.faces.push(new THREE.Face3(d, f, E, [g, T, v], (void 0), 2)), this.faceVertexUvs[0].push([R, x, H]);
    this.computeFaceNormals()
},THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry,THREE.CylinderGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.CylinderGeometry(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength)
},THREE.EdgesGeometry = function (e, t) {
    function r(e, t) {
        return e - t
    }

    THREE.BufferGeometry.call(this);
    var n, i = Math.cos(THREE.Math.degToRad(void 0 !== t ? t : 1)), o = [0, 0], a = {}, s = ["a", "b", "c"];
    e instanceof THREE.BufferGeometry ? (n = new THREE.Geometry, n.fromBufferGeometry(e)) : n = e.clone(), n.mergeVertices(), n.computeFaceNormals();
    var h = n.vertices;
    n = n.faces;
    for (var c = 0, u = n.length; u > c; c++) for (var l = n[c], p = 0; 3 > p; p++) {
        o[0] = l[s[p]], o[1] = l[s[(p + 1) % 3]], o.sort(r);
        var d = o.toString();
        void 0 === a[d] ? a[d] = {vert1: o[0], vert2: o[1], face1: c, face2: void 0} : a[d].face2 = c
    }
    o = [];
    for (d in a) s = a[d], (void 0 === s.face2 || n[s.face1].normal.dot(n[s.face2].normal) <= i) && (c = h[s.vert1], o.push(c.x), o.push(c.y), o.push(c.z), c = h[s.vert2], o.push(c.x), o.push(c.y), o.push(c.z));
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(o), 3))
},THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry,THREE.ExtrudeGeometry = function (e, t) {
    "undefined" != typeof e && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), this.computeFaceNormals())
},THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry,THREE.ExtrudeGeometry.prototype.addShapeList = function (e, t) {
    for (var r = e.length, n = 0; r > n; n++) this.addShape(e[n], t)
},THREE.ExtrudeGeometry.prototype.addShape = function (e, t) {
    function r(e, t, r) {
        return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(r).add(e)
    }

    function n(e, t, r) {
        var n = 1, n = e.x - t.x, i = e.y - t.y, o = r.x - e.x, a = r.y - e.y, s = n * n + i * i;
        if (Math.abs(n * a - i * o) > Number.EPSILON) {
            var h = Math.sqrt(s), c = Math.sqrt(o * o + a * a), s = t.x - i / h;
            if (t = t.y + n / h, o = ((r.x - a / c - s) * a - (r.y + o / c - t) * o) / (n * a - i * o), r = s + n * o - e.x, e = t + i * o - e.y, n = r * r + e * e, 2 >= n) return new THREE.Vector2(r, e);
            n = Math.sqrt(n / 2)
        } else e = !1, n > Number.EPSILON ? o > Number.EPSILON && (e = !0) : n < -Number.EPSILON ? o < -Number.EPSILON && (e = !0) : Math.sign(i) === Math.sign(a) && (e = !0), e ? (r = -i, e = n, n = Math.sqrt(s)) : (r = n, e = i, n = Math.sqrt(s / 2));
        return new THREE.Vector2(r / n, e / n)
    }

    function i(e, t) {
        var r, n;
        for (N = e.length; 0 <= --N;) {
            r = N, n = N - 1, 0 > n && (n = e.length - 1);
            for (var i = 0, o = T + 2 * E, i = 0; o > i; i++) {
                var a = O * i, s = O * (i + 1), h = t + r + a, a = t + n + a, c = t + n + s, s = t + r + s, h = h + M,
                    a = a + M, c = c + M, s = s + M;
                w.faces.push(new THREE.Face3(h, a, s, null, null, 1)), w.faces.push(new THREE.Face3(a, c, s, null, null, 1)), h = R.generateSideWallUV(w, h, a, c, s), w.faceVertexUvs[0].push([h[0], h[1], h[3]]), w.faceVertexUvs[0].push([h[1], h[2], h[3]])
            }
        }
    }

    function o(e, t, r) {
        w.vertices.push(new THREE.Vector3(e, t, r))
    }

    function a(e, t, r) {
        e += M, t += M, r += M, w.faces.push(new THREE.Face3(e, t, r, null, null, 0)), e = R.generateTopUV(w, e, t, r), w.faceVertexUvs[0].push(e)
    }

    var s, h, c, u, l, p = void 0 !== t.amount ? t.amount : 100, d = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
        f = void 0 !== t.bevelSize ? t.bevelSize : d - 2, E = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
        m = void 0 === t.bevelEnabled || t.bevelEnabled, g = void 0 !== t.curveSegments ? t.curveSegments : 12,
        T = void 0 !== t.steps ? t.steps : 1, v = t.extrudePath, y = !1,
        R = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
    v && (s = v.getSpacedPoints(T), y = !0, m = !1, h = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(v, T, (!1)), c = new THREE.Vector3, u = new THREE.Vector3, l = new THREE.Vector3), m || (f = d = E = 0);
    var x, H, b, w = this, M = this.vertices.length, v = e.extractPoints(g), g = v.shape, S = v.holes;
    if (v = !THREE.ShapeUtils.isClockWise(g)) {
        for (g = g.reverse(), H = 0, b = S.length; b > H; H++) x = S[H], THREE.ShapeUtils.isClockWise(x) && (S[H] = x.reverse());
        v = !1
    }
    var _ = THREE.ShapeUtils.triangulateShape(g, S), C = g;
    for (H = 0, b = S.length; b > H; H++) x = S[H], g = g.concat(x);
    var A, L, P, k, D, F, O = g.length, V = _.length, v = [], N = 0;
    for (P = C.length, A = P - 1, L = N + 1; P > N; N++, A++, L++) A === P && (A = 0), L === P && (L = 0), v[N] = n(C[N], C[A], C[L]);
    var B, U = [], G = v.concat();
    for (H = 0, b = S.length; b > H; H++) {
        for (x = S[H], B = [], N = 0, P = x.length, A = P - 1, L = N + 1; P > N; N++, A++, L++) A === P && (A = 0), L === P && (L = 0), B[N] = n(x[N], x[A], x[L]);
        U.push(B), G = G.concat(B)
    }
    for (A = 0; E > A; A++) {
        for (P = A / E, k = d * (1 - P), L = f * Math.sin(P * Math.PI / 2), N = 0, P = C.length; P > N; N++) D = r(C[N], v[N], L), o(D.x, D.y, -k);
        for (H = 0, b = S.length; b > H; H++) for (x = S[H], B = U[H], N = 0, P = x.length; P > N; N++) D = r(x[N], B[N], L), o(D.x, D.y, -k)
    }
    for (L = f, N = 0; O > N; N++) D = m ? r(g[N], G[N], L) : g[N], y ? (u.copy(h.normals[0]).multiplyScalar(D.x), c.copy(h.binormals[0]).multiplyScalar(D.y), l.copy(s[0]).add(u).add(c), o(l.x, l.y, l.z)) : o(D.x, D.y, 0);
    for (P = 1; T >= P; P++) for (N = 0; O > N; N++) D = m ? r(g[N], G[N], L) : g[N], y ? (u.copy(h.normals[P]).multiplyScalar(D.x), c.copy(h.binormals[P]).multiplyScalar(D.y), l.copy(s[P]).add(u).add(c), o(l.x, l.y, l.z)) : o(D.x, D.y, p / T * P);
    for (A = E - 1; A >= 0; A--) {
        for (P = A / E, k = d * (1 - P), L = f * Math.sin(P * Math.PI / 2), N = 0, P = C.length; P > N; N++) D = r(C[N], v[N], L), o(D.x, D.y, p + k);
        for (H = 0, b = S.length; b > H; H++) for (x = S[H], B = U[H], N = 0, P = x.length; P > N; N++) D = r(x[N], B[N], L), y ? o(D.x, D.y + s[T - 1].y, s[T - 1].x + k) : o(D.x, D.y, p + k)
    }
    !function () {
        if (m) {
            var e;
            for (e = 0 * O, N = 0; V > N; N++) F = _[N], a(F[2] + e, F[1] + e, F[0] + e);
            for (e = T + 2 * E, e *= O, N = 0; V > N; N++) F = _[N], a(F[0] + e, F[1] + e, F[2] + e)
        } else {
            for (N = 0; V > N; N++) F = _[N], a(F[2], F[1], F[0]);
            for (N = 0; V > N; N++) F = _[N], a(F[0] + O * T, F[1] + O * T, F[2] + O * T)
        }
    }(), function () {
        var e = 0;
        for (i(C, e), e += C.length, H = 0, b = S.length; b > H; H++) x = S[H], i(x, e), e += x.length
    }()
},THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function (e, t, r, n) {
        return e = e.vertices, t = e[t], r = e[r], n = e[n], [new THREE.Vector2(t.x, t.y), new THREE.Vector2(r.x, r.y), new THREE.Vector2(n.x, n.y)]
    }, generateSideWallUV: function (e, t, r, n, i) {
        return e = e.vertices, t = e[t], r = e[r], n = e[n], i = e[i], .01 > Math.abs(t.y - r.y) ? [new THREE.Vector2(t.x, 1 - t.z), new THREE.Vector2(r.x, 1 - r.z), new THREE.Vector2(n.x, 1 - n.z), new THREE.Vector2(i.x, 1 - i.z)] : [new THREE.Vector2(t.y, 1 - t.z), new THREE.Vector2(r.y, 1 - r.z), new THREE.Vector2(n.y, 1 - n.z), new THREE.Vector2(i.y, 1 - i.z)]
    }
},THREE.ShapeGeometry = function (e, t) {
    THREE.Geometry.call(this), this.type = "ShapeGeometry", !1 === Array.isArray(e) && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals()
},THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry,THREE.ShapeGeometry.prototype.addShapeList = function (e, t) {
    for (var r = 0, n = e.length; n > r; r++) this.addShape(e[r], t);
    return this
},THREE.ShapeGeometry.prototype.addShape = function (e, t) {
    void 0 === t && (t = {});
    var r, n, i, o = t.material, a = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
        s = this.vertices.length;
    r = e.extractPoints(void 0 !== t.curveSegments ? t.curveSegments : 12);
    var h = r.shape, c = r.holes;
    if (!THREE.ShapeUtils.isClockWise(h)) for (h = h.reverse(), r = 0, n = c.length; n > r; r++) i = c[r], THREE.ShapeUtils.isClockWise(i) && (c[r] = i.reverse());
    var u = THREE.ShapeUtils.triangulateShape(h, c);
    for (r = 0, n = c.length; n > r; r++) i = c[r], h = h.concat(i);
    for (c = h.length, n = u.length, r = 0; c > r; r++) i = h[r], this.vertices.push(new THREE.Vector3(i.x, i.y, 0));
    for (r = 0; n > r; r++) c = u[r], h = c[0] + s, i = c[1] + s, c = c[2] + s, this.faces.push(new THREE.Face3(h, i, c, null, null, o)), this.faceVertexUvs[0].push(a.generateTopUV(this, h, i, c))
},THREE.LatheGeometry = function (e, t, r, n) {
    THREE.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
        points: e,
        segments: t,
        phiStart: r,
        phiLength: n
    }, t = t || 12, r = r || 0, n = n || 2 * Math.PI;
    for (var i = 1 / (e.length - 1), o = 1 / t, a = 0, s = t; s >= a; a++) for (var h = r + a * o * n, c = Math.cos(h), u = Math.sin(h), h = 0, l = e.length; l > h; h++) {
        var p = e[h], d = new THREE.Vector3;
        d.x = c * p.x - u * p.y, d.y = u * p.x + c * p.y, d.z = p.z, this.vertices.push(d)
    }
    for (r = e.length, a = 0, s = t; s > a; a++) for (h = 0,
                                                          l = e.length - 1; l > h; h++) {
        t = u = h + r * a, n = u + r;
        var c = u + 1 + r, u = u + 1, p = a * o, d = h * i, f = p + o, E = d + i;
        this.faces.push(new THREE.Face3(t, n, u)), this.faceVertexUvs[0].push([new THREE.Vector2(p, d), new THREE.Vector2(f, d), new THREE.Vector2(p, E)]), this.faces.push(new THREE.Face3(n, c, u)), this.faceVertexUvs[0].push([new THREE.Vector2(f, d), new THREE.Vector2(f, E), new THREE.Vector2(p, E)])
    }
    this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals()
},THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry,THREE.PlaneGeometry = function (e, t, r, n) {
    THREE.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: n
    }, this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e, t, r, n))
},THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry,THREE.PlaneGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.PlaneGeometry(e.width, e.height, e.widthSegments, e.heightSegments)
},THREE.PlaneBufferGeometry = function (e, t, r, n) {
    THREE.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: n
    };
    var i = e / 2, o = t / 2;
    r = Math.floor(r) || 1, n = Math.floor(n) || 1;
    var a = r + 1, s = n + 1, h = e / r, c = t / n;
    t = new Float32Array(a * s * 3), e = new Float32Array(a * s * 3);
    for (var u = new Float32Array(a * s * 2), l = 0, p = 0, d = 0; s > d; d++) for (var f = d * c - o, E = 0; a > E; E++) t[l] = E * h - i, t[l + 1] = -f, e[l + 2] = 1, u[p] = E / r, u[p + 1] = 1 - d / n, l += 3, p += 2;
    for (l = 0, i = new (65535 < t.length / 3 ? Uint32Array : Uint16Array)(r * n * 6), d = 0; n > d; d++) for (E = 0; r > E; E++) o = E + a * (d + 1), s = E + 1 + a * (d + 1), h = E + 1 + a * d, i[l] = E + a * d, i[l + 1] = o, i[l + 2] = h, i[l + 3] = o, i[l + 4] = s, i[l + 5] = h, l += 6;
    this.setIndex(new THREE.BufferAttribute(i, 1)), this.addAttribute("position", new THREE.BufferAttribute(t, 3)), this.addAttribute("normal", new THREE.BufferAttribute(e, 3)), this.addAttribute("uv", new THREE.BufferAttribute(u, 2))
},THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry,THREE.PlaneBufferGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.PlaneBufferGeometry(e.width, e.height, e.widthSegments, e.heightSegments)
},THREE.RingGeometry = function (e, t, r, n, i, o) {
    THREE.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: r,
        phiSegments: n,
        thetaStart: i,
        thetaLength: o
    }, e = e || 0, t = t || 50, i = void 0 !== i ? i : 0, o = void 0 !== o ? o : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8, n = void 0 !== n ? Math.max(1, n) : 8;
    var a, s = [], h = e, c = (t - e) / n;
    for (e = 0; n + 1 > e; e++) {
        for (a = 0; r + 1 > a; a++) {
            var u = new THREE.Vector3, l = i + a / r * o;
            u.x = h * Math.cos(l), u.y = h * Math.sin(l), this.vertices.push(u), s.push(new THREE.Vector2((u.x / t + 1) / 2, (u.y / t + 1) / 2))
        }
        h += c
    }
    for (t = new THREE.Vector3(0, 0, 1), e = 0; n > e; e++) for (i = e * (r + 1), a = 0; r > a; a++) o = l = a + i, c = l + r + 1, u = l + r + 2, this.faces.push(new THREE.Face3(o, c, u, [t.clone(), t.clone(), t.clone()])), this.faceVertexUvs[0].push([s[o].clone(), s[c].clone(), s[u].clone()]), o = l, c = l + r + 2, u = l + 1, this.faces.push(new THREE.Face3(o, c, u, [t.clone(), t.clone(), t.clone()])), this.faceVertexUvs[0].push([s[o].clone(), s[c].clone(), s[u].clone()]);
    this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, h)
},THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.RingGeometry.prototype.constructor = THREE.RingGeometry,THREE.RingGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.RingGeometry(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength)
},THREE.SphereGeometry = function (e, t, r, n, i, o, a) {
    THREE.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: n,
        phiLength: i,
        thetaStart: o,
        thetaLength: a
    }, this.fromBufferGeometry(new THREE.SphereBufferGeometry(e, t, r, n, i, o, a))
},THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry,THREE.SphereGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.SphereGeometry(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
},THREE.SphereBufferGeometry = function (e, t, r, n, i, o, a) {
    THREE.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: n,
        phiLength: i,
        thetaStart: o,
        thetaLength: a
    }, e = e || 50, t = Math.max(3, Math.floor(t) || 8), r = Math.max(2, Math.floor(r) || 6), n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI;
    for (var s = o + a, h = (t + 1) * (r + 1), c = new THREE.BufferAttribute(new Float32Array(3 * h), 3), u = new THREE.BufferAttribute(new Float32Array(3 * h), 3), h = new THREE.BufferAttribute(new Float32Array(2 * h), 2), l = 0, p = [], d = new THREE.Vector3, f = 0; r >= f; f++) {
        for (var E = [], m = f / r, g = 0; t >= g; g++) {
            var T = g / t, v = -e * Math.cos(n + T * i) * Math.sin(o + m * a), y = e * Math.cos(o + m * a),
                R = e * Math.sin(n + T * i) * Math.sin(o + m * a);
            d.set(v, y, R).normalize(), c.setXYZ(l, v, y, R), u.setXYZ(l, d.x, d.y, d.z), h.setXY(l, T, 1 - m), E.push(l), l++
        }
        p.push(E)
    }
    for (n = [], f = 0; r > f; f++) for (g = 0; t > g; g++) i = p[f][g + 1], a = p[f][g], l = p[f + 1][g], d = p[f + 1][g + 1], (0 !== f || o > 0) && n.push(i, a, d), (f !== r - 1 || s < Math.PI) && n.push(a, l, d);
    this.setIndex(new (65535 < c.count ? THREE.Uint32Attribute : THREE.Uint16Attribute)(n, 1)), this.addAttribute("position", c), this.addAttribute("normal", u), this.addAttribute("uv", h), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
},THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry,THREE.SphereBufferGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.SphereBufferGeometry(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
},THREE.TorusGeometry = function (e, t, r, n, i) {
    THREE.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: n,
        arc: i
    }, e = e || 100, t = t || 40, r = r || 8, n = n || 6, i = i || 2 * Math.PI;
    for (var o = new THREE.Vector3, a = [], s = [], h = 0; r >= h; h++) for (var c = 0; n >= c; c++) {
        var u = c / n * i, l = h / r * Math.PI * 2;
        o.x = e * Math.cos(u), o.y = e * Math.sin(u);
        var p = new THREE.Vector3;
        p.x = (e + t * Math.cos(l)) * Math.cos(u), p.y = (e + t * Math.cos(l)) * Math.sin(u), p.z = t * Math.sin(l), this.vertices.push(p), a.push(new THREE.Vector2(c / n, h / r)), s.push(p.clone().sub(o).normalize())
    }
    for (h = 1; r >= h; h++) for (c = 1; n >= c; c++) e = (n + 1) * h + c - 1, t = (n + 1) * (h - 1) + c - 1, i = (n + 1) * (h - 1) + c, o = (n + 1) * h + c, u = new THREE.Face3(e, t, o, [s[e].clone(), s[t].clone(), s[o].clone()]), this.faces.push(u), this.faceVertexUvs[0].push([a[e].clone(), a[t].clone(), a[o].clone()]), u = new THREE.Face3(t, i, o, [s[t].clone(), s[i].clone(), s[o].clone()]), this.faces.push(u), this.faceVertexUvs[0].push([a[t].clone(), a[i].clone(), a[o].clone()]);
    this.computeFaceNormals()
},THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry,THREE.TorusGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.TorusGeometry(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc)
},THREE.TorusKnotGeometry = function (e, t, r, n, i, o, a) {
    function s(e, t, r, n, i) {
        var o = Math.cos(e), a = Math.sin(e);
        return e *= t / r, t = Math.cos(e), o *= n * (2 + t) * .5, a = n * (2 + t) * a * .5, n = i * n * Math.sin(e) * .5, new THREE.Vector3(o, a, n)
    }

    THREE.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: n,
        p: i,
        q: o,
        heightScale: a
    }, e = e || 100, t = t || 40, r = r || 64, n = n || 8, i = i || 2, o = o || 3, a = a || 1;
    for (var h = Array(r), c = new THREE.Vector3, u = new THREE.Vector3, l = new THREE.Vector3, p = 0; r > p; ++p) {
        h[p] = Array(n);
        var d = p / r * 2 * i * Math.PI, f = s(d, o, i, e, a), d = s(d + .01, o, i, e, a);
        for (c.subVectors(d, f), u.addVectors(d, f), l.crossVectors(c, u), u.crossVectors(l, c), l.normalize(), u.normalize(), d = 0; n > d; ++d) {
            var E = d / n * 2 * Math.PI, m = -t * Math.cos(E), E = t * Math.sin(E), g = new THREE.Vector3;
            g.x = f.x + m * u.x + E * l.x, g.y = f.y + m * u.y + E * l.y, g.z = f.z + m * u.z + E * l.z, h[p][d] = this.vertices.push(g) - 1
        }
    }
    for (p = 0; r > p; ++p) for (d = 0; n > d; ++d) i = (p + 1) % r, o = (d + 1) % n, e = h[p][d], t = h[i][d], i = h[i][o], o = h[p][o], a = new THREE.Vector2(p / r, d / n), c = new THREE.Vector2((p + 1) / r, d / n), u = new THREE.Vector2((p + 1) / r, (d + 1) / n), l = new THREE.Vector2(p / r, (d + 1) / n), this.faces.push(new THREE.Face3(e, t, o)), this.faceVertexUvs[0].push([a, c, l]), this.faces.push(new THREE.Face3(t, i, o)), this.faceVertexUvs[0].push([c.clone(), u, l.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals()
},THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry,THREE.TorusKnotGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.TorusKnotGeometry(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.p, e.q, e.heightScale)
},THREE.TubeGeometry = function (e, t, r, n, i, o) {
    THREE.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
        path: e,
        segments: t,
        radius: r,
        radialSegments: n,
        closed: i,
        taper: o
    }, t = t || 64, r = r || 1, n = n || 8, i = i || !1, o = o || THREE.TubeGeometry.NoTaper;
    var a, s, h, c, u, l, p, d, f, E, m = [], g = t + 1, T = new THREE.Vector3;
    for (d = new THREE.TubeGeometry.FrenetFrames(e, t, i), f = d.normals, E = d.binormals, this.tangents = d.tangents, this.normals = f, this.binormals = E, d = 0; g > d; d++) for (m[d] = [], h = d / (g - 1), p = e.getPointAt(h), a = f[d], s = E[d], u = r * o(h), h = 0; n > h; h++) c = h / n * 2 * Math.PI, l = -u * Math.cos(c), c = u * Math.sin(c), T.copy(p), T.x += l * a.x + c * s.x, T.y += l * a.y + c * s.y, T.z += l * a.z + c * s.z, m[d][h] = this.vertices.push(new THREE.Vector3(T.x, T.y, T.z)) - 1;
    for (d = 0; t > d; d++) for (h = 0; n > h; h++) o = i ? (d + 1) % t : d + 1, g = (h + 1) % n, e = m[d][h], r = m[o][h], o = m[o][g], g = m[d][g], T = new THREE.Vector2(d / t, h / n), f = new THREE.Vector2((d + 1) / t, h / n), E = new THREE.Vector2((d + 1) / t, (h + 1) / n), a = new THREE.Vector2(d / t, (h + 1) / n), this.faces.push(new THREE.Face3(e, r, g)), this.faceVertexUvs[0].push([T, f, a]), this.faces.push(new THREE.Face3(r, o, g)), this.faceVertexUvs[0].push([f.clone(), E, a.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals()
},THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry,THREE.TubeGeometry.prototype.clone = function () {
    return new this.constructor(this.parameters.path, this.parameters.segments, this.parameters.radius, this.parameters.radialSegments, this.parameters.closed, this.parameters.taper)
},THREE.TubeGeometry.NoTaper = function (e) {
    return 1
},THREE.TubeGeometry.SinusoidalTaper = function (e) {
    return Math.sin(Math.PI * e)
},THREE.TubeGeometry.FrenetFrames = function (e, t, r) {
    var n = new THREE.Vector3, i = [], o = [], a = [], s = new THREE.Vector3, h = new THREE.Matrix4;
    t += 1;
    var c, u, l;
    for (this.tangents = i, this.normals = o, this.binormals = a, c = 0; t > c; c++) u = c / (t - 1), i[c] = e.getTangentAt(u), i[c].normalize();
    for (o[0] = new THREE.Vector3, a[0] = new THREE.Vector3, e = Number.MAX_VALUE, c = Math.abs(i[0].x), u = Math.abs(i[0].y), l = Math.abs(i[0].z), e >= c && (e = c, n.set(1, 0, 0)), e >= u && (e = u, n.set(0, 1, 0)), e >= l && n.set(0, 0, 1), s.crossVectors(i[0], n).normalize(), o[0].crossVectors(i[0], s), a[0].crossVectors(i[0], o[0]), c = 1; t > c; c++) o[c] = o[c - 1].clone(), a[c] = a[c - 1].clone(), s.crossVectors(i[c - 1], i[c]), s.length() > Number.EPSILON && (s.normalize(), n = Math.acos(THREE.Math.clamp(i[c - 1].dot(i[c]), -1, 1)), o[c].applyMatrix4(h.makeRotationAxis(s, n))), a[c].crossVectors(i[c], o[c]);
    if (r) for (n = Math.acos(THREE.Math.clamp(o[0].dot(o[t - 1]), -1, 1)), n /= t - 1, 0 < i[0].dot(s.crossVectors(o[0], o[t - 1])) && (n = -n), c = 1; t > c; c++) o[c].applyMatrix4(h.makeRotationAxis(i[c], n * c)), a[c].crossVectors(i[c], o[c])
},THREE.PolyhedronGeometry = function (e, t, r, n) {
    function i(e) {
        var t = e.normalize().clone();
        t.index = h.vertices.push(t) - 1;
        var r = Math.atan2(e.z, -e.x) / 2 / Math.PI + .5;
        return e = Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5, t.uv = new THREE.Vector2(r, 1 - e), t
    }

    function o(e, t, r, n) {
        n = new THREE.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()], (void 0), n), h.faces.push(n), m.copy(e).add(t).add(r).divideScalar(3), n = Math.atan2(m.z, -m.x), h.faceVertexUvs[0].push([s(e.uv, e, n), s(t.uv, t, n), s(r.uv, r, n)])
    }

    function a(e, t) {
        for (var r = Math.pow(2, t), n = i(h.vertices[e.a]), a = i(h.vertices[e.b]), s = i(h.vertices[e.c]), c = [], u = e.materialIndex, l = 0; r >= l; l++) {
            c[l] = [];
            for (var p = i(n.clone().lerp(s, l / r)), d = i(a.clone().lerp(s, l / r)), f = r - l, E = 0; f >= E; E++) c[l][E] = 0 === E && l === r ? p : i(p.clone().lerp(d, E / f))
        }
        for (l = 0; r > l; l++) for (E = 0; 2 * (r - l) - 1 > E; E++) n = Math.floor(E / 2), 0 === E % 2 ? o(c[l][n + 1], c[l + 1][n], c[l][n], u) : o(c[l][n + 1], c[l + 1][n + 1], c[l + 1][n], u)
    }

    function s(e, t, r) {
        return 0 > r && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new THREE.Vector2(r / 2 / Math.PI + .5, e.y)), e.clone()
    }

    THREE.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
        vertices: e,
        indices: t,
        radius: r,
        detail: n
    }, r = r || 1, n = n || 0;
    for (var h = this, c = 0, u = e.length; u > c; c += 3) i(new THREE.Vector3(e[c], e[c + 1], e[c + 2]));
    e = this.vertices;
    for (var l = [], p = c = 0, u = t.length; u > c; c += 3, p++) {
        var d = e[t[c]], f = e[t[c + 1]], E = e[t[c + 2]];
        l[p] = new THREE.Face3(d.index, f.index, E.index, [d.clone(), f.clone(), E.clone()], (void 0), p)
    }
    for (var m = new THREE.Vector3, c = 0, u = l.length; u > c; c++) a(l[c], n);
    for (c = 0, u = this.faceVertexUvs[0].length; u > c; c++) t = this.faceVertexUvs[0][c], n = t[0].x, e = t[1].x, l = t[2].x, p = Math.max(n, e, l), d = Math.min(n, e, l), p > .9 && .1 > d && (.2 > n && (t[0].x += 1), .2 > e && (t[1].x += 1), .2 > l && (t[2].x += 1));
    for (c = 0, u = this.vertices.length; u > c; c++) this.vertices[c].multiplyScalar(r);
    this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, r)
},THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry,THREE.PolyhedronGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.PolyhedronGeometry(e.vertices, e.indices, e.radius, e.detail)
},THREE.DodecahedronGeometry = function (e, t) {
    var r = (1 + Math.sqrt(5)) / 2, n = 1 / r;
    THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, 0, -r, 0, -n, r, 0, -n, -r, 0, n, r, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronGeometry", this.parameters = {
        radius: e,
        detail: t
    }
},THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry,THREE.DodecahedronGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.DodecahedronGeometry(e.radius, e.detail)
},THREE.IcosahedronGeometry = function (e, t) {
    var r = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronGeometry", this.parameters = {
        radius: e,
        detail: t
    }
},THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry,THREE.IcosahedronGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.IcosahedronGeometry(e.radius, e.detail)
},THREE.OctahedronGeometry = function (e, t) {
    THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronGeometry", this.parameters = {
        radius: e,
        detail: t
    }
},THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry,THREE.OctahedronGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.OctahedronGeometry(e.radius, e.detail)
},THREE.TetrahedronGeometry = function (e, t) {
    THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronGeometry", this.parameters = {
        radius: e,
        detail: t
    }
},THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry,THREE.TetrahedronGeometry.prototype.clone = function () {
    var e = this.parameters;
    return new THREE.TetrahedronGeometry(e.radius, e.detail)
},THREE.ParametricGeometry = function (e, t, r) {
    THREE.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {func: e, slices: t, stacks: r};
    var n, i, o, a, s = this.vertices, h = this.faces, c = this.faceVertexUvs[0], u = t + 1;
    for (n = 0; r >= n; n++) for (a = n / r, i = 0; t >= i; i++) o = i / t, o = e(o, a), s.push(o);
    var l, p, d, f;
    for (n = 0; r > n; n++) for (i = 0; t > i; i++) e = n * u + i, s = n * u + i + 1, a = (n + 1) * u + i + 1, o = (n + 1) * u + i, l = new THREE.Vector2(i / t, n / r), p = new THREE.Vector2((i + 1) / t, n / r), d = new THREE.Vector2((i + 1) / t, (n + 1) / r), f = new THREE.Vector2(i / t, (n + 1) / r), h.push(new THREE.Face3(e, s, o)), c.push([l, p, f]), h.push(new THREE.Face3(s, a, o)), c.push([p.clone(), d, f.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals()
},THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry,THREE.WireframeGeometry = function (e) {
    function t(e, t) {
        return e - t
    }

    THREE.BufferGeometry.call(this);
    var r = [0, 0], n = {}, i = ["a", "b", "c"];
    if (e instanceof THREE.Geometry) {
        var o = e.vertices, a = e.faces, s = 0, h = new Uint32Array(6 * a.length);
        e = 0;
        for (var c = a.length; c > e; e++) for (var u = a[e], l = 0; 3 > l; l++) {
            r[0] = u[i[l]], r[1] = u[i[(l + 1) % 3]], r.sort(t);
            var p = r.toString();
            void 0 === n[p] && (h[2 * s] = r[0], h[2 * s + 1] = r[1], n[p] = !0, s++)
        }
        for (r = new Float32Array(6 * s), e = 0, c = s; c > e; e++) for (l = 0; 2 > l; l++) n = o[h[2 * e + l]], s = 6 * e + 3 * l, r[s + 0] = n.x, r[s + 1] = n.y, r[s + 2] = n.z;
        this.addAttribute("position", new THREE.BufferAttribute(r, 3))
    } else if (e instanceof THREE.BufferGeometry) {
        if (null !== e.index) {
            for (c = e.index.array, o = e.attributes.position, i = e.drawcalls, s = 0, 0 === i.length && e.addGroup(0, c.length), h = new Uint32Array(2 * c.length), a = 0, u = i.length; u > a; ++a) {
                e = i[a], l = e.start, p = e.count, e = l;
                for (var d = l + p; d > e; e += 3) for (l = 0; 3 > l; l++) r[0] = c[e + l], r[1] = c[e + (l + 1) % 3], r.sort(t), p = r.toString(), void 0 === n[p] && (h[2 * s] = r[0], h[2 * s + 1] = r[1], n[p] = !0, s++)
            }
            for (r = new Float32Array(6 * s), e = 0, c = s; c > e; e++) for (l = 0; 2 > l; l++) s = 6 * e + 3 * l, n = h[2 * e + l], r[s + 0] = o.getX(n), r[s + 1] = o.getY(n), r[s + 2] = o.getZ(n)
        } else for (o = e.attributes.position.array, s = o.length / 3, h = s / 3, r = new Float32Array(6 * s), e = 0, c = h; c > e; e++) for (l = 0; 3 > l; l++) s = 18 * e + 6 * l, h = 9 * e + 3 * l, r[s + 0] = o[h], r[s + 1] = o[h + 1], r[s + 2] = o[h + 2], n = 9 * e + (l + 1) % 3 * 3, r[s + 3] = o[n], r[s + 4] = o[n + 1], r[s + 5] = o[n + 2];
        this.addAttribute("position", new THREE.BufferAttribute(r, 3))
    }
},THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry,THREE.AxisHelper = function (e) {
    e = e || 1;
    var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]),
        r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
    e = new THREE.BufferGeometry, e.addAttribute("position", new THREE.BufferAttribute(t, 3)), e.addAttribute("color", new THREE.BufferAttribute(r, 3)), t = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors}), THREE.LineSegments.call(this, e, t)
},THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.AxisHelper.prototype.constructor = THREE.AxisHelper,THREE.ArrowHelper = function () {
    var e = new THREE.Geometry;
    e.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
    var t = new THREE.CylinderGeometry(0, .5, 1, 5, 1);
    return t.translate(0, -.5, 0), function (r, n, i, o, a, s) {
        THREE.Object3D.call(this), void 0 === o && (o = 16776960), void 0 === i && (i = 1), void 0 === a && (a = .2 * i), void 0 === s && (s = .2 * a), this.position.copy(n), i > a && (this.line = new THREE.Line(e, new THREE.LineBasicMaterial({color: o})), this.line.matrixAutoUpdate = !1, this.add(this.line)), this.cone = new THREE.Mesh(t, new THREE.MeshBasicMaterial({color: o})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(r), this.setLength(i, a, s)
    }
}(),THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper,THREE.ArrowHelper.prototype.setDirection = function () {
    var e, t = new THREE.Vector3;
    return function (r) {
        .99999 < r.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > r.y ? this.quaternion.set(1, 0, 0, 0) : (t.set(r.z, 0, -r.x).normalize(), e = Math.acos(r.y), this.quaternion.setFromAxisAngle(t, e))
    }
}(),THREE.ArrowHelper.prototype.setLength = function (e, t, r) {
    void 0 === t && (t = .2 * e), void 0 === r && (r = .2 * t), e > t && (this.line.scale.set(1, e - t, 1), this.line.updateMatrix()), this.cone.scale.set(r, t, r), this.cone.position.y = e, this.cone.updateMatrix()
},THREE.ArrowHelper.prototype.setColor = function (e) {
    void 0 !== this.line && this.line.material.color.set(e), this.cone.material.color.set(e)
},THREE.BoxHelper = function (e) {
    var t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
        r = new Float32Array(24), n = new THREE.BufferGeometry;
    n.setIndex(new THREE.BufferAttribute(t, 1)), n.addAttribute("position", new THREE.BufferAttribute(r, 3)), THREE.LineSegments.call(this, n, new THREE.LineBasicMaterial({color: 16776960})), void 0 !== e && this.update(e)
},THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.BoxHelper.prototype.constructor = THREE.BoxHelper,THREE.BoxHelper.prototype.update = function () {
    var e = new THREE.Box3;
    return function (t) {
        if (e.setFromObject(t), !e.empty()) {
            t = e.min;
            var r = e.max, n = this.geometry.attributes.position, i = n.array;
            i[0] = r.x, i[1] = r.y, i[2] = r.z, i[3] = t.x, i[4] = r.y, i[5] = r.z, i[6] = t.x, i[7] = t.y, i[8] = r.z, i[9] = r.x, i[10] = t.y, i[11] = r.z, i[12] = r.x, i[13] = r.y, i[14] = t.z, i[15] = t.x, i[16] = r.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = r.x, i[22] = t.y, i[23] = t.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
        }
    }
}(),THREE.BoundingBoxHelper = function (e, t) {
    var r = void 0 !== t ? t : 8947848;
    this.object = e, this.box = new THREE.Box3, THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: r,
        wireframe: !0
    }))
},THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper,THREE.BoundingBoxHelper.prototype.update = function () {
    this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
},THREE.CameraHelper = function (e) {
    function t(e, t, n) {
        r(e, n), r(t, n)
    }

    function r(e, t) {
        n.vertices.push(new THREE.Vector3), n.colors.push(new THREE.Color(t)), void 0 === o[e] && (o[e] = []), o[e].push(n.vertices.length - 1)
    }

    var n = new THREE.Geometry, i = new THREE.LineBasicMaterial({color: 16777215, vertexColors: THREE.FaceColors}),
        o = {};
    t("n1", "n2", 16755200), t("n2", "n4", 16755200), t("n4", "n3", 16755200), t("n3", "n1", 16755200), t("f1", "f2", 16755200), t("f2", "f4", 16755200), t("f4", "f3", 16755200), t("f3", "f1", 16755200), t("n1", "f1", 16755200), t("n2", "f2", 16755200), t("n3", "f3", 16755200), t("n4", "f4", 16755200), t("p", "n1", 16711680), t("p", "n2", 16711680), t("p", "n3", 16711680), t("p", "n4", 16711680), t("u1", "u2", 43775), t("u2", "u3", 43775), t("u3", "u1", 43775), t("c", "t", 16777215), t("p", "c", 3355443), t("cn1", "cn2", 3355443), t("cn3", "cn4", 3355443), t("cf1", "cf2", 3355443), t("cf3", "cf4", 3355443), THREE.LineSegments.call(this, n, i), this.camera = e, this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update()
},THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.CameraHelper.prototype.constructor = THREE.CameraHelper,THREE.CameraHelper.prototype.update = function () {
    function e(e, o, a, s) {
        if (n.set(o, a, s).unproject(i), e = r[e], void 0 !== e) for (o = 0, a = e.length; a > o; o++) t.vertices[e[o]].copy(n)
    }

    var t, r, n = new THREE.Vector3, i = new THREE.Camera;
    return function () {
        t = this.geometry, r = this.pointMap, i.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -1, -1, -1), e("n2", 1, -1, -1), e("n3", -1, 1, -1), e("n4", 1, 1, -1), e("f1", -1, -1, 1), e("f2", 1, -1, 1), e("f3", -1, 1, 1), e("f4", 1, 1, 1), e("u1", .7, 1.1, -1), e("u2", -.7, 1.1, -1), e("u3", 0, 2, -1), e("cf1", -1, 0, 1), e("cf2", 1, 0, 1), e("cf3", 0, -1, 1), e("cf4", 0, 1, 1), e("cn1", -1, 0, -1), e("cn2", 1, 0, -1), e("cn3", 0, -1, -1), e("cn4", 0, 1, -1), t.verticesNeedUpdate = !0
    }
}(),THREE.DirectionalLightHelper = function (e, t) {
    THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, t = t || 1;
    var r = new THREE.Geometry;
    r.vertices.push(new THREE.Vector3((-t), t, 0), new THREE.Vector3(t, t, 0), new THREE.Vector3(t, (-t), 0), new THREE.Vector3((-t), (-t), 0), new THREE.Vector3((-t), t, 0));
    var n = new THREE.LineBasicMaterial({fog: !1});
    n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new THREE.Line(r, n), this.add(this.lightPlane), r = new THREE.Geometry, r.vertices.push(new THREE.Vector3, new THREE.Vector3), n = new THREE.LineBasicMaterial({fog: !1}), n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new THREE.Line(r, n), this.add(this.targetLine), this.update()
},THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper,THREE.DirectionalLightHelper.prototype.dispose = function () {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
},THREE.DirectionalLightHelper.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3;
    return function () {
        e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), r.subVectors(t, e), this.lightPlane.lookAt(r), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(r), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
}(),THREE.EdgesHelper = function (e, t, r) {
    t = void 0 !== t ? t : 16777215, THREE.LineSegments.call(this, new THREE.EdgesGeometry(e.geometry, r), new THREE.LineBasicMaterial({color: t})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
},THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper,THREE.FaceNormalsHelper = function (e, t, r, n) {
    this.object = e, this.size = void 0 !== t ? t : 1, e = void 0 !== r ? r : 16776960, n = void 0 !== n ? n : 1, t = 0, r = this.object.geometry, r instanceof THREE.Geometry ? t = r.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."), r = new THREE.BufferGeometry, t = new THREE.Float32Attribute(6 * t, 3), r.addAttribute("position", t), THREE.LineSegments.call(this, r, new THREE.LineBasicMaterial({
        color: e,
        linewidth: n
    })), this.matrixAutoUpdate = !1, this.update()
},THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper,THREE.FaceNormalsHelper.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Matrix3;
    return function () {
        this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
        for (var n = this.object.matrixWorld, i = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, o = o.faces, s = 0, h = 0, c = o.length; c > h; h++) {
            var u = o[h], l = u.normal;
            e.copy(a[u.a]).add(a[u.b]).add(a[u.c]).divideScalar(3).applyMatrix4(n), t.copy(l).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), i.setXYZ(s, e.x, e.y, e.z), s += 1, i.setXYZ(s, t.x, t.y, t.z), s += 1
        }
        return i.needsUpdate = !0, this
    }
}(),THREE.GridHelper = function (e, t) {
    var r = new THREE.Geometry, n = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    this.color1 = new THREE.Color(4473924), this.color2 = new THREE.Color(8947848);
    for (var i = -e; e >= i; i += t) {
        r.vertices.push(new THREE.Vector3((-e), 0, i), new THREE.Vector3(e, 0, i), new THREE.Vector3(i, 0, (-e)), new THREE.Vector3(i, 0, e));
        var o = 0 === i ? this.color1 : this.color2;
        r.colors.push(o, o, o, o)
    }
    THREE.LineSegments.call(this, r, n)
},THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.GridHelper.prototype.constructor = THREE.GridHelper,THREE.GridHelper.prototype.setColors = function (e, t) {
    this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0
},THREE.HemisphereLightHelper = function (e, t) {
    THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new THREE.Color, new THREE.Color];
    var r = new THREE.SphereGeometry(t, 4, 2);
    r.rotateX(-Math.PI / 2);
    for (var n = 0; 8 > n; n++) r.faces[n].color = this.colors[4 > n ? 0 : 1];
    n = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    }), this.lightSphere = new THREE.Mesh(r, n), this.add(this.lightSphere), this.update()
},THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper,THREE.HemisphereLightHelper.prototype.dispose = function () {
    this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
},THREE.HemisphereLightHelper.prototype.update = function () {
    var e = new THREE.Vector3;
    return function () {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}(),THREE.PointLightHelper = function (e, t) {
    this.light = e, this.light.updateMatrixWorld();
    var r = new THREE.SphereGeometry(t, 4, 2), n = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    n.color.copy(this.light.color).multiplyScalar(this.light.intensity), THREE.Mesh.call(this, r, n), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
},THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper,THREE.PointLightHelper.prototype.dispose = function () {
    this.geometry.dispose(), this.material.dispose()
},THREE.PointLightHelper.prototype.update = function () {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
},THREE.SkeletonHelper = function (e) {
    this.bones = this.getBoneList(e);
    for (var t = new THREE.Geometry, r = 0; r < this.bones.length; r++) this.bones[r].parent instanceof THREE.Bone && (t.vertices.push(new THREE.Vector3), t.vertices.push(new THREE.Vector3), t.colors.push(new THREE.Color(0, 0, 1)), t.colors.push(new THREE.Color(0, 1, 0)));
    t.dynamic = !0, r = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    }), THREE.LineSegments.call(this, t, r), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update()
},THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper,THREE.SkeletonHelper.prototype.getBoneList = function (e) {
    var t = [];
    e instanceof THREE.Bone && t.push(e);
    for (var r = 0; r < e.children.length; r++) t.push.apply(t, this.getBoneList(e.children[r]));
    return t
},THREE.SkeletonHelper.prototype.update = function () {
    for (var e = this.geometry, t = (new THREE.Matrix4).getInverse(this.root.matrixWorld), r = new THREE.Matrix4, n = 0, i = 0; i < this.bones.length; i++) {
        var o = this.bones[i];
        o.parent instanceof THREE.Bone && (r.multiplyMatrices(t, o.matrixWorld), e.vertices[n].setFromMatrixPosition(r), r.multiplyMatrices(t, o.parent.matrixWorld), e.vertices[n + 1].setFromMatrixPosition(r), n += 2)
    }
    e.verticesNeedUpdate = !0, e.computeBoundingSphere()
},THREE.SpotLightHelper = function (e) {
    THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, e = new THREE.CylinderGeometry(0, 1, 1, 8, 1, (!0)), e.translate(0, -.5, 0), e.rotateX(-Math.PI / 2);
    var t = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
    this.cone = new THREE.Mesh(e, t), this.add(this.cone), this.update()
},THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper,THREE.SpotLightHelper.prototype.dispose = function () {
    this.cone.geometry.dispose(), this.cone.material.dispose()
},THREE.SpotLightHelper.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3;
    return function () {
        var r = this.light.distance ? this.light.distance : 1e4, n = r * Math.tan(this.light.angle);
        this.cone.scale.set(n, n, r), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}(),THREE.VertexNormalsHelper = function (e, t, r, n) {
    this.object = e, this.size = void 0 !== t ? t : 1, e = void 0 !== r ? r : 16711680, n = void 0 !== n ? n : 1, t = 0, r = this.object.geometry,
        r instanceof THREE.Geometry ? t = 3 * r.faces.length : r instanceof THREE.BufferGeometry && (t = r.attributes.normal.count), r = new THREE.BufferGeometry, t = new THREE.Float32Attribute(6 * t, 3), r.addAttribute("position", t), THREE.LineSegments.call(this, r, new THREE.LineBasicMaterial({
        color: e,
        linewidth: n
    })), this.matrixAutoUpdate = !1, this.update()
},THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper,THREE.VertexNormalsHelper.prototype.update = function () {
    var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Matrix3;
    return function () {
        var n = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
        var i = this.object.matrixWorld, o = this.geometry.attributes.position, a = this.object.geometry;
        if (a instanceof THREE.Geometry) for (var s = a.vertices, h = a.faces, c = a = 0, u = h.length; u > c; c++) for (var l = h[c], p = 0, d = l.vertexNormals.length; d > p; p++) {
            var f = l.vertexNormals[p];
            e.copy(s[l[n[p]]]).applyMatrix4(i), t.copy(f).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), o.setXYZ(a, e.x, e.y, e.z), a += 1, o.setXYZ(a, t.x, t.y, t.z), a += 1
        } else if (a instanceof THREE.BufferGeometry) for (n = a.attributes.position, s = a.attributes.normal, p = a = 0, d = n.count; d > p; p++) e.set(n.getX(p), n.getY(p), n.getZ(p)).applyMatrix4(i), t.set(s.getX(p), s.getY(p), s.getZ(p)), t.applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), o.setXYZ(a, e.x, e.y, e.z), a += 1, o.setXYZ(a, t.x, t.y, t.z), a += 1;
        return o.needsUpdate = !0, this
    }
}(),THREE.WireframeHelper = function (e, t) {
    var r = void 0 !== t ? t : 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(e.geometry), new THREE.LineBasicMaterial({color: r})), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
},THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype),THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper,THREE.ImmediateRenderObject = function (e) {
    THREE.Object3D.call(this), this.material = e, this.render = function (e) {
    }
},THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype),THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject,THREE.MorphBlendMesh = function (e, t) {
    THREE.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
    var r = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, r - 1, r / 1), this.setAnimationWeight("__default", 1)
},THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh,THREE.MorphBlendMesh.prototype.createAnimation = function (e, t, r, n) {
    t = {
        start: t,
        end: r,
        length: r - t + 1,
        fps: n,
        duration: (r - t) / n,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    }, this.animationsMap[e] = t, this.animationsList.push(t)
},THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (e) {
    for (var t, r = /([a-z]+)_?(\d+)/, n = {}, i = this.geometry, o = 0, a = i.morphTargets.length; a > o; o++) {
        var s = i.morphTargets[o].name.match(r);
        if (s && 1 < s.length) {
            var h = s[1];
            n[h] || (n[h] = {
                start: 1 / 0,
                end: -(1 / 0)
            }), s = n[h], o < s.start && (s.start = o), o > s.end && (s.end = o), t || (t = h)
        }
    }
    for (h in n) s = n[h], this.createAnimation(h, s.start, s.end, e);
    this.firstAnimation = t
},THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (e) {
    (e = this.animationsMap[e]) && (e.direction = 1, e.directionBackwards = !1)
},THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (e) {
    (e = this.animationsMap[e]) && (e.direction = -1, e.directionBackwards = !0)
},THREE.MorphBlendMesh.prototype.setAnimationFPS = function (e, t) {
    var r = this.animationsMap[e];
    r && (r.fps = t, r.duration = (r.end - r.start) / r.fps)
},THREE.MorphBlendMesh.prototype.setAnimationDuration = function (e, t) {
    var r = this.animationsMap[e];
    r && (r.duration = t, r.fps = (r.end - r.start) / r.duration)
},THREE.MorphBlendMesh.prototype.setAnimationWeight = function (e, t) {
    var r = this.animationsMap[e];
    r && (r.weight = t)
},THREE.MorphBlendMesh.prototype.setAnimationTime = function (e, t) {
    var r = this.animationsMap[e];
    r && (r.time = t)
},THREE.MorphBlendMesh.prototype.getAnimationTime = function (e) {
    var t = 0;
    return (e = this.animationsMap[e]) && (t = e.time), t
},THREE.MorphBlendMesh.prototype.getAnimationDuration = function (e) {
    var t = -1;
    return (e = this.animationsMap[e]) && (t = e.duration), t
},THREE.MorphBlendMesh.prototype.playAnimation = function (e) {
    var t = this.animationsMap[e];
    t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
},THREE.MorphBlendMesh.prototype.stopAnimation = function (e) {
    (e = this.animationsMap[e]) && (e.active = !1)
},THREE.MorphBlendMesh.prototype.update = function (e) {
    for (var t = 0, r = this.animationsList.length; r > t; t++) {
        var n = this.animationsList[t];
        if (n.active) {
            var i = n.duration / n.length;
            n.time += n.direction * e, n.mirroredLoop ? (n.time > n.duration || 0 > n.time) && (n.direction *= -1, n.time > n.duration && (n.time = n.duration, n.directionBackwards = !0), 0 > n.time && (n.time = 0, n.directionBackwards = !1)) : (n.time %= n.duration, 0 > n.time && (n.time += n.duration));
            var o = n.start + THREE.Math.clamp(Math.floor(n.time / i), 0, n.length - 1), a = n.weight;
            o !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0, this.morphTargetInfluences[n.currentFrame] = 1 * a, this.morphTargetInfluences[o] = 0, n.lastFrame = n.currentFrame, n.currentFrame = o), i = n.time % i / i, n.directionBackwards && (i = 1 - i), n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = i * a, this.morphTargetInfluences[n.lastFrame] = (1 - i) * a) : this.morphTargetInfluences[n.currentFrame] = a
        }
    }
},THREE.RenderableObject = function () {
    this.id = 0, this.object = null, this.z = 0, this.renderOrder = 0
},THREE.RenderableFace = function () {
    this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.normalModel = new THREE.Vector3, this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.vertexNormalsLength = 0, this.color = new THREE.Color, this.material = null, this.uvs = [new THREE.Vector2, new THREE.Vector2, new THREE.Vector2], this.z = 0, this.renderOrder = 0
},THREE.RenderableVertex = function () {
    this.position = new THREE.Vector3, this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4, this.visible = !0
},THREE.RenderableVertex.prototype.copy = function (e) {
    this.positionWorld.copy(e.positionWorld), this.positionScreen.copy(e.positionScreen)
},THREE.RenderableLine = function () {
    this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.vertexColors = [new THREE.Color, new THREE.Color], this.material = null, this.z = 0, this.renderOrder = 0
},THREE.RenderableSprite = function () {
    this.id = 0, this.object = null, this.x = 0, this.y = 0, this.z = 0, this.rotation = 0, this.scale = new THREE.Vector2, this.material = null, this.renderOrder = 0
},THREE.Projector = function () {
    function e() {
        if (h === v) {
            var e = new THREE.RenderableObject;
            return T.push(e), v++, h++, e
        }
        return T[h++]
    }

    function t() {
        if (u === R) {
            var e = new THREE.RenderableVertex;
            return y.push(e), R++, u++, e
        }
        return y[u++]
    }

    function r() {
        if (p === H) {
            var e = new THREE.RenderableFace;
            return x.push(e), H++, p++, e
        }
        return x[p++]
    }

    function n() {
        if (f === w) {
            var e = new THREE.RenderableLine;
            return b.push(e), w++, f++, e
        }
        return b[f++]
    }

    function i() {
        if (m === S) {
            var e = new THREE.RenderableSprite;
            return M.push(e), S++, m++, e
        }
        return M[m++]
    }

    function o(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id !== t.id ? e.id - t.id : 0
    }

    function a(e, t) {
        var r = 0, n = 1, i = e.z + e.w, o = t.z + t.w, a = -e.z + e.w, s = -t.z + t.w;
        return i >= 0 && o >= 0 && a >= 0 && s >= 0 || !(0 > i && 0 > o || 0 > a && 0 > s) && (0 > i ? r = Math.max(r, i / (i - o)) : 0 > o && (n = Math.min(n, i / (i - o))), 0 > a ? r = Math.max(r, a / (a - s)) : 0 > s && (n = Math.min(n, a / (a - s))), !(r > n) && (e.lerp(t, r), t.lerp(e, 1 - n), !0))
    }

    var s, h, c, u, l, p, d, f, E, m, g, T = [], v = 0, y = [], R = 0, x = [], H = 0, b = [], w = 0, M = [], S = 0,
        _ = {objects: [], lights: [], elements: []}, C = new THREE.Vector3, A = new THREE.Vector4,
        L = new THREE.Box3(new THREE.Vector3((-1), (-1), (-1)), new THREE.Vector3(1, 1, 1)), P = new THREE.Box3,
        k = new Array(3), D = (new Array(4), new THREE.Matrix4), F = new THREE.Matrix4, O = new THREE.Matrix4,
        V = new THREE.Matrix3, N = new THREE.Frustum, B = new THREE.Vector4, U = new THREE.Vector4;
    this.projectVector = function (e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
    }, this.unprojectVector = function (e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
    }, this.pickingRay = function (e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    };
    var G = function () {
        var e = [], i = [], o = null, a = null, s = new THREE.Matrix3, h = function (t) {
            o = t, a = o.material, s.getNormalMatrix(o.matrixWorld), e.length = 0, i.length = 0
        }, u = function (e) {
            var t = e.position, r = e.positionWorld, n = e.positionScreen;
            r.copy(t).applyMatrix4(g), n.copy(r).applyMatrix4(F);
            var i = 1 / n.w;
            n.x *= i, n.y *= i, n.z *= i, e.visible = n.x >= -1 && n.x <= 1 && n.y >= -1 && n.y <= 1 && n.z >= -1 && n.z <= 1
        }, p = function (e, r, n) {
            c = t(), c.position.set(e, r, n), u(c)
        }, f = function (t, r, n) {
            e.push(t, r, n)
        }, E = function (e, t) {
            i.push(e, t)
        }, m = function (e, t, r) {
            return e.visible === !0 || t.visible === !0 || r.visible === !0 || (k[0] = e.positionScreen, k[1] = t.positionScreen, k[2] = r.positionScreen, L.isIntersectionBox(P.setFromPoints(k)))
        }, T = function (e, t, r) {
            return (r.positionScreen.x - e.positionScreen.x) * (t.positionScreen.y - e.positionScreen.y) - (r.positionScreen.y - e.positionScreen.y) * (t.positionScreen.x - e.positionScreen.x) < 0
        }, v = function (e, t) {
            var r = y[e], i = y[t];
            d = n(), d.id = o.id, d.v1.copy(r), d.v2.copy(i), d.z = (r.positionScreen.z + i.positionScreen.z) / 2, d.renderOrder = o.renderOrder, d.material = o.material, _.elements.push(d)
        }, R = function (t, n, h) {
            var c = y[t], u = y[n], p = y[h];
            if (m(c, u, p) !== !1 && (a.side === THREE.DoubleSide || T(c, u, p) === !0)) {
                l = r(), l.id = o.id, l.v1.copy(c), l.v2.copy(u), l.v3.copy(p), l.z = (c.positionScreen.z + u.positionScreen.z + p.positionScreen.z) / 3, l.renderOrder = o.renderOrder, l.normalModel.fromArray(e, 3 * t), l.normalModel.applyMatrix3(s).normalize();
                for (var d = 0; 3 > d; d++) {
                    var f = l.vertexNormalsModel[d];
                    f.fromArray(e, 3 * arguments[d]), f.applyMatrix3(s).normalize();
                    var E = l.uvs[d];
                    E.fromArray(i, 2 * arguments[d])
                }
                l.vertexNormalsLength = 3, l.material = o.material, _.elements.push(l)
            }
        };
        return {
            setObject: h,
            projectVertex: u,
            checkTriangleVisibility: m,
            checkBackfaceCulling: T,
            pushVertex: p,
            pushNormal: f,
            pushUv: E,
            pushLine: v,
            pushTriangle: R
        }
    }, I = new G;
    this.projectScene = function (c, T, v, R) {
        p = 0, f = 0, m = 0, _.elements.length = 0, c.autoUpdate === !0 && c.updateMatrixWorld(), null === T.parent && T.updateMatrixWorld(), D.copy(T.matrixWorldInverse.getInverse(T.matrixWorld)), F.multiplyMatrices(T.projectionMatrix, D), N.setFromMatrix(F), h = 0, _.objects.length = 0, _.lights.length = 0, c.traverseVisible(function (t) {
            if (t instanceof THREE.Light) _.lights.push(t); else if (t instanceof THREE.Mesh || t instanceof THREE.Line || t instanceof THREE.Sprite) {
                var r = t.material;
                if (r.visible === !1) return;
                (t.frustumCulled === !1 || N.intersectsObject(t) === !0) && (s = e(), s.id = t.id, s.object = t, C.setFromMatrixPosition(t.matrixWorld), C.applyProjection(F), s.z = C.z, s.renderOrder = t.renderOrder, _.objects.push(s))
            }
        }), v === !0 && _.objects.sort(o);
        for (var x = 0, H = _.objects.length; H > x; x++) {
            var b = _.objects[x].object, w = b.geometry;
            if (I.setObject(b), g = b.matrixWorld, u = 0, b instanceof THREE.Mesh) {
                if (w instanceof THREE.BufferGeometry) {
                    var M = w.attributes, S = w.groups;
                    if (void 0 === M.position) continue;
                    for (var L = M.position.array, P = 0, k = L.length; k > P; P += 3) I.pushVertex(L[P], L[P + 1], L[P + 2]);
                    if (void 0 !== M.normal) for (var G = M.normal.array, P = 0, k = G.length; k > P; P += 3) I.pushNormal(G[P], G[P + 1], G[P + 2]);
                    if (void 0 !== M.uv) for (var z = M.uv.array, P = 0, k = z.length; k > P; P += 2) I.pushUv(z[P], z[P + 1]);
                    if (null !== w.index) {
                        var j = w.index.array;
                        if (S.length > 0) for (var x = 0; x < S.length; x++) for (var W = S[x], P = W.start, k = W.start + W.count; k > P; P += 3) I.pushTriangle(j[P], j[P + 1], j[P + 2]); else for (var P = 0, k = j.length; k > P; P += 3) I.pushTriangle(j[P], j[P + 1], j[P + 2])
                    } else for (var P = 0, k = L.length / 3; k > P; P += 3) I.pushTriangle(P, P + 1, P + 2)
                } else if (w instanceof THREE.Geometry) {
                    var X = w.vertices, q = w.faces, Y = w.faceVertexUvs[0];
                    V.getNormalMatrix(g);
                    for (var K = b.material, Q = K instanceof THREE.MeshFaceMaterial, Z = Q === !0 ? b.material : null, $ = 0, J = X.length; J > $; $++) {
                        var ee = X[$];
                        if (C.copy(ee), K.morphTargets === !0) for (var te = w.morphTargets, re = b.morphTargetInfluences, ne = 0, ie = te.length; ie > ne; ne++) {
                            var oe = re[ne];
                            if (0 !== oe) {
                                var ae = te[ne], se = ae.vertices[$];
                                C.x += (se.x - ee.x) * oe, C.y += (se.y - ee.y) * oe, C.z += (se.z - ee.z) * oe
                            }
                        }
                        I.pushVertex(C.x, C.y, C.z)
                    }
                    for (var he = 0, ce = q.length; ce > he; he++) {
                        var ue = q[he];
                        if (K = Q === !0 ? Z.materials[ue.materialIndex] : b.material, void 0 !== K) {
                            var le = K.side, pe = y[ue.a], de = y[ue.b], fe = y[ue.c];
                            if (I.checkTriangleVisibility(pe, de, fe) !== !1) {
                                var Ee = I.checkBackfaceCulling(pe, de, fe);
                                if (le !== THREE.DoubleSide) {
                                    if (le === THREE.FrontSide && Ee === !1) continue;
                                    if (le === THREE.BackSide && Ee === !0) continue
                                }
                                l = r(), l.id = b.id, l.v1.copy(pe), l.v2.copy(de), l.v3.copy(fe), l.normalModel.copy(ue.normal), Ee !== !1 || le !== THREE.BackSide && le !== THREE.DoubleSide || l.normalModel.negate(), l.normalModel.applyMatrix3(V).normalize();
                                for (var me = ue.vertexNormals, ge = 0, Te = Math.min(me.length, 3); Te > ge; ge++) {
                                    var ve = l.vertexNormalsModel[ge];
                                    ve.copy(me[ge]), Ee !== !1 || le !== THREE.BackSide && le !== THREE.DoubleSide || ve.negate(), ve.applyMatrix3(V).normalize()
                                }
                                l.vertexNormalsLength = me.length;
                                var ye = Y[he];
                                if (void 0 !== ye) for (var Re = 0; 3 > Re; Re++) l.uvs[Re].copy(ye[Re]);
                                l.color = ue.color, l.material = K, l.z = (pe.positionScreen.z + de.positionScreen.z + fe.positionScreen.z) / 3, l.renderOrder = b.renderOrder, _.elements.push(l)
                            }
                        }
                    }
                }
            } else if (b instanceof THREE.Line) {
                if (w instanceof THREE.BufferGeometry) {
                    var M = w.attributes;
                    if (void 0 !== M.position) {
                        for (var L = M.position.array, P = 0, k = L.length; k > P; P += 3) I.pushVertex(L[P], L[P + 1], L[P + 2]);
                        if (null !== w.index) for (var j = w.index.array, P = 0, k = j.length; k > P; P += 2) I.pushLine(j[P], j[P + 1]); else for (var xe = b instanceof THREE.LineSegments ? 2 : 1, P = 0, k = L.length / 3 - 1; k > P; P += xe) I.pushLine(P, P + 1)
                    }
                } else if (w instanceof THREE.Geometry) {
                    O.multiplyMatrices(F, g);
                    var X = b.geometry.vertices;
                    if (0 === X.length) continue;
                    pe = t(), pe.positionScreen.copy(X[0]).applyMatrix4(O);
                    for (var xe = b instanceof THREE.LineSegments ? 2 : 1, $ = 1, J = X.length; J > $; $++) pe = t(), pe.positionScreen.copy(X[$]).applyMatrix4(O), ($ + 1) % xe > 0 || (de = y[u - 2], B.copy(pe.positionScreen), U.copy(de.positionScreen), a(B, U) === !0 && (B.multiplyScalar(1 / B.w), U.multiplyScalar(1 / U.w), d = n(), d.id = b.id, d.v1.positionScreen.copy(B), d.v2.positionScreen.copy(U), d.z = Math.max(B.z, U.z), d.renderOrder = b.renderOrder, d.material = b.material, b.material.vertexColors === THREE.VertexColors && (d.vertexColors[0].copy(b.geometry.colors[$]), d.vertexColors[1].copy(b.geometry.colors[$ - 1])), _.elements.push(d)))
                }
            } else if (b instanceof THREE.Sprite) {
                A.set(g.elements[12], g.elements[13], g.elements[14], 1), A.applyMatrix4(F);
                var He = 1 / A.w;
                A.z *= He, A.z >= -1 && A.z <= 1 && (E = i(), E.id = b.id, E.x = A.x * He, E.y = A.y * He, E.z = A.z, E.renderOrder = b.renderOrder, E.object = b, E.rotation = b.rotation, E.scale.x = b.scale.x * Math.abs(E.x - (A.x + T.projectionMatrix.elements[0]) / (A.w + T.projectionMatrix.elements[12])), E.scale.y = b.scale.y * Math.abs(E.y - (A.y + T.projectionMatrix.elements[5]) / (A.w + T.projectionMatrix.elements[13])), E.material = b.material, _.elements.push(E))
            }
        }
        return R === !0 && _.elements.sort(o), _
    }
},THREE.SpriteCanvasMaterial = function (e) {
    THREE.Material.call(this), this.type = "SpriteCanvasMaterial", this.color = new THREE.Color(16777215), this.program = function (e, t) {
    }, this.setValues(e)
},THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype),THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial,THREE.SpriteCanvasMaterial.prototype.clone = function () {
    var e = new THREE.SpriteCanvasMaterial;
    return e.copy(this), e.color.copy(this.color), e.program = this.program, e
},THREE.CanvasRenderer = function (e) {
    function t() {
        ge.setRGB(0, 0, 0), Te.setRGB(0, 0, 0), ve.setRGB(0, 0, 0);
        for (var e = 0, t = x.length; t > e; e++) {
            var r = x[e], n = r.color;
            r instanceof THREE.AmbientLight ? ge.add(n) : r instanceof THREE.DirectionalLight ? Te.add(n) : r instanceof THREE.PointLight && ve.add(n)
        }
    }

    function r(e, t, r) {
        for (var n = 0, i = x.length; i > n; n++) {
            var o = x[n];
            if (pe.copy(o.color), o instanceof THREE.DirectionalLight) {
                var a = ye.setFromMatrixPosition(o.matrixWorld).normalize(), s = t.dot(a);
                if (0 >= s) continue;
                s *= o.intensity, r.add(pe.multiplyScalar(s))
            } else if (o instanceof THREE.PointLight) {
                var a = ye.setFromMatrixPosition(o.matrixWorld), s = t.dot(ye.subVectors(a, e).normalize());
                if (0 >= s) continue;
                if (s *= 0 == o.distance ? 1 : 1 - Math.min(e.distanceTo(a) / o.distance, 1), 0 == s) continue;
                s *= o.intensity, r.add(pe.multiplyScalar(s))
            }
        }
    }

    function n(e, t, r) {
        p(r.opacity), d(r.blending);
        var n = t.scale.x * W, i = t.scale.y * X, o = .5 * Math.sqrt(n * n + i * i);
        if (me.min.set(e.x - o, e.y - o), me.max.set(e.x + o, e.y + o), r instanceof THREE.SpriteMaterial) {
            var a = r.map;
            if (null !== a) {
                var s = de[a.id];
                if ((void 0 === s || s.version !== a.version) && (s = c(a), de[a.id] = s), void 0 !== s.canvas) {
                    T(s.canvas);
                    var h = a.image, u = h.width * a.offset.x, l = h.height * a.offset.y, f = h.width * a.repeat.x,
                        E = h.height * a.repeat.y, m = n / f, v = i / E;
                    $.save(), $.translate(e.x, e.y), 0 !== r.rotation && $.rotate(r.rotation), $.translate(-n / 2, -i / 2), $.scale(m, v), $.translate(-u, -l), $.fillRect(u, l, f, E), $.restore()
                }
            } else T(r.color.getStyle()), $.save(), $.translate(e.x, e.y), 0 !== r.rotation && $.rotate(r.rotation), $.scale(n, -i), $.fillRect(-.5, -.5, 1, 1), $.restore()
        } else r instanceof THREE.SpriteCanvasMaterial && (g(r.color.getStyle()), T(r.color.getStyle()), $.save(), $.translate(e.x, e.y), 0 !== r.rotation && $.rotate(r.rotation), $.scale(n, i), r.program($), $.restore())
    }

    function i(e, t, r, n) {
        if (p(n.opacity), d(n.blending), $.beginPath(), $.moveTo(e.positionScreen.x, e.positionScreen.y), $.lineTo(t.positionScreen.x, t.positionScreen.y), n instanceof THREE.LineBasicMaterial) {
            if (f(n.linewidth), E(n.linecap), m(n.linejoin), n.vertexColors !== THREE.VertexColors) g(n.color.getStyle()); else {
                var i = r.vertexColors[0].getStyle(), o = r.vertexColors[1].getStyle();
                if (i === o) g(i); else {
                    try {
                        var a = $.createLinearGradient(e.positionScreen.x, e.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                        a.addColorStop(0, i), a.addColorStop(1, o)
                    } catch (s) {
                        a = i
                    }
                    g(a)
                }
            }
            $.stroke(), me.expandByScalar(2 * n.linewidth)
        } else n instanceof THREE.LineDashedMaterial && (f(n.linewidth), E(n.linecap), m(n.linejoin), g(n.color.getStyle()), v([n.dashSize, n.gapSize]), $.stroke(), me.expandByScalar(2 * n.linewidth), v([]))
    }

    function o(e, t, n, i, o, c, l, f) {
        if (U.info.render.vertices += 3, U.info.render.faces++, p(f.opacity), d(f.blending), S = e.positionScreen.x, _ = e.positionScreen.y, C = t.positionScreen.x, A = t.positionScreen.y, L = n.positionScreen.x, P = n.positionScreen.y, a(S, _, C, A, L, P), (f instanceof THREE.MeshLambertMaterial || f instanceof THREE.MeshPhongMaterial) && null === f.map) ue.copy(f.color), le.copy(f.emissive), f.vertexColors === THREE.FaceColors && ue.multiply(l.color), ce.copy(ge), Re.copy(e.positionWorld).add(t.positionWorld).add(n.positionWorld).divideScalar(3), r(Re, l.normalModel, ce), ce.multiply(ue).add(le), f.wireframe === !0 ? s(ce, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ce); else if (f instanceof THREE.MeshBasicMaterial || f instanceof THREE.MeshLambertMaterial || f instanceof THREE.MeshPhongMaterial) if (null !== f.map) {
            var E = f.map.mapping;
            E === THREE.UVMapping && (k = l.uvs, u(S, _, C, A, L, P, k[i].x, k[i].y, k[o].x, k[o].y, k[c].x, k[c].y, f.map))
        } else null !== f.envMap ? f.envMap.mapping === THREE.SphericalReflectionMapping && (xe.copy(l.vertexNormalsModel[i]).applyMatrix3(He), D = .5 * xe.x + .5, F = .5 * xe.y + .5, xe.copy(l.vertexNormalsModel[o]).applyMatrix3(He), O = .5 * xe.x + .5, V = .5 * xe.y + .5, xe.copy(l.vertexNormalsModel[c]).applyMatrix3(He), N = .5 * xe.x + .5, B = .5 * xe.y + .5, u(S, _, C, A, L, P, D, F, O, V, N, B, f.envMap)) : (ce.copy(f.color), f.vertexColors === THREE.FaceColors && ce.multiply(l.color), f.wireframe === !0 ? s(ce, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ce)); else f instanceof THREE.MeshNormalMaterial ? (xe.copy(l.normalModel).applyMatrix3(He), ce.setRGB(xe.x, xe.y, xe.z).multiplyScalar(.5).addScalar(.5), f.wireframe === !0 ? s(ce, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ce)) : (ce.setRGB(1, 1, 1), f.wireframe === !0 ? s(ce, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ce))
    }

    function a(e, t, r, n, i, o) {
        $.beginPath(), $.moveTo(e, t), $.lineTo(r, n), $.lineTo(i, o), $.closePath()
    }

    function s(e, t, r, n) {
        f(t), E(r), m(n), g(e.getStyle()), $.stroke(), me.expandByScalar(2 * t)
    }

    function h(e) {
        T(e.getStyle()), $.fill()
    }

    function c(e) {
        if (0 === e.version || e instanceof THREE.CompressedTexture || e instanceof THREE.DataTexture) return {
            canvas: void 0,
            version: e.version
        };
        var t = e.image, r = document.createElement("canvas");
        r.width = t.width, r.height = t.height;
        var n = r.getContext("2d");
        n.setTransform(1, 0, 0, -1, 0, t.height), n.drawImage(t, 0, 0);
        var i = e.wrapS === THREE.RepeatWrapping, o = e.wrapT === THREE.RepeatWrapping, a = "no-repeat";
        return i === !0 && o === !0 ? a = "repeat" : i === !0 ? a = "repeat-x" : o === !0 && (a = "repeat-y"), {
            canvas: $.createPattern(r, a),
            version: e.version
        }
    }

    function u(e, t, r, n, i, o, a, s, h, u, l, p, d) {
        var f = de[d.id];
        if ((void 0 === f || f.version !== d.version) && (f = c(d), de[d.id] = f), void 0 === f.canvas) return T("rgba( 0, 0, 0, 1)"), void $.fill();
        T(f.canvas);
        var E, m, g, v, y, R, x, H, b = d.offset.x / d.repeat.x, w = d.offset.y / d.repeat.y,
            M = d.image.width * d.repeat.x, S = d.image.height * d.repeat.y;
        a = (a + b) * M, s = (s + w) * S, h = (h + b) * M, u = (u + w) * S, l = (l + b) * M, p = (p + w) * S, r -= e, n -= t, i -= e, o -= t, h -= a, u -= s, l -= a, p -= s, x = h * p - l * u, 0 !== x && (H = 1 / x, E = (p * r - u * i) * H, m = (p * n - u * o) * H, g = (h * i - l * r) * H, v = (h * o - l * n) * H, y = e - E * a - g * s, R = t - m * a - v * s, $.save(), $.transform(E, m, g, v, y, R), $.fill(), $.restore())
    }

    function l(e, t, r) {
        var n, i = t.x - e.x, o = t.y - e.y, a = i * i + o * o;
        0 !== a && (n = r / Math.sqrt(a), i *= n, o *= n, t.x += i, t.y += o, e.x -= i, e.y -= o)
    }

    function p(e) {
        te !== e && ($.globalAlpha = e, te = e)
    }

    function d(e) {
        re !== e && (e === THREE.NormalBlending ? $.globalCompositeOperation = "source-over" : e === THREE.AdditiveBlending ? $.globalCompositeOperation = "lighter" : e === THREE.SubtractiveBlending && ($.globalCompositeOperation = "darker"), re = e)
    }

    function f(e) {
        oe !== e && ($.lineWidth = e, oe = e)
    }

    function E(e) {
        ae !== e && ($.lineCap = e, ae = e)
    }

    function m(e) {
        se !== e && ($.lineJoin = e, se = e)
    }

    function g(e) {
        ne !== e && ($.strokeStyle = e, ne = e)
    }

    function T(e) {
        ie !== e && ($.fillStyle = e, ie = e)
    }

    function v(e) {
        he.length !== e.length && ($.setLineDash(e), he = e)
    }

    console.log("THREE.CanvasRenderer", THREE.REVISION), e = e || {};
    var y, R, x, H, b, w, M, S, _, C, A, L, P, k, D, F, O, V, N, B, U = this, G = new THREE.Projector,
        I = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"), z = I.width, j = I.height,
        W = Math.floor(z / 2), X = Math.floor(j / 2), q = 0, Y = 0, K = z, Q = j, Z = 1,
        $ = I.getContext("2d", {alpha: e.alpha === !0}), J = new THREE.Color(0), ee = e.alpha === !0 ? 0 : 1, te = 1,
        re = 0, ne = null, ie = null, oe = null, ae = null, se = null, he = [],
        ce = (new THREE.RenderableVertex, new THREE.RenderableVertex, new THREE.Color),
        ue = (new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color),
        le = new THREE.Color, pe = new THREE.Color, de = {}, fe = new THREE.Box2, Ee = new THREE.Box2,
        me = new THREE.Box2, ge = new THREE.Color, Te = new THREE.Color, ve = new THREE.Color, ye = new THREE.Vector3,
        Re = new THREE.Vector3, xe = new THREE.Vector3, He = new THREE.Matrix3;
    void 0 === $.setLineDash && ($.setLineDash = function () {
    }), this.domElement = I, this.autoClear = !0, this.sortObjects = !0, this.sortElements = !0, this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    }, this.supportsVertexTextures = function () {
    }, this.setFaceCulling = function () {
    }, this.getContext = function () {
        return $
    }, this.getContextAttributes = function () {
        return $.getContextAttributes()
    }, this.getPixelRatio = function () {
        return Z
    }, this.setPixelRatio = function (e) {
        void 0 !== e && (Z = e)
    }, this.setSize = function (e, t, r) {
        z = e * Z, j = t * Z, I.width = z, I.height = j, W = Math.floor(z / 2), X = Math.floor(j / 2), r !== !1 && (I.style.width = e + "px", I.style.height = t + "px"), fe.min.set(-W, -X), fe.max.set(W, X), Ee.min.set(-W, -X), Ee.max.set(W, X), te = 1, re = 0, ne = null, ie = null, oe = null, ae = null, se = null, this.setViewport(0, 0, e, t)
    }, this.setViewport = function (e, t, r, n) {
        q = e * Z, Y = t * Z, K = r * Z, Q = n * Z
    }, this.setScissor = function () {
    }, this.enableScissorTest = function () {
    }, this.setClearColor = function (e, t) {
        J.set(e), ee = void 0 !== t ? t : 1, Ee.min.set(-W, -X), Ee.max.set(W, X)
    }, this.setClearColorHex = function (e, t) {
        console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."), this.setClearColor(e, t)
    }, this.getClearColor = function () {
        return J
    }, this.getClearAlpha = function () {
        return ee
    }, this.getMaxAnisotropy = function () {
        return 0
    }, this.clear = function () {
        Ee.empty() === !1 && (Ee.intersect(fe), Ee.expandByScalar(2), Ee.min.x = Ee.min.x + W, Ee.min.y = -Ee.min.y + X, Ee.max.x = Ee.max.x + W, Ee.max.y = -Ee.max.y + X, 1 > ee && $.clearRect(0 | Ee.min.x, 0 | Ee.max.y, Ee.max.x - Ee.min.x | 0, Ee.min.y - Ee.max.y | 0), ee > 0 && (d(THREE.NormalBlending), p(1), T("rgba(" + Math.floor(255 * J.r) + "," + Math.floor(255 * J.g) + "," + Math.floor(255 * J.b) + "," + ee + ")"), $.fillRect(0 | Ee.min.x, 0 | Ee.max.y, Ee.max.x - Ee.min.x | 0, Ee.min.y - Ee.max.y | 0)), Ee.makeEmpty())
    }, this.clearColor = function () {
    }, this.clearDepth = function () {
    }, this.clearStencil = function () {
    }, this.render = function (e, r) {
        if (r instanceof THREE.Camera == 0) return void console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
        this.autoClear === !0 && this.clear(), U.info.render.vertices = 0, U.info.render.faces = 0, $.setTransform(K / z, 0, 0, -Q / j, q, j - Y), $.translate(W, X), y = G.projectScene(e, r, this.sortObjects, this.sortElements), R = y.elements, x = y.lights, H = r, He.getNormalMatrix(r.matrixWorldInverse), t();
        for (var a = 0, s = R.length; s > a; a++) {
            var h = R[a], c = h.material;
            if (void 0 !== c && 0 !== c.opacity) {
                if (me.makeEmpty(), h instanceof THREE.RenderableSprite) b = h, b.x *= W, b.y *= X, n(b, h, c); else if (h instanceof THREE.RenderableLine) b = h.v1, w = h.v2, b.positionScreen.x *= W, b.positionScreen.y *= X, w.positionScreen.x *= W, w.positionScreen.y *= X, me.setFromPoints([b.positionScreen, w.positionScreen]), fe.isIntersectionBox(me) === !0 && i(b, w, h, c); else if (h instanceof THREE.RenderableFace) {
                    if (b = h.v1, w = h.v2, M = h.v3, b.positionScreen.z < -1 || b.positionScreen.z > 1) continue;
                    if (w.positionScreen.z < -1 || w.positionScreen.z > 1) continue;
                    if (M.positionScreen.z < -1 || M.positionScreen.z > 1) continue;
                    b.positionScreen.x *= W, b.positionScreen.y *= X, w.positionScreen.x *= W, w.positionScreen.y *= X, M.positionScreen.x *= W, M.positionScreen.y *= X, c.overdraw > 0 && (l(b.positionScreen, w.positionScreen, c.overdraw), l(w.positionScreen, M.positionScreen, c.overdraw), l(M.positionScreen, b.positionScreen, c.overdraw)), me.setFromPoints([b.positionScreen, w.positionScreen, M.positionScreen]), fe.isIntersectionBox(me) === !0 && o(b, w, M, 0, 1, 2, h, c)
                }
                Ee.union(me)
            }
        }
        $.setTransform(1, 0, 0, 1, 0, 0)
    }
};
var scroll = 0, isMobile = !1, pointerDirection = "down", startDate = 0, loadingCheck, animateLoading, loading = !1,
    projectImagesCounted = !1, isMobileDesktop = !1, MIN_MOBILE_DESKTOP_WIDTH = 700,
    TITLES = [" = 40 + 16", " = 20 + 36", " = 14 * 4", " = 2 * 28", " = 112 / 2", " = 224 / 4", " = 88 - 32", " = 66 - 10", " = 6 * 9&frac13;", " = 69 - 13"],
    SEPARATION = 200, AMOUNTX = 25, AMOUNTY = 25, container, camera, scene, renderer, particles, particle, count = 0,
    mouseX = 0, mouseY = 0, windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2, canvasHeight = 1;
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), function () {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[t[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[r] + "CancelAnimationFrame"] || window[t[r] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (t, r) {
        var n = (new Date).getTime(), i = Math.max(0, 16 - (n - e)), o = window.setTimeout(function () {
            t(n + i)
        }, i);
        return e = n + i, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    })
}();
