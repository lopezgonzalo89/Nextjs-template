!(function (t) {
  function e(n) {
    if (i[n]) return i[n].exports
    var o = (i[n] = { i: n, l: !1, exports: {} })
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
  }
  var i = {}
  ;(e.m = t),
    (e.c = i),
    (e.i = function (t) {
      return t
    }),
    (e.d = function (t, i, n) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: n
        })
    }),
    (e.n = function (t) {
      var i =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return e.d(i, 'a', i), i
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (e.p = ''),
    e((e.s = 4))
})([
  function (t, e, i) {
    'use strict'
    i(2), i(1)
  },
  function (t, e, i) {
    'use strict'
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function')
    }
    var o =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e]
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
          }
          return t
        },
      r = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n)
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      })(),
      s = i(3),
      a = (function (t) {
        return t && t.__esModule ? t : { default: t }
      })(s),
      l = (function () {
        function t(e) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          if (
            (n(this, t),
            'addEventListener' in window &&
              !/MSIE 9/i.test(navigator.userAgent) &&
              !window.operamini)
          ) {
            if (
              ((this.defaultSettings = {
                html: !1,
                position: 'top',
                animation: 'shift',
                animateFill: !0,
                arrow: !1,
                delay: 0,
                hideDelay: 0,
                trigger: 'mouseenter focus',
                duration: 400,
                hideDuration: 400,
                interactive: !1,
                theme: 'dark',
                offset: 0,
                hideOnClick: !0,
                multiple: !1,
                followCursor: !1,
                inertia: !1,
                popperOptions: {}
              }),
              (this.settings = this._applyGlobalSettings(i)),
              (this.classNames = {
                popper: 'tippy-popper',
                tooltip: 'tippy-tooltip',
                content: 'tippy-tooltip-content'
              }),
              (this.tooltippedEls =
                e instanceof Element
                  ? [e]
                  : [].slice.call(document.querySelectorAll(e))),
              t.bus ||
                (t.bus = {
                  refs: [],
                  tooltippedEls: [],
                  poppers: [],
                  listeners: {}
                }),
              !t.bus.listeners.touchstart)
            ) {
              t.bus.listeners.touchstart = !0
              var o = function e() {
                ;(t.touchUser = !0),
                  document.body.classList.add('tippy-touch'),
                  window.removeEventListener('touchstart', e)
              }
              window.addEventListener('touchstart', o)
            }
            this._createTooltips(),
              t.bus.listeners.click || this._handleDocumentClick()
          }
        }
        return (
          r(t, [
            {
              key: '_closest',
              value: function (t, e) {
                if (!Element.prototype.matches)
                  if (t.matchesSelector)
                    Element.prototype.matches =
                      Element.prototype.matchesSelector
                  else if (t.webkitMatchesSelector)
                    Element.prototype.matches =
                      Element.prototype.webkitMatchesSelector
                  else if (t.mozMatchesSelector)
                    Element.prototype.matches =
                      Element.prototype.mozMatchesSelector
                  else {
                    if (!t.msMatchesSelector) return t
                    Element.prototype.matches =
                      Element.prototype.msMatchesSelector
                  }
                return (
                  Element.prototype.closest ||
                    (Element.prototype.closest = function (t) {
                      for (var e = this; e; ) {
                        if (e.matches(t)) return e
                        e = e.parentElement
                      }
                    }),
                  t.closest(e)
                )
              }
            },
            {
              key: '_applyGlobalSettings',
              value: function (t) {
                return (
                  'function' != typeof Object.assign &&
                    (Object.assign = function (t, e) {
                      for (
                        var i = Object(t), n = 1;
                        n < arguments.length;
                        n++
                      ) {
                        var o = arguments[n]
                        if (null != o)
                          for (var r in o)
                            Object.prototype.hasOwnProperty.call(o, r) &&
                              (i[r] = o[r])
                      }
                      return i
                    }),
                  (this.callbacks = {
                    beforeShown: t.beforeShown || new Function(),
                    shown: t.shown || new Function(),
                    beforeHidden: t.beforeHidden || new Function(),
                    hidden: t.hidden || new Function()
                  }),
                  Object.assign(this.defaultSettings, t)
                )
              }
            },
            {
              key: '_hideAllPoppers',
              value: function () {
                var e = this,
                  i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null
                t.bus.refs.forEach(function (t) {
                  document.body.contains(t.popper) &&
                    (i
                      ? t.popper !== i.popper && e.hide(t.popper)
                      : e.hide(t.popper))
                })
              }
            },
            {
              key: '_handleDocumentClick',
              value: function () {
                var e = this,
                  i = function (t) {
                    var i = e._closest(t, '[data-tooltipped]'),
                      n = e._closest(t, '.' + e.classNames.popper),
                      o = {}
                    return (
                      i
                        ? ((o.type = 'tooltippedEl'), (o.target = i))
                        : n
                        ? ((o.type = 'popper'), (o.target = n))
                        : (o = null),
                      o
                    )
                  },
                  n = function (e) {
                    var n = -1,
                      o = -1,
                      r = i(e)
                    return (
                      r &&
                        ('tooltippedEl' === r.type
                          ? (n = t.bus.tooltippedEls.indexOf(r.target))
                          : 'popper' === r.type &&
                            (o = t.bus.poppers.indexOf(r.target))),
                      { tooltippedElIndex: n, popperIndex: o }
                    )
                  },
                  o = function (i) {
                    var o = n(i.target),
                      r = o.tooltippedElIndex !== -1
                    if (
                      o.popperIndex !== -1 &&
                      t.bus.refs[o.popperIndex].settings.interactive
                    )
                      return
                    if (r) {
                      var s = t.bus.refs[o.tooltippedElIndex]
                      if (
                        !s.settings.multiple &&
                        (s.settings.trigger.indexOf('click') !== -1 ||
                          t.touchUser)
                      )
                        return void e._hideAllPoppers(s)
                      if (
                        !s.settings.hideOnClick ||
                        s.settings.trigger.indexOf('click') !== -1
                      )
                        return
                    }
                    e._hideAllPoppers()
                  }
                ;(t.bus.listeners.click = o),
                  document.addEventListener('click', o)
              }
            },
            {
              key: '_createPopperInstance',
              value: function (t, e, i) {
                var n = o({ placement: i.position }, i.popperOptions || {}, {
                  modifiers: o(
                    {},
                    i.popperOptions ? i.popperOptions.modifiers : {},
                    {
                      offset: o(
                        { offset: parseInt(i.offset) },
                        i.popperOptions && i.popperOptions.modifiers
                          ? i.popperOptions.modifiers.offset
                          : {}
                      )
                    }
                  )
                })
                document.body.appendChild(e)
                var r = new a.default(t, e, n)
                return (
                  r.disableEventListeners(), document.body.removeChild(e), r
                )
              }
            },
            {
              key: '_createPopperElement',
              value: function (t, e) {
                var i = document.createElement('div')
                i.setAttribute('class', this.classNames.popper)
                var n = document.createElement('div')
                if (
                  (n.setAttribute(
                    'class',
                    this.classNames.tooltip + ' ' + e.theme + ' leave'
                  ),
                  n.setAttribute('data-animation', e.animation),
                  e.arrow)
                ) {
                  var o = document.createElement('div')
                  o.setAttribute('x-arrow', ''), n.appendChild(o)
                }
                if (e.animateFill) {
                  n.setAttribute('data-animatefill', '')
                  var r = document.createElement('div')
                  r.setAttribute('class', 'leave'),
                    r.setAttribute('x-circle', ''),
                    n.appendChild(r)
                }
                e.inertia && n.setAttribute('data-inertia', '')
                var s = document.createElement('div')
                return (
                  s.setAttribute('class', this.classNames.content),
                  e.html
                    ? ((s.innerHTML = document.getElementById(
                        e.html.replace('#', '')
                      ).innerHTML),
                      i.classList.add('html-template'),
                      i.setAttribute('tabindex', '0'),
                      n.setAttribute('data-template-id', e.html))
                    : (s.innerHTML = t),
                  n.appendChild(s),
                  i.appendChild(n),
                  i
                )
              }
            },
            {
              key: '_applyIndividualSettings',
              value: function (t) {
                var e = t.getAttribute('data-html') || this.settings.html
                ;(e && 'false' !== e) || (e = !1)
                var i =
                    t.getAttribute('data-position') || this.settings.position,
                  n =
                    t.getAttribute('data-animation') || this.settings.animation,
                  o =
                    t.getAttribute('data-animatefill') ||
                    this.settings.animateFill
                'false' === o && (o = !1)
                var r = t.getAttribute('data-arrow') || this.settings.arrow
                r && 'false' !== r ? (o = !1) : (r = !1)
                var s = t.getAttribute('data-trigger') || this.settings.trigger
                s && (s = s.trim().split(' '))
                var a = t.getAttribute('data-theme') || this.settings.theme
                a && (a += '-theme')
                var l = parseInt(t.getAttribute('data-delay'))
                l || 0 === l || (l = this.settings.delay)
                var p = parseInt(t.getAttribute('data-hidedelay'))
                p || 0 === p || (p = this.settings.hideDelay)
                var f = parseInt(t.getAttribute('data-duration'))
                f || 0 === f || (f = this.settings.duration)
                var u = parseInt(t.getAttribute('data-hideduration'))
                u || 0 === u || (u = this.settings.hideDuration)
                var d =
                  t.getAttribute('data-interactive') ||
                  this.settings.interactive
                'false' === d && (d = !1)
                var c = parseInt(t.getAttribute('data-offset'))
                c || 0 === c || (c = this.settings.offset)
                var h =
                  t.getAttribute('data-hideonclick') ||
                  this.settings.hideOnClick
                'false' === h && (h = !1)
                var m =
                  t.getAttribute('data-multiple') || this.settings.multiple
                'false' === m && (m = !1)
                var v =
                  t.getAttribute('data-followcursor') ||
                  this.settings.followCursor
                'false' === v && (v = !1)
                var g = t.getAttribute('data-inertia') || this.settings.inertia
                return (
                  'false' === g && (g = !1),
                  {
                    html: e,
                    position: i,
                    animation: n,
                    animateFill: o,
                    arrow: r,
                    delay: l,
                    hideDelay: p,
                    trigger: s,
                    duration: f,
                    hideDuration: u,
                    interactive: d,
                    theme: a,
                    offset: c,
                    hideOnClick: h,
                    multiple: m,
                    followCursor: v,
                    inertia: g,
                    popperOptions: this.settings.popperOptions
                  }
                )
              }
            },
            {
              key: '_getEventListenerMethods',
              value: function (e, i, n) {
                var o = this,
                  r = function () {
                    if (n.delay) {
                      var t = setTimeout(function () {
                        return o.show(i, n.duration)
                      }, n.delay)
                      i.setAttribute('data-delay', t)
                    } else o.show(i, n.duration)
                  },
                  s = function () {
                    if (n.hideDelay) {
                      var t = setTimeout(function () {
                        return o.hide(i, n.hideDuration)
                      }, n.hideDelay)
                      i.setAttribute('data-hidedelay', t)
                    } else o.hide(i, n.hideDuration)
                  }
                return {
                  handleTrigger: function (t) {
                    if (
                      (n.interactive && t.target.classList.add('active'),
                      'click' === t.type &&
                        'visible' === i.style.visibility &&
                        n.hideOnClick)
                    )
                      return s()
                    r()
                  },
                  handleMouseleave: function (t) {
                    if (n.interactive) {
                      var r = function t(r) {
                        o._closest(r.target, '.' + o.classNames.popper) !== i &&
                          o._closest(r.target, '[data-tooltipped]') !== e &&
                          n.trigger.indexOf('click') === -1 &&
                          (document.removeEventListener('mousemove', t),
                          e.classList.remove('active'),
                          s())
                      }
                      return void document.addEventListener('mousemove', r)
                    }
                    s()
                  },
                  handleBlur: function (e) {
                    !t.touchUser &&
                      e.relatedTarget &&
                      (o._closest(e.relatedTarget, '.' + o.classNames.popper) ||
                        s())
                  }
                }
              }
            },
            {
              key: '_createTrigger',
              value: function (t, e, i, n) {
                if ('manual' !== t)
                  return (
                    e.addEventListener(t, i.handleTrigger),
                    n.push({ event: t, method: i.handleTrigger }),
                    'mouseenter' === t &&
                      (e.addEventListener('mouseleave', i.handleMouseleave),
                      n.push({
                        event: 'mouseleave',
                        method: i.handleMouseleave
                      })),
                    'focus' === t &&
                      (e.addEventListener('blur', i.handleBlur),
                      n.push({ event: 'blur', method: i.handleBlur })),
                    n
                  )
              }
            },
            {
              key: '_pushIntoTippyBus',
              value: function (e) {
                t.bus.refs.push(e),
                  t.bus.tooltippedEls.push(e.tooltippedEl),
                  t.bus.poppers.push(e.popper)
              }
            },
            {
              key: '_createTooltips',
              value: function () {
                var t = this
                this.tooltippedEls.forEach(function (e) {
                  var i = t._applyIndividualSettings(e),
                    n = e.getAttribute('title')
                  if ((null !== n && '' !== n) || i.html) {
                    e.setAttribute('data-tooltipped', ''),
                      e.setAttribute('data-original-title', n || 'html'),
                      e.removeAttribute('title')
                    var o = t._createPopperElement(n, i),
                      r = t._createPopperInstance(e, o, i),
                      s = t._getEventListenerMethods(e, o, i),
                      a = []
                    i.trigger.forEach(function (i) {
                      a = t._createTrigger(i, e, s, a)
                    }),
                      t._pushIntoTippyBus({
                        tooltippedEl: e,
                        popper: o,
                        settings: i,
                        listeners: a,
                        instance: r
                      })
                  }
                })
              }
            },
            {
              key: '_followCursor',
              value: function (e) {
                var i = t.bus.refs[t.bus.tooltippedEls.indexOf(this)],
                  n = i.settings.position,
                  o =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop,
                  r = Math.round(i.popper.offsetWidth / 2),
                  s = Math.round(i.popper.offsetHeight / 2),
                  a = e.clientX - r,
                  l = e.clientY + o - 50
                'left' === n
                  ? ((a = e.clientX - 2 * r - 10), (l = e.clientY + o - s))
                  : 'right' === n
                  ? ((a = e.clientX + 15), (l = e.clientY + o - s))
                  : 'bottom' === n && (l = e.clientY + o + 15),
                  (i.popper.style.WebkitTransform =
                    'translate3d(' + a + 'px, ' + l + 'px, 0)'),
                  (i.popper.style.transform =
                    'translate3d(' + a + 'px, ' + l + 'px, 0)')
              }
            },
            {
              key: 'getPopperElement',
              value: function (e) {
                try {
                  return t.bus.refs[t.bus.tooltippedEls.indexOf(e)].popper
                } catch (t) {
                  throw new Error(
                    '[Tippy error]: Element does not exist in any Tippy instances'
                  )
                }
              }
            },
            {
              key: 'show',
              value: function (e) {
                var i = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.defaultSettings.duration
                if (
                  (clearTimeout(e.getAttribute('data-hidedelay')),
                  'visible' !== e.style.visibility)
                ) {
                  this.callbacks.beforeShown(), (e.style.visibility = 'visible')
                  var o = t.bus.refs[t.bus.poppers.indexOf(e)],
                    r = e.querySelector('.' + this.classNames.tooltip),
                    s = e.querySelector('[x-circle]'),
                    a = e.querySelector('[x-arrow]')
                  if (
                    (document.body.appendChild(e),
                    o.settings.followCursor && !t.touchUser
                      ? o.hasFollowCursorListener ||
                        ((o.hasFollowCursorListener = !0),
                        o.tooltippedEl.addEventListener(
                          'mousemove',
                          this._followCursor
                        ))
                      : (o.instance.update(),
                        o.instance.enableEventListeners()),
                    getComputedStyle(e).opacity,
                    getComputedStyle(r).opacity,
                    a && getComputedStyle(a).opacity,
                    (r.style.WebkitTransitionDuration = n + 'ms'),
                    (r.style.transitionDuration = n + 'ms'),
                    r.classList.add('enter'),
                    r.classList.remove('leave'),
                    s)
                  ) {
                    var l = getComputedStyle(s)
                    l.WebkitTransformOrigin,
                      l.transformOrigin,
                      (s.style.WebkitTransitionDuration = n + 'ms'),
                      (s.style.transitionDuration = n + 'ms'),
                      s.classList.add('enter'),
                      s.classList.remove('leave')
                  }
                  var p = function () {
                    'hidden' !== e.style.visibility &&
                      (o.settings.trigger.indexOf('click') !== -1 && e.focus(),
                      i.callbacks.shown())
                  }
                  clearTimeout(o.showTimeout),
                    (o.showTimeout = setTimeout(p, n))
                }
              }
            },
            {
              key: 'hide',
              value: function (e) {
                var i = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.settings.hideDuration
                if (
                  (clearTimeout(e.getAttribute('data-delay')),
                  document.body.contains(e))
                ) {
                  this.callbacks.beforeHidden(), (e.style.visibility = 'hidden')
                  var o = t.bus.refs[t.bus.poppers.indexOf(e)],
                    r = e.querySelector('.' + this.classNames.tooltip),
                    s = e.querySelector('[x-circle]')
                  o.tooltippedEl.classList.remove('active'),
                    r.classList.add('leave'),
                    r.classList.remove('enter'),
                    s &&
                      (s.classList.add('leave'), s.classList.remove('enter')),
                    n === this.defaultSettings.hideDuration
                      ? r.style.transitionDuration
                        ? (n = parseInt(
                            r.style.transitionDuration.replace('ms', '')
                          ))
                        : r.style.WebkitTransitionDuration &&
                          (n = parseInt(
                            r.style.WebkitTransitionDuration.replace('ms', '')
                          ))
                      : ((r.style.WebkitTransitionDuration = n + 'ms'),
                        (r.style.transitionDuration = n + 'ms'),
                        s &&
                          ((s.style.WebkitTransitionDuration = n + 'ms'),
                          (s.style.transitionDuration = n + 'ms'))),
                    o.settings.html &&
                      o.settings.trigger.indexOf('click') !== -1 &&
                      o.tooltippedEl.focus()
                  var a = function () {
                    'visible' !== e.style.visibility &&
                      (o.hasFollowCursorListener &&
                        (o.tooltippedEl.removeEventListener(
                          'mousemove',
                          i._followCursor
                        ),
                        (o.hasFollowCursorListener = !1)),
                      document.body.contains(e) && document.body.removeChild(e),
                      o.instance.disableEventListeners(),
                      i.callbacks.hidden())
                  }
                  clearTimeout(o.hideTimeout),
                    (o.hideTimeout = setTimeout(a, n))
                }
              }
            },
            {
              key: 'destroy',
              value: function (e) {
                var i = t.bus.poppers.indexOf(e),
                  n = t.bus.refs[i]
                n.listeners.forEach(function (t) {
                  return n.tooltippedEl.removeEventListener(t.event, t.method)
                }),
                  n.instance.destroy(),
                  t.bus.poppers.splice(i, 1),
                  t.bus.tooltippedEls.splice(i, 1),
                  t.bus.refs.splice(i, 1)
              }
            }
          ]),
          t
        )
      })()
    ;(window.Tippy = l), (t.exports = l)
  },
  function (t, e) {},
  function (t, e, i) {
    /**!
     * @fileOverview Kickass library to create and place poppers near their reference elements.
     * @version 1.0.8
     * @license
     * Copyright (c) 2016 Federico Zivolo and contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    !(function (e, i) {
      t.exports = i()
    })(0, function () {
      'use strict'
      function t(t) {
        var e = t.offsetParent,
          i = e && e.nodeName
        return i && 'BODY' !== i && 'HTML' !== i
          ? e
          : window.document.documentElement
      }
      function e(t, e) {
        if (1 !== t.nodeType) return []
        var i = window.getComputedStyle(t, null)
        return e ? i[e] : i
      }
      function i(t) {
        return 'HTML' === t.nodeName ? t : t.parentNode || t.host
      }
      function n(t) {
        if (!t || ['HTML', 'BODY', '#document'].indexOf(t.nodeName) !== -1)
          return window.document.body
        var o = e(t),
          r = o.overflow,
          s = o.overflowX,
          a = o.overflowY
        return /(auto|scroll)/.test(r + a + s) ? t : n(i(t))
      }
      function o(t) {
        var n = t.nodeName
        return (
          'BODY' !== n &&
          'HTML' !== n &&
          ('fixed' === e(t, 'position') || o(i(t)))
        )
      }
      function r(e) {
        return o(t(e)) ? 'fixed' : 'absolute'
      }
      function s(t, e) {
        var i = 'x' === e ? 'Left' : 'Top',
          n = 'Left' === i ? 'Right' : 'Bottom'
        return (
          Number(t['border' + i + 'Width'].split('px')[0]) +
          Number(t['border' + n + 'Width'].split('px')[0])
        )
      }
      function a(t) {
        var i = navigator.appVersion.indexOf('MSIE 10') !== -1,
          n = void 0
        if (i)
          try {
            n = t.getBoundingClientRect()
          } catch (t) {
            n = {}
          }
        else n = t.getBoundingClientRect()
        var o = {
          left: n.left,
          top: n.top,
          right: n.right,
          bottom: n.bottom,
          width: n.right - n.left,
          height: n.bottom - n.top
        }
        if ('HTML' === t.nodeName && i) {
          var r = window.document.documentElement,
            a = r.scrollTop,
            l = r.scrollLeft
          ;(o.top -= a), (o.bottom -= a), (o.left -= l), (o.right -= l)
        }
        var p = n.width - (t.clientWidth || n.right - n.left),
          f = n.height - (t.clientHeight || n.bottom - n.top)
        if (p || f) {
          var u = e(t)
          ;(p -= s(u, 'x')), (f -= s(u, 'y'))
        }
        return (
          (o.right -= p), (o.width -= p), (o.bottom -= f), (o.height -= f), o
        )
      }
      function l(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'top',
          i = 'top' === e ? 'scrollTop' : 'scrollLeft',
          n = t.nodeName
        if ('BODY' === n || 'HTML' === n) {
          var o = window.document.documentElement
          return (window.document.scrollingElement || o)[i]
        }
        return t[i]
      }
      function p(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = l(e, 'top'),
          o = l(e, 'left'),
          r = i ? -1 : 1
        return (
          (t.top += n * r),
          (t.bottom += n * r),
          (t.left += o * r),
          (t.right += o * r),
          t
        )
      }
      function f(i, o) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = n(o),
          f = a(i),
          u = a(o),
          d = {
            top: f.top - u.top,
            left: f.left - u.left,
            bottom: f.top - u.top + f.height,
            right: f.left - u.left + f.width,
            width: f.width,
            height: f.height
          }
        r && !s
          ? (d = p(d, l, !0))
          : t(i).contains(l) && 'BODY' !== l.nodeName && (d = p(d, o))
        var c = e(o),
          h = Number(c.borderTopWidth.split('px')[0]),
          m = Number(c.borderLeftWidth.split('px')[0])
        return (d.top -= h), (d.bottom -= h), (d.left -= m), (d.right -= m), d
      }
      function u() {
        var t = window.document.body,
          e = window.document.documentElement
        return {
          height: Math.max(
            t.scrollHeight,
            t.offsetHeight,
            e.clientHeight,
            e.scrollHeight,
            e.offsetHeight
          ),
          width: Math.max(
            t.scrollWidth,
            t.offsetWidth,
            e.clientWidth,
            e.scrollWidth,
            e.offsetWidth
          )
        }
      }
      function d(t) {
        var e = void 0
        if ('HTML' === t.nodeName) {
          var i = u()
          e = { width: i.width, height: i.height, left: 0, top: 0 }
        } else e = { width: t.offsetWidth, height: t.offsetHeight, left: t.offsetLeft, top: t.offsetTop }
        return (e.right = e.left + e.width), (e.bottom = e.top + e.height), e
      }
      function c(e) {
        var i = d(e)
        if ('HTML' !== e.nodeName) {
          var n = t(e),
            o = c(n)
          return {
            width: i.offsetWidth,
            height: i.offsetHeight,
            left: i.left + o.left,
            top: i.top + o.top,
            right: i.right - o.right,
            bottom: i.bottom - o.bottom
          }
        }
        return i
      }
      function h(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'top',
          o = n(t),
          r = l(o, e)
        return ['BODY', 'HTML'].indexOf(o.nodeName) === -1 ? r + h(i(o), e) : r
      }
      function m(e, s, a) {
        var l = { top: 0, left: 0 },
          p = t(e)
        if ('viewport' === a) {
          var d = c(p),
            m = d.left,
            v = d.top,
            g = window.document.documentElement,
            b = g.clientWidth,
            y = g.clientHeight
          if ('fixed' === r(e)) (l.right = b), (l.bottom = y)
          else {
            l = {
              top: 0 - v,
              right: b - m + h(e, 'left'),
              bottom: y - v + h(e, 'top'),
              left: 0 - m
            }
          }
        } else {
          var w = void 0
          if (
            ((w =
              'scrollParent' === a
                ? n(i(e))
                : 'window' === a
                ? window.document.body
                : a),
            'BODY' === w.nodeName)
          ) {
            var E = u(),
              O = E.height,
              x = E.width
            ;(l.right = x), (l.bottom = O)
          } else l = f(w, p, o(e))
        }
        return (l.left += s), (l.top += s), (l.right -= s), (l.bottom -= s), l
      }
      function v(t, e, i) {
        if (t.indexOf('auto') === -1) return t
        var n = m(i, 0, 'scrollParent'),
          o = {
            top: e.top - n.top,
            right: n.right - e.right,
            bottom: n.bottom - e.bottom,
            left: e.left - n.left
          },
          r = Object.keys(o).sort(function (t, e) {
            return o[e] - o[t]
          })[0],
          s = t.split('-')[1]
        return r + (s ? '-' + s : '')
      }
      function g(t) {
        var e = !1,
          i = 0,
          n = document.createElement('span')
        return (
          new MutationObserver(function () {
            t(), (e = !1)
          }).observe(n, { attributes: !0 }),
          function () {
            e || ((e = !0), n.setAttribute('x-index', i), (i += 1))
          }
        )
      }
      function b(t) {
        var e = !1
        return function () {
          e ||
            ((e = !0),
            setTimeout(function () {
              ;(e = !1), t()
            }, Z))
        }
      }
      function y(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
      }
      function w(t, e, i) {
        if (Array.prototype.findIndex)
          return t.findIndex(function (t) {
            return t[e] === i
          })
        var n = y(t, function (t) {
          return t[e] === i
        })
        return t.indexOf(n)
      }
      function E(t) {
        return st({}, t, { right: t.left + t.width, bottom: t.top + t.height })
      }
      function O(t) {
        var e = window.getComputedStyle(t),
          i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
          n = parseFloat(e.marginLeft) + parseFloat(e.marginRight)
        return { width: t.offsetWidth + n, height: t.offsetHeight + i }
      }
      function x(t) {
        var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
        return t.replace(/left|right|bottom|top/g, function (t) {
          return e[t]
        })
      }
      function k(t, e, i, n) {
        n = n.split('-')[0]
        var o = O(e),
          r = { position: t, width: o.width, height: o.height },
          s = ['right', 'left'].indexOf(n) !== -1,
          a = s ? 'top' : 'left',
          l = s ? 'left' : 'top',
          p = s ? 'height' : 'width',
          f = s ? 'width' : 'height'
        return (
          (r[a] = i[a] + i[p] / 2 - o[p] / 2),
          (r[l] = n === l ? i[l] - o[f] : i[x(l)]),
          r
        )
      }
      function T(e, i, n) {
        var o = 'fixed' === e.position,
          r = e.isParentTransformed
        return f(n, t(o && r ? n : i), o, r)
      }
      function L(t) {
        for (
          var e = [!1, 'ms', 'webkit', 'moz', 'o'],
            i = t.charAt(0).toUpperCase() + t.slice(1),
            n = 0;
          n < e.length - 1;
          n++
        ) {
          var o = e[n],
            r = o ? '' + o + i : t
          if (void 0 !== window.document.body.style[r]) return r
        }
        return null
      }
      function A(t) {
        var e = {}
        return t && '[object Function]' === e.toString.call(t)
      }
      function C(t, e) {
        return t.some(function (t) {
          var i = t.name
          return t.enabled && i === e
        })
      }
      function S(t, e, i) {
        var n = y(t, function (t) {
          return t.name === e
        })
        return (
          !!n &&
          t.some(function (t) {
            return t.name === i && t.enabled && t.order < n.order
          })
        )
      }
      function M(t) {
        return '' !== t && !isNaN(parseFloat(t)) && isFinite(t)
      }
      function D(t) {
        return (
          'BODY' !== t.nodeName &&
          ('none' !== e(t, 'transform') || (i(t) ? D(i(t)) : t))
        )
      }
      function N(t, e) {
        return (
          window.removeEventListener('resize', e.updateBound),
          e.scrollParents.forEach(function (t) {
            t.removeEventListener('scroll', e.updateBound)
          }),
          (e.updateBound = null),
          (e.scrollParents = []),
          (e.scrollElement = null),
          (e.eventsEnabled = !1),
          e
        )
      }
      function P(t, e, i) {
        return (
          (void 0 === i ? t : t.slice(0, w(t, 'name', i))).forEach(function (
            t
          ) {
            t.enabled && A(t.function) && (e = t.function(e, t))
          }),
          e
        )
      }
      function _(t, e) {
        Object.keys(e).forEach(function (i) {
          e[i] !== !1 ? t.setAttribute(i, e[i]) : t.removeAttribute(i)
        })
      }
      function W(t, e) {
        Object.keys(e).forEach(function (i) {
          var n = ''
          ;['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(i) !==
            -1 &&
            M(e[i]) &&
            (n = 'px'),
            (t.style[i] = e[i] + n)
        })
      }
      function I(t, e, i, o) {
        var r = 'BODY' === t.nodeName,
          s = r ? window : t
        s.addEventListener(e, i, { passive: !0 }),
          r || I(n(s.parentNode), e, i, o),
          o.push(s)
      }
      function B(t, e, i, o) {
        ;(i.updateBound = o),
          window.addEventListener('resize', i.updateBound, { passive: !0 })
        var r = n(t)
        return (
          I(r, 'scroll', i.updateBound, i.scrollParents),
          (i.scrollElement = r),
          (i.eventsEnabled = !0),
          i
        )
      }
      function H(t, e) {
        var i = { position: t.offsets.popper.position },
          n = { 'x-placement': t.placement },
          o = Math.round(t.offsets.popper.left),
          r = Math.round(t.offsets.popper.top),
          s = L('transform')
        return (
          e.gpuAcceleration && s
            ? ((i[s] = 'translate3d(' + o + 'px, ' + r + 'px, 0)'),
              (i.top = 0),
              (i.left = 0),
              (i.willChange = 'transform'))
            : ((i.left = o), (i.top = r), (i.willChange = 'top, left')),
          W(t.instance.popper, st({}, i, t.styles)),
          _(t.instance.popper, st({}, n, t.attributes)),
          t.offsets.arrow && W(t.arrowElement, t.offsets.arrow),
          t
        )
      }
      function F(t, e, i, n, o) {
        var r = T(o, e, t)
        return (
          (i.placement = v(i.placement, r, e)),
          e.setAttribute('x-placement', i.placement),
          i
        )
      }
      function j(t, e) {
        if (!S(t.instance.modifiers, 'arrow', 'keepTogether'))
          return (
            console.warn(
              'WARNING: `keepTogether` modifier is required by arrow modifier in order to work, be sure to include it before `arrow`!'
            ),
            t
          )
        var i = e.element
        if ('string' == typeof i) {
          if (!(i = t.instance.popper.querySelector(i))) return t
        } else if (!t.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t
        var n = t.placement.split('-')[0],
          o = E(t.offsets.popper),
          r = t.offsets.reference,
          s = ['left', 'right'].indexOf(n) !== -1,
          a = s ? 'height' : 'width',
          l = s ? 'top' : 'left',
          p = s ? 'left' : 'top',
          f = s ? 'bottom' : 'right',
          u = O(i)[a]
        r[f] - u < o[l] && (t.offsets.popper[l] -= o[l] - (r[f] - u)),
          r[l] + u > o[f] && (t.offsets.popper[l] += r[l] + u - o[f])
        var d = r[l] + r[a] / 2 - u / 2,
          c = d - E(t.offsets.popper)[l]
        return (
          (c = Math.max(Math.min(o[a] - u, c), 0)),
          (t.arrowElement = i),
          (t.offsets.arrow = {}),
          (t.offsets.arrow[l] = c),
          (t.offsets.arrow[p] = ''),
          t
        )
      }
      function R(t) {
        return 'end' === t ? 'start' : 'start' === t ? 'end' : t
      }
      function Y(t, e) {
        if (C(t.instance.modifiers, 'inner')) return t
        if (t.flipped && t.placement === t.originalPlacement) return t
        var i = m(t.instance.popper, e.padding, e.boundariesElement),
          n = t.placement.split('-')[0],
          o = x(n),
          r = t.placement.split('-')[1] || '',
          s = []
        return (
          (s = 'flip' === e.behavior ? [n, o] : e.behavior),
          s.forEach(function (a, l) {
            if (n !== a || s.length === l + 1) return t
            ;(n = t.placement.split('-')[0]), (o = x(n))
            var p = E(t.offsets.popper),
              f = t.offsets.reference,
              u = Math.floor,
              d =
                ('left' === n && u(p.right) > u(f.left)) ||
                ('right' === n && u(p.left) < u(f.right)) ||
                ('top' === n && u(p.bottom) > u(f.top)) ||
                ('bottom' === n && u(p.top) < u(f.bottom)),
              c = u(p.left) < u(i.left),
              h = u(p.right) > u(i.right),
              m = u(p.top) < u(i.top),
              v = u(p.bottom) > u(i.bottom),
              g =
                ('left' === n && c) ||
                ('right' === n && h) ||
                ('top' === n && m) ||
                ('bottom' === n && v),
              b = ['top', 'bottom'].indexOf(n) !== -1,
              y =
                !!e.flipVariations &&
                ((b && 'start' === r && c) ||
                  (b && 'end' === r && h) ||
                  (!b && 'start' === r && m) ||
                  (!b && 'end' === r && v))
            ;(d || g || y) &&
              ((t.flipped = !0),
              (d || g) && (n = s[l + 1]),
              y && (r = R(r)),
              (t.placement = n + (r ? '-' + r : '')),
              (t.offsets.popper = k(
                t.instance.state.position,
                t.instance.popper,
                t.offsets.reference,
                t.placement
              )),
              (t = P(t.instance.modifiers, t, 'flip')))
          }),
          t
        )
      }
      function q(t) {
        var e = E(t.offsets.popper),
          i = t.offsets.reference,
          n = t.placement.split('-')[0],
          o = Math.floor,
          r = ['top', 'bottom'].indexOf(n) !== -1,
          s = r ? 'right' : 'bottom',
          a = r ? 'left' : 'top',
          l = r ? 'width' : 'height'
        return (
          e[s] < o(i[a]) && (t.offsets.popper[a] = o(i[a]) - e[l]),
          e[a] > o(i[s]) && (t.offsets.popper[a] = o(i[s])),
          t
        )
      }
      function U(t, e) {
        var i = t.placement,
          n = t.offsets.popper,
          o = void 0
        return (
          M(e.offset)
            ? (o = [e.offset, 0])
            : ((o = e.offset.split(' ')),
              (o = o.map(function (e, n) {
                var o = e.match(/(\d*\.?\d*)(.*)/),
                  r = +o[1],
                  s = o[2],
                  a = i.indexOf('right') !== -1 || i.indexOf('left') !== -1
                1 === n && (a = !a)
                var l = a ? 'height' : 'width'
                if (0 === s.indexOf('%')) {
                  var p = void 0
                  switch (s) {
                    case '%p':
                      p = t.offsets.popper
                      break
                    case '%':
                    case '$r':
                    default:
                      p = t.offsets.reference
                  }
                  return (E(p)[l] / 100) * r
                }
                if ('vh' === s || 'vw' === s) {
                  return (
                    (('vh' === s
                      ? Math.max(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : Math.max(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                    r
                  )
                }
                return 'px' === s ? +r : +e
              }))),
          t.placement.indexOf('left') !== -1
            ? ((n.top += o[0]), (n.left -= o[1] || 0))
            : t.placement.indexOf('right') !== -1
            ? ((n.top += o[0]), (n.left += o[1] || 0))
            : t.placement.indexOf('top') !== -1
            ? ((n.left += o[0]), (n.top -= o[1] || 0))
            : t.placement.indexOf('bottom') !== -1 &&
              ((n.left += o[0]), (n.top += o[1] || 0)),
          t
        )
      }
      function z(e, i) {
        var n = i.boundariesElement || t(e.instance.popper),
          o = m(e.instance.popper, i.padding, n)
        i.boundaries = o
        var r = i.priority,
          s = E(e.offsets.popper),
          a = {
            primary: function (t) {
              var e = s[t]
              return (
                s[t] < o[t] &&
                  !i.escapeWithReference &&
                  (e = Math.max(s[t], o[t])),
                rt({}, t, e)
              )
            },
            secondary: function (t) {
              var e = 'right' === t ? 'left' : 'top',
                n = s[e]
              return (
                s[t] > o[t] &&
                  !i.escapeWithReference &&
                  (n = Math.min(
                    s[e],
                    o[t] - ('right' === t ? s.width : s.height)
                  )),
                rt({}, e, n)
              )
            }
          }
        return (
          r.forEach(function (t) {
            var e = ['left', 'top'].indexOf(t) !== -1 ? 'primary' : 'secondary'
            s = st({}, s, a[e](t))
          }),
          (e.offsets.popper = s),
          e
        )
      }
      function G(t) {
        var e = t.placement,
          i = e.split('-')[0],
          n = e.split('-')[1]
        if (n) {
          var o = t.offsets.reference,
            r = E(t.offsets.popper),
            s = ['bottom', 'top'].indexOf(i) !== -1,
            a = s ? 'left' : 'top',
            l = s ? 'width' : 'height',
            p = { start: rt({}, a, o[a]), end: rt({}, a, o[a] + o[l] - r[l]) }
          t.offsets.popper = st({}, r, p[n])
        }
        return t
      }
      function X(t) {
        if (!S(t.instance.modifiers, 'hide', 'preventOverflow'))
          return (
            console.warn(
              'WARNING: preventOverflow modifier is required by hide modifier in order to work, be sure to include it before hide!'
            ),
            t
          )
        var e = t.offsets.reference,
          i = y(t.instance.modifiers, function (t) {
            return 'preventOverflow' === t.name
          }).boundaries
        if (
          e.bottom < i.top ||
          e.left > i.right ||
          e.top > i.bottom ||
          e.right < i.left
        ) {
          if (t.hide === !0) return t
          ;(t.hide = !0), (t.attributes['x-out-of-boundaries'] = '')
        } else {
          if (t.hide === !1) return t
          ;(t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1)
        }
        return t
      }
      function V(t) {
        var e = t.placement,
          i = e.split('-')[0],
          n = E(t.offsets.popper),
          o = E(t.offsets.reference),
          r = ['left', 'right'].indexOf(i) !== -1,
          s = ['top', 'left'].indexOf(i) === -1
        return (
          (n[r ? 'left' : 'top'] = o[e] - (s ? n[r ? 'width' : 'height'] : 0)),
          (t.placement = x(e)),
          (t.offsets.popper = E(n)),
          t
        )
      }
      for (
        var $ = ['native code', '[object MutationObserverConstructor]'],
          J = function (t) {
            return $.some(function (e) {
              return (t || '').toString().indexOf(e) > -1
            })
          },
          K = 'undefined' != typeof window,
          Q = ['Edge', 'Trident', 'Firefox'],
          Z = 0,
          tt = 0;
        tt < Q.length;
        tt += 1
      )
        if (K && navigator.userAgent.indexOf(Q[tt]) >= 0) {
          Z = 1
          break
        }
      var et = K && J(window.MutationObserver),
        it = et ? g : b,
        nt = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        },
        ot = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
          }
        })(),
        rt = function (t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (t[e] = i),
            t
          )
        },
        st =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e]
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
          },
        at = {
          computeAutoPlacement: v,
          debounce: it,
          findIndex: w,
          getBordersSize: s,
          getBoundaries: m,
          getBoundingClientRect: a,
          getClientRect: E,
          getOffsetParent: t,
          getOffsetRect: d,
          getOffsetRectRelativeToCustomParent: f,
          getOuterSizes: O,
          getParentNode: i,
          getPopperOffsets: k,
          getPosition: r,
          getReferenceOffsets: T,
          getScroll: l,
          getScrollParent: n,
          getStyleComputedProperty: e,
          getSupportedPropertyName: L,
          getTotalScroll: h,
          getWindowSizes: u,
          includeScroll: p,
          isFixed: o,
          isFunction: A,
          isModifierEnabled: C,
          isModifierRequired: S,
          isNative: J,
          isNumeric: M,
          isTransformed: D,
          removeEventListeners: N,
          runModifiers: P,
          setAttributes: _,
          setStyles: W,
          setupEventListeners: B
        },
        lt = {
          shift: { order: 100, enabled: !0, function: G },
          offset: { order: 200, enabled: !0, function: U, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            function: z,
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent'
          },
          keepTogether: { order: 400, enabled: !0, function: q },
          arrow: { order: 500, enabled: !0, function: j, element: '[x-arrow]' },
          flip: {
            order: 600,
            enabled: !0,
            function: Y,
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport'
          },
          inner: { order: 700, enabled: !1, function: V },
          hide: { order: 800, enabled: !0, function: X },
          applyStyle: {
            order: 900,
            enabled: !0,
            gpuAcceleration: !0,
            function: H,
            onLoad: F
          }
        },
        pt = {
          placement: 'bottom',
          eventsEnabled: !0,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: lt
        },
        ft = (function () {
          function t(e, i) {
            var n = this,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
            nt(this, t),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(n.update)
              }),
              (this.update = it(this.update.bind(this))),
              (this.options = st({}, t.Defaults, o)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
              }),
              (this.reference = e.jquery ? e[0] : e),
              (this.popper = i.jquery ? i[0] : i),
              (this.modifiers = Object.keys(t.Defaults.modifiers).map(function (
                e
              ) {
                return st({ name: e }, t.Defaults.modifiers[e])
              })),
              (this.modifiers = this.modifiers.map(function (t) {
                var e = (o.modifiers && o.modifiers[t.name]) || {}
                return st({}, t, e)
              })),
              o.modifiers &&
                ((this.options.modifiers = st(
                  {},
                  t.Defaults.modifiers,
                  o.modifiers
                )),
                Object.keys(o.modifiers).forEach(function (e) {
                  if (void 0 === t.Defaults.modifiers[e]) {
                    var i = o.modifiers[e]
                    ;(i.name = e), n.modifiers.push(i)
                  }
                })),
              (this.state.position = r(this.reference)),
              (this.modifiers = this.modifiers.sort(function (t, e) {
                return t.order - e.order
              })),
              this.modifiers.forEach(function (t) {
                t.enabled &&
                  A(t.onLoad) &&
                  t.onLoad(n.reference, n.popper, n.options, t, n.state)
              }),
              (this.state.isParentTransformed = D(this.popper.parentNode)),
              this.update()
            var s = this.options.eventsEnabled
            s && this.enableEventListeners(), (this.state.eventsEnabled = s)
          }
          return (
            ot(t, [
              {
                key: 'update',
                value: function () {
                  if (!this.state.isDestroyed) {
                    var t = {
                      instance: this,
                      styles: {},
                      attributes: {},
                      flipped: !1,
                      offsets: {}
                    }
                    ;(this.state.position = r(this.reference)),
                      W(this.popper, { position: this.state.position }),
                      (t.offsets.reference = T(
                        this.state,
                        this.popper,
                        this.reference
                      )),
                      (t.placement = v(
                        this.options.placement,
                        t.offsets.reference,
                        this.popper
                      )),
                      (t.originalPlacement = this.options.placement),
                      (t.offsets.popper = k(
                        this.state,
                        this.popper,
                        t.offsets.reference,
                        t.placement
                      )),
                      (t = P(this.modifiers, t)),
                      this.state.isCreated
                        ? this.options.onUpdate(t)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(t))
                  }
                }
              },
              {
                key: 'destroy',
                value: function () {
                  return (
                    (this.state.isDestroyed = !0),
                    C(this.modifiers, 'applyStyle') &&
                      (this.popper.removeAttribute('x-placement'),
                      (this.popper.style.left = ''),
                      (this.popper.style.position = ''),
                      (this.popper.style.top = ''),
                      (this.popper.style[L('transform')] = '')),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy &&
                      this.popper.parentNode.removeChild(this.popper),
                    this
                  )
                }
              },
              {
                key: 'enableEventListeners',
                value: function () {
                  this.state.eventsEnabled ||
                    (this.state = B(
                      this.reference,
                      this.options,
                      this.state,
                      this.scheduleUpdate
                    ))
                }
              },
              {
                key: 'disableEventListeners',
                value: function () {
                  this.state.eventsEnabled &&
                    (window.cancelAnimationFrame(this.scheduleUpdate),
                    (this.state = N(this.reference, this.state)))
                }
              }
            ]),
            t
          )
        })()
      return (
        (ft.Utils = at),
        (ft.placements = [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'right',
          'right-start',
          'right-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end'
        ]),
        (ft.Defaults = pt),
        ft
      )
    })
  },
  function (t, e, i) {
    t.exports = i(0)
  }
])
