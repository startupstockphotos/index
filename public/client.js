/******/ ;(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__ (moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault () {
            return module['default']
          }
        : /******/ function getModuleExports () {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './client/index.js')
  )
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './client/components/img.js':
      /*!**********************************!*\
  !*** ./client/components/img.js ***!
  \**********************************/
      /*! exports provided: img */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'img',
          function () {
            return img
          }
        )
        /* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! picoapp */ './node_modules/picoapp/dist/picoapp.es.js'
        )
        /* harmony import */ var vsbl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! vsbl */ './node_modules/vsbl/dist/vsbl.es.js'
        )

        var img = Object(picoapp__WEBPACK_IMPORTED_MODULE_0__['component'])(
          function (node, ctx) {
            var image = node.querySelector('img')
            var listener = Object(vsbl__WEBPACK_IMPORTED_MODULE_1__['default'])(
              node
            )(function () {
              var i = document.createElement('img')

              i.onload = function () {
                image.src = i.src
                image.style.opacity = 1
              }

              i.src = image.dataset.src
            })
            listener.update()
            return function () {
              listener && listener.destroy()
            }
          }
        )

        /***/
      },

    /***/ './client/index.js':
      /*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! operator */ './node_modules/operator/dist/operator.es.js'
        )
        /* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! picoapp */ './node_modules/picoapp/dist/picoapp.es.js'
        )
        /* harmony import */ var _client_components_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @/client/components/img */ './client/components/img.js'
        )

        var router = Object(operator__WEBPACK_IMPORTED_MODULE_0__['default'])(
          '#root'
        )
        var app = Object(picoapp__WEBPACK_IMPORTED_MODULE_1__['picoapp'])({
          img: _client_components_img__WEBPACK_IMPORTED_MODULE_2__['img']
        })
        app.mount()
        router.on('after', function (_ref) {
          var previousDocument = _ref.previousDocument,
            location = _ref.location
          document.head.replaceChild(
            previousDocument.getElementById('style'),
            document.getElementById('style')
          )
          document.title = previousDocument.title
          window.history.pushState({}, '', location)
          app.unmount()
          app.mount()
          window.scrollTo(0, 0)
          if (window.gtag) window.gtag('event', 'page_view')
        })

        /***/
      },

    /***/ './node_modules/operator/dist/operator.es.js':
      /*!***************************************************!*\
  !*** ./node_modules/operator/dist/operator.es.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        function n (n, t) {
          for (var e = 0, r = n.length; e < r; e++)
            if (!t(n[e], e, n)) return !1
          return !0
        }
        function t (n) {
          if ('/' === n) return n
          47 === n.charCodeAt(0) && (n = n.substring(1))
          var t = n.length - 1
          return 47 === n.charCodeAt(t) ? n.substring(0, t) : n
        }
        function e (n) {
          return '/' === (n = t(n)) ? ['/'] : n.split('/')
        }
        function r (n, t, e) {
          return (
            (t.val === (e = n[e]) && 0 === t.type) ||
            ('/' === e ? t.type > 1 : 0 !== t.type && (e || '').endsWith(t.end))
          )
        }
        function o (n) {
          if ('/' === n) return [{ old: n, type: 0, val: n, end: '' }]
          for (
            var e, r, o, a, i = t(n), c = -1, u = 0, l = i.length, s = [];
            ++c < l;

          )
            if (58 !== (e = i.charCodeAt(c)))
              if (42 !== e) {
                for (u = c; c < l && 47 !== i.charCodeAt(c); ) ++c
                s.push({ old: n, type: 0, val: i.substring(u, c), end: '' }),
                  (i = i.substring(c)),
                  (l -= c),
                  (c = u = 0)
              } else s.push({ old: n, type: 2, val: i.substring(c), end: '' })
            else {
              for (
                u = c + 1, o = 1, r = 0, a = '';
                c < l && 47 !== i.charCodeAt(c);

              )
                63 === (e = i.charCodeAt(c))
                  ? ((r = c), (o = 3))
                  : 46 === e && 0 === a.length && (a = i.substring((r = c))),
                  c++
              s.push({ old: n, type: o, val: i.substring(u, r || c), end: a }),
                (i = i.substring(c)),
                (l -= c),
                (c = 0)
            }
          return s
        }
        function a (n, t) {
          for (var r, o, a = 0, i = e(n), c = {}; a < t.length; a++)
            (o = t[a]),
              '/' !== (r = i[a]) &&
                void 0 !== r &&
                !1 | o.type &&
                (c[o.val] = r.replace(o.end, ''))
          return c
        }
        var i = new Map()
        function c (n) {
          return n.replace(window.location.origin, '')
        }
        function u (t, o) {
          var i = '',
            c = '',
            u = t.split(/#|\?/),
            l = u[0],
            s = u.slice(1)
          l = (l = l.replace(/\/$/g, '')) || '/'
          for (var f = 0; f < s.length; f++) {
            var h = t.split(s[f])[0]
            '?' === h[h.length - 1] && (c = s[f]),
              '#' === h[h.length - 1] && (i = s[f])
          }
          var d = (function (t, o) {
              for (
                var a, i, c = 0, u = e(t), l = u.length, s = r.bind(r, u);
                c < o.length;
                c++
              )
                if (
                  ((i = (a = o[c]).length) === l ||
                    (i < l && 2 === a[i - 1].type) ||
                    (i > l && 3 === a[i - 1].type)) &&
                  n(a, s)
                )
                  return a
              return []
            })(
              l,
              o.map(function (n) {
                return n.matcher
              })
            ),
            p = o.filter(function (n) {
              return n.path === d[0].old
            })[0]
          return d[0]
            ? Object.assign({}, p, {
                params: a(l, d),
                hash: i,
                search: c,
                pathname: l,
                location: t
              })
            : null
        }
        /* harmony default export */ __webpack_exports__['default'] = function (
          n,
          t
        ) {
          void 0 === t && (t = ['*'])
          var e,
            r = document.querySelector(n),
            a = [],
            l = {}
          ;(t = t
            .concat(t.indexOf('*') < 0 ? '*' : [])
            .reduce(function (n, t) {
              return 'function' == typeof t ? (a.push(t), n) : n.concat(t)
            }, [])
            .map(function (n) {
              return n.path
                ? Object.assign({}, n, { matcher: o(n.path) })
                : { path: n, matcher: o(n) }
            })),
            'scrollRestoration' in history &&
              (history.scrollRestoration = 'manual')
          var s = u(c(window.location.href), t),
            f = Object.assign({ previousDocument: null }, s)
          function h (n) {
            return l[n]
              ? l[n].map(function (n) {
                  return n(f)
                })
              : []
          }
          function d (n, t, e, o) {
            ;(f.previousDocument = n.cloneNode(!0)),
              Promise.all(
                a.concat(e.handler || []).map(function (n) {
                  return n(f)
                })
              ).then(function () {
                window.scrollTo(0, 0),
                  requestAnimationFrame(function () {
                    ;(r.innerHTML = t), h('after'), e.hash && h('hash')
                  })
              })
          }
          function p (t, e, r) {
            if (!e) return (window.location.href = t)
            fetch(t, { credentials: 'include' })
              .then(function (n) {
                return n.text()
              })
              .then(function (o) {
                var a = new window.DOMParser().parseFromString(o, 'text/html'),
                  c = [a, a.querySelector(n).innerHTML]
                i.set(t, c), r && r(c[0], c[1], e)
              })
          }
          function g (n, t, r) {
            ;(e = function () {
              var e = i.get(n)
              e && !1 !== t.cache ? d(e[0], e[1], t) : p(n, t, d)
            }),
              Object.assign(f, t),
              Promise.all(h('before')).then(e)
          }
          function v (n) {
            var e = c(n)
            return [e, u(e, t)]
          }
          return (
            document.body.addEventListener('click', function (n) {
              if (
                !(
                  n.ctrlKey ||
                  n.metaKey ||
                  n.altKey ||
                  n.shiftKey ||
                  n.defaultPrevented
                )
              ) {
                for (var t = n.target; t && (!t.href || 'A' !== t.nodeName); )
                  t = t.parentNode
                if (!t) return n
                var e = v(t.href),
                  r = e[0],
                  o = e[1]
                return o.ignore
                  ? n
                  : f.pathname === o.pathname && o.hash
                  ? (n.preventDefault(), Object.assign(f, o), h('hash'), n)
                  : window.location.origin !== t.origin ||
                    t.hasAttribute('download') ||
                    '_blank' === t.target ||
                    /^(?:mailto|tel):/.test(t.href) ||
                    t.classList.contains('no-ajax')
                  ? n
                  : (n.preventDefault(),
                    f.location !== r && g(r, o),
                    h('navigate'),
                    !1)
              }
            }),
            window.addEventListener('popstate', function (n) {
              if (n.target.location.pathname !== f.pathname)
                return (
                  g.apply(void 0, v(n.target.location.href).concat([!0])), !1
                )
            }),
            {
              get state () {
                return f
              },
              go: function (n) {
                ;(e = null), g.apply(void 0, v(n).concat([!1]))
              },
              load: function (n, t) {
                return p.apply(void 0, v(n).concat([t]))
              },
              on: function (n, t) {
                return (
                  (l[n] = l[n] ? l[n].concat(t) : [t]),
                  function () {
                    return l[n].slice(l[n].indexOf(t), 1)
                  }
                )
              }
            }
          )
        }
        //# sourceMappingURL=operator.es.js.map

        /***/
      },

    /***/ './node_modules/picoapp/dist/picoapp.es.js':
      /*!*************************************************!*\
  !*** ./node_modules/picoapp/dist/picoapp.es.js ***!
  \*************************************************/
      /*! exports provided: component, picoapp */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'component',
          function () {
            return u
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'picoapp',
          function () {
            return c
          }
        )
        var n = function (n) {
            if ('object' != typeof (t = n) || Array.isArray(t))
              throw 'state should be an object'
            var t
          },
          t = function (n, t, r, e) {
            return ((o = n),
            o.reduce(function (n, t, r) {
              return n.indexOf(t) > -1 ? n : n.concat(t)
            }, []))
              .reduce(function (n, r) {
                return n.concat(t[r] || [])
              }, [])
              .map(function (n) {
                return n(r, e)
              })
            var o
          }
        function r (r) {
          void 0 === r && (r = {})
          var e = {}
          return {
            getState: function () {
              return Object.assign({}, r)
            },
            hydrate: function (o) {
              return (
                n(o),
                Object.assign(r, o),
                function () {
                  var n = ['*'].concat(Object.keys(o))
                  t(n, e, r)
                }
              )
            },
            on: function (n, t) {
              return (
                (n = [].concat(n)).map(function (n) {
                  return (e[n] = (e[n] || []).concat(t))
                }),
                function () {
                  return n.map(function (n) {
                    return e[n].splice(e[n].indexOf(t), 1)
                  })
                }
              )
            },
            emit: function (o, u, c) {
              var i = ('*' === o ? [] : ['*']).concat(o)
              ;(u = 'function' == typeof u ? u(r) : u) &&
                (n(u), Object.assign(r, u), (i = i.concat(Object.keys(u)))),
                t(i, e, r, c)
            }
          }
        }
        r()
        var e = function (n) {
            return 'object' == typeof n && !Array.isArray(n)
          },
          o = function (n) {
            return 'function' == typeof n
          }
        function u (n) {
          return function (t, r) {
            var e = []
            return {
              subs: e,
              unmount: n(
                t,
                Object.assign({}, r, {
                  on: function (n, t) {
                    var o = r.on(n, t)
                    return e.push(o), o
                  }
                })
              ),
              node: t
            }
          }
        }
        function c (n, t, u) {
          void 0 === n && (n = {}),
            void 0 === t && (t = {}),
            void 0 === u && (u = [])
          var c = r(t),
            i = []
          return {
            on: c.on,
            emit: c.emit,
            getState: function () {
              return c.getState()
            },
            add: function (t) {
              if (!e(t)) throw 'components should be an object'
              Object.assign(n, t)
            },
            use: function (n) {
              if (!o(n)) throw 'plugins should be a function'
              u.push(n)
            },
            hydrate: function (n) {
              return c.hydrate(n)
            },
            mount: function (t) {
              void 0 === t && (t = 'data-component'), (t = [].concat(t))
              for (var r = 0; r < t.length; r++) {
                for (
                  var a = t[r],
                    f = [].slice.call(document.querySelectorAll('[' + a + ']')),
                    s = function () {
                      for (
                        var t = f.pop(),
                          r = t.getAttribute(a).split(/\s/),
                          s = 0;
                        s < r.length;
                        s++
                      ) {
                        var v = n[r[s]]
                        if (v) {
                          t.removeAttribute(a)
                          try {
                            var d = u.reduce(function (n, r) {
                                var o = r(t, c)
                                return e(o) ? Object.assign(n, o) : n
                              }, {}),
                              m = v(t, Object.assign({}, d, c))
                            o(m.unmount) && i.push(m)
                          } catch (n) {
                            console.error(n),
                              c.emit('error', { error: n }),
                              c.hydrate({ error: void 0 })
                          }
                        }
                      }
                    };
                  f.length;

                )
                  s()
                c.emit('mount')
              }
            },
            unmount: function () {
              for (var n = i.length - 1; n > -1; n--) {
                var t = i[n],
                  r = t.subs
                ;(0, t.unmount)(t.node),
                  r.map(function (n) {
                    return n()
                  }),
                  i.splice(n, 1)
              }
              c.emit('unmount')
            }
          }
        }
        //# sourceMappingURL=picoapp.es.js.map

        /***/
      },

    /***/ './node_modules/srraf/dist/srraf.es.js':
      /*!*********************************************!*\
  !*** ./node_modules/srraf/dist/srraf.es.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        var n,
          e,
          i,
          o,
          t,
          r,
          f,
          d,
          p,
          u = []
        function w (n, a) {
          return (
            (e = window.pageXOffset),
            (o = window.pageYOffset),
            (r = window.innerHeight),
            (d = window.innerWidth),
            void 0 === i && (i = e),
            void 0 === t && (t = o),
            void 0 === p && (p = d),
            void 0 === f && (f = r),
            (a || o !== t || e !== i || r !== f || d !== p) &&
              (!(function (n) {
                for (var w = 0; w < u.length; w++)
                  u[w](
                    { x: e, y: o, px: i, py: t, vh: r, pvh: f, vw: d, pvw: p },
                    n
                  )
              })(n),
              (i = e),
              (t = o),
              (f = r),
              (p = d)),
            requestAnimationFrame(w)
          )
        }
        /* harmony default export */ __webpack_exports__['default'] = function (
          e
        ) {
          return (
            u.indexOf(e) < 0 && u.push(e),
            (n = n || w(performance.now())),
            {
              update: function () {
                return w(performance.now(), !0), this
              },
              destroy: function () {
                u.splice(u.indexOf(e), 1)
              }
            }
          )
        }
        //# sourceMappingURL=srraf.es.js.map

        /***/
      },

    /***/ './node_modules/vsbl/dist/vsbl.es.js':
      /*!*******************************************!*\
  !*** ./node_modules/vsbl/dist/vsbl.es.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var srraf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! srraf */ './node_modules/srraf/dist/srraf.es.js'
        )
        /* harmony default export */ __webpack_exports__['default'] = function (
          r,
          o
        ) {
          return (
            void 0 === o && (o = {}),
            function (e, n) {
              var a = !1,
                i = parseFloat(
                  r.getAttribute('data-threshold') || o.threshold || 0
                )
              return Object(srraf__WEBPACK_IMPORTED_MODULE_0__['default'])(
                function () {
                  for (var t = [], o = arguments.length; o--; )
                    t[o] = arguments[o]
                  var d = t[0],
                    h = d.y,
                    l = d.vh,
                    p = r.getBoundingClientRect(),
                    u = p.top + h,
                    f = i >= 0.5 ? i : i * l,
                    v = u + p.height - f >= h && u + f <= h + l
                  v && !a
                    ? ((a = !0), e && e.apply(void 0, t))
                    : !v && a && ((a = !1), n && n.apply(void 0, t))
                }
              )
            }
          )
        }
        //# sourceMappingURL=vsbl.es.js.map

        /***/
      }

    /******/
  }
)
//# sourceMappingURL=client.js.map
