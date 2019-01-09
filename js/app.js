! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = [],
        k = T.document,
        n = Object.getPrototypeOf,
        a = t.slice,
        m = t.concat,
        l = t.push,
        r = t.indexOf,
        i = {},
        o = i.toString,
        g = i.hasOwnProperty,
        s = g.toString,
        c = s.call(Object),
        v = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        _ = function(e) {
            return null != e && e === e.window
        },
        u = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function w(e, t, i) {
        var n, r = (t = t || k).createElement("script");
        if (r.text = e, i)
            for (n in u) i[n] && (r[n] = i[n]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[o.call(e)] || "object" : typeof e
    }
    var S = function(e, t) {
            return new S.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            i = b(e);
        return !y(e) && !_(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: "3.3.1",
        constructor: S,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(i) {
            return this.pushStack(S.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, i, n, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = s[t], s !== (n = e[t]) && (c && n && (S.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, o = i && Array.isArray(i) ? i : []) : o = i && S.isPlainObject(i) ? i : {}, s[t] = S.extend(c, o, n)) : void 0 !== n && (s[t] = n));
        return s
    }, S.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== o.call(e) || (t = n(e)) && ("function" != typeof(i = g.call(t, "constructor") && t.constructor) || s.call(i) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            w(e)
        },
        each: function(e, t) {
            var i, n = 0;
            if (h(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (h(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : r.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function(e, t, i) {
            for (var n = [], r = 0, o = e.length, s = !i; r < o; r++) !t(e[r], r) !== s && n.push(e[r]);
            return n
        },
        map: function(e, t, i) {
            var n, r, o = 0,
                s = [];
            if (h(e))
                for (n = e.length; o < n; o++) null != (r = t(e[o], o, i)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, i)) && s.push(r);
            return m.apply([], s)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(i) {
        var e, p, w, o, r, f, d, m, b, l, c, x, T, s, k, g, a, u, v, S = "sizzle" + 1 * new Date,
            y = i.document,
            C = 0,
            n = 0,
            h = se(),
            _ = se(),
            P = se(),
            A = function(e, t) {
                return e === t && (c = !0), 0
            },
            E = {}.hasOwnProperty,
            t = [],
            O = t.pop,
            D = t.push,
            R = t.push,
            $ = t.slice,
            M = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z = "\\[" + N + "*(" + j + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + N + "*\\]",
            F = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            I = new RegExp(N + "+", "g"),
            H = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
            q = new RegExp("^" + N + "*," + N + "*"),
            B = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            X = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
            W = new RegExp(F),
            Y = new RegExp("^" + j + "$"),
            U = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
            ee = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function() {
                x()
            },
            re = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            R.apply(t = $.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (i) {
            R = {
                apply: t.length ? function(e, t) {
                    D.apply(e, $.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function oe(e, t, i, n) {
            var r, o, s, a, l, c, u, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return i;
            if (!n && ((t ? t.ownerDocument || t : y) !== T && x(t), t = t || T, k)) {
                if (11 !== h && (l = Z.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r))) return i;
                            if (s.id === r) return i.push(s), i
                        } else if (d && (s = d.getElementById(r)) && v(t, s) && s.id === r) return i.push(s), i
                    } else {
                        if (l[2]) return R.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName) return R.apply(i, t.getElementsByClassName(r)), i
                    }
                if (p.qsa && !P[e + " "] && (!g || !g.test(e))) {
                    if (1 !== h) d = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ie) : t.setAttribute("id", a = S), o = (c = f(e)).length; o--;) c[o] = "#" + a + " " + ve(c[o]);
                        u = c.join(","), d = K.test(e) && me(t.parentNode) || t
                    }
                    if (u) try {
                        return R.apply(i, d.querySelectorAll(u)), i
                    } catch (e) {} finally {
                        a === S && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(H, "$1"), t, i, n)
        }

        function se() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
            }
        }

        function ae(e) {
            return e[S] = !0, e
        }

        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function ue(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(i) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function pe(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function fe(s) {
            return ae(function(o) {
                return o = +o, ae(function(e, t) {
                    for (var i, n = s([], e.length, o), r = n.length; r--;) e[i = n[r]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = oe.support = {}, r = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, x = oe.setDocument = function(e) {
                var t, i, n = e ? e.ownerDocument || e : y;
                return n !== T && 9 === n.nodeType && n.documentElement && (s = (T = n).documentElement, k = !r(T), y !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), p.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = le(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = G.test(T.getElementsByClassName), p.getById = le(function(e) {
                    return s.appendChild(e).id = S, !T.getElementsByName || !T.getElementsByName(S).length
                }), p.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(J, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var i = e.replace(J, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === i
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var i, n, r, o = t.getElementById(e);
                        if (o) {
                            if ((i = o.getAttributeNode("id")) && i.value === e) return [o];
                            for (r = t.getElementsByName(e), n = 0; o = r[n++];)
                                if ((i = o.getAttributeNode("id")) && i.value === e) return [o]
                        }
                        return []
                    }
                }), w.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, w.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
                }, a = [], g = [], (p.qsa = G.test(T.querySelectorAll)) && (le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (p.matchesSelector = G.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                    p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", F)
                }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = G.test(s.compareDocumentPosition), v = t || G.test(s.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === y && v(y, e) ? -1 : t === T || t.ownerDocument === y && v(y, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var i, n = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === T ? -1 : t === T ? 1 : r ? -1 : o ? 1 : l ? M(l, e) - M(l, t) : 0;
                    if (r === o) return ue(e, t);
                    for (i = e; i = i.parentNode;) s.unshift(i);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (; s[n] === a[n];) n++;
                    return n ? ue(s[n], a[n]) : s[n] === y ? -1 : a[n] === y ? 1 : 0
                }), T
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && x(e), t = t.replace(X, "='$1']"), p.matchesSelector && k && !P[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
                    var i = u.call(e, t);
                    if (i || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return 0 < oe(t, T, null, [e]).length
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && x(e), v(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== T && x(e);
                var i = w.attrHandle[t.toLowerCase()],
                    n = i && E.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !k) : void 0;
                return void 0 !== n ? n : p.attributes || !k ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ie)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, i = [],
                    n = 0,
                    r = 0;
                if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(A), c) {
                    for (; t = e[r++];) t === e[r] && (n = i.push(r));
                    for (; n--;) e.splice(i[n], 1)
                }
                return l = null, e
            }, o = oe.getText = function(e) {
                var t, i = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n++];) i += o(t);
                return i
            }, (w = oe.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: U,
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
                        return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && W.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(J, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = h[e + " "];
                        return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && h(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(i, n, r) {
                        return function(e) {
                            var t = oe.attr(e, i);
                            return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === r : "!=" === n ? t !== r : "^=" === n ? r && 0 === t.indexOf(r) : "*=" === n ? r && -1 < t.indexOf(r) : "$=" === n ? r && t.slice(-r.length) === r : "~=" === n ? -1 < (" " + t.replace(I, " ") + " ").indexOf(r) : "|=" === n && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, g) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            _ = "of-type" === e;
                        return 1 === m && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, i) {
                            var n, r, o, s, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = _ && e.nodeName.toLowerCase(),
                                h = !i && !_,
                                p = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (_ ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (p = (a = (n = (r = (o = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === C && n[1]) && n[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++p && s === e) {
                                            r[f] = [C, a, p];
                                            break
                                        }
                                } else if (h && (p = a = (n = (r = (o = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === C && n[1]), !1 === p)
                                    for (;
                                        (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (h && ((r = (o = s[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] = [C, p]), s !== e)););
                                return (p -= g) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return s[S] ? s(o) : 1 < s.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var i, n = s(e, o), r = n.length; r--;) e[i = M(e, n[r])] = !(t[i] = n[r])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var n = [],
                            r = [],
                            a = d(e.replace(H, "$1"));
                        return a[S] ? ae(function(e, t, i, n) {
                            for (var r, o = a(e, null, n, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, t, i) {
                            return n[0] = e, a(n, null, i, r), n[0] = null, !r.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(J, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: ae(function(i) {
                        return Y.test(i || "") || oe.error("unsupported lang: " + i), i = i.replace(J, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = i.location && i.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: fe(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: fe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: fe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = he(e);

        function ge() {}

        function ve(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ye(a, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                d = t && "parentNode" === u,
                h = n++;
            return e.first ? function(e, t, i) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d) return a(e, t, i);
                return !1
            } : function(e, t, i) {
                var n, r, o, s = [C, h];
                if (i) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || d) && a(e, t, i)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || d)
                            if (r = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((n = r[u]) && n[0] === C && n[1] === h) return s[2] = n[2];
                                if ((r[u] = s)[2] = a(e, t, i)) return !0
                            } return !1
            }
        }

        function _e(r) {
            return 1 < r.length ? function(e, t, i) {
                for (var n = r.length; n--;)
                    if (!r[n](e, t, i)) return !1;
                return !0
            } : r[0]
        }

        function we(e, t, i, n, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (i && !i(o, n, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function be(p, f, m, g, v, e) {
            return g && !g[S] && (g = be(g)), v && !v[S] && (v = be(v, e)), ae(function(e, t, i, n) {
                var r, o, s, a = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, i) {
                        for (var n = 0, r = t.length; n < r; n++) oe(e, t[n], i);
                        return i
                    }(f || "*", i.nodeType ? [i] : i, []),
                    d = !p || !e && f ? u : we(u, a, p, i, n),
                    h = m ? v || (e ? p : c || g) ? [] : t : d;
                if (m && m(d, h, i, n), g)
                    for (r = we(h, l), g(r, [], i, n), o = r.length; o--;)(s = r[o]) && (h[l[o]] = !(d[l[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [], o = h.length; o--;)(s = h[o]) && r.push(d[o] = s);
                            v(null, h = [], r, n)
                        }
                        for (o = h.length; o--;)(s = h[o]) && -1 < (r = v ? M(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else h = we(h === t ? h.splice(c, h.length) : h), v ? v(null, t, h, n) : R.apply(t, h)
            })
        }

        function xe(e) {
            for (var r, t, i, n = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                    return e === r
                }, s, !0), c = ye(function(e) {
                    return -1 < M(r, e)
                }, s, !0), u = [function(e, t, i) {
                    var n = !o && (i || t !== b) || ((r = t).nodeType ? l(e, t, i) : c(e, t, i));
                    return r = null, n
                }]; a < n; a++)
                if (t = w.relative[e[a].type]) u = [ye(_e(u), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[S]) {
                        for (i = ++a; i < n && !w.relative[e[i].type]; i++);
                        return be(1 < a && _e(u), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(H, "$1"), t, a < i && xe(e.slice(a, i)), i < n && xe(e = e.slice(i)), i < n && ve(e))
                    }
                    u.push(t)
                }
            return _e(u)
        }
        return ge.prototype = w.filters = w.pseudos, w.setFilters = new ge, f = oe.tokenize = function(e, t) {
            var i, n, r, o, s, a, l, c = _[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = w.preFilter; s;) {
                for (o in i && !(n = q.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(r = [])), i = !1, (n = B.exec(s)) && (i = n.shift(), r.push({
                        value: i,
                        type: n[0].replace(H, " ")
                    }), s = s.slice(i.length)), w.filter) !(n = U[o].exec(s)) || l[o] && !(n = l[o](n)) || (i = n.shift(), r.push({
                    value: i,
                    type: o,
                    matches: n
                }), s = s.slice(i.length));
                if (!i) break
            }
            return t ? s.length : s ? oe.error(e) : _(e, a).slice(0)
        }, d = oe.compile = function(e, t) {
            var i, g, v, y, _, n, r = [],
                o = [],
                s = P[e + " "];
            if (!s) {
                for (t || (t = f(e)), i = t.length; i--;)(s = xe(t[i]))[S] ? r.push(s) : o.push(s);
                (s = P(e, (g = o, v = r, y = 0 < v.length, _ = 0 < g.length, n = function(e, t, i, n, r) {
                    var o, s, a, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        h = b,
                        p = e || _ && w.find.TAG("*", r),
                        f = C += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (r && (b = t === T || t || r); c !== m && null != (o = p[c]); c++) {
                        if (_ && o) {
                            for (s = 0, t || o.ownerDocument === T || (x(o), i = !k); a = g[s++];)
                                if (a(o, t || T, i)) {
                                    n.push(o);
                                    break
                                }
                            r && (C = f)
                        }
                        y && ((o = !a && o) && l--, e && u.push(o))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(u, d, t, i);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = O.call(n));
                            d = we(d)
                        }
                        R.apply(n, d), r && !e && 0 < d.length && 1 < l + v.length && oe.uniqueSort(n)
                    }
                    return r && (C = f, b = h), u
                }, y ? ae(n) : n))).selector = e
            }
            return s
        }, m = oe.select = function(e, t, i, n) {
            var r, o, s, a, l, c = "function" == typeof e && e,
                u = !n && f(e = c.selector || e);
            if (i = i || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && k && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(J, ee), t) || [])[0])) return i;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = U.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (n = l(s.matches[0].replace(J, ee), K.test(o[0].type) && me(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = n.length && ve(o))) return R.apply(i, n), i;
                        break
                    }
            }
            return (c || d(e, u))(n, t, !k, i, !t || K.test(e) && me(t.parentNode) || t), i
        }, p.sortStable = S.split("").sort(A).join("") === S, p.detectDuplicates = !!c, x(), p.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(L, function(e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), oe
    }(T);
    S.find = p, S.expr = p.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = p.uniqueSort, S.text = p.getText, S.isXMLDoc = p.isXML, S.contains = p.contains, S.escapeSelector = p.escape;
    var f = function(e, t, i) {
            for (var n = [], r = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && S(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        x = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        C = S.expr.match.needsContext;

    function P(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function E(e, i, n) {
        return y(i) ? S.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? S.grep(e, function(e) {
            return e === i !== n
        }) : "string" != typeof i ? S.grep(e, function(e) {
            return -1 < r.call(i, e) !== n
        }) : S.filter(i, e, n)
    }
    S.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (S.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) S.find(e, r[t], i);
            return 1 < n ? S.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && C.test(e) ? S(e) : e || [], !1).length
        }
    });
    var O, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, i) {
        var n, r;
        if (!e) return this;
        if (i = i || O, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), A.test(n[1]) && S.isPlainObject(t))
                    for (n in t) y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = k.getElementById(n[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, O = S(k);
    var R = /^(?:parents|prev(?:Until|All))/,
        $ = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function M(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && S(e);
            if (!C.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
                            o.push(i);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(S(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return f(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return f(e, "parentNode", i)
        },
        next: function(e) {
            return M(e, "nextSibling")
        },
        prev: function(e) {
            return M(e, "previousSibling")
        },
        nextAll: function(e) {
            return f(e, "nextSibling")
        },
        prevAll: function(e) {
            return f(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return f(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return f(e, "previousSibling", i)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return P(e, "iframe") ? e.contentDocument : (P(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(n, r) {
        S.fn[n] = function(e, t) {
            var i = S.map(this, r, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = S.filter(t, i)), 1 < this.length && ($[n] || S.uniqueSort(i), R.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function j(e) {
        throw e
    }

    function z(e, t, i, n) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(i) : e && y(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    S.Callbacks = function(n) {
        var e, i;
        n = "string" == typeof n ? (e = n, i = {}, S.each(e.match(L) || [], function(e, t) {
            i[t] = !0
        }), i) : S.extend({}, n);
        var r, t, o, s, a = [],
            l = [],
            c = -1,
            u = function() {
                for (s = s || n.once, o = r = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && n.stopOnFalse && (c = a.length, t = !1);
                n.memory || (t = !1), r = !1, s && (a = t ? [] : "")
            },
            d = {
                add: function() {
                    return a && (t && !r && (c = a.length - 1, l.push(t)), function i(e) {
                        S.each(e, function(e, t) {
                            y(t) ? n.unique && d.has(t) || a.push(t) : t && t.length && "string" !== b(t) && i(t)
                        })
                    }(arguments), t && !r && u()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var i; - 1 < (i = S.inArray(t, a, i));) a.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], t || r || (a = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return S.Deferred(function(n) {
                            S.each(o, function(e, t) {
                                var i = y(r[t[4]]) && r[t[4]];
                                a[t[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, i, n) {
                        var l = 0;

                        function c(r, o, s, a) {
                            return function() {
                                var i = this,
                                    n = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = s.apply(i, n)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, c(l, o, N, a), c(l, o, j, a)) : (l++, t.call(e, c(l, o, N, a), c(l, o, j, a), c(l, o, N, o.notifyWith))) : (s !== N && (i = void 0, n = [e]), (a || o.resolveWith)(i, n))
                                        }
                                    },
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== j && (i = void 0, n = [e]), o.rejectWith(i, n))
                                        }
                                    };
                                r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(c(0, e, y(n) ? n : N, e.notifyWith)), o[1][3].add(c(0, e, y(t) ? t : N)), o[2][3].add(c(0, e, y(i) ? i : j))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, s) : s
                    }
                },
                a = {};
            return S.each(o, function(e, t) {
                var i = t[2],
                    n = t[5];
                s[t[1]] = i.add, n && i.add(function() {
                    r = n
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), i.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = i.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var i = arguments.length,
                t = i,
                n = Array(t),
                r = a.call(arguments),
                o = S.Deferred(),
                s = function(t) {
                    return function(e) {
                        n[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --i || o.resolveWith(n, r)
                    }
                };
            if (i <= 1 && (z(e, o.done(s(t)).resolve, o.reject, !i), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
            for (; t--;) z(r[t], s(t), o.reject);
            return o.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && F.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var I = S.Deferred();

    function H() {
        k.removeEventListener("DOMContentLoaded", H), T.removeEventListener("load", H), S.ready()
    }
    S.fn.ready = function(e) {
        return I.then(e).catch(function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait || I.resolveWith(k, [S]))
        }
    }), S.ready.then = I.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? T.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", H), T.addEventListener("load", H));
    var q = function(e, t, i, n, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == i;
            if ("object" === b(i))
                for (a in r = !0, i) q(e, t, a, i[a], !0, o, s);
            else if (void 0 !== n && (r = !0, y(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                    return c.call(S(e), i)
                })), t))
                for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return r ? e : c ? t.call(e) : l ? t(e[0], i) : o
        },
        B = /^-ms-/,
        X = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function Y(e) {
        return e.replace(B, "ms-").replace(X, W)
    }
    var U = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = S.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[Y(t)] = i;
            else
                for (n in t) r[Y(n)] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in n ? [t] : t.match(L) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || S.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Q = new V,
        G = new V,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function J(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, i)
            } else i = void 0;
        return i
    }
    S.extend({
        hasData: function(e) {
            return G.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, i) {
            return G.access(e, t, i)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, i) {
            return Q.access(e, t, i)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), S.fn.extend({
        data: function(i, e) {
            var t, n, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === i) {
                if (this.length && (r = G.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = Y(n.slice(5)), J(o, n, r[n]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof i ? this.each(function() {
                G.set(this, i)
            }) : q(this, function(e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = G.get(o, i))) return t;
                    if (void 0 !== (t = J(o, i))) return t
                } else this.each(function() {
                    G.set(this, i, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = Q.get(e, t), i && (!n || Array.isArray(i) ? n = Q.access(e, t, S.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = S.queue(e, t),
                n = i.length,
                r = i.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete o.stop, r.call(e, function() {
                S.dequeue(e, t)
            }, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Q.get(e, i) || Q.access(e, i, {
                empty: S.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", i])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = S.queue(this, t, i);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                r = S.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = Q.get(o[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ne = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
        },
        re = function(e, t, i, n) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = i.apply(e, n || []), t) e.style[o] = s[o];
            return r
        };

    function oe(e, t, i, n) {
        var r, o, s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return S.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (S.cssNumber[t] ? "" : "px"),
            u = (S.cssNumber[t] || "px" !== c && +l) && te.exec(S.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) S.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, S.style(e, t, u + c), i = i || []
        }
        return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
    }
    var se = {};

    function ae(e, t) {
        for (var i, n, r = [], o = 0, s = e.length; o < s; o++)(n = e[o]).style && (i = n.style.display, t ? ("none" === i && (r[o] = Q.get(n, "display") || null, r[o] || (n.style.display = "")), "" === n.style.display && ne(n) && (r[o] = (d = c = l = void 0, c = (a = n).ownerDocument, u = a.nodeName, (d = se[u]) || (l = c.body.appendChild(c.createElement(u)), d = S.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), se[u] = d)))) : "none" !== i && (r[o] = "none", Q.set(n, "display", i)));
        var a, l, c, u, d;
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    S.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ne(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function he(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? S.merge([e], i) : i
    }

    function pe(e, t) {
        for (var i = 0, n = e.length; i < n; i++) Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"))
    }
    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var fe, me, ge = /<|&#?\w+;/;

    function ve(e, t, i, n, r) {
        for (var o, s, a, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o)) S.merge(h, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            S.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = h[p++];)
            if (n && -1 < S.inArray(o, n)) r && r.push(o);
            else if (c = S.contains(o.ownerDocument, o), s = he(d.appendChild(o), "script"), c && pe(s), i)
            for (u = 0; o = s[u++];) ue.test(o.type || "") && i.push(o);
        return d
    }
    fe = k.createDocumentFragment().appendChild(k.createElement("div")), (me = k.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), fe.appendChild(me), v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
    var ye = k.documentElement,
        _e = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function Te() {
        return !1
    }

    function ke() {
        try {
            return k.activeElement
        } catch (e) {}
    }

    function Se(e, t, i, n, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) Se(e, a, i, n, t[a], o);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Te;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return S().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, r, n, i)
        })
    }
    S.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var o, s, a, l, c, u, d, h, p, f, m, g = Q.get(t);
            if (g)
                for (i.handler && (i = (o = i).handler, r = o.selector), r && S.find.matchesSelector(ye, r), i.guid || (i.guid = S.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(L) || [""]).length; c--;) p = m = (a = be.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = S.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = S.event.special[p] || {}, u = S.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && S.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), S.event.global[p] = !0)
        },
        remove: function(e, t, i, n, r) {
            var o, s, a, l, c, u, d, h, p, f, m, g = Q.hasData(e) && Q.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--;)
                    if (p = m = (a = be.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = S.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) u = h[o], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || S.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) S.event.remove(e, p + t[c], i, n, !0);
                S.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, r, o, s, a = S.event.fix(e),
                l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[a.type] || [],
                u = S.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = S.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, i = 0;
                        (o = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, i = 0; i < l; i++) void 0 === s[r = (n = t[i]).selector + " "] && (s[r] = n.needsContext ? -1 < S(r, this).index(c) : S.find(r, this, null, [c]).length), s[r] && o.push(n);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ke() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ke() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return P(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
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
            return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        S.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, i = e.relatedTarget,
                    n = e.handleObj;
                return i && (i === this || S.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, i, n) {
            return Se(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return Se(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Te), this.each(function() {
                S.event.remove(this, e, i, t)
            })
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function $e(e, t) {
        var i, n, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), s = Q.set(t, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (i = 0, n = c[r].length; i < n; i++) S.event.add(t, r, c[r][i]);
            G.hasData(e) && (a = G.access(e), l = S.extend({}, a), G.set(t, l))
        }
    }

    function Me(i, n, r, o) {
        n = m.apply([], n);
        var e, t, s, a, l, c, u = 0,
            d = i.length,
            h = d - 1,
            p = n[0],
            f = y(p);
        if (f || 1 < d && "string" == typeof p && !v.checkClone && Ae.test(p)) return i.each(function(e) {
            var t = i.eq(e);
            f && (n[0] = p.call(this, e, t.html())), Me(t, n, r, o)
        });
        if (d && (t = (e = ve(n, i[0].ownerDocument, !1, i, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = S.map(he(e, "script"), De)).length; u < d; u++) l = e, u !== h && (l = S.clone(l, !0, !0), a && S.merge(s, he(l, "script"))), r.call(i[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, S.map(s, Re), u = 0; u < a; u++) l = s[u], ue.test(l.type || "") && !Q.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : w(l.textContent.replace(Ee, ""), c, l))
        }
        return i
    }

    function Le(e, t, i) {
        for (var n, r = t ? S.filter(t, e) : e, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || S.cleanData(he(n)), n.parentNode && (i && S.contains(n.ownerDocument, n) && pe(he(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, o, s, a, l, c, u = e.cloneNode(!0),
                d = S.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = he(u), n = 0, r = (o = he(e)).length; n < r; n++) a = o[n], l = s[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (o = o || he(e), s = s || he(u), n = 0, r = o.length; n < r; n++) $e(o[n], s[n]);
                else $e(e, u);
            return 0 < (s = he(u, "script")).length && pe(s, !d && he(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, i, n, r = S.event.special, o = 0; void 0 !== (i = e[o]); o++)
                if (U(i)) {
                    if (t = i[Q.expando]) {
                        if (t.events)
                            for (n in t.events) r[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
                        i[Q.expando] = void 0
                    }
                    i[G.expando] && (i[G.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return q(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Me(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return q(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (S.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return Me(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, i) < 0 && (S.cleanData(he(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        S.fn[e] = function(e) {
            for (var t, i = [], n = S(e), r = n.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), S(n[o])[s](t), l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Ne = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        je = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        },
        ze = new RegExp(ie.join("|"), "i");

    function Fe(e, t, i) {
        var n, r, o, s, a = e.style;
        return (i = i || je(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || S.contains(e.ownerDocument, e) || (s = S.style(e, t)), !v.pixelBoxStyles() && Ne.test(s) && ze.test(t) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Ie(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(a).appendChild(l);
                var e = T.getComputedStyle(l);
                i = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), n = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", ye.removeChild(a), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var i, n, r, o, s, a = k.createElement("div"),
            l = k.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(v, {
            boxSizingReliable: function() {
                return e(), n
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), i
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), r
            }
        }))
    }();
    var He = /^(none|table(?!-c[ea]).+)/,
        qe = /^--/,
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        We = ["Webkit", "Moz", "ms"],
        Ye = k.createElement("div").style;

    function Ue(e) {
        var t = S.cssProps[e];
        return t || (t = S.cssProps[e] = function(e) {
            if (e in Ye) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = We.length; i--;)
                if ((e = We[i] + t) in Ye) return e
        }(e) || e), t
    }

    function Ve(e, t, i) {
        var n = te.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Qe(e, t, i, n, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === i && (l += S.css(e, i + ie[s], !0, r)), n ? ("content" === i && (l -= S.css(e, "padding" + ie[s], !0, r)), "margin" !== i && (l -= S.css(e, "border" + ie[s] + "Width", !0, r))) : (l += S.css(e, "padding" + ie[s], !0, r), "padding" !== i ? l += S.css(e, "border" + ie[s] + "Width", !0, r) : a += S.css(e, "border" + ie[s] + "Width", !0, r));
        return !n && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function Ge(e, t, i) {
        var n = je(e),
            r = Fe(e, t, n),
            o = "border-box" === S.css(e, "boxSizing", !1, n),
            s = o;
        if (Ne.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return s = s && (v.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === S.css(e, "display", !1, n)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Qe(e, t, i || (o ? "border" : "content"), s, n, r) + "px"
    }

    function Ze(e, t, i, n, r) {
        return new Ze.prototype.init(e, t, i, n, r)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Fe(e, "opacity");
                        return "" === i ? "1" : i
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
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = Y(t),
                    l = qe.test(t),
                    c = e.style;
                if (l || (t = Ue(a)), s = S.cssHooks[t] || S.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : c[t];
                "string" == (o = typeof i) && (r = te.exec(i)) && r[1] && (i = oe(e, t, r), o = "number"), null != i && i == i && ("number" === o && (i += r && r[3] || (S.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var r, o, s, a = Y(t);
            return qe.test(t) || (t = Ue(a)), (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = Fe(e, t, n)), "normal" === r && t in Xe && (r = Xe[t]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
        }
    }), S.each(["height", "width"], function(e, a) {
        S.cssHooks[a] = {
            get: function(e, t, i) {
                if (t) return !He.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, a, i) : re(e, Be, function() {
                    return Ge(e, a, i)
                })
            },
            set: function(e, t, i) {
                var n, r = je(e),
                    o = "border-box" === S.css(e, "boxSizing", !1, r),
                    s = i && Qe(e, a, i, o, r);
                return o && v.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Qe(e, a, "border", !1, r) - .5)), s && (n = te.exec(t)) && "px" !== (n[3] || "px") && (e.style[a] = t, t = S.css(e, a)), Ve(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Ie(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        S.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[r + ie[t] + o] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, "margin" !== r && (S.cssHooks[r + o].set = Ve)
    }), S.fn.extend({
        css: function(e, t) {
            return q(this, function(e, t, i) {
                var n, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (n = je(e), r = t.length; s < r; s++) o[t[s]] = S.css(e, t[s], !1, n);
                    return o
                }
                return void 0 !== i ? S.style(e, t, i) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ze).prototype = {
        constructor: Ze,
        init: function(e, t, i, n, r, o) {
            this.elem = e, this.prop = i, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (S.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ze.propHooks._default.set(this), this
        }
    }).init.prototype = Ze.prototype, (Ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ze.prototype.init, S.fx.step = {};
    var Ke, Je, et, tt, it = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function rt() {
        Je && (!1 === k.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(rt) : T.setTimeout(rt, S.fx.interval), S.fx.tick())
    }

    function ot() {
        return T.setTimeout(function() {
            Ke = void 0
        }), Ke = Date.now()
    }

    function st(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = ie[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function at(e, t, i) {
        for (var n, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (n = r[o].call(i, t, e)) return n
    }

    function lt(o, e, t) {
        var i, s, n = 0,
            r = lt.prefilters.length,
            a = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Ke || ot(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, r = c.tweens.length; n < r; n++) c.tweens[n].run(i);
                return a.notifyWith(o, [c, i, t]), i < 1 && r ? t : (r || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ke || ot(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var i = S.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var t = 0,
                        i = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < i; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var i, n, r, o, s;
                for (i in e)
                    if (r = t[n = Y(i)], o = e[i], Array.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), (s = S.cssHooks[n]) && "expand" in s)
                        for (i in o = s.expand(o), delete e[n], o) i in e || (e[i] = o[i], t[i] = r);
                    else t[n] = r
            }(u, c.opts.specialEasing); n < r; n++)
            if (i = lt.prefilters[n].call(c, o, u, c.opts)) return y(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return S.map(u, at, c), y(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return oe(i.elem, e, te.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            y(e) ? (t = e, e = ["*"]) : e = e.match(L);
            for (var i, n = 0, r = e.length; n < r; n++) i = e[n], lt.tweeners[i] = lt.tweeners[i] || [], lt.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, r, o, s, a, l, c, u, d = "width" in t || "height" in t,
                h = this,
                p = {},
                f = e.style,
                m = e.nodeType && ne(e),
                g = Q.get(e, "fxshow");
            for (n in i.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, h.always(function() {
                    h.always(function() {
                        s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[n], it.test(r)) {
                    if (delete t[n], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    p[n] = g && g[n] || S.style(e, n)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (n in d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Q.get(e, "display")), "none" === (u = S.css(e, "display")) && (c ? u = c : (ae([e], !0), c = e.style.display || c, u = S.css(e, "display"), ae([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === S.css(e, "float") && (l || (h.done(function() {
                        f.display = c
                    }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(e, "fxshow", {
                    display: c
                }), o && (g.hidden = !m), m && ae([e], !0), h.done(function() {
                    for (n in m || ae([e]), Q.remove(e, "fxshow"), p) S.style(e, n, p[n])
                })), l = at(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? S.extend({}, e) : {
            complete: i || !i && t || y(e) && e,
            duration: e,
            easing: i && t || t && !y(t) && t
        };
        return S.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            y(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
        }, n
    }, S.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(ne).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(t, e, i, n) {
            var r = S.isEmptyObject(t),
                o = S.speed(e, i, n),
                s = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (r || Q.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    i = S.timers,
                    n = Q.get(this);
                if (t) n[t] && n[t].stop && s(n[t]);
                else
                    for (t in n) n[t] && n[t].stop && nt.test(t) && s(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != r && i[t].queue !== r || (i[t].anim.stop(o), e = !1, i.splice(t, 1));
                !e && o || S.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    i = t[s + "queue"],
                    n = t[s + "queueHooks"],
                    r = S.timers,
                    o = i ? i.length : 0;
                for (t.finish = !0, S.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, n) {
        var r = S.fn[n];
        S.fn[n] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(st(n, !0), e, t, i)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        S.fn[e] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            i = S.timers;
        for (Ke = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || S.fx.stop(), Ke = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        Je || (Je = !0, rt())
    }, S.fx.stop = function() {
        Je = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(n, e) {
        return n = S.fx && S.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function() {
                T.clearTimeout(i)
            }
        })
    }, et = k.createElement("input"), tt = k.createElement("select").appendChild(k.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = k.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
    var ct, ut = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return q(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === o && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== i ? null === i ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = S.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && P(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                r = t && t.match(L);
            if (r && 1 === e.nodeType)
                for (; i = r[n++];) e.removeAttribute(i)
        }
    }), ct = {
        set: function(e, t, i) {
            return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ut[t] || S.find.attr;
        ut[t] = function(e, t, i) {
            var n, r, o = t.toLowerCase();
            return i || (r = ut[o], ut[o] = n, n = null != s(e, t, i) ? o : null, ut[o] = r), n
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(L) || []).join(" ")
    }

    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return q(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, i, n, r, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, ft(this)))
            });
            if ((e = mt(t)).length)
                for (; i = this[l++];)
                    if (r = ft(i), n = 1 === i.nodeType && " " + pt(r) + " ") {
                        for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r !== (a = pt(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, ft(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                for (; i = this[l++];)
                    if (r = ft(i), n = 1 === i.nodeType && " " + pt(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                        r !== (a = pt(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var o = typeof r,
                s = "string" === o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                S(this).toggleClass(r.call(this, e, ft(this), t), t)
            }) : this.each(function() {
                var e, t, i, n;
                if (s)
                    for (t = 0, i = S(this), n = mt(r); e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== r && "boolean" !== o || ((e = ft(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + pt(ft(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var gt = /\r/g;
    S.fn.extend({
        val: function(i) {
            var n, e, r, t = this[0];
            return arguments.length ? (r = y(i), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? i.call(this, e, S(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : pt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (n = o < 0 ? l : s ? o : 0; n < l; n++)
                        if (((i = r[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !P(i.parentNode, "optgroup"))) {
                            if (t = S(i).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, o = S.makeArray(t), s = r.length; s--;)((n = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(n), o)) && (i = !0);
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, v.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in T;
    var vt = /^(?:focusinfocus|focusoutblur)$/,
        yt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, i, n) {
            var r, o, s, a, l, c, u, d, h = [i || k],
                p = g.call(e, "type") ? e.type : e,
                f = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = d = s = i = i || k, 3 !== i.nodeType && 8 !== i.nodeType && !vt.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[S.expando] ? e : new S.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), u = S.event.special[p] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                if (!n && !u.noBubble && !_(i)) {
                    for (a = u.delegateType || p, vt.test(a + p) || (o = o.parentNode); o; o = o.parentNode) h.push(o), s = o;
                    s === (i.ownerDocument || k) && h.push(s.defaultView || s.parentWindow || T)
                }
                for (r = 0;
                    (o = h[r++]) && !e.isPropagationStopped();) d = o, e.type = 1 < r ? a : u.bindType || p, (c = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && U(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !U(i) || l && y(i[p]) && !_(i) && ((s = i[l]) && (i[l] = null), S.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, yt), i[p](), e.isPropagationStopped() && d.removeEventListener(p, yt), S.event.triggered = void 0, s && (i[l] = s)), e.result
            }
        },
        simulate: function(e, t, i) {
            var n = S.extend(new S.Event, i, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) return S.event.trigger(e, t, i, !0)
        }
    }), v.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var r = function(e) {
            S.event.simulate(n, e.target, S.event.fix(e))
        };
        S.event.special[n] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, n);
                t || e.addEventListener(i, r, !0), Q.access(e, n, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, n) - 1;
                t ? Q.access(e, n, t) : (e.removeEventListener(i, r, !0), Q.remove(e, n))
            }
        }
    });
    var _t = T.location,
        wt = Date.now(),
        bt = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var xt = /\[\]$/,
        Tt = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Ct(i, e, n, r) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            n || xt.test(i) ? r(i, t) : Ct(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, r)
        });
        else if (n || "object" !== b(e)) r(i, e);
        else
            for (t in e) Ct(i + "[" + t + "]", e[t], n, r)
    }
    S.param = function(e, t) {
        var i, n = [],
            r = function(e, t) {
                var i = y(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) Ct(i, e[i], t, r);
        return n.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var i = S(this).val();
                return null == i ? null : Array.isArray(i) ? S.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Tt, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g,
        At = /#.*$/,
        Et = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        $t = {},
        Mt = {},
        Lt = "*/".concat("*"),
        Nt = k.createElement("a");

    function jt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0,
                r = e.toLowerCase().match(L) || [];
            if (y(t))
                for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (o[i] = o[i] || []).unshift(t)) : (o[i] = o[i] || []).push(t)
        }
    }

    function zt(t, r, o, s) {
        var a = {},
            l = t === Mt;

        function c(e) {
            var n;
            return a[e] = !0, S.each(t[e] || [], function(e, t) {
                var i = t(r, o, s);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (r.dataTypes.unshift(i), c(i), !1)
            }), n
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }

    function Ft(e, t) {
        var i, n, r = S.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && S.extend(!0, e, n), e
    }
    Nt.href = _t.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
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
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: jt($t),
        ajaxTransport: jt(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, h, i, p, n, f, m, r, o, g = S.ajaxSetup({}, t),
                v = g.context || g,
                y = g.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                _ = S.Deferred(),
                w = S.Callbacks("once memory"),
                b = g.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (f) {
                            if (!i)
                                for (i = {}; t = Ot.exec(h);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return f ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == f && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == f && (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (f) x.always(e[x.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (_.promise(x), g.url = ((e || g.url || _t.href) + "").replace(Rt, _t.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
                n = k.createElement("a");
                try {
                    n.href = g.url, n.href = n.href, g.crossDomain = Nt.protocol + "//" + Nt.host != n.protocol + "//" + n.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), zt($t, g, t, x), f) return x;
            for (r in (m = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Dt.test(g.type), d = g.url.replace(At, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Pt, "+")) : (o = g.url.slice(d.length), g.data && (g.processData || "string" == typeof g.data) && (d += (bt.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(Et, "$1"), o = (bt.test(d) ? "&" : "?") + "_=" + wt++ + o), g.url = d + o), g.ifModified && (S.lastModified[d] && x.setRequestHeader("If-Modified-Since", S.lastModified[d]), S.etag[d] && x.setRequestHeader("If-None-Match", S.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : g.accepts["*"]), g.headers) x.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, x, g) || f)) return x.abort();
            if (l = "abort", w.add(g.complete), x.done(g.success), x.fail(g.error), u = zt(Mt, g, t, x)) {
                if (x.readyState = 1, m && y.trigger("ajaxSend", [x, g]), f) return x;
                g.async && 0 < g.timeout && (p = T.setTimeout(function() {
                    x.abort("timeout")
                }, g.timeout));
                try {
                    f = !1, u.send(s, c)
                } catch (e) {
                    if (f) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, i, n) {
                var r, o, s, a, l, c = t;
                f || (f = !0, p && T.clearTimeout(p), u = void 0, h = n || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, i && (a = function(e, t, i) {
                    for (var n, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in i) o = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(g, x, i)), a = function(e, t, i, n) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, x, r), r ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (S.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (S.etag[d] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", r ? _.resolveWith(v, [o, c, x]) : _.rejectWith(v, [x, c, s]), x.statusCode(b), b = void 0, m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [x, g, r ? o : s]), w.fireWith(v, [x, c]), m && (y.trigger("ajaxComplete", [x, g]), --S.active || S.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, i) {
            return S.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, r) {
        S[r] = function(e, t, i, n) {
            return y(t) && (n = n || i, i = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: r,
                dataType: n,
                data: t,
                success: i
            }, S.isPlainObject(e) && e))
        }
    }), S._evalUrl = function(e) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(i) {
            return y(i) ? this.each(function(e) {
                S(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = y(t);
            return this.each(function(e) {
                S(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var It = {
            0: 200,
            1223: 204
        },
        Ht = S.ajaxSettings.xhr();
    v.cors = !!Ht && "withCredentials" in Ht, v.ajax = Ht = !!Ht, S.ajaxTransport(function(r) {
        var o, s;
        if (v.cors || Ht && !r.crossDomain) return {
            send: function(e, t) {
                var i, n = r.xhr();
                if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (i in r.xhrFields) n[i] = r.xhrFields[i];
                for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                o = function(e) {
                    return function() {
                        o && (o = s = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(It[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = o(), s = n.onerror = n.ontimeout = o("error"), void 0 !== n.onabort ? n.onabort = s : n.onreadystatechange = function() {
                    4 === n.readyState && T.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    n.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(i) {
        var n, r;
        if (i.crossDomain) return {
            send: function(e, t) {
                n = S("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", r = function(e) {
                    n.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), k.head.appendChild(n[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var qt, Bt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || S.expando + "_" + wt++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, i) {
        var n, r, o, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + n) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
            return o || S.error(n + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = T[n], T[n] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === r ? S(T).removeProp(n) : T[n] = r, e[n] && (e.jsonpCallback = t.jsonpCallback, Bt.push(n)), o && y(r) && r(o[0]), o = r = void 0
        }), "script"
    }), v.createHTMLDocument = ((qt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), S.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (v.createHTMLDocument ? ((n = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(n)) : t = k), o = !i && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = ve([e], t, o), o && o.length && S(o).remove(), S.merge([], r.childNodes)));
        var n, r, o
    }, S.fn.load = function(e, t, i) {
        var n, r, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (n = pt(e.slice(a)), e = e.slice(0, a)), y(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && S.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            s.each(function() {
                i.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, i) {
            var n, r, o, s, a, l, c = S.css(e, "position"),
                u = S(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, i, S.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0), r.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - S.css(n, "marginTop", !0),
                    left: t.left - r.left - S.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        S.fn[t] = function(e) {
            return q(this, function(e, t, i) {
                var n;
                if (_(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i) return n ? n[r] : e[t];
                n ? n.scrollTo(o ? n.pageXOffset : i, o ? i : n.pageYOffset) : e[t] = i
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, i) {
        S.cssHooks[i] = Ie(v.pixelPosition, function(e, t) {
            if (t) return t = Fe(e, i), Ne.test(t) ? S(e).position()[i] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        S.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(n, o) {
            S.fn[o] = function(e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    r = n || (!0 === e || !0 === t ? "margin" : "border");
                return q(this, function(e, t, i) {
                    var n;
                    return _(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? S.css(e, t, r) : S.style(e, t, i, r)
                }, a, i ? e : void 0, i)
            }
        })
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
        S.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), S.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), S.proxy = function(e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return n = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, r
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = P, S.isFunction = y, S.isWindow = _, S.camelCase = Y, S.type = b, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Wt = T.jQuery,
        Yt = T.$;
    return S.noConflict = function(e) {
        return T.$ === S && (T.$ = Yt), e && T.jQuery === S && (T.jQuery = Wt), S
    }, e || (T.jQuery = T.$ = S), S
}), window.Modernizr = function(n, d, s) {
    function i(e) {
        m.cssText = e
    }

    function o(e, t) {
        return typeof e === t
    }

    function r(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
        for (var i in e) {
            var n = e[i];
            if (!r(n, "-") && m[n] !== s) return "pfx" != t || n
        }
        return !1
    }

    function l(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.slice(1),
            r = (e + " " + b.join(n + " ") + n).split(" ");
        return o(t, "string") || o(t, "undefined") ? a(r, t) : function(e, t, i) {
            for (var n in e) {
                var r = t[e[n]];
                if (r !== s) return !1 === i ? e[n] : o(r, "function") ? r.bind(i || t) : r
            }
            return !1
        }(r = (e + " " + x.join(n + " ") + n).split(" "), t, i)
    }
    var e, c, u, h = {},
        p = d.documentElement,
        f = "modernizr",
        t = d.createElement(f),
        m = t.style,
        g = d.createElement("input"),
        v = ":)",
        y = {}.toString,
        _ = " -webkit- -moz- -o- -ms- ".split(" "),
        w = "Webkit Moz O ms",
        b = w.split(" "),
        x = w.toLowerCase().split(" "),
        T = "http://www.w3.org/2000/svg",
        k = {},
        S = {},
        C = {},
        P = [],
        A = P.slice,
        E = function(e, t, i, n) {
            var r, o, s, a, l = d.createElement("div"),
                c = d.body,
                u = c || d.createElement("body");
            if (parseInt(i, 10))
                for (; i--;)(s = d.createElement("div")).id = n ? n[i] : f + (i + 1), l.appendChild(s);
            return r = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""), l.id = f, (c ? l : u).innerHTML += r, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(u)), o = t(l, e), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), p.style.overflow = a), !!o
        },
        O = (u = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        }, function(e, t) {
            t = t || d.createElement(u[e] || "div");
            var i = (e = "on" + e) in t;
            return i || (t.setAttribute || (t = d.createElement("div")), t.setAttribute && t.removeAttribute && (t.setAttribute(e, ""), i = o(t[e], "function"), o(t[e], "undefined") || (t[e] = s), t.removeAttribute(e))), t = null, i
        }),
        D = {}.hasOwnProperty;
    for (var R in c = o(D, "undefined") || o(D.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return D.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(n) {
            var r = this;
            if ("function" != typeof r) throw new TypeError;
            var o = A.call(arguments, 1),
                s = function() {
                    if (this instanceof s) {
                        var e = function() {};
                        e.prototype = r.prototype;
                        var t = new e,
                            i = r.apply(t, o.concat(A.call(arguments)));
                        return Object(i) === i ? i : t
                    }
                    return r.apply(n, o.concat(A.call(arguments)))
                };
            return s
        }), k.flexbox = function() {
            return l("flexWrap")
        }, k.flexboxlegacy = function() {
            return l("boxDirection")
        }, k.canvas = function() {
            var e = d.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }, k.canvastext = function() {
            return !(!h.canvas || !o(d.createElement("canvas").getContext("2d").fillText, "function"))
        }, k.webgl = function() {
            return !!n.WebGLRenderingContext
        }, k.touch = function() {
            var t;
            return "ontouchstart" in n || n.DocumentTouch && d instanceof DocumentTouch ? t = !0 : E(["@media (", _.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                t = 9 === e.offsetTop
            }), t
        }, k.geolocation = function() {
            return "geolocation" in navigator
        }, k.postmessage = function() {
            return !!n.postMessage
        }, k.websqldatabase = function() {
            return !!n.openDatabase
        }, k.indexedDB = function() {
            return !!l("indexedDB", n)
        }, k.hashchange = function() {
            return O("hashchange", n) && (d.documentMode === s || 7 < d.documentMode)
        }, k.history = function() {
            return !(!n.history || !history.pushState)
        }, k.draganddrop = function() {
            var e = d.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, k.websockets = function() {
            return "WebSocket" in n || "MozWebSocket" in n
        }, k.rgba = function() {
            return i("background-color:rgba(150,255,150,.5)"), r(m.backgroundColor, "rgba")
        }, k.hsla = function() {
            return i("background-color:hsla(120,40%,100%,.5)"), r(m.backgroundColor, "rgba") || r(m.backgroundColor, "hsla")
        }, k.multiplebgs = function() {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(m.background)
        }, k.backgroundsize = function() {
            return l("backgroundSize")
        }, k.borderimage = function() {
            return l("borderImage")
        }, k.borderradius = function() {
            return l("borderRadius")
        }, k.boxshadow = function() {
            return l("boxShadow")
        }, k.textshadow = function() {
            return "" === d.createElement("div").style.textShadow
        }, k.opacity = function() {
            return e = "opacity:.55", i(_.join(e + ";") + (t || "")), /^0.55$/.test(m.opacity);
            var e, t
        }, k.cssanimations = function() {
            return l("animationName")
        }, k.csscolumns = function() {
            return l("columnCount")
        }, k.cssgradients = function() {
            var e = "background-image:";
            return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + _.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), r(m.backgroundImage, "gradient")
        }, k.cssreflections = function() {
            return l("boxReflect")
        }, k.csstransforms = function() {
            return !!l("transform")
        }, k.csstransforms3d = function() {
            var t = !!l("perspective");
            return t && "webkitPerspective" in p.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, k.csstransitions = function() {
            return l("transition")
        }, k.fontface = function() {
            var o;
            return E('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
                var i = d.getElementById("smodernizr"),
                    n = i.sheet || i.styleSheet,
                    r = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
                o = /src/i.test(r) && 0 === r.indexOf(t.split(" ")[0])
            }), o
        }, k.generatedcontent = function() {
            var t;
            return E(["#", f, "{font:0/0 a}#", f, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = 3 <= e.offsetHeight
            }), t
        }, k.video = function() {
            var e = d.createElement("video"),
                t = !1;
            try {
                (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (e) {}
            return t
        }, k.audio = function() {
            var e = d.createElement("audio"),
                t = !1;
            try {
                (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (e) {}
            return t
        }, k.localstorage = function() {
            try {
                return localStorage.setItem(f, f), localStorage.removeItem(f), !0
            } catch (e) {
                return !1
            }
        }, k.sessionstorage = function() {
            try {
                return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0
            } catch (e) {
                return !1
            }
        }, k.webworkers = function() {
            return !!n.Worker
        }, k.applicationcache = function() {
            return !!n.applicationCache
        }, k.svg = function() {
            return !!d.createElementNS && !!d.createElementNS(T, "svg").createSVGRect
        }, k.inlinesvg = function() {
            var e = d.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == T
        }, k.smil = function() {
            return !!d.createElementNS && /SVGAnimate/.test(y.call(d.createElementNS(T, "animate")))
        }, k.svgclippaths = function() {
            return !!d.createElementNS && /SVGClipPath/.test(y.call(d.createElementNS(T, "clipPath")))
        }, k) c(k, R) && (e = R.toLowerCase(), h[e] = k[R](), P.push((h[e] ? "" : "no-") + e));
    return h.input || (h.input = function(e) {
            for (var t = 0, i = e.length; t < i; t++) C[e[t]] = !!(e[t] in g);
            return C.list && (C.list = !(!d.createElement("datalist") || !n.HTMLDataListElement)), C
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
            for (var t, i, n, r = 0, o = e.length; r < o; r++) g.setAttribute("type", i = e[r]), (t = "text" !== g.type) && (g.value = v, g.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && g.style.WebkitAppearance !== s ? (p.appendChild(g), t = (n = d.defaultView).getComputedStyle && "textfield" !== n.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight, p.removeChild(g)) : /^(search|tel)$/.test(i) || (t = /^(url|email)$/.test(i) ? g.checkValidity && !1 === g.checkValidity() : g.value != v)), S[e[r]] = !!t;
            return S
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))), h.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var i in e) c(e, i) && h.addTest(i, e[i]);
            else {
                if (e = e.toLowerCase(), h[e] !== s) return h;
                t = "function" == typeof t ? t() : t, p.className += " " + (t ? "" : "no-") + e, h[e] = t
            }
            return h
        }, i(""), t = g = null,
        function(e, l) {
            function c() {
                var e = f.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function u(e) {
                var t = a[e[n]];
                return t || (t = {}, s++, e[n] = s, a[s] = t), t
            }

            function d(e, t, i) {
                return t || (t = l), p ? t.createElement(e) : (i || (i = u(t)), !(n = i.cache[e] ? i.cache[e].cloneNode() : o.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren || r.test(e) || n.tagUrn ? n : i.frag.appendChild(n));
                var n
            }

            function t(e) {
                e || (e = l);
                var t, i, n, r, o, s, a = u(e);
                return !f.shivCSS || h || a.hasCSS || (a.hasCSS = (r = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", o = (n = e).createElement("p"), s = n.getElementsByTagName("head")[0] || n.documentElement, o.innerHTML = "x<style>" + r + "</style>", !!s.insertBefore(o.lastChild, s.firstChild))), p || (t = e, (i = a).cache || (i.cache = {}, i.createElem = t.createElement, i.createFrag = t.createDocumentFragment, i.frag = i.createFrag()), t.createElement = function(e) {
                    return f.shivMethods ? d(e, t, i) : i.createElem(e)
                }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(e) {
                    return i.createElem(e), i.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(f, i.frag)), e
            }
            var h, p, i = e.html5 || {},
                r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                n = "_html5shiv",
                s = 0,
                a = {};
            ! function() {
                try {
                    var e = l.createElement("a");
                    e.innerHTML = "<xyz></xyz>", h = "hidden" in e, p = 1 == e.childNodes.length || function() {
                        l.createElement("a");
                        var e = l.createDocumentFragment();
                        return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                    }()
                } catch (e) {
                    p = h = !0
                }
            }();
            var f = {
                elements: i.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== i.shivCSS,
                supportsUnknownElements: p,
                shivMethods: !1 !== i.shivMethods,
                type: "default",
                shivDocument: t,
                createElement: d,
                createDocumentFragment: function(e, t) {
                    if (e || (e = l), p) return e.createDocumentFragment();
                    for (var i = (t = t || u(e)).frag.cloneNode(), n = 0, r = c(), o = r.length; n < o; n++) i.createElement(r[n]);
                    return i
                }
            };
            e.html5 = f, t(l)
        }(this, d), h._version = "2.8.2", h._prefixes = _, h._domPrefixes = x, h._cssomPrefixes = b, h.mq = function(e) {
            var t, i = n.matchMedia || n.msMatchMedia;
            return i ? i(e) && i(e).matches || !1 : (E("@media " + e + " { #" + f + " { position: absolute; } }", function(e) {
                t = "absolute" == (n.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
            }), t)
        }, h.hasEvent = O, h.testProp = function(e) {
            return a([e])
        }, h.testAllProps = l, h.testStyles = E, h.prefixed = function(e, t, i) {
            return t ? l(e, t, i) : l(e, "pfx")
        }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + P.join(" "), h
}(this, this.document);
var _gsScope, objectFitImages = function() {
    "use strict";

    function o(e, t, i) {
        var n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
        f.call(e, "src") !== n && m.call(e, "src", n)
    }

    function s(e, t) {
        e.naturalWidth ? t(e) : setTimeout(s, 100, e, t)
    }

    function a(t) {
        var i, n, e = function(e) {
                for (var t, i = getComputedStyle(e).fontFamily, n = {}; null !== (t = c.exec(i));) n[t[1]] = t[2];
                return n
            }(t),
            r = t[l];
        if (e["object-fit"] = e["object-fit"] || "fill", !r.img) {
            if ("fill" === e["object-fit"]) return;
            if (!r.skipTest && u && !e["object-position"]) return
        }
        if (!r.img) {
            r.img = new Image(t.width, t.height), r.img.srcset = f.call(t, "data-ofi-srcset") || t.srcset, r.img.src = f.call(t, "data-ofi-src") || t.src, m.call(t, "data-ofi-src", t.src), t.srcset && m.call(t, "data-ofi-srcset", t.srcset), o(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                i = t, n = {
                    get: function(e) {
                        return i[l].img[e || "src"]
                    },
                    set: function(e, t) {
                        return i[l].img[t || "src"] = e, m.call(i, "data-ofi-" + t, e), a(i), e
                    }
                }, Object.defineProperty(i, "src", n), Object.defineProperty(i, "currentSrc", {
                    get: function() {
                        return n.get("currentSrc")
                    }
                }), Object.defineProperty(i, "srcset", {
                    get: function() {
                        return n.get("srcset")
                    },
                    set: function(e) {
                        return n.set(e, "srcset")
                    }
                })
            } catch (t) {
                window.console && console.log("http://bit.ly/ofi-old-browser")
            }
        }(function(e) {
            if (e.srcset && !p && window.picturefill) {
                var t = window.picturefill._;
                e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
                    reselect: !0
                }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
                    reselect: !0
                })), e.currentSrc = e[t.ns].curSrc || e.src
            }
        })(r.img), t.style.backgroundImage = 'url("' + (r.img.currentSrc || r.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = e["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", /scale-down/.test(e["object-fit"]) ? s(r.img, function() {
            r.img.naturalWidth > t.width || r.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), s(r.img, function(e) {
            o(t, e.naturalWidth, e.naturalHeight)
        })
    }

    function r(e, t) {
        var i = !g && !e;
        if (t = t || {}, e = e || "img", d && !t.skipTest || !h) return !1;
        "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
        for (var n = 0; n < e.length; n++) e[n][l] = e[n][l] || {
            skipTest: t.skipTest
        }, a(e[n]);
        i && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && r(e.target, {
                skipTest: t.skipTest
            })
        }, !0), g = !0, e = "img"), t.watchMQ && window.addEventListener("resize", r.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    var l = "bfred-it:object-fit-images",
        c = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        e = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        u = "object-fit" in e.style,
        d = "object-position" in e.style,
        h = "background-size" in e.style,
        p = "string" == typeof e.currentSrc,
        f = e.getAttribute,
        m = e.setAttribute,
        g = !1;
    return r.supportsObjectFit = u, r.supportsObjectPosition = d,
        function() {
            function i(e, t) {
                return e[l] && e[l].img && ("src" === t || "srcset" === t) ? e[l].img : e
            }
            d || (HTMLImageElement.prototype.getAttribute = function(e) {
                return f.call(i(this, e), e)
            }, HTMLImageElement.prototype.setAttribute = function(e, t) {
                return m.call(i(this, e), e, String(t))
            })
        }(), r
}();
! function(M, p) {
    "use strict";

    function s(_, w, b, e, t) {
        function i() {
            var r, o, s, a;
            y = 1 < M.devicePixelRatio, n(b), 0 <= w.delay && setTimeout(function() {
                l(!0)
            }, w.delay), (w.delay < 0 || w.combined) && (e.e = (r = w.throttle, o = function(e) {
                "resize" === e.type && (k = S = -1), l(e.all)
            }, a = 0, function(e, t) {
                function i() {
                    a = +new Date, o.call(_, e)
                }
                var n = +new Date - a;
                s && clearTimeout(s), r < n || !w.enableThrottle || t ? i() : s = setTimeout(i, r - n)
            }), e.a = function(e) {
                n(e), b.push.apply(b, e)
            }, e.g = function() {
                return b = L(b).filter(function() {
                    return !L(this).data(w.loadedName)
                })
            }, e.f = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var i = b.filter(e[t]);
                    i.length && l(!1, i)
                }
            }, l(), L(w.appendScroll).on("scroll." + t + " resize." + t, e.e))
        }

        function n(e) {
            for (var t = w.defaultImage, i = w.placeholder, n = w.imageBase, r = w.srcsetAttribute, o = w.loaderAttribute, s = w._f || {}, a = 0, l = (e = L(e).filter(function() {
                    var e = L(this),
                        t = T(this);
                    return !e.data(w.handledName) && (e.attr(w.attribute) || e.attr(r) || e.attr(o) || s[t] !== p)
                }).data("plugin_" + w.name, _)).length; a < l; a++) {
                var c = L(e[a]),
                    u = T(e[a]),
                    d = c.attr(w.imageBaseAttribute) || n;
                u == E && d && c.attr(r) && c.attr(r, h(c.attr(r), d)), s[u] === p || c.attr(o) || c.attr(o, s[u]), u == E && t && !c.attr(O) ? c.attr(O, t) : u == E || !i || c.css($) && "none" != c.css($) || c.css($, "url('" + i + "')")
            }
        }

        function l(e, t) {
            if (b.length) {
                for (var i = t || b, n = !1, r = w.imageBase || "", o = w.srcsetAttribute, s = w.handledName, a = 0; a < i.length; a++)
                    if (e || t || (p = i[a], void 0, f = p.getBoundingClientRect(), m = w.scrollDirection, g = w.threshold, v = (0 <= S ? S : S = L(M).height()) + g > f.top && -g < f.bottom, y = (0 <= k ? k : k = L(M).width()) + g > f.left && -g < f.right, "vertical" == m ? v : "horizontal" == m ? y : v && y)) {
                        var l = L(i[a]),
                            c = T(i[a]),
                            u = l.attr(w.attribute),
                            d = l.attr(w.imageBaseAttribute) || r,
                            h = l.attr(w.loaderAttribute);
                        l.data(s) || w.visibleOnly && !l.is(":visible") || !((u || l.attr(o)) && (c == E && (d + u != l.attr(O) || l.attr(o) != l.attr(D)) || c != E && d + u != l.css($)) || h) || (n = !0, l.data(s, !0), x(l, c, d, h))
                    }
                var p, f, m, g, v, y;
                n && (b = L(b).filter(function() {
                    return !L(this).data(s)
                }))
            } else w.autoDestroy && _.destroy()
        }

        function x(t, e, i, n) {
            ++v;
            var r = function() {
                g("onError", t), m(), r = L.noop
            };
            g("beforeLoad", t);
            var o = w.attribute,
                s = w.srcsetAttribute,
                a = w.sizesAttribute,
                l = w.retinaAttribute,
                c = w.removeAttribute,
                u = w.loadedName,
                d = t.attr(l);
            if (n) {
                var h = function() {
                    c && t.removeAttr(w.loaderAttribute), t.data(u, !0), g(C, t), setTimeout(m, 1), h = L.noop
                };
                t.off(A).one(A, r).one(P, h), g(n, t, function(e) {
                    e ? (t.off(P), h()) : (t.off(A), r())
                }) || t.trigger(A)
            } else {
                var p = L(new Image);
                p.one(A, r).one(P, function() {
                    t.hide(), e == E ? t.attr(R, p.attr(R)).attr(D, p.attr(D)).attr(O, p.attr(O)) : t.css($, "url('" + p.attr(O) + "')"), t[w.effect](w.effectTime), c && (t.removeAttr(o + " " + s + " " + l + " " + w.imageBaseAttribute), a !== R && t.removeAttr(a)), t.data(u, !0), g(C, t), p.remove(), m()
                });
                var f = (y && d ? d : t.attr(o)) || "";
                p.attr(R, t.attr(a)).attr(D, t.attr(s)).attr(O, f ? i + f : null), p.complete && p.trigger(P)
            }
        }

        function T(e) {
            return e.tagName.toLowerCase()
        }

        function h(e, t) {
            if (t) {
                var i = e.split(",");
                e = "";
                for (var n = 0, r = i.length; n < r; n++) e += t + i[n].trim() + (n !== r - 1 ? "," : "")
            }
            return e
        }

        function m() {
            --v, b.length || v || g("onFinishedAll")
        }

        function g(e, t, i) {
            return !!(e = w[e]) && (e.apply(_, [].slice.call(arguments, 1)), !0)
        }
        var v = 0,
            k = -1,
            S = -1,
            y = !1,
            C = "afterLoad",
            P = "load",
            A = "error",
            E = "img",
            O = "src",
            D = "srcset",
            R = "sizes",
            $ = "background-image";
        "event" == w.bind || r ? i() : L(M).on(P + "." + t, i)
    }

    function c(e, t) {
        var i = this,
            n = L.extend({}, i.config, t),
            r = {},
            o = n.name + "-" + ++a;
        return i.config = function(e, t) {
            return t === p ? n[e] : (n[e] = t, i)
        }, i.addItems = function(e) {
            return r.a && r.a("string" === L.type(e) ? L(e) : e), i
        }, i.getItems = function() {
            return r.g ? r.g() : {}
        }, i.update = function(e) {
            return r.e && r.e({}, !e), i
        }, i.force = function(e) {
            return r.f && r.f("string" === L.type(e) ? L(e) : e), i
        }, i.loadAll = function() {
            return r.e && r.e({
                all: !0
            }, !0), i
        }, i.destroy = function() {
            return L(n.appendScroll).off("." + o, r.e), L(M).off("." + o), r = {}, p
        }, s(i, n, e, r, o), n.chainable ? e : i
    }
    var L = M.jQuery || M.Zepto,
        a = 0,
        r = !1;
    L.fn.Lazy = L.fn.lazy = function(e) {
        return new c(this, e)
    }, L.Lazy = L.lazy = function(e, t, i) {
        if (L.isFunction(t) && (i = t, t = []), L.isFunction(i)) {
            e = L.isArray(e) ? e : [e], t = L.isArray(t) ? t : [t];
            for (var n = c.prototype.config, r = n._f || (n._f = {}), o = 0, s = e.length; o < s; o++)(n[e[o]] === p || L.isFunction(n[e[o]])) && (n[e[o]] = i);
            for (var a = 0, l = t.length; a < l; a++) r[t[a]] = e[0]
        }
    }, c.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: M,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: p,
        afterLoad: p,
        onError: p,
        onFinishedAll: p
    }, L(M).on("load", function() {
        r = !0
    })
}(window), $.fn.easeScroll = function(O) {
        ! function() {
            function s() {
                y.keyboardSupport && t("keydown", e)
            }

            function o() {
                if (document.body) {
                    var e = document.body,
                        t = document.documentElement,
                        i = window.innerHeight,
                        n = e.scrollHeight;
                    if (m = 0 <= document.compatMode.indexOf("CSS") ? t : e, d = e, s(), f = !0, top != self) p = !0;
                    else if (i < n && (e.offsetHeight <= i || t.offsetHeight <= i)) {
                        var r = !1;
                        if (t.style.height = "auto", setTimeout(function() {
                                r || t.scrollHeight == document.height || (r = !0, setTimeout(function() {
                                    t.style.height = document.height + "px", r = !1
                                }, 100))
                            }, 10), m.offsetHeight <= i) {
                            var o = document.createElement("div");
                            o.style.clear = "both", e.appendChild(o)
                        }
                    }
                    y.fixedBackground || h || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll")
                }
            }

            function l(d, h, p, f) {
                if (f || (f = 1e3), i = 0 < (i = h) ? 1 : -1, n = 0 < (n = p) ? 1 : -1, (_.x !== i || _.y !== n) && (_.x = i, _.y = n, b = [], T = 0), 1 != y.accelerationMax) {
                    var e = +new Date - T;
                    if (e < y.accelerationDelta) {
                        var t = (1 + 30 / e) / 2;
                        1 < t && (t = Math.min(t, y.accelerationMax), h *= t, p *= t)
                    }
                    T = +new Date
                }
                var i, n;
                if (b.push({
                        x: h,
                        y: p,
                        lastX: h < 0 ? .99 : -.99,
                        lastY: p < 0 ? .99 : -.99,
                        start: +new Date
                    }), !x) {
                    var m = d === document.body,
                        g = function() {
                            for (var e = +new Date, t = 0, i = 0, n = 0; n < b.length; n++) {
                                var r = b[n],
                                    o = e - r.start,
                                    s = o >= y.animationTime,
                                    a = s ? 1 : o / y.animationTime;
                                y.pulseAlgorithm && (a = 1 <= (u = a) ? 1 : u <= 0 ? 0 : (1 == y.pulseNormalize && (y.pulseNormalize /= v(1)), v(u)));
                                var l = r.x * a - r.lastX >> 0,
                                    c = r.y * a - r.lastY >> 0;
                                t += l, i += c, r.lastX += l, r.lastY += c, s && (b.splice(n, 1), n--)
                            }
                            var u;
                            m ? window.scrollBy(t, i) : (t && (d.scrollLeft += t), i && (d.scrollTop += i)), h || p || (b = []), b.length ? A(g, d, f / y.frameRate + 1) : x = !1
                        };
                    A(g, d, 0), x = !0
                }
            }

            function e(e) {
                var t = e.target,
                    i = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== w.spacebar;
                if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || i) return !0;
                if (u(t, "button") && e.keyCode === w.spacebar) return !0;
                var n = 0,
                    r = 0,
                    o = c(d),
                    s = o.clientHeight;
                switch (o == document.body && (s = window.innerHeight), e.keyCode) {
                    case w.up:
                        r = -y.arrowScroll;
                        break;
                    case w.down:
                        r = y.arrowScroll;
                        break;
                    case w.spacebar:
                        r = -(e.shiftKey ? 1 : -1) * s * .9;
                        break;
                    case w.pageup:
                        r = .9 * -s;
                        break;
                    case w.pagedown:
                        r = .9 * s;
                        break;
                    case w.home:
                        r = -o.scrollTop;
                        break;
                    case w.end:
                        var a = o.scrollHeight - o.scrollTop - s;
                        r = 0 < a ? a + 10 : 0;
                        break;
                    case w.left:
                        n = -y.arrowScroll;
                        break;
                    case w.right:
                        n = y.arrowScroll;
                        break;
                    default:
                        return !0
                }
                l(o, n, r), e.preventDefault()
            }

            function r(e, t) {
                for (var i = e.length; i--;) k[P(e[i])] = t;
                return t
            }

            function c(e) {
                var t = [],
                    i = m.scrollHeight;
                do {
                    var n = k[P(e)];
                    if (n) return r(t, n);
                    if (t.push(e), i === e.scrollHeight) {
                        if (!p || m.clientHeight + 10 < i) return r(t, document.body)
                    } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return r(t, e)
                } while (e = e.parentNode)
            }

            function t(e, t, i) {
                window.addEventListener(e, t, i || !1)
            }

            function u(e, t) {
                return (e.nodeName || "").toLowerCase() === t.toLowerCase()
            }

            function a(e, t) {
                return Math.floor(e / t) == e / t
            }

            function v(e) {
                var t, i;
                return (e *= y.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (i = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - i)), t * y.pulseNormalize
            }
            var d, i = $.extend({
                    frameRate: 60,
                    animationTime: 1e3,
                    stepSize: 120,
                    pulseAlgorithm: !0,
                    pulseScale: 8,
                    pulseNormalize: 1,
                    accelerationDelta: 20,
                    accelerationMax: 1,
                    keyboardSupport: !0,
                    arrowScroll: 50,
                    touchpadSupport: !0,
                    fixedBackground: !0
                }, O),
                n = {
                    frameRate: i.frameRate,
                    animationTime: i.animationTime,
                    stepSize: i.stepSize,
                    pulseAlgorithm: i.pulseAlgorithm,
                    pulseScale: i.pulseScale,
                    pulseNormalize: i.pulseNormalize,
                    accelerationDelta: i.accelerationDelta,
                    accelerationMax: i.accelerationMax,
                    keyboardSupport: i.keyboardSupport,
                    arrowScroll: i.arrowScroll,
                    touchpadSupport: i.touchpadSupport,
                    fixedBackground: i.fixedBackground,
                    excluded: ""
                },
                y = n,
                h = !1,
                p = !1,
                _ = {
                    x: 0,
                    y: 0
                },
                f = !1,
                m = document.documentElement,
                g = [120, 120, 120],
                w = {
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    spacebar: 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36
                },
                b = (y = n, []),
                x = !1,
                T = +new Date,
                k = {};
            setInterval(function() {
                k = {}
            }, 1e4);
            var S, C, P = (C = 0, function(e) {
                    return e.uniqueID || (e.uniqueID = C++)
                }),
                A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, i) {
                    window.setTimeout(e, i || 1e3 / 60)
                },
                E = /chrome|iPad/i.test(window.navigator.userAgent);
            "onmousewheel" in document && E && (t("mousedown", function(e) {
                d = e.target
            }), t("mousewheel", function(e) {
                f || o();
                var t = e.target,
                    i = c(t);
                if (!i || e.defaultPrevented || u(d, "embed") || u(t, "embed") && /\.pdf/i.test(t.src)) return !0;
                var n = e.wheelDeltaX || 0,
                    r = e.wheelDeltaY || 0;
                return n || r || (r = e.wheelDelta || 0), !(y.touchpadSupport || ! function(e) {
                    if (e) {
                        e = Math.abs(e), g.push(e), g.shift(), clearTimeout(S);
                        var t = g[0] == g[1] && g[1] == g[2],
                            i = a(g[0], 120) && a(g[1], 120) && a(g[2], 120);
                        return !(t || i)
                    }
                }(r)) || (1.2 < Math.abs(n) && (n *= y.stepSize / 120), 1.2 < Math.abs(r) && (r *= y.stepSize / 120), l(i, -n, -r), void e.preventDefault())
            }), t("load", o))
        }()
    },
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(c) {
        "use strict";
        var r, s = window.Slick || {};
        r = 0, (s = function(e, t) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = r++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, i) {
            var n = this;
            if ("boolean" == typeof t) i = t, t = null;
            else if (t < 0 || t >= n.slideCount) return !1;
            n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, s.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, s.prototype.animateSlide = function(e, t) {
            var i = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
                },
                complete: function() {
                    t && t.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
                n.disableTransition(), t.call()
            }, n.options.speed))
        }, s.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = c(e).not(this.$slider)), e
        }, s.prototype.asNavFor = function(t) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = c(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, s.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, s.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, s.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, s.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, s.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, s.prototype.buildDots = function() {
            var e, t, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, s.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, s.prototype.buildRows = function() {
            var e, t, i, n, r, o, s, a = this;
            if (n = document.createDocumentFragment(), o = a.$slider.children(), 1 < a.options.rows) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var u = e * s + (t * a.options.slidesPerRow + i);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, s.prototype.checkResponsive = function(e, t) {
            var i, n, r, o = this,
                s = !1,
                a = o.$slider.width(),
                l = window.innerWidth || c(window).width();
            if ("window" === o.respondTo ? r = l : "slider" === o.respondTo ? r = a : "min" === o.respondTo && (r = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
                for (i in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[i] && (n = o.breakpoints[i]) : r > o.breakpoints[i] && (n = o.breakpoints[i]));
                null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || t) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), s = n), e || !1 === s || o.$slider.trigger("breakpoint", [o, s])
            }
        }, s.prototype.changeSlide = function(e, t) {
            var i, n, r = this,
                o = c(e.currentTarget);
            switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, t);
                    break;
                case "next":
                    n = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, t);
                    break;
                case "index":
                    var s = 0 === e.data.index ? 0 : e.data.index || o.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(s), !1, t), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, s.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, s.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, s.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, s.prototype.cleanUpRows = function() {
            var e;
            1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, s.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, s.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                c(this).attr("style", c(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, s.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, s.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, s.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, s.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
                e.stopImmediatePropagation();
                var t = c(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, s.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, s.prototype.getLeft = function(e) {
            var t, i, n, r = this,
                o = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (o = r.slideOffset = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + o, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
        }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, s.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                r = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return r
        }, s.prototype.getSlick = function() {
            return this
        }, s.prototype.getSlideCount = function() {
            var i, n, r = this;
            return n = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function(e, t) {
                return t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * r.swipeLeft ? (i = t, !1) : void 0
            }), Math.abs(c(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
        }, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, s.prototype.init = function(e) {
            var t = this;
            c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, s.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
                c(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + e
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
                c(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + e,
                    id: "slick-slide" + t.instanceUid + e
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, s.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, s.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
        }, s.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
        }, s.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, s.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, s.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, s.prototype.lazyLoad = function() {
            function e(e) {
                c("img[data-lazy]", e).each(function() {
                    var e = c(this),
                        t = c(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, e, t])
                        })
                    }, i.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                    }, i.src = t
                })
            }
            var t, i, n = this;
            !0 === n.options.centerMode ? !0 === n.options.infinite ? i = (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), i = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, i <= n.slideCount && i++)), e(n.$slider.find(".slick-slide").slice(t, i)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, s.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, s.prototype.next = s.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, s.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, s.prototype.pause = s.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, s.prototype.play = s.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, s.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
        }, s.prototype.prev = s.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, s.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, s.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, i, n, r = this,
                o = c("img[data-lazy]", r.$slider);
            o.length ? (t = o.first(), i = t.attr("data-lazy"), (n = document.createElement("img")).onload = function() {
                t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, i]), r.progressiveLazyLoad()
            }, n.onerror = function() {
                e < 3 ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i]), r.progressiveLazyLoad())
            }, n.src = i) : r.$slider.trigger("allImagesLoaded", [r])
        }, s.prototype.refresh = function(e) {
            var t, i, n = this;
            i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
                currentSlide: t
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, s.prototype.registerBreakpoints = function() {
            var e, t, i, n = this,
                r = n.options.responsive || null;
            if ("array" === c.type(r) && r.length) {
                for (e in n.respondTo = n.options.respondTo || "window", r)
                    if (i = n.breakpoints.length - 1, t = r[e].breakpoint, r.hasOwnProperty(e)) {
                        for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                        n.breakpoints.push(t), n.breakpointSettings[t] = r[e].settings
                    }
                n.breakpoints.sort(function(e, t) {
                    return n.options.mobileFirst ? e - t : t - e
                })
            }
        }, s.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, s.prototype.resize = function() {
            var e = this;
            c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, i) {
            var n = this;
            return "boolean" == typeof e ? e = !0 === (t = e) ? 0 : n.slideCount - 1 : e = !0 === t ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, s.prototype.setCSS = function(e) {
            var t, i, n = this,
                r = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, !1 === n.transformsEnabled || (!(r = {}) === n.cssTransitions ? r[n.animType] = "translate(" + t + ", " + i + ")" : r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(r)
        }, s.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, s.prototype.setFade = function() {
            var i, n = this;
            n.$slides.each(function(e, t) {
                i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : c(t).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, s.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, s.prototype.setOption = s.prototype.slickSetOption = function() {
            var e, t, i, n, r, o = this,
                s = !1;
            if ("object" === c.type(arguments[0]) ? (i = arguments[0], s = arguments[1], r = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[i] = n;
            else if ("multiple" === r) c.each(i, function(e, t) {
                o.options[e] = t
            });
            else if ("responsive" === r)
                for (t in n)
                    if ("array" !== c.type(o.options.responsive)) o.options.responsive = [n[t]];
                    else {
                        for (e = o.options.responsive.length - 1; 0 <= e;) o.options.responsive[e].breakpoint === n[t].breakpoint && o.options.responsive.splice(e, 1), e--;
                        o.options.responsive.push(n[t])
                    }
            s && (o.unload(), o.reinit())
        }, s.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, s.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, s.prototype.setSlideClasses = function(e) {
            var t, i, n, r, o = this;
            i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t <= e && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, s.prototype.setupInfinite = function() {
            var e, t, i, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
                for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    c(this).attr("id", "")
                })
            }
        }, s.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, s.prototype.selectHandler = function(e) {
            var t = this,
                i = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
                n = parseInt(i.attr("data-slick-index"));
            return n || (n = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(n), void t.asNavFor(n)) : void t.slideHandler(n)
        }, s.prototype.slideHandler = function(e, t, i) {
            var n, r, o, s, a, l = null,
                c = this;
            return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
                c.postSlide(r)
            })) : c.postSlide(r), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function() {
                c.postSlide(r)
            }) : c.postSlide(r))))
        }, s.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, s.prototype.swipeDirection = function() {
            var e, t, i, n, r = this;
            return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === r.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
        }, s.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, s.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, s.prototype.swipeMove = function(e) {
            var t, i, n, r, o, s = this;
            return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || o && 1 !== o.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (i = s.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < s.touchObject.swipeLength && e.preventDefault(), r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, (s.touchObject.edgeHit = !1) === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + n * r : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * r, !0 === s.options.verticalSwiping && (s.swipeLeft = t + n * r), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }, s.prototype.swipeStart = function(e) {
            var t, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, s.prototype.unload = function() {
            var e = this;
            c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, s.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, s.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, s.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, s.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, c.fn.slick = function() {
            var e, t, i = this,
                n = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                o = i.length;
            for (e = 0; e < o; e++)
                if ("object" == typeof n || void 0 === n ? i[e].slick = new s(i[e], n) : t = i[e].slick[n].apply(i[e].slick, r), void 0 !== t) return t;
            return i
        }
    }), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e, l, t, T, b, x, k, v, i, y, S, _, w, p, f, g, n;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, u, g) {
            var v = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                y = function(e, t, i) {
                    var n, r, o = e.cycle;
                    for (n in o) r = o[n], e[n] = "function" == typeof r ? r.call(t[i], i) : r[i % r.length];
                    delete e.cycle
                },
                _ = function(e, t, i) {
                    g.call(this, e, t, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = _.prototype.render
                },
                w = 1e-10,
                b = g._internals,
                x = b.isSelector,
                T = b.isArray,
                e = _.prototype = g.to({}, .1, {}),
                k = [];
            _.version = "1.18.5", e.constructor = _, e.kill()._gc = !1, _.killTweensOf = _.killDelayedCallsTo = g.killTweensOf, _.getTweensOf = g.getTweensOf, _.lagSmoothing = g.lagSmoothing, _.ticker = g.ticker, _.render = g.render, e.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), g.prototype.invalidate.call(this)
            }, e.updateTo = function(e, t) {
                var i, n = this.ratio,
                    r = this.vars.immediateRender || e.immediateRender;
                for (i in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[i] = e[i];
                if (this._initted || r)
                    if (t) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && g._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || r)
                    for (var s, a = 1 / (1 - n), l = this._firstPT; l;) s = l.s + l.c, l.c *= a, l.s = s - l.c, l = l._next;
                return this
            }, e.render = function(e, t, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, r, o, s, a, l, c, u, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._time,
                    p = this._totalTime,
                    f = this._cycle,
                    m = this._duration,
                    g = this._rawPrevTime;
                if (d - 1e-7 <= e ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === m && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (g < 0 || e <= 0 && -1e-7 <= e || g === w && "isPause" !== this.data) && g !== e && (i = !0, w < g && (r = "onReverseComplete")), this._rawPrevTime = u = !t || e || g === e ? e : w)) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === m && 0 < g) && (r = "onReverseComplete", n = this._reversed), e < 0 && (this._active = !1, 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= g && (i = !0), this._rawPrevTime = u = !t || e || g === e ? e : w)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (s = m + this._repeatDelay, this._cycle = this._totalTime / s >> 0, 0 !== this._cycle && this._cycle === this._totalTime / s && p <= e && this._cycle--, this._time = this._totalTime - this._cycle * s, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? this._time = m : this._time < 0 && (this._time = 0)), this._easeType ? (a = this._time / m, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (c = this._easePower) ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), 1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / m < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / m)), h !== this._time || i || f !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = h, this._totalTime = p, this._rawPrevTime = g, this._cycle = f, b.lazyTweens.push(this), void(this._lazy = [e, t]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / m) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && 0 <= e && (this._active = !0), 0 === p && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === m) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== p || r) && this._callback("onUpdate")), this._cycle !== f && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === m && this._rawPrevTime === w && u !== w && (this._rawPrevTime = 0))
                } else p !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, _.to = function(e, t, i) {
                return new _(e, t, i)
            }, _.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new _(e, t, i)
            }, _.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new _(e, t, n)
            }, _.staggerTo = _.allTo = function(e, t, i, n, r, o, s) {
                n = n || 0;
                var a, l, c, u, d = 0,
                    h = [],
                    p = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(s || i.callbackScope || this, o || k)
                    },
                    f = i.cycle,
                    m = i.startAt && i.startAt.cycle;
                for (T(e) || ("string" == typeof e && (e = g.selector(e) || e), x(e) && (e = v(e))), e = e || [], n < 0 && ((e = v(e)).reverse(), n *= -1), a = e.length - 1, c = 0; c <= a; c++) {
                    for (u in l = {}, i) l[u] = i[u];
                    if (f && (y(l, e, c), null != l.duration && (t = l.duration, delete l.duration)), m) {
                        for (u in m = l.startAt = {}, i.startAt) m[u] = i.startAt[u];
                        y(l.startAt, e, c)
                    }
                    l.delay = d + (l.delay || 0), c === a && r && (l.onComplete = p), h[c] = new _(e[c], t, l), d += n
                }
                return h
            }, _.staggerFrom = _.allFrom = function(e, t, i, n, r, o, s) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, _.staggerTo(e, t, i, n, r, o, s)
            }, _.staggerFromTo = _.allFromTo = function(e, t, i, n, r, o, s, a) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, _.staggerTo(e, t, n, r, o, s, a)
            }, _.delayedCall = function(e, t, i, n, r) {
                return new _(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, _.set = function(e, t) {
                return new _(e, 0, t)
            }, _.isTweening = function(e) {
                return 0 < g.getTweensOf(e, !0).length
            };
            var o = function(e, t) {
                    for (var i = [], n = 0, r = e._first; r;) r instanceof g ? i[n++] = r : (t && (i[n++] = r), n = (i = i.concat(o(r, t))).length), r = r._next;
                    return i
                },
                d = _.getAllTweens = function(e) {
                    return o(n._rootTimeline, e).concat(o(n._rootFramesTimeline, e))
                };
            _.killAll = function(e, t, i, n) {
                null == t && (t = !0), null == i && (i = !0);
                var r, o, s, a = d(0 != n),
                    l = a.length,
                    c = t && i && n;
                for (s = 0; s < l; s++) o = a[s], (c || o instanceof u || (r = o.target === o.vars.onComplete) && i || t && !r) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, _.killChildTweensOf = function(e, t) {
                if (null != e) {
                    var i, n, r, o, s, a = b.tweenLookup;
                    if ("string" == typeof e && (e = g.selector(e) || e), x(e) && (e = v(e)), T(e))
                        for (o = e.length; - 1 < --o;) _.killChildTweensOf(e[o], t);
                    else {
                        for (r in i = [], a)
                            for (n = a[r].target.parentNode; n;) n === e && (i = i.concat(a[r].tweens)), n = n.parentNode;
                        for (s = i.length, o = 0; o < s; o++) t && i[o].totalTime(i[o].totalDuration()), i[o]._enabled(!1, !1)
                    }
                }
            };
            var r = function(e, t, i, n) {
                t = !1 !== t, i = !1 !== i;
                for (var r, o, s = d(n = !1 !== n), a = t && i && n, l = s.length; - 1 < --l;) o = s[l], (a || o instanceof u || (r = o.target === o.vars.onComplete) && i || t && !r) && o.paused(e)
            };
            return _.pauseAll = function(e, t, i) {
                r(!0, e, t, i)
            }, _.resumeAll = function(e, t, i) {
                r(!1, e, t, i)
            }, _.globalTimeScale = function(e) {
                var t = n._rootTimeline,
                    i = g.ticker.time;
                return arguments.length ? (e = e || w, t._startTime = i - (i - t._startTime) * t._timeScale / e, t = n._rootFramesTimeline, i = g.ticker.frame, t._startTime = i - (i - t._startTime) * t._timeScale / e, t._timeScale = n._rootTimeline._timeScale = e, e) : t._timeScale
            }, e.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, e.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, e.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, e.duration = function(e) {
                return arguments.length ? n.prototype.duration.call(this, e) : this._duration
            }, e.totalDuration = function(e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, e.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, e.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, e.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, _
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(u, d, h) {
            var p = function(e) {
                    d.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var t, i, n = this.vars;
                    for (i in n) t = n[i], g(t) && -1 !== t.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(t));
                    g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                m = 1e-10,
                e = h._internals,
                t = p._internals = {},
                f = e.isSelector,
                g = e.isArray,
                v = e.lazyTweens,
                y = e.lazyRender,
                s = _gsScope._gsDefine.globals,
                _ = function(e) {
                    var t, i = {};
                    for (t in e) i[t] = e[t];
                    return i
                },
                w = function(e, t, i) {
                    var n, r, o = e.cycle;
                    for (n in o) r = o[n], e[n] = "function" == typeof r ? r.call(t[i], i) : r[i % r.length];
                    delete e.cycle
                },
                o = t.pauseCallback = function() {},
                b = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                i = p.prototype = new d;
            return p.version = "1.18.5", i.constructor = p, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(e, t, i, n) {
                var r = i.repeat && s.TweenMax || h;
                return t ? this.add(new r(e, t, i), n) : this.set(e, i, n)
            }, i.from = function(e, t, i, n) {
                return this.add((i.repeat && s.TweenMax || h).from(e, t, i), n)
            }, i.fromTo = function(e, t, i, n, r) {
                var o = n.repeat && s.TweenMax || h;
                return t ? this.add(o.fromTo(e, t, i, n), r) : this.set(e, n, r)
            }, i.staggerTo = function(e, t, i, n, r, o, s, a) {
                var l, c, u = new p({
                        onComplete: o,
                        onCompleteParams: s,
                        callbackScope: a,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    d = i.cycle;
                for ("string" == typeof e && (e = h.selector(e) || e), f(e = e || []) && (e = b(e)), (n = n || 0) < 0 && ((e = b(e)).reverse(), n *= -1), c = 0; c < e.length; c++)(l = _(i)).startAt && (l.startAt = _(l.startAt), l.startAt.cycle && w(l.startAt, e, c)), d && (w(l, e, c), null != l.duration && (t = l.duration, delete l.duration)), u.to(e[c], t, l, c * n);
                return this.add(u, r)
            }, i.staggerFrom = function(e, t, i, n, r, o, s, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, r, o, s, a)
            }, i.staggerFromTo = function(e, t, i, n, r, o, s, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, r, o, s, a, l)
            }, i.call = function(e, t, i, n) {
                return this.add(h.delayedCall(0, e, t, i), n)
            }, i.set = function(e, t, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new h(e, 0, t), i)
            }, p.exportRoot = function(e, t) {
                null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                var i, n, r = new p(e),
                    o = r._timeline;
                for (null == t && (t = !0), o._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = o._time, i = o._first; i;) n = i._next, t && i instanceof h && i.target === i.vars.onComplete || r.add(i, i._startTime - i._delay), i = n;
                return o.add(r, 0), r
            }, i.add = function(e, t, i, n) {
                var r, o, s, a, l, c;
                if ("number" != typeof t && (t = this._parseTimeOrLabel(t, 0, !0, e)), !(e instanceof u)) {
                    if (e instanceof Array || e && e.push && g(e)) {
                        for (i = i || "normal", n = n || 0, r = t, o = e.length, s = 0; s < o; s++) g(a = e[s]) && (a = new p({
                            tweens: a
                        })), this.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === i ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), r += n;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof e) return this.addLabel(e, t);
                    if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                    e = h.delayedCall(0, e)
                }
                if (d.prototype.add.call(this, e, t), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = (l = this).rawTime() > e._startTime; l._timeline;) c && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function(e) {
                if (e instanceof u) {
                    this._remove(e, !1);
                    var t = e._timeline = e.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                }
                if (e instanceof Array || e && e.push && g(e)) {
                    for (var i = e.length; - 1 < --i;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, i._remove = function(e, t) {
                d.prototype._remove.call(this, e, t);
                var i = this._last;
                return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function(e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, i.insert = i.insertMultiple = function(e, t, i, n) {
                return this.add(e, t || 0, i, n)
            }, i.appendMultiple = function(e, t, i, n) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
            }, i.addLabel = function(e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, i.addPause = function(e, t, i, n) {
                var r = h.delayedCall(0, o, i, n || this);
                return r.vars.onComplete = r.vars.onReverseComplete = t, r.data = "isPause", this._hasPause = !0, this.add(r, e)
            }, i.removeLabel = function(e) {
                return delete this._labels[e], this
            }, i.getLabelTime = function(e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, i._parseTimeOrLabel = function(e, t, i, n) {
                var r;
                if (n instanceof u && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && g(n)))
                    for (r = n.length; - 1 < --r;) n[r] instanceof u && n[r].timeline === this && this.remove(n[r]);
                if ("string" == typeof t) return this._parseTimeOrLabel(t, i && "number" == typeof e && null == this._labels[t] ? e - this.duration() : 0, i);
                if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (-1 === (r = e.indexOf("="))) return null == this._labels[e] ? i ? this._labels[e] = this.duration() + t : t : this._labels[e] + t;
                    t = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = 1 < r ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, i) : this.duration()
                }
                return Number(e) + t
            }, i.seek = function(e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
            }, i.stop = function() {
                return this.paused(!0)
            }, i.gotoAndPlay = function(e, t) {
                return this.play(e, t)
            }, i.gotoAndStop = function(e, t) {
                return this.pause(e, t)
            }, i.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, r, o, s, a, l, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._time,
                    h = this._startTime,
                    p = this._timeScale,
                    f = this._paused;
                if (u - 1e-7 <= e) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || this._rawPrevTime < 0 || this._rawPrevTime === m) && this._rawPrevTime !== e && this._first && (a = !0, this._rawPrevTime > m && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m, e = u + 1e-4;
                else if (e < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || e < 0 && 0 <= this._rawPrevTime)) && (s = "onReverseComplete", r = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, s = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : m, 0 === e && r)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                        e = 0, this._initted || (a = !0)
                    } else {
                    if (this._hasPause && !this._forcingPlayhead && !t) {
                        if (d <= e)
                            for (n = this._first; n && n._startTime <= e && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= e && !l;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n), n = n._prev;
                        l && (this._time = e = l._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = e
                }
                if (this._time !== d && this._first || i || a || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && 0 < e && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), d <= (c = this._time))
                        for (n = this._first; n && (o = n._next, c === this._time && (!this._paused || f));)(n._active || n._startTime <= c && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, c === this._time && (!this._paused || f));) {
                            if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                if (l === n) {
                                    for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (e - l._startTime) * l._timeScale : (e - l._startTime) * l._timeScale, t, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                            }
                            n = o
                        }
                    this._onUpdate && (t || (v.length && y(), this._callback("onUpdate"))), s && (this._gc || (h === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (v.length && y(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s)))
                }
            }, i._hasPausedChild = function() {
                for (var e = this._first; e;) {
                    if (e._paused || e instanceof p && e._hasPausedChild()) return !0;
                    e = e._next
                }
                return !1
            }, i.getChildren = function(e, t, i, n) {
                n = n || -9999999999;
                for (var r = [], o = this._first, s = 0; o;) o._startTime < n || (o instanceof h ? !1 !== t && (r[s++] = o) : (!1 !== i && (r[s++] = o), !1 !== e && (s = (r = r.concat(o.getChildren(!0, t, i))).length))), o = o._next;
                return r
            }, i.getTweensOf = function(e, t) {
                var i, n, r = this._gc,
                    o = [],
                    s = 0;
                for (r && this._enabled(!0, !0), n = (i = h.getTweensOf(e)).length; - 1 < --n;)(i[n].timeline === this || t && this._contains(i[n])) && (o[s++] = i[n]);
                return r && this._enabled(!1, !0), o
            }, i.recent = function() {
                return this._recent
            }, i._contains = function(e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, i.shiftChildren = function(e, t, i) {
                i = i || 0;
                for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += e), r = r._next;
                if (t)
                    for (n in o) o[n] >= i && (o[n] += e);
                return this._uncache(!0)
            }, i._kill = function(e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; - 1 < --n;) i[n]._kill(e, t) && (r = !0);
                return r
            }, i.clear = function(e) {
                var t = this.getChildren(!1, !0, !0),
                    i = t.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) t[i]._enabled(!1, !1);
                return !1 !== e && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return u.prototype.invalidate.call(this)
            }, i._enabled = function(e, t) {
                if (e === this._gc)
                    for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                return d.prototype._enabled.call(this, e, t)
            }, i.totalTime = function(e, t, i) {
                this._forcingPlayhead = !0;
                var n = u.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, n
            }, i.duration = function(e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function(e) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var t, i, n = 0, r = this._last, o = 999999999999; r;) t = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i), r = t;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
            }, i.paused = function(e) {
                if (!e)
                    for (var t = this._first, i = this._time; t;) t._startTime === i && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                return u.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === u._rootFramesTimeline
            }, i.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, p
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, s, e) {
            var i = function(e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                C = 1e-10,
                n = s._internals,
                P = n.lazyTweens,
                A = n.lazyRender,
                a = new e(null, null, 1, 0),
                r = i.prototype = new t;
            return r.constructor = i, r.kill()._gc = !1, i.version = "1.18.5", r.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, r.addCallback = function(e, t, i, n) {
                return this.add(s.delayedCall(0, e, i, n), t)
            }, r.removeCallback = function(e, t) {
                if (e)
                    if (null == t) this._kill(null, e);
                    else
                        for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); - 1 < --n;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                return this
            }, r.removePause = function(e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, r.tweenTo = function(e, t) {
                t = t || {};
                var i, n, r, o = {
                    ease: a,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
                for (n in t) o[n] = t[n];
                return o.time = this._parseTimeOrLabel(e), i = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new s(this, i, o), o.onStart = function() {
                    r.target.paused(!0), r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), t.onStart && r._callback("onStart")
                }, r
            }, r.tweenFromTo = function(e, t, i) {
                i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [e],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var n = this.tweenTo(t, i);
                return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
            }, r.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, r, o, s, a, l, c, u, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._duration,
                    p = this._time,
                    f = this._totalTime,
                    m = this._startTime,
                    g = this._timeScale,
                    v = this._rawPrevTime,
                    y = this._paused,
                    _ = this._cycle;
                if (d - 1e-7 <= e) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || v < 0 || v === C) && v !== e && this._first && (a = !0, C < v && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : C, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : e = (this._time = h) + 1e-4;
                else if (e < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== p || 0 === h && v !== C && (0 < v || e < 0 && 0 <= v) && !this._locked) && (s = "onReverseComplete", r = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, s = "onReverseComplete") : 0 <= v && this._first && (a = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = h || !t || e || this._rawPrevTime === e ? e : C, 0 === e && r)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                        e = 0, this._initted || (a = !0)
                    } else if (0 === h && v < 0 && (a = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (l = h + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && f <= e && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time), this._time > h ? e = (this._time = h) + 1e-4 : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                    if (p <= (e = this._time))
                        for (n = this._first; n && n._startTime <= e && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= e && !c;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (c = n), n = n._prev;
                    c && (this._time = e = c._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== _ && !this._locked) {
                    var w = this._yoyo && 0 != (1 & _),
                        b = w === (this._yoyo && 0 != (1 & this._cycle)),
                        x = this._totalTime,
                        T = this._cycle,
                        k = this._rawPrevTime,
                        S = this._time;
                    if (this._totalTime = _ * h, this._cycle < _ ? w = !w : this._totalTime += h, this._time = p, this._rawPrevTime = 0 === h ? v - 1e-4 : v, this._cycle = _, this._locked = !0, p = w ? 0 : h, this.render(p, t, 0 === h), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), p !== this._time) return;
                    if (b && (p = w ? h + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = S, this._totalTime = x, this._cycle = T, this._rawPrevTime = k
                }
                if (this._time !== p && this._first || i || a || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < e && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), p <= (u = this._time))
                        for (n = this._first; n && (o = n._next, u === this._time && (!this._paused || y));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, u === this._time && (!this._paused || y));) {
                            if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                if (c === n) {
                                    for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                            }
                            n = o
                        }
                    this._onUpdate && (t || (P.length && A(), this._callback("onUpdate"))), s && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (r && (P.length && A(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s)))
                } else f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, r.getActive = function(e, t, i) {
                null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                var n, r, o = [],
                    s = this.getChildren(e, t, i),
                    a = 0,
                    l = s.length;
                for (n = 0; n < l; n++)(r = s[n]).isActive() && (o[a++] = r);
                return o
            }, r.getLabelAfter = function(e) {
                e || 0 !== e && (e = this._time);
                var t, i = this.getLabelsArray(),
                    n = i.length;
                for (t = 0; t < n; t++)
                    if (i[t].time > e) return i[t].name;
                return null
            }, r.getLabelBefore = function(e) {
                null == e && (e = this._time);
                for (var t = this.getLabelsArray(), i = t.length; - 1 < --i;)
                    if (t[i].time < e) return t[i].name;
                return null
            }, r.getLabelsArray = function() {
                var e, t = [],
                    i = 0;
                for (e in this._labels) t[i++] = {
                    time: this._labels[e],
                    name: e
                };
                return t.sort(function(e, t) {
                    return e.time - t.time
                }), t
            }, r.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, r.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, r.totalDuration = function(e) {
                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
            }, r.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, r.currentLabel = function(e) {
                return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), T = 180 / Math.PI, b = [], x = [], k = [], v = {}, i = _gsScope._gsDefine.globals, y = function(e, t, i, n) {
            i === n && (i = n - (n - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
        }, S = function(e, t, i, n) {
            var r = {
                    a: e
                },
                o = {},
                s = {},
                a = {
                    c: n
                },
                l = (e + t) / 2,
                c = (t + i) / 2,
                u = (i + n) / 2,
                d = (l + c) / 2,
                h = (c + u) / 2,
                p = (h - d) / 8;
            return r.b = l + (e - l) / 4, o.b = d + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (d + h) / 2, s.b = h - p, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
        }, _ = function(e, t, i, n, r) {
            var o, s, a, l, c, u, d, h, p, f, m, g, v, y = e.length - 1,
                _ = 0,
                w = e[0].a;
            for (o = 0; o < y; o++) s = (c = e[_]).a, a = c.d, l = e[_ + 1].d, r ? (m = b[o], v = ((g = x[o]) + m) * t * .25 / (n ? .5 : k[o] || .5), h = a - ((u = a - (a - s) * (n ? .5 * t : 0 !== m ? v / m : 0)) + (((d = a + (l - a) * (n ? .5 * t : 0 !== g ? v / g : 0)) - u) * (3 * m / (m + g) + .5) / 4 || 0))) : h = a - ((u = a - (a - s) * t * .5) + (d = a + (l - a) * t * .5)) / 2, u += h, d += h, c.c = p = u, c.b = 0 !== o ? w : w = c.a + .6 * (c.c - c.a), c.da = a - s, c.ca = p - s, c.ba = w - s, i ? (f = S(s, w, p, a), e.splice(_, 1, f[0], f[1], f[2], f[3]), _ += 4) : _++, w = d;
            (c = e[_]).b = w, c.c = w + .4 * (c.d - w), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = w - c.a, i && (f = S(c.a, w, c.c, c.d), e.splice(_, 1, f[0], f[1], f[2], f[3]))
        }, w = function(e, t, i, n) {
            var r, o, s, a, l, c, u = [];
            if (n)
                for (o = (e = [n].concat(e)).length; - 1 < --o;) "string" == typeof(c = e[o][t]) && "=" === c.charAt(1) && (e[o][t] = n[t] + Number(c.charAt(0) + c.substr(2)));
            if ((r = e.length - 2) < 0) return u[0] = new y(e[0][t], 0, 0, e[r < -1 ? 0 : 1][t]), u;
            for (o = 0; o < r; o++) s = e[o][t], a = e[o + 1][t], u[o] = new y(s, 0, 0, a), i && (l = e[o + 2][t], b[o] = (b[o] || 0) + (a - s) * (a - s), x[o] = (x[o] || 0) + (l - a) * (l - a));
            return u[o] = new y(e[o][t], 0, 0, e[o + 1][t]), u
        }, p = function(e, t, i, n, r, o) {
            var s, a, l, c, u, d, h, p, f = {},
                m = [],
                g = o || e[0];
            for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) m.push(a);
            if (1 < e.length) {
                for (p = e[e.length - 1], h = !0, s = m.length; - 1 < --s;)
                    if (a = m[s], .05 < Math.abs(g[a] - p[a])) {
                        h = !1;
                        break
                    }
                h && (e = e.concat(), o && e.unshift(o), e.push(e[1]), o = e[e.length - 3])
            }
            for (b.length = x.length = k.length = 0, s = m.length; - 1 < --s;) a = m[s], v[a] = -1 !== r.indexOf("," + a + ","), f[a] = w(e, a, v[a], o);
            for (s = b.length; - 1 < --s;) b[s] = Math.sqrt(b[s]), x[s] = Math.sqrt(x[s]);
            if (!n) {
                for (s = m.length; - 1 < --s;)
                    if (v[a])
                        for (d = (l = f[m[s]]).length - 1, c = 0; c < d; c++) u = l[c + 1].da / x[c] + l[c].da / b[c] || 0, k[c] = (k[c] || 0) + u * u;
                for (s = k.length; - 1 < --s;) k[s] = Math.sqrt(k[s])
            }
            for (s = m.length, c = i ? 4 : 1; - 1 < --s;) l = f[a = m[s]], _(l, t, i, n, v[a]), h && (l.splice(0, c), l.splice(l.length - c, c));
            return f
        }, f = function(e, t, i) {
            for (var n, r, o, s, a, l, c, u, d, h, p, f = 1 / i, m = e.length; - 1 < --m;)
                for (o = (h = e[m]).a, s = h.d - o, a = h.c - o, l = h.b - o, n = r = 0, u = 1; u <= i; u++) n = r - (r = ((c = f * u) * c * s + 3 * (d = 1 - c) * (c * a + d * l)) * c), t[p = m * i + u - 1] = (t[p] || 0) + n * n
        }, g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.6",
            API: 2,
            global: !0,
            init: function(e, t, i) {
                this._target = e, t instanceof Array && (t = {
                    values: t
                }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var n, r, o, s, a, l = t.values || [],
                    c = {},
                    u = l[0],
                    d = t.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = d ? d instanceof Array ? d : [
                        ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                    ] : null, u) this._props.push(n);
                for (o = this._props.length; - 1 < --o;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof e[n], c[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), a || c[n] !== l[0][n] && (a = c);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? p(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : function(e, t, i) {
                        var n, r, o, s, a, l, c, u, d, h, p, f = {},
                            m = "cubic" === (t = t || "soft") ? 3 : 2,
                            g = "soft" === t,
                            v = [];
                        if (g && i && (e = [i].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
                        for (d in e[0]) v.push(d);
                        for (l = v.length; - 1 < --l;) {
                            for (f[d = v[l]] = a = [], h = 0, u = e.length, c = 0; c < u; c++) n = null == i ? e[c][d] : "string" == typeof(p = e[c][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && 1 < c && c < u - 1 && (a[h++] = (n + a[h - 2]) / 2), a[h++] = n;
                            for (u = h - m + 1, c = h = 0; c < u; c += m) n = a[c], r = a[c + 1], o = a[c + 2], s = 2 === m ? 0 : a[c + 3], a[h++] = p = 3 === m ? new y(n, r, o, s) : new y(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                            a.length = h
                        }
                        return f
                    }(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                    var h = function(e, t) {
                        var i, n, r, o, s = [],
                            a = [],
                            l = 0,
                            c = 0,
                            u = (t = t >> 0 || 6) - 1,
                            d = [],
                            h = [];
                        for (i in e) f(e[i], s, t);
                        for (r = s.length, n = 0; n < r; n++) l += Math.sqrt(s[n]), h[o = n % t] = l, o === u && (c += l, d[o = n / t >> 0] = h, a[o] = c, l = 0, h = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: d
                        }
                    }(this._beziers, this._timeRes);
                    this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate)
                    for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; - 1 < --o;) {
                        for (s = 0; s < 3; s++) n = d[o][s], this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = d[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(e) {
                var t, i, n, r, o, s, a, l, c, u, d = this._segCount,
                    h = this._func,
                    p = this._target,
                    f = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, e *= this._length, n = this._li, e > this._l2 && n < d - 1) {
                        for (l = d - 1; n < l && (this._l2 = c[++n]) <= e;);
                        this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && 0 < n) {
                        for (; 0 < n && (this._l1 = c[--n]) >= e;);
                        0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (t = n, e -= this._l1, n = this._si, e > this._s2 && n < u.length - 1) {
                        for (l = u.length - 1; n < l && (this._s2 = u[++n]) <= e;);
                        this._s1 = u[n - 1], this._si = n
                    } else if (e < this._s1 && 0 < n) {
                        for (; 0 < n && (this._s1 = u[--n]) >= e;);
                        0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                    }
                    s = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else s = (e - (t = e < 0 ? 0 : 1 <= e ? d - 1 : d * e >> 0) * (1 / d)) * d;
                for (i = 1 - s, n = this._props.length; - 1 < --n;) r = this._props[n], a = (s * s * (o = this._beziers[r][t]).da + 3 * i * (s * o.ca + i * o.ba)) * s + o.a, this._round[r] && (a = Math.round(a)), h[r] ? p[r](a) : p[r] = a;
                if (this._autoRotate) {
                    var m, g, v, y, _, w, b, x = this._autoRotate;
                    for (n = x.length; - 1 < --n;) r = x[n][2], w = x[n][3] || 0, b = !0 === x[n][4] ? 1 : T, o = this._beziers[x[n][0]], m = this._beziers[x[n][1]], o && m && (o = o[t], m = m[t], g = o.a + (o.b - o.a) * s, g += ((y = o.b + (o.c - o.b) * s) - g) * s, y += (o.c + (o.d - o.c) * s - y) * s, v = m.a + (m.b - m.a) * s, v += ((_ = m.b + (m.c - m.b) * s) - v) * s, _ += (m.c + (m.d - m.c) * s - _) * s, a = f ? Math.atan2(_ - v, y - g) * b + w : this._initialRotations[n], h[r] ? p[r](a) : p[r] = a)
                }
            }
        }), n = g.prototype, g.bezierThrough = p, g.cubicToQuadratic = S, g._autoCSS = !0, g.quadraticToCubic = function(e, t, i) {
            return new y(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
        }, g._cssRegister = function() {
            var e = i.CSSPlugin;
            if (e) {
                var t = e._internals,
                    p = t._parseToProxy,
                    f = t._setPluginRatio,
                    m = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function(e, t, i, n, r, o) {
                        t instanceof Array && (t = {
                            values: t
                        }), o = new g;
                        var s, a, l, c = t.values,
                            u = c.length - 1,
                            d = [],
                            h = {};
                        if (u < 0) return r;
                        for (s = 0; s <= u; s++) l = p(e, c[s], n, r, o, u !== s), d[s] = l.end;
                        for (a in t) h[a] = t[a];
                        return h.values = d, (r = new m(e, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = o, r.setRatio = f, 0 === h.autoRotate && (h.autoRotate = !0), !h.autoRotate || h.autoRotate instanceof Array || (s = !0 === h.autoRotate ? 0 : Number(h.autoRotate), h.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", s, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", s, !1]
                        ]), h.autoRotate && (n._transform || n._enableTransforms(!1), l.autoRotate = n._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0), o._onInitTween(l.proxy, h, n._tween), r
                    }
                })
            }
        }, n._roundProps = function(e, t) {
            for (var i = this._overwriteProps, n = i.length; - 1 < --n;)(e[i[n]] || e.bezier || e.bezierThrough) && (this._round[i[n]] = t)
        }, n._kill = function(e) {
            var t, i, n = this._props;
            for (t in this._beziers)
                if (t in e)
                    for (delete this._beziers[t], delete this._func[t], i = n.length; - 1 < --i;) n[i] === t && n.splice(i, 1);
            return this._super._kill.call(this, e)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(o, I) {
            var f, k, S, p, H = function() {
                    o.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = H.prototype.setRatio
                },
                c = _gsScope._gsDefine.globals,
                m = {},
                e = H.prototype = new o("css");
            (e.constructor = H).version = "1.18.5", H.API = 2, H.defaultTransformPerspective = 0, H.defaultSkewType = "compensated", H.defaultSmoothOrigin = !0, e = "px", H.suffixMap = {
                top: e,
                right: e,
                bottom: e,
                left: e,
                width: e,
                height: e,
                fontSize: e,
                padding: e,
                margin: e,
                perspective: e,
                lineHeight: ""
            };
            var P, g, v, L, y, C, t, i, A = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                E = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                O = /(?:\d|\-|\+|=|#|\.)*/g,
                D = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                s = /alpha\(opacity *=.+?\)/i,
                b = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                x = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                d = function(e, t) {
                    return t.toUpperCase()
                },
                T = /(?:Left|Right|Width)/i,
                h = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                $ = /,(?=[^\)]*(?:\(|$))/gi,
                M = /[\s,\(]/i,
                N = Math.PI / 180,
                q = 180 / Math.PI,
                j = {},
                z = document,
                n = function(e) {
                    return z.createElementNS ? z.createElementNS("http://www.w3.org/1999/xhtml", e) : z.createElement(e)
                },
                F = n("div"),
                B = n("img"),
                r = H._internals = {
                    _specialProps: m
                },
                X = navigator.userAgent,
                W = (t = X.indexOf("Android"), i = n("a"), v = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || 3 < Number(X.substr(t + 8, 1))), y = v && Number(X.substr(X.indexOf("Version/") + 8, 1)) < 6, L = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (C = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                Y = function(e) {
                    return D.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                U = function(e) {
                    window.console && console.log(e)
                },
                V = "",
                Q = "",
                G = function(e, t) {
                    var i, n, r = (t = t || F).style;
                    if (void 0 !== r[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === r[i[n] + e];);
                    return 0 <= n ? (V = "-" + (Q = 3 === n ? "ms" : i[n]).toLowerCase() + "-", Q + e) : null
                },
                Z = z.defaultView ? z.defaultView.getComputedStyle : function() {},
                K = H.getStyle = function(e, t, i, n, r) {
                    var o;
                    return W || "opacity" !== t ? (!n && e.style[t] ? o = e.style[t] : (i = i || Z(e)) ? o = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(a, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : Y(e)
                },
                J = r.convertToPixels = function(e, t, i, n, r) {
                    if ("px" === n || !n) return i;
                    if ("auto" === n || !i) return 0;
                    var o, s, a, l = T.test(t),
                        c = e,
                        u = F.style,
                        d = i < 0,
                        h = 1 === i;
                    if (d && (i = -i), h && (i *= 100), "%" === n && -1 !== t.indexOf("border")) o = i / 100 * (l ? e.clientWidth : e.clientHeight);
                    else {
                        if (u.cssText = "border:0 solid red;position:" + K(e, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) u[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                        else {
                            if (s = (c = e.parentNode || z.body)._gsCache, a = I.ticker.frame, s && l && s.time === a) return s.width * i / 100;
                            u[l ? "width" : "height"] = i + n
                        }
                        c.appendChild(F), o = parseFloat(F[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(F), l && "%" === n && !1 !== H.cacheWidths && ((s = c._gsCache = c._gsCache || {}).time = a, s.width = o / i * 100), 0 !== o || r || (o = J(e, t, i, n, !0))
                    }
                    return h && (o /= 100), d ? -o : o
                },
                ee = r.calculateOffset = function(e, t, i) {
                    if ("absolute" !== K(e, "position", i)) return 0;
                    var n = "left" === t ? "Left" : "Top",
                        r = K(e, "margin" + n, i);
                    return e["offset" + n] - (J(e, t, parseFloat(r), r.replace(O, "")) || 0)
                },
                te = function(e, t) {
                    var i, n, r, o = {};
                    if (t = t || Z(e, null))
                        if (i = t.length)
                            for (; - 1 < --i;)(-1 === (r = t[i]).indexOf("-transform") || Re === r) && (o[r.replace(l, d)] = t.getPropertyValue(r));
                        else
                            for (i in t)(-1 === i.indexOf("Transform") || De === i) && (o[i] = t[i]);
                    else if (t = e.currentStyle || e.style)
                        for (i in t) "string" == typeof i && void 0 === o[i] && (o[i.replace(l, d)] = t[i]);
                    return W || (o.opacity = Y(e)), n = Xe(e, t, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Me && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                },
                ie = function(e, t, i, n, r) {
                    var o, s, a, l = {},
                        c = e.style;
                    for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(u, "") ? o : 0 : ee(e, s), void 0 !== c[s] && (a = new ve(c, s, c[s], a)));
                    if (n)
                        for (s in n) "className" !== s && (l[s] = n[s]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                ne = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                re = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                oe = function(e, t, i) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (i || Z(e))[t] || 0;
                    if (e.getBBox && He(e)) return e.getBBox()[t] || 0;
                    var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        r = ne[t],
                        o = r.length;
                    for (i = i || Z(e, null); - 1 < --o;) n -= parseFloat(K(e, "padding" + r[o], i, !0)) || 0, n -= parseFloat(K(e, "border" + r[o] + "Width", i, !0)) || 0;
                    return n
                },
                se = function(e, t) {
                    if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                    (null == e || "" === e) && (e = "0 0");
                    var i, n = e.split(" "),
                        r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                        o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                    if (3 < n.length && !t) {
                        for (n = e.split(", ").join(",").split(","), e = [], i = 0; i < n.length; i++) e.push(se(n[i]));
                        return e.join(",")
                    }
                    return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + o + (2 < n.length ? " " + n[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== o.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === o.charAt(1), t.ox = parseFloat(r.replace(u, "")), t.oy = parseFloat(o.replace(u, "")), t.v = e), t || e
                },
                ae = function(e, t) {
                    return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                },
                le = function(e, t) {
                    return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                },
                ce = function(e, t, i, n) {
                    var r, o, s, a, l;
                    return null == e ? a = t : "number" == typeof e ? a = e : (r = 360, o = e.split("_"), s = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : q) - (l ? 0 : t), o.length && (n && (n[i] = t + s), -1 !== e.indexOf("short") && ((s %= r) !== s % 180 && (s = s < 0 ? s + r : s - r)), -1 !== e.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % r - (s / r | 0) * r : -1 !== e.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % r - (s / r | 0) * r)), a = t + s), a < 1e-6 && -1e-6 < a && (a = 0), a
                },
                ue = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                de = function(e, t, i) {
                    return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                },
                he = H.parseColor = function(e, t) {
                    var i, n, r, o, s, a, l, c, u, d, h;
                    if (e)
                        if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ue[e]) i = ue[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (n = e.charAt(1)) + n + (r = e.charAt(2)) + r + (o = e.charAt(3)) + o), i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                            else if ("hsl" === e.substr(0, 3))
                                if (i = h = e.match(A), t) {
                                    if (-1 !== e.indexOf("=")) return e.match(E)
                                } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(e[3])), i[0] = de(s + 1 / 3, n, r), i[1] = de(s, n, r), i[2] = de(s - 1 / 3, n, r);
                            else i = e.match(A) || ue.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        } else i = ue.black;
                    return t && !h && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, l = ((c = Math.max(n, r, o)) + (u = Math.min(n, r, o))) / 2, c === u ? s = a = 0 : (d = c - u, a = .5 < l ? d / (2 - c - u) : d / (c + u), s = c === n ? (r - o) / d + (r < o ? 6 : 0) : c === r ? (o - n) / d + 2 : (n - r) / d + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                pe = function(e, t) {
                    var i, n, r, o = e.match(fe) || [],
                        s = 0,
                        a = o.length ? "" : e;
                    for (i = 0; i < o.length; i++) n = o[i], s += (r = e.substr(s, e.indexOf(n, s) - s)).length + n.length, 3 === (n = he(n, t)).length && n.push(1), a += r + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return a + e.substr(s)
                },
                fe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in ue) fe += "|" + e + "\\b";
            fe = new RegExp(fe + ")", "gi"), H.colorStringFilter = function(e) {
                var t, i = e[0] + e[1];
                fe.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = pe(e[0], t), e[1] = pe(e[1], t)), fe.lastIndex = 0
            }, I.defaultStringFilter || (I.defaultStringFilter = H.colorStringFilter);
            var me = function(e, t, o, s) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var a, l = t ? (e.match(fe) || [""])[0] : "",
                        c = e.split(l).join("").match(_) || [],
                        u = e.substr(0, e.indexOf(c[0])),
                        d = ")" === e.charAt(e.length - 1) ? ")" : "",
                        h = -1 !== e.indexOf(" ") ? " " : ",",
                        p = c.length,
                        f = 0 < p ? c[0].replace(A, "") : "";
                    return p ? a = t ? function(e) {
                        var t, i, n, r;
                        if ("number" == typeof e) e += f;
                        else if (s && $.test(e)) {
                            for (r = e.replace($, "|").split("|"), n = 0; n < r.length; n++) r[n] = a(r[n]);
                            return r.join(",")
                        }
                        if (t = (e.match(fe) || [l])[0], n = (i = e.split(t).join("").match(_) || []).length, p > n--)
                            for (; ++n < p;) i[n] = o ? i[(n - 1) / 2 | 0] : c[n];
                        return u + i.join(h) + h + t + d + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, i, n;
                        if ("number" == typeof e) e += f;
                        else if (s && $.test(e)) {
                            for (i = e.replace($, "|").split("|"), n = 0; n < i.length; n++) i[n] = a(i[n]);
                            return i.join(",")
                        }
                        if (n = (t = e.match(_) || []).length, p > n--)
                            for (; ++n < p;) t[n] = o ? t[(n - 1) / 2 | 0] : c[n];
                        return u + t.join(h) + d
                    } : function(e) {
                        return e
                    }
                },
                ge = function(c) {
                    return c = c.split(","),
                        function(e, t, i, n, r, o, s) {
                            var a, l = (t + "").split(" ");
                            for (s = {}, a = 0; a < 4; a++) s[c[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                            return n.parse(e, s, r, o)
                        }
                },
                ve = (r._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) t = a[l.v], l.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), l.t[l.p] = t, l = l._next;
                    if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === e || 0 === e)
                        for (l = s.firstMPT, o = 1 === e ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i[o] = r
                                }
                            } else i[o] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(e, t, i, n, r) {
                    this.t = e, this.p = t, this.v = i, this.r = r, n && ((n._prev = this)._next = n)
                }),
                ye = (r._parseToProxy = function(e, t, i, n, r, o) {
                    var s, a, l, c, u, d = n,
                        h = {},
                        p = {},
                        f = i._transform,
                        m = j;
                    for (i._transform = null, j = t, n = u = i.parse(e, t, n, r), j = m, o && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                        if (n.type <= 1 && (p[a = n.p] = n.s + n.c, h[a] = n.s, o || (c = new ve(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                            for (s = n.l; 0 < --s;) l = "xn" + s, p[a = n.p + "_" + l] = n.data[l], h[a] = n[l], o || (c = new ve(n, l, a, c, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: h,
                        end: p,
                        firstMPT: c,
                        pt: u
                    }
                }, r.CSSPropTween = function(e, t, i, n, r, o, s, a, l, c, u) {
                    this.t = e, this.p = t, this.s = i, this.c = n, this.n = s || t, e instanceof ye || p.push(this.n), this.r = a, this.type = o || 0, l && (this.pr = l, f = !0), this.b = void 0 === c ? i : c, this.e = void 0 === u ? i + n : u, r && ((this._next = r)._prev = this)
                }),
                _e = function(e, t, i, n, r, o) {
                    var s = new ye(e, t, i, n - i, r, -1, o);
                    return s.b = i, s.e = s.xs0 = n, s
                },
                we = H.parseComplex = function(e, t, i, n, r, o, s, a, l, c) {
                    s = new ye(e, t, 0, 0, s, c ? 2 : 1, null, !1, a, i = i || o || "", n), n += "", r && fe.test(n + i) && (n = [i, n], H.colorStringFilter(n), i = n[0], n = n[1]);
                    var u, d, h, p, f, m, g, v, y, _, w, b, x, T = i.split(", ").join(",").split(" "),
                        k = n.split(", ").join(",").split(" "),
                        S = T.length,
                        C = !1 !== P;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (T = T.join(" ").replace($, ", ").split(" "), k = k.join(" ").replace($, ", ").split(" "), S = T.length), S !== k.length && (S = (T = (o || "").split(" ")).length), s.plugin = l, s.setRatio = c, u = fe.lastIndex = 0; u < S; u++)
                        if (p = T[u], f = k[u], (v = parseFloat(p)) || 0 === v) s.appendXtra("", v, ae(f, v), f.replace(E, ""), C && -1 !== f.indexOf("px"), !0);
                        else if (r && fe.test(p)) b = ")" + ((b = f.indexOf(")") + 1) ? f.substr(b) : ""), x = -1 !== f.indexOf("hsl") && W, p = he(p, x), f = he(f, x), (y = 6 < p.length + f.length) && !W && 0 === f[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(k[u]).join("transparent")) : (W || (y = !1), x ? s.appendXtra(y ? "hsla(" : "hsl(", p[0], ae(f[0], p[0]), ",", !1, !0).appendXtra("", p[1], ae(f[1], p[1]), "%,", !1).appendXtra("", p[2], ae(f[2], p[2]), y ? "%," : "%" + b, !1) : s.appendXtra(y ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], y ? "," : b, !0), y && (p = p.length < 4 ? 1 : p[3], s.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, b, !1))), fe.lastIndex = 0;
                    else if (m = p.match(A)) {
                        if (!(g = f.match(E)) || g.length !== m.length) return s;
                        for (d = h = 0; d < m.length; d++) w = m[d], _ = p.indexOf(w, h), s.appendXtra(p.substr(h, _ - h), Number(w), ae(g[d], w), "", C && "px" === p.substr(_ + w.length, 2), 0 === d), h = _ + w.length;
                        s["xs" + s.l] += p.substr(h)
                    } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + f : f;
                    if (-1 !== n.indexOf("=") && s.data) {
                        for (b = s.xs0 + s.data.s, u = 1; u < s.l; u++) b += s["xs" + u] + s.data["xn" + u];
                        s.e = b + s["xs" + u]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                be = 9;
            for ((e = ye.prototype).l = e.pr = 0; 0 < --be;) e["xn" + be] = 0, e["xs" + be] = "";
            e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function(e, t, i, n, r, o) {
                var s = this,
                    a = s.l;
                return s["xs" + a] += o && (a || s["xs" + a]) ? " " + e : e || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", 0 < a ? (s.data["xn" + a] = t + i, s.rxp["xn" + a] = r, s["xn" + a] = t, s.plugin || (s.xfirst = new ye(s, "xn" + a, t, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0)) : (s.data = {
                    s: t + i
                }, s.rxp = {}, s.s = t, s.c = i, s.r = r)) : s["xs" + a] += t + (n || ""), s
            };
            var xe = function(e, t) {
                    t = t || {}, this.p = t.prefix && G(e) || e, m[e] = m[this.p] = this, this.format = t.formatter || me(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                Te = r._registerComplexSpecialProp = function(e, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var n, r = e.split(","),
                        o = t.defaultValue;
                    for (i = i || [o], n = 0; n < r.length; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || o, new xe(r[n], t)
                },
                ke = function(e) {
                    if (!m[e]) {
                        var l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        Te(e, {
                            parser: function(e, t, i, n, r, o, s) {
                                var a = c.com.greensock.plugins[l];
                                return a ? (a._cssRegister(), m[i].parse(e, t, i, n, r, o, s)) : (U("Error: " + l + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (e = xe.prototype).parseComplex = function(e, t, i, n, r, o) {
                var s, a, l, c, u, d, h = this.keyword;
                if (this.multi && ($.test(i) || $.test(t) ? (a = t.replace($, "|").split("|"), l = i.replace($, "|").split("|")) : h && (a = [t], l = [i])), l) {
                    for (c = l.length > a.length ? l.length : a.length, s = 0; s < c; s++) t = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, h && ((u = t.indexOf(h)) !== (d = i.indexOf(h)) && (-1 === d ? a[s] = a[s].split(h).join("") : -1 === u && (a[s] += " " + h)));
                    t = a.join(", "), i = l.join(", ")
                }
                return we(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, o)
            }, e.parse = function(e, t, i, n, r, o, s) {
                return this.parseComplex(e.style, this.format(K(e, this.p, S, !1, this.dflt)), this.format(t), r, o)
            }, H.registerSpecialProp = function(e, l, c) {
                Te(e, {
                    parser: function(e, t, i, n, r, o, s) {
                        var a = new ye(e, i, 0, 0, r, 2, i, !1, c);
                        return a.plugin = o, a.setRatio = l(e, t, n._tween, i), a
                    },
                    priority: c
                })
            }, H.useSVGTransformAttr = v || L;
            var Se, Ce, Pe, Ae, Ee, Oe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                De = G("transform"),
                Re = V + "transform",
                $e = G("transformOrigin"),
                Me = null !== G("perspective"),
                Le = r.Transform = function() {
                    this.perspective = parseFloat(H.defaultTransformPerspective) || 0, this.force3D = !(!1 === H.defaultForce3D || !Me) && (H.defaultForce3D || "auto")
                },
                Ne = window.SVGElement,
                je = function(e, t, i) {
                    var n, r = z.createElementNS("http://www.w3.org/2000/svg", e),
                        o = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                    return t.appendChild(r), r
                },
                ze = z.documentElement,
                Fe = (Ee = C || /Android/i.test(X) && !window.chrome, z.createElementNS && !Ee && (Ce = je("svg", ze), Ae = (Pe = je("rect", Ce, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Pe.style[$e] = "50% 50%", Pe.style[De] = "scaleX(0.5)", Ee = Ae === Pe.getBoundingClientRect().width && !(L && Me), ze.removeChild(Ce)), Ee),
                Ie = function(e, t, i, n, r, o) {
                    var s, a, l, c, u, d, h, p, f, m, g, v, y, _, w = e._gsTransform,
                        b = Be(e, !0);
                    w && (y = w.xOrigin, _ = w.yOrigin), (!n || (s = n.split(" ")).length < 2) && (h = e.getBBox(), s = [(-1 !== (t = se(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * h.width : parseFloat(t[0])) + h.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * h.height : parseFloat(t[1])) + h.y]), i.xOrigin = c = parseFloat(s[0]), i.yOrigin = u = parseFloat(s[1]), n && b !== qe && (d = b[0], h = b[1], p = b[2], f = b[3], m = b[4], a = c * (f / (v = d * f - h * p)) + u * (-p / v) + (p * (g = b[5]) - f * m) / v, l = c * (-h / v) + u * (d / v) - (d * g - h * m) / v, c = i.xOrigin = s[0] = a, u = i.yOrigin = s[1] = l), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), r || !1 !== r && !1 !== H.defaultSmoothOrigin ? (a = c - y, l = u - _, w.xOffset += a * b[0] + l * b[2] - a, w.yOffset += a * b[1] + l * b[3] - l) : w.xOffset = w.yOffset = 0), o || e.setAttribute("data-svg-origin", s.join(" "))
                },
                He = function(e) {
                    return !!(Ne && e.getBBox && e.getCTM && function(e) {
                        try {
                            return e.getBBox()
                        } catch (e) {}
                    }(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                qe = [1, 0, 0, 1, 0, 0],
                Be = function(e, t) {
                    var i, n, r, o, s, a, l = e._gsTransform || new Le,
                        c = e.style;
                    if (De ? n = K(e, Re, null, !0) : e.currentStyle && (n = (n = e.currentStyle.filter.match(h)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) && De && ((a = "none" === Z(e).display) || !e.parentNode) && (a && (o = c.display, c.display = "block"), e.parentNode || (s = 1, ze.appendChild(e)), i = !(n = K(e, Re, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && Ve(c, "display"), s && ze.removeChild(e)), (l.svg || e.getBBox && He(e)) && (i && -1 !== (c[De] + "").indexOf("matrix") && (n = c[De], i = 0), r = e.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return qe;
                    for (r = (n || "").match(A) || [], be = r.length; - 1 < --be;) o = Number(r[be]), r[be] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                    return t && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Xe = r.getTransform = function(e, t, i, n) {
                    if (e._gsTransform && i && !n) return e._gsTransform;
                    var r, o, s, a, l, c, u = i && e._gsTransform || new Le,
                        d = u.scaleX < 0,
                        h = Me && (parseFloat(K(e, $e, t, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                        p = parseFloat(H.defaultTransformPerspective) || 0;
                    if (u.svg = !(!e.getBBox || !He(e)), u.svg && (Ie(e, K(e, $e, t, !1, "50% 50%") + "", u, e.getAttribute("data-svg-origin")), Se = H.useSVGTransformAttr || Fe), (r = Be(e)) !== qe) {
                        if (16 === r.length) {
                            var f, m, g, v, y, _ = r[0],
                                w = r[1],
                                b = r[2],
                                x = r[3],
                                T = r[4],
                                k = r[5],
                                S = r[6],
                                C = r[7],
                                P = r[8],
                                A = r[9],
                                E = r[10],
                                O = r[12],
                                D = r[13],
                                R = r[14],
                                $ = r[11],
                                M = Math.atan2(S, E);
                            u.zOrigin && (O = P * (R = -u.zOrigin) - r[12], D = A * R - r[13], R = E * R + u.zOrigin - r[14]), u.rotationX = M * q, M && (f = T * (v = Math.cos(-M)) + P * (y = Math.sin(-M)), m = k * v + A * y, g = S * v + E * y, P = T * -y + P * v, A = k * -y + A * v, E = S * -y + E * v, $ = C * -y + $ * v, T = f, k = m, S = g), M = Math.atan2(-b, E), u.rotationY = M * q, M && (m = w * (v = Math.cos(-M)) - A * (y = Math.sin(-M)), g = b * v - E * y, A = w * y + A * v, E = b * y + E * v, $ = x * y + $ * v, _ = f = _ * v - P * y, w = m, b = g), M = Math.atan2(w, _), u.rotation = M * q, M && (_ = _ * (v = Math.cos(-M)) + T * (y = Math.sin(-M)), m = w * v + k * y, k = w * -y + k * v, S = b * -y + S * v, w = m), u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), u.scaleX = (1e5 * Math.sqrt(_ * _ + w * w) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(k * k + A * A) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(S * S + E * E) + .5 | 0) / 1e5, u.rotationX || u.rotationY ? u.skewX = 0 : (u.skewX = T || k ? Math.atan2(T, k) * q + u.rotation : u.skewX || 0, 90 < Math.abs(u.skewX) && Math.abs(u.skewX) < 270 && (d ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180))), u.perspective = $ ? 1 / ($ < 0 ? -$ : $) : 0, u.x = O, u.y = D, u.z = R, u.svg && (u.x -= u.xOrigin - (u.xOrigin * _ - u.yOrigin * T), u.y -= u.yOrigin - (u.yOrigin * w - u.xOrigin * k))
                        } else if (!Me || n || !r.length || u.x !== r[4] || u.y !== r[5] || !u.rotationX && !u.rotationY) {
                            var L = 6 <= r.length,
                                N = L ? r[0] : 1,
                                j = r[1] || 0,
                                z = r[2] || 0,
                                F = L ? r[3] : 1;
                            u.x = r[4] || 0, u.y = r[5] || 0, s = Math.sqrt(N * N + j * j), a = Math.sqrt(F * F + z * z), l = N || j ? Math.atan2(j, N) * q : u.rotation || 0, c = z || F ? Math.atan2(z, F) * q + l : u.skewX || 0, 90 < Math.abs(c) && Math.abs(c) < 270 && (d ? (s *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), u.scaleX = s, u.scaleY = a, u.rotation = l, u.skewX = c, Me && (u.rotationX = u.rotationY = u.z = 0, u.perspective = p, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * N + u.yOrigin * z), u.y -= u.yOrigin - (u.xOrigin * j + u.yOrigin * F))
                        }
                        for (o in u.zOrigin = h, u) u[o] < 2e-5 && -2e-5 < u[o] && (u[o] = 0)
                    }
                    return i && ((e._gsTransform = u).svg && (Se && e.style[De] ? I.delayedCall(.001, function() {
                        Ve(e.style, De)
                    }) : !Se && e.getAttribute("transform") && I.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), u
                },
                We = function(e) {
                    var t, i, n = this.data,
                        r = -n.rotation * N,
                        o = r + n.skewX * N,
                        s = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                        a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                        l = (Math.sin(o) * -n.scaleY * 1e5 | 0) / 1e5,
                        c = (Math.cos(o) * n.scaleY * 1e5 | 0) / 1e5,
                        u = this.t.style,
                        d = this.t.currentStyle;
                    if (d) {
                        i = a, a = -l, l = -i, t = d.filter, u.filter = "";
                        var h, p, f = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            g = "absolute" !== d.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + l + ", M22=" + c,
                            y = n.x + f * n.xPercent / 100,
                            _ = n.y + m * n.yPercent / 100;
                        if (null != n.ox && (y += (h = (n.oxp ? f * n.ox * .01 : n.ox) - f / 2) - (h * s + (p = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2) * a), _ += p - (h * l + p * c)), g ? v += ", Dx=" + ((h = f / 2) - (h * s + (p = m / 2) * a) + y) + ", Dy=" + (p - (h * l + p * c) + _) + ")" : v += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = t.replace(R, v) : u.filter = v + " " + t, (0 === e || 1 === e) && 1 === s && 0 === a && 0 === l && 1 === c && (g && -1 === v.indexOf("Dx=0, Dy=0") || D.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
                            var w, b, x, T = C < 8 ? 1 : -1;
                            for (h = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((f - ((s < 0 ? -s : s) * f + (a < 0 ? -a : a) * m)) / 2 + y), n.ieOffsetY = Math.round((m - ((c < 0 ? -c : c) * m + (l < 0 ? -l : l) * f)) / 2 + _), be = 0; be < 4; be++) x = (i = -1 !== (w = d[b = re[be]]).indexOf("px") ? parseFloat(w) : J(this.t, b, parseFloat(w), w.replace(O, "")) || 0) !== n[b] ? be < 2 ? -n.ieOffsetX : -n.ieOffsetY : be < 2 ? h - n.ieOffsetX : p - n.ieOffsetY, u[b] = (n[b] = Math.round(i - x * (0 === be || 2 === be ? 1 : T))) + "px"
                        }
                    }
                },
                Ye = r.set3DTransformRatio = r.setTransformRatio = function(e) {
                    var t, i, n, r, o, s, a, l, c, u, d, h, p, f, m, g, v, y, _, w, b = this.data,
                        x = this.t.style,
                        T = b.rotation,
                        k = b.rotationX,
                        S = b.rotationY,
                        C = b.scaleX,
                        P = b.scaleY,
                        A = b.scaleZ,
                        E = b.x,
                        O = b.y,
                        D = b.z,
                        R = b.svg,
                        $ = b.perspective,
                        M = b.force3D;
                    if (!((1 !== e && 0 !== e || "auto" !== M || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && M || D || $ || S || k || 1 !== A) || Se && R || !Me) T || b.skewX || R ? (T *= N, w = b.skewX * N, 1e5, t = Math.cos(T) * C, r = Math.sin(T) * C, i = Math.sin(T - w) * -P, o = Math.cos(T - w) * P, w && "simple" === b.skewType && (v = Math.tan(w), i *= v = Math.sqrt(1 + v * v), o *= v, b.skewY && (t *= v, r *= v)), R && (E += b.xOrigin - (b.xOrigin * t + b.yOrigin * i) + b.xOffset, O += b.yOrigin - (b.xOrigin * r + b.yOrigin * o) + b.yOffset, Se && (b.xPercent || b.yPercent) && (f = this.t.getBBox(), E += .01 * b.xPercent * f.width, O += .01 * b.yPercent * f.height), E < (f = 1e-6) && -f < E && (E = 0), O < f && -f < O && (O = 0)), _ = (1e5 * t | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * i | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + E + "," + O + ")", R && Se ? this.t.setAttribute("transform", "matrix(" + _) : x[De] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + _) : x[De] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + P + "," + E + "," + O + ")";
                    else {
                        if (L && (C < (f = 1e-4) && -f < C && (C = A = 2e-5), P < f && -f < P && (P = A = 2e-5), !$ || b.z || b.rotationX || b.rotationY || ($ = 0)), T || b.skewX) T *= N, m = t = Math.cos(T), g = r = Math.sin(T), b.skewX && (T -= b.skewX * N, m = Math.cos(T), g = Math.sin(T), "simple" === b.skewType && (v = Math.tan(b.skewX * N), m *= v = Math.sqrt(1 + v * v), g *= v, b.skewY && (t *= v, r *= v))), i = -g, o = m;
                        else {
                            if (!(S || k || 1 !== A || $ || R)) return void(x[De] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + O + "px," + D + "px)" + (1 !== C || 1 !== P ? " scale(" + C + "," + P + ")" : ""));
                            t = o = 1, i = r = 0
                        }
                        c = 1, n = s = a = l = u = d = 0, h = $ ? -1 / $ : 0, p = b.zOrigin, f = 1e-6, ",", "0", (T = S * N) && (m = Math.cos(T), u = h * (a = -(g = Math.sin(T))), n = t * g, s = r * g, h *= c = m, t *= m, r *= m), (T = k * N) && (v = i * (m = Math.cos(T)) + n * (g = Math.sin(T)), y = o * m + s * g, l = c * g, d = h * g, n = i * -g + n * m, s = o * -g + s * m, c *= m, h *= m, i = v, o = y), 1 !== A && (n *= A, s *= A, c *= A, h *= A), 1 !== P && (i *= P, o *= P, l *= P, d *= P), 1 !== C && (t *= C, r *= C, a *= C, u *= C), (p || R) && (p && (E += n * -p, O += s * -p, D += c * -p + p), R && (E += b.xOrigin - (b.xOrigin * t + b.yOrigin * i) + b.xOffset, O += b.yOrigin - (b.xOrigin * r + b.yOrigin * o) + b.yOffset), E < f && -f < E && (E = "0"), O < f && -f < O && (O = "0"), D < f && -f < D && (D = 0)), _ = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", _ += (t < f && -f < t ? "0" : t) + "," + (r < f && -f < r ? "0" : r) + "," + (a < f && -f < a ? "0" : a), _ += "," + (u < f && -f < u ? "0" : u) + "," + (i < f && -f < i ? "0" : i) + "," + (o < f && -f < o ? "0" : o), k || S || 1 !== A ? (_ += "," + (l < f && -f < l ? "0" : l) + "," + (d < f && -f < d ? "0" : d) + "," + (n < f && -f < n ? "0" : n), _ += "," + (s < f && -f < s ? "0" : s) + "," + (c < f && -f < c ? "0" : c) + "," + (h < f && -f < h ? "0" : h) + ",") : _ += ",0,0,0,0,1,0,", _ += E + "," + O + "," + D + "," + ($ ? 1 + -D / $ : 1) + ")", x[De] = _
                    }
                };
            (e = Le.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, i, n, r, o, s) {
                    if (n._lastParsedTransform === s) return r;
                    n._lastParsedTransform = s;
                    var a, l, c, u, d, h, p, f, m, g = e._gsTransform,
                        v = e.style,
                        y = Oe.length,
                        _ = s,
                        w = {},
                        b = "transformOrigin",
                        x = Xe(e, S, !0, s.parseTransform);
                    if (n._transform = x, "string" == typeof _.transform && De)(l = F.style)[De] = _.transform, l.display = "block", l.position = "absolute", z.body.appendChild(F), a = Xe(F, null, !1), x.svg && (p = x.xOrigin, f = x.yOrigin, a.x -= x.xOffset, a.y -= x.yOffset, (_.transformOrigin || _.svgOrigin) && (c = {}, Ie(e, se(_.transformOrigin), c, _.svgOrigin, _.smoothOrigin, !0), p = c.xOrigin, f = c.yOrigin, a.x -= c.xOffset - x.xOffset, a.y -= c.yOffset - x.yOffset), (p || f) && (m = Be(F, !0), a.x -= p - (p * m[0] + f * m[2]), a.y -= f - (p * m[1] + f * m[3]))), z.body.removeChild(F), a.perspective || (a.perspective = x.perspective), null != _.xPercent && (a.xPercent = le(_.xPercent, x.xPercent)), null != _.yPercent && (a.yPercent = le(_.yPercent, x.yPercent));
                    else if ("object" == typeof _) {
                        if (a = {
                                scaleX: le(null != _.scaleX ? _.scaleX : _.scale, x.scaleX),
                                scaleY: le(null != _.scaleY ? _.scaleY : _.scale, x.scaleY),
                                scaleZ: le(_.scaleZ, x.scaleZ),
                                x: le(_.x, x.x),
                                y: le(_.y, x.y),
                                z: le(_.z, x.z),
                                xPercent: le(_.xPercent, x.xPercent),
                                yPercent: le(_.yPercent, x.yPercent),
                                perspective: le(_.transformPerspective, x.perspective)
                            }, null != (h = _.directionalRotation))
                            if ("object" == typeof h)
                                for (l in h) _[l] = h[l];
                            else _.rotation = h;
                            "string" == typeof _.x && -1 !== _.x.indexOf("%") && (a.x = 0, a.xPercent = le(_.x, x.xPercent)), "string" == typeof _.y && -1 !== _.y.indexOf("%") && (a.y = 0, a.yPercent = le(_.y, x.yPercent)), a.rotation = ce("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : x.rotation - x.skewY, x.rotation - x.skewY, "rotation", w), Me && (a.rotationX = ce("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : x.rotationX || 0, x.rotationX, "rotationX", w), a.rotationY = ce("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : x.rotationY || 0, x.rotationY, "rotationY", w)), a.skewX = ce(_.skewX, x.skewX - x.skewY), (a.skewY = ce(_.skewY, x.skewY)) && (a.skewX += a.skewY, a.rotation += a.skewY)
                    }
                    for (Me && null != _.force3D && (x.force3D = _.force3D, d = !0), x.skewType = _.skewType || x.skewType || H.defaultSkewType, (u = x.force3D || x.z || x.rotationX || x.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == _.scale || (a.scaleZ = 1); - 1 < --y;)(1e-6 < (c = a[i = Oe[y]] - x[i]) || c < -1e-6 || null != _[i] || null != j[i]) && (d = !0, r = new ye(x, i, x[i], c, r), i in w && (r.e = w[i]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                    return c = _.transformOrigin, x.svg && (c || _.svgOrigin) && (p = x.xOffset, f = x.yOffset, Ie(e, se(c), a, _.svgOrigin, _.smoothOrigin), r = _e(x, "xOrigin", (g ? x : a).xOrigin, a.xOrigin, r, b), r = _e(x, "yOrigin", (g ? x : a).yOrigin, a.yOrigin, r, b), (p !== x.xOffset || f !== x.yOffset) && (r = _e(x, "xOffset", g ? p : x.xOffset, x.xOffset, r, b), r = _e(x, "yOffset", g ? f : x.yOffset, x.yOffset, r, b)), c = Se ? null : "0px 0px"), (c || Me && u && x.zOrigin) && (De ? (d = !0, i = $e, c = (c || K(e, i, S, !1, "50% 50%")) + "", (r = new ye(v, i, 0, 0, r, -1, b)).b = v[i], r.plugin = o, Me ? (l = x.zOrigin, c = c.split(" "), x.zOrigin = (2 < c.length && (0 === l || "0px" !== c[2]) ? parseFloat(c[2]) : l) || 0, r.xs0 = r.e = c[0] + " " + (c[1] || "50%") + " 0px", (r = new ye(x, "zOrigin", 0, 0, r, -1, r.n)).b = l, r.xs0 = r.e = x.zOrigin) : r.xs0 = r.e = c) : se(c + "", x)), d && (n._transformType = x.svg && Se || !u && 3 !== this._transformType ? 2 : 3), r
                },
                prefix: !0
            }), Te("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Te("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, n, r, o) {
                    t = this.format(t);
                    var s, a, l, c, u, d, h, p, f, m, g, v, y, _, w, b, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = e.style;
                    for (f = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), s = t.split(" "), a = 0; a < x.length; a++) this.p.indexOf("border") && (x[a] = G(x[a])), -1 !== (u = c = K(e, x[a], S, !1, "0px")).indexOf(" ") && (u = (c = u.split(" "))[0], c = c[1]), d = l = s[a], h = parseFloat(u), v = u.substr((h + "").length), (y = "=" === d.charAt(1)) ? (p = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), p *= parseFloat(d), g = d.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(d), g = d.substr((p + "").length)), "" === g && (g = k[i] || v), g !== v && (_ = J(e, "borderLeft", h, v), w = J(e, "borderTop", h, v), "%" === g ? (u = _ / f * 100 + "%", c = w / m * 100 + "%") : "em" === g ? (u = _ / (b = J(e, "borderLeft", 1, "em")) + "em", c = w / b + "em") : (u = _ + "px", c = w + "px"), y && (d = parseFloat(u) + p + g, l = parseFloat(c) + p + g)), r = we(T, x[a], u + " " + c, d + " " + l, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: me("0px 0px 0px 0px", !1, !0)
            }), Te("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, n, r, o) {
                    return we(e.style, i, this.format(K(e, i, S, !1, "0px 0px")), this.format(t), !1, "0px", r)
                },
                prefix: !0,
                formatter: me("0px 0px", !1, !0)
            }), Te("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, i, n, r, o) {
                    var s, a, l, c, u, d, h = "background-position",
                        p = S || Z(e, null),
                        f = this.format((p ? C ? p.getPropertyValue(h + "-x") + " " + p.getPropertyValue(h + "-y") : p.getPropertyValue(h) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(t);
                    if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((d = K(e, "backgroundImage").replace(x, "")) && "none" !== d)) {
                        for (s = f.split(" "), a = m.split(" "), B.setAttribute("src", d), l = 2; - 1 < --l;)(c = -1 !== (f = s[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (u = 0 === l ? e.offsetWidth - B.width : e.offsetHeight - B.height, s[l] = c ? parseFloat(f) / 100 * u + "px" : parseFloat(f) / u * 100 + "%");
                        f = s.join(" ")
                    }
                    return this.parseComplex(e.style, f, m, r, o)
                },
                formatter: se
            }), Te("backgroundSize", {
                defaultValue: "0 0",
                formatter: se
            }), Te("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Te("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Te("transformStyle", {
                prefix: !0
            }), Te("backfaceVisibility", {
                prefix: !0
            }), Te("userSelect", {
                prefix: !0
            }), Te("margin", {
                parser: ge("marginTop,marginRight,marginBottom,marginLeft")
            }), Te("padding", {
                parser: ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Te("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, i, n, r, o) {
                    var s, a, l;
                    return C < 9 ? (a = e.currentStyle, l = C < 8 ? " " : ",", s = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", t = this.format(t).split(",").join(l)) : (s = this.format(K(e, this.p, S, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, s, t, r, o)
                }
            }), Te("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Te("autoRound,strictUnits", {
                parser: function(e, t, i, n, r) {
                    return r
                }
            }), Te("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, i, n, r, o) {
                    var s = K(e, "borderTopWidth", S, !1, "0px"),
                        a = this.format(t).split(" "),
                        l = a[0].replace(O, "");
                    return "px" !== l && (s = parseFloat(s) / J(e, "borderTopWidth", 1, l) + l), this.parseComplex(e.style, this.format(s + " " + K(e, "borderTopStyle", S, !1, "solid") + " " + K(e, "borderTopColor", S, !1, "#000")), a.join(" "), r, o)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(fe) || ["#000"])[0]
                }
            }), Te("borderWidth", {
                parser: ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Te("float,cssFloat,styleFloat", {
                parser: function(e, t, i, n, r, o) {
                    var s = e.style,
                        a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new ye(s, a, 0, 0, r, -1, i, !1, 0, s[a], t)
                }
            });
            var Ue = function(e) {
                var t, i = this.t,
                    n = i.filter || K(this.data, "filter") || "",
                    r = this.s + this.c * e | 0;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !K(this.data, "filter")) : (i.filter = n.replace(s, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(D, "opacity=" + r))
            };
            Te("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, i, n, r, o) {
                    var s = parseFloat(K(e, "opacity", S, !1, "1")),
                        a = e.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), l && 1 === s && "hidden" === K(e, "visibility", S) && 0 !== t && (s = 0), W ? r = new ye(a, "opacity", s, t - s, r) : ((r = new ye(a, "opacity", 100 * s, 100 * (t - s), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = e, r.plugin = o, r.setRatio = Ue), l && ((r = new ye(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                }
            });
            var Ve = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(a, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Qe = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ve(i, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Te("className", {
                parser: function(e, t, i, n, r, o, s) {
                    var a, l, c, u, d, h = e.getAttribute("class") || "",
                        p = e.style.cssText;
                    if ((r = n._classNamePT = new ye(e, i, 0, 0, r, 2)).setRatio = Qe, r.pr = -11, f = !0, r.b = h, l = te(e, S), c = e._gsClassPT) {
                        for (u = {}, d = c.data; d;) u[d.p] = 1, d = d._next;
                        c.setRatio(1)
                    }
                    return (e._gsClassPT = r).e = "=" !== t.charAt(1) ? t : h.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", r.e), a = ie(e, l, te(e), s, u), e.setAttribute("class", h), r.data = a.firstMPT, e.style.cssText = p, r.xfirst = n.parse(e, a.difs, r, o)
                }
            });
            var Ge = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, i, n, r, o, s = this.t.style,
                        a = m.transform.parse;
                    if ("all" === this.e) r = !(s.cssText = "");
                    else
                        for (n = (t = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = t[n], m[i] && (m[i].parse === a ? r = !0 : i = "transformOrigin" === i ? $e : m[i].p), Ve(s, i);
                    r && (Ve(s, De), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Te("clearProps", {
                    parser: function(e, t, i, n, r) {
                        return (r = new ye(e, i, 0, 0, r, 2)).setRatio = Ge, r.e = t, r.pr = -10, r.data = n._tween, f = !0, r
                    }
                }), e = "bezier,throwProps,physicsProps,physics2D".split(","), be = e.length; be--;) ke(e[be]);
            (e = H.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function(e, t, i) {
                if (!e.nodeType) return !1;
                this._target = e, this._tween = i, this._vars = t, P = t.autoRound, f = !1, k = t.suffixMap || H.suffixMap, S = Z(e, ""), p = this._overwriteProps;
                var n, r, o, s, a, l, c, u, d, h = e.style;
                if (g && "" === h.zIndex && (("auto" === (n = K(e, "zIndex", S)) || "" === n) && this._addLazySet(h, "zIndex", 0)), "string" == typeof t && (s = h.cssText, n = te(e, S), h.cssText = s + ";" + t, n = ie(e, n, te(e)).difs, !W && w.test(t) && (n.opacity = parseFloat(RegExp.$1)), t = n, h.cssText = s), t.className ? this._firstPT = r = m.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = r = this.parse(e, t, null), this._transformType) {
                    for (d = 3 === this._transformType, De ? v && (g = !0, "" === h.zIndex && (("auto" === (c = K(e, "zIndex", S)) || "" === c) && this._addLazySet(h, "zIndex", 0)), y && this._addLazySet(h, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (d ? "visible" : "hidden"))) : h.zoom = 1, o = r; o && o._next;) o = o._next;
                    u = new ye(e, "transform", 0, 0, null, 2), this._linkCSSP(u, null, o), u.setRatio = De ? Ye : We, u.data = this._transform || Xe(e, S, !0), u.tween = i, u.pr = -1, p.pop()
                }
                if (f) {
                    for (; r;) {
                        for (l = r._next, o = s; o && o.pr > r.pr;) o = o._next;
                        (r._prev = o ? o._prev : a) ? r._prev._next = r: s = r, (r._next = o) ? o._prev = r : a = r, r = l
                    }
                    this._firstPT = s
                }
                return !0
            }, e.parse = function(e, t, i, n) {
                var r, o, s, a, l, c, u, d, h, p, f = e.style;
                for (r in t) c = t[r], (o = m[r]) ? i = o.parse(e, c, r, this, i, n, t) : (l = K(e, r, S) + "", h = "string" == typeof c, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || h && b.test(c) ? (h || (c = (3 < (c = he(c)).length ? "rgba(" : "rgb(") + c.join(",") + ")"), i = we(f, r, l, c, !0, "transparent", i, 0, n)) : h && M.test(c) ? i = we(f, r, l, c, !0, null, i, 0, n) : (u = (s = parseFloat(l)) || 0 === s ? l.substr((s + "").length) : "", ("" === l || "auto" === l) && ("width" === r || "height" === r ? (s = oe(e, r, S), u = "px") : "left" === r || "top" === r ? (s = ee(e, r, S), u = "px") : (s = "opacity" !== r ? 0 : 1, u = "")), (p = h && "=" === c.charAt(1)) ? (a = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), a *= parseFloat(c), d = c.replace(O, "")) : (a = parseFloat(c), d = h ? c.replace(O, "") : ""), "" === d && (d = r in k ? k[r] : u), c = a || 0 === a ? (p ? a + s : a) + d : t[r], u !== d && "" !== d && (a || 0 === a) && s && (s = J(e, r, s, u), "%" === d ? (s /= J(e, r, 100, "%") / 100, !0 !== t.strictUnits && (l = s + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? s /= J(e, r, 1, d) : "px" !== d && (a = J(e, r, a, d), d = "px"), p && (a || 0 === a) && (c = a + s + d)), p && (a += s), !s && 0 !== s || !a && 0 !== a ? void 0 !== f[r] && (c || c + "" != "NaN" && null != c) ? (i = new ye(f, r, a || s || 0, 0, i, -1, r, !1, 0, l, c)).xs0 = "none" !== c || "display" !== r && -1 === r.indexOf("Style") ? c : l : U("invalid " + r + " tween value: " + t[r]) : (i = new ye(f, r, s, a - s, i, 0, r, !1 !== P && ("px" === d || "zIndex" === r), 0, l, c)).xs0 = d)), n && i && !i.plugin && (i.plugin = n);
                return i
            }, e.setRatio = function(e) {
                var t, i, n, r = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (t = r.c * e + r.s, r.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (n = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                            else r.t[r.p] = t + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (t = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = t + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(e);
                            r = r._next
                        }
            }, e._enableTransforms = function(e) {
                this._transform = this._transform || Xe(this._target, S, !0), this._transformType = this._transform.svg && Se || !e && 3 !== this._transformType ? 2 : 3
            };
            var Ze = function(e) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            e._addLazySet = function(e, t, i) {
                var n = this._firstPT = new ye(e, t, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Ze, n.data = this
            }, e._linkCSSP = function(e, t, i, n) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
            }, e._kill = function(e) {
                var t, i, n, r = e;
                if (e.autoAlpha || e.alpha) {
                    for (i in r = {}, e) r[i] = e[i];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return e.className && (t = this._classNamePT) && ((n = t.xfirst) && n._prev ? this._linkCSSP(n._prev, t._next, n._prev._prev) : n === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, n._prev), this._classNamePT = null), o.prototype._kill.call(this, r)
            };
            var Ke = function(e, t, i) {
                var n, r, o, s;
                if (e.slice)
                    for (r = e.length; - 1 < --r;) Ke(e[r], t, i);
                else
                    for (r = (n = e.childNodes).length; - 1 < --r;) s = (o = n[r]).type, o.style && (t.push(te(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Ke(o, t, i)
            };
            return H.cascadeTo = function(e, t, i) {
                var n, r, o, s, a = I.to(e, t, i),
                    l = [a],
                    c = [],
                    u = [],
                    d = [],
                    h = I._internals.reservedProps;
                for (e = a._targets || a.target, Ke(e, c, d), a.render(t, !0, !0), Ke(e, u), a.render(0, !0, !0), a._enabled(!0), n = d.length; - 1 < --n;)
                    if ((r = ie(d[n], c[n], u[n])).firstMPT) {
                        for (o in r = r.difs, i) h[o] && (r[o] = i[o]);
                        for (o in s = {}, r) s[o] = c[n][o];
                        l.push(I.fromTo(d[n], t, s, r))
                    }
                return l
            }, o.activate([H]), H
        }, !0), e = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function(e, t, i) {
                return this._tween = i, !0
            }
        }), l = function(e) {
            for (; e;) e.f || e.blob || (e.r = 1), e = e._next
        }, (t = e.prototype)._onInitAllProps = function() {
            for (var e, t, i, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, s = {}, a = n._propLookup.roundProps; - 1 < --o;) s[r[o]] = 1;
            for (o = r.length; - 1 < --o;)
                for (e = r[o], t = n._firstPT; t;) i = t._next, t.pg ? t.t._roundProps(s, !0) : t.n === e && (2 === t.f && t.t ? l(t.t._firstPT) : (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i : n._firstPT === t && (n._firstPT = i), t._next = t._prev = null, n._propLookup[e] = a)), t = i;
            return !1
        }, t._add = function(e, t, i, n) {
            this._addTween(e, t, i, i + n, t, !0), this._overwriteProps.push(t)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.5.0",
            init: function(e, t, i) {
                var n;
                if ("function" != typeof e.setAttribute) return !1;
                for (n in t) this._addTween(e, "setAttribute", e.getAttribute(n) + "", t[n] + "", n, !1, n), this._overwriteProps.push(n);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.2.1",
            API: 2,
            init: function(e, t, i) {
                "object" != typeof t && (t = {
                    rotation: t
                }), this.finals = {};
                var n, r, o, s, a, l = !0 === t.useRadians ? 2 * Math.PI : 360;
                for (n in t) "useRadians" !== n && (r = (a = (t[n] + "").split("_"))[0], o = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = (this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - o, a.length && (-1 !== (r = a.join("_")).indexOf("short") && ((s %= l) !== s % (l / 2) && (s = s < 0 ? s + l : s - l)), -1 !== r.indexOf("_cw") && s < 0 ? s = (s + 9999999999 * l) % l - (s / l | 0) * l : -1 !== r.indexOf("ccw") && 0 < s && (s = (s - 9999999999 * l) % l - (s / l | 0) * l)), (1e-6 < s || s < -1e-6) && (this._addTween(e, n, o, o + s, n), this._overwriteProps.push(n)));
                return !0
            },
            set: function(e) {
                var t;
                if (1 !== e) this._super.setRatio.call(this, e);
                else
                    for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(g) {
            var t, i, e, n = _gsScope.GreenSockGlobals || _gsScope,
                r = n.com.greensock,
                o = 2 * Math.PI,
                s = Math.PI / 2,
                a = r._class,
                l = function(e, t) {
                    var i = a("easing." + e, function() {}, !0),
                        n = i.prototype = new g;
                    return n.constructor = i, n.getRatio = t, i
                },
                c = g.register || function() {},
                u = function(e, t, i, n, r) {
                    var o = a("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return c(o, e), o
                },
                v = function(e, t, i) {
                    this.t = e, this.v = t, i && (((this.next = i).prev = this).c = i.v - t, this.gap = i.t - e)
                },
                d = function(e, t) {
                    var i = a("easing." + e, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = i.prototype = new g;
                    return n.constructor = i, n.getRatio = t, n.config = function(e) {
                        return new i(e)
                    }, i
                },
                h = u("Back", d("BackOut", function(e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), d("BackIn", function(e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), d("BackInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                p = a("easing.SlowMo", function(e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                f = p.prototype = new g;
            return f.constructor = p, f.getRatio = function(e) {
                var t = e + (.5 - e) * this._p;
                return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, p.ease = new p(.7, .7), f.config = p.config = function(e, t, i) {
                return new p(e, t, i)
            }, (f = (t = a("easing.SteppedEase", function(e) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
            }, !0)).prototype = new g).constructor = t, f.getRatio = function(e) {
                return e < 0 ? e = 0 : 1 <= e && (e = .999999999), (this._p2 * e >> 0) * this._p1
            }, f.config = t.config = function(e) {
                return new t(e)
            }, (f = (i = a("easing.RoughEase", function(e) {
                for (var t, i, n, r, o, s, a = (e = e || {}).taper || "none", l = [], c = 0, u = 0 | (e.points || 20), d = u, h = !1 !== e.randomize, p = !0 === e.clamp, f = e.template instanceof g ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --d;) t = h ? Math.random() : 1 / u * d, i = f ? f.getRatio(t) : t, "none" === a ? n = m : "out" === a ? n = (r = 1 - t) * r * m : "in" === a ? n = t * t * m : n = (r = t < .5 ? 2 * t : 2 * (1 - t)) * r * .5 * m, h ? i += Math.random() * n - .5 * n : d % 2 ? i += .5 * n : i -= .5 * n, p && (1 < i ? i = 1 : i < 0 && (i = 0)), l[c++] = {
                    x: t,
                    y: i
                };
                for (l.sort(function(e, t) {
                        return e.x - t.x
                    }), s = new v(1, 1, null), d = u; - 1 < --d;) o = l[d], s = new v(o.x, o.y, s);
                this._prev = new v(0, 0, 0 !== s.t ? s : s.next)
            }, !0)).prototype = new g).constructor = i, f.getRatio = function(e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && e <= t.t;) t = t.prev;
                return (this._prev = t).v + (e - t.t) / t.gap * t.c
            }, f.config = function(e) {
                return new i(e)
            }, i.ease = new i, u("Bounce", l("BounceOut", function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), l("BounceIn", function(e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), l("BounceInOut", function(e) {
                var t = e < .5;
                return e = (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), u("Circ", l("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), l("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), l("CircInOut", function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), u("Elastic", (e = function(e, t, i) {
                var n = a("easing." + e, function(e, t) {
                        this._p1 = 1 <= e ? e : 1, this._p2 = (t || i) / (e < 1 ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                    }, !0),
                    r = n.prototype = new g;
                return r.constructor = n, r.getRatio = t, r.config = function(e, t) {
                    return new n(e, t)
                }, n
            })("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), e("ElasticIn", function(e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
            }, .3), e("ElasticInOut", function(e) {
                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), u("Expo", l("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }), l("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), l("ExpoInOut", function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), u("Sine", l("SineOut", function(e) {
                return Math.sin(e * s)
            }), l("SineIn", function(e) {
                return 1 - Math.cos(e * s)
            }), l("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), a("easing.EaseLookup", {
                find: function(e) {
                    return g.map[e]
                }
            }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), h
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(p, f) {
        "use strict";
        var t, i, m = {},
            g = p.GreenSockGlobals = p.GreenSockGlobals || p;
        if (!g.TweenLite) {
            var e, n, r, v, y, _ = function(e) {
                    var t, i = e.split("."),
                        n = g;
                    for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
                    return n
                },
                d = _("com.greensock"),
                w = 1e-10,
                l = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                b = function() {},
                x = (t = Object.prototype.toString, i = t.call([]), function(e) {
                    return null != e && (e instanceof Array || "object" == typeof e && !!e.push && t.call(e) === i)
                }),
                T = {},
                k = function(l, c, u, d) {
                    this.sc = T[l] ? T[l].sc : [], (T[l] = this).gsClass = null, this.func = u;
                    var h = [];
                    this.check = function(e) {
                        for (var t, i, n, r, o, s = c.length, a = s; - 1 < --s;)(t = T[c[s]] || new k(c[s], [])).gsClass ? (h[s] = t.gsClass, a--) : e && t.sc.push(this);
                        if (0 === a && u) {
                            if (n = (i = ("com.greensock." + l).split(".")).pop(), r = _(i.join("."))[n] = this.gsClass = u.apply(u, h), d)
                                if (g[n] = r, !(o = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + l.split(".").pop(), [], function() {
                                    return r
                                });
                                else if (o)
                                if (l === f)
                                    for (s in module.exports = m[f] = r, m) r[s] = m[s];
                                else m[f] && (m[f][n] = r);
                            for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                        }
                    }, this.check(!0)
                },
                o = p._gsDefine = function(e, t, i, n) {
                    return new k(e, t, i, n)
                },
                h = d._class = function(e, t, i) {
                    return t = t || function() {}, o(e, [], function() {
                        return t
                    }, i), t
                };
            o.globals = g;
            var s = [0, 0, 1, 1],
                a = [],
                u = h("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? s.concat(t) : s
                }, !0),
                S = u.map = {},
                c = u.register = function(e, t, i, n) {
                    for (var r, o, s, a, l = t.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --c;)
                        for (o = l[c], r = n ? h("easing." + o, null, !0) : d.easing[o] || {}, s = u.length; - 1 < --s;) a = u[s], S[o + "." + a] = S[a + o] = r[a] = e.getRatio ? e : e[a] || new e
                };
            for ((r = u.prototype)._calcEnd = !1, r.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : e < .5 ? n / 2 : 1 - n / 2
                }, n = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --n;) r = e[n] + ",Power" + n, c(new u(null, null, 1, n), r, "easeOut", !0), c(new u(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), c(new u(null, null, 3, n), r, "easeInOut");
            S.linear = d.easing.Linear.easeIn, S.swing = d.easing.Quad.easeInOut;
            var C = h("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            (r = C.prototype).addEventListener = function(e, t, i, n, r) {
                r = r || 0;
                var o, s, a = this._listeners[e],
                    l = 0;
                for (this !== v || y || v.wake(), null == a && (this._listeners[e] = a = []), s = a.length; - 1 < --s;)(o = a[s]).c === t && o.s === i ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
                a.splice(l, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: r
                })
            }, r.removeEventListener = function(e, t) {
                var i, n = this._listeners[e];
                if (n)
                    for (i = n.length; - 1 < --i;)
                        if (n[i].c === t) return void n.splice(i, 1)
            }, r.dispatchEvent = function(e) {
                var t, i, n, r = this._listeners[e];
                if (r)
                    for (t = r.length, i = this._eventTarget; - 1 < --t;)(n = r[t]) && (n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var P = p.requestAnimationFrame,
                A = p.cancelAnimationFrame,
                E = Date.now || function() {
                    return (new Date).getTime()
                },
                O = E();
            for (n = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --n && !P;) P = p[e[n] + "RequestAnimationFrame"], A = p[e[n] + "CancelAnimationFrame"] || p[e[n] + "CancelRequestAnimationFrame"];
            h("Ticker", function(e, t) {
                var r, o, s, a, l, c = this,
                    u = E(),
                    i = !(!1 === t || !P) && "auto",
                    d = 500,
                    h = 33,
                    p = function(e) {
                        var t, i, n = E() - O;
                        d < n && (u += n - h), O += n, c.time = (O - u) / 1e3, t = c.time - l, (!r || 0 < t || !0 === e) && (c.frame++, l += t + (a <= t ? .004 : a - t), i = !0), !0 !== e && (s = o(p)), i && c.dispatchEvent("tick")
                    };
                C.call(c), c.time = c.frame = 0, c.tick = function() {
                    p(!0)
                }, c.lagSmoothing = function(e, t) {
                    d = e || 1e10, h = Math.min(t, d, 0)
                }, c.sleep = function() {
                    null != s && (i && A ? A(s) : clearTimeout(s), o = b, s = null, c === v && (y = !1))
                }, c.wake = function(e) {
                    null !== s ? c.sleep() : e ? u += -O + (O = E()) : 10 < c.frame && (O = E() - d + 5), o = 0 === r ? b : i && P ? P : function(e) {
                        return setTimeout(e, 1e3 * (l - c.time) + 1 | 0)
                    }, c === v && (y = !0), p(2)
                }, c.fps = function(e) {
                    return arguments.length ? (a = 1 / ((r = e) || 60), l = this.time + a, void c.wake()) : r
                }, c.useRAF = function(e) {
                    return arguments.length ? (c.sleep(), i = e, void c.fps(r)) : i
                }, c.fps(e), setTimeout(function() {
                    "auto" === i && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
                }, 1500)
            }), (r = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
            var D = h("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, Q) {
                    y || v.wake();
                    var i = this.vars.useFrames ? V : Q;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            v = D.ticker = new d.Ticker, (r = D.prototype)._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var R = function() {
                y && 2e3 < E() - O && v.wake(), setTimeout(R, 2e3)
            };
            R(), r.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, r.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, r.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, r.seek = function(e, t) {
                return this.totalTime(Number(e), !1 !== t)
            }, r.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
            }, r.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, r.render = function(e, t, i) {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale
            }, r._enabled = function(e, t) {
                return y || v.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, r.kill = function(e, t) {
                return this._kill(e, t), this
            }, r._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, r._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); - 1 < --t;) "{self}" === e[t] && (i[t] = this);
                return i
            }, r._callback = function(e) {
                var t = this.vars;
                t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || a)
            }, r.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = x(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, r.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, r.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, r.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, r.totalTime = function(e, t, i) {
                if (y || v.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (n < e && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (N.length && Z(), this.render(e, t, !1), N.length && Z())
                }
                return this
            }, r.progress = r.totalProgress = function(e, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
            }, r.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, r.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || w, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, r.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, i, n = this._timeline;
                return e != this._paused && n && (y || e || v.wake(), i = (t = n.rawTime()) - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var $ = h("core.SimpleTimeline", function(e) {
                D.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (r = $.prototype = new D).constructor = $, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(e, t, i, n) {
                var r, o;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (o = e._startTime; r && r._startTime > o;) r = r._prev;
                return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
            }, r._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(e, t, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; r;) n = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = n
            }, r.rawTime = function() {
                return y || v.wake(), this._totalTime
            };
            var M = h("TweenLite", function(e, t, i) {
                    if (D.call(this, t, i), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                    var n, r, o, s = e.jquery || e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType),
                        a = this.vars.overwrite;
                    if (this._overwrite = a = null == a ? U[M.defaultOverwrite] : "number" == typeof a ? a >> 0 : U[a], (s || e instanceof Array || e.push && x(e)) && "number" != typeof e[0])
                        for (this._targets = o = l(e), this._propLookup = [], this._siblings = [], n = 0; n < o.length; n++)(r = o[n]) ? "string" != typeof r ? r.length && r !== p && r[0] && (r[0] === p || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(l(r))) : (this._siblings[n] = K(r, this, !1), 1 === a && 1 < this._siblings[n].length && ee(r, this, null, 1, this._siblings[n])) : "string" == typeof(r = o[n--] = M.selector(r)) && o.splice(n + 1, 1) : o.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === a && 1 < this._siblings.length && ee(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -w, this.render(Math.min(0, -this._delay)))
                }, !0),
                L = function(e) {
                    return e && e.length && e !== p && e[0] && (e[0] === p || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (r = M.prototype = new D).constructor = M, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, M.version = "1.18.5", M.defaultEase = r._ease = new u(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = v, M.autoSleep = 120, M.lagSmoothing = function(e, t) {
                v.lagSmoothing(e, t)
            }, M.selector = p.$ || p.jQuery || function(e) {
                var t = p.$ || p.jQuery;
                return t ? (M.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var N = [],
                j = {},
                z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                F = function(e) {
                    for (var t, i = this._firstPT; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s, i.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                },
                I = function(e, t, i, n) {
                    var r, o, s, a, l, c, u, d = [e, t],
                        h = 0,
                        p = "",
                        f = 0;
                    for (d.start = e, i && (i(d), e = d[0], t = d[1]), d.length = 0, r = e.match(z) || [], o = t.match(z) || [], n && (n._next = null, n.blob = 1, d._firstPT = n), l = o.length, a = 0; a < l; a++) u = o[a], p += (c = t.substr(h, t.indexOf(u, h) - h)) || !a ? c : ",", h += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), u === r[a] || r.length <= a ? p += u : (p && (d.push(p), p = ""), s = parseFloat(r[a]), d.push(s), d._firstPT = {
                        _next: d._firstPT,
                        t: d,
                        p: d.length - 1,
                        s: s,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                        f: 0,
                        r: f && f < 4
                    }), h += u.length;
                    return (p += t.substr(h)) && d.push(p), d.setRatio = F, d
                },
                H = function(e, t, i, n, r, o, s, a) {
                    var l, c = "get" === i ? e[t] : i,
                        u = typeof e[t],
                        d = "string" == typeof n && "=" === n.charAt(1),
                        h = {
                            t: e,
                            p: t,
                            s: c,
                            f: "function" === u,
                            pg: 0,
                            n: r || t,
                            r: o,
                            pr: 0,
                            c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                    return "number" !== u && ("function" === u && "get" === i && (l = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), h.s = c = s ? e[l](s) : e[l]()), "string" == typeof c && (s || isNaN(c)) ? (h.fp = s, h = {
                        t: I(c, n, a || M.defaultStringFilter, h),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || t,
                        pr: 0
                    }) : d || (h.s = parseFloat(c), h.c = parseFloat(n) - h.s || 0)), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h) : void 0
                },
                q = M._internals = {
                    isArray: x,
                    isSelector: L,
                    lazyTweens: N,
                    blobDif: I
                },
                B = M._plugins = {},
                X = q.tweenLookup = {},
                W = 0,
                Y = q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                U = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                V = D._rootFramesTimeline = new $,
                Q = D._rootTimeline = new $,
                G = 30,
                Z = q.lazyRender = function() {
                    var e, t = N.length;
                    for (j = {}; - 1 < --t;)(e = N[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    N.length = 0
                };
            Q._startTime = v.time, V._startTime = v.frame, Q._active = V._active = !0, setTimeout(Z, 1), D._updateRoot = M.render = function() {
                var e, t, i;
                if (N.length && Z(), Q.render((v.time - Q._startTime) * Q._timeScale, !1, !1), V.render((v.frame - V._startTime) * V._timeScale, !1, !1), N.length && Z(), v.frame >= G) {
                    for (i in G = v.frame + (parseInt(M.autoSleep, 10) || 120), X) {
                        for (e = (t = X[i].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete X[i]
                    }
                    if ((!(i = Q._first) || i._paused) && M.autoSleep && !V._first && 1 === v._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || v.sleep()
                    }
                }
            }, v.addEventListener("tick", D._updateRoot);
            var K = function(e, t, i) {
                    var n, r, o = e._gsTweenID;
                    if (X[o || (e._gsTweenID = o = "t" + W++)] || (X[o] = {
                            target: e,
                            tweens: []
                        }), t && ((n = X[o].tweens)[r = n.length] = t, i))
                        for (; - 1 < --r;) n[r] === t && n.splice(r, 1);
                    return X[o].tweens
                },
                J = function(e, t, i, n) {
                    var r, o, s = e.vars.onOverwrite;
                    return s && (r = s(e, t, i, n)), (s = M.onOverwrite) && (o = s(e, t, i, n)), !1 !== r && !1 !== o
                },
                ee = function(e, t, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || 4 <= n) {
                        for (l = r.length, o = 0; o < l; o++)
                            if ((a = r[o]) !== t) a._gc || a._kill(null, e, t) && (s = !0);
                            else if (5 === n) break;
                        return s
                    }
                    var c, u = t._startTime + w,
                        d = [],
                        h = 0,
                        p = 0 === t._duration;
                    for (o = r.length; - 1 < --o;)(a = r[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (c = c || te(t, 0, p), 0 === te(a, c, p) && (d[h++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (d[h++] = a)));
                    for (o = h; - 1 < --o;)
                        if (a = d[o], 2 === n && a._kill(i, e, t) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !J(a, t)) continue;
                            a._enabled(!1, !1) && (s = !0)
                        }
                    return s
                },
                te = function(e, t, i) {
                    for (var n = e._timeline, r = n._timeScale, o = e._startTime; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return t < (o /= r) ? o - t : i && o === t || !e._initted && o - t < 2e-10 ? w : (o += e.totalDuration() / e._timeScale / r) > t + w ? 0 : o - t - w
                };
            r._init = function() {
                var e, t, i, n, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== o.lazy, r.startAt = r.delay = null, this._startAt = M.to(this.target, 0, r), l)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (l = !1), i = {}, o) Y[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== o.lazy, i.immediateRender = l, this._startAt = M.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof u ? c : "function" == typeof c ? new u(c, o.easeParams) : S[c] || M.defaultEase : M.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; - 1 < --e;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (t && M._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, r._initProps = function(e, t, i, n) {
                var r, o, s, a, l, c;
                if (null == e) return !1;
                for (r in j[e._gsTweenID] && Z(), this.vars.css || e.style && e !== p && e.nodeType && B.css && !1 !== this.vars.autoCSS && function(e, t) {
                        var i, n = {};
                        for (i in e) Y[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                        e.css = n
                    }(this.vars, e), this.vars)
                    if (c = this.vars[r], Y[r]) c && (c instanceof Array || c.push && x(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                    else if (B[r] && (a = new B[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: a,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: a._priority
                        }, o = a._overwriteProps.length; - 1 < --o;) t[a._overwriteProps[o]] = this._firstPT;
                    (a._priority || a._onInitAllProps) && (s = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
                } else t[r] = H.call(this, e, r, "get", c, r, 0, null, this.vars.stringFilter);
                return n && this._kill(n, e) ? this._initProps(e, t, i, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && ee(e, this, t, this._overwrite, i) ? (this._kill(t, e), this._initProps(e, t, i, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (j[e._gsTweenID] = !0), s)
            }, r.render = function(e, t, i) {
                var n, r, o, s, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (l - 1e-7 <= e) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (c < 0 || e <= 0 && -1e-7 <= e || c === w && "isPause" !== this.data) && c !== e && (i = !0, w < c && (r = "onReverseComplete")), this._rawPrevTime = s = !t || e || c === e ? e : w);
                else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < c) && (r = "onReverseComplete", n = this._reversed), e < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= c && (c !== w || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !t || e || c === e ? e : w)), this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var u = e / l,
                        d = this._easeType,
                        h = this._easePower;
                    (1 === d || 3 === d && .5 <= u) && (u = 1 - u), 3 === d && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : e / l < .5 ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, N.push(this), void(this._lazy = [e, t]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= e && (this._active = !0), 0 === a && (this._startAt && (0 <= e ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === w && s !== w && (this._rawPrevTime = 0))
                }
            }, r._kill = function(e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : M.selector(t) || t;
                var n, r, o, s, a, l, c, u, d, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((x(t) || L(t)) && "number" != typeof t[0])
                    for (n = t.length; - 1 < --n;) this._kill(e, t[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; - 1 < --n;)
                            if (t === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = e || a, u = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                            for (o in c) a[o] && (d || (d = []), d.push(o));
                            if ((d || !e) && !J(this, i, t, d)) return !1
                        }
                        for (o in c)(s = a[o]) && (h && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -w, this.render(Math.min(0, -this._delay))), this
            }, r._enabled = function(e, t) {
                if (y || v.wake(), e && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; - 1 < --i;) this._siblings[i] = K(n[i], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return D.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }, M.to = function(e, t, i) {
                return new M(e, t, i)
            }, M.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(e, t, i)
            }, M.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new M(e, t, n)
            }, M.delayedCall = function(e, t, i, n, r) {
                return new M(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, M.set = function(e, t) {
                return new M(e, 0, t)
            }, M.getTweensOf = function(e, t) {
                if (null == e) return [];
                var i, n, r, o;
                if (e = "string" != typeof e ? e : M.selector(e) || e, (x(e) || L(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; - 1 < --i;) n = n.concat(M.getTweensOf(e[i], t));
                    for (i = n.length; - 1 < --i;)
                        for (o = n[i], r = i; - 1 < --r;) o === n[r] && n.splice(i, 1)
                } else
                    for (i = (n = K(e).concat()).length; - 1 < --i;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, M.killTweensOf = M.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = M.getTweensOf(e, t), r = n.length; - 1 < --r;) n[r]._kill(i, e)
            };
            var ie = h("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ie.prototype
            }, !0);
            if (r = ie.prototype, ie.version = "1.18.0", ie.API = 2, r._firstPT = null, r._addTween = H, r.setRatio = F, r._kill = function(e) {
                    var t, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; - 1 < --t;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, r._roundProps = function(e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, M._onPluginEvent = function(e, t) {
                    var i, n, r, o, s, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                        }
                        a = t._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
                    return i
                }, ie.activate = function(e) {
                    for (var t = e.length; - 1 < --t;) e[t].API === ie.API && (B[(new e[t])._propName] = e[t]);
                    return !0
                }, o.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        n = e.priority || 0,
                        r = e.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        s = h("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            ie.call(this, i, n), this._overwriteProps = r || []
                        }, !0 === e.global),
                        a = s.prototype = new ie(i);
                    for (t in (a.constructor = s).API = e.API, o) "function" == typeof e[t] && (a[o[t]] = e[t]);
                    return s.version = e.version, ie.activate([s]), s
                }, e = p._gsQueue) {
                for (n = 0; n < e.length; n++) e[n]();
                for (r in T) T[r].func || p.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            y = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
    }(this, function() {
        "use strict";
        var R = function() {};
        R.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var $ = "data-scrollmagic-pin-spacer";
        R.Controller = function(e) {
            var i, n, t = x.defaults,
                s = this,
                a = L.extend({}, t, e),
                r = [],
                o = !1,
                l = 0,
                c = "PAUSED",
                u = !0,
                d = 0,
                h = !0,
                p = function() {
                    0 < a.refreshInterval && (n = window.setTimeout(w, a.refreshInterval))
                },
                f = function() {
                    return a.vertical ? L.get.scrollTop(a.container) : L.get.scrollLeft(a.container)
                },
                m = function() {
                    return a.vertical ? L.get.height(a.container) : L.get.width(a.container)
                },
                g = this._setScrollPos = function(e) {
                    a.vertical ? u ? window.scrollTo(L.get.scrollLeft(), e) : a.container.scrollTop = e : u ? window.scrollTo(e, L.get.scrollTop()) : a.container.scrollLeft = e
                },
                v = function() {
                    if (h && o) {
                        var e = L.type.Array(o) ? o : r.slice(0);
                        o = !1;
                        var t = l,
                            i = (l = s.scrollPos()) - t;
                        0 !== i && (c = 0 < i ? "FORWARD" : "REVERSE"), "REVERSE" === c && e.reverse(), e.forEach(function(e) {
                            e.update(!0)
                        })
                    }
                },
                y = function() {
                    i = L.rAF(v)
                },
                _ = function(e) {
                    "resize" == e.type && (d = m(), c = "PAUSED"), !0 !== o && (o = !0, y())
                },
                w = function() {
                    if (!u && d != m()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                        }
                        a.container.dispatchEvent(t)
                    }
                    r.forEach(function(e) {
                        e.refresh()
                    }), p()
                };
            this._options = a;
            var b = function(e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return t.sort(function(e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            };
            return this.addScene = function(e) {
                    if (L.type.Array(e)) e.forEach(function(e) {
                        s.addScene(e)
                    });
                    else if (e instanceof R.Scene)
                        if (e.controller() !== s) e.addTo(s);
                        else if (r.indexOf(e) < 0)
                        for (var t in r.push(e), r = b(r), e.on("shift.controller_sort", function() {
                                r = b(r)
                            }), a.globalSceneOptions) e[t] && e[t].call(e, a.globalSceneOptions[t]);
                    return s
                }, this.removeScene = function(e) {
                    if (L.type.Array(e)) e.forEach(function(e) {
                        s.removeScene(e)
                    });
                    else {
                        var t = r.indexOf(e); - 1 < t && (e.off("shift.controller_sort"), r.splice(t, 1), e.remove())
                    }
                    return s
                }, this.updateScene = function(e, t) {
                    return L.type.Array(e) ? e.forEach(function(e) {
                        s.updateScene(e, t)
                    }) : t ? e.update(!0) : !0 !== o && e instanceof R.Scene && (-1 == (o = o || []).indexOf(e) && o.push(e), o = b(o), y()), s
                }, this.update = function(e) {
                    return _({
                        type: "resize"
                    }), e && v(), s
                }, this.scrollTo = function(e, t) {
                    if (L.type.Number(e)) g.call(a.container, e, t);
                    else if (e instanceof R.Scene) e.controller() === s && s.scrollTo(e.scrollOffset(), t);
                    else if (L.type.Function(e)) g = e;
                    else {
                        var i = L.get.elements(e)[0];
                        if (i) {
                            for (; i.parentNode.hasAttribute($);) i = i.parentNode;
                            var n = a.vertical ? "top" : "left",
                                r = L.get.offset(a.container),
                                o = L.get.offset(i);
                            u || (r[n] -= s.scrollPos()), s.scrollTo(o[n] - r[n], t)
                        }
                    }
                    return s
                }, this.scrollPos = function(e) {
                    return arguments.length ? (L.type.Function(e) && (f = e), s) : f.call(s)
                }, this.info = function(e) {
                    var t = {
                        size: d,
                        vertical: a.vertical,
                        scrollPos: l,
                        scrollDirection: c,
                        container: a.container,
                        isDocument: u
                    };
                    return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
                }, this.loglevel = function() {
                    return s
                }, this.enabled = function(e) {
                    return arguments.length ? (h != e && (h = !!e, s.updateScene(r, !0)), s) : h
                }, this.destroy = function(e) {
                    window.clearTimeout(n);
                    for (var t = r.length; t--;) r[t].destroy(e);
                    return a.container.removeEventListener("resize", _), a.container.removeEventListener("scroll", _), L.cAF(i), null
                },
                function() {
                    for (var e in a) t.hasOwnProperty(e) || delete a[e];
                    if (a.container = L.get.elements(a.container)[0], !a.container) throw "ScrollMagic.Controller init failed.";
                    (u = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window), d = m(), a.container.addEventListener("resize", _), a.container.addEventListener("scroll", _), a.refreshInterval = parseInt(a.refreshInterval) || t.refreshInterval, p()
                }(), s
        };
        var x = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        R.Controller.addOption = function(e, t) {
            x.defaults[e] = t
        }, R.Controller.extend = function(e) {
            var t = this;
            R.Controller = function() {
                return t.apply(this, arguments), this.$super = L.extend({}, this), e.apply(this, arguments) || this
            }, L.extend(R.Controller, t), R.Controller.prototype = t.prototype, R.Controller.prototype.constructor = R.Controller
        }, R.Scene = function(e) {
            var i, l, c = "BEFORE",
                u = "DURING",
                d = "AFTER",
                n = M.defaults,
                h = this,
                p = L.extend({}, n, e),
                f = c,
                m = 0,
                a = {
                    start: 0,
                    end: 0
                },
                g = 0,
                r = !0,
                s = {};
            this.on = function(e, r) {
                return L.type.Function(r) && (e = e.trim().split(" ")).forEach(function(e) {
                    var t = e.split("."),
                        i = t[0],
                        n = t[1];
                    "*" != i && (s[i] || (s[i] = []), s[i].push({
                        namespace: n || "",
                        callback: r
                    }))
                }), h
            }, this.off = function(e, o) {
                return e && (e = e.trim().split(" ")).forEach(function(e) {
                    var t = e.split("."),
                        i = t[0],
                        r = t[1] || "";
                    ("*" === i ? Object.keys(s) : [i]).forEach(function(e) {
                        for (var t = s[e] || [], i = t.length; i--;) {
                            var n = t[i];
                            !n || r !== n.namespace && "*" !== r || o && o != n.callback || t.splice(i, 1)
                        }
                        t.length || delete s[e]
                    })
                }), h
            }, this.trigger = function(e, t) {
                if (e) {
                    var i = e.trim().split("."),
                        n = i[0],
                        r = i[1],
                        o = s[n];
                    o && o.forEach(function(e) {
                        r && r !== e.namespace || e.callback.call(h, new R.Event(n, e.namespace, h, t))
                    })
                }
                return h
            }, h.on("change.internal", function(e) {
                "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? _() : "reverse" === e.what && h.update())
            }).on("shift.internal", function() {
                t(), h.update()
            }), this.addTo = function(e) {
                return e instanceof R.Controller && l != e && (l && l.removeScene(h), l = e, x(), o(!0), _(!0), t(), l.info("container").addEventListener("resize", w), e.addScene(h), h.trigger("add", {
                    controller: l
                }), h.update()), h
            }, this.enabled = function(e) {
                return arguments.length ? (r != e && (r = !!e, h.update(!0)), h) : r
            }, this.remove = function() {
                if (l) {
                    l.info("container").removeEventListener("resize", w);
                    var e = l;
                    l = void 0, e.removeScene(h), h.trigger("remove")
                }
                return h
            }, this.destroy = function(e) {
                return h.trigger("destroy", {
                    reset: e
                }), h.remove(), h.off("*.*"), null
            }, this.update = function(e) {
                if (l)
                    if (e)
                        if (l.enabled() && r) {
                            var t, i = l.info("scrollPos");
                            t = 0 < p.duration ? (i - a.start) / (a.end - a.start) : i >= a.start ? 1 : 0, h.trigger("update", {
                                startPos: a.start,
                                endPos: a.end,
                                scrollPos: i
                            }), h.progress(t)
                        } else v && f === u && S(!0);
                else l.updateScene(h, !1);
                return h
            }, this.refresh = function() {
                return o(), _(), h
            }, this.progress = function(e) {
                if (arguments.length) {
                    var t = !1,
                        i = f,
                        n = l ? l.info("scrollDirection") : "PAUSED",
                        r = p.reverse || m <= e;
                    if (0 === p.duration ? (t = m != e, f = 0 === (m = e < 1 && r ? 0 : 1) ? c : u) : e < 0 && f !== c && r ? (f = c, t = !(m = 0)) : 0 <= e && e < 1 && r ? (m = e, f = u, t = !0) : 1 <= e && f !== d ? (m = 1, f = d, t = !0) : f !== u || r || S(), t) {
                        var o = {
                                progress: m,
                                state: f,
                                scrollDirection: n
                            },
                            s = f != i,
                            a = function(e) {
                                h.trigger(e, o)
                            };
                        s && i !== u && (a("enter"), a(i === c ? "start" : "end")), a("progress"), s && f !== u && (a(f === c ? "start" : "end"), a("leave"))
                    }
                    return h
                }
                return m
            };
            var v, y, t = function() {
                    a = {
                        start: g + p.offset
                    }, l && p.triggerElement && (a.start -= l.info("size") * p.triggerHook), a.end = a.start + p.duration
                },
                o = function(e) {
                    if (i) {
                        var t = "duration";
                        T(t, i.call(h)) && !e && (h.trigger("change", {
                            what: t,
                            newval: p[t]
                        }), h.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                _ = function(e) {
                    var t = 0,
                        i = p.triggerElement;
                    if (l && i) {
                        for (var n = l.info(), r = L.get.offset(n.container), o = n.vertical ? "top" : "left"; i.parentNode.hasAttribute($);) i = i.parentNode;
                        var s = L.get.offset(i);
                        n.isDocument || (r[o] -= l.scrollPos()), t = s[o] - r[o]
                    }
                    var a = t != g;
                    g = t, a && !e && h.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                w = function() {
                    0 < p.triggerHook && h.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                b = L.extend(M.validate, {
                    duration: function(t) {
                        if (L.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() {
                                return l ? l.info("size") * e : 0
                            }
                        }
                        if (L.type.Function(t)) {
                            i = t;
                            try {
                                t = parseFloat(i())
                            } catch (e) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !L.type.Number(t) || t < 0) throw i && (i = void 0), 0;
                        return t
                    }
                }),
                x = function(e) {
                    (e = arguments.length ? [e] : Object.keys(b)).forEach(function(t) {
                        var i;
                        if (b[t]) try {
                            i = b[t](p[t])
                        } catch (e) {
                            i = n[t]
                        } finally {
                            p[t] = i
                        }
                    })
                },
                T = function(e, t) {
                    var i = !1,
                        n = p[e];
                    return p[e] != t && (p[e] = t, x(e), i = n != p[e]), i
                },
                k = function(t) {
                    h[t] || (h[t] = function(e) {
                        return arguments.length ? ("duration" === t && (i = void 0), T(t, e) && (h.trigger("change", {
                            what: t,
                            newval: p[t]
                        }), -1 < M.shifts.indexOf(t) && h.trigger("shift", {
                            reason: t
                        })), h) : p[t]
                    })
                };
            this.controller = function() {
                return l
            }, this.state = function() {
                return f
            }, this.scrollOffset = function() {
                return a.start
            }, this.triggerPosition = function() {
                var e = p.offset;
                return l && (e += p.triggerElement ? g : l.info("size") * h.triggerHook()), e
            }, h.on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                (f === d && t || f === u && 0 === p.duration) && S(), t && C()
            }).on("progress.internal", function() {
                S()
            }).on("add.internal", function() {
                C()
            }).on("destroy.internal", function(e) {
                h.removePin(e.reset)
            });
            var S = function(e) {
                    if (v && l) {
                        var t = l.info(),
                            i = y.spacer.firstChild;
                        if (e || f !== u) {
                            var n = {
                                    position: y.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                r = L.css(i, "position") != n.position;
                            y.pushFollowers ? 0 < p.duration && (f === d && 0 === parseFloat(L.css(y.spacer, "padding-top")) ? r = !0 : f === c && 0 === parseFloat(L.css(y.spacer, "padding-bottom")) && (r = !0)) : n[t.vertical ? "top" : "left"] = p.duration * m, L.css(i, n), r && C()
                        } else {
                            "fixed" != L.css(i, "position") && (L.css(i, {
                                position: "fixed"
                            }), C());
                            var o = L.get.offset(y.spacer, !0),
                                s = p.reverse || 0 === p.duration ? t.scrollPos - a.start : Math.round(m * p.duration * 10) / 10;
                            o[t.vertical ? "top" : "left"] += s, L.css(y.spacer.firstChild, {
                                top: o.top,
                                left: o.left
                            })
                        }
                    }
                },
                C = function() {
                    if (v && l && y.inFlow) {
                        var e = f === u,
                            t = l.info("vertical"),
                            i = y.spacer.firstChild,
                            n = L.isMarginCollapseType(L.css(y.spacer, "display")),
                            r = {};
                        y.relSize.width || y.relSize.autoFullWidth ? e ? L.css(v, {
                            width: L.get.width(y.spacer)
                        }) : L.css(v, {
                            width: "100%"
                        }) : (r["min-width"] = L.get.width(t ? v : i, !0, !0), r.width = e ? r["min-width"] : "auto"), y.relSize.height ? e ? L.css(v, {
                            height: L.get.height(y.spacer) - (y.pushFollowers ? p.duration : 0)
                        }) : L.css(v, {
                            height: "100%"
                        }) : (r["min-height"] = L.get.height(t ? i : v, !0, !n), r.height = e ? r["min-height"] : "auto"), y.pushFollowers && (r["padding" + (t ? "Top" : "Left")] = p.duration * m, r["padding" + (t ? "Bottom" : "Right")] = p.duration * (1 - m)), L.css(y.spacer, r)
                    }
                },
                P = function() {
                    l && v && f === u && !l.info("isDocument") && S()
                },
                A = function() {
                    l && v && f === u && ((y.relSize.width || y.relSize.autoFullWidth) && L.get.width(window) != L.get.width(y.spacer.parentNode) || y.relSize.height && L.get.height(window) != L.get.height(y.spacer.parentNode)) && C()
                },
                E = function(e) {
                    l && v && f === u && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                };
            this.setPin = function(e, t) {
                if (t = L.extend({}, {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }, t), !(e = L.get.elements(e)[0])) return h;
                if ("fixed" === L.css(e, "position")) return h;
                if (v) {
                    if (v === e) return h;
                    h.removePin()
                }
                var i = (v = e).parentNode.style.display,
                    n = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                v.parentNode.style.display = "none";
                var r = "absolute" != L.css(v, "position"),
                    o = L.css(v, n.concat(["display"])),
                    s = L.css(v, ["width", "height"]);
                v.parentNode.style.display = i, !r && t.pushFollowers && (t.pushFollowers = !1);
                var a = v.parentNode.insertBefore(document.createElement("div"), v),
                    l = L.extend(o, {
                        position: r ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (r || L.extend(l, L.css(v, ["width", "height"])), L.css(a, l), a.setAttribute($, ""), L.addClass(a, t.spacerClass), y = {
                        spacer: a,
                        relSize: {
                            width: "%" === s.width.slice(-1),
                            height: "%" === s.height.slice(-1),
                            autoFullWidth: "auto" === s.width && r && L.isMarginCollapseType(o.display)
                        },
                        pushFollowers: t.pushFollowers,
                        inFlow: r
                    }, !v.___origStyle) {
                    v.___origStyle = {};
                    var c = v.style;
                    n.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                        v.___origStyle[e] = c[e] || ""
                    })
                }
                return y.relSize.width && L.css(a, {
                    width: s.width
                }), y.relSize.height && L.css(a, {
                    height: s.height
                }), a.appendChild(v), L.css(v, {
                    position: r ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (y.relSize.width || y.relSize.autoFullWidth) && L.css(v, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", P), window.addEventListener("resize", P), window.addEventListener("resize", A), v.addEventListener("mousewheel", E), v.addEventListener("DOMMouseScroll", E), S(), h
            }, this.removePin = function(e) {
                if (v) {
                    if (f === u && S(!0), e || !l) {
                        var t = y.spacer.firstChild;
                        if (t.hasAttribute($)) {
                            var i = y.spacer.style;
                            margins = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                                margins[e] = i[e] || ""
                            }), L.css(t, margins)
                        }
                        y.spacer.parentNode.insertBefore(t, y.spacer), y.spacer.parentNode.removeChild(y.spacer), v.parentNode.hasAttribute($) || (L.css(v, v.___origStyle), delete v.___origStyle)
                    }
                    window.removeEventListener("scroll", P), window.removeEventListener("resize", P), window.removeEventListener("resize", A), v.removeEventListener("mousewheel", E), v.removeEventListener("DOMMouseScroll", E), v = void 0
                }
                return h
            };
            var O, D = [];
            return h.on("destroy.internal", function(e) {
                    h.removeClassToggle(e.reset)
                }), this.setClassToggle = function(e, t) {
                    var i = L.get.elements(e);
                    return 0 !== i.length && L.type.String(t) && (0 < D.length && h.removeClassToggle(), O = t, D = i, h.on("enter.internal_class leave.internal_class", function(e) {
                        var t = "enter" === e.type ? L.addClass : L.removeClass;
                        D.forEach(function(e) {
                            t(e, O)
                        })
                    })), h
                }, this.removeClassToggle = function(e) {
                    return e && D.forEach(function(e) {
                        L.removeClass(e, O)
                    }), h.off("start.internal_class end.internal_class"), O = void 0, D = [], h
                },
                function() {
                    for (var e in p) n.hasOwnProperty(e) || delete p[e];
                    for (var t in n) k(t);
                    x()
                }(), h
        };
        var M = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(e) {
                    if (e = parseFloat(e), !L.type.Number(e)) throw 0;
                    return e
                },
                triggerElement: function(e) {
                    if (e = e || void 0) {
                        var t = L.get.elements(e)[0];
                        if (!t) throw 0;
                        e = t
                    }
                    return e
                },
                triggerHook: function(e) {
                    var t = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (L.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw 0;
                        e = t[e]
                    }
                    return e
                },
                reverse: function(e) {
                    return !!e
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        R.Scene.addOption = function(e, t, i, n) {
            e in M.defaults || (M.defaults[e] = t, M.validate[e] = i, n && M.shifts.push(e))
        }, R.Scene.extend = function(e) {
            var t = this;
            R.Scene = function() {
                return t.apply(this, arguments), this.$super = L.extend({}, this), e.apply(this, arguments) || this
            }, L.extend(R.Scene, t), R.Scene.prototype = t.prototype, R.Scene.prototype.constructor = R.Scene
        }, R.Event = function(e, t, i, n) {
            for (var r in n = n || {}) this[r] = n[r];
            return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var L = R._util = function(s) {
            var i, e = {},
                a = function(e) {
                    return parseFloat(e) || 0
                },
                l = function(e) {
                    return e.currentStyle ? e.currentStyle : s.getComputedStyle(e)
                },
                n = function(e, t, i, n) {
                    if ((t = t === document ? s : t) === s) n = !1;
                    else if (!d.DomElement(t)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var r = (i ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
                    if (i && n) {
                        var o = l(t);
                        r += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)
                    }
                    return r
                },
                c = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase()
                    })
                };
            e.extend = function(e) {
                for (e = e || {}, i = 1; i < arguments.length; i++)
                    if (arguments[i])
                        for (var t in arguments[i]) arguments[i].hasOwnProperty(t) && (e[t] = arguments[i][t]);
                return e
            }, e.isMarginCollapseType = function(e) {
                return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
            };
            var r = 0,
                t = ["ms", "moz", "webkit", "o"],
                o = s.requestAnimationFrame,
                u = s.cancelAnimationFrame;
            for (i = 0; !o && i < t.length; ++i) o = s[t[i] + "RequestAnimationFrame"], u = s[t[i] + "CancelAnimationFrame"] || s[t[i] + "CancelRequestAnimationFrame"];
            o || (o = function(e) {
                var t = (new Date).getTime(),
                    i = Math.max(0, 16 - (t - r)),
                    n = s.setTimeout(function() {
                        e(t + i)
                    }, i);
                return r = t + i, n
            }), u || (u = function(e) {
                s.clearTimeout(e)
            }), e.rAF = o.bind(s), e.cAF = u.bind(s);
            var d = e.type = function(e) {
                return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            d.String = function(e) {
                return "string" === d(e)
            }, d.Function = function(e) {
                return "function" === d(e)
            }, d.Array = function(e) {
                return Array.isArray(e)
            }, d.Number = function(e) {
                return !d.Array(e) && 0 <= e - parseFloat(e) + 1
            }, d.DomElement = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            };
            var h = e.get = {};
            return h.elements = function(e) {
                var t = [];
                if (d.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (e) {
                    return t
                }
                if ("nodelist" === d(e) || d.Array(e))
                    for (var i = 0, n = t.length = e.length; i < n; i++) {
                        var r = e[i];
                        t[i] = d.DomElement(r) ? r : h.elements(r)
                    } else(d.DomElement(e) || e === document || e === s) && (t = [e]);
                return t
            }, h.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0
            }, h.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0
            }, h.width = function(e, t, i) {
                return n("width", e, t, i)
            }, h.height = function(e, t, i) {
                return n("height", e, t, i)
            }, h.offset = function(e, t) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (e && e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect();
                    i.top = n.top, i.left = n.left, t || (i.top += h.scrollTop(), i.left += h.scrollLeft())
                }
                return i
            }, e.addClass = function(e, t) {
                t && (e.classList ? e.classList.add(t) : e.className += " " + t)
            }, e.removeClass = function(e, t) {
                t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, e.css = function(e, t) {
                if (d.String(t)) return l(e)[c(t)];
                if (d.Array(t)) {
                    var i = {},
                        n = l(e);
                    return t.forEach(function(e) {
                        i[e] = n[c(e)]
                    }), i
                }
                for (var r in t) {
                    var o = t[r];
                    o == parseFloat(o) && (o += "px"), e.style[c(r)] = o
                }
            }, e
        }(window || {});
        return R
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
    }(this, function(e, a, l) {
        "use strict";
        e.Scene.addOption("tweenChanges", !1, function(e) {
            return !!e
        }), e.Scene.extend(function() {
            var r, o = this;
            o.on("progress.plugin_gsap", function() {
                s()
            }), o.on("destroy.plugin_gsap", function(e) {
                o.removeTween(e.reset)
            });
            var s = function() {
                if (r) {
                    var e = o.progress(),
                        t = o.state();
                    r.repeat && -1 === r.repeat() ? "DURING" === t && r.paused() ? r.play() : "DURING" === t || r.paused() || r.pause() : e != r.progress() && (0 === o.duration() ? 0 < e ? r.play() : r.reverse() : o.tweenChanges() && r.tweenTo ? r.tweenTo(e * r.duration()) : r.progress(e).pause())
                }
            };
            o.setTween = function(e, t, i) {
                var n;
                1 < arguments.length && (arguments.length < 3 && (i = t, t = 1), e = a.to(e, t, i));
                try {
                    (n = l ? new l({
                        smoothChildTiming: !0
                    }).add(e) : e).pause()
                } catch (e) {
                    return o
                }
                return r && o.removeTween(), r = n, e.repeat && -1 === e.repeat() && (r.repeat(-1), r.yoyo(e.yoyo())), s(), o
            }, o.removeTween = function(e) {
                return r && (e && r.progress(0).pause(), r.kill(), r = void 0), o
            }
        })
    }), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var s = document.documentElement,
            a = window,
            o = function(e, t) {
                var i = "x" === t ? "Width" : "Height",
                    n = "scroll" + i,
                    r = "client" + i,
                    o = document.body;
                return e === a || e === s || e === o ? Math.max(s[n], o[n]) - (a["inner" + i] || s[r] || o[r]) : e[n] - e["offset" + i]
            },
            e = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.5",
                init: function(e, t, i) {
                    return this._wdw = e === a, this._target = e, this._tween = i, "object" != typeof t && (t = {
                        y: t
                    }), this.vars = t, this._autoKill = !1 !== t.autoKill, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != t.x ? (this._addTween(this, "x", this.x, "max" === t.x ? o(e, "x") : t.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != t.y ? (this._addTween(this, "y", this.y, "max" === t.y ? o(e, "y") : t.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    var t = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        i = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        n = i - this.yPrev,
                        r = t - this.xPrev;
                    this._autoKill && (!this.skipX && (7 < r || r < -7) && o(this._target, "x") > t && (this.skipX = !0), !this.skipY && (7 < n || n < -7) && o(this._target, "y") > i && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? a.scrollTo(this.skipX ? t : this.x, this.skipY ? i : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            t = e.prototype;
        e.max = o, t.getX = function() {
            return this._wdw ? null != a.pageXOffset ? a.pageXOffset : null != s.scrollLeft ? s.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
        }, t.getY = function() {
            return this._wdw ? null != a.pageYOffset ? a.pageYOffset : null != s.scrollTop ? s.scrollTop : document.body.scrollTop : this._target.scrollTop
        }, t._kill = function(e) {
            return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function() {
        var r, l, c, o = {}.hasOwnProperty,
            u = [].slice;
        r = window, l = window.jQuery, (c = c || {}).init = function(e) {
            var t;
            return this.ApiReady = !1, t = r.navigator.userAgent.toLowerCase(), this.platform = {
                isIE8: null !== t.match(/msie 8/),
                isIE9: null !== t.match(/msie 9/),
                isIE10: null !== t.match(/msie 10/)
            }, this.feature = e || (this.platform.isIE8 || this.platform.isIE9 || this.platform.isIE10 ? "flash" : "iframe"), this[this.feature].init(), this.registerPackage()
        }, c.onApiReady = function() {
            var e, t, i, n;
            for (e in console.log(), this.ApiReady = !0, n = [], i = this.YTplayers) o.call(i, e) && ((t = i[e]).initialized ? n.push(void 0) : n.push(t = this[this.feature].initializeVideo(e, t)));
            return n
        }, c.pushToQueue = function(e, t) {
            return this.YTplayers[e] = t, this.YTplayers[e].initialized = !1
        }, c.util = {
            objToUrl: function(e) {
                var t, i, n;
                for (i in t = 0, n = "", e) o.call(e, i) && (n += (0 === t ? "?" : "&") + i + "=" + e[i], t++);
                return n
            }
        }, c.iframe = {
            init: function() {
                var e, t;
                return r.onYouTubeIframeAPIReady = function() {
                    return c.onApiReady()
                }, (t = document.createElement("script")).src = "https://www.youtube.com/iframe_api", (e = document.getElementsByTagName("script")[0]).parentNode.insertBefore(t, e)
            },
            initializeVideo: function(e, t) {
                var i;
                return t.playerVars = t.playerVars || {}, t.playerVars.wmode = "opaque", t.playerVars.html5 = 1, i = new YT.Player(e, {
                    wmode: "opaque",
                    width: t.width,
                    height: t.height,
                    videoId: t.videoId,
                    playerVars: t.playerVars,
                    events: {
                        onReady: t.onReady,
                        onStateChange: function(e) {
                            switch ("function" == typeof t.onStateChange && t.onStateChange(e), e.data) {
                                case 0:
                                    return "function" == typeof t.onEnd ? t.onEnd(e) : void 0;
                                case 1:
                                    return "function" == typeof t.onPlay ? t.onPlay(e) : void 0;
                                case 2:
                                    return "function" == typeof t.onPause ? t.onPause(e) : void 0;
                                case 3:
                                    return "function" == typeof t.onBuffer ? t.onBuffer(e) : void 0
                            }
                        },
                        onPlaybackQualityChange: t.onPlaybackQualityChange,
                        onPlaybackRateChange: t.onPlaybackRateChange,
                        onApiChange: t.onApiChange,
                        onError: t.onError
                    }
                }), c.YTplayers[e] = i
            }
        }, c.flash = {
            init: function() {
                var e, t;
                return (t = document.createElement("script")).onload = function() {
                    return c.onApiReady()
                }, t.src = "http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js", (e = document.getElementsByTagName("script")[0]).parentNode.insertBefore(t, e)
            },
            initializeVideo: function(i, n) {
                var e;
                return n.playerVars = n.playerVars || {}, n.playerVars.wmode = "opaque", n.playerVars.version = 3, n.playerVars.enablejsapi = 1, n.playerVars.playerapiid = n.videoId, e = c.util.objToUrl(n.playerVars), swfobject.embedSWF("http://www.youtube-nocookie.com/v/" + n.videoId + e, i, n.width, n.height, "8", null, null, {
                    allowScriptAccess: "always",
                    wmode: "transparent"
                }, {
                    id: i
                }), r.onYouTubePlayerReady = function(e) {
                    var t;
                    t = document.getElementById(i), r[i + "OnStateChange"] = function(e) {
                        switch ("function" == typeof n.onStateChange && n.onStateChange(e), e) {
                            case -1:
                                return "function" == typeof n.onReady ? n.onReady(e) : void 0;
                            case 0:
                                return "function" == typeof n.onEnd ? n.onEnd(e) : void 0;
                            case 1:
                                return "function" == typeof n.onPlay ? n.onPlay(e) : void 0;
                            case 2:
                                return "function" == typeof n.onPause ? n.onPause(e) : void 0;
                            case 3:
                                return "function" == typeof n.onBuffer ? n.onBuffer(e) : void 0
                        }
                    }, r[i + "OnError"] = function(e) {
                        return "function" == typeof n.onError ? n.onError(e) : void 0
                    }, r[i + "OnApiChange"] = function(e) {
                        return "function" == typeof n.onApiChange ? n.onApiChange(e) : void 0
                    }, r[i + "OnPlaybackRateChange"] = function(e) {
                        return "function" == typeof n.onPlaybackRateChange ? n.onPlaybackRateChange(e) : void 0
                    }, r[i + "OnPlaybackQualityChange"] = function(e) {
                        return "function" == typeof n.onPlaybackQualityChange ? n.onPlaybackQualityChange(e) : void 0
                    }, t.addEventListener("onError", i + "OnError"), t.addEventListener("onApiChange", i + "OnApiChange"), t.addEventListener("onStateChange", i + "OnStateChange"), t.addEventListener("onPlaybackRateChange", i + "OnPlaybackRateChange"), t.addEventListener("onPlaybackQualityChange", i + "OnPlaybackQualityChange"), c.YTplayers[i] = t
                }
            }
        }, l.prototype.YTplayer = function(e) {
            return this.id = l(this).attr("id"), this.width = e.width || 640, this.height = e.height || 480, this.videoId = e.videoId || "fz4MzJTeL0c", this.playerVars = e.playerVars, this.onReady = e.onReady, this.onStateChange = e.onStateChange, this.onStart = e.onStart, this.onEnd = e.onEnd, this.onPlay = e.onPlay, this.onPause = e.onPause, this.onBuffer = e.onBuffer, this.onPlaybackQualityChange = e.onPlaybackQualityChange, this.onPlaybackRateChange = e.onPlaybackRateChange, this.onError = e.onError, this.onApiChange = e.onApiChange, c.YTplayers = c.YTplayers || {}, c.ApiReady ? c[c.feature].initializeVideo(this.id, this) : c.pushToQueue(this.id, this)
        }, c.registerPackage = function() {
            var t, i, e, n, r, o, s, a;
            for (this.registerPackage = function(e, r) {
                    return null == r && (r = e), l.prototype[e] = function() {
                        var e, t, i, n;
                        if (e = 1 <= arguments.length ? u.call(arguments, 0) : [], t = l(this).attr("id"), void 0 !== c.YTplayers[t] && !1 !== (i = c.YTplayers[t]).initialized) return null != (n = i[r]) ? n.apply(i, e) : void 0
                    }
                }, this.registerPackage("play", "playVideo"), this.registerPackage("pause", "pauseVideo"), this.registerPackage("stop", "stopVideo"), this.registerPackage("clear", "clearVideo"), o = 0, s = (a = ["seekTo", "setSize", "mute", "unMute", "isMuted", "setVolume", "getVolume", "getVideoLoadedFraction", "getPlayerState", "getCurrentTime", "setPlaybackRate", "getPlaybackRate", "getAvailablePlaybackRate", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getDuration", "getVideoUrl", "getVideoEmbedCode", "addEventListener", "removeEventListener", "getIframe", "destroy"]).length; o < s; o++) e = a[o], this.registerPackage(e);
            return t = function(e) {
                return document.documentElement.requestFullscreen ? e.requestFullscreen() : ("function" == typeof e.msRequestFullscreen && e.msRequestFullscreen(), "function" == typeof e.mozRequestFullScreen && e.mozRequestFullScreen(), "function" == typeof e.webkitRequestFullscreen && e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), l(e).addClass("ytplayer-fullscreen")
            }, i = function() {
                return document.exitFullscreen ? document.exitFullscreen() : ("function" == typeof document.msExitFullscreen && document.msExitFullscreen(), "function" == typeof document.mozCancelFullScreen && document.mozCancelFullScreen(), "function" == typeof document.webkitExitFullscreen && document.webkitExitFullscreen()), l(".ytplayer-fullscreen").removeClass("ytplayer-fullscreen")
            }, r = function(e) {
                return l.fullscreenElement() ? i() : t(e)
            }, n = function() {
                null != document.msExitFullscreen ? "MSFullscreenChange" : null != document.mozCancelFullScreen ? "mozfullscreenchange" : null != document.webkitExitFullscreen ? "webkitfullscreenchange" : ""
            }, document.addEventListener(n(), function() {
                if (!l.fullscreenElement()) return i()
            }), l.fullscreenElement = function() {
                return document.fullScreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
            }, l.prototype.enterFullscreen = function() {
                return t(l(this)[0])
            }, l.prototype.exitFullscreen = function() {
                return i(l(this)[0])
            }, l.prototype.toggleFullscreen = function() {
                return r(l(this)[0])
            }
        }, c.init()
    }.call(this),
    function(a, e, t, i) {
        window.onload = function() {
            setTimeout(function() {
                window.scrollTo(0, 0)
            }, 0)
        };
        var n = new TimelineMax({
            paused: !0
        });
        n.add("start").set("html", {
            "pointer-events": "none"
        }).to(".preload-logo .progress", 1, {
            opacity: 0,
            ease: Expo.easeOut
        }, "=+1").to(".preload-logo", 1, {
            scale: 0,
            ease: Expo.easeOut
        }, "=-0.6").to(".preloader", 1, {
            opacity: 0,
            ease: Expo.easeOut
        }, "=-0.5").to(".about__intro", 2, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, "=-1.5").to(".header__about", .4, {
            opacity: 1,
            y: 0,
            x: 0,
            ease: Expo.easeOut
        }, "=-1.5").to(".header__painters", .4, {
            opacity: 1,
            y: 0,
            x: 0,
            ease: Expo.easeOut
        }, "=-1.3").to(".header__book", .4, {
            opacity: 1,
            y: 0,
            x: 0,
            ease: Expo.easeOut
        }, "=-1.1").to(".header__events", .4, {
            opacity: 1,
            y: 0,
            x: 0,
            ease: Expo.easeOut
        }, "=-0.9").to(".buy-book-fixed div", .4, {
            opacity: 1,
            y: 0,
            x: 0,
            ease: Expo.easeOut
        }, "=-0.7").to(".cursor-wrapper", .6, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }).set(".preloader", {
            visibility: "hidden"
        }).set("html", {
            "pointer-events": "auto"
        });
        var r, o, s, l, c = a("html"),
            u = a(window),
            d = a(document),
            h = (c = a("html"), a("body"), u.width(), u.height()),
            p = a(".header"),
            f = a(".about__logo"),
            m = a(".cursor"),
            g = a(".cursor-wrapper"),
            v = a("a"),
            y = a(".buy-book-fixed"),
            _ = a(".painters__list-items a"),
            w = (window, ""),
            b = new ScrollMagic.Controller,
            x = [],
            T = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            k = function(n, r, o) {
                var s, a;
                return r || (r = 150),
                    function() {
                        var e = o || this,
                            t = +new Date,
                            i = arguments;
                        s && t < s + r ? (clearTimeout(a), a = setTimeout(function() {
                            s = t, n.apply(e, i)
                        }, r)) : (s = t, n.apply(e, i))
                    }
            },
            S = function() {
                var e = u.scrollTop();
                R(e)
            },
            C = function(e) {
                e >= a(".painters").offset().top && e <= a(".painters").offset().top + a(".painters").outerHeight() ? p.addClass("on-painters") : p.removeClass("on-painters")
            },
            P = function(e) {
                a(".slider").find(".slide").removeClass("animate-from-left animate-from-right"), e.addClass("animate-from-left")
            },
            A = function(e) {
                a(".slider").find(".slide").removeClass("animate-from-left animate-from-right"), e.addClass("animate-from-right")
            },
            E = function(r) {
                a(".header a").each(function() {
                    var e = a(this),
                        t = a(e.attr("data-goto")),
                        i = t.offset().top - 20,
                        n = i + t.outerHeight();
                    i <= r && r <= n ? (a(".header a").blur().removeClass("selected"), e.addClass("selected")) : e.removeClass("selected")
                })
            },
            O = function(e) {
                e >= a(".about").offset().top && e <= a(".about").offset().top + a(".about").outerHeight() ? y.addClass("on-about") : y.removeClass("on-about"), e >= a(".painters").offset().top && e <= a(".painters").offset().top + a(".painters").outerHeight() ? y.addClass("on-painters") : y.removeClass("on-painters"), e >= a(".book").offset().top && e <= a(".book").offset().top + a(".book").outerHeight() ? y.addClass("on-book") : y.removeClass("on-book"), e >= a(".events").offset().top && e <= a(".events").offset().top + a(".events").outerHeight() ? y.addClass("on-events") : y.removeClass("on-events")
            },
            D = function() {
                for (var e = 0; e < x.length; e++) {
                    x[e].remove()
                }
                x = []
            },
            R = function(n) {
                a(".image-animation__img").each(function() {
                    var e = a(this),
                        t = e.parent().outerHeight(),
                        i = e.parent().offset().top;
                    i <= n && n < i + t - h ? e.css({
                        position: "fixed",
                        top: 0
                    }) : n < i ? e.css({
                        position: "absolute",
                        top: 0
                    }) : e.css({
                        position: "absolute",
                        top: t - h
                    })
                })
            },
            $ = function(e) {
                e.YTplayer({
                    width: 640,
                    height: 360,
                    videoId: e.data("id"),
                    playerVars: {
                        autohide: 2,
                        autoplay: 0,
                        cc_load_policy: 0,
                        color: "red",
                        controls: 0,
                        disablekb: 0,
                        enablejsapi: 0,
                        fs: 1,
                        hl: "en",
                        iv_load_policy: 3,
                        modestbranding: 1,
                        origin: "",
                        playsinline: 0,
                        rel: 0,
                        showinfo: 1,
                        theme: "dark"
                    }
                })
            },
            M = function() {
                var e, t, i, n, r, o, s;
                e = !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"), t = "undefined" != typeof InstallTrigger, i = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor"), n = !!document.documentMode, r = !n && !!window.StyleMedia, o = !!window.chrome && !!window.chrome.webstore, s = (o || e) && !!window.CSS, e ? c.addClass("browser-opera") : t ? c.addClass("browser-firefox") : i ? c.addClass("browser-safari") : n ? c.addClass("browser-ie") : r ? c.addClass("browser-edge") : o ? c.addClass("browser-chrome") : s && c.addClass("is-blink"), objectFitImages(), a(".lazy").lazy({
                        delay: 0,
                        enableThrottle: !0,
                        throttle: 250,
                        visibleOnly: !0,
                        afterLoad: function(e) {
                            e.addClass("loaded")
                        }
                    }), a("html").hasClass("svg") || a(".is-svg").each(function(e) {
                        var t = a(this);
                        t.attr("src", t.data("png"))
                    }),
                    function() {
                        D();
                        var e = new TimelineMax;
                        e.add(TweenMax.to(f.find("figure"), 1, {
                            y: "-10%",
                            scale: .2,
                            ease: Expo.easeOut
                        }));
                        var t = new ScrollMagic.Scene({
                            triggerElement: f,
                            offset: 0,
                            duration: 3 * h,
                            triggerHook: 0,
                            reverse: !0
                        }).setClassToggle(f, "animate-in").setTween(e);
                        b.addScene(t), x.push(t), a(".image-animation").each(function() {
                            var e = a(this),
                                t = new TimelineMax;
                            t.add(TweenMax.fromTo(e.find(".image-animation__img"), 1, {
                                opacity: 0,
                                scale: 3,
                                ease: Expo.easeOut
                            }, {
                                opacity: 1,
                                scale: 1,
                                ease: Expo.easeOut
                            }));
                            var i = new ScrollMagic.Scene({
                                triggerElement: this,
                                offset: 0,
                                duration: 3 * h,
                                triggerHook: .1,
                                reverse: !0
                            }).setClassToggle(e, "animate-in").setTween(t);
                            b.addScene(i), x.push(i)
                        }), a(".image-animation-reverse").each(function() {
                            var e = a(this),
                                t = new TimelineMax;
                            t.add(TweenMax.fromTo(e.find(".image-animation__img"), 4, {
                                opacity: 1,
                                scale: 1,
                                ease: Expo.easeOut
                            }, {
                                opacity: 0,
                                scale: 4,
                                ease: Expo.easeOut
                            }));
                            var i = new ScrollMagic.Scene({
                                triggerElement: this,
                                offset: 200,
                                duration: 3 * h,
                                triggerHook: 0,
                                reverse: !0
                            }).setClassToggle(e, "animate-in").setTween(t);
                            b.addScene(i), x.push(i)
                        }), a(".animate-image").each(function() {
                            a(this);
                            var e = new ScrollMagic.Scene({
                                triggerElement: this,
                                duration: 0,
                                triggerHook: .6,
                                reverse: !0
                            }).setClassToggle(this, "animated");
                            b.addScene(e), x.push(e)
                        }), a(".text-animate").each(function() {
                            var e = a(this),
                                t = new TimelineMax;
                            t.add(TweenMax.fromTo(e, 1.8, {
                                opacity: 0,
                                y: "40%",
                                ease: Expo.easeOut
                            }, {
                                opacity: 1,
                                y: "0%",
                                ease: Expo.easeOut
                            }));
                            var i = new ScrollMagic.Scene({
                                triggerElement: this,
                                offset: 0,
                                duration: 0,
                                triggerHook: .8,
                                reverse: !0
                            }).setClassToggle(e, "animate-in").setTween(t);
                            b.addScene(i), x.push(i)
                        })
                    }(), c.easeScroll({
                        stepSize: 40
                    }), _.on("mousemove", function(e) {
                        $this = a(this), $tooltip = $this.parent().find(".painters__list-tooltip"), $tooltip.addClass("show"), TweenLite.to($tooltip, .3, {
                            x: e.offsetX,
                            y: e.offsetY,
                            ease: Expo.easeOut
                        })
                    }).on("mouseleave", function() {
                        a(".painters__list-tooltip").removeClass("show"), TweenLite.set(".painters__list-tooltip", {
                            clearProps: "all"
                        })
                    }), a(".slider").not(".slick-initialized").on("init", function(e, t) {
                        a(t.$slides.get(0)).addClass("animate-from-left")
                    }).slick({
                        slidesToShow: 1,
                        fade: !0,
                        arrows: !0,
                        speed: 300,
                        prevArrow: '<a class="slick-prev" href="#"><span class="icon-arrow arrow-left"></span></a>',
                        nextArrow: '<a class="slick-next" href="#"><span class="icon-arrow arrow-right"></span></a>',
                        dots: !0,
                        customPaging: function(e, t) {
                            return '<a href="#"></a>'
                        }
                    }).on("beforeChange", function(e, t, i, n) {
                        var r = a(t.$slides.get(n));
                        0 === i && n === t.$slides.length - 1 ? A(r) : i < n || i === t.$slides.length - 1 && 0 === n ? P(r) : A(r)
                    }), a("[data-goto]").on("click", function(e) {
                        var t, i = a(this),
                            n = i.attr("data-goto");
                        i.blur(), t = a(n).offset().top, TweenLite.to(window, 2, {
                            scrollTo: {
                                y: t,
                                autoKill: !1
                            },
                            ease: Power2.easeInOut
                        })
                    }), S(), c.hasClass("no-touch") && (document.addEventListener("mousemove", function(e) {
                        TweenLite.to(g, .3, {
                            x: e.clientX,
                            y: e.clientY,
                            ease: Expo.easeOut
                        })
                    }), v.on("mouseenter", k(function() {
                        m.addClass("hover")
                    })).on("mouseleave", k(function() {
                        m.removeClass("hover")
                    })), a(".slick-next, .slick-prev, ul.slick-dots li").on("mouseenter", k(function() {
                        m.addClass("hover")
                    })).on("mouseleave", k(function() {
                        m.removeClass("hover")
                    }))),
                    function() {
                        $(a("#video-modal__one")), $(a("#video-modal__two")), $(a("#video-modal__three")), $(a("#video-modal__four"));
                        var e = new TimelineMax({
                            paused: !0,
                            reverse: !0,
                            onComplete: function() {
                                a(w).play(), a(w).addClass("is-playing-video")
                            },
                            onReverseComplete: function() {
                                a(w).pause(), a(w).removeClass("is-playing-video"), w = ""
                            }
                        });
                        e.add("start").set("html", {
                            "overflow-y": "hidden"
                        }, "start").to(".video-modal__intro", .5, {
                            y: 0,
                            ease: Expo.easeOut
                        }, "start").to(".video-modal", 1.5, {
                            y: 0,
                            ease: Expo.easeOut
                        }, "start+=0.2").to(".video-modal__close", .5, {
                            y: 0,
                            opacity: 1,
                            ease: Expo.easeOut
                        }, "start+=0.7"), a(".video-list__single-play").on("click", function() {
                            w = a(this).data("play"), e.timeScale(1.5), e.play()
                        }), a(".video-modal__close").on("click", function() {
                            e.timeScale(2), e.reverse()
                        }), a(".video-click").on("click", function() {
                            a(this), 1 === a(w).getPlayerState() ? a(w).pause() : a(w).play()
                        })
                    }()
            };
        d.ready(function() {
            M(),
                function(t) {
                    var i = [],
                        n = 0,
                        r = function() {};
                    t = "object" != typeof t ? [t] : t;

                    function e() {
                        ++n == t.length && r(i);
                        var e = parseInt(n / t.length * 100);
                        99 < e && (e = 100), TweenLite.to(".progress-bar", 1, {
                            x: e + "%",
                            ease: Power0.easeNone
                        })
                    }
                    for (var o = 0; o < t.length; o++) i[o] = new Image, i[o].src = t[o], i[o].onload = function() {
                        e()
                    }, i[o].onerror = function() {
                        e()
                    };
                    return {
                        done: function(e) {
                            r = e || r
                        }
                    }
                }, c.addClass("ready")
        }).on("click", "a", function(e) {
            var t = this.href;
            /#/.test(t) && T(e), t === window.location.href && (T(e), e.stopPropagation())
        }).on("keydown", function(e) {
            27 === e.keyCode && T(e), 39 === e.keyCode && T(e), 37 === e.keyCode && T(e)
        }).on("mousemove", ".video-list__single-play", function(e) {
            var t, i, n, r, o, s = a(this).find(".bold");
            s[0].getBoundingClientRect();
            t = (e.clientX - s[0].getBoundingClientRect().x - s.outerWidth()) / 100 * 50, i = (e.clientY - s[0].getBoundingClientRect().y - s.outerHeight()) / 100 * 80, n = s, r = t, o = i, TweenLite.to(n, 1, {
                x: 0,
                y: 0,
                ease: Expo.easeOut
            }), TweenLite.to(n, 1, {
                x: r,
                y: o,
                ease: Expo.easeOut
            })
        }).on("mouseleave", ".video-list__single-play", function(e) {
            var t, i = a(this).find(".bold");
            t = i, TweenLite.to(t, 1, {
                x: 0,
                y: 0,
                ease: Expo.easeOut
            })
        }), u.resize((r = function() {
            u.width(), h = u.height(), S()
        }, function() {
            var e = this,
                t = arguments,
                i = s && !l;
            clearTimeout(l), l = setTimeout(function() {
                l = null, s || r.apply(e, t)
            }, o), i && r.apply(e, t)
        })).scroll(S).scroll(k(function() {
            var e = u.scrollTop();
            C(e), E(e), O(e)
        }))
    }(jQuery, window, document);