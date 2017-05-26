! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";

  function n(e, t) {
    t = t || te;
    var n = t.createElement("script");
    n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
  }

  function r(e) {
    var t = !!e && "length" in e && e.length,
      n = he.type(e);
    return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function i(e, t, n) {
    return he.isFunction(t) ? he.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    }) : t.nodeType ? he.grep(e, function(e) {
      return e === t !== n
    }) : "string" != typeof t ? he.grep(e, function(e) {
      return ae.call(t, e) > -1 !== n
    }) : Ee.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
      return ae.call(t, e) > -1 !== n && 1 === e.nodeType
    }))
  }

  function o(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function a(e) {
    var t = {};
    return he.each(e.match(Ae) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function s(e) {
    return e
  }

  function u(e) {
    throw e
  }

  function l(e, t, n) {
    var r;
    try {
      e && he.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && he.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
    } catch (e) {
      n.call(void 0, e)
    }
  }

  function c() {
    te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), he.ready()
  }

  function f() {
    this.expando = he.expando + f.uid++
  }

  function p(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Re.test(e) ? JSON.parse(e) : e)
  }

  function d(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(Me, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
        try {
          n = p(n)
        } catch (e) {}
        Pe.set(e, t, n)
      } else n = void 0;
    return n
  }

  function h(e, t, n, r) {
    var i, o = 1,
      a = 20,
      s = r ? function() {
        return r.cur()
      } : function() {
        return he.css(e, t, "")
      },
      u = s(),
      l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
      c = (he.cssNumber[t] || "px" !== l && +u) && We.exec(he.css(e, t));
    if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;
      do o = o || ".5", c /= o, he.style(e, t, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }

  function g(e) {
    var t, n = e.ownerDocument,
      r = e.nodeName,
      i = ze[r];
    return i ? i : (t = n.body.appendChild(n.createElement(r)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ze[r] = i, i)
  }

  function m(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Oe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Be(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none", Oe.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e
  }

  function v(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
  }

  function y(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"))
  }

  function x(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if (o = e[d], o || 0 === o)
        if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o);
        else if (Ye.test(o)) {
      for (a = a || f.appendChild(t.createElement("div")), s = (Ue.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[s] || Ge._default, a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
      he.merge(p, a.childNodes), a = f.firstChild, a.textContent = ""
    } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; o = p[d++];)
      if (r && he.inArray(o, r) > -1) i && i.push(o);
      else if (l = he.contains(o.ownerDocument, o), a = v(f.appendChild(o), "script"), l && y(a), n)
      for (c = 0; o = a[c++];) Ve.test(o.type || "") && n.push(o);
    return f
  }

  function b() {
    return !0
  }

  function w() {
    return !1
  }

  function T() {
    try {
      return te.activeElement
    } catch (e) {}
  }

  function C(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);
      for (s in t) C(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = w;
    else if (!i) return e;
    return 1 === o && (a = i, i = function(e) {
      return he().off(e), a.apply(this, arguments)
    }, i.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
      he.event.add(this, t, i, r, n)
    })
  }

  function E(e, t) {
    return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
  }

  function k(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function N(e) {
    var t = rt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function S(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (Oe.hasData(e) && (o = Oe.access(e), a = Oe.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) he.event.add(t, i, l[i][n])
      }
      Pe.hasData(e) && (s = Pe.access(e), u = he.extend({}, s), Pe.set(t, u))
    }
  }

  function D(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function j(e, t, r, i) {
    t = ie.apply([], t);
    var o, a, s, u, l, c, f = 0,
      p = e.length,
      d = p - 1,
      h = t[0],
      g = he.isFunction(h);
    if (g || p > 1 && "string" == typeof h && !pe.checkClone && nt.test(h)) return e.each(function(n) {
      var o = e.eq(n);
      g && (t[0] = h.call(this, n, o.html())), j(o, t, r, i)
    });
    if (p && (o = x(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
      for (s = he.map(v(o, "script"), k), u = s.length; f < p; f++) l = o, f !== d && (l = he.clone(l, !0, !0), u && he.merge(s, v(l, "script"))), r.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, he.map(s, N), f = 0; f < u; f++) l = s[f], Ve.test(l.type || "") && !Oe.access(l, "globalEval") && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(it, ""), c))
    }
    return e
  }

  function A(e, t, n) {
    for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(v(r)), r.parentNode && (n && he.contains(r.ownerDocument, r) && y(v(r, "script")), r.parentNode.removeChild(r));
    return e
  }

  function q(e, t, n) {
    var r, i, o, a, s = e.style;
    return n = n || st(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && at.test(a) && ot.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function L(e, t) {
    return {
      get: function() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function H(e) {
    if (e in pt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
      if (e = ft[n] + t, e in pt) return e
  }

  function F(e, t, n) {
    var r = We.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function O(e, t, n, r, i) {
    var o, a = 0;
    for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += he.css(e, n + $e[o], !0, i)), r ? ("content" === n && (a -= he.css(e, "padding" + $e[o], !0, i)), "margin" !== n && (a -= he.css(e, "border" + $e[o] + "Width", !0, i))) : (a += he.css(e, "padding" + $e[o], !0, i), "padding" !== n && (a += he.css(e, "border" + $e[o] + "Width", !0, i)));
    return a
  }

  function P(e, t, n) {
    var r, i = !0,
      o = st(e),
      a = "border-box" === he.css(e, "boxSizing", !1, o);
    if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
      if (r = q(e, t, o), (r < 0 || null == r) && (r = e.style[t]), at.test(r)) return r;
      i = a && (pe.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + O(e, t, n || (a ? "border" : "content"), i, o) + "px"
  }

  function R(e, t, n, r, i) {
    return new R.prototype.init(e, t, n, r, i)
  }

  function M() {
    ht && (e.requestAnimationFrame(M), he.fx.tick())
  }

  function I() {
    return e.setTimeout(function() {
      dt = void 0
    }), dt = he.now()
  }

  function W(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) n = $e[r], i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function $(e, t, n) {
    for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function B(e, t, n) {
    var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && Be(e),
      v = Oe.get(e, "fxshow");
    n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
      a.unqueued || s()
    }), a.unqueued++, p.always(function() {
      p.always(function() {
        a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
      })
    }));
    for (r in t)
      if (i = t[r], gt.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0
        }
        d[r] = v && v[r] || he.style(e, r)
      }
    if (u = !he.isEmptyObject(t), u || !he.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = v && v.display, null == l && (l = Oe.get(e, "display")), c = he.css(e, "display"), "none" === c && (l ? c = l : (m([e], !0), l = e.style.display || l, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (p.done(function() {
        h.display = l
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      })), u = !1;
      for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = Oe.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && m([e], !0), p.done(function() {
        g || m([e]), Oe.remove(e, "fxshow");
        for (r in d) he.style(e, r, d[r])
      })), u = $(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    }
  }

  function _(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = he.camelCase(n), i = t[r], o = e[n], he.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = he.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function z(e, t, n) {
    var r, i, o = 0,
      a = z.prefilters.length,
      s = he.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1;
        for (var t = dt || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
        return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
      },
      l = s.promise({
        elem: e,
        props: he.extend({}, t),
        opts: he.extend(!0, {
          specialEasing: {},
          easing: he.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: dt || I(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (_(c, l.opts.specialEasing); o < a; o++)
      if (r = z.prefilters[o].call(l, e, c, l.opts)) return he.isFunction(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(r.stop, r)), r;
    return he.map(c, $, l), he.isFunction(l.opts.start) && l.opts.start.call(e, l), he.fx.timer(he.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function X(e) {
    var t = e.match(Ae) || [];
    return t.join(" ")
  }

  function U(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function V(e, t, n, r) {
    var i;
    if (he.isArray(t)) he.each(t, function(t, i) {
      n || Nt.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== he.type(t)) r(e, t);
    else
      for (i in t) V(e + "[" + i + "]", t[i], n, r)
  }

  function G(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(Ae) || [];
      if (he.isFunction(n))
        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function Y(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0, he.each(e[s] || [], function(e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }
    var o = {},
      a = e === Mt;
    return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function Q(e, t) {
    var n, r, i = he.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && he.extend(!0, e, r), e
  }

  function J(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
      "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break
        }
        a || (a = i)
      }
      o = o || a
    }
    if (o) return o !== u[0] && u.unshift(o), n[o]
  }

  function K(e, t, n, r) {
    var i, o, a, s, u, l = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
      if (a = l[u + " " + o] || l["* " + o], !a)
        for (i in l)
          if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
            break
          }
      if (a !== !0)
        if (a && e.throws) t = a(t);
        else try {
          t = a(t)
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }

  function Z(e) {
    return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var ee = [],
    te = e.document,
    ne = Object.getPrototypeOf,
    re = ee.slice,
    ie = ee.concat,
    oe = ee.push,
    ae = ee.indexOf,
    se = {},
    ue = se.toString,
    le = se.hasOwnProperty,
    ce = le.toString,
    fe = ce.call(Object),
    pe = {},
    de = "3.1.1",
    he = function(e, t) {
      return new he.fn.init(e, t)
    },
    ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    me = /^-ms-/,
    ve = /-([a-z])/g,
    ye = function(e, t) {
      return t.toUpperCase()
    };
  he.fn = he.prototype = {
    jquery: de,
    constructor: he,
    length: 0,
    toArray: function() {
      return re.call(this)
    },
    get: function(e) {
      return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function(e) {
      var t = he.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function(e) {
      return he.each(this, e)
    },
    map: function(e) {
      return this.pushStack(he.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(re.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: oe,
    sort: ee.sort,
    splice: ee.splice
  }, he.extend = he.fn.extend = function() {
    var e, t, n, r, i, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e) n = a[t], r = e[t], a !== r && (l && r && (he.isPlainObject(r) || (i = he.isArray(r))) ? (i ? (i = !1, o = n && he.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, he.extend({
    expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === he.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      var t = he.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    },
    isPlainObject: function(e) {
      var t, n;
      return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && (n = le.call(t, "constructor") && t.constructor, "function" != typeof n || ce.call(n) !== fe))
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      n(e)
    },
    camelCase: function(e) {
      return e.replace(me, "ms-").replace(ve, ye)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t) {
      var n, i = 0;
      if (r(e))
        for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
      else
        for (i in e)
          if (t.call(e[i], i, e[i]) === !1) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(ge, "")
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : ae.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
      return i
    },
    map: function(e, t, n) {
      var i, o, a = 0,
        s = [];
      if (r(e))
        for (i = e.length; a < i; a++) o = t(e[a], a, n), null != o && s.push(o);
      else
        for (a in e) o = t(e[a], a, n), null != o && s.push(o);
      return ie.apply([], s)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return r = re.call(arguments, 2), i = function() {
        return e.apply(t || this, r.concat(re.call(arguments)))
      }, i.guid = e.guid = e.guid || he.guid++, i
    },
    now: Date.now,
    support: pe
  }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    se["[object " + t + "]"] = t.toLowerCase()
  });
  var xe = function(e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, l, c, p = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
      if (!r && ((t ? t.ownerDocument || t : $) !== H && L(t), t = t || H, O)) {
        if (11 !== h && (u = ve.exec(e)))
          if (i = u[1]) {
            if (9 === h) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n
            } else if (p && (a = p.getElementById(i)) && I(t, a) && a.id === i) return n.push(a), n
          } else {
            if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
          }
        if (T.qsa && !U[e + " "] && (!P || !P.test(e))) {
          if (1 !== h) p = t, c = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = W), l = N(e), o = l.length; o--;) l[o] = "#" + s + " " + d(l[o]);
            c = l.join(","), p = ye.test(e) && f(t.parentNode) || t
          }
          if (c) try {
            return K.apply(n, p.querySelectorAll(c)), n
          } catch (e) {} finally {
            s === W && t.removeAttribute("id")
          }
        }
      }
      return D(e.replace(se, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
      }
      var t = [];
      return e
    }

    function r(e) {
      return e[W] = !0, e
    }

    function i(e) {
      var t = H.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
    }

    function a(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function s(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return function(t) {
        return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function c(e) {
      return r(function(t) {
        return t = +t, r(function(n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function f(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }

    function p() {}

    function d(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function h(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = _++;
      return t.first ? function(t, n, i) {
        for (; t = t[r];)
          if (1 === t.nodeType || a) return e(t, n, i);
        return !1
      } : function(t, n, u) {
        var l, c, f, p = [B, s];
        if (u) {
          for (; t = t[r];)
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || a)
              if (f = t[W] || (t[W] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
              else {
                if ((l = c[o]) && l[0] === B && l[1] === s) return p[2] = l[2];
                if (c[o] = p, p[2] = e(t, n, u)) return !0
              } return !1
      }
    }

    function g(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function m(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r
    }

    function v(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function y(e, t, n, i, o, a) {
      return i && !i[W] && (i = y(i)), o && !o[W] && (o = y(o, a)), r(function(r, a, s, u) {
        var l, c, f, p = [],
          d = [],
          h = a.length,
          g = r || m(t || "*", s.nodeType ? [s] : s, []),
          y = !e || !r && t ? g : v(g, p, e, s, u),
          x = n ? o || (r ? e : h || i) ? [] : a : y;
        if (n && n(y, x, s, u), i)
          for (l = v(x, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
              o(null, x = [], l, u)
            }
            for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
          }
        } else x = v(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x)
      })
    }

    function x(e) {
      for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
          return e === t
        }, a, !0), l = h(function(e) {
          return ee(t, e) > -1
        }, a, !0), c = [function(e, n, r) {
          var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
          return t = null, i
        }]; s < i; s++)
        if (n = C.relative[e[s].type]) c = [h(g(c), n)];
        else {
          if (n = C.filter[e[s].type].apply(null, e[s].matches), n[W]) {
            for (r = ++s; r < i && !C.relative[e[r].type]; r++);
            return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(se, "$1"), n, s < r && x(e.slice(s, r)), r < i && x(e = e.slice(r)), r < i && d(e))
          }
          c.push(n)
        }
      return g(c)
    }

    function b(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function(r, a, s, u, l) {
          var c, f, p, d = 0,
            h = "0",
            g = r && [],
            m = [],
            y = j,
            x = r || o && C.find.TAG("*", l),
            b = B += null == y ? 1 : Math.random() || .1,
            w = x.length;
          for (l && (j = a === H || a || l); h !== w && null != (c = x[h]); h++) {
            if (o && c) {
              for (f = 0, a || c.ownerDocument === H || (L(c), s = !O); p = e[f++];)
                if (p(c, a || H, s)) {
                  u.push(c);
                  break
                }
              l && (B = b)
            }
            i && ((c = !p && c) && d--, r && g.push(c))
          }
          if (d += h, i && h !== d) {
            for (f = 0; p = n[f++];) p(g, m, a, s);
            if (r) {
              if (d > 0)
                for (; h--;) g[h] || m[h] || (m[h] = Q.call(u));
              m = v(m)
            }
            K.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
          }
          return l && (B = b, j = y), g
        };
      return i ? r(a) : a
    }
    var w, T, C, E, k, N, S, D, j, A, q, L, H, F, O, P, R, M, I, W = "sizzle" + 1 * new Date,
      $ = e.document,
      B = 0,
      _ = 0,
      z = n(),
      X = n(),
      U = n(),
      V = function(e, t) {
        return e === t && (q = !0), 0
      },
      G = {}.hasOwnProperty,
      Y = [],
      Q = Y.pop,
      J = Y.push,
      K = Y.push,
      Z = Y.slice,
      ee = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1
      },
      te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
      oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      fe = new RegExp(oe),
      pe = new RegExp("^" + re + "$"),
      de = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      be = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      },
      we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      Te = function(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      Ce = function() {
        L()
      },
      Ee = h(function(e) {
        return e.disabled === !0 && ("form" in e || "label" in e)
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      K.apply(Y = Z.call($.childNodes), $.childNodes), Y[$.childNodes.length].nodeType
    } catch (e) {
      K = {
        apply: Y.length ? function(e, t) {
          J.apply(e, Z.call(t))
        } : function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }
    T = t.support = {}, k = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, L = t.setDocument = function(e) {
      var t, n, r = e ? e.ownerDocument || e : $;
      return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, F = H.documentElement, O = !k(H), $ !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = i(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), T.getElementsByTagName = i(function(e) {
        return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
      }), T.getElementsByClassName = me.test(H.getElementsByClassName), T.getById = i(function(e) {
        return F.appendChild(e).id = W, !H.getElementsByName || !H.getElementsByName(W).length
      }), T.getById ? (C.filter.ID = function(e) {
        var t = e.replace(xe, be);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }, C.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && O) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (C.filter.ID = function(e) {
        var t = e.replace(xe, be);
        return function(e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }, C.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && O) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
              if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
          }
          return []
        }
      }), C.find.TAG = T.getElementsByTagName ? function(e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
      } : function(e, t) {
        var n, r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, C.find.CLASS = T.getElementsByClassName && function(e, t) {
        if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e)
      }, R = [], P = [], (T.qsa = me.test(H.querySelectorAll)) && (i(function(e) {
        F.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || P.push(".#.+[+~]")
      }), i(function(e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = H.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), F.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
      })), (T.matchesSelector = me.test(M = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && i(function(e) {
        T.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), R.push("!=", oe)
      }), P = P.length && new RegExp(P.join("|")), R = R.length && new RegExp(R.join("|")), t = me.test(F.compareDocumentPosition), I = t || me.test(F.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, V = t ? function(e, t) {
        if (e === t) return q = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === $ && I($, e) ? -1 : t === H || t.ownerDocument === $ && I($, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
      } : function(e, t) {
        if (e === t) return q = !0, 0;
        var n, r = 0,
          i = e.parentNode,
          o = t.parentNode,
          s = [e],
          u = [t];
        if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
        if (i === o) return a(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) u.unshift(n);
        for (; s[r] === u[r];) r++;
        return r ? a(s[r], u[r]) : s[r] === $ ? -1 : u[r] === $ ? 1 : 0
      }, H) : H
    }, t.matches = function(e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), T.matchesSelector && O && !U[n + " "] && (!R || !R.test(n)) && (!P || !P.test(n))) try {
        var r = M.call(e, n);
        if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {}
      return t(n, H, null, [e]).length > 0
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== H && L(e), I(e, t)
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== H && L(e);
      var n = C.attrHandle[t.toLowerCase()],
        r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
      return void 0 !== r ? r : T.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, t.escape = function(e) {
      return (e + "").replace(we, Te)
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function(e) {
      var t, n = [],
        r = 0,
        i = 0;
      if (q = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(V), q) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));
        for (; r--;) e.splice(n[r], 1)
      }
      return A = null, e
    }, E = t.getText = function(e) {
      var t, n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else
        for (; t = e[r++];) n += E(t);
      return n
    }, C = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: de,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(xe, be).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = z[e + " "];
          return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode
          } : function(t, n, u) {
            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
              m = t.parentNode,
              v = s && t.nodeName.toLowerCase(),
              y = !u && !s,
              x = !1;
            if (m) {
              if (o) {
                for (; g;) {
                  for (p = t; p = p[g];)
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [a ? m.firstChild : m.lastChild], a && y) {
                for (p = m, f = p[W] || (p[W] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === B && l[1], x = d && l[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [B, d, x];
                    break
                  }
              } else if (y && (p = t, f = p[W] || (p[W] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === B && l[1], x = d), x === !1)
                for (;
                  (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[W] || (p[W] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [B, x]), p !== t)););
              return x -= i, x === r || x % r === 0 && x / r >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
            for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
          }) : function(e) {
            return o(e, 0, i)
          }) : o
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [],
            n = [],
            i = S(e.replace(se, "$1"));
          return i[W] ? r(function(e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
          }) : function(e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
          }
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: r(function(e) {
          return e = e.replace(xe, be),
            function(t) {
              return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
            }
        }),
        lang: r(function(e) {
          return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
            function(t) {
              var n;
              do
                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === F
        },
        focus: function(e) {
          return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: l(!1),
        disabled: l(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !C.pseudos.empty(e)
        },
        header: function(e) {
          return ge.test(e.nodeName)
        },
        input: function(e) {
          return he.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: c(function() {
          return [0]
        }),
        last: c(function(e, t) {
          return [t - 1]
        }),
        eq: c(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: c(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: c(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: c(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: c(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }, C.pseudos.nth = C.pseudos.eq;
    for (w in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) C.pseudos[w] = s(w);
    for (w in {
        submit: !0,
        reset: !0
      }) C.pseudos[w] = u(w);
    return p.prototype = C.filters = C.pseudos, C.setFilters = new p, N = t.tokenize = function(e, n) {
      var r, i, o, a, s, u, l, c = X[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (s = e, u = [], l = C.preFilter; s;) {
        r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(se, " ")
        }), s = s.slice(r.length));
        for (a in C.filter) !(i = de[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
          value: r,
          type: a,
          matches: i
        }), s = s.slice(r.length));
        if (!r) break
      }
      return n ? s.length : s ? t.error(e) : X(e, u).slice(0)
    }, S = t.compile = function(e, t) {
      var n, r = [],
        i = [],
        o = U[e + " "];
      if (!o) {
        for (t || (t = N(e)), n = t.length; n--;) o = x(t[n]), o[W] ? r.push(o) : i.push(o);
        o = U(e, b(i, r)), o.selector = e
      }
      return o
    }, D = t.select = function(e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e,
        c = !r && N(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && C.relative[o[1].type]) {
          if (t = (C.find.ID(a.matches[0].replace(xe, be), t) || [])[0], !t) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
          if ((u = C.find[s]) && (r = u(a.matches[0].replace(xe, be), ye.test(o[0].type) && f(t.parentNode) || t))) {
            if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
            break
          }
      }
      return (l || S(e, c))(r, t, !O, n, !t || ye.test(e) && f(t.parentNode) || t), n
    }, T.sortStable = W.split("").sort(V).join("") === W, T.detectDuplicates = !!q, L(), T.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
    }), i(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), T.attributes && i(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), i(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(te, function(e, t, n) {
      var r;
      if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), t
  }(e);
  he.find = xe, he.expr = xe.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = xe.uniqueSort, he.text = xe.getText, he.isXMLDoc = xe.isXML, he.contains = xe.contains, he.escapeSelector = xe.escape;
  var be = function(e, t, n) {
      for (var r = [], i = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && he(e).is(n)) break;
          r.push(e)
        }
      return r
    },
    we = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    Te = he.expr.match.needsContext,
    Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Ee = /^.[^:#\[\.,]*$/;
  he.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, he.fn.extend({
    find: function(e) {
      var t, n, r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
        for (t = 0; t < r; t++)
          if (he.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
      return r > 1 ? he.uniqueSort(n) : n
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0))
    },
    is: function(e) {
      return !!i(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
    }
  });
  var ke, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Se = he.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || ke, "string" == typeof e) {
        if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ne.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(r[1]) && he.isPlainObject(t))
            for (r in t) he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return i = te.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    };
  Se.prototype = he.fn, ke = he(te);
  var De = /^(?:parents|prev(?:Until|All))/,
    je = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  he.fn.extend({
    has: function(e) {
      var t = he(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (he.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && he(e);
      if (!Te.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
              o.push(n);
              break
            }
      return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), he.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return be(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return be(e, "parentNode", n)
    },
    next: function(e) {
      return o(e, "nextSibling")
    },
    prev: function(e) {
      return o(e, "previousSibling")
    },
    nextAll: function(e) {
      return be(e, "nextSibling")
    },
    prevAll: function(e) {
      return be(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return be(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return be(e, "previousSibling", n)
    },
    siblings: function(e) {
      return we((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return we(e.firstChild)
    },
    contents: function(e) {
      return e.contentDocument || he.merge([], e.childNodes)
    }
  }, function(e, t) {
    he.fn[e] = function(n, r) {
      var i = he.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), this.length > 1 && (je[e] || he.uniqueSort(i), De.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var Ae = /[^\x20\t\r\n\f]+/g;
  he.Callbacks = function(e) {
    e = "string" == typeof e ? a(e) : he.extend({}, e);
    var t, n, r, i, o = [],
      s = [],
      u = -1,
      l = function() {
        for (i = e.once, r = t = !0; s.length; u = -1)
          for (n = s.shift(); ++u < o.length;) o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
      },
      c = {
        add: function() {
          return o && (n && !t && (u = o.length - 1, s.push(n)), function t(n) {
            he.each(n, function(n, r) {
              he.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r)
            })
          }(arguments), n && !t && l()), this
        },
        remove: function() {
          return he.each(arguments, function(e, t) {
            for (var n;
              (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
          }), this
        },
        has: function(e) {
          return e ? he.inArray(e, o) > -1 : o.length > 0
        },
        empty: function() {
          return o && (o = []), this
        },
        disable: function() {
          return i = s = [], o = n = "", this
        },
        disabled: function() {
          return !o
        },
        lock: function() {
          return i = s = [], n || t || (o = n = ""), this
        },
        locked: function() {
          return !!i
        },
        fireWith: function(e, n) {
          return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
        },
        fire: function() {
          return c.fireWith(this, arguments), this
        },
        fired: function() {
          return !!r
        }
      };
    return c
  }, he.extend({
    Deferred: function(t) {
      var n = [
          ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
          ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
        ],
        r = "pending",
        i = {
          state: function() {
            return r
          },
          always: function() {
            return o.done(arguments).fail(arguments), this
          },
          catch: function(e) {
            return i.then(null, e)
          },
          pipe: function() {
            var e = arguments;
            return he.Deferred(function(t) {
              he.each(n, function(n, r) {
                var i = he.isFunction(e[r[4]]) && e[r[4]];
                o[r[1]](function() {
                  var e = i && i.apply(this, arguments);
                  e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          then: function(t, r, i) {
            function o(t, n, r, i) {
              return function() {
                var l = this,
                  c = arguments,
                  f = function() {
                    var e, f;
                    if (!(t < a)) {
                      if (e = r.apply(l, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                      f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++, f.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (l = void 0, c = [e]), (i || n.resolveWith)(l, c))
                    }
                  },
                  p = i ? f : function() {
                    try {
                      f()
                    } catch (e) {
                      he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== u && (l = void 0, c = [e]), n.rejectWith(l, c))
                    }
                  };
                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
              }
            }
            var a = 0;
            return he.Deferred(function(e) {
              n[0][3].add(o(0, e, he.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : s)), n[2][3].add(o(0, e, he.isFunction(r) ? r : u))
            }).promise()
          },
          promise: function(e) {
            return null != e ? he.extend(e, i) : i
          }
        },
        o = {};
      return he.each(n, function(e, t) {
        var a = t[2],
          s = t[5];
        i[t[1]] = a.add, s && a.add(function() {
          r = s
        }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = a.fireWith
      }), i.promise(o), t && t.call(o, o), o
    },
    when: function(e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = re.call(arguments),
        o = he.Deferred(),
        a = function(e) {
          return function(n) {
            r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i)
          }
        };
      if (t <= 1 && (l(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || he.isFunction(i[n] && i[n].then))) return o.then();
      for (; n--;) l(i[n], a(n), o.reject);
      return o.promise()
    }
  });
  var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  he.Deferred.exceptionHook = function(t, n) {
    e.console && e.console.warn && t && qe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, he.readyException = function(t) {
    e.setTimeout(function() {
      throw t
    })
  };
  var Le = he.Deferred();
  he.fn.ready = function(e) {
    return Le.then(e).catch(function(e) {
      he.readyException(e)
    }), this
  }, he.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? he.readyWait++ : he.ready(!0)
    },
    ready: function(e) {
      (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Le.resolveWith(te, [he]))
    }
  }), he.ready.then = Le.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
  var He = function(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === he.type(n)) {
        i = !0;
        for (s in n) He(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== r && (i = !0, he.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
          return l.call(he(e), n)
        })), t))
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    Fe = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
  f.uid = 1, f.prototype = {
    cache: function(e) {
      var t = e[this.expando];
      return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[he.camelCase(t)] = n;
      else
        for (r in t) i[he.camelCase(r)] = t[r];
      return i
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
    },
    access: function(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in r ? [t] : t.match(Ae) || []), n = t.length;
          for (; n--;) delete r[t[n]]
        }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !he.isEmptyObject(t)
    }
  };
  var Oe = new f,
    Pe = new f,
    Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Me = /[A-Z]/g;
  he.extend({
    hasData: function(e) {
      return Pe.hasData(e) || Oe.hasData(e)
    },
    data: function(e, t, n) {
      return Pe.access(e, t, n)
    },
    removeData: function(e, t) {
      Pe.remove(e, t)
    },
    _data: function(e, t, n) {
      return Oe.access(e, t, n)
    },
    _removeData: function(e, t) {
      Oe.remove(e, t)
    }
  }), he.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = Pe.get(o), 1 === o.nodeType && !Oe.get(o, "hasDataAttrs"))) {
          for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = he.camelCase(r.slice(5)), d(o, r, i[r])));
          Oe.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function() {
        Pe.set(this, e)
      }) : He(this, function(t) {
        var n;
        if (o && void 0 === t) {
          if (n = Pe.get(o, e), void 0 !== n) return n;
          if (n = d(o, e), void 0 !== n) return n
        } else this.each(function() {
          Pe.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        Pe.remove(this, e)
      })
    }
  }), he.extend({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Oe.get(e, t), n && (!r || he.isArray(n) ? r = Oe.access(e, t, he.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = he.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = he._queueHooks(e, t),
        a = function() {
          he.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return Oe.get(e, n) || Oe.access(e, n, {
        empty: he.Callbacks("once memory").add(function() {
          Oe.remove(e, [t + "queue", n])
        })
      })
    }
  }), he.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = he.queue(this, e, t);
        he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        he.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = he.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --r || i.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Oe.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    We = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
    $e = ["Top", "Right", "Bottom", "Left"],
    Be = function(e, t) {
      return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
    },
    _e = function(e, t, n, r) {
      var i, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i
    },
    ze = {};
  he.fn.extend({
    show: function() {
      return m(this, !0)
    },
    hide: function() {
      return m(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        Be(this) ? he(this).show() : he(this).hide()
      })
    }
  });
  var Xe = /^(?:checkbox|radio)$/i,
    Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Ve = /^$|\/(?:java|ecma)script/i,
    Ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
  var Ye = /<|&#?\w+;/;
  ! function() {
    var e = te.createDocumentFragment(),
      t = e.appendChild(te.createElement("div")),
      n = te.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var Qe = te.documentElement,
    Je = /^key/,
    Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ze = /^([^.]*)(?:\.(.+)|)/;
  he.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, m = Oe.get(e);
      if (m)
        for (n.handler && (o = n, n = o.handler, i = o.selector), i && he.find.matchesSelector(Qe, i), n.guid || (n.guid = he.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
            return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
          }), t = (t || "").match(Ae) || [""], l = t.length; l--;) s = Ze.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = he.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {}, c = he.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && he.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), he.event.global[d] = !0)
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, m = Oe.hasData(e) && Oe.get(e);
      if (m && (u = m.events)) {
        for (t = (t || "").match(Ae) || [""], l = t.length; l--;)
          if (s = Ze.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            for (f = he.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || he.removeEvent(e, d, m.handle), delete u[d])
          } else
            for (d in u) he.event.remove(e, d + t[l], n, r, !0);
        he.isEmptyObject(u) && Oe.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      var t, n, r, i, o, a, s = he.event.fix(e),
        u = new Array(arguments.length),
        l = (Oe.get(this, "events") || {})[s.type] || [],
        c = he.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
        for (a = he.event.handlers.call(this, s, l), t = 0;
          (i = a[t++]) && !s.isPropagationStopped();)
          for (s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, a, s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
            for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(l) > -1 : he.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            })
          }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s
    },
    addProp: function(e, t) {
      Object.defineProperty(he.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: he.isFunction(t) ? function() {
          if (this.originalEvent) return t(this.originalEvent)
        } : function() {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function(e) {
      return e[he.expando] ? e : new he.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== T() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === T() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
        },
        _default: function(e) {
          return he.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, he.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, he.Event = function(e, t) {
    return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
  }, he.Event.prototype = {
    constructor: he.Event,
    isDefaultPrevented: w,
    isPropagationStopped: w,
    isImmediatePropagationStopped: w,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, he.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(e) {
      var t = e.button;
      return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, he.event.addProp), he.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    he.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          o = e.handleObj;
        return i && (i === r || he.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), he.fn.extend({
    on: function(e, t, n, r) {
      return C(this, e, t, n, r)
    },
    one: function(e, t, n, r) {
      return C(this, e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function() {
        he.event.remove(this, e, n, t)
      })
    }
  });
  var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    tt = /<script|<style|<link/i,
    nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rt = /^true\/(.*)/,
    it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  he.extend({
    htmlPrefilter: function(e) {
      return e.replace(et, "<$1></$2>")
    },
    clone: function(e, t, n) {
      var r, i, o, a, s = e.cloneNode(!0),
        u = he.contains(e.ownerDocument, e);
      if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
        for (a = v(s), o = v(e), r = 0, i = o.length; r < i; r++) D(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || v(e), a = a || v(s), r = 0, i = o.length; r < i; r++) S(o[r], a[r]);
        else S(e, s);
      return a = v(s, "script"), a.length > 0 && y(a, !u && v(e, "script")), s
    },
    cleanData: function(e) {
      for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Fe(n)) {
          if (t = n[Oe.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
            n[Oe.expando] = void 0
          }
          n[Pe.expando] && (n[Pe.expando] = void 0)
        }
    }
  }), he.fn.extend({
    detach: function(e) {
      return A(this, e, !0)
    },
    remove: function(e) {
      return A(this, e)
    },
    text: function(e) {
      return He(this, function(e) {
        return void 0 === e ? he.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return j(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = E(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return j(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = E(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return j(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return j(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return he.clone(this, e, t)
      })
    },
    html: function(e) {
      return He(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !tt.test(e) && !Ge[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = he.htmlPrefilter(e);
          try {
            for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return j(this, arguments, function(t) {
        var n = this.parentNode;
        he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), he.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    he.fn[e] = function(e) {
      for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), he(i[a])[t](n), oe.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var ot = /^margin/,
    at = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
    st = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    };
  ! function() {
    function t() {
      if (s) {
        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Qe.appendChild(a);
        var t = e.getComputedStyle(s);
        n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Qe.removeChild(a), s = null
      }
    }
    var n, r, i, o, a = te.createElement("div"),
      s = te.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
      pixelPosition: function() {
        return t(), n
      },
      boxSizingReliable: function() {
        return t(), r
      },
      pixelMarginRight: function() {
        return t(), i
      },
      reliableMarginLeft: function() {
        return t(), o
      }
    }))
  }();
  var ut = /^(none|table(?!-c[ea]).+)/,
    lt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    ct = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    ft = ["Webkit", "Moz", "ms"],
    pt = te.createElement("div").style;
  he.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = q(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
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
    cssProps: {
      float: "cssFloat"
    },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = he.camelCase(t),
          u = e.style;
        return t = he.cssProps[s] || (he.cssProps[s] = H(s) || s), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = We.exec(n)) && i[1] && (n = h(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
      }
    },
    css: function(e, t, n, r) {
      var i, o, a, s = he.camelCase(t);
      return t = he.cssProps[s] || (he.cssProps[s] = H(s) || s), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = q(e, t, r)), "normal" === i && t in ct && (i = ct[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
    }
  }), he.each(["height", "width"], function(e, t) {
    he.cssHooks[t] = {
      get: function(e, n, r) {
        if (n) return !ut.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, r) : _e(e, lt, function() {
          return P(e, t, r)
        })
      },
      set: function(e, n, r) {
        var i, o = r && st(e),
          a = r && O(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
        return a && (i = We.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), F(e, n, a)
      }
    }
  }), he.cssHooks.marginLeft = L(pe.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px"
  }), he.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    he.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + $e[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, ot.test(e) || (he.cssHooks[e + t].set = F)
  }), he.fn.extend({
    css: function(e, t) {
      return He(this, function(e, t, n) {
        var r, i, o = {},
          a = 0;
        if (he.isArray(t)) {
          for (r = st(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), he.Tween = R, R.prototype = {
    constructor: R,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = R.propHooks[this.prop];
      return e && e.get ? e.get(this) : R.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = R.propHooks[this.prop];
      return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
    }
  }, R.prototype.init.prototype = R.prototype, R.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
      },
      set: function(e) {
        he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, he.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, he.fx = R.prototype.init, he.fx.step = {};
  var dt, ht, gt = /^(?:toggle|show|hide)$/,
    mt = /queueHooks$/;
  he.Animation = he.extend(z, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return h(n.elem, e, We.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
      },
      prefilters: [B],
      prefilter: function(e, t) {
        t ? z.prefilters.unshift(e) : z.prefilters.push(e)
      }
    }), he.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? he.extend({}, e) : {
        complete: n || !n && t || he.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !he.isFunction(t) && t
      };
      return he.fx.off || te.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        he.isFunction(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue)
      }, r
    }, he.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(Be).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(e, t, n, r) {
        var i = he.isEmptyObject(e),
          o = he.speed(t, n, r),
          a = function() {
            var t = z(this, he.extend({}, e), o);
            (i || Oe.get(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            o = he.timers,
            a = Oe.get(this);
          if (i) a[i] && a[i].stop && r(a[i]);
          else
            for (i in a) a[i] && a[i].stop && mt.test(i) && r(a[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          !t && n || he.dequeue(this, e)
        })
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = Oe.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = he.timers,
            a = r ? r.length : 0;
          for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), he.each(["toggle", "show", "hide"], function(e, t) {
      var n = he.fn[t];
      he.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
      }
    }), he.each({
      slideDown: W("show"),
      slideUp: W("hide"),
      slideToggle: W("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      he.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r)
      }
    }), he.timers = [], he.fx.tick = function() {
      var e, t = 0,
        n = he.timers;
      for (dt = he.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
      n.length || he.fx.stop(), dt = void 0
    }, he.fx.timer = function(e) {
      he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
    }, he.fx.interval = 13, he.fx.start = function() {
      ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setInterval(he.fx.tick, he.fx.interval))
    }, he.fx.stop = function() {
      e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
    }, he.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, he.fn.delay = function(t, n) {
      return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
        var i = e.setTimeout(n, t);
        r.stop = function() {
          e.clearTimeout(i)
        }
      })
    },
    function() {
      var e = te.createElement("input"),
        t = te.createElement("select"),
        n = t.appendChild(te.createElement("option"));
      e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
    }();
  var vt, yt = he.expr.attrHandle;
  he.fn.extend({
    attr: function(e, t) {
      return He(this, he.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        he.removeAttr(this, e)
      })
    }
  }), he.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t), null == r ? void 0 : r))
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!pe.radioValue && "radio" === t && he.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r = 0,
        i = t && t.match(Ae);
      if (i && 1 === e.nodeType)
        for (; n = i[r++];) e.removeAttribute(n)
    }
  }), vt = {
    set: function(e, t, n) {
      return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = yt[t] || he.find.attr;
    yt[t] = function(e, t, r) {
      var i, o, a = t.toLowerCase();
      return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), i
    }
  });
  var xt = /^(?:input|select|textarea|button)$/i,
    bt = /^(?:a|area)$/i;
  he.fn.extend({
    prop: function(e, t) {
      return He(this, he.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[he.propFix[e] || e]
      })
    }
  }), he.extend({
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = he.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), pe.optSelected || (he.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    he.propFix[this.toLowerCase()] = this
  }), he.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (he.isFunction(e)) return this.each(function(t) {
        he(this).addClass(e.call(this, t, U(this)))
      });
      if ("string" == typeof e && e)
        for (t = e.match(Ae) || []; n = this[u++];)
          if (i = U(n), r = 1 === n.nodeType && " " + X(i) + " ") {
            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            s = X(r), i !== s && n.setAttribute("class", s)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (he.isFunction(e)) return this.each(function(t) {
        he(this).removeClass(e.call(this, t, U(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(Ae) || []; n = this[u++];)
          if (i = U(n), r = 1 === n.nodeType && " " + X(i) + " ") {
            for (a = 0; o = t[a++];)
              for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
            s = X(r), i !== s && n.setAttribute("class", s)
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
        he(this).toggleClass(e.call(this, n, U(this), t), t)
      }) : this.each(function() {
        var t, r, i, o;
        if ("string" === n)
          for (r = 0, i = he(this), o = e.match(Ae) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else void 0 !== e && "boolean" !== n || (t = U(this), t && Oe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Oe.get(this, "__className__") || ""))
      })
    },
    hasClass: function(e) {
      var t, n, r = 0;
      for (t = " " + e + " "; n = this[r++];)
        if (1 === n.nodeType && (" " + X(U(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var wt = /\r/g;
  he.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0];
      return arguments.length ? (r = he.isFunction(e), this.each(function(n) {
        var i;
        1 === this.nodeType && (i = r ? e.call(this, n, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : he.isArray(i) && (i = he.map(i, function(e) {
          return null == e ? "" : e + ""
        })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
      })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
    }
  }), he.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = he.find.attr(e, "value");
          return null != t ? t : X(he.text(e))
        }
      },
      select: {
        get: function(e) {
          var t, n, r, i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
              if (t = he(n).val(), a) return t;
              s.push(t)
            }
          return s
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), he.each(["radio", "checkbox"], function() {
    he.valHooks[this] = {
      set: function(e, t) {
        if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
      }
    }, pe.checkOn || (he.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Tt = /^(?:focusinfocus|focusoutblur)$/;
  he.extend(he.event, {
    trigger: function(t, n, r, i) {
      var o, a, s, u, l, c, f, p = [r || te],
        d = le.call(t, "type") ? t.type : t,
        h = le.call(t, "namespace") ? t.namespace.split(".") : [];
      if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + he.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[he.expando] ? t : new he.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !he.isWindow(r)) {
          for (u = f.delegateType || d, Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
          s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
        }
        for (o = 0;
          (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (Oe.get(a, "events") || {})[t.type] && Oe.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Fe(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Fe(r) || l && he.isFunction(r[d]) && !he.isWindow(r) && (s = r[l], s && (r[l] = null), he.event.triggered = d, r[d](), he.event.triggered = void 0, s && (r[l] = s)), t.result
      }
    },
    simulate: function(e, t, n) {
      var r = he.extend(new he.Event, n, {
        type: e,
        isSimulated: !0
      });
      he.event.trigger(r, null, t)
    }
  }), he.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        he.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return he.event.trigger(e, t, n, !0)
    }
  }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
    he.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), he.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      he.event.simulate(t, e.target, he.event.fix(e))
    };
    he.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this,
          i = Oe.access(r, t);
        i || r.addEventListener(e, n, !0), Oe.access(r, t, (i || 0) + 1)
      },
      teardown: function() {
        var r = this.ownerDocument || this,
          i = Oe.access(r, t) - 1;
        i ? Oe.access(r, t, i) : (r.removeEventListener(e, n, !0), Oe.remove(r, t))
      }
    }
  });
  var Ct = e.location,
    Et = he.now(),
    kt = /\?/;
  he.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
  };
  var Nt = /\[\]$/,
    St = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  he.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        var n = he.isFunction(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) V(n, e[n], t, i);
    return r.join("&")
  }, he.fn.extend({
    serialize: function() {
      return he.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = he.prop(this, "elements");
        return e ? he.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !he(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !Xe.test(e))
      }).map(function(e, t) {
        var n = he(this).val();
        return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(St, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(St, "\r\n")
        }
      }).get()
    }
  });
  var At = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = te.createElement("a");
  Wt.href = Ct.href, he.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Ft.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": he.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e)
    },
    ajaxPrefilter: G(Rt),
    ajaxTransport: G(Mt),
    ajax: function(t, n) {
      function r(t, n, r, s) {
        var l, p, d, b, w, T = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = J(h, C, r)), b = K(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (he.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (m.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
      }
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var i, o, a, s, u, l, c, f, p, d, h = he.ajaxSetup({}, n),
        g = h.context || h,
        m = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
        v = he.Deferred(),
        y = he.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        w = {},
        T = "canceled",
        C = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (c) {
              if (!s)
                for (s = {}; t = Ht.exec(a);) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return c ? a : null
          },
          setRequestHeader: function(e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
          },
          overrideMimeType: function(e) {
            return null == c && (h.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (c) C.always(e[C.status]);
              else
                for (t in e) x[t] = [x[t], e[t]];
            return this
          },
          abort: function(e) {
            var t = e || T;
            return i && i.abort(t), r(0, t), this
          }
        };
      if (v.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ae) || [""], null == h.crossDomain) {
        l = te.createElement("a");
        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
        } catch (e) {
          h.crossDomain = !0
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Y(Rt, h, n, C), c) return C;
      f = he.event && h.global, f && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), o = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Lt, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
      for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
      if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Y(Mt, h, n, C)) {
        if (C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
        h.async && h.timeout > 0 && (u = e.setTimeout(function() {
          C.abort("timeout")
        }, h.timeout));
        try {
          c = !1, i.send(b, r)
        } catch (e) {
          if (c) throw e;
          r(-1, e)
        }
      } else r(-1, "No Transport");
      return C
    },
    getJSON: function(e, t, n) {
      return he.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return he.get(e, void 0, t, "script")
    }
  }), he.each(["get", "post"], function(e, t) {
    he[t] = function(e, n, r, i) {
      return he.isFunction(n) && (i = i || r, r = n, n = void 0), he.ajax(he.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, he.isPlainObject(e) && e))
    }
  }), he._evalUrl = function(e) {
    return he.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, he.fn.extend({
    wrapAll: function(e) {
      var t;
      return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function(e) {
      return he.isFunction(e) ? this.each(function(t) {
        he(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = he(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = he.isFunction(e);
      return this.each(function(n) {
        he(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function(e) {
      return this.parent(e).not("body").each(function() {
        he(this).replaceWith(this.childNodes)
      }), this
    }
  }), he.expr.pseudos.hidden = function(e) {
    return !he.expr.pseudos.visible(e)
  }, he.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, he.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var $t = {
      0: 200,
      1223: 204
    },
    Bt = he.ajaxSettings.xhr();
  pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, he.ajaxTransport(function(t) {
    var n, r;
    if (pe.cors || Bt && !t.crossDomain) return {
      send: function(i, o) {
        var a, s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (a in t.xhrFields) s[a] = t.xhrFields[a];
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
        for (a in i) s.setRequestHeader(a, i[a]);
        n = function(e) {
          return function() {
            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()))
          }
        }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
          4 === s.readyState && e.setTimeout(function() {
            n && r()
          })
        }, n = n("abort");
        try {
          s.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function() {
        n && n()
      }
    }
  }), he.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1)
  }), he.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return he.globalEval(e), e
      }
    }
  }), he.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), he.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function(r, i) {
          t = he("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), te.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    }
  });
  var _t = [],
    zt = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = _t.pop() || he.expando + "_" + Et++;
      return this[e] = !0, e
    }
  }), he.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, a, s = t.jsonp !== !1 && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + i) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
      return a || he.error(i + " was not called"), a[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      a = arguments
    }, r.always(function() {
      void 0 === o ? he(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, _t.push(i)), a && he.isFunction(o) && o(a[0]), a = o = void 0
    }), "script"
  }), pe.createHTMLDocument = function() {
    var e = te.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), he.parseHTML = function(e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var r, i, o;
    return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = te.location.href, t.head.appendChild(r)) : t = te), i = Ce.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))
  }, he.fn.onload = function(e, t, n) {
    var r, i, o, a = this,
      s = e.indexOf(" ");
    return s > -1 && (r = X(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && he.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
    }).always(n && function(e, t) {
      a.each(function() {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    he.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), he.expr.pseudos.animated = function(e) {
    return he.grep(he.timers, function(t) {
      return e === t.elem
    }).length
  }, he.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, a, s, u, l, c = he.css(e, "position"),
        f = he(e),
        p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = he.css(e, "top"), u = he.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
    }
  }, he.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        he.offset.setOffset(this, e, t)
      });
      var t, n, r, i, o = this[0];
      return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = Z(i), t = i.documentElement, {
        top: r.top + n.pageYOffset - t.clientTop,
        left: r.left + n.pageXOffset - t.clientLeft
      }) : r) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n = this[0],
          r = {
            top: 0,
            left: 0
          };
        return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (r = e.offset()), r = {
          top: r.top + he.css(e[0], "borderTopWidth", !0),
          left: r.left + he.css(e[0], "borderLeftWidth", !0)
        }), {
          top: t.top - r.top - he.css(n, "marginTop", !0),
          left: t.left - r.left - he.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
        return e || Qe
      })
    }
  }), he.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = "pageYOffset" === t;
    he.fn[e] = function(r) {
      return He(this, function(e, r, i) {
        var o = Z(e);
        return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
      }, e, r, arguments.length)
    }
  }), he.each(["top", "left"], function(e, t) {
    he.cssHooks[t] = L(pe.pixelPosition, function(e, n) {
      if (n) return n = q(e, t), at.test(n) ? he(e).position()[t] + "px" : n
    })
  }), he.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    he.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      he.fn[r] = function(i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
          s = n || (i === !0 || o === !0 ? "margin" : "border");
        return He(this, function(t, n, i) {
          var o;
          return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
        }, t, a ? i : void 0, a)
      }
    })
  }), he.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
    return he
  });
  var Xt = e.jQuery,
    Ut = e.$;
  return he.noConflict = function(t) {
    return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = Xt), he
  }, t || (e.jQuery = e.$ = he), he
});
