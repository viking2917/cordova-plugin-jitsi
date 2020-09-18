__d(
    function (g, r, i, a, m, e, d) {
        m.exports = {
            angry: [">:(", ">:-("],
            blush: [':")', ':-")'],
            broken_heart: ["</3", "<\\3"],
            confused: [":/", ":-/"],
            cry: [":'(", ":'-(", ":,(", ":,-("],
            frowning: [":(", ":-("],
            heart: ["<3"],
            imp: ["]:(", "]:-("],
            innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
            joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
            kissing: [":*", ":-*"],
            laughing: ["x-)", "X-)"],
            neutral_face: [":|", ":-|"],
            open_mouth: [":o", ":-o", ":O", ":-O"],
            rage: [":@", ":-@"],
            smile: [":D", ":-D"],
            smiley: [":)", ":-)"],
            smiling_imp: ["]:)", "]:-)"],
            sob: [":,'(", ":,'-(", ";(", ";-("],
            stuck_out_tongue: [":P", ":-P", ":p", ":-p"],
            sunglasses: ["8-)", "B-)"],
            sweat: [",:(", ",:-("],
            sweat_smile: [",:)", ",:-)"],
            unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
            wink: [";)", ";-)"],
        };
    },
    1327,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var s = t(r(d[1])),
            u = t(r(d[2])),
            o = t(r(d[3])),
            n = t(r(d[4])),
            p = t(r(d[5])),
            c = r(d[6]),
            f = r(d[7]),
            l = r(d[8]),
            v = (function (t) {
                function c() {
                    return (0, s.default)(this, c), (0, o.default)(this, (0, n.default)(c).apply(this, arguments));
                }
                return (
                    (0, p.default)(c, t),
                    (0, u.default)(c, [
                        {
                            key: "_getFormattedTimestamp",
                            value: function () {
                                return (0, f.getLocalizedDateFormatter)(new Date(this.props.message.timestamp)).format("H:mm");
                            },
                        },
                        {
                            key: "_getMessageText",
                            value: function () {
                                var t = this.props.message;
                                return t.messageType === l.MESSAGE_TYPE_ERROR ? this.props.t("chat.error", { error: t.message }) : t.message;
                            },
                        },
                        {
                            key: "_getPrivateNoticeMessage",
                            value: function () {
                                var t = this.props,
                                    s = t.message,
                                    u = t.t;
                                return u("chat.privateNotice", { recipient: s.messageType === l.MESSAGE_TYPE_LOCAL ? s.recipient : u("chat.you") });
                            },
                        },
                    ]),
                    c
                );
            })(c.PureComponent);
        e.default = v;
    },
    1328,
    [3, 4, 5, 6, 9, 10, 13, 615, 1323]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e._mapDispatchToProps = h), (e._mapStateToProps = M), (e.default = void 0);
        var n = t(r(d[1])),
            s = t(r(d[2])),
            c = t(r(d[3])),
            o = t(r(d[4])),
            l = t(r(d[5])),
            p = r(d[6]),
            u = r(d[7]),
            f = r(d[8]),
            v = r(d[9]),
            _ = r(d[10]),
            y = r(d[11]),
            b = (function (t) {
                function p() {
                    var t, s;
                    (0, n.default)(this, p);
                    for (var l = arguments.length, u = new Array(l), v = 0; v < l; v++) u[v] = arguments[v];
                    return (
                        ((s = (0, c.default)(this, (t = (0, o.default)(p)).call.apply(t, [this].concat(u)))).accessibilityLabel = "toolbar.accessibilityLabel.privateMessage"),
                        (s.icon = f.IconMessage),
                        (s.label = "toolbar.privateMessage"),
                        (s.toggledIcon = f.IconReply),
                        s
                    );
                }
                return (
                    (0, l.default)(p, t),
                    (0, s.default)(p, [
                        {
                            key: "_handleClick",
                            value: function () {
                                var t = this.props,
                                    n = t._participant;
                                (0, t._setPrivateMessageRecipient)(n);
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props.reply;
                            },
                        },
                    ]),
                    p
                );
            })(p.AbstractButton);
        function h(t) {
            return {
                _setPrivateMessageRecipient: function (n) {
                    t((0, y.setPrivateMessageRecipient)(n));
                },
            };
        }
        function M(t, n) {
            return { _participant: (0, v.getParticipantById)(t, n.participantID) };
        }
        var P = (0, u.translate)((0, _.connect)(M, h)(b));
        e.default = P;
    },
    1329,
    [3, 4, 5, 6, 9, 10, 1053, 615, 403, 540, 542, 1312]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var s = n(r(d[2])),
            l = n(r(d[3])),
            c = n(r(d[4])),
            o = n(r(d[5])),
            u = n(r(d[6])),
            p = n(r(d[7])),
            f = n(r(d[8])),
            h = r(d[9]),
            v = r(d[10]),
            _ = r(d[11]),
            y = r(d[12]),
            R = r(d[13]),
            T = t(r(d[14])),
            C = (function (t) {
                function n() {
                    return (0, l.default)(this, n), (0, o.default)(this, (0, u.default)(n).apply(this, arguments));
                }
                return (
                    (0, p.default)(n, t),
                    (0, c.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t._privateMessageRecipient,
                                    s = t._styles;
                                if (!n) return null;
                                var l = this.props.t;
                                return f.default.createElement(
                                    h.View,
                                    { style: s.messageRecipientContainer },
                                    f.default.createElement(h.Text, { style: s.messageRecipientText }, l("chat.messageTo", { recipient: n })),
                                    f.default.createElement(
                                        h.TouchableHighlight,
                                        { onPress: this.props._onRemovePrivateMessageRecipient },
                                        f.default.createElement(y.Icon, { src: y.IconCancelSelection, style: s.messageRecipientCancelIcon })
                                    )
                                );
                            },
                        },
                    ]),
                    n
                );
            })(T.default);
        var P = (0, _.translate)(
            (0, R.connect)(function (t) {
                return (0, s.default)({}, (0, T._mapStateToProps)(t), { _styles: v.ColorSchemeRegistry.get(t, "Chat") });
            }, T._mapDispatchToProps)(C)
        );
        e.default = P;
    },
    1330,
    [2, 3, 54, 4, 5, 6, 9, 10, 13, 17, 925, 615, 403, 542, 1331]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapDispatchToProps = function (t) {
                return {
                    _onRemovePrivateMessageRecipient: function () {
                        t((0, f.setPrivateMessageRecipient)());
                    },
                };
            }),
            (e._mapStateToProps = function (t) {
                var n = t["features/chat"].privateMessageRecipient;
                return { _privateMessageRecipient: n ? (0, c.getParticipantDisplayName)(t, n.id) : void 0 };
            }),
            (e.default = void 0);
        var n = t(r(d[1])),
            u = t(r(d[2])),
            o = t(r(d[3])),
            s = t(r(d[4])),
            p = r(d[5]),
            c = r(d[6]),
            f = r(d[7]),
            v = (function (t) {
                function p() {
                    return (0, n.default)(this, p), (0, u.default)(this, (0, o.default)(p).apply(this, arguments));
                }
                return (0, s.default)(p, t), p;
            })(p.PureComponent);
        e.default = v;
    },
    1331,
    [3, 4, 6, 9, 10, 13, 540, 1312]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            l = t(r(d[3])),
            u = t(r(d[4])),
            s = t(r(d[5])),
            c = r(d[6]),
            p = r(d[7]),
            h = r(d[8]),
            f = r(d[9]),
            _ = r(d[10]),
            y = r(d[11]),
            v = r(d[12]),
            C = (function (t) {
                function p() {
                    var t, o;
                    (0, n.default)(this, p);
                    for (var s = arguments.length, h = new Array(s), f = 0; f < s; f++) h[f] = arguments[f];
                    return (
                        ((o = (0, l.default)(this, (t = (0, u.default)(p)).call.apply(t, [this].concat(h)))).accessibilityLabel = "toolbar.accessibilityLabel.chat"),
                        (o.icon = c.IconChat),
                        (o.label = "toolbar.chat"),
                        (o.toggledIcon = c.IconChatUnread),
                        o
                    );
                }
                return (
                    (0, s.default)(p, t),
                    (0, o.default)(p, [
                        {
                            key: "_handleClick",
                            value: function () {
                                var t = this;
                                this.props._showNamePrompt
                                    ? this.props._displayNameInputDialog(function () {
                                        t.props._displayChat();
                                    })
                                    : this.props._displayChat();
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return Boolean(this.props._unreadMessageCount);
                            },
                        },
                    ]),
                    p
                );
            })(f.AbstractButton);
        var b = (0, h.connect)(
            function (t) {
                return { _showNamePrompt: !(0, p.getLocalParticipant)(t).name, _unreadMessageCount: (0, v.getUnreadCount)(t) };
            },
            function (t) {
                return {
                    _displayChat: function () {
                        t((0, y.toggleChat)());
                    },
                    _displayNameInputDialog: function (n) {
                        t((0, _.openDisplayNamePrompt)(n));
                    },
                };
            }
        )(C);
        e.default = b;
    },
    1332,
    [3, 4, 5, 6, 9, 10, 403, 540, 542, 1053, 1077, 1312, 1325]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            s = t(r(d[3])),
            l = t(r(d[4])),
            u = t(r(d[5])),
            c = t(r(d[6])),
            f = r(d[7]),
            v = r(d[8]),
            p = r(d[9]),
            P = r(d[10]),
            _ = (function (t) {
                function v() {
                    return (0, n.default)(this, v), (0, s.default)(this, (0, l.default)(v).apply(this, arguments));
                }
                return (
                    (0, u.default)(v, t),
                    (0, o.default)(v, [
                        {
                            key: "render",
                            value: function () {
                                return c.default.createElement(f.ConfirmDialog, {
                                    cancelKey: "dialog.sendPrivateMessageCancel",
                                    contentKey: "dialog.sendPrivateMessage",
                                    okKey: "dialog.sendPrivateMessageOk",
                                    onCancel: this._onSendGroupMessage,
                                    onSubmit: this._onSendPrivateMessage,
                                });
                            },
                        },
                    ]),
                    v
                );
            })(P.AbstractChatPrivacyDialog),
            h = (0, v.translate)((0, p.connect)(P._mapStateToProps, P._mapDispatchToProps)(_));
        e.default = h;
    },
    1333,
    [3, 4, 5, 6, 9, 10, 13, 1079, 615, 542, 1334]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapDispatchToProps = function (t) {
                return {
                    _onSendMessage: function (n) {
                        t((0, _.sendMessage)(n, !0));
                    },
                    _onSetMessageRecipient: function (n) {
                        t((0, _.setPrivateMessageRecipient)(n));
                    },
                };
            }),
            (e._mapStateToProps = function (t, n) {
                return { _participant: (0, l.getParticipantById)(t, n.participantID) };
            }),
            (e.AbstractChatPrivacyDialog = void 0);
        var n = t(r(d[1])),
            s = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4])),
            p = t(r(d[5])),
            c = t(r(d[6])),
            f = r(d[7]),
            _ = r(d[8]),
            l = r(d[9]),
            v = (function (t) {
                function f(t) {
                    var s;
                    return (
                        (0, n.default)(this, f),
                        ((s = (0, o.default)(this, (0, u.default)(f).call(this, t)))._onSendGroupMessage = s._onSendGroupMessage.bind((0, c.default)((0, c.default)(s)))),
                        (s._onSendPrivateMessage = s._onSendPrivateMessage.bind((0, c.default)((0, c.default)(s)))),
                        s
                    );
                }
                return (
                    (0, p.default)(f, t),
                    (0, s.default)(f, [
                        {
                            key: "_onSendGroupMessage",
                            value: function () {
                                return this.props._onSendMessage(this.props.message), !0;
                            },
                        },
                        {
                            key: "_onSendPrivateMessage",
                            value: function () {
                                var t = this.props,
                                    n = t.message,
                                    s = t._onSendMessage;
                                return (0, t._onSetMessageRecipient)(t._participant), s(n), !0;
                            },
                        },
                    ]),
                    f
                );
            })(f.PureComponent);
        e.AbstractChatPrivacyDialog = v;
    },
    1334,
    [3, 4, 5, 6, 9, 10, 8, 13, 1312, 540]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            s = r(d[1]),
            n = r(d[2]),
            c = r(d[3]),
            o = r(d[4]),
            p = r(d[5]),
            f = r(d[6]),
            E = r(d[7]),
            u = r(d[8]),
            S = r(d[9]),
            M = r(d[10]),
            _ = r(d[11]),
            v = r(d[12]),
            P = 2e4;
        function N(t, s) {
            ("object" == typeof interfaceConfig && interfaceConfig.filmStripOnly) ||
                ("undefined" != typeof APP && !(0, E.isButtonEnabled)("chat")) ||
                s.getState()["features/base/config"].iAmRecorder ||
                (t.on(c.JitsiConferenceEvents.MESSAGE_RECEIVED, function (t, n, c, o) {
                    l(s, { id: t, message: n, nick: o, privateMessage: !1, timestamp: c });
                }),
                    t.on(c.JitsiConferenceEvents.PRIVATE_MESSAGE_RECEIVED, function (t, n, c) {
                        l(s, { id: t, message: n, privateMessage: !0, timestamp: c, nick: void 0 });
                    }),
                    t.on(c.JitsiConferenceEvents.CONFERENCE_ERROR, function (t, n) {
                        t === c.JitsiConferenceErrors.CHAT_ERROR && R(s, n);
                    }));
        }
        function R(t, s) {
            (0, t.dispatch)((0, S.addMessage)({ hasRead: !0, messageType: _.MESSAGE_TYPE_ERROR, message: s, privateMessage: !1, timestamp: Date.now() }));
        }
        function l(t, s) {
            var n = t.dispatch,
                c = t.getState,
                p = s.id,
                u = s.message,
                M = s.nick,
                v = s.privateMessage,
                P = s.timestamp,
                N = c(),
                R = N["features/chat"].isOpen;
            R || n((0, f.playSound)(_.INCOMING_MSG_SOUND_ID));
            var l = (0, o.getParticipantById)(N, p) || {},
                y = (0, o.getLocalParticipant)(c),
                A = l.name || M || (0, o.getParticipantDisplayName)(N, p),
                C = l.local || R,
                I = (P ? new Date(P) : new Date()).getTime();
            n((0, S.addMessage)({ displayName: A, hasRead: C, id: p, messageType: l.local ? _.MESSAGE_TYPE_LOCAL : _.MESSAGE_TYPE_REMOTE, message: u, privateMessage: v, recipient: (0, o.getParticipantDisplayName)(N, y.id), timestamp: I })),
                "undefined" != typeof APP && (APP.API.notifyReceivedChatMessage({ body: u, id: p, nick: A, ts: P }), n((0, E.showToolbox)(4e3)));
        }
        function y() {
            if ("ReactNative" !== navigator.product) {
                var t = document.getElementById("usermsg");
                t && t.focus();
            }
        }
        function A(t, s, n) {
            var c = t.dispatch,
                p = t.getState,
                f = (0, o.getLocalParticipant)(p),
                E = (0, o.getParticipantDisplayName)(p, f.id);
            c((0, S.addMessage)({ displayName: E, hasRead: !0, id: f.id, messageType: _.MESSAGE_TYPE_LOCAL, message: n, privateMessage: !0, recipient: (0, o.getParticipantDisplayName)(p, s), timestamp: Date.now() }));
        }
        function C(t, s) {
            if (!s.ignorePrivacy) {
                var n = t["features/chat"],
                    c = n.messages;
                if (!n.privateMessageRecipient && c.length) {
                    var o = "ReactNative" === navigator.product ? c[0] : c[c.length - 1];
                    if (o.messageType !== _.MESSAGE_TYPE_LOCAL) {
                        if (o.privateMessage) return o.id;
                        var p = Date.now(),
                            f = c.filter(function (t) {
                                return t.messageType !== _.MESSAGE_TYPE_LOCAL && t.privateMessage && t.timestamp + P > p;
                            }),
                            E = "ReactNative" === navigator.product ? f[0] : f[f.length - 1];
                        return E ? E.id : void 0;
                    }
                }
            }
        }
        p.MiddlewareRegistry.register(function (c) {
            return function (o) {
                return function (p) {
                    var E = c.dispatch;
                    switch (p.type) {
                        case t.APP_WILL_MOUNT:
                            E((0, f.registerSound)(_.INCOMING_MSG_SOUND_ID, v.INCOMING_MSG_SOUND_FILE));
                            break;
                        case t.APP_WILL_UNMOUNT:
                            E((0, f.unregisterSound)(_.INCOMING_MSG_SOUND_ID));
                            break;
                        case s.CONFERENCE_JOINED:
                            N(p.conference, c);
                            break;
                        case u.SEND_MESSAGE:
                            var S = c.getState(),
                                P = S["features/base/conference"].conference;
                            if (P) {
                                var R = C(S, p);
                                if (R) E((0, n.openDialog)(M.ChatPrivacyDialog, { message: p.message, participantID: R }));
                                else {
                                    "undefined" != typeof APP && APP.API.notifySendingChatMessage(p.message);
                                    var l = S["features/chat"].privateMessageRecipient;
                                    l ? (P.sendPrivateTextMessage(l.id, p.message), A(c, l.id, p.message)) : P.sendTextMessage(p.message);
                                }
                            }
                            break;
                        case u.SET_PRIVATE_MESSAGE_RECIPIENT:
                            y();
                    }
                    return o(p);
                };
            };
        }),
            p.StateListenerRegistry.register(
                function (t) {
                    return (0, s.getCurrentConference)(t);
                },
                function (t, s, n) {
                    var c = s.dispatch,
                        o = s.getState;
                    t !== n && (o()["features/chat"].isOpen && c((0, S.toggleChat)()), c((0, S.clearMessages)()));
                }
            ),
            p.StateListenerRegistry.register(
                function (t) {
                    return t["features/chat"].isOpen;
                },
                function (t, s) {
                    var n = s.dispatch;
                    "undefined" != typeof APP && t && n((0, E.showToolbox)());
                }
            );
    },
    1335,
    [819, 383, 1079, 388, 540, 542, 825, 1336, 1313, 1312, 1314, 1323, 1452]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
        var o = r(d[3]);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return o[t];
                    },
                });
        }),
            r(d[4]),
            r(d[5]);
    },
    1336,
    [1337, 1338, 1339, 1343, 1450, 1451]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.clearToolboxTimeout = function () {
                return { type: t.CLEAR_TOOLBOX_TIMEOUT };
            }),
            (e.setOverflowMenuVisible = function (o) {
                return { type: t.SET_OVERFLOW_MENU_VISIBLE, visible: o };
            }),
            (e.setToolbarHovered = function (o) {
                return { type: t.SET_TOOLBAR_HOVERED, hovered: o };
            }),
            (e.setToolboxAlwaysVisible = function (o) {
                return { type: t.SET_TOOLBOX_ALWAYS_VISIBLE, alwaysVisible: o };
            }),
            (e.setToolboxEnabled = function (o) {
                return { type: t.SET_TOOLBOX_ENABLED, enabled: o };
            }),
            (e.setToolboxTimeout = function (o, n) {
                return { type: t.SET_TOOLBOX_TIMEOUT, handler: o, timeoutMS: n };
            }),
            (e.setToolboxTimeoutMS = function (o) {
                return { type: t.SET_TOOLBOX_TIMEOUT_MS, timeoutMS: o };
            }),
            (e.setToolboxVisible = function (o) {
                return { type: t.SET_TOOLBOX_VISIBLE, visible: o };
            }),
            (e.toggleToolboxVisible = function () {
                return { type: t.TOGGLE_TOOLBOX_VISIBLE };
            });
        var t = r(d[0]);
    },
    1337,
    [1338]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.TOGGLE_TOOLBOX_VISIBLE = e.SET_TOOLBOX_VISIBLE = e.SET_TOOLBOX_TIMEOUT_MS = e.SET_TOOLBOX_TIMEOUT = e.SET_TOOLBOX_ENABLED = e.SET_TOOLBOX_ALWAYS_VISIBLE = e.SET_TOOLBAR_HOVERED = e.SET_OVERFLOW_MENU_VISIBLE = e.SET_FULL_SCREEN = e.FULL_SCREEN_CHANGED = e.CLEAR_TOOLBOX_TIMEOUT = void 0);
        e.CLEAR_TOOLBOX_TIMEOUT = "CLEAR_TOOLBOX_TIMEOUT";
        e.FULL_SCREEN_CHANGED = "FULL_SCREEN_CHANGED";
        e.SET_FULL_SCREEN = "SET_FULL_SCREEN";
        e.SET_OVERFLOW_MENU_VISIBLE = "SET_OVERFLOW_MENU_VISIBLE";
        e.SET_TOOLBAR_HOVERED = "SET_TOOLBAR_HOVERED";
        e.SET_TOOLBOX_ALWAYS_VISIBLE = "SET_TOOLBOX_ALWAYS_VISIBLE";
        e.SET_TOOLBOX_ENABLED = "SET_TOOLBOX_ENABLED";
        e.SET_TOOLBOX_TIMEOUT = "SET_TOOLBOX_TIMEOUT";
        e.SET_TOOLBOX_TIMEOUT_MS = "SET_TOOLBOX_TIMEOUT_MS";
        e.SET_TOOLBOX_VISIBLE = "SET_TOOLBOX_VISIBLE";
        e.TOGGLE_TOOLBOX_VISIBLE = "TOGGLE_TOOLBOX_VISIBLE";
    },
    1338,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 });
        var u = { AudioMuteButton: !0, HangupButton: !0, VideoMuteButton: !0 };
        Object.defineProperty(e, "AudioMuteButton", {
            enumerable: !0,
            get: function () {
                return o.default;
            },
        }),
            Object.defineProperty(e, "HangupButton", {
                enumerable: !0,
                get: function () {
                    return f.default;
                },
            }),
            Object.defineProperty(e, "VideoMuteButton", {
                enumerable: !0,
                get: function () {
                    return c.default;
                },
            });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(u, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return n[t];
                        },
                    }));
        });
        var o = t(r(d[2])),
            f = t(r(d[3])),
            c = t(r(d[4]));
    },
    1339,
    [3, 1340, 1344, 1345, 1449]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1340,
    [1341]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "Toolbox", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
        var n = t(r(d[1]));
    },
    1341,
    [3, 1342]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = l(r(d[2])),
            n = l(r(d[3])),
            s = l(r(d[4])),
            u = l(r(d[5])),
            y = l(r(d[6])),
            f = l(r(d[7])),
            c = l(r(d[8])),
            h = t(r(d[9])),
            v = r(d[10]),
            b = r(d[11]),
            _ = r(d[12]),
            E = r(d[13]),
            p = r(d[14]),
            S = (r(d[15]), r(d[16])),
            B = r(d[17]),
            C = r(d[18]),
            T = l(r(d[19])),
            x = l(r(d[20])),
            A = l(r(d[21])),
            k = l(r(d[22])),
            O = l(r(d[23])),
            F = (function (t) {
                function l() {
                    return (0, s.default)(this, l), (0, y.default)(this, (0, f.default)(l).apply(this, arguments));
                }
                return (
                    (0, c.default)(l, t),
                    (0, u.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                return h.default.createElement(E.Container, { style: k.default.toolbox, visible: this.props._visible }, this._renderToolbar());
                            },
                        },
                        {
                            key: "_getChatButtonToggledStyle",
                            value: function (t) {
                                var l = this.props._styles;
                                return Array.isArray(t.style) ? (0, n.default)({}, t, { style: (0, o.default)(t.style).concat([l.chatButtonOverride.toggled]) }) : (0, n.default)({}, t, { style: [t.style, l.chatButtonOverride.toggled] });
                            },
                        },
                        {
                            key: "_renderToolbar",
                            value: function () {
                                var t = this.props,
                                    l = t._chatEnabled,
                                    o = t._styles,
                                    n = o.buttonStyles,
                                    s = o.buttonStylesBorderless,
                                    u = o.hangupButtonStyles,
                                    y = o.toggledButtonStyles;
                                return h.default.createElement(
                                    v.View,
                                    { pointerEvents: "box-none", style: k.default.toolbar },
                                    l && h.default.createElement(S.ChatButton, { styles: s, toggledStyles: this._getChatButtonToggledStyle(y) }),
                                    !l && h.default.createElement(B.InviteButton, { styles: n, toggledStyles: y }),
                                    h.default.createElement(T.default, { styles: n, toggledStyles: y }),
                                    h.default.createElement(x.default, { styles: u }),
                                    h.default.createElement(O.default, { styles: n, toggledStyles: y }),
                                    h.default.createElement(A.default, { styles: s, toggledStyles: y })
                                );
                            },
                        },
                    ]),
                    l
                );
            })(h.PureComponent);
        var P = (0, p.connect)(function (t) {
            return { _chatEnabled: (0, _.getFeatureFlag)(t, _.CHAT_ENABLED, !0), _styles: b.ColorSchemeRegistry.get(t, "Toolbox"), _visible: (0, C.isToolboxVisible)(t) };
        })(F);
        e.default = P;
    },
    1342,
    [2, 3, 32, 54, 4, 5, 6, 9, 10, 13, 17, 925, 1152, 394, 542, 406, 1311, 1179, 1343, 1344, 1345, 1346, 1448, 1449]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isToolboxVisible = function (o) {
                var l = (0, t.toState)(o),
                    s = l["features/toolbox"],
                    n = s.alwaysVisible,
                    b = s.enabled,
                    u = s.visible,
                    f = l["features/base/participants"].length;
                return b && (n || u || 1 === f);
            });
        var t = r(d[0]);
    },
    1343,
    [542]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = t(r(d[1])),
            o = t(r(d[2])),
            n = t(r(d[3])),
            l = t(r(d[4])),
            s = t(r(d[5])),
            c = t(r(d[6])),
            f = t(r(d[7])),
            b = r(d[8]),
            h = r(d[9]),
            _ = r(d[10]),
            y = r(d[11]),
            p = r(d[12]),
            v = r(d[13]),
            A = r(d[14]),
            M = (function (t) {
                function h(t) {
                    var o;
                    return (
                        (0, u.default)(this, h),
                        ((o = (0, n.default)(this, (0, l.default)(h).call(this, t))).accessibilityLabel = "toolbar.accessibilityLabel.mute"),
                        (o.label = "toolbar.mute"),
                        (o.tooltip = "toolbar.mute"),
                        (o._onKeyboardShortcut = o._onKeyboardShortcut.bind((0, f.default)((0, f.default)(o)))),
                        o
                    );
                }
                return (
                    (0, c.default)(h, t),
                    (0, o.default)(h, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                "undefined" == typeof APP || APP.keyboardshortcut.registerShortcut("M", null, this._onKeyboardShortcut, "keyboardShortcuts.mute");
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                "undefined" == typeof APP || APP.keyboardshortcut.unregisterShortcut("M");
                            },
                        },
                        {
                            key: "_isAudioMuted",
                            value: function () {
                                return this.props._audioMuted;
                            },
                        },
                        {
                            key: "_onKeyboardShortcut",
                            value: function () {
                                (0, b.sendAnalytics)((0, b.createShortcutEvent)(b.AUDIO_MUTE, b.ACTION_SHORTCUT_TRIGGERED, { enable: !this._isAudioMuted() })), (0, s.default)((0, l.default)(h.prototype), "_handleClick", this).call(this);
                            },
                        },
                        {
                            key: "_setAudioMuted",
                            value: function (t) {
                                this.props.dispatch((0, A.muteLocal)(t));
                            },
                        },
                        {
                            key: "_isDisabled",
                            value: function () {
                                return this.props._disabled;
                            },
                        },
                    ]),
                    h
                );
            })(p.AbstractAudioMuteButton);
        var k = (0, h.translate)(
            (0, y.connect)(function (t) {
                var u = t["features/base/tracks"];
                return { _audioMuted: (0, v.isLocalTrackMuted)(u, _.MEDIA_TYPE.AUDIO), _disabled: t["features/base/config"].startSilent };
            })(M)
        );
        e.default = k;
    },
    1344,
    [3, 4, 5, 6, 9, 47, 10, 8, 385, 615, 754, 542, 1053, 803, 1309]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            u = t(r(d[3])),
            l = t(r(d[4])),
            c = t(r(d[5])),
            p = t(r(d[6])),
            s = r(d[7]),
            f = r(d[8]),
            h = r(d[9]),
            b = r(d[10]),
            v = r(d[11]),
            _ = (function (t) {
                function b(t) {
                    var o;
                    return (
                        (0, n.default)(this, b),
                        ((o = (0, u.default)(this, (0, l.default)(b).call(this, t))).accessibilityLabel = "toolbar.accessibilityLabel.hangup"),
                        (o.label = "toolbar.hangup"),
                        (o.tooltip = "toolbar.hangup"),
                        (o._hangup = p.default.once(function () {
                            (0, s.sendAnalytics)((0, s.createToolbarEvent)("hangup")), "ReactNative" === navigator.product ? o.props.dispatch((0, f.appNavigate)(void 0)) : o.props.dispatch((0, h.disconnect)(!0));
                        })),
                        o
                    );
                }
                return (
                    (0, c.default)(b, t),
                    (0, o.default)(b, [
                        {
                            key: "_doHangup",
                            value: function () {
                                this._hangup();
                            },
                        },
                    ]),
                    b
                );
            })(r(d[12]).AbstractHangupButton),
            y = (0, b.translate)((0, v.connect)()(_));
        e.default = y;
    },
    1345,
    [3, 4, 5, 6, 9, 10, 544, 385, 381, 1066, 615, 542, 1053]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            c = t(r(d[4])),
            u = t(r(d[5])),
            s = r(d[6]),
            f = r(d[7]),
            b = r(d[8]),
            h = r(d[9]),
            p = r(d[10]),
            v = t(r(d[11])),
            y = (function (t) {
                function f() {
                    var t, n;
                    (0, l.default)(this, f);
                    for (var u = arguments.length, s = new Array(u), h = 0; h < u; h++) s[h] = arguments[h];
                    return (
                        ((n = (0, o.default)(this, (t = (0, c.default)(f)).call.apply(t, [this].concat(s)))).accessibilityLabel = "toolbar.accessibilityLabel.moreActions"), (n.icon = b.IconMenuThumb), (n.label = "toolbar.moreActions"), n
                    );
                }
                return (
                    (0, u.default)(f, t),
                    (0, n.default)(f, [
                        {
                            key: "_handleClick",
                            value: function () {
                                this.props.dispatch((0, s.openDialog)(v.default));
                            },
                        },
                    ]),
                    f
                );
            })(p.AbstractButton),
            _ = (0, f.translate)((0, h.connect)()(y));
        e.default = _;
    },
    1346,
    [3, 4, 5, 6, 9, 10, 1079, 615, 403, 542, 1053, 1347]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l,
            o = n(r(d[2])),
            u = n(r(d[3])),
            s = n(r(d[4])),
            c = n(r(d[5])),
            f = n(r(d[6])),
            h = n(r(d[7])),
            p = n(r(d[8])),
            _ = t(r(d[9])),
            E = r(d[10]),
            S = n(r(d[11])),
            M = r(d[12]),
            w = r(d[13]),
            v = r(d[14]),
            b = r(d[15]),
            y = r(d[16]),
            C = (r(d[17]), r(d[18])),
            T = r(d[19]),
            B = r(d[20]),
            k = r(d[21]),
            O = r(d[22]),
            x = r(d[23]),
            D = r(d[24]),
            R = n(r(d[25])),
            I = n(r(d[26])),
            L = n(r(d[27])),
            P = n(r(d[28])),
            A = n(r(d[29])),
            F = n(r(d[30])),
            H = (function (t) {
                function n(t) {
                    var l;
                    return (
                        (0, u.default)(this, n),
                        ((l = (0, c.default)(this, (0, f.default)(n).call(this, t))).state = { scrolledToTop: !0, showMore: !1 }),
                        (l._onCancel = l._onCancel.bind((0, p.default)((0, p.default)(l)))),
                        (l._onSwipe = l._onSwipe.bind((0, p.default)((0, p.default)(l)))),
                        (l._onToggleMenu = l._onToggleMenu.bind((0, p.default)((0, p.default)(l)))),
                        (l._renderMenuExpandToggle = l._renderMenuExpandToggle.bind((0, p.default)((0, p.default)(l)))),
                        l
                    );
                }
                return (
                    (0, h.default)(n, t),
                    (0, s.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props._bottomSheetStyles,
                                    n = this.state.showMore,
                                    l = { afterClick: this._onCancel, showLabel: !0, styles: t.buttons },
                                    u = (0, o.default)({}, l, { afterClick: this._onToggleMenu, visible: !n });
                                return _.default.createElement(
                                    w.BottomSheet,
                                    { onCancel: this._onCancel, onSwipe: this._onSwipe, renderHeader: this._renderMenuExpandToggle },
                                    _.default.createElement(B.AudioRouteButton, l),
                                    _.default.createElement(T.InviteButton, l),
                                    _.default.createElement(I.default, l),
                                    _.default.createElement(P.default, l),
                                    _.default.createElement(L.default, u),
                                    _.default.createElement(
                                        S.default,
                                        { collapsed: !n },
                                        _.default.createElement(A.default, l),
                                        _.default.createElement(D.TileViewButton, l),
                                        this.props._recordingEnabled && _.default.createElement(k.RecordButton, l),
                                        _.default.createElement(k.LiveStreamButton, l),
                                        _.default.createElement(O.RoomLockButton, l),
                                        _.default.createElement(x.ClosedCaptionButton, l),
                                        _.default.createElement(C.SharedDocumentButton, l),
                                        _.default.createElement(R.default, l)
                                    )
                                );
                            },
                        },
                        {
                            key: "_renderMenuExpandToggle",
                            value: function () {
                                return _.default.createElement(
                                    E.View,
                                    { style: [this.props._bottomSheetStyles.sheet, F.default.expandMenuContainer] },
                                    _.default.createElement(E.TouchableOpacity, { onPress: this._onToggleMenu }, _.default.createElement(b.IconDragHandle, { style: this.props._bottomSheetStyles.expandIcon }))
                                );
                            },
                        },
                        {
                            key: "_onCancel",
                            value: function () {
                                return !!this.props._isOpen && (this.props.dispatch((0, w.hideDialog)(l)), !0);
                            },
                        },
                        {
                            key: "_onSwipe",
                            value: function (t) {
                                var n = this.state.showMore;
                                switch (t) {
                                    case "up":
                                        return !n && this.setState({ showMore: !0 }), !n;
                                    case "down":
                                        return n && this.setState({ showMore: !1 }), n;
                                }
                            },
                        },
                        {
                            key: "_onToggleMenu",
                            value: function () {
                                this.setState({ showMore: !this.state.showMore });
                            },
                        },
                    ]),
                    n
                );
            })(_.PureComponent);
        var N = (l = (0, y.connect)(function (t) {
            return { _bottomSheetStyles: M.ColorSchemeRegistry.get(t, "BottomSheet"), _isOpen: (0, w.isDialogOpen)(t, l), _recordingEnabled: "ios" !== E.Platform.OS || (0, v.getFeatureFlag)(t, v.IOS_RECORDING_ENABLED) };
        })(H));
        e.default = N;
    },
    1347,
    [2, 3, 54, 4, 5, 6, 9, 10, 8, 13, 17, 1348, 925, 1079, 1152, 403, 542, 406, 1353, 1179, 1233, 1363, 1111, 1044, 1421, 1443, 1444, 1445, 1446, 1447, 1448]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var s = n(r(d[2])),
            o = n(r(d[3])),
            l = n(r(d[4])),
            u = n(r(d[5])),
            h = n(r(d[6])),
            p = t(r(d[7])),
            c = n(r(d[8])),
            f = r(d[9]),
            v = r(d[10]),
            y = ["easeInOut", "easeOut", "easeIn"],
            H = (function (t) {
                function n(t) {
                    var o;
                    return (
                        (0, s.default)(this, n),
                        ((o = (0, l.default)(this, (0, u.default)(n).call(this, t))).contentHandle = null),
                        (o._handleRef = function (t) {
                            o.contentHandle = t;
                        }),
                        (o._handleLayoutChange = function (t) {
                            var n = t.nativeEvent.layout.height;
                            o.state.animating || o.props.collapsed || o.state.measuring || o.state.contentHeight === n || (o.state.height.setValue(n), o.setState({ contentHeight: n }));
                        }),
                        (o.state = { measuring: !1, measured: !1, height: new f.Animated.Value(t.collapsedHeight), contentHeight: 0, animating: !1 }),
                        o
                    );
                }
                return (
                    (0, h.default)(n, t),
                    (0, o.default)(n, [
                        {
                            key: "componentDidUpdate",
                            value: function (t) {
                                var n = this;
                                t.collapsed !== this.props.collapsed
                                    ? this.setState({ measured: !1 }, function () {
                                        return n._componentDidUpdate(t);
                                    })
                                    : this._componentDidUpdate(t);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this.unmounted = !0;
                            },
                        },
                        {
                            key: "_componentDidUpdate",
                            value: function (t) {
                                t.collapsed !== this.props.collapsed
                                    ? this._toggleCollapsed(this.props.collapsed)
                                    : this.props.collapsed && t.collapsedHeight !== this.props.collapsedHeight && this.state.height.setValue(this.props.collapsedHeight);
                            },
                        },
                        {
                            key: "_measureContent",
                            value: function (t) {
                                var n = this;
                                this.setState({ measuring: !0 }, function () {
                                    requestAnimationFrame(function () {
                                        n.contentHandle
                                            ? n.contentHandle.getNode().measure(function (s, o, l, u) {
                                                n.setState({ measuring: !1, measured: !0, contentHeight: u }, function () {
                                                    return t(u);
                                                });
                                            })
                                            : n.setState({ measuring: !1 }, function () {
                                                return t(n.props.collapsedHeight);
                                            });
                                    });
                                });
                            },
                        },
                        {
                            key: "_toggleCollapsed",
                            value: function (t) {
                                var n = this;
                                if (t) this._transitionToHeight(this.props.collapsedHeight);
                                else {
                                    if (!this.contentHandle) return void (this.state.measured && this._transitionToHeight(this.state.contentHeight));
                                    this._measureContent(function (t) {
                                        n._transitionToHeight(t);
                                    });
                                }
                            },
                        },
                        {
                            key: "_transitionToHeight",
                            value: function (t) {
                                var n = this,
                                    s = this.props.duration,
                                    o = this.props.easing;
                                if ("string" == typeof o) {
                                    for (var l, u = !1, h = 0; h < y.length; h++)
                                        if (((l = y[h]), o.substr(0, l.length) === l)) {
                                            (o = o.substr(l.length, 1).toLowerCase() + o.substr(l.length + 1)), (l = l.substr(4, 1).toLowerCase() + l.substr(5)), (o = f.Easing[l](f.Easing[o || "ease"])), (u = !0);
                                            break;
                                        }
                                    if ((u || (o = f.Easing[o]), !o)) throw new Error('Invalid easing type "' + this.props.easing + '"');
                                }
                                this._animation && this._animation.stop(),
                                    this.setState({ animating: !0 }),
                                    (this._animation = f.Animated.timing(this.state.height, { toValue: t, duration: s, easing: o }).start(function () {
                                        n.unmounted ||
                                            n.setState({ animating: !1 }, function () {
                                                n.unmounted || n.props.onAnimationEnd();
                                            });
                                    }));
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t.collapsed,
                                    s = t.enablePointerEvents,
                                    o = this.state,
                                    l = o.height,
                                    u = o.contentHeight,
                                    h = o.measuring,
                                    c = o.measured,
                                    v = !h && (c || n) && { overflow: "hidden", height: l },
                                    y = {};
                                return (
                                    h
                                        ? ((y.position = "absolute"), (y.opacity = 0))
                                        : "center" === this.props.align
                                            ? (y.transform = [{ translateY: l.interpolate({ inputRange: [0, u], outputRange: [u / -2, 0] }) }])
                                            : "bottom" === this.props.align && (y.transform = [{ translateY: l.interpolate({ inputRange: [0, u], outputRange: [-u, 0] }) }]),
                                    p.default.createElement(
                                        f.Animated.View,
                                        { style: v, pointerEvents: !s && n ? "none" : "auto" },
                                        p.default.createElement(f.Animated.View, { ref: this._handleRef, style: [this.props.style, y], onLayout: this.state.animating ? void 0 : this._handleLayoutChange }, this.props.children)
                                    )
                                );
                            },
                        },
                    ]),
                    n
                );
            })(p.Component);
        (e.default = H),
            (H.propTypes = {
                align: c.default.oneOf(["top", "center", "bottom"]),
                collapsed: c.default.bool,
                collapsedHeight: c.default.number,
                enablePointerEvents: c.default.bool,
                duration: c.default.number,
                easing: c.default.oneOfType([c.default.string, c.default.func]),
                style: v.ViewPropTypes.style,
                onAnimationEnd: c.default.func,
                children: c.default.node,
            }),
            (H.defaultProps = {
                align: "top",
                collapsed: !0,
                collapsedHeight: 0,
                enablePointerEvents: !1,
                duration: 300,
                easing: "easeOutCubic",
                onAnimationEnd: function () {
                    return null;
                },
            });
    },
    1348,
    [2, 3, 4, 5, 6, 9, 10, 13, 1349, 17, 1352]
);
__d(
    function (g, r, i, a, m, e, d) {
        m.exports = r(d[0])();
    },
    1349,
    [1350]
);
__d(
    function (g, r, i, a, m, e, d) {
        "use strict";
        var n = r(d[0]);
        function t() { }
        function o() { }
        (o.resetWarningCache = t),
            (m.exports = function () {
                function p(t, o, p, c, s, y) {
                    if (y !== n) {
                        var f = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw ((f.name = "Invariant Violation"), f);
                    }
                }
                function c() {
                    return p;
                }
                p.isRequired = p;
                var s = {
                    array: p,
                    bool: p,
                    func: p,
                    number: p,
                    object: p,
                    string: p,
                    symbol: p,
                    any: p,
                    arrayOf: c,
                    element: p,
                    elementType: p,
                    instanceOf: c,
                    node: p,
                    objectOf: c,
                    oneOf: c,
                    oneOfType: c,
                    shape: c,
                    exact: c,
                    checkPropTypes: o,
                    resetWarningCache: t,
                };
                return (s.PropTypes = s), s;
            });
    },
    1350,
    [1351]
);
__d(
    function (g, r, i, a, m, e, d) {
        "use strict";
        m.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    1351,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ViewPropTypes = void 0);
        var p = r(d[0]),
            o = p.ViewPropTypes || p.View.propTypes;
        e.ViewPropTypes = o;
    },
    1352,
    [17]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
        var o = r(d[3]);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return o[t];
                    },
                });
        }),
            r(d[4]),
            r(d[5]);
    },
    1353,
    [1354, 1355, 1356, 1358, 1361, 1362]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setDocumentEditingState = function (n) {
                return { type: t.SET_DOCUMENT_EDITING_STATUS, editing: n };
            }),
            (e.setDocumentUrl = function (n) {
                return { type: t.SET_DOCUMENT_URL, documentUrl: n };
            }),
            (e.toggleDocument = function () {
                return { type: t.TOGGLE_DOCUMENT_EDITING };
            });
        var t = r(d[0]);
    },
    1354,
    [1355]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.TOGGLE_DOCUMENT_EDITING = e.SET_DOCUMENT_URL = e.SET_DOCUMENT_EDITING_STATUS = void 0);
        e.SET_DOCUMENT_EDITING_STATUS = "SET_DOCUMENT_EDITING_STATUS";
        e.SET_DOCUMENT_URL = "SET_DOCUMENT_URL";
        e.TOGGLE_DOCUMENT_EDITING = "TOGGLE_DOCUMENT_EDITING";
    },
    1355,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "SharedDocument", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(e, "SharedDocumentButton", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var n = t(r(d[1])),
            u = t(r(d[2]));
    },
    1356,
    [3, 1357, 1360]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e._mapStateToProps = k), (e.default = void 0);
        var o = n(r(d[2])),
            l = n(r(d[3])),
            u = n(r(d[4])),
            s = n(r(d[5])),
            c = n(r(d[6])),
            f = n(r(d[7])),
            _ = n(r(d[8])),
            p = t(r(d[9])),
            h = r(d[10]),
            v = r(d[11]),
            y = r(d[12]),
            b = r(d[13]),
            w = r(d[14]),
            E = r(d[15]),
            C = r(d[16]),
            S = r(d[17]),
            L = t(r(d[18])),
            V = (function (t) {
                function n(t) {
                    var o;
                    return (
                        (0, l.default)(this, n),
                        ((o = (0, s.default)(this, (0, c.default)(n).call(this, t)))._onClose = o._onClose.bind((0, _.default)((0, _.default)(o)))),
                        (o._onError = o._onError.bind((0, _.default)((0, _.default)(o)))),
                        (o._renderLoading = o._renderLoading.bind((0, _.default)((0, _.default)(o)))),
                        o
                    );
                }
                return (
                    (0, f.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t._documentUrl,
                                    o = t._isOpen,
                                    l = this._getWebViewStyles();
                                return p.default.createElement(
                                    w.SlidingView,
                                    { onHide: this._onClose, position: "bottom", show: o },
                                    p.default.createElement(
                                        h.View,
                                        { style: L.default.webViewWrapper },
                                        p.default.createElement(w.HeaderWithNavigation, { headerLabelKey: "documentSharing.title", onPressBack: this._onClose }),
                                        p.default.createElement(h.SafeAreaView, { style: l }, p.default.createElement(v.WebView, { onError: this._onError, renderLoading: this._renderLoading, source: { uri: n }, startInLoadingState: !0 }))
                                    )
                                );
                            },
                        },
                        {
                            key: "_getWebViewStyles",
                            value: function () {
                                return (0, o.default)({}, L.default.webView, { backgroundColor: this.props._headerStyles.screenHeader.backgroundColor });
                            },
                        },
                        {
                            key: "_onClose",
                            value: function () {
                                var t = this.props,
                                    n = t._isOpen,
                                    o = t.dispatch;
                                return !!n && (o((0, C.toggleDocument)()), !0);
                            },
                        },
                        {
                            key: "_onError",
                            value: function () {
                                var t = this.props,
                                    n = t._isOpen,
                                    o = t.dispatch;
                                n && o((0, C.toggleDocument)());
                            },
                        },
                        {
                            key: "_renderLoading",
                            value: function () {
                                return p.default.createElement(h.View, { style: L.default.indicatorWrapper }, p.default.createElement(w.LoadingIndicator, { color: L.INDICATOR_COLOR, size: "large" }));
                            },
                        },
                    ]),
                    n
                );
            })(p.PureComponent);
        function k(t) {
            var n = t["features/etherpad"].editing;
            return { _documentUrl: (0, S.getSharedDocumentUrl)(t), _headerStyles: y.ColorSchemeRegistry.get(t, "Header"), _isOpen: n };
        }
        var O = (0, b.translate)((0, E.connect)(k)(V));
        e.default = O;
    },
    1357,
    [2, 3, 54, 4, 5, 6, 9, 10, 8, 13, 17, 1206, 925, 615, 394, 542, 1354, 1358, 1359]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getSharedDocumentUrl = function (n) {
                var o = (0, t.toState)(n),
                    u = o["features/etherpad"].documentUrl,
                    f = o["features/base/settings"].displayName;
                if (!u) return;
                var l = new URLSearchParams(s);
                f && l.append("userName", f);
                return u + "?" + l.toString();
            });
        var t = r(d[0]),
            s = { showControls: "true", showChat: "false", showLineNumbers: "true", useMonospaceFont: "false" };
    },
    1358,
    [542]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.INDICATOR_COLOR = void 0);
        var t = r(d[0]),
            l = t.ColorPalette.lightGrey;
        e.INDICATOR_COLOR = l;
        var o = { indicatorWrapper: { alignItems: "center", backgroundColor: t.ColorPalette.white, height: "100%", justifyContent: "center" }, webView: { flex: 1 }, webViewWrapper: { flex: 1, flexDirection: "column" } };
        e.default = o;
    },
    1359,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            l = t(r(d[2])),
            o = t(r(d[3])),
            c = t(r(d[4])),
            u = t(r(d[5])),
            s = r(d[6]),
            f = r(d[7]),
            b = r(d[8]),
            v = r(d[9]),
            p = r(d[10]),
            h = r(d[11]),
            _ = (function (t) {
                function f() {
                    var t, l;
                    (0, n.default)(this, f);
                    for (var u = arguments.length, s = new Array(u), v = 0; v < u; v++) s[v] = arguments[v];
                    return (
                        ((l = (0, o.default)(this, (t = (0, c.default)(f)).call.apply(t, [this].concat(s)))).accessibilityLabel = "toolbar.accessibilityLabel.document"),
                        (l.icon = b.IconShareDoc),
                        (l.label = "toolbar.documentOpen"),
                        (l.toggledLabel = "toolbar.documentClose"),
                        l
                    );
                }
                return (
                    (0, u.default)(f, t),
                    (0, l.default)(f, [
                        {
                            key: "_handleClick",
                            value: function () {
                                (0, s.sendAnalytics)((0, s.createToolbarEvent)("toggle.etherpad", { enable: !this.props._editing })), this.props.dispatch((0, h.toggleDocument)());
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props._editing;
                            },
                        },
                    ]),
                    f
                );
            })(p.AbstractButton);
        var y = (0, f.translate)(
            (0, v.connect)(function (t, n) {
                var l = t["features/etherpad"],
                    o = l.documentUrl,
                    c = l.editing,
                    u = n.visible;
                return { _editing: c, visible: void 0 === u ? Boolean(o) : u };
            })(_)
        );
        e.default = y;
    },
    1360,
    [3, 4, 5, 6, 9, 10, 385, 615, 403, 542, 1053, 1354]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            u = r(d[2]),
            s = t(r(d[3])),
            c = r(d[4]),
            o = r(d[5]);
        u.MiddlewareRegistry.register(function (t) {
            var n = t.dispatch,
                u = t.getState;
            return function (t) {
                return function (f) {
                    switch (f.type) {
                        case c.TOGGLE_DOCUMENT_EDITING:
                            if ("undefined" == typeof APP) {
                                var v = u()["features/etherpad"].editing;
                                n((0, o.setDocumentEditingState)(!v));
                            } else APP.UI.emitEvent(s.default.ETHERPAD_CLICKED);
                    }
                    return t(f);
                };
            };
        }),
            u.StateListenerRegistry.register(
                function (t) {
                    return (0, n.getCurrentConference)(t);
                },
                function (t, n, u) {
                    var s = n.dispatch,
                        c = n.getState;
                    t &&
                        t.addCommandListener("etherpad", function (t) {
                            var n,
                                u = t.value,
                                f = c()["features/base/config"].etherpad_base;
                            f && (n = new URL(u, f).toString());
                            s((0, o.setDocumentUrl)(n));
                        }),
                        u && s((0, o.setDocumentUrl)(void 0));
                }
            );
    },
    1361,
    [3, 383, 542, 874, 1355, 1354]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            u = r(d[3]),
            c = { documentUrl: void 0, editing: !1 };
        n.ReducerRegistry.register("features/etherpad", function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                l = arguments.length > 1 ? arguments[1] : void 0;
            switch (l.type) {
                case u.SET_DOCUMENT_EDITING_STATUS:
                    return (0, t.default)({}, n, { editing: l.editing });
                case u.SET_DOCUMENT_URL:
                    return (0, t.default)({}, n, { documentUrl: l.documentUrl });
                default:
                    return n;
            }
        });
    },
    1362,
    [3, 54, 542, 1355]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
        var o = r(d[3]);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return o[t];
                    },
                });
        }),
            r(d[4]),
            r(d[5]);
    },
    1363,
    [1364, 1366, 1377, 1376, 1418, 1420]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.clearRecordingSessions = function () {
                return { type: u.CLEAR_RECORDING_SESSIONS };
            }),
            (e.hidePendingRecordingNotification = function (t) {
                return function (n, o) {
                    var c = o()["features/recording"].pendingNotificationUids,
                        u = c[t];
                    u && (n((0, s.hideNotification)(u)), n(f(void 0, t)));
                };
            }),
            (e.setLiveStreamKey = function (t) {
                return { type: u.SET_STREAM_KEY, streamKey: t };
            }),
            (e.showPendingRecordingNotification = function (t) {
                return function (n) {
                    var u = t === c.default.constants.recording.mode.STREAM,
                        l = u ? { descriptionKey: "liveStreaming.pending", titleKey: "dialog.liveStreaming" } : { descriptionKey: "recording.pending", titleKey: "dialog.recording" },
                        S = (0, s.showNotification)((0, o.default)({ isDismissAllowed: !1 }, l));
                    n(S), n(f(S.uid, t));
                };
            }),
            (e.showRecordingError = function (t) {
                return (0, s.showErrorNotification)(t);
            }),
            (e.showStoppedRecordingNotification = function (t, n) {
                var o = t === c.default.constants.recording.mode.STREAM,
                    u = { name: n },
                    f = o
                        ? { descriptionKey: n ? "liveStreaming.offBy" : "liveStreaming.off", descriptionArguments: u, titleKey: "dialog.liveStreaming" }
                        : { descriptionKey: n ? "recording.offBy" : "recording.off", descriptionArguments: u, titleKey: "dialog.recording" };
                return (0, s.showNotification)(f, s.NOTIFICATION_TIMEOUT);
            }),
            (e.showStartedRecordingNotification = function (t, n) {
                var o = t === c.default.constants.recording.mode.STREAM,
                    u = { name: n },
                    f = o ? { descriptionKey: "liveStreaming.onBy", descriptionArguments: u, titleKey: "dialog.liveStreaming" } : { descriptionKey: "recording.onBy", descriptionArguments: u, titleKey: "dialog.recording" };
                return (0, s.showNotification)(f, s.NOTIFICATION_TIMEOUT);
            }),
            (e.updateRecordingSessionData = function (t) {
                var n = t.getStatus(),
                    o = n === c.JitsiRecordingConstants.status.ON ? Date.now() / 1e3 : void 0;
                return {
                    type: u.RECORDING_SESSION_UPDATED,
                    sessionData: { error: t.getError(), id: t.getID(), initiator: t.getInitiator(), liveStreamViewURL: t.getLiveStreamViewURL(), mode: t.getMode(), status: n, terminator: t.getTerminator(), timestamp: o },
                };
            });
        var o = n(r(d[2])),
            c = t(r(d[3])),
            s = r(d[4]),
            u = r(d[5]);
        function f(t, n) {
            return { type: u.SET_PENDING_RECORDING_NOTIFICATION_UID, streamType: n, uid: t };
        }
    },
    1364,
    [2, 3, 54, 388, 595, 1365]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SET_STREAM_KEY = e.SET_PENDING_RECORDING_NOTIFICATION_UID = e.RECORDING_SESSION_UPDATED = e.CLEAR_RECORDING_SESSIONS = void 0);
        e.CLEAR_RECORDING_SESSIONS = "CLEAR_RECORDING_SESSIONS";
        e.RECORDING_SESSION_UPDATED = "RECORDING_SESSION_UPDATED";
        e.SET_PENDING_RECORDING_NOTIFICATION_UID = "SET_PENDING_RECORDING_NOTIFICATION_UID";
        e.SET_STREAM_KEY = "SET_STREAM_KEY";
    },
    1365,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
    },
    1366,
    [1367, 1381, 1397]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1367,
    [1368]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "RecordingExpandedLabel", {
                enumerable: !0,
                get: function () {
                    return t.default;
                },
            }),
            Object.defineProperty(e, "RecordingLabel", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var t = n(r(d[1])),
            u = n(r(d[2]));
    },
    1368,
    [3, 1369, 1379]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            s = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4])),
            c = t(r(d[5])),
            l = r(d[6]),
            f = r(d[7]),
            p = r(d[8]),
            R = r(d[9]),
            _ = r(d[10]),
            C = r(d[11]),
            L = (function (t) {
                function l() {
                    return (0, n.default)(this, l), (0, o.default)(this, (0, u.default)(l).apply(this, arguments));
                }
                return (
                    (0, c.default)(l, t),
                    (0, s.default)(l, [
                        {
                            key: "_getColor",
                            value: function () {
                                switch (this.props.mode) {
                                    case f.JitsiRecordingConstants.mode.STREAM:
                                        return C.LIVE_LABEL_COLOR;
                                    case f.JitsiRecordingConstants.mode.FILE:
                                        return C.REC_LABEL_COLOR;
                                    default:
                                        return null;
                                }
                            },
                        },
                        {
                            key: "_getLabel",
                            value: function () {
                                var t = this.props,
                                    n = t._status,
                                    s = t.mode,
                                    o = t.t,
                                    u = "recording",
                                    c = "expandedOn";
                                switch (s) {
                                    case f.JitsiRecordingConstants.mode.STREAM:
                                        c = "liveStreaming";
                                        break;
                                    case f.JitsiRecordingConstants.mode.FILE:
                                        c = "recording";
                                }
                                switch (n) {
                                    case f.JitsiRecordingConstants.status.OFF:
                                        u = "expandedOff";
                                        break;
                                    case f.JitsiRecordingConstants.status.PENDING:
                                        u = "expandedPending";
                                        break;
                                    case f.JitsiRecordingConstants.status.ON:
                                        u = "expandedOn";
                                }
                                return o(c + "." + u);
                            },
                        },
                    ]),
                    l
                );
            })(p.ExpandedLabel);
        var v = (0, l.translate)(
            (0, R.connect)(function (t, n) {
                var s = n.mode;
                return { _status: (0, _.getSessionStatusToShow)(t, s) };
            })(L)
        );
        e.default = v;
    },
    1369,
    [3, 4, 5, 6, 9, 10, 615, 388, 1370, 542, 1376, 1378]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1370,
    [1371]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "CircularLabel", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(e, "ExpandedLabel", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var n = t(r(d[1])),
            u = t(r(d[2]));
    },
    1371,
    [3, 1372, 1375]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            s = t(r(d[2])),
            o = t(r(d[3])),
            l = t(r(d[4])),
            u = t(r(d[5])),
            f = t(r(d[6])),
            c = r(d[7]),
            p = r(d[8]),
            h = t(r(d[9])),
            v = t(r(d[10])),
            y = (function (t) {
                function h(t) {
                    var s;
                    return (0, n.default)(this, h), ((s = (0, o.default)(this, (0, l.default)(h).call(this, t))).state = { pulseAnimation: new c.Animated.Value(0) }), s;
                }
                return (
                    (0, u.default)(h, t),
                    (0, s.default)(h, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this._maybeToggleAnimation({}, this.props);
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (t) {
                                this._maybeToggleAnimation(t, this.props);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t.status,
                                    s = t.label,
                                    o = t.style,
                                    l = null;
                                switch (n) {
                                    case "in_progress":
                                        l = { opacity: this.state.pulseAnimation };
                                        break;
                                    case "off":
                                        l = v.default.labelOff;
                                }
                                return f.default.createElement(c.Animated.View, { style: [(0, p.combineStyles)(v.default.indicatorContainer, o), l] }, f.default.createElement(c.Text, { style: v.default.indicatorText }, s));
                            },
                        },
                        {
                            key: "_maybeToggleAnimation",
                            value: function (t, n) {
                                var s = t.status,
                                    o = n.status,
                                    l = this.state.pulseAnimation;
                                "in_progress" === o && "in_progress" !== s
                                    ? ((this.animationReference = c.Animated.loop(c.Animated.sequence([c.Animated.timing(l, { delay: 500, toValue: 1, useNativeDriver: !0 }), c.Animated.timing(l, { toValue: 0.3, useNativeDriver: !0 })]))),
                                        this.animationReference.start())
                                    : this.animationReference && "in_progress" !== o && "in_progress" === s && this.animationReference.stop();
                            },
                        },
                    ]),
                    h
                );
            })(h.default);
        e.default = y;
    },
    1372,
    [3, 4, 5, 6, 9, 10, 13, 17, 406, 1373, 1374]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = t(r(d[1])),
            n = t(r(d[2])),
            f = t(r(d[3])),
            l = t(r(d[4])),
            o = (function (t) {
                function o() {
                    return (0, u.default)(this, o), (0, n.default)(this, (0, f.default)(o).apply(this, arguments));
                }
                return (0, l.default)(o, t), o;
            })(r(d[5]).Component);
        e.default = o;
    },
    1373,
    [3, 4, 6, 9, 10, 13]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.LABEL_SIZE = e.LABEL_MARGIN = e.DEFAULT_COLOR = void 0);
        var o = r(d[0]);
        e.DEFAULT_COLOR = "#808080";
        e.LABEL_MARGIN = 5;
        e.LABEL_SIZE = 36;
        var t = (0, o.createStyleSheet)({
            expandedLabelArrow: { backgroundColor: o.ColorPalette.blue, height: 15, transform: [{ rotate: "45deg" }, { translateX: 10 }], width: 15 },
            expandedLabelContainer: { backgroundColor: o.ColorPalette.blue, borderColor: o.ColorPalette.blue, borderRadius: 6, marginHorizontal: o.BoxModel.margin, padding: o.BoxModel.padding },
            expandedLabelText: { color: o.ColorPalette.white },
            expandedLabelWrapper: { alignItems: "flex-end", flexDirection: "column" },
            indicatorContainer: { alignItems: "center", backgroundColor: "#808080", borderRadius: 18, borderWidth: 0, flex: 0, height: 36, justifyContent: "center", margin: 5, opacity: 0.6, width: 36 },
            indicatorText: { color: o.ColorPalette.white, fontSize: 12 },
            labelOff: { opacity: 0.3 },
        });
        e.default = t;
    },
    1374,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = n(r(d[2])),
            l = n(r(d[3])),
            u = n(r(d[4])),
            s = n(r(d[5])),
            f = n(r(d[6])),
            c = t(r(d[7])),
            p = r(d[8]),
            A = t(r(d[9])),
            L = (function (t) {
                function n(t) {
                    var l;
                    return (0, o.default)(this, n), ((l = (0, u.default)(this, (0, s.default)(n).call(this, t))).state = { opacityAnimation: new p.Animated.Value(0), showArrow: !1 }), l;
                }
                return (
                    (0, f.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var t = this;
                                p.Animated.decay(this.state.opacityAnimation, { toValue: 1, velocity: 1, useNativeDriver: !0 }).start(function (n) {
                                    n.finished && t.setState({ showArrow: !0 });
                                });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props.parentPosition - A.LABEL_MARGIN - A.LABEL_SIZE / 2;
                                return c.default.createElement(
                                    p.Animated.View,
                                    { style: [A.default.expandedLabelWrapper, { opacity: this.state.opacityAnimation }] },
                                    c.default.createElement(p.View, { style: [A.default.expandedLabelArrow, { backgroundColor: this._getColor() || A.DEFAULT_COLOR, marginRight: t + 0 }] }),
                                    c.default.createElement(
                                        p.View,
                                        { style: [A.default.expandedLabelContainer, { backgroundColor: this._getColor() || A.DEFAULT_COLOR }] },
                                        c.default.createElement(p.Text, { style: A.default.expandedLabelText }, this._getLabel())
                                    )
                                );
                            },
                        },
                        {
                            key: "_getColor",
                            value: function () {
                                return A.DEFAULT_COLOR;
                            },
                        },
                    ]),
                    n
                );
            })(c.Component);
        e.default = L;
    },
    1375,
    [2, 3, 4, 5, 6, 9, 10, 13, 17, 1374]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getActiveSession = function (n, s) {
                var o = n["features/recording"].sessionDatas,
                    u = t.JitsiRecordingConstants.status;
                return o.find(function (t) {
                    return t.mode === s && (t.status === u.ON || t.status === u.PENDING);
                });
            }),
            (e.getRecordingDurationEstimation = function (t) {
                return Math.floor((t || 0) / 10);
            }),
            (e.getSessionById = function (t, n) {
                return t["features/recording"].sessionDatas.find(function (t) {
                    return t.id === n;
                });
            }),
            (e.getSessionStatusToShow = function (t, s) {
                var o,
                    u = t["features/recording"].sessionDatas;
                if (Array.isArray(u))
                    for (var f = u, c = Array.isArray(f), S = 0, f = c ? f : f["function" == typeof Symbol ? Symbol.iterator : "@@iterator"](); ;) {
                        var I;
                        if (c) {
                            if (S >= f.length) break;
                            I = f[S++];
                        } else {
                            if ((S = f.next()).done) break;
                            I = S.value;
                        }
                        var R = I;
                        R.mode === s && (!o || n.RECORDING_STATUS_PRIORITIES.indexOf(R.status) > n.RECORDING_STATUS_PRIORITIES.indexOf(o)) && (o = R.status);
                    }
                return o;
            });
        var t = r(d[0]),
            n = r(d[1]);
    },
    1376,
    [388, 1377]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.RECORDING_STATUS_PRIORITIES = e.RECORDING_TYPES = e.RECORDING_ON_SOUND_ID = e.RECORDING_OFF_SOUND_ID = e.LIVE_STREAMING_ON_SOUND_ID = e.LIVE_STREAMING_OFF_SOUND_ID = void 0);
        var _ = r(d[0]);
        e.LIVE_STREAMING_OFF_SOUND_ID = "LIVE_STREAMING_OFF_SOUND";
        e.LIVE_STREAMING_ON_SOUND_ID = "LIVE_STREAMING_ON_SOUND";
        e.RECORDING_OFF_SOUND_ID = "RECORDING_OFF_SOUND";
        e.RECORDING_ON_SOUND_ID = "RECORDING_ON_SOUND";
        e.RECORDING_TYPES = { JITSI_REC_SERVICE: "recording-service", DROPBOX: "dropbox" };
        var O = [_.JitsiRecordingConstants.status.OFF, _.JitsiRecordingConstants.status.PENDING, _.JitsiRecordingConstants.status.ON];
        e.RECORDING_STATUS_PRIORITIES = O;
    },
    1377,
    [388]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.REC_LABEL_COLOR = e.LIVE_LABEL_COLOR = void 0);
        var o = r(d[0]),
            L = o.ColorPalette.blue;
        e.LIVE_LABEL_COLOR = L;
        var t = o.ColorPalette.red;
        e.REC_LABEL_COLOR = t;
        var l = (0, o.createStyleSheet)({ indicatorLive: { backgroundColor: L }, indicatorRecording: { backgroundColor: t } });
        e.default = l;
    },
    1378,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            s = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = s(r(d[2])),
            o = s(r(d[3])),
            u = s(r(d[4])),
            l = s(r(d[5])),
            c = s(r(d[6])),
            f = s(r(d[7])),
            p = r(d[8]),
            h = r(d[9]),
            _ = r(d[10]),
            b = r(d[11]),
            v = t(r(d[12])),
            R = s(r(d[13])),
            y = (function (t) {
                function s() {
                    return (0, n.default)(this, s), (0, u.default)(this, (0, l.default)(s).apply(this, arguments));
                }
                return (
                    (0, c.default)(s, t),
                    (0, o.default)(s, [
                        {
                            key: "_renderLabel",
                            value: function () {
                                var t;
                                switch (this.props.mode) {
                                    case _.JitsiRecordingConstants.mode.STREAM:
                                        t = R.default.indicatorLive;
                                        break;
                                    case _.JitsiRecordingConstants.mode.FILE:
                                        t = R.default.indicatorRecording;
                                        break;
                                    default:
                                        return null;
                                }
                                var s = "on";
                                switch (this.props._status) {
                                    case _.JitsiRecordingConstants.status.PENDING:
                                        s = "in_progress";
                                        break;
                                    case _.JitsiRecordingConstants.status.OFF:
                                        s = "off";
                                }
                                return f.default.createElement(h.CircularLabel, { label: this.props.t(this._getLabelKey()), status: s, style: t });
                            },
                        },
                    ]),
                    s
                );
            })(v.default),
            C = (0, p.translate)((0, b.connect)(v._mapStateToProps)(y));
        e.default = C;
    },
    1379,
    [2, 3, 4, 5, 6, 9, 10, 13, 615, 1370, 388, 542, 1380, 1378]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t, s) {
                var n = s.mode;
                return { _status: (0, p.getSessionStatusToShow)(t, n) };
            }),
            (e.default = void 0);
        var s = t(r(d[1])),
            n = t(r(d[2])),
            u = t(r(d[3])),
            o = t(r(d[4])),
            l = t(r(d[5])),
            c = r(d[6]),
            f = r(d[7]),
            p = r(d[8]),
            _ = (function (t) {
                function c(t) {
                    var o;
                    return (0, s.default)(this, c), ((o = (0, n.default)(this, (0, u.default)(c).call(this, t))).state = { staleLabel: !1 }), o._updateStaleStatus({}, t), o;
                }
                return (
                    (0, l.default)(c, t),
                    (0, o.default)(c, null, [
                        {
                            key: "getDerivedStateFromProps",
                            value: function (t, s) {
                                return { staleLabel: (t._status === f.JitsiRecordingConstants.status.OFF || !s.staleLabel) && s.staleLabel };
                            },
                        },
                    ]),
                    (0, o.default)(c, [
                        {
                            key: "componentDidUpdate",
                            value: function (t) {
                                this._updateStaleStatus(t, this.props);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return this.props._status && !this.state.staleLabel ? this._renderLabel() : null;
                            },
                        },
                        {
                            key: "_getLabelKey",
                            value: function () {
                                switch (this.props.mode) {
                                    case f.JitsiRecordingConstants.mode.STREAM:
                                        return "recording.live";
                                    case f.JitsiRecordingConstants.mode.FILE:
                                        return "recording.rec";
                                    default:
                                        return;
                                }
                            },
                        },
                        {
                            key: "_updateStaleStatus",
                            value: function (t, s) {
                                var n = this;
                                s._status === f.JitsiRecordingConstants.status.OFF &&
                                    t._status !== f.JitsiRecordingConstants.status.OFF &&
                                    setTimeout(function () {
                                        n.props._status === f.JitsiRecordingConstants.status.OFF && n.setState({ staleLabel: !0 });
                                    }, 1e4);
                            },
                        },
                    ]),
                    c
                );
            })(c.Component);
        e.default = _;
    },
    1380,
    [3, 4, 6, 9, 5, 10, 13, 388, 1376]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1381,
    [1382]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1382,
    [1383]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "LiveStreamButton", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(e, "StartLiveStreamDialog", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            }),
            Object.defineProperty(e, "StopLiveStreamDialog", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            });
        var n = t(r(d[1])),
            u = t(r(d[2])),
            o = t(r(d[3]));
    },
    1383,
    [3, 1384, 1386, 1395]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            u = n(r(d[3])),
            o = n(r(d[4])),
            f = n(r(d[5])),
            c = r(d[6]),
            v = r(d[7]),
            s = r(d[8]),
            p = t(r(d[9])),
            _ = (function (t) {
                function n() {
                    var t, f;
                    (0, l.default)(this, n);
                    for (var c = arguments.length, s = new Array(c), p = 0; p < c; p++) s[p] = arguments[p];
                    return ((f = (0, u.default)(this, (t = (0, o.default)(n)).call.apply(t, [this].concat(s)))).icon = v.IconLiveStreaming), f;
                }
                return (0, f.default)(n, t), n;
            })(p.default),
            h = (0, c.translate)((0, s.connect)(p._mapStateToProps)(_));
        e.default = h;
    },
    1384,
    [2, 3, 4, 6, 9, 10, 615, 403, 542, 1385]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t, n) {
                var l,
                    o = n.visible;
                if (void 0 === o) {
                    var s = t["features/base/config"],
                        u = s.enableFeaturesBasedOnToken,
                        v = s.liveStreamingEnabled,
                        S = (0, f.getLocalParticipant)(t),
                        p = S.features,
                        L = void 0 === p ? {} : p;
                    (o = v), u && ((o = o && "true" === String(L.livestreaming)), (l = "disabled" === String(L.livestreaming)));
                }
                return { _isLiveStreamRunning: Boolean((0, b.getActiveSession)(t, c.JitsiRecordingConstants.mode.STREAM)), disabledByFeatures: l, visible: o };
            }),
            (e.default = void 0);
        var n = t(r(d[1])),
            l = t(r(d[2])),
            o = t(r(d[3])),
            s = t(r(d[4])),
            u = t(r(d[5])),
            v = r(d[6]),
            c = r(d[7]),
            f = r(d[8]),
            S = r(d[9]),
            b = r(d[10]),
            p = r(d[11]),
            L = (function (t) {
                function c() {
                    var t, l;
                    (0, n.default)(this, c);
                    for (var u = arguments.length, v = new Array(u), f = 0; f < u; f++) v[f] = arguments[f];
                    return (
                        ((l = (0, o.default)(this, (t = (0, s.default)(c)).call.apply(t, [this].concat(v)))).accessibilityLabel = "dialog.accessibilityLabel.liveStreaming"),
                        (l.label = "dialog.startLiveStreaming"),
                        (l.toggledLabel = "dialog.stopLiveStreaming"),
                        l
                    );
                }
                return (
                    (0, u.default)(c, t),
                    (0, l.default)(c, [
                        {
                            key: "_handleClick",
                            value: function () {
                                var t = this.props,
                                    n = t._isLiveStreamRunning;
                                (0, t.dispatch)((0, v.openDialog)(n ? p.StopLiveStreamDialog : p.StartLiveStreamDialog));
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props._isLiveStreamRunning;
                            },
                        },
                    ]),
                    c
                );
            })(S.AbstractButton);
        e.default = L;
    },
    1385,
    [3, 4, 5, 6, 9, 10, 1079, 388, 540, 1053, 1376, 1382]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = n(r(d[2])),
            s = n(r(d[3])),
            u = n(r(d[4])),
            l = n(r(d[5])),
            c = n(r(d[6])),
            f = n(r(d[7])),
            h = n(r(d[8])),
            v = r(d[9]),
            y = r(d[10]),
            _ = r(d[11]),
            S = r(d[12]),
            K = r(d[13]),
            C = r(d[14]),
            b = t(r(d[15])),
            p = n(r(d[16])),
            k = n(r(d[17])),
            P = n(r(d[18])),
            E = n(r(d[19])),
            U = (function (t) {
                function n(t) {
                    var s;
                    return (
                        (0, o.default)(this, n),
                        ((s = (0, u.default)(this, (0, l.default)(n).call(this, t)))._onStreamKeyChangeNative = s._onStreamKeyChangeNative.bind((0, f.default)((0, f.default)(s)))),
                        (s._onStreamKeyPick = s._onStreamKeyPick.bind((0, f.default)((0, f.default)(s)))),
                        (s._onUserChanged = s._onUserChanged.bind((0, f.default)((0, f.default)(s)))),
                        s
                    );
                }
                return (
                    (0, c.default)(n, t),
                    (0, s.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return h.default.createElement(
                                    y.CustomSubmitDialog,
                                    { okKey: "dialog.startLiveStreaming", onCancel: this._onCancel, onSubmit: this._onSubmit },
                                    h.default.createElement(
                                        v.View,
                                        { style: E.default.startDialogWrapper },
                                        h.default.createElement(p.default, { onUserChanged: this._onUserChanged }),
                                        h.default.createElement(P.default, { broadcasts: this.state.broadcasts, onChange: this._onStreamKeyPick }),
                                        h.default.createElement(k.default, { onChange: this._onStreamKeyChangeNative, value: this.state.streamKey || this.props._streamKey })
                                    )
                                );
                            },
                        },
                        {
                            key: "_onStreamKeyChangeNative",
                            value: function (t) {
                                this.props.dispatch((0, C.setLiveStreamKey)(t)), this._onStreamKeyChange(t);
                            },
                        },
                        {
                            key: "_onStreamKeyPick",
                            value: function (t) {
                                this.setState({ streamKey: t });
                            },
                        },
                        {
                            key: "_onUserChanged",
                            value: function (t) {
                                var n = this;
                                t
                                    ? K.googleApi
                                        .getTokens()
                                        .then(function (t) {
                                            K.googleApi.getYouTubeLiveStreams(t.accessToken).then(function (t) {
                                                n.setState({ broadcasts: t });
                                            });
                                        })
                                        .catch(function () {
                                            n.setState({ broadcasts: void 0, streamKey: void 0 });
                                        })
                                    : this.setState({ broadcasts: void 0, streamKey: void 0 });
                            },
                        },
                    ]),
                    n
                );
            })(b.default),
            N = (0, _.translate)((0, S.connect)(b._mapStateToProps)(U));
        e.default = N;
    },
    1386,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 1079, 615, 542, 1177, 1364, 1387, 1388, 1391, 1393, 1390]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t) {
                return {
                    _conference: t["features/base/conference"].conference,
                    _googleAPIState: t["features/google-api"].googleAPIState,
                    _googleProfileEmail: t["features/google-api"].profileEmail,
                    _streamKey: t["features/recording"].streamKey,
                };
            }),
            (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            u = t(r(d[3])),
            s = t(r(d[4])),
            l = t(r(d[5])),
            c = t(r(d[6])),
            f = r(d[7]),
            _ = r(d[8]),
            v = r(d[9]),
            y = (function (t) {
                function f(t) {
                    var o;
                    return (
                        (0, n.default)(this, f),
                        ((o = (0, u.default)(this, (0, s.default)(f).call(this, t))).state = { broadcasts: void 0, errorType: void 0, selectedBoundStreamID: void 0, streamKey: "" }),
                        (o._isMounted = !1),
                        (o._onCancel = o._onCancel.bind((0, c.default)((0, c.default)(o)))),
                        (o._onStreamKeyChange = o._onStreamKeyChange.bind((0, c.default)((0, c.default)(o)))),
                        (o._onSubmit = o._onSubmit.bind((0, c.default)((0, c.default)(o)))),
                        o
                    );
                }
                return (
                    (0, l.default)(f, t),
                    (0, o.default)(f, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                console.log("AVideoTeste: componentDidMount");
                                startAVideoLiveStream();
                                this._isMounted = !0;
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this._isMounted = !1;
                            },
                        },
                        {
                            key: "_onCancel",
                            value: function () {
                                return (0, _.sendAnalytics)((0, _.createLiveStreamingDialogEvent)("start", "cancel.button")), !0;
                            },
                        },
                        {
                            key: "_onStreamKeyChange",
                            value: function (t) {
                                this._setStateIfMounted({ streamKey: t, selectedBoundStreamID: void 0 });
                            },
                        },
                        {
                            key: "_onSubmit",
                            value: function () {
                                var t = this.state,
                                    n = t.broadcasts,
                                    o = t.selectedBoundStreamID,
                                    u = (this.state.streamKey || this.props._streamKey || "").trim();
                                if (!u) return !1;
                                var s = null;
                                if (o) {
                                    var l =
                                        n &&
                                        n.find(function (t) {
                                            return t.boundStreamID === o;
                                        });
                                    s = l && l.id;
                                }
                                return (
                                    (0, _.sendAnalytics)((0, _.createLiveStreamingDialogEvent)("start", "confirm.button")),
                                    this.props._conference.startRecording({ broadcastId: s, mode: v.JitsiRecordingConstants.mode.STREAM, streamId: u }),
                                    !0
                                );
                            },
                        },
                        {
                            key: "_setStateIfMounted",
                            value: function (t) {
                                this._isMounted && this.setState(t);
                            },
                        },
                    ]),
                    f
                );
            })(f.Component);
        e.default = y;
    },
    1387,
    [3, 4, 5, 6, 9, 10, 8, 13, 385, 388]
);

__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            o = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = o(r(d[2])),
            l = o(r(d[3])),
            s = o(r(d[4])),
            u = o(r(d[5])),
            _ = o(r(d[6])),
            A = o(r(d[7])),
            f = o(r(d[8])),
            S = t(r(d[9])),
            E = r(d[10]),
            c = r(d[11]),
            G = r(d[12]),
            p = r(d[13]),
            O = (r(d[14]), r(d[15])),
            I = o(r(d[16])),
            h = o(r(d[17])),
            T = (function (t) {
                function o(t) {
                    var n;
                    return (
                        (0, l.default)(this, o),
                        ((n = (0, u.default)(this, (0, _.default)(o).call(this, t)))._logGoogleError = n._logGoogleError.bind((0, f.default)((0, f.default)(n)))),
                        (n._onGoogleButtonPress = n._onGoogleButtonPress.bind((0, f.default)((0, f.default)(n)))),
                        n
                    );
                }
                return (
                    (0, A.default)(o, t),
                    (0, s.default)(o, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var t = this;
                                O.googleApi
                                    .hasPlayServices()
                                    .then(function () {
                                        O.googleApi.configure({ offlineAccess: !1, scopes: [O.GOOGLE_SCOPE_YOUTUBE] }),
                                            O.googleApi.signInSilently().then(
                                                function (o) {
                                                    t._setApiState(o ? O.GOOGLE_API_STATES.SIGNED_IN : O.GOOGLE_API_STATES.LOADED, o);
                                                },
                                                function () {
                                                    t._setApiState(O.GOOGLE_API_STATES.LOADED);
                                                }
                                            );
                                    })
                                    .catch(function (o) {
                                        t._logGoogleError(o), t._setApiState(O.GOOGLE_API_STATES.NOT_AVAILABLE);
                                    });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    o = t._dialogStyles,
                                    n = t.t,
                                    l = this.props,
                                    s = l.googleAPIState,
                                    u = l.googleResponse,
                                    _ = u && u.user && u.user.email;
                                if (s === O.GOOGLE_API_STATES.NOT_AVAILABLE || s === O.GOOGLE_API_STATES.NEEDS_LOADING || void 0 === s) return null;
                                var A = _ ? n("liveStreaming.signedInAs") + " " + _ : n("liveStreaming.signInCTA");
                                return S.default.createElement(
                                    E.View,
                                    { style: h.default.formWrapper },
                                    S.default.createElement(E.View, { style: h.default.helpText }, S.default.createElement(E.Text, { style: [o.text, h.default.text] }, A)),
                                    S.default.createElement(O.GoogleSignInButton, { onClick: this._onGoogleButtonPress, signedIn: s === O.GOOGLE_API_STATES.SIGNED_IN })
                                );
                            },
                        },
                        {
                            key: "_logGoogleError",
                            value: function (t) {
                                I.default.error("Google API error. Possible cause: bad config.", t);
                            },
                        },
                        {
                            key: "_onGoogleButtonPress",
                            value: function () {
                                var t = this.props.googleResponse;
                                t && t.user ? this._onSignOut() : this._onSignIn();
                            },
                        },
                        {
                            key: "_onSignIn",
                            value: function () {
                                var t = this;
                                O.googleApi.signIn().then(function (o) {
                                    t._setApiState(O.GOOGLE_API_STATES.SIGNED_IN, o);
                                }, this._logGoogleError);
                            },
                        },
                        {
                            key: "_onSignOut",
                            value: function () {
                                var t = this;
                                O.googleApi.signOut().then(function (o) {
                                    t._setApiState(O.GOOGLE_API_STATES.LOADED, o);
                                }, this._logGoogleError);
                            },
                        },
                        {
                            key: "_setApiState",
                            value: function (t, o) {
                                this.props.onUserChanged(o), this.props.dispatch((0, O.setGoogleAPIState)(t, o));
                            },
                        },
                    ]),
                    o
                );
            })(S.Component);
        var v = (0, G.translate)(
            (0, p.connect)(function (t) {
                var o = t["features/google-api"],
                    l = o.googleAPIState,
                    s = o.googleResponse;
                return (0, n.default)({}, (0, c._abstractMapStateToProps)(t), { googleAPIState: l, googleResponse: s });
            })(T)
        );
        e.default = v;
    },
    1388,
    [2, 3, 54, 4, 5, 6, 9, 10, 8, 13, 17, 1079, 615, 542, 406, 1177, 1389, 1390]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = (0, r(d[0]).getLogger)("features/recording");
        e.default = t;
    },
    1389,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.TOUCHABLE_UNDERLAY = e.PLACEHOLDER_COLOR = e.ACTIVE_OPACITY = void 0);
        var t = r(d[0]);
        e.ACTIVE_OPACITY = 0.3;
        var o = t.ColorPalette.lightGrey;
        e.PLACEHOLDER_COLOR = o;
        var l = t.ColorPalette.lightGrey;
        e.TOUCHABLE_UNDERLAY = l;
        var n = (0, t.createStyleSheet)({
            betaTag: { backgroundColor: t.ColorPalette.darkGrey, borderRadius: 2, marginLeft: 16, opacity: 0.9, paddingLeft: 6, paddingRight: 6 },
            betaTagText: { color: t.ColorPalette.white, fontWeight: "bold" },
            formWrapper: { alignItems: "stretch", flexDirection: "column", padding: t.BoxModel.padding },
            formFooter: { flexDirection: "row" },
            formFooterItem: { flex: 1 },
            helpText: { marginBottom: t.BoxModel.margin },
            startDialogWrapper: { flexDirection: "column" },
            streamKeyHelp: { alignSelf: "flex-end" },
            streamKeyInput: { alignSelf: "stretch", borderColor: t.ColorPalette.lightGrey, borderBottomWidth: 1, fontSize: 14, height: 40, marginBottom: 5, textAlign: "left" },
            streamKeyInputLabel: { alignSelf: "flex-start" },
            streamKeyPicker: { alignSelf: "stretch", flex: 1, height: 40, marginHorizontal: 4, width: 300 },
            streamKeyPickerCta: { marginBottom: 8 },
            streamKeyPickerItem: { padding: 4 },
            streamKeyPickerItemHighlight: { backgroundColor: t.ColorPalette.darkGrey },
            streamKeyPickerWrapper: { borderColor: t.ColorPalette.lightGrey, borderRadius: 3, borderWidth: 1, flexDirection: "column" },
            text: { fontSize: 14, textAlign: "left" },
            warningText: { color: t.ColorPalette.Y200 },
        });
        e.default = n;
    },
    1390,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = l(r(d[2])),
            u = l(r(d[3])),
            o = l(r(d[4])),
            f = l(r(d[5])),
            s = l(r(d[6])),
            p = l(r(d[7])),
            c = l(r(d[8])),
            y = r(d[9]),
            h = r(d[10]),
            v = r(d[11]),
            x = r(d[12]),
            E = (r(d[13]), l(r(d[14]))),
            _ = t(r(d[15])),
            O = (function (t) {
                function l(t) {
                    var u;
                    return (0, n.default)(this, l), ((u = (0, o.default)(this, (0, f.default)(l).call(this, t)))._onOpenHelp = u._onOpenHelp.bind((0, p.default)((0, p.default)(u)))), u;
                }
                return (
                    (0, s.default)(l, t),
                    (0, u.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    l = t._dialogStyles,
                                    n = t.t;
                                return c.default.createElement(
                                    y.View,
                                    { style: _.default.formWrapper },
                                    c.default.createElement(y.Text, { style: [l.text, _.default.text, _.default.streamKeyInputLabel] }, n("dialog.streamKey")),
                                    c.default.createElement(y.TextInput, {
                                        onChangeText: this._onInputChange,
                                        placeholder: n("liveStreaming.enterStreamKey"),
                                        placeholderTextColor: _.PLACEHOLDER_COLOR,
                                        style: [l.text, _.default.streamKeyInput],
                                        value: this.props.value,
                                    }),
                                    c.default.createElement(
                                        y.View,
                                        { style: _.default.formFooter },
                                        this.state.showValidationError
                                            ? c.default.createElement(y.View, { style: _.default.formFooterItem }, c.default.createElement(y.Text, { style: [l.text, _.default.warningText] }, n("liveStreaming.invalidStreamKey")))
                                            : null,
                                        c.default.createElement(
                                            y.View,
                                            { style: _.default.formFooterItem },
                                            c.default.createElement(
                                                y.TouchableOpacity,
                                                { onPress: this._onOpenHelp, style: _.default.streamKeyHelp },
                                                c.default.createElement(y.Text, { style: [l.text, _.default.text] }, n("liveStreaming.streamIdHelp"))
                                            )
                                        )
                                    )
                                );
                            },
                        },
                        {
                            key: "_onOpenHelp",
                            value: function () {
                                var t = this.helpURL;
                                "string" == typeof t && y.Linking.openURL(t);
                            },
                        },
                    ]),
                    l
                );
            })(E.default),
            T = (0, v.translate)((0, x.connect)(h._abstractMapStateToProps)(O));
        e.default = T;
    },
    1391,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 1079, 615, 542, 406, 1392, 1390]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            l = t(r(d[3])),
            u = t(r(d[4])),
            s = t(r(d[5])),
            p = t(r(d[6])),
            f = t(r(d[7])),
            v = "https://jitsi.org/live",
            h = (function (t) {
                function h(t) {
                    var o;
                    return (
                        (0, n.default)(this, h),
                        ((o = (0, l.default)(this, (0, u.default)(h).call(this, t))).state = { showValidationError: Boolean(o.props.value) && !o._validateStreamKey(o.props.value) }),
                        (o.helpURL = ("undefined" != typeof interfaceConfig && interfaceConfig.LIVE_STREAMING_HELP_LINK) || v),
                        (o._debouncedUpdateValidationErrorVisibility = (0, f.default)(o._updateValidationErrorVisibility.bind((0, p.default)((0, p.default)(o))), 800, { leading: !1 })),
                        (o._onInputChange = o._onInputChange.bind((0, p.default)((0, p.default)(o)))),
                        o
                    );
                }
                return (
                    (0, s.default)(h, t),
                    (0, o.default)(h, [
                        {
                            key: "componentDidUpdate",
                            value: function (t) {
                                this.props.value !== t.value && this._debouncedUpdateValidationErrorVisibility();
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this._debouncedUpdateValidationErrorVisibility.cancel();
                            },
                        },
                        {
                            key: "_onInputChange",
                            value: function (t) {
                                var n = "object" == typeof t ? t.target.value : t;
                                this.props.onChange(n);
                            },
                        },
                        {
                            key: "_updateValidationErrorVisibility",
                            value: function () {
                                var t = Boolean(this.props.value) && !this._validateStreamKey(this.props.value);
                                t !== this.state.showValidationError && this.setState({ showValidationError: t });
                            },
                        },
                        {
                            key: "_validateStreamKey",
                            value: function () {
                                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim(),
                                    n = /^(?:[a-zA-Z0-9]{4}(?:-(?!$)|$)){4}/.exec(t);
                                return Boolean(n);
                            },
                        },
                    ]),
                    h
                );
            })(r(d[8]).Component);
        e.default = h;
    },
    1392,
    [3, 4, 5, 6, 9, 10, 8, 598, 13]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = l(r(d[2])),
            u = l(r(d[3])),
            o = l(r(d[4])),
            s = l(r(d[5])),
            f = l(r(d[6])),
            c = l(r(d[7])),
            y = t(r(d[8])),
            p = r(d[9]),
            h = r(d[10]),
            _ = r(d[11]),
            b = r(d[12]),
            k = (r(d[13]), r(d[14])),
            E = t(r(d[15])),
            v = (function (t) {
                function l(t) {
                    var u;
                    return (
                        (0, n.default)(this, l),
                        ((u = (0, o.default)(this, (0, s.default)(l).call(this, t))).state = { streamKey: null }),
                        (u._onOpenYoutubeDashboard = u._onOpenYoutubeDashboard.bind((0, c.default)((0, c.default)(u)))),
                        (u._onStreamPick = u._onStreamPick.bind((0, c.default)((0, c.default)(u)))),
                        u
                    );
                }
                return (
                    (0, f.default)(l, t),
                    (0, u.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                var t = this,
                                    l = this.props,
                                    n = l._dialogStyles,
                                    u = l.broadcasts;
                                return u
                                    ? u.length
                                        ? y.default.createElement(
                                            p.View,
                                            { style: E.default.formWrapper },
                                            y.default.createElement(p.View, { style: E.default.streamKeyPickerCta }, y.default.createElement(p.Text, { style: [n.text, E.default.text] }, this.props.t("liveStreaming.choose"))),
                                            y.default.createElement(
                                                p.View,
                                                { style: E.default.streamKeyPickerWrapper },
                                                u.map(function (l, u) {
                                                    return y.default.createElement(
                                                        p.TouchableHighlight,
                                                        {
                                                            activeOpacity: E.ACTIVE_OPACITY,
                                                            key: u,
                                                            onPress: t._onStreamPick(l.key),
                                                            style: [E.default.streamKeyPickerItem, t.state.streamKey === l.key ? E.default.streamKeyPickerItemHighlight : null],
                                                            underlayColor: E.TOUCHABLE_UNDERLAY,
                                                        },
                                                        y.default.createElement(p.Text, { style: [n.text, E.default.text] }, l.title)
                                                    );
                                                })
                                            )
                                        )
                                        : y.default.createElement(
                                            p.View,
                                            { style: E.default.formWrapper },
                                            y.default.createElement(
                                                p.TouchableOpacity,
                                                { onPress: this._onOpenYoutubeDashboard },
                                                y.default.createElement(p.Text, { style: [n.text, E.default.warningText] }, this.props.t("liveStreaming.getStreamKeyManually"))
                                            )
                                        )
                                    : null;
                            },
                        },
                        {
                            key: "_onOpenYoutubeDashboard",
                            value: function () {
                                p.Linking.openURL(k.YOUTUBE_LIVE_DASHBOARD_URL);
                            },
                        },
                        {
                            key: "_onStreamPick",
                            value: function (t) {
                                var l = this;
                                return function () {
                                    l.setState({ streamKey: t }), l.props.onChange(t);
                                };
                            },
                        },
                    ]),
                    l
                );
            })(y.Component),
            P = (0, _.translate)((0, b.connect)(h._abstractMapStateToProps)(v));
        e.default = P;
    },
    1393,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 1079, 615, 542, 406, 1394, 1390]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.YOUTUBE_LIVE_DASHBOARD_URL = void 0);
        e.YOUTUBE_LIVE_DASHBOARD_URL = "https://www.youtube.com/live_dashboard";
    },
    1394,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            l = n(r(d[3])),
            o = n(r(d[4])),
            f = n(r(d[5])),
            c = n(r(d[6])),
            s = n(r(d[7])),
            p = r(d[8]),
            _ = r(d[9]),
            v = r(d[10]),
            h = t(r(d[11])),
            y = (function (t) {
                function n() {
                    return (0, u.default)(this, n), (0, o.default)(this, (0, f.default)(n).apply(this, arguments));
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return s.default.createElement(p.ConfirmDialog, { contentKey: "dialog.stopStreamingWarning", onSubmit: this._onSubmit });
                            },
                        },
                    ]),
                    n
                );
            })(h.default),
            S = (0, _.translate)((0, v.connect)(h._mapStateToProps)(y));
        e.default = S;
    },
    1395,
    [2, 3, 4, 5, 6, 9, 10, 13, 1079, 615, 542, 1396]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t) {
                return { _conference: t["features/base/conference"].conference, _session: (0, v.getActiveSession)(t, p.JitsiRecordingConstants.mode.STREAM) };
            }),
            (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            s = t(r(d[3])),
            u = t(r(d[4])),
            c = t(r(d[5])),
            f = t(r(d[6])),
            l = r(d[7]),
            _ = r(d[8]),
            p = r(d[9]),
            v = r(d[10]),
            b = (function (t) {
                function l(t) {
                    var o;
                    return (0, n.default)(this, l), ((o = (0, s.default)(this, (0, u.default)(l).call(this, t)))._onSubmit = o._onSubmit.bind((0, f.default)((0, f.default)(o)))), o;
                }
                return (
                    (0, c.default)(l, t),
                    (0, o.default)(l, [
                        {
                            key: "_onSubmit",
                            value: function () {
                                (0, _.sendAnalytics)((0, _.createLiveStreamingDialogEvent)("stop", "confirm.button"));
                                var t = this.props._session;
                                return t && this.props._conference.stopRecording(t.id), !0;
                            },
                        },
                    ]),
                    l
                );
            })(l.Component);
        e.default = b;
    },
    1396,
    [3, 4, 5, 6, 9, 10, 8, 13, 385, 388, 1376]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1397,
    [1398]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1398,
    [1399]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "RecordButton", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(e, "StartRecordingDialog", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
            Object.defineProperty(e, "StopRecordingDialog", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var n = t(r(d[1])),
            o = t(r(d[2])),
            u = t(r(d[3]));
    },
    1399,
    [3, 1400, 1402, 1416]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            u = n(r(d[4])),
            c = n(r(d[5])),
            f = r(d[6]),
            s = r(d[7]),
            v = r(d[8]),
            p = t(r(d[9])),
            _ = (function (t) {
                function n() {
                    var t, c;
                    (0, l.default)(this, n);
                    for (var f = arguments.length, v = new Array(f), p = 0; p < f; p++) v[p] = arguments[p];
                    return ((c = (0, o.default)(this, (t = (0, u.default)(n)).call.apply(t, [this].concat(v)))).icon = s.IconToggleRecording), c;
                }
                return (0, c.default)(n, t), n;
            })(p.default),
            h = (0, f.translate)((0, v.connect)(p._mapStateToProps)(_));
        e.default = h;
    },
    1400,
    [2, 3, 4, 6, 9, 10, 615, 403, 542, 1401]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t, n) {
                var o,
                    l = n.visible;
                if (void 0 === l) {
                    var s = (0, v.isLocalParticipantModerator)(t),
                        c = t["features/base/config"],
                        u = c.enableFeaturesBasedOnToken,
                        f = c.fileRecordingsEnabled,
                        p = (0, v.getLocalParticipant)(t),
                        _ = p.features,
                        y = void 0 === _ ? {} : _;
                    (l = s && f), u && ((l = l && "true" === String(y.recording)), (o = "disabled" === String(y.recording)));
                }
                return { _isRecordingRunning: Boolean((0, R.getActiveSession)(t, b.JitsiRecordingConstants.mode.FILE)), disabledByFeatures: o, visible: l };
            }),
            (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            l = t(r(d[3])),
            s = t(r(d[4])),
            c = t(r(d[5])),
            u = r(d[6]),
            f = r(d[7]),
            b = r(d[8]),
            v = r(d[9]),
            p = r(d[10]),
            R = r(d[11]),
            _ = r(d[12]),
            y = (function (t) {
                function v() {
                    var t, o;
                    (0, n.default)(this, v);
                    for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++) u[f] = arguments[f];
                    return (
                        ((o = (0, l.default)(this, (t = (0, s.default)(v)).call.apply(t, [this].concat(u)))).accessibilityLabel = "toolbar.accessibilityLabel.recording"),
                        (o.label = "dialog.startRecording"),
                        (o.toggledLabel = "dialog.stopRecording"),
                        o
                    );
                }
                return (
                    (0, c.default)(v, t),
                    (0, o.default)(v, [
                        {
                            key: "_handleClick",
                            value: function () {
                                var t = this.props,
                                    n = t._isRecordingRunning,
                                    o = t.dispatch;
                                (0, u.sendAnalytics)((0, u.createToolbarEvent)("recording.button", { is_recording: n, type: b.JitsiRecordingConstants.mode.FILE })), o((0, f.openDialog)(n ? _.StopRecordingDialog : _.StartRecordingDialog));
                            },
                        },
                        {
                            key: "_isDisabled",
                            value: function () {
                                return !1;
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props._isRecordingRunning;
                            },
                        },
                    ]),
                    v
                );
            })(p.AbstractButton);
        e.default = y;
    },
    1401,
    [3, 4, 5, 6, 9, 10, 385, 1079, 388, 540, 1053, 1376, 1398]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            s = n(r(d[3])),
            o = n(r(d[4])),
            c = n(r(d[5])),
            u = n(r(d[6])),
            f = n(r(d[7])),
            h = r(d[8]),
            S = r(d[9]),
            b = r(d[10]),
            v = t(r(d[11])),
            _ = n(r(d[12])),
            p = (function (t) {
                function n() {
                    return (0, l.default)(this, n), (0, o.default)(this, (0, c.default)(n).apply(this, arguments));
                }
                return (
                    (0, u.default)(n, t),
                    (0, s.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.state,
                                    n = t.isTokenValid,
                                    l = t.isValidating,
                                    s = t.selectedRecordingService,
                                    o = t.sharingEnabled,
                                    c = t.spaceLeft,
                                    u = t.userName,
                                    h = this.props,
                                    b = h._fileRecordingsServiceEnabled,
                                    v = h._fileRecordingsServiceSharingEnabled,
                                    p = h._isDropboxEnabled,
                                    E = b ? l : !!p && !n;
                                return f.default.createElement(
                                    S.CustomSubmitDialog,
                                    { okDisabled: E, onSubmit: this._onSubmit },
                                    f.default.createElement(_.default, {
                                        fileRecordingsServiceEnabled: b,
                                        fileRecordingsServiceSharingEnabled: v,
                                        integrationsEnabled: this._areIntegrationsEnabled(),
                                        isTokenValid: n,
                                        isValidating: l,
                                        onChange: this._onSelectedRecordingServiceChanged,
                                        onSharingSettingChanged: this._onSharingSettingChanged,
                                        selectedRecordingService: s,
                                        sharingSetting: o,
                                        spaceLeft: c,
                                        userName: u,
                                    })
                                );
                            },
                        },
                    ]),
                    n
                );
            })(v.default),
            E = (0, h.translate)((0, b.connect)(v.mapStateToProps)(p));
        e.default = E;
    },
    1402,
    [2, 3, 4, 5, 6, 9, 10, 13, 615, 1079, 542, 1403, 1411]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.mapStateToProps = function (t) {
                var n = t["features/base/config"],
                    o = n.autoCaptionOnRecord,
                    s = void 0 !== o && o,
                    l = n.fileRecordingsServiceEnabled,
                    c = void 0 !== l && l,
                    u = n.fileRecordingsServiceSharingEnabled,
                    _ = void 0 !== u && u,
                    f = n.dropbox;
                return {
                    _appKey: (void 0 === f ? {} : f).appKey,
                    _autoCaptionOnRecord: s,
                    _conference: t["features/base/conference"].conference,
                    _fileRecordingsServiceEnabled: c,
                    _fileRecordingsServiceSharingEnabled: _,
                    _isDropboxEnabled: (0, v.isEnabled)(t),
                    _token: t["features/dropbox"].token,
                };
            }),
            (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            s = t(r(d[3])),
            l = t(r(d[4])),
            c = t(r(d[5])),
            u = t(r(d[6])),
            _ = t(r(d[7])),
            f = r(d[8]),
            p = r(d[9]),
            S = r(d[10]),
            v = r(d[11]),
            R = r(d[12]),
            E = r(d[13]);
        var h = (function (t) {
            function f(t) {
                var n, s;
                return (
                    (0, o.default)(this, f),
                    ((n = (0, l.default)(this, (0, c.default)(f).call(this, t)))._onSubmit = n._onSubmit.bind((0, _.default)((0, _.default)(n)))),
                    (n._onSelectedRecordingServiceChanged = n._onSelectedRecordingServiceChanged.bind((0, _.default)((0, _.default)(n)))),
                    (n._onSharingSettingChanged = n._onSharingSettingChanged.bind((0, _.default)((0, _.default)(n)))),
                    n.props._fileRecordingsServiceEnabled || !n._areIntegrationsEnabled() ? (s = R.RECORDING_TYPES.JITSI_REC_SERVICE) : n._areIntegrationsEnabled() && (s = R.RECORDING_TYPES.DROPBOX),
                    (n.state = { isTokenValid: !1, isValidating: !1, userName: void 0, sharingEnabled: !0, spaceLeft: void 0, selectedRecordingService: s }),
                    n
                );
            }
            return (
                (0, u.default)(f, t),
                (0, s.default)(f, [
                    {
                        key: "componentDidMount",
                        value: function () {
                            void 0 !== this.props._token && this._onTokenUpdated();
                        },
                    },
                    {
                        key: "componentDidUpdate",
                        value: function (t) {
                            this.props._token !== t._token && this._onTokenUpdated();
                        },
                    },
                    {
                        key: "_areIntegrationsEnabled",
                        value: function () {
                            return this.props._isDropboxEnabled;
                        },
                    },
                    {
                        key: "_onSharingSettingChanged",
                        value: function () {
                            this.setState({ sharingEnabled: !this.state.sharingEnabled });
                        },
                    },
                    {
                        key: "_onSelectedRecordingServiceChanged",
                        value: function (t) {
                            this.setState({ selectedRecordingService: t });
                        },
                    },
                    {
                        key: "_onTokenUpdated",
                        value: function () {
                            var t = this,
                                o = this.props,
                                s = o._appKey,
                                l = o._isDropboxEnabled,
                                c = o._token;
                            l &&
                                (void 0 === c
                                    ? this.setState({ isTokenValid: !1, isValidating: !1 })
                                    : (this.setState({ isTokenValid: !1, isValidating: !0 }),
                                        (0, v.getDropboxData)(c, s).then(function (o) {
                                            void 0 === o ? t.setState({ isTokenValid: !1, isValidating: !1 }) : t.setState((0, n.default)({ isTokenValid: !0, isValidating: !1 }, o));
                                        })));
                        },
                    },
                    {
                        key: "_onSubmit",
                        value: function () {
                            var t,
                                n = this.props,
                                o = n._autoCaptionOnRecord,
                                s = n._conference,
                                l = n._isDropboxEnabled,
                                c = n._token,
                                u = n.dispatch,
                                _ = {};
                            return (
                                l && c && this.state.selectedRecordingService === R.RECORDING_TYPES.DROPBOX
                                    ? ((t = JSON.stringify({ file_recording_metadata: { upload_credentials: { service_name: R.RECORDING_TYPES.DROPBOX, token: c } } })), (_.type = R.RECORDING_TYPES.DROPBOX))
                                    : ((t = JSON.stringify({ file_recording_metadata: { share: this.state.sharingEnabled } })), (_.type = R.RECORDING_TYPES.JITSI_REC_SERVICE)),
                                (0, p.sendAnalytics)((0, p.createRecordingDialogEvent)("start", "confirm.button", _)),
                                s.startRecording({ mode: S.JitsiRecordingConstants.mode.FILE, appData: t }),
                                o && u((0, E.toggleRequestingSubtitles)()),
                                !0
                            );
                        },
                    },
                ]),
                f
            );
        })(f.Component);
        e.default = h;
    },
    1403,
    [3, 54, 4, 5, 6, 9, 10, 8, 13, 385, 388, 1404, 1377, 1044]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        }),
            r(d[2]);
    },
    1404,
    [1405, 1408, 1410]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.authorizeDropbox = function () {
                return function (o, u) {
                    var c = u(),
                        f = c["features/base/connection"].locationURL,
                        p = c["features/base/config"].dropbox,
                        b = void 0 === p ? {} : p,
                        _ = b.redirectURI || f.origin + "/static/oauth.html";
                    (0, t._authorizeDropbox)(b.appKey, _).then(function (t) {
                        return o(n(t));
                    });
                };
            }),
            (e.updateDropboxToken = n);
        var o = r(d[0]),
            t = r(d[1]);
        function n(t) {
            return { type: o.UPDATE_DROPBOX_TOKEN, token: t };
        }
    },
    1405,
    [1406, 1407]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.UPDATE_DROPBOX_TOKEN = void 0);
        e.UPDATE_DROPBOX_TOKEN = "UPDATE_DROPBOX_TOKEN";
    },
    1406,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._authorizeDropbox = function () {
                return t.authorize();
            }),
            (e.getDisplayName = function (o) {
                return t.getDisplayName(o);
            }),
            (e.getSpaceUsage = function (o) {
                return t.getSpaceUsage(o);
            }),
            (e.isEnabled = function (o) {
                var n = o["features/base/config"].dropbox,
                    u = void 0 === n ? {} : n;
                return t.ENABLED && "string" == typeof u.appKey;
            });
        var t = r(d[0]).NativeModules.Dropbox;
    },
    1407,
    [17]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = { getDropboxData: !0 };
        e.getDropboxData = function (t, o) {
            return Promise.all([(0, u.getDisplayName)(t, o), (0, u.getSpaceUsage)(t, o)]).then(
                function (t) {
                    var o = (0, n.default)(t, 2),
                        u = o[0],
                        c = o[1],
                        l = c.allocated,
                        f = c.used;
                    return { userName: u, spaceLeft: Math.floor((l - f) / 1048576) };
                },
                function (t) {
                    c.default.error(t);
                }
            );
        };
        var n = t(r(d[1])),
            u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(o, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return u[t];
                        },
                    }));
        });
        var c = t(r(d[3]));
    },
    1408,
    [3, 26, 1407, 1409]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = (0, r(d[0]).getLogger)("features/dropbox");
        e.default = o;
    },
    1409,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            o = r(d[3]),
            s = r(d[4]);
        o.PersistenceRegistry.register("features/dropbox"),
            n.ReducerRegistry.register("features/dropbox", function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = arguments.length > 1 ? arguments[1] : void 0;
                switch (o.type) {
                    case s.UPDATE_DROPBOX_TOKEN:
                        return (0, t.default)({}, n, { token: o.token });
                    default:
                        return n;
                }
            });
    },
    1410,
    [3, 54, 542, 834, 1406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            s = n(r(d[4])),
            c = n(r(d[5])),
            u = n(r(d[6])),
            h = n(r(d[7])),
            f = n(r(d[8])),
            S = t(r(d[9])),
            E = r(d[10]),
            C = r(d[11]),
            _ = r(d[12]),
            p = r(d[13]),
            y = r(d[14]),
            R = r(d[15]),
            I = r(d[16]),
            v = r(d[17]),
            N = r(d[18]),
            O = r(d[19]),
            b = r(d[20]),
            D = (function (t) {
                function n(t) {
                    var l;
                    return (
                        (0, o.default)(this, n),
                        ((l = (0, c.default)(this, (0, u.default)(n).call(this, t)))._onSignIn = l._onSignIn.bind((0, f.default)((0, f.default)(l)))),
                        (l._onSignOut = l._onSignOut.bind((0, f.default)((0, f.default)(l)))),
                        (l._onDropboxSwitchChange = l._onDropboxSwitchChange.bind((0, f.default)((0, f.default)(l)))),
                        (l._onRecordingServiceSwitchChange = l._onRecordingServiceSwitchChange.bind((0, f.default)((0, f.default)(l)))),
                        l
                    );
                }
                return (
                    (0, h.default)(n, t),
                    (0, s.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props._styles;
                                return S.default.createElement(y.Container, { className: "recording-dialog", style: t.container }, this._renderNoIntegrationsContent(), this._renderIntegrationsContent(), this._renderFileSharingContent());
                            },
                        },
                        {
                            key: "_renderFileSharingContent",
                            value: function () {
                                if (!this.props.fileRecordingsServiceSharingEnabled) return null;
                                var t = this.props,
                                    n = t._dialogStyles,
                                    o = t._styles,
                                    s = t.isValidating,
                                    c = t.onSharingSettingChanged,
                                    u = t.selectedRecordingService,
                                    h = t.sharingSetting,
                                    f = t.t,
                                    E = u !== N.RECORDING_TYPES.JITSI_REC_SERVICE,
                                    C = "recording-header recording-header-line";
                                return (
                                    E && (C += " recording-switch-disabled"),
                                    S.default.createElement(
                                        y.Container,
                                        { className: C, key: "fileSharingSetting", style: [o.header, n.topBorderContainer, E ? o.controlDisabled : null] },
                                        S.default.createElement(y.Container, { className: "recording-icon-container" }, S.default.createElement(y.Image, { className: "recording-icon", src: b.ICON_SHARE, style: o.recordingIcon })),
                                        S.default.createElement(y.Text, { className: "recording-title", style: (0, l.default)({}, n.text, o.title) }, f("recording.fileSharingdescription")),
                                        S.default.createElement(y.Switch, { className: "recording-switch", disabled: E || s, onValueChange: c, style: o.switch, trackColor: { false: I.ColorPalette.lightGrey }, value: !E && h })
                                    )
                                );
                            },
                        },
                        {
                            key: "_renderNoIntegrationsContent",
                            value: function () {
                                if (!this.props.fileRecordingsServiceEnabled && this.props.integrationsEnabled) return null;
                                var t = this.props,
                                    n = t._dialogStyles,
                                    o = t._styles,
                                    s = t.isValidating,
                                    c = t.t,
                                    u = this.props.integrationsEnabled
                                        ? S.default.createElement(y.Switch, {
                                            className: "recording-switch",
                                            disabled: s,
                                            onValueChange: this._onRecordingServiceSwitchChange,
                                            style: o.switch,
                                            trackColor: { false: I.ColorPalette.lightGrey },
                                            value: this.props.selectedRecordingService === N.RECORDING_TYPES.JITSI_REC_SERVICE,
                                        })
                                        : null;
                                return S.default.createElement(
                                    y.Container,
                                    { className: "recording-header", key: "noIntegrationSetting", style: o.header },
                                    S.default.createElement(y.Container, { className: "recording-icon-container" }, S.default.createElement(y.Image, { className: "recording-icon", src: b.JITSI_LOGO, style: o.recordingIcon })),
                                    S.default.createElement(y.Text, { className: "recording-title", style: (0, l.default)({}, n.text, o.title) }, c("recording.serviceDescription")),
                                    u
                                );
                            },
                        },
                        {
                            key: "_renderIntegrationsContent",
                            value: function () {
                                if (!this.props.integrationsEnabled) return null;
                                var t = this.props,
                                    n = t._dialogStyles,
                                    o = t._styles,
                                    s = t.isTokenValid,
                                    c = t.isValidating,
                                    u = t.t,
                                    h = null,
                                    f = null;
                                return (
                                    c
                                        ? ((h = this._renderSpinner()), (f = S.default.createElement(y.Container, { className: "recording-switch" })))
                                        : s
                                            ? ((h = this._renderSignOut()),
                                                (f = S.default.createElement(y.Container, { className: "recording-switch" }, S.default.createElement(y.Button, { onValueChange: this._onSignOut, style: o.signButton }, u("recording.signOut")))))
                                            : (f = S.default.createElement(y.Container, { className: "recording-switch" }, S.default.createElement(y.Button, { onValueChange: this._onSignIn, style: o.signButton }, u("recording.signIn")))),
                                    this.props.fileRecordingsServiceEnabled &&
                                    (f = S.default.createElement(y.Switch, {
                                        className: "recording-switch",
                                        disabled: c,
                                        onValueChange: this._onDropboxSwitchChange,
                                        style: o.switch,
                                        trackColor: { false: I.ColorPalette.lightGrey },
                                        value: this.props.selectedRecordingService === N.RECORDING_TYPES.DROPBOX,
                                    })),
                                    S.default.createElement(
                                        y.Container,
                                        null,
                                        S.default.createElement(
                                            y.Container,
                                            { className: "recording-header", style: o.header },
                                            S.default.createElement(y.Container, { className: "recording-icon-container" }, S.default.createElement(y.Image, { className: "recording-icon", src: b.DROPBOX_LOGO, style: o.recordingIcon })),
                                            S.default.createElement(y.Text, { className: "recording-title", style: (0, l.default)({}, n.text, o.title) }, u("recording.authDropboxText")),
                                            f
                                        ),
                                        S.default.createElement(y.Container, { className: "authorization-panel" }, h)
                                    )
                                );
                            },
                        },
                        {
                            key: "_onRecordingServiceSwitchChange",
                            value: function () {
                                var t = this.props,
                                    n = t.isTokenValid,
                                    l = t.onChange;
                                t.selectedRecordingService !== N.RECORDING_TYPES.JITSI_REC_SERVICE && (l(N.RECORDING_TYPES.JITSI_REC_SERVICE), n && this._onSignOut());
                            },
                        },
                        {
                            key: "_onDropboxSwitchChange",
                            value: function () {
                                var t = this.props,
                                    n = t.isTokenValid,
                                    l = t.onChange;
                                t.selectedRecordingService !== N.RECORDING_TYPES.DROPBOX && (l(N.RECORDING_TYPES.DROPBOX), n || this._onSignIn());
                            },
                        },
                        {
                            key: "_renderSpinner",
                            value: function () {
                                return S.default.createElement(y.LoadingIndicator, { isCompleting: !1, size: "small" });
                            },
                        },
                        {
                            key: "_renderSignOut",
                            value: function () {
                                var t = this.props,
                                    n = t._styles,
                                    l = t.spaceLeft,
                                    o = t.t,
                                    s = t.userName,
                                    c = (0, O.getRecordingDurationEstimation)(l);
                                return S.default.createElement(
                                    y.Container,
                                    null,
                                    S.default.createElement(
                                        y.Container,
                                        { className: "logged-in-panel", style: n.loggedIn },
                                        S.default.createElement(y.Container, null, S.default.createElement(y.Text, { style: n.text }, o("recording.loggedIn", { userName: s }))),
                                        S.default.createElement(y.Container, null, S.default.createElement(y.Text, { style: n.text }, o("recording.availableSpace", { spaceLeft: l, duration: c })))
                                    )
                                );
                            },
                        },
                        {
                            key: "_onSignIn",
                            value: function () {
                                (0, E.sendAnalytics)((0, E.createRecordingDialogEvent)("start", "signIn.button")), this.props.dispatch((0, v.authorizeDropbox)());
                            },
                        },
                        {
                            key: "_onSignOut",
                            value: function () {
                                (0, E.sendAnalytics)((0, E.createRecordingDialogEvent)("start", "signOut.button")), this.props.dispatch((0, v.updateDropboxToken)());
                            },
                        },
                    ]),
                    n
                );
            })(S.Component);
        var T = (0, p.translate)(
            (0, R.connect)(function (t) {
                return (0, l.default)({}, (0, _._abstractMapStateToProps)(t), { _styles: C.ColorSchemeRegistry.get(t, "StartRecordingDialogContent") });
            })(D)
        );
        e.default = T;
    },
    1411,
    [2, 3, 54, 4, 5, 6, 9, 10, 8, 13, 385, 925, 1079, 615, 394, 542, 406, 1404, 1377, 1376, 1412]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.JITSI_LOGO = e.ICON_SHARE = e.DROPBOX_LOGO = void 0);
        var o = r(d[0]),
            t = r(d[1]),
            n = 1.5 * t.BoxModel.padding,
            l = r(d[2]);
        e.DROPBOX_LOGO = l;
        var c = r(d[3]);
        e.ICON_SHARE = c;
        var O = r(d[4]);
        (e.JITSI_LOGO = O),
            o.ColorSchemeRegistry.register("StartRecordingDialogContent", {
                container: { flex: 0, flexDirection: "column" },
                controlDisabled: { opacity: 0.5 },
                header: { alignItems: "center", flex: 0, flexDirection: "row", justifyContent: "space-between", paddingBottom: n, paddingTop: n },
                loggedIn: { paddingBottom: n },
                recordingIcon: { width: 24, height: 24 },
                signButton: { backgroundColor: t.ColorPalette.blue, color: t.ColorPalette.white, fontSize: 16, borderRadius: 5, padding: 0.5 * t.BoxModel.padding },
                switch: { color: t.ColorPalette.white },
                title: { flex: 1, fontSize: 16, fontWeight: "bold", textAlign: "left", paddingLeft: t.BoxModel.padding },
                text: { color: (0, o.schemeColor)("text") },
            });
    },
    1412,
    [925, 406, 1413, 1414, 1415]
);
__d(
    function (g, r, i, a, m, e, d) {
        m.exports = r(d[0]).registerAsset({ __packager_asset: !0, httpServerLocation: "/assets/images", width: 64, height: 64, scales: [1], hash: "0ac6fc61f77d3a3cc74d03ca46e7ada3", name: "dropboxLogo_square", type: "png" });
    },
    1413,
    [178]
);
__d(
    function (g, r, i, a, m, e, d) {
        m.exports = r(d[0]).registerAsset({ __packager_asset: !0, httpServerLocation: "/assets/images", width: 128, height: 128, scales: [1], hash: "a932ca303133bc2c6dedddc51836d688", name: "icon-users", type: "png" });
    },
    1414,
    [178]
);
__d(
    function (g, r, i, a, m, e, d) {
        m.exports = r(d[0]).registerAsset({ __packager_asset: !0, httpServerLocation: "/assets/images", width: 64, height: 64, scales: [1], hash: "d8e63d36c81fb4a4b6cd62bb4e553ba9", name: "jitsiLogo_square", type: "png" });
    },
    1415,
    [178]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            o = n(r(d[3])),
            l = n(r(d[4])),
            f = n(r(d[5])),
            c = n(r(d[6])),
            s = n(r(d[7])),
            p = r(d[8]),
            _ = r(d[9]),
            v = r(d[10]),
            h = t(r(d[11])),
            y = (function (t) {
                function n() {
                    return (0, u.default)(this, n), (0, l.default)(this, (0, f.default)(n).apply(this, arguments));
                }
                return (
                    (0, c.default)(n, t),
                    (0, o.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return s.default.createElement(p.ConfirmDialog, { contentKey: "dialog.stopRecordingWarning", onSubmit: this._onSubmit });
                            },
                        },
                    ]),
                    n
                );
            })(h.default),
            b = (0, _.translate)((0, v.connect)(h._mapStateToProps)(y));
        e.default = b;
    },
    1416,
    [2, 3, 4, 5, 6, 9, 10, 13, 1079, 615, 542, 1417]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (n) {
                return { _conference: n["features/base/conference"].conference, _fileRecordingSession: (0, v.getActiveSession)(n, p.JitsiRecordingConstants.mode.FILE) };
            }),
            (e.default = void 0);
        var t = n(r(d[1])),
            o = n(r(d[2])),
            u = n(r(d[3])),
            c = n(r(d[4])),
            s = n(r(d[5])),
            f = n(r(d[6])),
            l = r(d[7]),
            _ = r(d[8]),
            p = r(d[9]),
            v = r(d[10]),
            b = (function (n) {
                function l(n) {
                    var o;
                    return (0, t.default)(this, l), ((o = (0, u.default)(this, (0, c.default)(l).call(this, n)))._onSubmit = o._onSubmit.bind((0, f.default)((0, f.default)(o)))), o;
                }
                return (
                    (0, s.default)(l, n),
                    (0, o.default)(l, [
                        {
                            key: "_onSubmit",
                            value: function () {
                                (0, _.sendAnalytics)((0, _.createRecordingDialogEvent)("stop", "confirm.button"));
                                var n = this.props._fileRecordingSession;
                                return n && this.props._conference.stopRecording(n.id), !0;
                            },
                        },
                    ]),
                    l
                );
            })(l.Component);
        e.default = b;
    },
    1417,
    [3, 4, 5, 6, 9, 10, 8, 13, 385, 388, 1376]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            s = r(d[2]),
            o = r(d[3]),
            _ = t(r(d[4])),
            N = r(d[5]),
            c = r(d[6]),
            S = r(d[7]),
            I = r(d[8]),
            E = r(d[9]),
            R = r(d[10]),
            O = r(d[11]),
            D = r(d[12]);
        function u(t, n) {
            var s = t.getMode() === _.default.constants.recording.mode.STREAM;
            switch (t.getError()) {
                case _.default.constants.recording.error.SERVICE_UNAVAILABLE:
                    n(
                        (0, I.showRecordingError)({
                            descriptionKey: "recording.unavailable",
                            descriptionArguments: { serviceName: s ? "$t(liveStreaming.serviceName)" : "$t(recording.serviceName)" },
                            titleKey: s ? "liveStreaming.unavailableTitle" : "recording.unavailableTitle",
                        })
                    );
                    break;
                case _.default.constants.recording.error.RESOURCE_CONSTRAINT:
                    n((0, I.showRecordingError)({ descriptionKey: s ? "liveStreaming.busy" : "recording.busy", titleKey: s ? "liveStreaming.busyTitle" : "recording.busyTitle" }));
                    break;
                default:
                    n((0, I.showRecordingError)({ descriptionKey: s ? "liveStreaming.error" : "recording.error", titleKey: s ? "liveStreaming.failedToStart" : "recording.failedToStart" }));
            }
        }
        c.StateListenerRegistry.register(
            function (t) {
                return (0, o.getCurrentConference)(t);
            },
            function (t, n) {
                var s = n.dispatch;
                t || s((0, I.clearRecordingSessions)());
            }
        ),
            c.MiddlewareRegistry.register(function (t) {
                var c = t.dispatch,
                    l = t.getState;
                return function (t) {
                    return function (f) {
                        var A;
                        f.type === E.RECORDING_SESSION_UPDATED && (A = (0, O.getSessionById)(l(), f.sessionData.id));
                        var C = t(f);
                        switch (f.type) {
                            case s.APP_WILL_MOUNT:
                                c((0, S.registerSound)(R.LIVE_STREAMING_OFF_SOUND_ID, D.LIVE_STREAMING_OFF_SOUND_FILE)),
                                    c((0, S.registerSound)(R.LIVE_STREAMING_ON_SOUND_ID, D.LIVE_STREAMING_ON_SOUND_FILE)),
                                    c((0, S.registerSound)(R.RECORDING_OFF_SOUND_ID, D.RECORDING_OFF_SOUND_FILE)),
                                    c((0, S.registerSound)(R.RECORDING_ON_SOUND_ID, D.RECORDING_ON_SOUND_FILE));
                                break;
                            case s.APP_WILL_UNMOUNT:
                                c((0, S.unregisterSound)(R.LIVE_STREAMING_OFF_SOUND_ID)),
                                    c((0, S.unregisterSound)(R.LIVE_STREAMING_ON_SOUND_ID)),
                                    c((0, S.unregisterSound)(R.RECORDING_OFF_SOUND_ID)),
                                    c((0, S.unregisterSound)(R.RECORDING_ON_SOUND_ID));
                                break;
                            case o.CONFERENCE_WILL_JOIN:
                                f.conference.on(_.JitsiConferenceEvents.RECORDER_STATE_CHANGED, function (t) {
                                    t && (t.getID() && c((0, I.updateRecordingSessionData)(t)), t.getError() && u(t, c));
                                });
                                break;
                            case E.RECORDING_SESSION_UPDATED:
                                var T = l()["features/base/config"],
                                    v = T.iAmRecorder,
                                    F = T.iAmSipGateway;
                                if (v && !F) break;
                                var U = (0, O.getSessionById)(l(), f.sessionData.id),
                                    L = U.initiator,
                                    y = U.mode,
                                    G = U.terminator,
                                    p = _.JitsiRecordingConstants.status,
                                    M = p.PENDING,
                                    b = p.OFF,
                                    h = p.ON;
                                if (U.status !== M || (A && A.status === M)) {
                                    if (U.status !== M)
                                        if ((c((0, I.hidePendingRecordingNotification)(y)), U.status !== h || (A && A.status === h))) {
                                            if (U.status === b && (!A || A.status !== b)) {
                                                c((0, I.showStoppedRecordingNotification)(y, G && (0, N.getParticipantDisplayName)(l, G.getId())));
                                                var w,
                                                    P,
                                                    V = 0;
                                                A && A.timestamp && (V = Date.now() / 1e3 - A.timestamp),
                                                    y === _.JitsiRecordingConstants.mode.FILE
                                                        ? ((w = R.RECORDING_OFF_SOUND_ID), (P = R.RECORDING_ON_SOUND_ID))
                                                        : y === _.JitsiRecordingConstants.mode.STREAM && ((w = R.LIVE_STREAMING_OFF_SOUND_ID), (P = R.LIVE_STREAMING_ON_SOUND_ID)),
                                                    w && P && ((0, n.sendAnalytics)((0, n.createRecordingEvent)("stop", y, V)), c((0, S.stopSound)(P)), c((0, S.playSound)(w)));
                                            }
                                        } else {
                                            var J,
                                                k = L && (0, N.getParticipantDisplayName)(l, L.getId());
                                            k && c((0, I.showStartedRecordingNotification)(y, k)),
                                                y === _.JitsiRecordingConstants.mode.FILE ? (J = R.RECORDING_ON_SOUND_ID) : y === _.JitsiRecordingConstants.mode.STREAM && (J = R.LIVE_STREAMING_ON_SOUND_ID),
                                                J && ((0, n.sendAnalytics)((0, n.createRecordingEvent)("start", y)), c((0, S.playSound)(J)));
                                        }
                                } else c((0, I.showPendingRecordingNotification)(y));
                        }
                        return C;
                    };
                };
            });
    },
    1418,
    [2, 385, 819, 383, 388, 540, 542, 825, 1364, 1365, 1377, 1376, 1419]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.RECORDING_ON_SOUND_FILE = e.RECORDING_OFF_SOUND_FILE = e.LIVE_STREAMING_ON_SOUND_FILE = e.LIVE_STREAMING_OFF_SOUND_FILE = void 0);
        e.LIVE_STREAMING_OFF_SOUND_FILE = "liveStreamingOff.mp3";
        e.LIVE_STREAMING_ON_SOUND_FILE = "liveStreamingOn.mp3";
        e.RECORDING_OFF_SOUND_FILE = "recordingOff.mp3";
        e.RECORDING_ON_SOUND_FILE = "recordingOn.mp3";
    },
    1419,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = t(r(d[1])),
            s = t(r(d[2])),
            u = r(d[3]),
            o = r(d[4]),
            f = { pendingNotificationUids: {}, sessionDatas: [] };
        function c(t, u) {
            return t.find(function (t) {
                return t.id === u.id;
            })
                ? t.map(function (t) {
                    return t.id === u.id ? (0, s.default)({}, u) : t;
                })
                : (0, n.default)(t).concat([(0, s.default)({}, u)]);
        }
        u.ReducerRegistry.register("features/recording", function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
                case o.CLEAR_RECORDING_SESSIONS:
                    return (0, s.default)({}, t, { sessionDatas: [] });
                case o.RECORDING_SESSION_UPDATED:
                    return (0, s.default)({}, t, { sessionDatas: c(t.sessionDatas, n.sessionData) });
                case o.SET_PENDING_RECORDING_NOTIFICATION_UID:
                    var u = (0, s.default)({}, t.pendingNotificationUids);
                    return (u[n.streamType] = n.uid), (0, s.default)({}, t, { pendingNotificationUids: u });
                case o.SET_STREAM_KEY:
                    return (0, s.default)({}, t, { streamKey: n.streamKey });
                default:
                    return t;
            }
        });
    },
    1420,
    [3, 32, 54, 542, 1365]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
        var o = r(d[3]);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return o[t];
                    },
                });
        });
        var c = r(d[4]);
        Object.keys(c).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return c[t];
                    },
                });
        }),
            r(d[5]),
            r(d[6]),
            r(d[7]);
    },
    1421,
    [1422, 1423, 1424, 1427, 1428, 1429, 1431, 1432]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setParticipantsWithScreenShare = function (n) {
                return { type: t.SCREEN_SHARE_PARTICIPANTS_UPDATED, participantIds: n };
            }),
            (e.setTileView = n),
            (e.toggleTileView = function () {
                return function (t, u) {
                    var o = u()["features/video-layout"].tileViewEnabled;
                    t(n(!o));
                };
            });
        var t = r(d[0]);
        function n(n) {
            return { type: t.SET_TILE_VIEW, enabled: n };
        }
    },
    1422,
    [1423]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SET_TILE_VIEW = e.SCREEN_SHARE_PARTICIPANTS_UPDATED = void 0);
        e.SCREEN_SHARE_PARTICIPANTS_UPDATED = "SCREEN_SHARE_PARTICIPANTS_UPDATED";
        e.SET_TILE_VIEW = "SET_TILE_VIEW";
    },
    1423,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "TileViewButton", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
        var n = t(r(d[1]));
    },
    1424,
    [3, 1425]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4])),
            c = t(r(d[5])),
            b = r(d[6]),
            s = r(d[7]),
            f = r(d[8]),
            v = r(d[9]),
            w = r(d[10]),
            V = r(d[11]),
            _ = t(r(d[12])),
            p = (function (t) {
                function s() {
                    var t, n;
                    (0, l.default)(this, s);
                    for (var c = arguments.length, b = new Array(c), v = 0; v < c; v++) b[v] = arguments[v];
                    return (
                        ((n = (0, o.default)(this, (t = (0, u.default)(s)).call.apply(t, [this].concat(b)))).accessibilityLabel = "toolbar.accessibilityLabel.tileView"),
                        (n.icon = f.IconTileView),
                        (n.label = "toolbar.enterTileView"),
                        (n.toggledLabel = "toolbar.exitTileView"),
                        (n.tooltip = "toolbar.tileViewToggle"),
                        n
                    );
                }
                return (
                    (0, c.default)(s, t),
                    (0, n.default)(s, [
                        {
                            key: "_handleClick",
                            value: function () {
                                var t = this.props,
                                    l = t._tileViewEnabled,
                                    n = t.dispatch;
                                (0, b.sendAnalytics)((0, b.createToolbarEvent)("tileview.button", { is_enabled: l }));
                                var o = !l;
                                _.default.debug("Tile view " + (o ? "enable" : "disable")), n((0, V.setTileView)(o));
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props._tileViewEnabled;
                            },
                        },
                    ]),
                    s
                );
            })(w.AbstractButton);
        var y = (0, s.translate)(
            (0, v.connect)(function (t) {
                return { _tileViewEnabled: t["features/video-layout"].tileViewEnabled };
            })(p)
        );
        e.default = y;
    },
    1425,
    [3, 4, 5, 6, 9, 10, 385, 615, 403, 542, 1053, 1422, 1426]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = (0, r(d[0]).getLogger)("features/video-layout");
        e.default = t;
    },
    1426,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.LAYOUTS = void 0);
        e.LAYOUTS = { HORIZONTAL_FILMSTRIP_VIEW: "horizontal-filmstrip-view", TILE_VIEW: "tile-view", VERTICAL_FILMSTRIP_VIEW: "vertical-filmstrip-view" };
    },
    1427,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getCurrentLayout = function (n) {
                if (u(n)) return t.LAYOUTS.TILE_VIEW;
                if (interfaceConfig.VERTICAL_FILMSTRIP) return t.LAYOUTS.VERTICAL_FILMSTRIP_VIEW;
                return t.LAYOUTS.HORIZONTAL_FILMSTRIP_VIEW;
            }),
            (e.getMaxColumnCount = o),
            (e.getTileViewGridDimensions = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o(),
                    u = t["features/base/config"].iAmRecorder,
                    f = t["features/base/participants"].length - (u ? 1 : 0),
                    l = Math.ceil(Math.sqrt(f)),
                    s = Math.min(l, n),
                    c = Math.ceil(f / s),
                    I = Math.min(n, c);
                return { columns: s, visibleRows: I };
            }),
            (e.shouldDisplayTileView = u);
        var t = r(d[0]),
            n = r(d[1]);
        function o() {
            var t = interfaceConfig.TILE_VIEW_MAX_COLUMNS || 5;
            return Math.max(Math.min(t, 1), 5);
        }
        function u() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Boolean(
                t["features/video-layout"] &&
                t["features/video-layout"].tileViewEnabled &&
                (!t["features/etherpad"] || !t["features/etherpad"].editing) &&
                ("undefined" == typeof interfaceConfig || !interfaceConfig.filmStripOnly) &&
                !(0, n.getPinnedParticipant)(t)
            );
        }
    },
    1428,
    [1427, 540]
);
__d(
    function (g, r, i, a, m, e, d) {
        r(d[0]);
    },
    1429,
    [1430]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            c = r(d[2]),
            s = r(d[3]),
            u = r(d[4]);
        n.MiddlewareRegistry.register(function (n) {
            return function (l) {
                return function (p) {
                    switch (p.type) {
                        case t.PIN_PARTICIPANT:
                            var T = Boolean(p.participant.id),
                                o = n.getState()["features/video-layout"].tileViewEnabled;
                            T && o && n.dispatch((0, u.setTileView)(!1));
                            break;
                        case c.SET_DOCUMENT_EDITING_STATUS:
                            p.editing && n.dispatch((0, u.setTileView)(!1));
                            break;
                        case s.SET_TILE_VIEW:
                            var _ = n.getState();
                            p.enabled && ((0, t.getPinnedParticipant)(_) && n.dispatch((0, t.pinParticipant)(null)), _["features/etherpad"].editing && n.dispatch((0, c.toggleDocument)()));
                    }
                    return l(p);
                };
            };
        });
    },
    1430,
    [540, 542, 1353, 1423, 1422]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            s = r(d[3]),
            l = r(d[4]),
            u = { screenShares: [], tileViewEnabled: !1 };
        s.PersistenceRegistry.register("features/video-layout", { tileViewEnabled: !0 }),
            n.ReducerRegistry.register("features/video-layout", function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                    s = arguments.length > 1 ? arguments[1] : void 0;
                switch (s.type) {
                    case l.SCREEN_SHARE_PARTICIPANTS_UPDATED:
                        return (0, t.default)({}, n, { screenShares: s.participantIds });
                    case l.SET_TILE_VIEW:
                        return (0, t.default)({}, n, { tileViewEnabled: s.enabled });
                }
                return n;
            });
    },
    1431,
    [3, 54, 542, 834, 1423]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            c = r(d[3]),
            s = r(d[4]),
            u = r(d[5]),
            o = r(d[6]),
            f = r(d[7]);
        function p() {
            return "object" == typeof interfaceConfig ? interfaceConfig.AUTO_PIN_LATEST_SCREEN_SHARE : "remote-only";
        }
        function l(t) {
            var n = t.dispatch,
                s = (0, t.getState)(),
                u = s["features/video-layout"].screenShares;
            if (u) {
                var o = u[u.length - 1];
                o ? n((0, c.pinParticipant)(o)) : (0, c.getPinnedParticipant)(s["features/base/participants"]) && n((0, c.pinParticipant)(null));
            }
        }
        s.StateListenerRegistry.register(
            function (t) {
                return (0, o.shouldDisplayTileView)(t);
            },
            function (t, c) {
                var s = c.dispatch;
                s((0, u.selectParticipant)()), t || (s((0, n.setMaxReceiverVideoQuality)(n.VIDEO_QUALITY_LEVELS.HIGH)), p() && l(c));
            }
        ),
            s.StateListenerRegistry.register(
                function (t) {
                    return t["features/base/tracks"];
                },
                (0, t.default)(function (t, n) {
                    if (p()) {
                        var c = n.getState()["features/video-layout"].screenShares || [],
                            u = t.reduce(function (t, n) {
                                "video" === n.mediaType && "desktop" === n.videoType && (("remote-only" === p() && n.local) || t.push(n.participantId));
                                return t;
                            }, []),
                            o = c.filter(function (t) {
                                return u.includes(t);
                            });
                        u.forEach(function (t) {
                            o.includes(t) || o.push(t);
                        }),
                            (0, s.equals)(c, o) || (n.dispatch((0, f.setParticipantsWithScreenShare)(o)), l(n));
                    }
                }, 100)
            );
    },
    1432,
    [3, 598, 383, 540, 542, 1433, 1428, 1422]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        }),
            r(d[2]),
            r(d[3]),
            r(d[4]);
    },
    1433,
    [1434, 1436, 1440, 1441, 1442]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.selectParticipant = l),
            (e.selectParticipantInLargeVideo = function () {
                return function (t, n) {
                    var c = n(),
                        o = v(c),
                        u = c["features/large-video"];
                    o !== u.participantId && (t({ type: f.SELECT_LARGE_VIDEO_PARTICIPANT, participantId: o }), t(l()));
                };
            }),
            (e.updateKnownLargeVideoResolution = function (t) {
                return { type: f.UPDATE_KNOWN_LARGE_VIDEO_RESOLUTION, resolution: t };
            });
        var t = r(d[0]),
            n = r(d[1]),
            c = r(d[2]),
            o = r(d[3]),
            u = r(d[4]),
            p = r(d[5]),
            f = r(d[6]);
        function l() {
            return function (c, f) {
                var l = f(),
                    s = l["features/base/conference"].conference;
                if (s) {
                    var v = (0, p.shouldDisplayTileView)(l)
                        ? (0, o.getParticipants)(l).map(function (t) {
                            return t.id;
                        })
                        : [l["features/large-video"].participantId];
                    try {
                        s.selectParticipants(v);
                    } catch (c) {
                        (0, n._handleParticipantError)(c), (0, t.sendAnalytics)((0, t.createSelectParticipantFailedEvent)(c)), (0, u.reportError)(c, "Failed to select participants " + v.toString());
                    }
                }
            };
        }
        function s(t) {
            for (var n = t.length - 1; n >= 0; --n) {
                var o = t[n];
                if (!o.local && o.mediaType === c.MEDIA_TYPE.VIDEO) return o;
            }
        }
        function v(t) {
            var n = t["features/base/participants"],
                c = n.find(function (t) {
                    return t.pinned;
                }),
                o = c && c.id;
            if (
                !o &&
                !(o =
                    (c = n.find(function (t) {
                        return t.dominantSpeaker && !t.local;
                    })) && c.id)
            ) {
                var u = s(t["features/base/tracks"]);
                if (!(o = u && u.participantId)) {
                    for (var p = n.length; p > 0 && !c; p--) {
                        var f = n[p - 1];
                        !f.botType && (c = f);
                    }
                    o = c && c.id;
                }
            }
            return o;
        }
    },
    1434,
    [385, 383, 754, 540, 849, 1421, 1435]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.UPDATE_KNOWN_LARGE_VIDEO_RESOLUTION = e.SELECT_LARGE_VIDEO_PARTICIPANT = void 0);
        e.SELECT_LARGE_VIDEO_PARTICIPANT = "SELECT_LARGE_VIDEO_PARTICIPANT";
        e.UPDATE_KNOWN_LARGE_VIDEO_RESOLUTION = "UPDATE_KNOWN_LARGE_VIDEO_RESOLUTION";
    },
    1435,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = { LargeVideo: !0 };
        Object.defineProperty(e, "LargeVideo", {
            enumerable: !0,
            get: function () {
                return o.default;
            },
        });
        var o = t(r(d[1])),
            u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(n, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return u[t];
                        },
                    }));
        });
    },
    1436,
    [3, 1437, 1439]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = n(r(d[2])),
            s = n(r(d[3])),
            l = n(r(d[4])),
            u = n(r(d[5])),
            c = n(r(d[6])),
            f = n(r(d[7])),
            v = n(r(d[8])),
            h = t(r(d[9])),
            _ = r(d[10]),
            p = r(d[11]),
            C = r(d[12]),
            y = r(d[13]),
            I = (r(d[14]), r(d[15])),
            S = { avatarSize: I.AVATAR_SIZE, useConnectivityInfoLabel: !0 },
            b = (function (t) {
                function n(t) {
                    var l;
                    return (0, s.default)(this, n), ((l = (0, u.default)(this, (0, c.default)(n).call(this, t))).state = (0, o.default)({}, S)), (l._onDimensionsChanged = l._onDimensionsChanged.bind((0, v.default)((0, v.default)(l)))), l;
                }
                return (
                    (0, f.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "_onDimensionsChanged",
                            value: function (t, n) {
                                var o,
                                    s = 2 * Math.round(Math.min(n, t) / 2);
                                (o = s < 1.5 * I.AVATAR_SIZE ? { avatarSize: s - 15, useConnectivityInfoLabel: !1 } : S), this.setState(o);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.state,
                                    n = t.avatarSize,
                                    o = t.useConnectivityInfoLabel,
                                    s = this.props,
                                    l = s._participantId,
                                    u = s._styles,
                                    c = s.onClick;
                                return h.default.createElement(
                                    y.DimensionsDetector,
                                    { onDimensionsChanged: this._onDimensionsChanged },
                                    h.default.createElement(p.ParticipantView, {
                                        avatarSize: n,
                                        onPress: c,
                                        participantId: l,
                                        style: u.largeVideo,
                                        testHintId: "org.jitsi.meet.LargeVideo",
                                        useConnectivityInfoLabel: o,
                                        zOrder: 0,
                                        zoomEnabled: !0,
                                    })
                                );
                            },
                        },
                    ]),
                    n
                );
            })(h.Component);
        var D = (0, C.connect)(function (t) {
            return { _participantId: t["features/large-video"].participantId, _styles: _.ColorSchemeRegistry.get(t, "LargeVideo") };
        })(b);
        e.default = D;
    },
    1437,
    [2, 3, 54, 4, 5, 6, 9, 10, 8, 13, 925, 540, 542, 1167, 406, 1438]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.AVATAR_SIZE = void 0);
        var o = t(r(d[1])),
            l = r(d[2]),
            c = r(d[3]);
        (e.AVATAR_SIZE = 200),
            c.ColorSchemeRegistry.register("LargeVideo", { largeVideo: (0, o.default)({}, l.StyleSheet.absoluteFillObject, { alignItems: "stretch", backgroundColor: (0, c.schemeColor)("background"), flex: 1, justifyContent: "center" }) });
    },
    1438,
    [3, 54, 17, 925]
);
__d(function (g, r, i, a, m, e, d) { }, 1439, []);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            c = r(d[1]),
            s = r(d[2]),
            n = r(d[3]),
            p = r(d[4]);
        s.MiddlewareRegistry.register(function (s) {
            return function (T) {
                return function (A) {
                    var I = T(A);
                    switch (A.type) {
                        case c.DOMINANT_SPEAKER_CHANGED:
                            var P = (0, c.getLocalParticipant)(s.getState());
                            P && P.id !== A.participant.id && s.dispatch((0, p.selectParticipantInLargeVideo)());
                            break;
                        case c.PARTICIPANT_JOINED:
                        case c.PARTICIPANT_LEFT:
                        case c.PIN_PARTICIPANT:
                        case n.TRACK_ADDED:
                        case n.TRACK_REMOVED:
                            s.dispatch((0, p.selectParticipantInLargeVideo)());
                            break;
                        case t.CONFERENCE_JOINED:
                            s.dispatch((0, p.selectParticipant)());
                            break;
                        case n.TRACK_UPDATED:
                            if ("videoType" in A.track) {
                                var E = s.getState(),
                                    N = (0, n.getTrackByJitsiTrack)(E["features/base/tracks"], A.track.jitsiTrack),
                                    _ = E["features/large-video"].participantId;
                                N.participantId === _ && s.dispatch((0, p.selectParticipant)());
                            }
                    }
                    return I;
                };
            };
        });
    },
    1440,
    [383, 540, 542, 803, 1434]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            u = r(d[3]),
            I = r(d[4]);
        u.ReducerRegistry.register("features/large-video", function () {
            var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                c = arguments.length > 1 ? arguments[1] : void 0;
            switch (c.type) {
                case n.PARTICIPANT_ID_CHANGED:
                    if (u.participantId === c.oldValue) return (0, t.default)({}, u, { participantId: c.newValue });
                    break;
                case I.SELECT_LARGE_VIDEO_PARTICIPANT:
                    return (0, t.default)({}, u, { participantId: c.participantId });
                case I.UPDATE_KNOWN_LARGE_VIDEO_RESOLUTION:
                    return (0, t.default)({}, u, { resolution: c.resolution });
            }
            return u;
        });
    },
    1441,
    [3, 54, 540, 542, 1435]
);
__d(function (g, r, i, a, m, e, d) { }, 1442, []);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            l = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4])),
            c = t(r(d[5])),
            s = r(d[6]),
            f = r(d[7]),
            p = r(d[8]),
            b = r(d[9]),
            v = r(d[10]),
            h = (function (t) {
                function f() {
                    var t, l;
                    (0, n.default)(this, f);
                    for (var c = arguments.length, s = new Array(c), b = 0; b < c; b++) s[b] = arguments[b];
                    return ((l = (0, o.default)(this, (t = (0, u.default)(f)).call.apply(t, [this].concat(s)))).accessibilityLabel = "toolbar.accessibilityLabel.help"), (l.icon = p.IconHelp), (l.label = "toolbar.help"), l;
                }
                return (
                    (0, c.default)(f, t),
                    (0, l.default)(f, [
                        {
                            key: "_handleClick",
                            value: function () {
                                (0, s.sendAnalytics)((0, s.createToolbarEvent)("help.pressed")), (0, v.openURLInBrowser)(this.props._userDocumentationURL);
                            },
                        },
                    ]),
                    f
                );
            })(r(d[11]).AbstractButton);
        var y = (0, f.translate)(
            (0, b.connect)(function (t) {
                var n = (t["features/base/config"].deploymentUrls || {}).userDocumentationURL;
                return { _userDocumentationURL: n, visible: "string" == typeof n };
            })(h)
        );
        e.default = y;
    },
    1443,
    [3, 4, 5, 6, 9, 10, 385, 615, 403, 542, 849, 1053]
);
__d(
    function (g, r, i, a, m, e, d) {
        var l = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = l(r(d[1])),
            n = l(r(d[2])),
            o = l(r(d[3])),
            u = l(r(d[4])),
            c = l(r(d[5])),
            f = r(d[6]),
            s = r(d[7]),
            y = r(d[8]),
            b = r(d[9]),
            O = (function (l) {
                function s() {
                    var l, n;
                    (0, t.default)(this, s);
                    for (var c = arguments.length, f = new Array(c), b = 0; b < c; b++) f[b] = arguments[b];
                    return (
                        ((n = (0, o.default)(this, (l = (0, u.default)(s)).call.apply(l, [this].concat(f)))).accessibilityLabel = "toolbar.accessibilityLabel.audioOnly"),
                        (n.icon = y.IconAudioOnly),
                        (n.label = "toolbar.audioOnlyOn"),
                        (n.toggledIcon = y.IconAudioOnlyOff),
                        (n.toggledLabel = "toolbar.audioOnlyOff"),
                        n
                    );
                }
                return (
                    (0, c.default)(s, l),
                    (0, n.default)(s, [
                        {
                            key: "_handleClick",
                            value: function () {
                                this.props.dispatch((0, f.toggleAudioOnly)());
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props._audioOnly;
                            },
                        },
                    ]),
                    s
                );
            })(r(d[10]).AbstractButton);
        var v = (0, s.translate)(
            (0, b.connect)(function (l) {
                var t = l["features/base/audio-only"].enabled;
                return { _audioOnly: Boolean(t) };
            })(O)
        );
        e.default = v;
    },
    1444,
    [3, 4, 5, 6, 9, 10, 872, 615, 403, 542, 1053]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4])),
            c = r(d[5]),
            s = r(d[6]),
            f = (function (t) {
                function c() {
                    var t, u;
                    (0, l.default)(this, c);
                    for (var f = arguments.length, b = new Array(f), v = 0; v < f; v++) b[v] = arguments[v];
                    return ((u = (0, n.default)(this, (t = (0, o.default)(c)).call.apply(t, [this].concat(b)))).accessibilityLabel = "toolbar.accessibilityLabel.moreOptions"), (u.icon = s.IconMenu), (u.label = "toolbar.moreOptions"), u;
                }
                return (0, u.default)(c, t), c;
            })(r(d[7]).AbstractButton),
            b = (0, c.translate)(f);
        e.default = b;
    },
    1445,
    [3, 4, 6, 9, 10, 615, 403, 1053]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            l = t(r(d[2])),
            o = t(r(d[3])),
            s = t(r(d[4])),
            c = t(r(d[5])),
            u = r(d[6]),
            p = r(d[7]),
            f = r(d[8]),
            b = r(d[9]),
            v = r(d[10]),
            _ = (function (t) {
                function p() {
                    var t, l;
                    (0, n.default)(this, p);
                    for (var c = arguments.length, u = new Array(c), b = 0; b < c; b++) u[b] = arguments[b];
                    return (
                        ((l = (0, o.default)(this, (t = (0, s.default)(p)).call.apply(t, [this].concat(u)))).accessibilityLabel = "toolbar.accessibilityLabel.raiseHand"),
                        (l.icon = f.IconRaisedHand),
                        (l.label = "toolbar.raiseYourHand"),
                        (l.toggledLabel = "toolbar.lowerYourHand"),
                        l
                    );
                }
                return (
                    (0, c.default)(p, t),
                    (0, l.default)(p, [
                        {
                            key: "_handleClick",
                            value: function () {
                                this._toggleRaisedHand();
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props._raisedHand;
                            },
                        },
                        {
                            key: "_toggleRaisedHand",
                            value: function () {
                                var t = !this.props._raisedHand;
                                (0, u.sendAnalytics)((0, u.createToolbarEvent)("raise.hand", { enable: t })), this.props.dispatch((0, b.participantUpdated)({ id: this.props._localParticipant.id, local: !0, raisedHand: t }));
                            },
                        },
                    ]),
                    p
                );
            })(r(d[11]).AbstractButton);
        var h = (0, p.translate)(
            (0, v.connect)(function (t) {
                var n = (0, b.getLocalParticipant)(t);
                return { _localParticipant: n, _raisedHand: n.raisedHand };
            })(_)
        );
        e.default = h;
    },
    1446,
    [3, 4, 5, 6, 9, 10, 385, 615, 403, 540, 542, 1053]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = t(r(d[1])),
            o = t(r(d[2])),
            n = t(r(d[3])),
            u = t(r(d[4])),
            c = t(r(d[5])),
            s = r(d[6]),
            f = r(d[7]),
            b = r(d[8]),
            v = r(d[9]),
            _ = r(d[10]),
            h = r(d[11]),
            p = (function (t) {
                function s() {
                    var t, o;
                    (0, l.default)(this, s);
                    for (var c = arguments.length, b = new Array(c), v = 0; v < c; v++) b[v] = arguments[v];
                    return (
                        ((o = (0, n.default)(this, (t = (0, u.default)(s)).call.apply(t, [this].concat(b)))).accessibilityLabel = "toolbar.accessibilityLabel.toggleCamera"),
                        (o.icon = f.IconSwitchCamera),
                        (o.label = "toolbar.toggleCamera"),
                        o
                    );
                }
                return (
                    (0, c.default)(s, t),
                    (0, o.default)(s, [
                        {
                            key: "_handleClick",
                            value: function () {
                                this.props.dispatch((0, b.toggleCameraFacingMode)());
                            },
                        },
                        {
                            key: "_isDisabled",
                            value: function () {
                                return this.props._audioOnly || this.props._videoMuted;
                            },
                        },
                    ]),
                    s
                );
            })(_.AbstractButton);
        var y = (0, s.translate)(
            (0, v.connect)(function (t) {
                var l = t["features/base/audio-only"].enabled,
                    o = t["features/base/tracks"];
                return { _audioOnly: Boolean(l), _videoMuted: (0, h.isLocalTrackMuted)(o, b.MEDIA_TYPE.VIDEO) };
            })(p)
        );
        e.default = y;
    },
    1447,
    [3, 4, 5, 6, 9, 10, 615, 403, 754, 542, 1053, 803]
);
__d(
    function (g, r, i, a, m, e, d) {
        var o = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = o(r(d[1])),
            l = r(d[2]),
            n = r(d[3]),
            u = { backgroundColor: (0, l.schemeColor)("button"), borderRadius: 25, borderWidth: 0, flex: 0, flexDirection: "row", height: 50, justifyContent: "center", marginHorizontal: 7, width: 50 },
            c = { alignSelf: "center", color: n.ColorPalette.darkGrey, fontSize: 22 },
            s = (0, t.default)({}, u, { backgroundColor: (0, l.schemeColor)("buttonToggled") }),
            b = (0, t.default)({}, c, { color: n.ColorPalette.white }),
            f = {
                expandMenuContainer: { alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16, flexDirection: "column" },
                sheetGestureRecognizer: { alignItems: "stretch", flexDirection: "column" },
                toolbar: { alignItems: "center", flexDirection: "row", flexGrow: 0, justifyContent: "center", marginBottom: n.BoxModel.margin / 2, paddingHorizontal: n.BoxModel.margin },
                toolbox: { flexDirection: "column", flexGrow: 0 },
            };
        (e.default = f),
            l.ColorSchemeRegistry.register("Toolbox", {
                buttonStyles: { iconStyle: c, style: u },
                buttonStylesBorderless: { iconStyle: b, style: (0, t.default)({}, u, { backgroundColor: "transparent" }) },
                chatButtonOverride: { toggled: { backgroundColor: n.ColorPalette.blue } },
                hangupButtonStyles: { iconStyle: b, style: (0, t.default)({}, u, { backgroundColor: (0, l.schemeColor)("hangup") }), underlayColor: n.ColorPalette.buttonUnderlay },
                toggledButtonStyles: { iconStyle: b, style: (0, t.default)({}, s, { borderColor: (0, l.schemeColor)("buttonToggledBorder"), borderWidth: 1 }) },
            });
    },
    1448,
    [3, 54, 925, 406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = t(r(d[1])),
            u = t(r(d[2])),
            n = t(r(d[3])),
            l = t(r(d[4])),
            s = t(r(d[5])),
            c = t(r(d[6])),
            f = t(r(d[7])),
            y = r(d[8]),
            h = r(d[9]),
            _ = r(d[10]),
            b = r(d[11]),
            p = r(d[12]),
            v = r(d[13]),
            M = r(d[14]),
            T = t(r(d[15])),
            E = (function (t) {
                function _(t) {
                    var u;
                    return (
                        (0, o.default)(this, _),
                        ((u = (0, n.default)(this, (0, l.default)(_).call(this, t))).accessibilityLabel = "toolbar.accessibilityLabel.videomute"),
                        (u.label = "toolbar.videomute"),
                        (u.tooltip = "toolbar.videomute"),
                        (u._onKeyboardShortcut = u._onKeyboardShortcut.bind((0, f.default)((0, f.default)(u)))),
                        u
                    );
                }
                return (
                    (0, c.default)(_, t),
                    (0, u.default)(_, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                "undefined" == typeof APP || APP.keyboardshortcut.registerShortcut("V", null, this._onKeyboardShortcut, "keyboardShortcuts.videoMute");
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                "undefined" == typeof APP || APP.keyboardshortcut.unregisterShortcut("V");
                            },
                        },
                        {
                            key: "_isVideoMuted",
                            value: function () {
                                return this.props._videoMuted;
                            },
                        },
                        {
                            key: "_onKeyboardShortcut",
                            value: function () {
                                (0, y.sendAnalytics)((0, y.createShortcutEvent)(y.VIDEO_MUTE, y.ACTION_SHORTCUT_TRIGGERED, { enable: !this._isVideoMuted() })), (0, s.default)((0, l.default)(_.prototype), "_handleClick", this).call(this);
                            },
                        },
                        {
                            key: "_setVideoMuted",
                            value: function (t) {
                                (0, y.sendAnalytics)((0, y.createToolbarEvent)(y.VIDEO_MUTE, { enable: t })), this.props._audioOnly && this.props.dispatch((0, h.setAudioOnly)(!1, !0));
                                var o = this.props._videoMediaType;
                                this.props.dispatch((0, b.setVideoMuted)(t, o, b.VIDEO_MUTISM_AUTHORITY.USER, !0)), "undefined" == typeof APP || APP.UI.emitEvent(T.default.VIDEO_MUTED, t, !0);
                            },
                        },
                    ]),
                    _
                );
            })(v.AbstractVideoMuteButton);
        var P = (0, _.translate)(
            (0, p.connect)(function (t) {
                var o = t["features/base/audio-only"].enabled,
                    u = t["features/base/tracks"];
                return { _audioOnly: Boolean(o), _videoMediaType: (0, M.getLocalVideoType)(u), _videoMuted: (0, M.isLocalVideoTrackMuted)(u) };
            })(E)
        );
        e.default = P;
    },
    1449,
    [3, 4, 5, 6, 9, 47, 10, 8, 385, 872, 615, 754, 542, 1053, 803, 874]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        function u(t, n) {
            if ("object" == typeof APP)
                if (n.fullScreen) {
                    var u = document.documentElement || {};
                    "function" == typeof u.requestFullscreen ? u.requestFullscreen() : "function" == typeof u.mozRequestFullScreen ? u.mozRequestFullScreen() : "function" == typeof u.webkitRequestFullscreen && u.webkitRequestFullscreen();
                } else
                    "function" == typeof document.exitFullscreen
                        ? document.exitFullscreen()
                        : "function" == typeof document.mozCancelFullScreen
                            ? document.mozCancelFullScreen()
                            : "function" == typeof document.webkitExitFullscreen && document.webkitExitFullscreen();
            return t(n);
        }
        t.MiddlewareRegistry.register(function (t) {
            return function (o) {
                return function (c) {
                    switch (c.type) {
                        case n.CLEAR_TOOLBOX_TIMEOUT:
                            var l = t.getState()["features/toolbox"].timeoutID;
                            clearTimeout(l);
                            break;
                        case n.SET_FULL_SCREEN:
                            return u(o, c);
                        case n.SET_TOOLBOX_TIMEOUT:
                            var s = t.getState()["features/toolbox"].timeoutID,
                                f = c.handler,
                                F = c.timeoutMS;
                            clearTimeout(s), (c.timeoutID = setTimeout(f, F));
                    }
                    return o(c);
                };
            };
        });
    },
    1450,
    [542, 1338]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            l = r(d[2]),
            O = r(d[3]);
        l.ReducerRegistry.register("features/toolbox", function () {
            var s,
                u,
                n,
                _ =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ((s = !1),
                            (u = !1),
                            (n = 5e3),
                            "undefined" != typeof interfaceConfig &&
                            (interfaceConfig.INITIAL_TOOLBAR_TIMEOUT && (n = interfaceConfig.INITIAL_TOOLBAR_TIMEOUT), void 0 !== interfaceConfig.TOOLBAR_ALWAYS_VISIBLE && (s = interfaceConfig.TOOLBAR_ALWAYS_VISIBLE)),
                            !0 === s && (u = !0),
                            { alwaysVisible: s, enabled: !0, hovered: !1, overflowMenuVisible: !1, timeoutID: null, timeoutMS: n, visible: u }),
                T = arguments.length > 1 ? arguments[1] : void 0;
            switch (T.type) {
                case O.CLEAR_TOOLBOX_TIMEOUT:
                    return (0, t.default)({}, _, { timeoutID: void 0 });
                case O.FULL_SCREEN_CHANGED:
                    return (0, t.default)({}, _, { fullScreen: T.fullScreen });
                case O.SET_OVERFLOW_MENU_VISIBLE:
                    return (0, t.default)({}, _, { overflowMenuVisible: T.visible });
                case O.SET_TOOLBAR_HOVERED:
                    return (0, t.default)({}, _, { hovered: T.hovered });
                case O.SET_TOOLBOX_ALWAYS_VISIBLE:
                    return (0, t.default)({}, _, { alwaysVisible: T.alwaysVisible, visible: !0 === T.alwaysVisible || _.visible });
                case O.SET_TOOLBOX_ENABLED:
                    return (0, t.default)({}, _, { enabled: T.enabled });
                case O.SET_TOOLBOX_TIMEOUT:
                    return (0, t.default)({}, _, { timeoutID: T.timeoutID, timeoutMS: T.timeoutMS });
                case O.SET_TOOLBOX_TIMEOUT_MS:
                    return (0, t.default)({}, _, { timeoutMS: T.timeoutMS });
                case O.SET_TOOLBOX_VISIBLE:
                    return (0, l.set)(_, "visible", _.alwaysVisible || T.visible);
                case O.TOGGLE_TOOLBOX_VISIBLE:
                    return (0, l.set)(_, "visible", _.alwaysVisible || !_.visible);
            }
            return _;
        });
    },
    1451,
    [3, 54, 542, 1338]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.INCOMING_MSG_SOUND_FILE = void 0);
        e.INCOMING_MSG_SOUND_FILE = "incomingMessage.wav";
    },
    1452,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var s = r(d[0]),
            t = s(r(d[1])),
            n = s(r(d[2])),
            p = r(d[3]),
            c = r(d[4]),
            v = { isOpen: !1, lastReadMessage: void 0, messages: [], privateMessageRecipient: void 0 };
        p.ReducerRegistry.register("features/chat", function () {
            var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                p = arguments.length > 1 ? arguments[1] : void 0;
            switch (p.type) {
                case c.ADD_MESSAGE:
                    var o = { displayName: p.displayName, error: p.error, id: p.id, messageType: p.messageType, message: p.message, privateMessage: p.privateMessage, recipient: p.recipient, timestamp: p.timestamp },
                        l = "ReactNative" === navigator.product ? [o].concat((0, n.default)(s.messages)) : (0, n.default)(s.messages).concat([o]);
                    return (0, t.default)({}, s, { lastReadMessage: p.hasRead ? o : s.lastReadMessage, messages: l });
                case c.CLEAR_MESSAGES:
                    return (0, t.default)({}, s, { lastReadMessage: void 0, messages: [] });
                case c.SET_PRIVATE_MESSAGE_RECIPIENT:
                    return (0, t.default)({}, s, { isOpen: Boolean(p.participant) || s.isOpen, privateMessageRecipient: p.participant });
                case c.TOGGLE_CHAT:
                    return (0, t.default)({}, s, { isOpen: !s.isOpen, lastReadMessage: s.messages["ReactNative" === navigator.product ? 0 : s.messages.length - 1], privateMessageRecipient: s.isOpen ? void 0 : s.privateMessageRecipient });
            }
            return s;
        });
    },
    1453,
    [3, 54, 32, 542, 1313]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = r(d[1]),
            o = r(d[2]),
            l = r(d[3]),
            u = t(r(d[4]));
        var c = (0, n.translate)(
            (0, l.connect)(function (t) {
                return { visible: (0, o.isLocalParticipantModerator)(t) };
            })(u.default)
        );
        e.default = c;
    },
    1454,
    [3, 615, 540, 542, 1455]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = t(r(d[1])),
            c = t(r(d[2])),
            n = t(r(d[3])),
            o = t(r(d[4])),
            u = t(r(d[5])),
            f = r(d[6]),
            p = r(d[7]),
            s = r(d[8]),
            b = r(d[9]),
            v = (function (t) {
                function s() {
                    var t, c;
                    (0, l.default)(this, s);
                    for (var u = arguments.length, f = new Array(u), b = 0; b < u; b++) f[b] = arguments[b];
                    return ((c = (0, n.default)(this, (t = (0, o.default)(s)).call.apply(t, [this].concat(f)))).accessibilityLabel = "toolbar.accessibilityLabel.kick"), (c.icon = p.IconKick), (c.label = "videothumbnail.kick"), c;
                }
                return (
                    (0, u.default)(s, t),
                    (0, c.default)(s, [
                        {
                            key: "_handleClick",
                            value: function () {
                                var t = this.props,
                                    l = t.dispatch,
                                    c = t.participantID;
                                l((0, f.openDialog)(b.KickRemoteParticipantDialog, { participantID: c }));
                            },
                        },
                    ]),
                    s
                );
            })(s.AbstractButton);
        e.default = v;
    },
    1455,
    [3, 4, 5, 6, 9, 10, 1079, 403, 1053, 1303]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            o = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = o(r(d[2])),
            l = r(d[3]),
            u = r(d[4]),
            c = r(d[5]),
            f = t(r(d[6]));
        var v = (0, l.translate)(
            (0, c.connect)(function (t, o) {
                return (0, n.default)({}, (0, f._mapStateToProps)(t, o), { visible: (0, u.isLocalParticipantModerator)(t) });
            })(f.default)
        );
        e.default = v;
    },
    1456,
    [2, 3, 54, 615, 540, 542, 1457]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t, u) {
                var n = t["features/base/tracks"];
                return { _audioTrackMuted: (0, _.isRemoteTrackMuted)(n, b.MEDIA_TYPE.AUDIO, u.participantID) };
            }),
            (e.default = void 0);
        var u = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            l = t(r(d[4])),
            c = t(r(d[5])),
            s = r(d[6]),
            p = r(d[7]),
            f = r(d[8]),
            b = r(d[9]),
            v = r(d[10]),
            _ = r(d[11]),
            h = r(d[12]),
            M = (function (t) {
                function b() {
                    var t, n;
                    (0, u.default)(this, b);
                    for (var c = arguments.length, s = new Array(c), p = 0; p < c; p++) s[p] = arguments[p];
                    return (
                        ((n = (0, o.default)(this, (t = (0, l.default)(b)).call.apply(t, [this].concat(s)))).accessibilityLabel = "toolbar.accessibilityLabel.remoteMute"),
                        (n.icon = f.IconMicDisabled),
                        (n.label = "videothumbnail.domute"),
                        (n.toggledLabel = "videothumbnail.muted"),
                        n
                    );
                }
                return (
                    (0, c.default)(b, t),
                    (0, n.default)(b, [
                        {
                            key: "_handleClick",
                            value: function () {
                                var t = this.props,
                                    u = t.dispatch,
                                    n = t.participantID;
                                (0, s.sendAnalytics)((0, s.createRemoteVideoMenuButtonEvent)("mute.button", { participant_id: n })), u((0, p.openDialog)(h.MuteRemoteParticipantDialog, { participantID: n }));
                            },
                        },
                        {
                            key: "_isDisabled",
                            value: function () {
                                return this.props._audioTrackMuted;
                            },
                        },
                        {
                            key: "_isToggled",
                            value: function () {
                                return this.props._audioTrackMuted;
                            },
                        },
                    ]),
                    b
                );
            })(v.AbstractButton);
        e.default = M;
    },
    1457,
    [3, 4, 5, 6, 9, 10, 385, 1079, 403, 754, 1053, 803, 1303]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            l = t(r(d[2])),
            o = t(r(d[3])),
            c = t(r(d[4])),
            u = t(r(d[5])),
            s = r(d[6]),
            f = r(d[7]),
            p = r(d[8]),
            b = r(d[9]),
            h = (function (t) {
                function s() {
                    var t, l;
                    (0, n.default)(this, s);
                    for (var u = arguments.length, p = new Array(u), b = 0; b < u; b++) p[b] = arguments[b];
                    return ((l = (0, o.default)(this, (t = (0, c.default)(s)).call.apply(t, [this].concat(p)))).accessibilityLabel = "toolbar.accessibilityLabel.show"), (l.icon = f.IconPin), (l.label = "videothumbnail.show"), l;
                }
                return (
                    (0, u.default)(s, t),
                    (0, l.default)(s, [
                        {
                            key: "_handleClick",
                            value: function () {
                                (0, this.props.dispatch)((0, p.pinParticipant)(this.props.participantID));
                            },
                        },
                    ]),
                    s
                );
            })(r(d[10]).AbstractButton);
        var v = (0, s.translate)(
            (0, b.connect)(function (t) {
                return { visible: t["features/video-layout"].tileViewEnabled };
            })(h)
        );
        e.default = v;
    },
    1458,
    [3, 4, 5, 6, 9, 10, 615, 403, 540, 542, 1053]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = r(d[0]),
            o = r(d[1]),
            l = (0, o.createStyleSheet)({
                participantNameContainer: { alignItems: "center", borderBottomColor: o.ColorPalette.darkGrey, borderBottomWidth: 1, flexDirection: "row", height: t.MD_ITEM_HEIGHT },
                participantNameLabel: { color: o.ColorPalette.lightGrey, flexShrink: 1, fontSize: t.MD_FONT_SIZE, marginLeft: t.MD_ITEM_MARGIN_PADDING, opacity: 0.9 },
            });
        e.default = l;
    },
    1459,
    [1079, 406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            l = n(r(d[3])),
            f = n(r(d[4])),
            o = n(r(d[5])),
            c = n(r(d[6])),
            h = t(r(d[7])),
            s = r(d[8]),
            v = r(d[9]),
            p = (function (t) {
                function n() {
                    return (0, u.default)(this, n), (0, f.default)(this, (0, o.default)(n).apply(this, arguments));
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return h.default.createElement(v.BaseIndicator, { highlight: !1, icon: s.IconMicDisabled });
                            },
                        },
                    ]),
                    n
                );
            })(h.Component);
        e.default = p;
    },
    1460,
    [2, 3, 4, 5, 6, 9, 10, 13, 403, 394]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            l = n(r(d[3])),
            f = n(r(d[4])),
            o = n(r(d[5])),
            c = n(r(d[6])),
            h = t(r(d[7])),
            p = r(d[8]),
            s = r(d[9]),
            v = (function (t) {
                function n() {
                    return (0, u.default)(this, n), (0, f.default)(this, (0, o.default)(n).apply(this, arguments));
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return h.default.createElement(s.BaseIndicator, { highlight: !0, icon: p.IconDominantSpeaker });
                            },
                        },
                    ]),
                    n
                );
            })(h.Component);
        e.default = v;
    },
    1461,
    [2, 3, 4, 5, 6, 9, 10, 13, 403, 394]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            l = n(r(d[3])),
            o = n(r(d[4])),
            f = n(r(d[5])),
            c = n(r(d[6])),
            h = t(r(d[7])),
            s = r(d[8]),
            v = r(d[9]),
            p = (function (t) {
                function n() {
                    return (0, u.default)(this, n), (0, o.default)(this, (0, f.default)(n).apply(this, arguments));
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return h.default.createElement(v.BaseIndicator, { highlight: !1, icon: s.IconModerator });
                            },
                        },
                    ]),
                    n
                );
            })(h.Component);
        e.default = p;
    },
    1462,
    [2, 3, 4, 5, 6, 9, 10, 13, 403, 394]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            l = n(r(d[3])),
            f = n(r(d[4])),
            o = n(r(d[5])),
            c = n(r(d[6])),
            s = n(r(d[7])),
            h = r(d[8]),
            _ = r(d[9]),
            p = r(d[10]),
            v = t(r(d[11])),
            y = (function (t) {
                function n() {
                    return (0, u.default)(this, n), (0, f.default)(this, (0, o.default)(n).apply(this, arguments));
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "_renderIndicator",
                            value: function () {
                                return s.default.createElement(_.BaseIndicator, { highlight: !0, icon: h.IconRaisedHand });
                            },
                        },
                    ]),
                    n
                );
            })(v.default),
            I = (0, p.connect)(v._mapStateToProps)(y);
        e.default = I;
    },
    1463,
    [2, 3, 4, 5, 6, 9, 10, 13, 403, 394, 542, 1464]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t, n) {
                var u = (0, s.getParticipantById)(t, n.participantId);
                return { _raisedHand: u && u.raisedHand };
            }),
            (e.default = void 0);
        var n = t(r(d[1])),
            u = t(r(d[2])),
            o = t(r(d[3])),
            f = t(r(d[4])),
            l = t(r(d[5])),
            p = r(d[6]),
            s = r(d[7]),
            c = (function (t) {
                function p() {
                    return (0, n.default)(this, p), (0, o.default)(this, (0, f.default)(p).apply(this, arguments));
                }
                return (
                    (0, l.default)(p, t),
                    (0, u.default)(p, [
                        {
                            key: "render",
                            value: function () {
                                return this.props._raisedHand ? this._renderIndicator() : null;
                            },
                        },
                    ]),
                    p
                );
            })(p.Component);
        e.default = c;
    },
    1464,
    [3, 4, 5, 6, 9, 10, 13, 540]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            l = n(r(d[3])),
            f = n(r(d[4])),
            o = n(r(d[5])),
            c = n(r(d[6])),
            h = t(r(d[7])),
            s = r(d[8]),
            v = r(d[9]),
            p = (function (t) {
                function n() {
                    return (0, u.default)(this, n), (0, f.default)(this, (0, o.default)(n).apply(this, arguments));
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return h.default.createElement(v.BaseIndicator, { highlight: !1, icon: s.IconCameraDisabled });
                            },
                        },
                    ]),
                    n
                );
            })(h.Component);
        e.default = p;
    },
    1465,
    [2, 3, 4, 5, 6, 9, 10, 13, 403, 394]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var s = n(r(d[2])),
            u = n(r(d[3])),
            l = n(r(d[4])),
            o = n(r(d[5])),
            h = n(r(d[6])),
            c = n(r(d[7])),
            f = n(r(d[8])),
            p = t(r(d[9])),
            v = r(d[10]),
            y = r(d[11]),
            _ = r(d[12]),
            w = r(d[13]),
            k = n(r(d[14])),
            C = n(r(d[15])),
            D = (function (t) {
                function n(t) {
                    var s;
                    return (0, u.default)(this, n), ((s = (0, o.default)(this, (0, h.default)(n).call(this, t))).state = { height: 0, width: 0 }), (s._onDimensionsChanged = s._onDimensionsChanged.bind((0, f.default)((0, f.default)(s)))), s;
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this._updateReceiverQuality();
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this._updateReceiverQuality();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props.onClick,
                                    n = this.state,
                                    u = n.height,
                                    l = n.width,
                                    o = this._groupIntoRows(this._renderThumbnails(), this._getColumnCount());
                                return p.default.createElement(
                                    w.DimensionsDetector,
                                    { onDimensionsChanged: this._onDimensionsChanged },
                                    p.default.createElement(
                                        v.ScrollView,
                                        { style: (0, s.default)({}, C.default.tileView, { height: u, width: l }) },
                                        p.default.createElement(v.TouchableWithoutFeedback, { onPress: t }, p.default.createElement(v.View, { style: (0, s.default)({}, C.default.tileViewRows, { minHeight: u, minWidth: l }) }, o))
                                    )
                                );
                            },
                        },
                        {
                            key: "_getColumnCount",
                            value: function () {
                                var t = this.props._participants.length;
                                return (0, w.isNarrowAspectRatio)(this) ? (t >= 3 ? 2 : 1) : 4 === t ? 2 : Math.min(3, t);
                            },
                        },
                        {
                            key: "_getSortedParticipants",
                            value: function () {
                                var t,
                                    n = [],
                                    s = this.props._participants,
                                    u = Array.isArray(s),
                                    l = 0;
                                for (s = u ? s : s["function" == typeof Symbol ? Symbol.iterator : "@@iterator"](); ;) {
                                    var o;
                                    if (u) {
                                        if (l >= s.length) break;
                                        o = s[l++];
                                    } else {
                                        if ((l = s.next()).done) break;
                                        o = l.value;
                                    }
                                    var h = o;
                                    h.local ? (t = h) : n.push(h);
                                }
                                return t && n.push(t), n;
                            },
                        },
                        {
                            key: "_getTileDimensions",
                            value: function () {
                                var t,
                                    n = this.props._participants,
                                    s = this.state,
                                    u = s.height,
                                    l = s.width,
                                    o = this._getColumnCount(),
                                    h = u - 20,
                                    c = l - 20;
                                return { height: (t = n.length / o > 1 ? Math.min(c / o, h / 2) : Math.min(c / o, h)) / 1, width: t };
                            },
                        },
                        {
                            key: "_groupIntoRows",
                            value: function (t, n) {
                                for (var s = [], u = 0; u < t.length; u++)
                                    if (u % n == 0) {
                                        var l = t.slice(u, u + n);
                                        s.push(p.default.createElement(v.View, { key: s.length, style: C.default.tileViewRow }, l));
                                    }
                                return s;
                            },
                        },
                        {
                            key: "_onDimensionsChanged",
                            value: function (t, n) {
                                this.setState({ height: n, width: t });
                            },
                        },
                        {
                            key: "_renderThumbnails",
                            value: function () {
                                var t = { aspectRatio: 1, flex: 0, height: this._getTileDimensions().height, width: null };
                                return this._getSortedParticipants().map(function (n) {
                                    return p.default.createElement(k.default, { disableTint: !0, key: n.id, participant: n, renderDisplayName: !0, styleOverrides: t, tileView: !0 });
                                });
                            },
                        },
                        {
                            key: "_updateReceiverQuality",
                            value: function () {
                                var t = this._getTileDimensions().height,
                                    n = (0, y.getNearestReceiverVideoQualityLevel)(t);
                                this.props.dispatch((0, y.setMaxReceiverVideoQuality)(n));
                            },
                        },
                    ]),
                    n
                );
            })(p.Component);
        var b = (0, _.connect)(function (t) {
            return { _participants: t["features/base/participants"] };
        })((0, w.makeAspectRatioAware)(D));
        e.default = b;
    },
    1466,
    [2, 3, 54, 4, 5, 6, 9, 10, 8, 13, 17, 383, 542, 1167, 1301, 1299]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0])(r(d[1])),
            s = r(d[2]),
            t = r(d[3]),
            l = { enabled: !0, horizontalViewDimensions: {}, tileViewDimensions: {}, visible: !0 };
        s.ReducerRegistry.register("features/filmstrip", function () {
            var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                o = arguments.length > 1 ? arguments[1] : void 0;
            switch (o.type) {
                case t.SET_FILMSTRIP_ENABLED:
                    return (0, n.default)({}, s, { enabled: o.enabled });
                case t.SET_FILMSTRIP_HOVERED:
                    return (0, n.default)({}, s, { hovered: o.hovered });
                case t.SET_FILMSTRIP_VISIBLE:
                    return (0, n.default)({}, s, { visible: o.visible });
                case t.SET_HORIZONTAL_VIEW_DIMENSIONS:
                    return (0, n.default)({}, s, { horizontalViewDimensions: o.dimensions });
                case t.SET_TILE_VIEW_DIMENSIONS:
                    return (0, n.default)({}, s, { tileViewDimensions: o.dimensions });
            }
            return s;
        });
    },
    1467,
    [3, 54, 542, 1292]
);
__d(function (g, r, i, a, m, e, d) { }, 1468, []);
__d(function (g, r, i, a, m, e, d) { }, 1469, []);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.FOLLOW_ME_COMMAND = void 0);
        e.FOLLOW_ME_COMMAND = "follow-me";
    },
    1470,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = (0, r(d[0]).getLogger)("features/follow-me");
        e.default = o;
    },
    1471,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            s = r(d[2]),
            f = r(d[3]);
        function u(t) {
            var n = (0, s.getPinnedParticipant)(t);
            return { filmstripVisible: t["features/filmstrip"].visible, nextOnStage: n && n.id, sharedDocumentVisible: t["features/etherpad"].editing, tileViewEnabled: t["features/video-layout"].tileViewEnabled };
        }
        function o(t, o) {
            var l = o.getState(),
                c = (0, n.getCurrentConference)(l);
            c &&
                (0, s.isLocalParticipantModerator)(l) &&
                ("off" !== t ? l["features/base/conference"].followMeEnabled && c.sendCommand(f.FOLLOW_ME_COMMAND, { attributes: u(l) }) : c.sendCommandOnce(f.FOLLOW_ME_COMMAND, { attributes: { off: !0 } }));
        }
        t.StateListenerRegistry.register(
            function (t) {
                return t["features/base/conference"].followMeEnabled;
            },
            function (t, n) {
                return o(t || "off", n);
            }
        ),
            t.StateListenerRegistry.register(function (t) {
                var n = (0, s.getPinnedParticipant)(t);
                return n ? n.id : null;
            }, o),
            t.StateListenerRegistry.register(function (t) {
                return t["features/etherpad"].editing;
            }, o),
            t.StateListenerRegistry.register(function (t) {
                return t["features/filmstrip"].visible;
            }, o),
            t.StateListenerRegistry.register(function (t) {
                return t["features/video-layout"].tileViewEnabled;
            }, o);
    },
    1472,
    [542, 383, 540, 1470]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            s = r(d[1]);
        s.ReducerRegistry.register("features/follow-me", function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = arguments.length > 1 ? arguments[1] : void 0;
            switch (o.type) {
                case t.SET_FOLLOW_ME_MODERATOR:
                    var _ = (0, s.set)(n, "moderator", o.id);
                    return o.id || (_ = (0, s.set)(_, "state", void 0)), _;
                case t.SET_FOLLOW_ME_STATE:
                    return (0, s.set)(n, "state", o.state);
            }
            return n;
        });
    },
    1473,
    [1289, 542]
);
__d(
    function (g, r, i, a, m, e, d) {
        r(d[0]);
    },
    1474,
    [1475]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            s = r(d[2]),
            c = r(d[3]),
            f = r(d[4]),
            l = r(d[5]),
            o = r(d[6]),
            u = r(d[7]),
            E = r(d[8]),
            _ = t(r(d[9]));
        function N(t) {
            var n = (0, t.getState)(),
                s = n["features/base/conference"].conference,
                c = n["features/base/audio-only"].enabled,
                f = n["features/background"].appState,
                l = n["features/filmstrip"].enabled,
                o = n["features/base/config"];
            if (s) {
                var E = void 0 === o.channelLastN ? -1 : o.channelLastN;
                if ("active" !== f) E = 0;
                else if (c) {
                    var N = n["features/video-layout"],
                        T = N.screenShares,
                        I = N.tileViewEnabled,
                        S = n["features/large-video"].participantId,
                        A = S ? (0, u.getParticipantById)(n, S) : void 0;
                    E = I || !A || A.local ? 0 : (T || []).includes(S) ? 1 : 0;
                } else l || (E = 1);
                if (s.getLastN() !== E) {
                    _.default.info("Setting last N to: " + E);
                    try {
                        s.setLastN(E);
                    } catch (t) {
                        _.default.error("Failed to set lastN: " + t);
                    }
                }
            } else _.default.debug("There is no active conference, not updating last N");
        }
        E.MiddlewareRegistry.register(function (t) {
            return function (u) {
                return function (E) {
                    var _ = u(E);
                    switch (E.type) {
                        case c.APP_STATE_CHANGED:
                        case o.CONFERENCE_JOINED:
                        case f.SCREEN_SHARE_PARTICIPANTS_UPDATED:
                        case s.SELECT_LARGE_VIDEO_PARTICIPANT:
                        case l.SET_AUDIO_ONLY:
                        case n.SET_FILMSTRIP_ENABLED:
                        case f.SET_TILE_VIEW:
                            N(t);
                    }
                    return _;
                };
            };
        });
    },
    1475,
    [3, 1292, 1435, 892, 1423, 875, 1072, 751, 542, 1476]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = (0, r(d[0]).getLogger)("features/base/lastn");
        e.default = t;
    },
    1476,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        r(d[0]);
    },
    1477,
    [1478]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0])(r(d[1])),
            t = r(d[2]);
        r(d[3]).StateListenerRegistry.register(
            function (n) {
                var t = n["features/recent-list"];
                return t && t.length && t[t.length - 1];
            },
            function (c, o, u) {
                (0, n.default)(o),
                    u &&
                    c &&
                    u.conference === c.conference &&
                    0 === c.duration &&
                    (0, t.sendAnalytics)((0, t.createRejoinedEvent)({ lastConferenceDuration: u.duration / 1e3, timeSinceLeft: (Date.now() - (u.date + u.duration)) / 1e3, url: u.conference }));
            }
        );
    },
    1478,
    [3, 1479, 385, 542]
);
__d(
    function (g, r, i, a, m, e, d) {
        m.exports = function (n) {
            if (null == n) throw new TypeError("Cannot destructure undefined");
        };
    },
    1479,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            o = r(d[3]),
            u = r(d[4]),
            c = r(d[5]),
            s = r(d[6]),
            f = r(d[7]);
        function l(t, n, o) {
            var c = n(o),
                s = window,
                f = s.history,
                l = s.location;
            if (f && l && f.length && "function" == typeof f.replaceState) {
                var h = (0, u.getURLWithoutParams)(l);
                l !== h && f.replaceState(f.state, (document && document.title) || "", h);
            }
            return c;
        }
        function h(t, n, o) {
            var u = t.dispatch;
            if (!p(t.getState, o)) return n(o);
            u((0, s.reloadNow)());
        }
        function p(o, u) {
            var c = u.error;
            if (c && "item-not-found" === c.message && c.details && c.details.shard_changed) {
                var s = o(),
                    f = s["features/base/connection"].timeEstablished,
                    l = s["features/base/config"]._immediateReloadThreshold,
                    h = f && Date.now() - f,
                    p = !f || h <= ("number" == typeof l ? l : 1500);
                return (0, n.sendAnalytics)((0, n.createConnectionEvent)("failed", (0, t.default)({}, c, { connectionEstablished: f, splitBrain: p, timeSinceConnectionEstablished: h }))), p;
            }
            return !1;
        }
        function E(t, n, o) {
            var u,
                c,
                s = n(o);
            return (
                (u = (0, t.getState)()),
                (c = u["features/base/app"].app),
                (0, f._getRouteToRender)(u).then(function (t) {
                    return c._navigate(t);
                }),
                s
            );
        }
        c.MiddlewareRegistry.register(function (t) {
            return function (n) {
                return function (c) {
                    switch (c.type) {
                        case u.CONNECTION_ESTABLISHED:
                            return l(t, n, c);
                        case u.CONNECTION_FAILED:
                            return h(t, n, c);
                        case o.SET_ROOM:
                            return E(t, n, c);
                    }
                    return n(c);
                };
            };
        });
    },
    1480,
    [3, 54, 385, 383, 1066, 542, 382, 1481]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._getRouteToRender = function (o) {
                var n = (0, t.toState)(o);
                if ("ReactNative" === navigator.product) return l(n);
                return v(n) || P(n);
            });
        var o = r(d[0]),
            n = r(d[1]),
            t = r(d[2]),
            c = r(d[3]),
            s = r(d[4]),
            u = r(d[5]),
            f = r(d[6]),
            p = r(d[7]);
        function l(o) {
            var t = h();
            return (0, n.isRoomValid)(o["features/base/conference"].room) ? (t.component = s.Conference) : (0, p.isWelcomePageAppEnabled)(o) ? (t.component = p.WelcomePage) : (t.component = p.BlankPage), Promise.resolve(t);
        }
        function v(o) {
            if ((0, n.isRoomValid)(o["features/base/conference"].room)) {
                var t = h(),
                    p = o["features/base/connection"].locationURL;
                return window.location.href !== p.href
                    ? ((t.href = p.href), Promise.resolve(t))
                    : (0, u.getDeepLinkingPage)(o).then(function (o) {
                        return o ? (t.component = o) : (0, c.isSupportedBrowser)() ? (t.component = s.Conference) : (t.component = f.UnsupportedDesktopBrowser), t;
                    });
            }
        }
        function P(n) {
            var t = h();
            if ((0, p.isWelcomePageUserEnabled)(n)) (0, c.isSupportedBrowser)() ? (t.component = p.WelcomePage) : (t.component = f.UnsupportedDesktopBrowser);
            else {
                var s = window.location.href;
                s.endsWith("/") || (s += "/"), (t.href = s + (0, o.generateRoomWithoutSeparator)());
            }
            return Promise.resolve(t);
        }
        function h() {
            return { component: p.BlankPage, href: void 0 };
        }
    },
    1481,
    [880, 383, 542, 1482, 1484, 1567, 1577, 1581]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1482,
    [1483]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isBrowsersOptimal = function (n) {
                return (interfaceConfig.OPTIMAL_BROWSERS || f).includes(n);
            }),
            (e.isSuboptimalBrowser = function () {
                return !b(interfaceConfig.OPTIMAL_BROWSERS || f) && l();
            }),
            (e.isSupportedBrowser = l);
        var o = n(r(d[1])),
            t = r(d[2]),
            s = o.default.util.browser,
            f = ["chrome", "electron", "firefox", "nwjs"],
            u = [],
            c = { chrome: s.isChrome.bind(s), chromium: s.isChromiumBased.bind(s), electron: s.isElectron.bind(s), firefox: s.isFirefox.bind(s), nwjs: s.isNWJS.bind(s), opera: s.isOpera.bind(s), safari: s.isSafari.bind(s) };
        function l() {
            return "ReactNative" !== navigator.product && !(!(0, t.isMobileBrowser)() && b(interfaceConfig.UNSUPPORTED_BROWSERS || u)) && ((0, t.isMobileBrowser)() || o.default.isWebRtcSupported());
        }
        function b(n) {
            return Boolean(
                n.find(function (n) {
                    var o = c[n];
                    return !!o && o.call(s);
                })
            );
        }
    },
    1483,
    [3, 388, 1014]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        }),
            r(d[2]);
    },
    1484,
    [1485, 1486, 1559]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.notifyKickedOut = function (o, c) {
                return function (l, p) {
                    l((0, t.openDialog)(t.AlertDialog, { contentKey: { key: "dialog.kickTitle", params: { participantDisplayName: (0, n.getParticipantDisplayName)(p, o.getId()) } }, onSubmit: c }));
                };
            });
        var t = r(d[0]),
            n = r(d[1]);
    },
    1485,
    [1079, 540]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1486,
    [1487]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "Conference", {
                enumerable: !0,
                get: function () {
                    return t.default;
                },
            }),
            Object.defineProperty(e, "renderConferenceTimer", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var t = n(r(d[1])),
            u = n(r(d[2]));
    },
    1487,
    [3, 1488, 1558]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            u = n(r(d[4])),
            c = n(r(d[5])),
            s = n(r(d[6])),
            f = n(r(d[7])),
            p = n(r(d[8])),
            _ = n(r(d[9])),
            b = n(r(d[10])),
            E = r(d[11]),
            h = n(r(d[12])),
            v = r(d[13]),
            C = r(d[14]),
            k = r(d[15]),
            V = r(d[16]),
            y = r(d[17]),
            P = r(d[18]),
            I = r(d[19]),
            w = r(d[20]),
            x = r(d[21]),
            B = r(d[22]),
            T = r(d[23]),
            N = r(d[24]),
            A = r(d[25]),
            R = r(d[26]),
            S = r(d[27]),
            F = r(d[28]),
            L = r(d[29]),
            D = n(r(d[30])),
            U = n(r(d[31])),
            H = n(r(d[32])),
            M = t(r(d[33])),
            j = (function (t) {
                function n(t) {
                    var l;
                    return (
                        (0, o.default)(this, n),
                        ((l = (0, c.default)(this, (0, s.default)(n).call(this, t)))._onClick = l._onClick.bind((0, _.default)((0, _.default)(l)))),
                        (l._onHardwareBackPress = l._onHardwareBackPress.bind((0, _.default)((0, _.default)(l)))),
                        (l._setToolboxVisible = l._setToolboxVisible.bind((0, _.default)((0, _.default)(l)))),
                        l
                    );
                }
                return (
                    (0, p.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                A.BackButtonRegistry.addListener(this._onHardwareBackPress);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                A.BackButtonRegistry.removeListener(this._onHardwareBackPress);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return b.default.createElement(k.Container, { style: M.default.conference }, b.default.createElement(E.StatusBar, { barStyle: "light-content", hidden: !0, translucent: !0 }), this._renderContent());
                            },
                        },
                        {
                            key: "_onClick",
                            value: function () {
                                this._setToolboxVisible(!this.props._toolboxVisible);
                            },
                        },
                        {
                            key: "_onHardwareBackPress",
                            value: function () {
                                var t,
                                    n = this;
                                this.props._pictureInPictureEnabled ? (t = E.NativeModules.PictureInPicture.enterPictureInPicture()) : (t = Promise.reject(new Error("PiP not enabled")));
                                return (
                                    t.catch(function () {
                                        n.props.dispatch((0, v.appNavigate)(void 0));
                                    }),
                                    !0
                                );
                            },
                        },
                        {
                            key: "_renderConferenceNotification",
                            value: function () {
                                var t = this.props,
                                    n = t._calendarEnabled,
                                    l = t._reducedUI;
                                return n && !l ? b.default.createElement(I.ConferenceNotification, null) : void 0;
                            },
                        },
                        {
                            key: "_renderContent",
                            value: function () {
                                var t = this.props,
                                    n = t._connecting,
                                    l = t._filmstripVisible,
                                    o = t._largeVideoParticipantId,
                                    u = t._reducedUI,
                                    c = t._shouldDisplayTileView,
                                    s = t._toolboxVisible,
                                    f = l && (0, y.isNarrowAspectRatio)(this) && !c;
                                return u
                                    ? this._renderContentForReducedUi()
                                    : b.default.createElement(
                                        b.default.Fragment,
                                        null,
                                        b.default.createElement(R.AddPeopleDialog, null),
                                        b.default.createElement(w.Chat, null),
                                        b.default.createElement(B.SharedDocument, null),
                                        c ? b.default.createElement(T.TileView, { onClick: this._onClick }) : b.default.createElement(N.LargeVideo, { onClick: this._onClick }),
                                        b.default.createElement(R.CalleeInfoContainer, null),
                                        n && b.default.createElement(k.TintedView, null, b.default.createElement(k.LoadingIndicator, null)),
                                        b.default.createElement(
                                            E.SafeAreaView,
                                            { pointerEvents: "box-none", style: M.default.toolboxAndFilmstripContainer },
                                            s &&
                                            b.default.createElement(h.default, {
                                                colors: M.NAVBAR_GRADIENT_COLORS,
                                                end: { x: 0, y: 0 },
                                                pointerEvents: "none",
                                                start: { x: 0, y: 1 },
                                                style: [M.default.bottomGradient, f ? M.default.gradientStretchBottom : void 0],
                                            }),
                                            b.default.createElement(D.default, null),
                                            b.default.createElement(S.Captions, { onPress: this._onClick }),
                                            c || b.default.createElement(x.DisplayNameLabel, { participantId: o }),
                                            b.default.createElement(U.default, null),
                                            b.default.createElement(F.Toolbox, null),
                                            c ? void 0 : b.default.createElement(T.Filmstrip, null)
                                        ),
                                        b.default.createElement(E.SafeAreaView, { pointerEvents: "box-none", style: M.default.navBarSafeView }, b.default.createElement(H.default, null), this._renderNotificationsContainer()),
                                        b.default.createElement(P.TestConnectionInfo, null),
                                        this._renderConferenceNotification()
                                    );
                            },
                        },
                        {
                            key: "_renderContentForReducedUi",
                            value: function () {
                                var t = this.props._connecting;
                                return b.default.createElement(
                                    b.default.Fragment,
                                    null,
                                    b.default.createElement(N.LargeVideo, { onClick: this._onClick }),
                                    t && b.default.createElement(k.TintedView, null, b.default.createElement(k.LoadingIndicator, null))
                                );
                            },
                        },
                        {
                            key: "_renderNotificationsContainer",
                            value: function () {
                                var t = {};
                                return (
                                    this.props._filmstripVisible && !(0, y.isNarrowAspectRatio)(this) && (t.marginRight = T.FILMSTRIP_SIZE),
                                    (0, f.default)((0, s.default)(n.prototype), "renderNotificationsContainer", this).call(this, { style: t })
                                );
                            },
                        },
                        {
                            key: "_setToolboxVisible",
                            value: function (t) {
                                this.props.dispatch((0, F.setToolboxVisible)(t));
                            },
                        },
                    ]),
                    n
                );
            })(L.AbstractConference);
        var O = (0, V.connect)(function (t) {
            var n = t["features/base/connection"],
                o = n.connecting,
                u = n.connection,
                c = t["features/base/conference"],
                s = c.conference,
                f = c.joining,
                p = c.leaving,
                _ = t["features/base/responsive-ui"].reducedUI,
                b = o || (u && (f || (!s && !p)));
            return (0,
                l.default)({}, (0, L.abstractMapStateToProps)(t), { _calendarEnabled: (0, I.isCalendarEnabled)(t), _connecting: Boolean(b), _filmstripVisible: (0, T.isFilmstripVisible)(t), _largeVideoParticipantId: t["features/large-video"].participantId, _pictureInPictureEnabled: (0, C.getFeatureFlag)(t, C.PIP_ENABLED), _reducedUI: _, _toolboxVisible: (0, F.isToolboxVisible)(t) });
        })((0, y.makeAspectRatioAware)(j));
        e.default = O;
    },
    1488,
    [2, 3, 54, 4, 5, 6, 9, 47, 10, 8, 13, 17, 1489, 381, 1152, 394, 542, 1167, 1003, 1491, 1311, 1077, 1353, 1290, 1433, 970, 1179, 1044, 1336, 1509, 1511, 1555, 1556, 1554]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            s = n(r(d[4])),
            u = n(r(d[5])),
            f = n(r(d[6])),
            c = n(r(d[7])),
            p = n(r(d[8])),
            h = t(r(d[9])),
            y = r(d[10]),
            v = n(r(d[11])),
            A = function (t, n) {
                return Array.isArray(n) ? (console.warn("LinearGradient '" + t + "' property should be an object with fields 'x' and 'y', Array type is deprecated."), { x: n[0], y: n[1] }) : n;
            },
            C = (function (t) {
                function n() {
                    return (0, s.default)(this, n), (0, f.default)(this, (0, c.default)(n).apply(this, arguments));
                }
                return (
                    (0, p.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "setNativeProps",
                            value: function (t) {
                                this.gradientRef.setNativeProps(t);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this,
                                    n = this.props,
                                    s = n.start,
                                    u = n.end,
                                    f = n.colors,
                                    c = n.locations,
                                    p = n.useAngle,
                                    C = n.angleCenter,
                                    P = n.angle,
                                    b = (0, o.default)(n, ["start", "end", "colors", "locations", "useAngle", "angleCenter", "angle"]);
                                return (
                                    f && c && f.length !== c.length && console.warn("LinearGradient colors and locations props should be arrays of the same length"),
                                    h.default.createElement(
                                        v.default,
                                        (0, l.default)(
                                            {
                                                ref: function (n) {
                                                    t.gradientRef = n;
                                                },
                                            },
                                            b,
                                            { startPoint: A("start", s), endPoint: A("end", u), colors: f.map(y.processColor), locations: c ? c.slice(0, f.length) : null, useAngle: p, angleCenter: A("angleCenter", C), angle: P }
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    n
                );
            })(h.Component);
        (e.default = C), (C.defaultProps = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } });
    },
    1489,
    [2, 3, 16, 56, 4, 5, 6, 9, 10, 13, 17, 1490]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = (0, r(d[0]).requireNativeComponent)("BVLinearGradient");
        e.default = t;
    },
    1490,
    [17]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = { isCalendarEnabled: !0 };
        Object.defineProperty(e, "isCalendarEnabled", {
            enumerable: !0,
            get: function () {
                return l.isCalendarEnabled;
            },
        });
        var n = r(d[0]);
        Object.keys(n).forEach(function (o) {
            "default" !== o &&
                "__esModule" !== o &&
                (Object.prototype.hasOwnProperty.call(t, o) ||
                    Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: function () {
                            return n[o];
                        },
                    }));
        });
        var o = r(d[1]);
        Object.keys(o).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                (Object.prototype.hasOwnProperty.call(t, n) ||
                    Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return o[n];
                        },
                    }));
        });
        var c = r(d[2]);
        Object.keys(c).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                (Object.prototype.hasOwnProperty.call(t, n) ||
                    Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                            return c[n];
                        },
                    }));
        });
        var l = r(d[3]);
        r(d[4]), r(d[5]);
    },
    1491,
    [1492, 1498, 1495, 1493, 1507, 1508]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = { openUpdateCalendarEventDialog: !0, updateCalendarEvent: !0 };
        (e.openUpdateCalendarEventDialog = function (n) {
            return (0, l.openDialog)(p.UpdateCalendarEventDialog, { eventId: n });
        }),
            (e.updateCalendarEvent = function (n) {
                return function (l, p) {
                    var c = (0, o.getDefaultURL)(p),
                        v = (0, t.generateRoomWithoutSeparator)();
                    (0, f.addLinkToCalendarEntry)(p(), n, c + "/" + v).finally(function () {
                        l((0, u.refreshCalendar)(!1, !1));
                    });
                };
            });
        var t = r(d[0]),
            o = r(d[1]),
            l = r(d[2]),
            u = r(d[3]),
            f = r(d[4]),
            p = r(d[5]),
            c = r(d[6]);
        Object.keys(c).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(n, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return c[t];
                        },
                    }));
        });
    },
    1492,
    [880, 381, 1079, 1492, 1493, 1498, 1505]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = { addLinkToCalendarEntry: !0, isCalendarEnabled: !0, _fetchCalendarEntries: !0 };
        (e.addLinkToCalendarEntry = function (t, n, f) {
            return new Promise(function (s, h) {
                (0, l.getShareInfoText)(t, f, !0).then(function (t) {
                    u.default.findEventById(n).then(function (n) {
                        var f = n.description ? n.description + "\n\n" + t : t,
                            l = (0, o.default)({ id: n.id }, c.Platform.select({ ios: { notes: f }, android: { description: f } }));
                        u.default.saveEvent(n.title, l).then(s, h);
                    }, h);
                }, h);
            });
        }),
            (e.isCalendarEnabled = function (t) {
                var n = (0, f.getFeatureFlag)(t, f.CALENDAR_ENABLED);
                if (void 0 !== n) return n;
                var o = c.NativeModules.AppInfo.calendarEnabled;
                return void 0 === o || o;
            }),
            (e._fetchCalendarEntries = function (t, n, o) {
                var c = t.dispatch,
                    f = t.getState;
                p((n && !f()["features/calendar-sync"].authorization) || o, c)
                    .then(function (n) {
                        if (n) {
                            var o = new Date(),
                                c = new Date();
                            o.setDate(o.getDate() + h.FETCH_START_DAYS),
                                c.setDate(c.getDate() + h.FETCH_END_DAYS),
                                u.default
                                    .fetchAllEvents(o.getTime(), c.getTime(), [])
                                    .then(E._updateCalendarEntries.bind(t))
                                    .catch(function (t) {
                                        return v.default.error("Error fetching calendar.", t);
                                    });
                        } else v.default.warn("Calendar access not granted.");
                    })
                    .catch(function (t) {
                        return v.default.error("Error accessing calendar.", t);
                    });
            });
        var o = t(r(d[1])),
            c = r(d[2]),
            u = t(r(d[3])),
            f = r(d[4]),
            l = r(d[5]),
            s = r(d[6]),
            h = r(d[7]),
            E = r(d[8]),
            v = t(r(d[9])),
            _ = r(d[10]);
        function p(t, n) {
            return new Promise(function (o, c) {
                u.default
                    .authorizationStatus()
                    .then(function (f) {
                        "authorized" === f
                            ? o(!0)
                            : t
                                ? u.default
                                    .authorizeEventStore()
                                    .then(function (t) {
                                        n((0, s.setCalendarAuthorization)(t)), o("authorized" === t);
                                    })
                                    .catch(c)
                                : o(!1);
                    })
                    .catch(c);
            });
        }
        Object.keys(_).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(n, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return _[t];
                        },
                    }));
        });
    },
    1493,
    [3, 54, 17, 1494, 1152, 1179, 1492, 1495, 1493, 1496, 1497]
);
__d(
    function (g, r, i, a, m, e, d) {
        "use strict";
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            o = r(d[2]),
            v = o.NativeModules.RNCalendarEvents,
            u = {
                authorizationStatus: function () {
                    return v.authorizationStatus();
                },
                authorizeEventStore: function () {
                    return v.authorizeEventStore();
                },
                fetchAllEvents: function (t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return v.fetchAllEvents(t, n, o);
                },
                findCalendars: function () {
                    return v.findCalendars();
                },
                saveCalendar: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return v.saveCalendar((0, n.default)({}, t, { color: t.color ? (0, o.processColor)(t.color) : void 0 }));
                },
                findEventById: function (t) {
                    return v.findEventById(t);
                },
                saveEvent: function (t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return v.saveEvent(t, n, o);
                },
                removeEvent: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { futureEvents: !1 };
                    return v.removeEvent(t, n);
                },
                removeFutureEvents: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { futureEvents: !0 };
                    return v.removeEvent(t, n);
                },
            };
        e.default = u;
    },
    1494,
    [3, 54, 17]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.MAX_LIST_LENGTH = e.FETCH_START_DAYS = e.FETCH_END_DAYS = e.ERRORS = e.CALENDAR_TYPE = void 0);
        e.CALENDAR_TYPE = { GOOGLE: "google", MICROSOFT: "microsoft" };
        e.ERRORS = { AUTH_FAILED: "sign_in_failed", GOOGLE_APP_MISCONFIGURED: "idpiframe_initialization_failed" };
        e.FETCH_END_DAYS = 10;
        e.FETCH_START_DAYS = -1;
        e.MAX_LIST_LENGTH = 10;
    },
    1495,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = (0, r(d[0]).getLogger)("features/calendar-sync");
        e.default = t;
    },
    1496,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._updateCalendarEntries = function (t) {
                if (!t || !t.length) return;
                for (var l = this.dispatch, u = (0, this.getState)()["features/base/known-domains"], c = new Map(), D = t, p = Array.isArray(D), y = 0, D = p ? D : D["function" == typeof Symbol ? Symbol.iterator : "@@iterator"](); ;) {
                    var h;
                    if (p) {
                        if (y >= D.length) break;
                        h = D[y++];
                    } else {
                        if ((y = D.next()).done) break;
                        h = y.value;
                    }
                    var S = h,
                        _ = v(S, u);
                    if (_ && f(_)) {
                        var N = n.default.hex(JSON.stringify([_.url, _.title, new Date(_.startDate).toTimeString()])),
                            x = c.get(N);
                        (!x || x.startDate > _.startDate) && c.set(N, _);
                    }
                }
                l(
                    (0, s.setCalendarEvents)(
                        Array.from(c.values())
                            .sort(function (t, n) {
                                return t.startDate - n.startDate;
                            })
                            .slice(0, o.MAX_LIST_LENGTH)
                    )
                );
            });
        var n = t(r(d[1])),
            s = r(d[2]),
            l = r(d[3]),
            o = r(d[4]),
            u = 828e5;
        function f(t) {
            return t.endDate > Date.now() && !((t.allDay || t.endDate - t.startDate > u) && (!t.attendees || t.attendees.length < 2));
        }
        function c(t, n, s) {
            for (var l = new RegExp(n, "gi"), o = l.exec(t); null !== o;) {
                var u = o[0];
                if (!new RegExp(s, "gi").exec(u)) return u;
                o = l.exec(t);
            }
        }
        function v(t, n) {
            if (t) {
                var s = D(t, n),
                    l = Date.parse(t.startDate),
                    o = Date.parse(t.endDate);
                if (!isNaN(l) && !isNaN(o) && ("ReactNative" === navigator.product || s || t.calendarId))
                    return { allDay: t.allDay, attendees: t.attendees, calendarId: t.calendarId, endDate: o, id: t.id, startDate: l, title: t.title, url: s };
            }
            return null;
        }
        function D(t, n) {
            for (var s = "http(s)?://(" + n.join("|") + ")/[^\\s<>$]+", o = l.APP_LINK_SCHEME + "[^\\s<>$]+", u = [t.title, t.url, t.location, t.notes, t.description], f = 0; f < u.length; f++) {
                var v = u[f];
                if ("string" == typeof v) {
                    var D = c(v, s, "/static/") || c(v, o, "/static/");
                    if (D) {
                        var p = (0, l.parseURIString)(D);
                        if (p) return p.toString();
                    }
                }
            }
            return null;
        }
    },
    1497,
    [3, 843, 1492, 849, 1495]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "ConferenceNotification", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(e, "CalendarList", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            }),
            Object.defineProperty(e, "MicrosoftSignInButton", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
            Object.defineProperty(e, "UpdateCalendarEventDialog", {
                enumerable: !0,
                get: function () {
                    return f.default;
                },
            });
        var n = t(r(d[1])),
            u = t(r(d[2])),
            o = t(r(d[3])),
            f = t(r(d[4]));
    },
    1498,
    [3, 1499, 1501, 1503, 1504]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = n(r(d[2])),
            l = n(r(d[3])),
            f = n(r(d[4])),
            u = n(r(d[5])),
            c = n(r(d[6])),
            s = n(r(d[7])),
            v = t(r(d[8])),
            y = r(d[9]),
            p = r(d[10]),
            _ = r(d[11]),
            h = r(d[12]),
            N = r(d[13]),
            C = r(d[14]),
            D = r(d[15]),
            b = n(r(d[16])),
            R = (function (t) {
                function n(t) {
                    var l;
                    return (
                        (0, o.default)(this, n),
                        ((l = (0, f.default)(this, (0, u.default)(n).call(this, t))).state = { event: void 0 }),
                        (l._getNotificationContentStyle = l._getNotificationContentStyle.bind((0, s.default)((0, s.default)(l)))),
                        (l._getNotificationPosition = l._getNotificationPosition.bind((0, s.default)((0, s.default)(l)))),
                        (l._maybeDisplayNotification = l._maybeDisplayNotification.bind((0, s.default)((0, s.default)(l)))),
                        (l._onGoToNext = l._onGoToNext.bind((0, s.default)((0, s.default)(l)))),
                        l
                    );
                }
                return (
                    (0, c.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.updateIntervalId = setInterval(this._maybeDisplayNotification, 1e4);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                clearInterval(this.updateIntervalId);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.state.event,
                                    n = this.props.t;
                                if (t) {
                                    var o = Date.now(),
                                        l = t.startDate < o && t.endDate > o ? "calendarSync.ongoingMeeting" : "calendarSync.nextMeeting";
                                    return v.default.createElement(
                                        y.View,
                                        { style: [b.default.notificationContainer, this._getNotificationPosition()] },
                                        v.default.createElement(
                                            y.View,
                                            { style: this._getNotificationContentStyle() },
                                            v.default.createElement(
                                                y.TouchableOpacity,
                                                { onPress: this._onGoToNext },
                                                v.default.createElement(
                                                    y.View,
                                                    { style: b.default.touchableView },
                                                    v.default.createElement(
                                                        y.View,
                                                        { style: b.default.notificationTextContainer },
                                                        v.default.createElement(y.Text, { style: b.default.notificationText }, n(l)),
                                                        v.default.createElement(y.Text, { style: b.default.notificationText }, (0, h.getLocalizedDateFormatter)(t.startDate).fromNow())
                                                    ),
                                                    v.default.createElement(y.View, { style: b.default.notificationIconContainer }, v.default.createElement(N.Icon, { src: N.IconNotificationJoin, style: b.default.notificationIcon }))
                                                )
                                            )
                                        )
                                    );
                                }
                                return null;
                            },
                        },
                        {
                            key: "_getNotificationContentStyle",
                            value: function () {
                                var t = this.state.event,
                                    n = this.props._aspectRatio,
                                    o = Date.now(),
                                    l = [b.default.notificationContent];
                                return (
                                    t && t.startDate < o && t.endDate > o ? l.push(b.default.notificationContentPast) : l.push(b.default.notificationContentNext),
                                    n === D.ASPECT_RATIO_NARROW ? l.push(b.default.notificationContentSide) : l.push(b.default.notificationContentTop),
                                    l
                                );
                            },
                        },
                        {
                            key: "_getNotificationPosition",
                            value: function () {
                                return this.props._aspectRatio === D.ASPECT_RATIO_NARROW ? b.default.notificationContainerSide : b.default.notificationContainerTop;
                            },
                        },
                        {
                            key: "_maybeDisplayNotification",
                            value: function () {
                                var t,
                                    n = this.props,
                                    o = n._currentConferenceURL,
                                    l = n._eventList;
                                if (l && l.length) {
                                    var f = Date.now(),
                                        u = l,
                                        c = Array.isArray(u),
                                        s = 0;
                                    for (u = c ? u : u["function" == typeof Symbol ? Symbol.iterator : "@@iterator"](); ;) {
                                        var v;
                                        if (c) {
                                            if (s >= u.length) break;
                                            v = u[s++];
                                        } else {
                                            if ((s = u.next()).done) break;
                                            v = s.value;
                                        }
                                        var y = v,
                                            p = y.url && (0, _.getURLWithoutParamsNormalized)(new URL(y.url));
                                        p && p !== o && ((!t && y.startDate > f && y.startDate < f + 3e5) || (y.startDate < f && y.endDate > f)) && (t = y);
                                    }
                                }
                                this.setState({ event: t });
                            },
                        },
                        {
                            key: "_onGoToNext",
                            value: function () {
                                var t = this.state.event;
                                t && t.url && this.props.dispatch((0, p.appNavigate)(t.url));
                            },
                        },
                    ]),
                    n
                );
            })(v.Component);
        var T = (0, h.translate)(
            (0, C.connect)(function (t) {
                var n = t["features/base/connection"].locationURL;
                return { _aspectRatio: t["features/base/responsive-ui"].aspectRatio, _currentConferenceURL: n ? (0, _.getURLWithoutParamsNormalized)(n) : "", _eventList: t["features/calendar-sync"].events };
            })(R)
        );
        e.default = T;
    },
    1499,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 381, 1066, 615, 403, 542, 1167, 1500]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = r(d[0]),
            o = (0, t.createStyleSheet)({
                noPermissionMessageButton: { backgroundColor: t.ColorPalette.blue, borderColor: t.ColorPalette.blue, borderRadius: 4, borderWidth: 1, height: 30, justifyContent: "center", margin: 15, paddingHorizontal: 20 },
                noPermissionMessageButtonText: { color: t.ColorPalette.white },
                noPermissionMessageText: { backgroundColor: "transparent", color: "rgba(255, 255, 255, 0.6)", textAlign: "center" },
                noPermissionMessageView: { alignItems: "center", flex: 1, flexDirection: "column", justifyContent: "center", padding: 20 },
                notificationContainer: { alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", overflow: "hidden", position: "absolute" },
                notificationContainerSide: { top: 100 },
                notificationContainerTop: { justifyContent: "center", left: 0, right: 0, top: 0 },
                notificationContent: { alignSelf: "flex-start", flexDirection: "row", height: 55, justifyContent: "center", paddingHorizontal: 10 },
                notificationContentNext: { backgroundColor: "#eeb231" },
                notificationContentPast: { backgroundColor: "red" },
                notificationContentSide: { borderBottomRightRadius: 55, borderTopRightRadius: 55 },
                notificationContentTop: { borderBottomLeftRadius: 27.5, borderBottomRightRadius: 27.5, paddingHorizontal: 20 },
                notificationIcon: { color: "white", fontSize: 25 },
                notificationIconContainer: { alignItems: "center", flexDirection: "row", height: 55, justifyContent: "center" },
                notificationText: { color: "white", fontSize: 13 },
                notificationTextContainer: { flexDirection: "column", height: 55, justifyContent: "center" },
                touchableView: { flexDirection: "row" },
            });
        e.default = o;
    },
    1500,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            s = t(r(d[2])),
            l = t(r(d[3])),
            u = t(r(d[4])),
            o = t(r(d[5])),
            f = t(r(d[6])),
            c = t(r(d[7])),
            p = r(d[8]),
            y = r(d[9]),
            h = r(d[10]),
            v = r(d[11]),
            E = r(d[12]),
            _ = r(d[13]),
            P = t(r(d[14])),
            b = t(r(d[15])),
            C = (function (t) {
                function h(t) {
                    var s;
                    return (0, n.default)(this, h), ((s = (0, l.default)(this, (0, u.default)(h).call(this, t)))._getRenderListEmptyComponent = s._getRenderListEmptyComponent.bind((0, f.default)((0, f.default)(s)))), s;
                }
                return (
                    (0, o.default)(h, t),
                    (0, s.default)(
                        h,
                        [
                            {
                                key: "render",
                                value: function () {
                                    var t = this.props.disabled;
                                    return b.default ? c.default.createElement(b.default, { disabled: t, listEmptyComponent: this._getRenderListEmptyComponent() }) : null;
                                },
                            },
                            {
                                key: "_getRenderListEmptyComponent",
                                value: function () {
                                    var t = this.props,
                                        n = t._authorization,
                                        s = t.t;
                                    if ("denied" === n)
                                        return c.default.createElement(
                                            p.View,
                                            { style: P.default.noPermissionMessageView },
                                            c.default.createElement(p.Text, { style: P.default.noPermissionMessageText }, s("calendarSync.permissionMessage")),
                                            c.default.createElement(
                                                p.TouchableOpacity,
                                                { onPress: y.openSettings, style: P.default.noPermissionMessageButton },
                                                c.default.createElement(p.Text, { style: P.default.noPermissionMessageButtonText }, s("calendarSync.permissionButton"))
                                            )
                                        );
                                },
                            },
                        ],
                        [
                            {
                                key: "refresh",
                                value: function (t, n) {
                                    t((0, _.refreshCalendar)(!1, n));
                                },
                            },
                        ]
                    ),
                    h
                );
            })(v.AbstractPage);
        var M = (0, h.translate)(
            (0, E.connect)(function (t) {
                return { _authorization: t["features/calendar-sync"].authorization };
            })(C)
        );
        e.default = M;
    },
    1501,
    [3, 4, 5, 6, 9, 10, 8, 13, 17, 1269, 615, 394, 542, 1492, 1500, 1502]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = n(r(d[2])),
            l = n(r(d[3])),
            s = n(r(d[4])),
            u = n(r(d[5])),
            f = n(r(d[6])),
            c = n(r(d[7])),
            y = t(r(d[8])),
            p = r(d[9]),
            v = r(d[10]),
            _ = r(d[11]),
            h = r(d[12]),
            D = r(d[13]),
            b = r(d[14]),
            S = (function (t) {
                function n(t) {
                    var l;
                    return (
                        (0, o.default)(this, n),
                        ((l = (0, s.default)(this, (0, u.default)(n).call(this, t)))._onPress = l._onPress.bind((0, c.default)((0, c.default)(l)))),
                        (l._onRefresh = l._onRefresh.bind((0, c.default)((0, c.default)(l)))),
                        (l._onSecondaryAction = l._onSecondaryAction.bind((0, c.default)((0, c.default)(l)))),
                        (l._toDateString = l._toDateString.bind((0, c.default)((0, c.default)(l)))),
                        (l._toDisplayableItem = l._toDisplayableItem.bind((0, c.default)((0, c.default)(l)))),
                        (l._toDisplayableList = l._toDisplayableList.bind((0, c.default)((0, c.default)(l)))),
                        (l._toTimeString = l._toTimeString.bind((0, c.default)((0, c.default)(l)))),
                        l
                    );
                }
                return (
                    (0, f.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                (0, v.sendAnalytics)((0, v.createCalendarSelectedEvent)());
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t.disabled,
                                    o = t.listEmptyComponent;
                                return y.default.createElement(h.NavigateSectionList, {
                                    disabled: n,
                                    onPress: this._onPress,
                                    onRefresh: this._onRefresh,
                                    onSecondaryAction: this._onSecondaryAction,
                                    renderListEmptyComponent: o,
                                    sections: this._toDisplayableList(),
                                });
                            },
                        },
                        {
                            key: "_onPress",
                            value: function (t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "calendar.meeting.tile";
                                (0, v.sendAnalytics)((0, v.createCalendarClickedEvent)(n)), this.props.dispatch((0, p.appNavigate)(t));
                            },
                        },
                        {
                            key: "_onRefresh",
                            value: function () {
                                this.props.dispatch((0, b.refreshCalendar)(!0));
                            },
                        },
                        {
                            key: "_onSecondaryAction",
                            value: function (t) {
                                this.props.dispatch((0, b.openUpdateCalendarEventDialog)(t, ""));
                            },
                        },
                        {
                            key: "_toDateString",
                            value: function (t) {
                                return "" + (0, _.getLocalizedDateFormatter)(t.startDate).format("MMM Do, YYYY");
                            },
                        },
                        {
                            key: "_toDisplayableItem",
                            value: function (t) {
                                return { id: t.id, key: t.id + "-" + t.startDate, lines: [t.url, this._toTimeString(t)], title: t.title, url: t.url };
                            },
                        },
                        {
                            key: "_toDisplayableList",
                            value: function () {
                                var t = this.props,
                                    n = t._eventList,
                                    o = t.t,
                                    l = new Date(),
                                    s = h.NavigateSectionList.createSection,
                                    u = new Map(),
                                    f = n,
                                    c = Array.isArray(f),
                                    y = 0;
                                for (f = c ? f : f["function" == typeof Symbol ? Symbol.iterator : "@@iterator"](); ;) {
                                    var p;
                                    if (c) {
                                        if (y >= f.length) break;
                                        p = f[y++];
                                    } else {
                                        if ((y = f.next()).done) break;
                                        p = y.value;
                                    }
                                    var v = p,
                                        _ = this._toDisplayableItem(v),
                                        D = new Date(v.startDate).getDate();
                                    if (D === l.getDate()) {
                                        var b = u.get("today");
                                        b || ((b = s(o("calendarSync.today"), "today")), u.set("today", b)), b.data.push(_);
                                    } else if (u.has(D)) {
                                        var S = u.get(D);
                                        S && S.data.push(_);
                                    } else {
                                        var L = s(this._toDateString(v), D);
                                        u.set(D, L), L.data.push(_);
                                    }
                                }
                                return Array.from(u.values());
                            },
                        },
                        {
                            key: "_toTimeString",
                            value: function (t) {
                                return (0, _.getLocalizedDateFormatter)(t.startDate).format("lll") + " - " + (0, _.getLocalizedDateFormatter)(t.endDate).format("LT");
                            },
                        },
                    ]),
                    n
                );
            })(y.Component);
        S.defaultProps = { _eventList: [] };
        var L = (0, _.translate)(
            (0, D.connect)(function (t) {
                return { _eventList: t["features/calendar-sync"].events };
            })(S)
        );
        e.default = L;
    },
    1502,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 381, 385, 615, 394, 542, 1492]
);
__d(function (g, r, i, a, m, e, d) { }, 1503, []);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = n(r(d[2])),
            o = n(r(d[3])),
            l = n(r(d[4])),
            f = n(r(d[5])),
            c = n(r(d[6])),
            s = n(r(d[7])),
            v = t(r(d[8])),
            p = r(d[9]),
            _ = r(d[10]),
            b = r(d[11]),
            h = r(d[12]),
            S = (function (t) {
                function n(t) {
                    var o;
                    return (0, u.default)(this, n), ((o = (0, l.default)(this, (0, f.default)(n).call(this, t)))._onSubmit = o._onSubmit.bind((0, s.default)((0, s.default)(o)))), o;
                }
                return (
                    (0, c.default)(n, t),
                    (0, o.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return v.default.createElement(p.ConfirmDialog, { contentKey: "calendarSync.confirmAddLink", onSubmit: this._onSubmit });
                            },
                        },
                        {
                            key: "_onSubmit",
                            value: function () {
                                return this.props.dispatch((0, h.updateCalendarEvent)(this.props.eventId, "")), !0;
                            },
                        },
                    ]),
                    n
                );
            })(v.Component),
            y = (0, _.translate)((0, b.connect)()(S));
        e.default = y;
    },
    1504,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 1079, 615, 542, 1492]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.refreshCalendar = function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return { type: t.REFRESH_CALENDAR, forcePermission: n, isInteractive: o };
            }),
            (e.setCalendarAuthorization = function (n) {
                return { type: t.SET_CALENDAR_AUTHORIZATION, authorization: n };
            }),
            (e.setCalendarEvents = function (n) {
                return { type: t.SET_CALENDAR_EVENTS, events: n };
            });
        var t = r(d[0]);
    },
    1505,
    [1506]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.SET_LOADING_CALENDAR_EVENTS = e.SET_CALENDAR_PROFILE_EMAIL = e.SET_CALENDAR_AUTH_STATE = e.SET_CALENDAR_INTEGRATION = e.SET_CALENDAR_EVENTS = e.SET_CALENDAR_ERROR = e.SET_CALENDAR_AUTHORIZATION = e.REFRESH_CALENDAR = e.CLEAR_CALENDAR_INTEGRATION = void 0);
        e.CLEAR_CALENDAR_INTEGRATION = "CLEAR_CALENDAR_INTEGRATION";
        e.REFRESH_CALENDAR = "REFRESH_CALENDAR";
        e.SET_CALENDAR_AUTHORIZATION = "SET_CALENDAR_AUTHORIZATION";
        e.SET_CALENDAR_ERROR = "SET_CALENDAR_ERROR";
        e.SET_CALENDAR_EVENTS = "SET_CALENDAR_EVENTS";
        e.SET_CALENDAR_INTEGRATION = "SET_CALENDAR_INTEGRATION";
        e.SET_CALENDAR_AUTH_STATE = "SET_CALENDAR_AUTH_STATE";
        e.SET_CALENDAR_PROFILE_EMAIL = "SET_CALENDAR_PROFILE_EMAIL";
        e.SET_LOADING_CALENDAR_EVENTS = "SET_LOADING_CALENDAR_EVENTS";
    },
    1506,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]),
            t = r(d[1]),
            s = r(d[2]),
            u = r(d[3]),
            c = r(d[4]),
            o = r(d[5]),
            f = r(d[6]);
        function _(n, t) {
            "background" === t.appState && n.dispatch((0, c.setCalendarAuthorization)(void 0));
        }
        s.MiddlewareRegistry.register(function (c) {
            return function (E) {
                return function (l) {
                    var v = c.getState;
                    if (!(0, f.isCalendarEnabled)(v)) return E(l);
                    switch (l.type) {
                        case t.ADD_KNOWN_DOMAINS:
                            var A = v()["features/base/known-domains"],
                                C = E(l),
                                h = v()["features/base/known-domains"];
                            return (0, s.equals)(A, h) || (0, f._fetchCalendarEntries)(c, !1, !1), C;
                        case u.APP_STATE_CHANGED:
                            var N = E(l);
                            return _(c, l), N;
                        case n.SET_CONFIG:
                            var S = E(l);
                            return (0, f._fetchCalendarEntries)(c, !1, !1), S;
                        case o.REFRESH_CALENDAR:
                            var D = E(l);
                            return (0, f._fetchCalendarEntries)(c, l.isInteractive, l.forcePermission), D;
                    }
                    return E(l);
                };
            };
        });
    },
    1507,
    [813, 815, 542, 892, 1492, 1506, 1493]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            s = r(d[3]),
            A = r(d[4]),
            E = { authorization: void 0, events: [], integrationReady: !1, integrationType: void 0, msAuthState: void 0 };
        s.PersistenceRegistry.register("features/calendar-sync", { integrationType: !0, msAuthState: !0 }),
            n.ReducerRegistry.register("features/calendar-sync", function () {
                var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                    o = arguments.length > 1 ? arguments[1] : void 0;
                switch (o.type) {
                    case A.CLEAR_CALENDAR_INTEGRATION:
                        return E;
                    case A.SET_CALENDAR_AUTH_STATE:
                        return o.msAuthState ? (0, n.set)(s, "msAuthState", (0, t.default)({}, s.msAuthState, o.msAuthState)) : (0, n.set)(s, "msAuthState", void 0);
                    case A.SET_CALENDAR_AUTHORIZATION:
                        return (0, n.set)(s, "authorization", o.authorization);
                    case A.SET_CALENDAR_ERROR:
                        return (0, n.set)(s, "error", o.error);
                    case A.SET_CALENDAR_EVENTS:
                        return (0, n.set)(s, "events", o.events);
                    case A.SET_CALENDAR_INTEGRATION:
                        return (0, t.default)({}, s, { integrationReady: o.integrationReady, integrationType: o.integrationType });
                    case A.SET_CALENDAR_PROFILE_EMAIL:
                        return (0, n.set)(s, "profileEmail", o.email);
                    case A.SET_LOADING_CALENDAR_EVENTS:
                        return (0, n.set)(s, "isLoadingEvents", o.isLoadingEvents);
                }
                return s;
            });
    },
    1508,
    [3, 54, 542, 834, 1506]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.abstractMapStateToProps = function (t) {
                return { _notificationsVisible: (0, _.shouldDisplayNotifications)(t), _room: t["features/base/conference"].room, _shouldDisplayTileView: (0, b.shouldDisplayTileView)(t) };
            }),
            (e.AbstractConference = void 0);
        var o = n(r(d[2])),
            s = n(r(d[3])),
            l = n(r(d[4])),
            u = n(r(d[5])),
            f = n(r(d[6])),
            c = t(r(d[7])),
            p = r(d[8]),
            _ = r(d[9]),
            b = r(d[10]),
            h = (function (t) {
                function n() {
                    return (0, o.default)(this, n), (0, l.default)(this, (0, u.default)(n).apply(this, arguments));
                }
                return (
                    (0, f.default)(n, t),
                    (0, s.default)(n, [
                        {
                            key: "renderNotificationsContainer",
                            value: function (t) {
                                return this.props._notificationsVisible ? c.default.createElement(p.NotificationsContainer, t) : null;
                            },
                        },
                    ]),
                    n
                );
            })(c.Component);
        e.AbstractConference = h;
    },
    1509,
    [2, 3, 4, 5, 6, 9, 10, 13, 612, 1510, 1421]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.maybeShowSuboptimalExperienceNotification = function (n, s) {
                (0, o.isSuboptimalBrowser)() && n((0, l.showWarningNotification)({ titleKey: "notify.suboptimalExperienceTitle", description: (0, t.translateToHTML)(s, "notify.suboptimalBrowserWarning") }));
            }),
            (e.shouldDisplayNotifications = function (t) {
                var o = (0, n.toState)(t),
                    c = Boolean((0, s.getOverlayToRender)(o)),
                    f = o["features/invite"].calleeInfoVisible;
                return (0, l.areThereNotifications)(o) && !c && !f;
            });
        var t = r(d[0]),
            o = r(d[1]),
            n = r(d[2]),
            l = r(d[3]),
            s = r(d[4]);
    },
    1510,
    [615, 1482, 542, 595, 1120]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = n(r(d[2])),
            s = n(r(d[3])),
            l = n(r(d[4])),
            u = n(r(d[5])),
            c = n(r(d[6])),
            p = n(r(d[7])),
            f = n(r(d[8])),
            b = n(r(d[9])),
            y = r(d[10]),
            v = r(d[11]),
            L = r(d[12]),
            h = r(d[13]),
            _ = r(d[14]),
            E = r(d[15]),
            T = r(d[16]),
            x = t(r(d[17])),
            O = r(d[18]),
            P = n(r(d[19])),
            R = {
                quality: T.VideoQualityExpandedLabel,
                recording: { component: _.RecordingExpandedLabel, props: { mode: v.JitsiRecordingConstants.mode.FILE } },
                streaming: { component: _.RecordingExpandedLabel, props: { mode: v.JitsiRecordingConstants.mode.STREAM } },
                transcribing: E.TranscribingExpandedLabel,
            },
            w = (function (t) {
                function n(t) {
                    var o;
                    return (
                        (0, s.default)(this, n),
                        ((o = (0, u.default)(this, (0, c.default)(n).call(this, t))).state = { containerLayout: void 0, labelLayouts: {}, parentPosition: void 0, visibleExpandedLabel: void 0 }),
                        (o._onTopViewLayout = o._onTopViewLayout.bind((0, f.default)((0, f.default)(o)))),
                        o
                    );
                }
                return (
                    (0, p.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                clearTimeout(this.expandedLabelTimeout);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                if (!this.props._visible) return null;
                                var t = !(0, h.isNarrowAspectRatio)(this),
                                    n = this.props,
                                    o = n._filmstripVisible,
                                    s = n._reducedUI;
                                return b.default.createElement(
                                    y.View,
                                    { pointerEvents: "box-none", style: P.default.labelWrapper },
                                    b.default.createElement(
                                        y.View,
                                        { onLayout: this._onTopViewLayout, pointerEvents: "box-none", style: [P.default.indicatorContainer, t && o && P.default.indicatorContainerWide] },
                                        b.default.createElement(
                                            y.TouchableOpacity,
                                            { onLayout: this._createOnLayout("recording"), onPress: this._createOnPress("recording") },
                                            this._renderRecordingLabel(v.JitsiRecordingConstants.mode.FILE)
                                        ),
                                        b.default.createElement(
                                            y.TouchableOpacity,
                                            { onLayout: this._createOnLayout("streaming"), onPress: this._createOnPress("streaming") },
                                            this._renderRecordingLabel(v.JitsiRecordingConstants.mode.STREAM)
                                        ),
                                        b.default.createElement(y.TouchableOpacity, { onLayout: this._createOnLayout("transcribing"), onPress: this._createOnPress("transcribing") }, this._renderTranscribingLabel()),
                                        s || b.default.createElement(y.TouchableOpacity, { onLayout: this._createOnLayout("quality"), onPress: this._createOnPress("quality") }, this._renderVideoQualityLabel())
                                    ),
                                    b.default.createElement(y.View, { style: [P.default.indicatorContainer, t && o && P.default.indicatorContainerWide] }, this._renderExpandedLabel())
                                );
                            },
                        },
                        {
                            key: "_createOnLayout",
                            value: function (t) {
                                var n = this;
                                return function (s) {
                                    var l = s.nativeEvent.layout,
                                        u = n.state.labelLayouts,
                                        c = {};
                                    (c[t] = l), n.setState({ labelLayouts: (0, o.default)({}, u, c) });
                                };
                            },
                        },
                        {
                            key: "_createOnPress",
                            value: function (t) {
                                var n = this;
                                return function () {
                                    var o = n.state,
                                        s = o.containerLayout,
                                        l = o.labelLayouts,
                                        u = n.state.visibleExpandedLabel;
                                    if (s) {
                                        var c = l[t],
                                            p = s.width - c.x;
                                        (u = u === t ? void 0 : t),
                                            clearTimeout(n.expandedLabelTimeout),
                                            n.setState({ parentPosition: p, visibleExpandedLabel: u }),
                                            u &&
                                            (n.expandedLabelTimeout = setTimeout(function () {
                                                n.setState({ visibleExpandedLabel: void 0 });
                                            }, 5e3));
                                    }
                                };
                            },
                        },
                        {
                            key: "_onTopViewLayout",
                            value: function (t) {
                                var n = t.nativeEvent.layout;
                                this.setState({ containerLayout: n });
                            },
                        },
                        {
                            key: "_renderExpandedLabel",
                            value: function () {
                                var t = this.state,
                                    n = t.parentPosition,
                                    s = t.visibleExpandedLabel;
                                if (s) {
                                    var l = R[s];
                                    if (l) {
                                        var u = l.component || l,
                                            c = l.props || {};
                                        return b.default.createElement(u, (0, o.default)({}, c, { parentPosition: n }));
                                    }
                                }
                                return null;
                            },
                        },
                    ]),
                    n
                );
            })(x.default);
        var V = (0, L.connect)(function (t) {
            return (0, o.default)({}, (0, x._abstractMapStateToProps)(t), { _reducedUI: t["features/base/responsive-ui"].reducedUI, _visible: !(0, O.shouldDisplayNotifications)(t) });
        })((0, h.makeAspectRatioAware)(w));
        e.default = V;
    },
    1511,
    [2, 3, 54, 4, 5, 6, 9, 10, 8, 13, 17, 388, 542, 1167, 1363, 1512, 1521, 1529, 1510, 1554]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        }),
            r(d[2]),
            r(d[3]);
    },
    1512,
    [1513, 1515, 1519, 1520]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.transcriberJoined = function (t) {
                return { type: n._TRANSCRIBER_JOINED, transcriberJID: t };
            }),
            (e.transcriberLeft = function (t) {
                return { type: n._TRANSCRIBER_LEFT, transcriberJID: t };
            }),
            (e.potentialTranscriberJoined = function (t) {
                return { type: n._POTENTIAL_TRANSCRIBER_JOINED, transcriberJID: t };
            }),
            (e.showPendingTranscribingNotification = function () {
                return function (n) {
                    var c = (0, t.showNotification)({ descriptionKey: "transcribing.pending", isDismissAllowed: !1, titleKey: "dialog.transcribing" });
                    n(c), n(o(c.uid));
                };
            }),
            (e.setPendingTranscribingNotificationUid = o),
            (e.hidePendingTranscribingNotification = function () {
                return function (n, c) {
                    var s = c()["features/transcribing"].pendingNotificationUid;
                    s && (n((0, t.hideNotification)(s)), n(o()));
                };
            }),
            (e.showStoppedTranscribingNotification = function () {
                return (0, t.showNotification)({ descriptionKey: "transcribing.off", titleKey: "dialog.transcribing" }, t.NOTIFICATION_TIMEOUT);
            }),
            (e.showTranscribingError = function () {
                return (0, t.showErrorNotification)({ descriptionKey: "transcribing.error", titleKey: "transcribing.failedToStart" });
            });
        var n = r(d[0]),
            t = r(d[1]);
        function o(t) {
            return { type: n.SET_PENDING_TRANSCRIBING_NOTIFICATION_UID, uid: t };
        }
    },
    1513,
    [1514, 595]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SET_PENDING_TRANSCRIBING_NOTIFICATION_UID = e._POTENTIAL_TRANSCRIBER_JOINED = e._TRANSCRIBER_LEFT = e._TRANSCRIBER_JOINED = void 0);
        e._TRANSCRIBER_JOINED = "TRANSCRIBER_JOINED";
        e._TRANSCRIBER_LEFT = "TRANSCRIBER_LEFT";
        e._POTENTIAL_TRANSCRIBER_JOINED = "POTENTIAL_TRANSCRIBER_JOINED";
        e.SET_PENDING_TRANSCRIBING_NOTIFICATION_UID = "SET_PENDING_TRANSCRIBING_NOTIFICATION_UID";
    },
    1514,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "TranscribingLabel", {
                enumerable: !0,
                get: function () {
                    return t.default;
                },
            }),
            Object.defineProperty(e, "TranscribingExpandedLabel", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var t = n(r(d[1])),
            u = n(r(d[2]));
    },
    1515,
    [3, 1516, 1518]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            u = n(r(d[3])),
            o = n(r(d[4])),
            f = n(r(d[5])),
            s = n(r(d[6])),
            c = t(r(d[7])),
            p = r(d[8]),
            h = r(d[9]),
            _ = r(d[10]),
            b = r(d[11]),
            v = (function (t) {
                function n() {
                    return (0, l.default)(this, n), (0, o.default)(this, (0, f.default)(n).apply(this, arguments));
                }
                return (
                    (0, s.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return this.props._showLabel ? c.default.createElement(h.CircularLabel, { label: this.props.t("transcribing.tr") }) : null;
                            },
                        },
                    ]),
                    n
                );
            })(c.Component),
            y = (0, p.translate)((0, _.connect)(b._mapStateToProps)(v));
        e.default = y;
    },
    1516,
    [2, 3, 4, 5, 6, 9, 10, 13, 615, 1370, 542, 1517]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (n) {
                return { _showLabel: n["features/transcribing"].isTranscribing };
            });
    },
    1517,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            u = t(r(d[2])),
            l = t(r(d[3])),
            f = t(r(d[4])),
            o = t(r(d[5])),
            s = r(d[6]),
            p = (function (t) {
                function s() {
                    return (0, n.default)(this, s), (0, l.default)(this, (0, f.default)(s).apply(this, arguments));
                }
                return (
                    (0, o.default)(s, t),
                    (0, u.default)(s, [
                        {
                            key: "_getLabel",
                            value: function () {
                                return this.props.t("transcribing.expandedLabel");
                            },
                        },
                    ]),
                    s
                );
            })(r(d[7]).ExpandedLabel),
            c = (0, s.translate)(p);
        e.default = c;
    },
    1518,
    [3, 4, 5, 6, 9, 10, 615, 1370]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            c = r(d[2]),
            s = r(d[3]);
        t.MiddlewareRegistry.register(function (t) {
            return function (T) {
                return function (o) {
                    var p = t.getState()["features/transcribing"],
                        b = p.transcriberJID,
                        I = p.potentialTranscriberJIDs;
                    switch (o.type) {
                        case n._TRANSCRIBER_LEFT:
                            t.dispatch((0, c.showStoppedTranscribingNotification)());
                            break;
                        case s.HIDDEN_PARTICIPANT_JOINED:
                            o.displayName && "Transcriber" === o.displayName ? t.dispatch((0, c.transcriberJoined)(o.id)) : t.dispatch((0, c.potentialTranscriberJoined)(o.id));
                            break;
                        case s.HIDDEN_PARTICIPANT_LEFT:
                            o.id === b && t.dispatch((0, c.transcriberLeft)(o.id));
                            break;
                        case s.PARTICIPANT_UPDATED:
                            var N = o.participant;
                            I.includes(N.id) && "Transcriber" === N.name && (t.dispatch((0, c.transcriberJoined)(N.id)), t.dispatch((0, c.hidePendingTranscribingNotification)()));
                    }
                    return T(o);
                };
            };
        });
    },
    1519,
    [542, 1514, 1513, 540]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0])(r(d[1])),
            t = r(d[2]),
            s = r(d[3]);
        t.ReducerRegistry.register("features/transcribing", function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { isTranscribing: !1, isDialing: !1, isTerminating: !1, transcriberJID: null, potentialTranscriberJIDs: [] },
                c = arguments.length > 1 ? arguments[1] : void 0;
            switch (c.type) {
                case s._TRANSCRIBER_JOINED:
                    return (0, n.default)({}, t, { isTranscribing: !0, isDialing: !1, transcriberJID: c.transcriberJID });
                case s._TRANSCRIBER_LEFT:
                    return (0, n.default)({}, t, { isTerminating: !1, isTranscribing: !1, transcriberJID: void 0, potentialTranscriberJIDs: [] });
                case s._POTENTIAL_TRANSCRIBER_JOINED:
                    return (0, n.default)({}, t, { potentialTranscriberJIDs: [c.transcriberJID].concat(t.potentialTranscriberJIDs) });
                case s.SET_PENDING_TRANSCRIBING_NOTIFICATION_UID:
                    return (0, n.default)({}, t, { pendingNotificationUid: c.uid });
                default:
                    return t;
            }
        });
    },
    1520,
    [3, 54, 542, 1514]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1521,
    [1522]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "OverflowMenuVideoQualityItem", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(e, "VideoQualityDialog", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            }),
            Object.defineProperty(e, "VideoQualityLabel", {
                enumerable: !0,
                get: function () {
                    return l.default;
                },
            }),
            Object.defineProperty(e, "VideoQualityExpandedLabel", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            });
        var n = t(r(d[1])),
            u = t(r(d[2])),
            l = t(r(d[3])),
            o = t(r(d[4]));
    },
    1522,
    [3, 1523, 1524, 1525, 1528]
);
__d(function (g, r, i, a, m, e, d) { }, 1523, []);
__d(function (g, r, i, a, m, e, d) { }, 1524, []);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = l(r(d[2])),
            n = l(r(d[3])),
            o = l(r(d[4])),
            f = l(r(d[5])),
            c = l(r(d[6])),
            s = l(r(d[7])),
            y = l(r(d[8])),
            v = r(d[9]),
            p = r(d[10]),
            _ = r(d[11]),
            b = r(d[12]),
            h = t(r(d[13])),
            O = l(r(d[14])),
            S = (function (t) {
                function l() {
                    return (0, n.default)(this, l), (0, f.default)(this, (0, c.default)(l).apply(this, arguments));
                }
                return (
                    (0, s.default)(l, t),
                    (0, o.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    l = t._audioOnly,
                                    u = t.style,
                                    n = t.t;
                                return l ? y.default.createElement(p.CircularLabel, { label: n("videoStatus.audioOnly"), style: (0, b.combineStyles)(O.default.indicatorAudioOnly, u) }) : null;
                            },
                        },
                    ]),
                    l
                );
            })(h.default);
        var M = (0, v.translate)(
            (0, _.connect)(function (t) {
                return (0, u.default)({}, (0, h._abstractMapStateToProps)(t));
            })(S)
        );
        e.default = M;
    },
    1525,
    [2, 3, 54, 4, 5, 6, 9, 10, 13, 615, 1370, 542, 406, 1526, 1527]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._abstractMapStateToProps = function (t) {
                return { _audioOnly: t["features/base/audio-only"].enabled };
            }),
            (e.default = void 0);
        var u = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            f = t(r(d[4])),
            l = (function (t) {
                function l() {
                    return (0, u.default)(this, l), (0, n.default)(this, (0, o.default)(l).apply(this, arguments));
                }
                return (0, f.default)(l, t), l;
            })(r(d[5]).Component);
        e.default = l;
    },
    1526,
    [3, 4, 6, 9, 10, 13]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.AUD_LABEL_COLOR = void 0);
        var o = r(d[0]),
            t = o.ColorPalette.green;
        e.AUD_LABEL_COLOR = t;
        var l = (0, o.createStyleSheet)({ indicatorAudioOnly: { backgroundColor: t } });
        e.default = l;
    },
    1527,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = t(r(d[1])),
            n = t(r(d[2])),
            l = t(r(d[3])),
            f = t(r(d[4])),
            o = t(r(d[5])),
            s = r(d[6]),
            _ = r(d[7]),
            p = r(d[8]),
            v = (function (t) {
                function s() {
                    return (0, u.default)(this, s), (0, l.default)(this, (0, f.default)(s).apply(this, arguments));
                }
                return (
                    (0, o.default)(s, t),
                    (0, n.default)(s, [
                        {
                            key: "_getColor",
                            value: function () {
                                return p.AUD_LABEL_COLOR;
                            },
                        },
                        {
                            key: "_getLabel",
                            value: function () {
                                return this.props.t("videoStatus.audioOnlyExpanded");
                            },
                        },
                    ]),
                    s
                );
            })(_.ExpandedLabel),
            c = (0, s.translate)(v);
        e.default = c;
    },
    1528,
    [3, 4, 5, 6, 9, 10, 615, 1370, 1527]
);
__d(
    function (g, r, i, a, m, e, d) {
        var l = r(d[0]),
            t = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._abstractMapStateToProps = function (l) {
                return { _filmstripVisible: (0, b.isFilmstripVisible)(l), _showVideoQualityLabel: !(0, p.shouldDisplayTileView)(l) };
            }),
            (e.default = void 0);
        var n = t(r(d[2])),
            u = t(r(d[3])),
            o = t(r(d[4])),
            c = t(r(d[5])),
            f = t(r(d[6])),
            s = l(r(d[7])),
            b = r(d[8]),
            L = r(d[9]),
            _ = r(d[10]),
            y = r(d[11]),
            p = r(d[12]),
            v = r(d[13]),
            V = (function (l) {
                function t() {
                    return (0, n.default)(this, t), (0, o.default)(this, (0, c.default)(t).apply(this, arguments));
                }
                return (
                    (0, f.default)(t, l),
                    (0, u.default)(t, [
                        {
                            key: "_renderLocalRecordingLabel",
                            value: function () {
                                return s.default.createElement(L.LocalRecordingLabel, null);
                            },
                        },
                        {
                            key: "_renderRecordingLabel",
                            value: function (l) {
                                return s.default.createElement(_.RecordingLabel, { mode: l });
                            },
                        },
                        {
                            key: "_renderTranscribingLabel",
                            value: function () {
                                return s.default.createElement(y.TranscribingLabel, null);
                            },
                        },
                        {
                            key: "_renderVideoQualityLabel",
                            value: function () {
                                return s.default.createElement(v.VideoQualityLabel, null);
                            },
                        },
                    ]),
                    t
                );
            })(s.Component);
        e.default = V;
    },
    1529,
    [2, 3, 4, 5, 6, 9, 10, 13, 1290, 1530, 1363, 1512, 1421, 1521]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
        var o = r(d[3]);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return o[t];
                    },
                });
        }),
            r(d[4]),
            r(d[5]);
    },
    1530,
    [1531, 1532, 1533, 1537, 1552, 1553]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.localRecordingEngaged = function (t) {
                return { type: n.LOCAL_RECORDING_ENGAGED, recordingEngagedAt: t };
            }),
            (e.localRecordingUnengaged = function () {
                return { type: n.LOCAL_RECORDING_UNENGAGED };
            }),
            (e.statsUpdate = function (t) {
                return { type: n.LOCAL_RECORDING_STATS_UPDATE, stats: t };
            });
        var n = r(d[0]);
    },
    1531,
    [1532]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.LOCAL_RECORDING_STATS_UPDATE = e.LOCAL_RECORDING_UNENGAGED = e.LOCAL_RECORDING_ENGAGED = void 0);
        e.LOCAL_RECORDING_ENGAGED = "LOCAL_RECORDING_ENGAGED";
        e.LOCAL_RECORDING_UNENGAGED = "LOCAL_RECORDING_UNENGAGED";
        e.LOCAL_RECORDING_STATS_UPDATE = "LOCAL_RECORDING_STATS_UPDATE";
    },
    1532,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "LocalRecordingButton", {
                enumerable: !0,
                get: function () {
                    return t.default;
                },
            }),
            Object.defineProperty(e, "LocalRecordingLabel", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
            Object.defineProperty(e, "LocalRecordingInfoDialog", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var t = n(r(d[1])),
            o = n(r(d[2])),
            u = n(r(d[3]));
    },
    1533,
    [3, 1534, 1535, 1536]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = l(r(d[2])),
            n = l(r(d[3])),
            c = l(r(d[4])),
            u = l(r(d[5])),
            f = l(r(d[6])),
            s = l(r(d[7])),
            b = t(r(d[8])),
            k = r(d[9]),
            v = r(d[10]),
            _ = r(d[11]),
            h = (function (t) {
                function l(t) {
                    var n;
                    return (0, o.default)(this, l), ((n = (0, c.default)(this, (0, u.default)(l).call(this, t)))._onClick = n._onClick.bind((0, s.default)((0, s.default)(n)))), n;
                }
                return (
                    (0, f.default)(l, t),
                    (0, n.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    l = t.isDialogShown,
                                    o = t.t;
                                return b.default.createElement(_.ToolbarButton, {
                                    accessibilityLabel: o("toolbar.accessibilityLabel.localRecording"),
                                    icon: v.IconRec,
                                    onClick: this._onClick,
                                    toggled: l,
                                    tooltip: o("localRecording.dialogTitle"),
                                });
                            },
                        },
                        {
                            key: "_onClick",
                            value: function () {
                                this.props.onClick();
                            },
                        },
                    ]),
                    l
                );
            })(b.Component),
            p = (0, k.translate)(h);
        e.default = p;
    },
    1534,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 615, 403, 1336]
);
__d(function (g, r, i, a, m, e, d) { }, 1535, []);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            c = n(r(d[4])),
            s = n(r(d[5])),
            u = n(r(d[6])),
            f = n(r(d[7])),
            p = t(r(d[8])),
            v = r(d[9]),
            _ = r(d[10]),
            E = r(d[11]),
            h = r(d[12]),
            N = r(d[13]),
            k = r(d[14]),
            S = (function (t) {
                function n(t) {
                    var o;
                    return (0, l.default)(this, n), ((o = (0, c.default)(this, (0, s.default)(n).call(this, t))).state = { durationString: "" }), o;
                }
                return (
                    (0, u.default)(n, t),
                    (0, o.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var t = this;
                                this._timer = setInterval(function () {
                                    t.setState(function (n, l) {
                                        var o = new Date();
                                        return { durationString: t._getDuration(o, l.recordingEngagedAt) };
                                    });
                                    try {
                                        t.props.dispatch((0, N.statsUpdate)(k.recordingController.getParticipantsStats()));
                                    } catch (t) { }
                                }, 1e3);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this._timer && (clearInterval(this._timer), (this._timer = null));
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t.isModerator,
                                    l = t.t;
                                return p.default.createElement(
                                    v.Dialog,
                                    { cancelKey: "dialog.close", submitDisabled: !0, titleKey: "localRecording.dialogTitle" },
                                    p.default.createElement(
                                        "div",
                                        { className: "localrec-control" },
                                        p.default.createElement("span", { className: "localrec-control-info-label" }, l("localRecording.moderator") + ":"),
                                        p.default.createElement("span", { className: "info-value" }, l(n ? "localRecording.yes" : "localRecording.no"))
                                    ),
                                    this._renderModeratorControls(),
                                    this._renderDurationAndFormat()
                                );
                            },
                        },
                        {
                            key: "_renderDurationAndFormat",
                            value: function () {
                                var t = this.props,
                                    n = t.encodingFormat,
                                    l = t.isEngaged,
                                    o = t.t,
                                    c = this.state.durationString;
                                return l
                                    ? p.default.createElement(
                                        "div",
                                        null,
                                        p.default.createElement(
                                            "div",
                                            null,
                                            p.default.createElement("span", { className: "localrec-control-info-label" }, o("localRecording.duration") + ":"),
                                            p.default.createElement("span", { className: "info-value" }, "" === c ? o("localRecording.durationNA") : c)
                                        ),
                                        p.default.createElement(
                                            "div",
                                            null,
                                            p.default.createElement("span", { className: "localrec-control-info-label" }, o("localRecording.encoding") + ":"),
                                            p.default.createElement("span", { className: "info-value" }, n)
                                        )
                                    )
                                    : null;
                            },
                        },
                        {
                            key: "_renderStats",
                            value: function () {
                                var t = this,
                                    n = this.props.stats;
                                if (void 0 === n) return null;
                                var l = Object.keys(n);
                                return p.default.createElement(
                                    "div",
                                    { className: "localrec-participant-stats" },
                                    this._renderStatsHeader(),
                                    l.map(function (n, l) {
                                        return t._renderStatsLine(l, n);
                                    })
                                );
                            },
                        },
                        {
                            key: "_renderStatsLine",
                            value: function (t, n) {
                                var l = this.props.stats,
                                    o = "localrec-participant-stats-item__status-dot ";
                                return (
                                    (o += l[n].recordingStats ? (l[n].recordingStats.isRecording ? "status-on" : "status-off") : "status-unknown"),
                                    p.default.createElement(
                                        "div",
                                        { className: "localrec-participant-stats-item", key: t },
                                        p.default.createElement("div", { className: "localrec-participant-stats-item__status" }, p.default.createElement("span", { className: o })),
                                        p.default.createElement("div", { className: "localrec-participant-stats-item__name" }, l[n].displayName || n),
                                        p.default.createElement("div", { className: "localrec-participant-stats-item__sessionid" }, l[n].recordingStats.currentSessionToken)
                                    )
                                );
                            },
                        },
                        {
                            key: "_renderStatsHeader",
                            value: function () {
                                var t = this.props.t;
                                return p.default.createElement(
                                    "div",
                                    { className: "localrec-participant-stats-item" },
                                    p.default.createElement("div", { className: "localrec-participant-stats-item__status" }),
                                    p.default.createElement("div", { className: "localrec-participant-stats-item__name" }, t("localRecording.participant")),
                                    p.default.createElement("div", { className: "localrec-participant-stats-item__sessionid" }, t("localRecording.sessionToken"))
                                );
                            },
                        },
                        {
                            key: "_renderModeratorControls",
                            value: function () {
                                var t = this.props,
                                    n = t.isModerator,
                                    l = t.isEngaged,
                                    o = t.t;
                                return n
                                    ? p.default.createElement(
                                        "div",
                                        null,
                                        p.default.createElement(
                                            "div",
                                            { className: "localrec-control-action-links" },
                                            p.default.createElement(
                                                "div",
                                                { className: "localrec-control-action-link" },
                                                l ? p.default.createElement("a", { onClick: this._onStop }, o("localRecording.stop")) : p.default.createElement("a", { onClick: this._onStart }, o("localRecording.start"))
                                            )
                                        ),
                                        p.default.createElement("div", null, p.default.createElement("span", { className: "localrec-control-info-label" }, o("localRecording.participantStats") + ":")),
                                        this._renderStats()
                                    )
                                    : null;
                            },
                        },
                        {
                            key: "_getDuration",
                            value: function (t, n) {
                                return null === n || void 0 === n
                                    ? ""
                                    : (0, f.default)(t - n)
                                        .utc()
                                        .format("HH:mm:ss");
                            },
                        },
                        {
                            key: "_onStart",
                            value: function () {
                                k.recordingController.startRecording();
                            },
                        },
                        {
                            key: "_onStop",
                            value: function () {
                                k.recordingController.stopRecording();
                            },
                        },
                    ]),
                    n
                );
            })(p.Component);
        var y = (0, _.translate)(
            (0, h.connect)(function (t) {
                var n = t["features/local-recording"],
                    l = n.encodingFormat,
                    o = n.isEngaged,
                    c = n.recordingEngagedAt,
                    s = n.stats;
                return { encodingFormat: l, isModerator: (0, E.getLocalParticipant)(t).role === E.PARTICIPANT_ROLE.MODERATOR, isEngaged: o, recordingEngagedAt: c, stats: s };
            })(S)
        );
        e.default = y;
    },
    1536,
    [2, 3, 4, 5, 6, 9, 10, 617, 13, 1079, 615, 540, 542, 1531, 1537]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1537,
    [1538]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.recordingController = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            s = r(d[3]),
            c = t(r(d[4])),
            h = r(d[5]),
            _ = r(d[6]),
            l = new Set(["flac", "wav", "ogg"]),
            u = "flac",
            f = Object.freeze({ IDLE: Symbol("IDLE"), STARTING: Symbol("STARTING"), RECORDING: Symbol("RECORDING"), STOPPING: Symbol("STOPPING"), FAILED: Symbol("FAILED") }),
            S = new ((function () {
                function t() {
                    (0, n.default)(this, t),
                        (this._adapters = {}),
                        (this._conference = null),
                        (this._currentSessionToken = -1),
                        (this._state = f.IDLE),
                        (this._isMuted = !1),
                        (this._micDeviceId = "default"),
                        (this._format = u),
                        (this._registered = !1),
                        (this.registerEvents = this.registerEvents.bind(this)),
                        (this.getParticipantsStats = this.getParticipantsStats.bind(this)),
                        (this._onStartCommand = this._onStartCommand.bind(this)),
                        (this._onStopCommand = this._onStopCommand.bind(this)),
                        (this._onPingCommand = this._onPingCommand.bind(this)),
                        (this._doStartRecording = this._doStartRecording.bind(this)),
                        (this._doStopRecording = this._doStopRecording.bind(this)),
                        (this._updateStats = this._updateStats.bind(this)),
                        (this._switchToNewSession = this._switchToNewSession.bind(this));
                }
                return (
                    (0, o.default)(t, [
                        {
                            key: "registerEvents",
                            value: function (t) {
                                this._registered ||
                                    ((this._conference = t),
                                        this._conference &&
                                        (this._conference.addCommandListener("localRecStop", this._onStopCommand),
                                            this._conference.addCommandListener("localRecStart", this._onStartCommand),
                                            this._conference.addCommandListener("localRecPing", this._onPingCommand),
                                            (this._registered = !0)),
                                        this._conference.isModerator() || this._conference.sendCommandOnce("localRecPing", {}));
                            },
                        },
                        {
                            key: "startRecording",
                            value: function () {
                                this.registerEvents(),
                                    this._conference && this._conference.isModerator()
                                        ? (this._conference.removeCommand("localRecStop"), this._conference.sendCommand("localRecStart", { attributes: { sessionToken: this._getRandomToken(), format: this._format } }))
                                        : this._onWarning && this._onWarning("localRecording.messages.notModerator");
                            },
                        },
                        {
                            key: "stopRecording",
                            value: function () {
                                this._conference &&
                                    (this._conference.isModerator()
                                        ? (this._conference.removeCommand("localRecStart"), this._conference.sendCommand("localRecStop", { attributes: { sessionToken: this._currentSessionToken } }))
                                        : this._onWarning && this._onWarning("localRecording.messages.notModerator"));
                            },
                        },
                        {
                            key: "downloadRecordedData",
                            value: function (t) {
                                var n = this;
                                this._adapters[t]
                                    ? this._adapters[t]
                                        .exportRecordedData()
                                        .then(function (o) {
                                            var s = o.data,
                                                c = o.format,
                                                _ = "session_" + t + "_" + n._conference.myUserId() + "." + c;
                                            (0, h.downloadBlob)(s, _);
                                        })
                                        .catch(function (n) {
                                            c.default.error("Failed to download audio for session " + t + ". Error: " + n);
                                        })
                                    : c.default.error("Invalid session token for download " + t);
                            },
                        },
                        {
                            key: "setMicDevice",
                            value: function (t) {
                                t !== this._micDeviceId &&
                                    ((this._micDeviceId = String(t)),
                                        this._state === f.RECORDING &&
                                        (c.default.log("Before switching microphone..."),
                                            this._adapters[this._currentSessionToken]
                                                .setMicDevice(this._micDeviceId)
                                                .then(function () {
                                                    c.default.log("Finished switching microphone.");
                                                })
                                                .catch(function () {
                                                    c.default.error("Failed to switch microphone");
                                                })),
                                        c.default.log("Switch microphone to " + this._micDeviceId));
                            },
                        },
                        {
                            key: "setMuted",
                            value: function (t) {
                                (this._isMuted = Boolean(t)), this._state === f.RECORDING && this._adapters[this._currentSessionToken].setMuted(this._isMuted);
                            },
                        },
                        {
                            key: "switchFormat",
                            value: function (t) {
                                l.has(t) ? ((this._format = t), c.default.log("Recording format switched to " + t)) : c.default.log("Unknown format " + t + ". Ignoring...");
                            },
                        },
                        {
                            key: "getLocalStats",
                            value: function () {
                                return { currentSessionToken: this._currentSessionToken, isRecording: this._state === f.RECORDING, recordedBytes: 0, recordedLength: 0 };
                            },
                        },
                        {
                            key: "getParticipantsStats",
                            value: function () {
                                for (
                                    var t = this._conference.getParticipants().map(function (t) {
                                        return { id: t.getId(), displayName: t.getDisplayName(), recordingStats: JSON.parse(t.getProperty("localRecStats") || "{}"), isSelf: !1 };
                                    }),
                                    n = {},
                                    o = 0;
                                    o < t.length;
                                    ++o
                                )
                                    n[t[o].id] = t[o];
                                var c = this._conference.myUserId();
                                return (n[c] = { id: c, displayName: s.i18next.t("localRecording.me"), recordingStats: this.getLocalStats(), isSelf: !0 }), n;
                            },
                        },
                        {
                            key: "_changeState",
                            value: function (t) {
                                this._state !== t && (c.default.log("state change: " + this._state.toString() + " -> " + t.toString()), (this._state = t));
                            },
                        },
                        {
                            key: "_updateStats",
                            value: function () {
                                this._conference && this._conference.setLocalParticipantProperty("localRecStats", JSON.stringify(this.getLocalStats()));
                            },
                        },
                        {
                            key: "_onStartCommand",
                            value: function (t) {
                                var n = this,
                                    o = t.attributes,
                                    s = o.sessionToken,
                                    c = o.format;
                                this._state === f.IDLE
                                    ? (this._changeState(f.STARTING), this._switchToNewSession(s, c), this._doStartRecording())
                                    : this._state === f.RECORDING &&
                                    this._currentSessionToken !== s &&
                                    (this._changeState(f.STOPPING),
                                        this._doStopRecording().then(function () {
                                            n._changeState(f.STARTING), n._switchToNewSession(s, c), n._doStartRecording();
                                        }));
                            },
                        },
                        {
                            key: "_onStopCommand",
                            value: function (t) {
                                this._state === f.RECORDING && this._currentSessionToken === t.attributes.sessionToken && (this._changeState(f.STOPPING), this._doStopRecording());
                            },
                        },
                        {
                            key: "_onPingCommand",
                            value: function () {
                                this._conference.isModerator() && (c.default.log("Received ping, sending pong."), this._conference.sendCommandOnce("localRecPong", {}));
                            },
                        },
                        {
                            key: "_getRandomToken",
                            value: function () {
                                return Math.floor(1e8 * Math.random()) + 1;
                            },
                        },
                        {
                            key: "_doStartRecording",
                            value: function () {
                                var t = this;
                                if (this._state === f.STARTING) {
                                    var n = this._adapters[this._currentSessionToken];
                                    n.start(this._micDeviceId)
                                        .then(function () {
                                            t._changeState(f.RECORDING),
                                                _.sessionManager.beginSegment(t._currentSessionToken),
                                                c.default.log("Local recording engaged."),
                                                t._onNotify && t._onNotify("localRecording.messages.engaged"),
                                                t._onStateChanged && t._onStateChanged(!0),
                                                n.setMuted(t._isMuted),
                                                t._updateStats();
                                        })
                                        .catch(function (t) {
                                            c.default.error("Failed to start local recording.", t);
                                        });
                                }
                            },
                        },
                        {
                            key: "_doStopRecording",
                            value: function () {
                                var t = this;
                                if (this._state === f.STOPPING) {
                                    var n = this._currentSessionToken;
                                    return this._adapters[this._currentSessionToken]
                                        .stop()
                                        .then(function () {
                                            t._changeState(f.IDLE), _.sessionManager.endSegment(t._currentSessionToken), c.default.log("Local recording unengaged."), t.downloadRecordedData(n);
                                            var o = t._conference.isModerator() ? "localRecording.messages.finishedModerator" : "localRecording.messages.finished",
                                                s = { token: n };
                                            t._onNotify && t._onNotify(o, s), t._onStateChanged && t._onStateChanged(!1), t._updateStats();
                                        })
                                        .catch(function (t) {
                                            c.default.error("Failed to stop local recording.", t);
                                        });
                                }
                                return Promise.resolve();
                            },
                        },
                        {
                            key: "_switchToNewSession",
                            value: function (t, n) {
                                (this._format = n),
                                    (this._currentSessionToken = t),
                                    c.default.log("New session: " + this._currentSessionToken + ", format: " + this._format),
                                    (this._adapters[t] = this._createRecordingAdapter()),
                                    _.sessionManager.createSession(t, this._format);
                            },
                        },
                        {
                            key: "_createRecordingAdapter",
                            value: function () {
                                switch ((c.default.debug("[RecordingController] creating recording adapter for " + this._format + " format."), this._format)) {
                                    case "ogg":
                                        return new h.OggAdapter();
                                    case "flac":
                                        return new h.FlacAdapter();
                                    case "wav":
                                        return new h.WavAdapter();
                                    default:
                                        throw new Error("Unknown format: " + this._format);
                                }
                            },
                        },
                        {
                            key: "onStateChanged",
                            set: function (t) {
                                this._onStateChanged = t;
                            },
                        },
                        {
                            key: "onNotify",
                            set: function (t) {
                                this._onNotify = t;
                            },
                        },
                        {
                            key: "onWarning",
                            set: function (t) {
                                this._onWarning = t;
                            },
                        },
                    ]),
                    t
                );
            })())();
        e.recordingController = S;
    },
    1538,
    [3, 4, 5, 615, 1539, 1540, 1549]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = (0, r(d[0]).getLogger)("features/local-recording");
        e.default = o;
    },
    1539,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
        var o = r(d[3]);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return o[t];
                    },
                });
        });
        var c = r(d[4]);
        Object.keys(c).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return c[t];
                    },
                });
        });
    },
    1540,
    [1541, 1542, 1543, 1544, 1546]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.OggAdapter = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            u = t(r(d[3])),
            s = t(r(d[4])),
            c = t(r(d[5])),
            l = t(r(d[6])),
            f = (function (t) {
                function f() {
                    var t, o;
                    (0, n.default)(this, f);
                    for (var c = arguments.length, l = new Array(c), _ = 0; _ < c; _++) l[_] = arguments[_];
                    return ((o = (0, u.default)(this, (t = (0, s.default)(f)).call.apply(t, [this].concat(l))))._mediaRecorder = null), (o._initPromise = null), (o._recordedData = null), o;
                }
                return (
                    (0, c.default)(f, t),
                    (0, o.default)(f, [
                        {
                            key: "start",
                            value: function (t) {
                                var n = this;
                                return (
                                    this._initPromise || (this._initPromise = this._initialize(t)),
                                    this._initPromise.then(function () {
                                        return new Promise(function (t) {
                                            n._mediaRecorder.start(), t();
                                        });
                                    })
                                );
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                var t = this;
                                return new Promise(function (n) {
                                    (t._mediaRecorder.onstop = function () {
                                        return n();
                                    }),
                                        t._mediaRecorder.stop();
                                });
                            },
                        },
                        {
                            key: "exportRecordedData",
                            value: function () {
                                return null !== this._recordedData ? Promise.resolve({ data: this._recordedData, format: "ogg" }) : Promise.reject("No audio data recorded.");
                            },
                        },
                        {
                            key: "setMuted",
                            value: function (t) {
                                var n = !t;
                                if (!this._stream) return Promise.resolve();
                                var o = this._stream.getAudioTracks()[0];
                                return o ? (o.enabled !== n && ((o.enabled = n), l.default.log(t ? "Mute" : "Unmute")), Promise.resolve()) : (l.default.error("Cannot mute/unmute. Track not found!"), Promise.resolve());
                            },
                        },
                        {
                            key: "_initialize",
                            value: function (t) {
                                var n = this;
                                return this._mediaRecorder
                                    ? Promise.resolve()
                                    : new Promise(function (o, u) {
                                        n._getAudioStream(t)
                                            .then(function (t) {
                                                (n._stream = t),
                                                    (n._mediaRecorder = new MediaRecorder(t)),
                                                    (n._mediaRecorder.ondataavailable = function (t) {
                                                        return n._saveMediaData(t.data);
                                                    }),
                                                    o();
                                            })
                                            .catch(function (t) {
                                                l.default.error("Error calling getUserMedia(): " + t), u();
                                            });
                                    });
                            },
                        },
                        {
                            key: "_saveMediaData",
                            value: function (t) {
                                this._recordedData = t;
                            },
                        },
                    ]),
                    f
                );
            })(r(d[7]).RecordingAdapter);
        e.OggAdapter = f;
    },
    1541,
    [3, 4, 5, 6, 9, 10, 1539, 1542]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.RecordingAdapter = void 0);
        var o = t(r(d[1])),
            n = t(r(d[2])),
            c = t(r(d[3])),
            u = (function () {
                function t() {
                    (0, o.default)(this, t);
                }
                return (
                    (0, n.default)(t, [
                        {
                            key: "start",
                            value: function (t) {
                                throw new Error("Not implemented");
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                throw new Error("Not implemented");
                            },
                        },
                        {
                            key: "exportRecordedData",
                            value: function () {
                                throw new Error("Not implemented");
                            },
                        },
                        {
                            key: "setMuted",
                            value: function (t) {
                                throw new Error("Not implemented");
                            },
                        },
                        {
                            key: "setMicDevice",
                            value: function (t) {
                                throw new Error("Not implemented");
                            },
                        },
                        {
                            key: "_getAudioStream",
                            value: function (t) {
                                return c.default.createLocalTracks({ devices: ["audio"], micDeviceId: t }).then(function (t) {
                                    if (1 !== t.length) throw new Error("Unexpected number of streams from createLocalTracks.");
                                    var o = t[0].stream;
                                    if (void 0 === o) throw new Error("Failed to create local track.");
                                    return o;
                                });
                            },
                        },
                    ]),
                    t
                );
            })();
        e.RecordingAdapter = u;
    },
    1542,
    [3, 4, 5, 388]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.downloadBlob = function (o) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "recording.ogg",
                    t = window.URL.createObjectURL(o),
                    c = document.createElement("a");
                (c.style = "display: none"), (c.href = t), (c.download = n), document.body.appendChild(c), c.click(), document.body.removeChild(c);
            });
    },
    1543,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.WavAdapter = void 0);
        var n = t(r(d[1])),
            s = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4])),
            l = t(r(d[5])),
            f = t(r(d[6])),
            h = t(r(d[7])),
            v = (function (t) {
                function v() {
                    var t;
                    return (
                        (0, n.default)(this, v),
                        ((t = (0, o.default)(this, (0, u.default)(v).call(this)))._wavLength = 0),
                        (t._wavBuffers = []),
                        (t._isInitialized = !1),
                        (t._initPromise = null),
                        (t._onAudioProcess = t._onAudioProcess.bind((0, f.default)((0, f.default)(t)))),
                        t
                    );
                }
                return (
                    (0, l.default)(v, t),
                    (0, s.default)(v, [
                        {
                            key: "start",
                            value: function (t) {
                                var n = this;
                                return (
                                    this._initPromise || (this._initPromise = this._initialize(t)),
                                    this._initPromise.then(function () {
                                        (n._wavBuffers = []), (n._wavLength = 0), n._connectAudioGraph();
                                    })
                                );
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                return (
                                    this._disconnectAudioGraph(),
                                    (this._data = this._exportMonoWAV(this._wavBuffers, this._wavLength)),
                                    (this._audioProcessingNode = null),
                                    (this._audioSource = null),
                                    (this._isInitialized = !1),
                                    Promise.resolve()
                                );
                            },
                        },
                        {
                            key: "exportRecordedData",
                            value: function () {
                                return null !== this._data ? Promise.resolve({ data: this._data, format: "wav" }) : Promise.reject("No audio data recorded.");
                            },
                        },
                        {
                            key: "setMuted",
                            value: function (t) {
                                var n = !t;
                                if (!this._stream) return Promise.resolve();
                                var s = this._stream.getAudioTracks()[0];
                                return s ? (s.enabled !== n && ((s.enabled = n), h.default.log(t ? "Mute" : "Unmute")), Promise.resolve()) : (h.default.error("Cannot mute/unmute. Track not found!"), Promise.resolve());
                            },
                        },
                        {
                            key: "setMicDevice",
                            value: function (t) {
                                return this._replaceMic(t);
                            },
                        },
                        {
                            key: "_createWavHeader",
                            value: function (t) {
                                var n = new ArrayBuffer(44),
                                    s = new DataView(n);
                                return (
                                    _(s, 0, "RIFF"),
                                    _(s, 8, "WAVE"),
                                    _(s, 12, "fmt "),
                                    s.setUint32(16, 16, !0),
                                    s.setUint16(20, 1, !0),
                                    s.setUint16(22, 1, !0),
                                    s.setUint32(24, this._sampleRate, !0),
                                    s.setUint32(28, (1 * Number(this._sampleRate) * 16) / 8, !0),
                                    s.setUint16(32, (1 * Number(16)) / 8, !0),
                                    s.setUint16(34, 16, !0),
                                    _(s, 36, "data"),
                                    s.setUint32(4, 32 + t, !0),
                                    s.setUint32(40, t, !0),
                                    new Uint8Array(n)
                                );
                            },
                        },
                        {
                            key: "_initialize",
                            value: function (t) {
                                var n = this;
                                return this._isInitialized
                                    ? Promise.resolve()
                                    : this._initializeAudioContext(t, this._onAudioProcess).then(function () {
                                        n._isInitialized = !0;
                                    });
                            },
                        },
                        {
                            key: "_onAudioProcess",
                            value: function (t) {
                                var n = t.inputBuffer.getChannelData(0);
                                this._wavBuffers.push(new Float32Array(n)), (this._wavLength += n.length);
                            },
                        },
                        {
                            key: "_exportMonoWAV",
                            value: function (t, n) {
                                for (var s = 2 * n, o = new ArrayBuffer(44 + s), u = new DataView(o), l = this._createWavHeader(s), f = l.length, h = 0; h < f; ++h) u.setUint8(h, l[h]);
                                return c(u, 44, t), new Blob([u], { type: "audio/wav" });
                            },
                        },
                    ]),
                    v
                );
            })(r(d[8]).AbstractAudioContextAdapter);
        function _(t, n, s) {
            for (var o = s.length, u = 0; u < o; ++u) t.setUint8(n + u, s.charCodeAt(u));
        }
        function c(t, n, s) {
            var o,
                u,
                l,
                f,
                h,
                v = s.length,
                _ = n;
            for (o = 0; o < v; ++o) for (h = (l = s[o]).length, u = 0; u < h; ++u, _ += 2) (f = Math.max(-1, Math.min(1, l[u]))), t.setInt16(_, f < 0 ? 32768 * f : 32767 * f, !0);
        }
        e.WavAdapter = v;
    },
    1544,
    [3, 4, 5, 6, 9, 10, 8, 1539, 1545]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.AbstractAudioContextAdapter = void 0);
        var o = t(r(d[1])),
            n = t(r(d[2])),
            u = t(r(d[3])),
            c = t(r(d[4])),
            s = t(r(d[5])),
            _ = t(r(d[6])),
            l = (function (t) {
                function l() {
                    var t;
                    return (
                        (0, o.default)(this, l),
                        ((t = (0, u.default)(this, (0, c.default)(l).call(this)))._audioContext = null),
                        (t._audioProcessingNode = null),
                        (t._audioSource = null),
                        (t._stream = null),
                        (t._sampleRate = 44100),
                        (t._audioContext = new AudioContext()),
                        (t._sampleRate = t._audioContext.sampleRate),
                        _.default.log("Current sampleRate " + t._sampleRate + "."),
                        t
                    );
                }
                return (
                    (0, s.default)(l, t),
                    (0, n.default)(l, [
                        {
                            key: "_initializeAudioContext",
                            value: function (t, o) {
                                var n = this;
                                return "function" != typeof o
                                    ? Promise.reject("a callback function is required.")
                                    : this._getAudioStream(t)
                                        .then(function (t) {
                                            (n._stream = t),
                                                (n._audioSource = n._audioContext.createMediaStreamSource(t)),
                                                (n._audioProcessingNode = n._audioContext.createScriptProcessor(4096, 1, 1)),
                                                (n._audioProcessingNode.onaudioprocess = o),
                                                _.default.debug("AudioContext is set up.");
                                        })
                                        .catch(function (t) {
                                            return _.default.error("Error calling getUserMedia(): " + t), Promise.reject(t);
                                        });
                            },
                        },
                        {
                            key: "_connectAudioGraph",
                            value: function () {
                                this._audioSource.connect(this._audioProcessingNode), this._audioProcessingNode.connect(this._audioContext.destination);
                            },
                        },
                        {
                            key: "_disconnectAudioGraph",
                            value: function () {
                                (this._audioProcessingNode.onaudioprocess = void 0), this._audioProcessingNode.disconnect(), this._audioSource.disconnect();
                            },
                        },
                        {
                            key: "_replaceMic",
                            value: function (t) {
                                var o = this;
                                return this._audioContext && this._audioProcessingNode
                                    ? this._getAudioStream(t).then(function (t) {
                                        var n = o._audioContext.createMediaStreamSource(t);
                                        o._audioSource.disconnect(), n.connect(o._audioProcessingNode), (o._stream = t), (o._audioSource = n);
                                    })
                                    : Promise.resolve();
                            },
                        },
                    ]),
                    l
                );
            })(r(d[7]).RecordingAdapter);
        e.AbstractAudioContextAdapter = l;
    },
    1545,
    [3, 4, 5, 6, 9, 10, 1539, 1542]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1546,
    [1547]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.FlacAdapter = void 0);
        var o = t(r(d[1])),
            n = t(r(d[2])),
            s = t(r(d[3])),
            l = t(r(d[4])),
            u = t(r(d[5])),
            c = t(r(d[6])),
            _ = t(r(d[7])),
            f = r(d[8]),
            h = (function (t) {
                function h() {
                    var t;
                    return (
                        (0, o.default)(this, h),
                        ((t = (0, s.default)(this, (0, l.default)(h).call(this)))._encoder = null),
                        (t._stopPromiseResolver = null),
                        (t._initWorkerPromiseResolver = null),
                        (t._initPromise = null),
                        (t._onAudioProcess = t._onAudioProcess.bind((0, c.default)((0, c.default)(t)))),
                        (t._onWorkerMessage = t._onWorkerMessage.bind((0, c.default)((0, c.default)(t)))),
                        t
                    );
                }
                return (
                    (0, u.default)(h, t),
                    (0, n.default)(h, [
                        {
                            key: "start",
                            value: function (t) {
                                var o = this;
                                return (
                                    this._initPromise || (this._initPromise = this._initialize(t)),
                                    this._initPromise.then(function () {
                                        o._connectAudioGraph();
                                    })
                                );
                            },
                        },
                        {
                            key: "stop",
                            value: function () {
                                var t = this;
                                return this._encoder
                                    ? new Promise(function (o) {
                                        (t._initPromise = null), t._disconnectAudioGraph(), (t._stopPromiseResolver = o), t._encoder.postMessage({ command: f.MAIN_THREAD_FINISH });
                                    })
                                    : (_.default.error("Attempting to stop but has nothing to stop."), Promise.reject());
                            },
                        },
                        {
                            key: "exportRecordedData",
                            value: function () {
                                return null !== this._data ? Promise.resolve({ data: this._data, format: "flac" }) : Promise.reject("No audio data recorded.");
                            },
                        },
                        {
                            key: "setMuted",
                            value: function (t) {
                                var o = !t;
                                if (!this._stream) return Promise.resolve();
                                var n = this._stream.getAudioTracks()[0];
                                return n ? (n.enabled !== o && ((n.enabled = o), _.default.log(t ? "Mute" : "Unmute")), Promise.resolve()) : (_.default.error("Cannot mute/unmute. Track not found!"), Promise.resolve());
                            },
                        },
                        {
                            key: "setMicDevice",
                            value: function (t) {
                                return this._replaceMic(t);
                            },
                        },
                        {
                            key: "_initialize",
                            value: function (t) {
                                var o = this;
                                return null !== this._encoder
                                    ? Promise.resolve()
                                    : new Promise(function (t, n) {
                                        try {
                                            o._loadWebWorker();
                                        } catch (t) {
                                            n();
                                        }
                                        (o._initWorkerPromiseResolver = t), (o._encoder.onmessage = o._onWorkerMessage), o._encoder.postMessage({ command: f.MAIN_THREAD_INIT, config: { sampleRate: o._sampleRate, bps: 16 } });
                                    }).then(function () {
                                        return o._initializeAudioContext(t, o._onAudioProcess);
                                    });
                            },
                        },
                        {
                            key: "_onAudioProcess",
                            value: function (t) {
                                var o = t.inputBuffer.getChannelData(0);
                                this._encoder.postMessage({ command: f.MAIN_THREAD_NEW_DATA_ARRIVED, buf: o });
                            },
                        },
                        {
                            key: "_onWorkerMessage",
                            value: function (t) {
                                switch (t.data.command) {
                                    case f.WORKER_BLOB_READY:
                                        (this._data = t.data.buf), null !== this._stopPromiseResolver && (this._stopPromiseResolver(), (this._stopPromiseResolver = null), this._encoder.terminate(), (this._encoder = null));
                                        break;
                                    case f.DEBUG:
                                        _.default.log(t.data);
                                        break;
                                    case f.WORKER_LIBFLAC_READY:
                                        _.default.log("libflac is ready."), this._initWorkerPromiseResolver();
                                        break;
                                    default:
                                        _.default.error('Unknown event\n                from encoder (WebWorker): "' + t.data.command + '"!');
                                }
                            },
                        },
                        {
                            key: "_loadWebWorker",
                            value: function () {
                                try {
                                    this._encoder = new Worker("/libs/flacEncodeWorker.min.js");
                                } catch (t) {
                                    try {
                                        this._encoder = new Worker("/libs/flacEncodeWorker.js");
                                    } catch (t) {
                                        throw new Error("Failed to load flacEncodeWorker.");
                                    }
                                }
                            },
                        },
                    ]),
                    h
                );
            })(r(d[9]).AbstractAudioContextAdapter);
        e.FlacAdapter = h;
    },
    1547,
    [3, 4, 5, 6, 9, 10, 8, 1539, 1548, 1545]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.DEBUG = e.WORKER_BLOB_READY = e.WORKER_LIBFLAC_READY = e.MAIN_THREAD_NEW_DATA_ARRIVED = e.MAIN_THREAD_INIT = e.MAIN_THREAD_FINISH = void 0);
        e.MAIN_THREAD_FINISH = "MAIN_THREAD_FINISH";
        e.MAIN_THREAD_INIT = "MAIN_THREAD_INIT";
        e.MAIN_THREAD_NEW_DATA_ARRIVED = "MAIN_THREAD_NEW_DATA_ARRIVED";
        e.WORKER_LIBFLAC_READY = "WORKER_LIBFLAC_READY";
        e.WORKER_BLOB_READY = "WORKER_BLOB_READY";
        e.DEBUG = "DEBUG";
    },
    1548,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1549,
    [1550]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.sessionManager = void 0);
        var s = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4]));
        function l() {
            return window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
        }
        var f = Object.freeze({ SESSION_STARTED: "SESSION_STARTED", SEGMENT_STARTED: "SEGMENT_STARTED", SEGMENT_ENDED: "SEGMENT_ENDED" }),
            S = new ((function () {
                function t() {
                    (0, s.default)(this, t), (this._sessionsMetadata = {}), this._loadMetadata();
                }
                return (
                    (0, n.default)(t, [
                        {
                            key: "_loadMetadata",
                            value: function () {
                                var t = o.default.getItem("localRecordingMetadataVersion1");
                                if (null !== t)
                                    try {
                                        var s = JSON.parse(t);
                                        this._sessionsMetadata = s;
                                    } catch (t) {
                                        return void u.default.warn("Failed to parse localStorage item.");
                                    }
                            },
                        },
                        {
                            key: "_saveMetadata",
                            value: function () {
                                o.default.setItem("localRecordingMetadataVersion1", JSON.stringify(this._sessionsMetadata));
                            },
                        },
                        {
                            key: "createSession",
                            value: function (t, s) {
                                void 0 === this._sessionsMetadata[t]
                                    ? ((this._sessionsMetadata[t] = { format: s, events: [] }), this._sessionsMetadata[t].events.push({ type: f.SESSION_STARTED, timestamp: l() }), this._saveMetadata())
                                    : u.default.warn("Session " + t + " already exists");
                            },
                        },
                        {
                            key: "getSessions",
                            value: function () {
                                for (var t = Object.keys(this._sessionsMetadata), s = [], n = 0; n < t.length; ++n) {
                                    var o = this._sessionsMetadata[t[n]],
                                        u = { start: o.events[0].timestamp, format: o.format, sessionToken: t[n], segments: this.getSegments(t[n]) };
                                    s.push(u);
                                }
                                return (
                                    s.sort(function (t, s) {
                                        return (t.start || 0) - (s.start || 0);
                                    }),
                                    s
                                );
                            },
                        },
                        {
                            key: "removeSession",
                            value: function (t) {
                                delete this._sessionsMetadata[t], this._saveMetadata();
                            },
                        },
                        {
                            key: "getSegments",
                            value: function (t) {
                                var s = this._sessionsMetadata[t];
                                return s ? this._constructSegments(s.events) : [];
                            },
                        },
                        {
                            key: "beginSegment",
                            value: function (t) {
                                return void 0 === this._sessionsMetadata[t]
                                    ? (u.default.warn("Attempting to add segments to nonexistent session " + t), -1)
                                    : (this._sessionsMetadata[t].events.push({ type: f.SEGMENT_STARTED, timestamp: l() }), this._saveMetadata(), this.getSegments(t).length - 1);
                            },
                        },
                        {
                            key: "getCurrentSegmentIndex",
                            value: function (t) {
                                if (void 0 === this._sessionsMetadata[t]) return -1;
                                var s = this.getSegments(t);
                                return 0 === s.length ? -1 : s[s.length - 1].end ? -1 : s.length - 1;
                            },
                        },
                        {
                            key: "endSegment",
                            value: function (t) {
                                void 0 === this._sessionsMetadata[t]
                                    ? u.default.warn("Attempting to end a segment in nonexistent session " + t)
                                    : (this._sessionsMetadata[t].events.push({ type: f.SEGMENT_ENDED, timestamp: l() }), this._saveMetadata());
                            },
                        },
                        {
                            key: "_constructSegments",
                            value: function (t) {
                                if (0 === t.length) return [];
                                var s = [],
                                    n = null,
                                    o = {};
                                function l() {
                                    if (void 0 === o.gapBefore || null === o.gapBefore)
                                        if (s.length > 0 && s[s.length - 1].end) {
                                            var t = s[s.length - 1];
                                            o.start && t.end ? (o.gapBefore = o.start - t.end) : (o.gapBefore = null);
                                        } else null !== n && 0 === s.length ? (o.gapBefore = o.start ? o.start - n : null) : (o.gapBefore = null);
                                    (o.duration = o.end && o.start ? o.end - o.start : null), s.push(o), (o = {});
                                }
                                for (var S = 0; S < t.length; ++S) {
                                    var v = t[S];
                                    switch (v.type) {
                                        case f.SESSION_STARTED:
                                            null === n ? (n = v.timestamp) : u.default.warn("Unexpected SESSION_STARTED event.", v);
                                            break;
                                        case f.SEGMENT_STARTED:
                                            void 0 === o.start || null === o.start ? (o.start = v.timestamp) : (l(), (o.start = v.timestamp));
                                            break;
                                        case f.SEGMENT_ENDED:
                                            void 0 === o.start || null === o.start ? u.default.warn("Unexpected SEGMENT_ENDED event", v) : ((o.end = v.timestamp), l());
                                            break;
                                        default:
                                            u.default.warn("Unexpected error during _constructSegments");
                                    }
                                }
                                return o.start && l(), s;
                            },
                        },
                    ]),
                    t
                );
            })())();
        (e.sessionManager = S), (window.sessionManager = S);
    },
    1550,
    [3, 4, 5, 1551, 1539]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            f = t(r(d[4])),
            l = t(r(d[5])),
            c = t(r(d[6])).default.getLogger(__filename),
            s = (function () {
                function t() {
                    (0, f.default)(this, t);
                }
                return (
                    (0, l.default)(t, [
                        { key: "getItem", value: function () { } },
                        { key: "setItem", value: function () { } },
                        { key: "removeItem", value: function () { } },
                    ]),
                    t
                );
            })(),
            v = new ((function (t) {
                function v() {
                    var t, o;
                    (0, f.default)(this, v), (t = (0, u.default)(this, (0, n.default)(v).call(this)));
                    try {
                        o = window.localStorage;
                    } catch (t) {
                        c.error(t);
                    }
                    return (t.storage = o || new s()), t;
                }
                return (
                    (0, o.default)(v, t),
                    (0, l.default)(v, [
                        {
                            key: "getItem",
                            value: function (t) {
                                return this.storage.getItem(t);
                            },
                        },
                        {
                            key: "setItem",
                            value: function (t, u) {
                                return this.storage.setItem(t, u);
                            },
                        },
                        {
                            key: "removeItem",
                            value: function (t) {
                                return this.storage.removeItem(t);
                            },
                        },
                    ]),
                    v
                );
            })(s))();
        e.default = v;
    },
    1551,
    [3, 6, 9, 10, 4, 5, 585]
);
__d(
    function (g, r, i, a, m, e, d) {
        var o = r(d[0]),
            n = r(d[1]),
            t = r(d[2]),
            c = r(d[3]),
            l = r(d[4]),
            s = r(d[5]),
            f = r(d[6]),
            u = r(d[7]),
            b = r(d[8]),
            C = r(d[9]),
            h = r(d[10]),
            v = r(d[11]);
        f.MiddlewareRegistry.register(function (f) {
            var y = f.getState,
                E = f.dispatch;
            return function (f) {
                return function (P) {
                    var R = f(P);
                    switch (P.type) {
                        case t.CONFERENCE_JOINED:
                            var D = y()["features/base/config"].localRecording;
                            if (!Boolean(D && D.enabled && "object" == typeof APP)) break;
                            (v.recordingController.onStateChanged = function (o) {
                                if (o) {
                                    var n = new Date();
                                    E((0, C.localRecordingEngaged)(n));
                                } else E((0, C.localRecordingUnengaged)());
                            }),
                                (v.recordingController.onWarning = function (o, n) {
                                    E((0, b.showNotification)({ title: l.i18next.t("localRecording.localRecording"), description: l.i18next.t(o, n) }, 1e4));
                                }),
                                (v.recordingController.onNotify = function (o, n) {
                                    E((0, b.showNotification)({ title: l.i18next.t("localRecording.localRecording"), description: l.i18next.t(o, n) }, 1e4));
                                }),
                                "object" == typeof APP &&
                                "object" == typeof APP.keyboardshortcut &&
                                APP.keyboardshortcut.registerShortcut(
                                    "L",
                                    null,
                                    function () {
                                        (0, o.sendAnalytics)((0, o.createShortcutEvent)("local.recording")), E((0, c.toggleDialog)(h.LocalRecordingInfoDialog));
                                    },
                                    "keyboardShortcuts.localRecording"
                                ),
                                D.format && v.recordingController.switchFormat(D.format);
                            var N = y()["features/base/conference"].conference;
                            v.recordingController.registerEvents(N);
                            break;
                        case n.APP_WILL_UNMOUNT:
                            (v.recordingController.onStateChanged = null), (v.recordingController.onNotify = null), (v.recordingController.onWarning = null);
                            break;
                        case s.SET_AUDIO_MUTED:
                            v.recordingController.setMuted(P.muted);
                            break;
                        case u.SETTINGS_UPDATED:
                            var S = y()["features/base/settings"].micDeviceId;
                            S && v.recordingController.setMicDevice(S);
                    }
                    return R;
                };
            };
        });
    },
    1552,
    [385, 819, 383, 1079, 615, 754, 542, 809, 595, 1531, 1533, 1537]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            o = r(d[3]),
            c = r(d[4]);
        n.ReducerRegistry.register("features/local-recording", function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                s = arguments.length > 1 ? arguments[1] : void 0;
            switch (s.type) {
                case o.LOCAL_RECORDING_ENGAGED:
                    return (0, t.default)({}, n, { isEngaged: !0, recordingEngagedAt: s.recordingEngagedAt, encodingFormat: c.recordingController._format });
                case o.LOCAL_RECORDING_UNENGAGED:
                    return (0, t.default)({}, n, { isEngaged: !1, recordingEngagedAt: null });
                case o.LOCAL_RECORDING_STATS_UPDATE:
                    return (0, t.default)({}, n, { stats: s.stats });
                default:
                    return n;
            }
        });
    },
    1553,
    [3, 54, 542, 1532, 1537]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.NAVBAR_GRADIENT_COLORS = void 0);
        var o = r(d[0]),
            t = r(d[1]),
            n = r(d[2]);
        e.NAVBAR_GRADIENT_COLORS = ["#000000FF", "#00000000"];
        var l = {
            bottomGradient: { bottom: 0, flexDirection: "column", justifyContent: "flex-end", minHeight: 140, left: 0, position: "absolute", right: 0 },
            conference: (0, o.fixAndroidViewClipping)({ alignSelf: "stretch", backgroundColor: o.ColorPalette.appBackground, flex: 1 }),
            gradient: { position: "absolute", top: 0, left: 0, right: 0, flex: 1 },
            gradientStretchBottom: { height: 290 },
            gradientStretchTop: { height: 140 },
            indicatorContainer: { flex: 1, flexDirection: "row", justifyContent: "flex-end", margin: o.BoxModel.margin },
            indicatorContainerWide: { marginRight: n.FILMSTRIP_SIZE + o.BoxModel.margin },
            labelWrapper: { flexDirection: "column", position: "absolute", right: 0, top: 0 },
            lonelyButton: { alignItems: "center", borderRadius: 24, flexDirection: "row", height: 48, justifyContent: "space-around", paddingHorizontal: 12 },
            lonelyButtonComponents: { marginHorizontal: 6 },
            lonelyMeetingContainer: { alignSelf: "stretch", alignItems: "center", padding: 2 * o.BoxModel.padding },
            lonelyMessage: { paddingVertical: 12 },
            navBarButton: { iconStyle: { color: o.ColorPalette.white, fontSize: 24 }, underlayColor: "transparent" },
            navBarContainer: { flexDirection: "column", left: 0, position: "absolute", right: 0, top: 0 },
            navBarSafeView: { left: 0, position: "absolute", right: 0, top: 0 },
            navBarWrapper: { alignItems: "center", flex: 1, flexDirection: "row", height: 44, justifyContent: "space-between", paddingHorizontal: 14 },
            roomTimer: { color: o.ColorPalette.white, fontSize: 15, opacity: 0.6 },
            roomName: { color: o.ColorPalette.white, fontSize: 17, fontWeight: "400" },
            roomNameWrapper: { flexDirection: "column", alignItems: "center", left: 0, paddingHorizontal: 48, position: "absolute", right: 0 },
            toolboxAndFilmstripContainer: { bottom: 0, flexDirection: "column", justifyContent: "flex-end", left: 0, paddingBottom: o.BoxModel.padding, position: "absolute", right: 0, top: 3 * o.BoxModel.margin },
        };
        (e.default = l), t.ColorSchemeRegistry.register("Conference", { lonelyButton: { backgroundColor: (0, t.schemeColor)("inviteButtonBackground") }, lonelyMessage: { color: (0, t.schemeColor)("onVideoText") } });
    },
    1554,
    [406, 925, 1290]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            s = n(r(d[4])),
            u = n(r(d[5])),
            f = n(r(d[6])),
            c = n(r(d[7])),
            y = t(r(d[8])),
            p = r(d[9]),
            _ = r(d[10]),
            v = r(d[11]),
            P = (r(d[12]), r(d[13])),
            h = r(d[14]),
            M = r(d[15]),
            C = n(r(d[16])),
            E = r(d[17]),
            b = (function (t) {
                function n(t) {
                    var o;
                    return (0, l.default)(this, n), ((o = (0, s.default)(this, (0, u.default)(n).call(this, t)))._onPress = o._onPress.bind((0, c.default)((0, c.default)(o)))), o;
                }
                return (
                    (0, f.default)(n, t),
                    (0, o.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t._isLonelyMeeting,
                                    l = t._styles,
                                    o = t.t;
                                return n
                                    ? y.default.createElement(
                                        p.View,
                                        { style: C.default.lonelyMeetingContainer },
                                        y.default.createElement(p.Text, { style: [C.default.lonelyMessage, l.lonelyMessage] }, o("lonelyMeetingExperience.youAreAlone")),
                                        y.default.createElement(
                                            p.TouchableOpacity,
                                            { onPress: this._onPress, style: [C.default.lonelyButton, l.lonelyButton] },
                                            y.default.createElement(E.Icon, { size: 24, src: E.IconAddPeople, style: C.default.lonelyButtonComponents }),
                                            y.default.createElement(p.Text, { style: [C.default.lonelyButtonComponents, l.lonelyMessage] }, o("lonelyMeetingExperience.button"))
                                        )
                                    )
                                    : null;
                            },
                        },
                        {
                            key: "_onPress",
                            value: function () {
                                this.props.dispatch((0, M.doInvitePeople)());
                            },
                        },
                    ]),
                    n
                );
            })(y.PureComponent);
        var x = (0, v.connect)(function (t) {
            return { _isLonelyMeeting: 1 === (0, h.getParticipantCount)(t), _styles: _.ColorSchemeRegistry.get(t, "Conference") };
        })((0, P.translate)(b));
        e.default = x;
    },
    1555,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 925, 542, 406, 615, 540, 1180, 1554, 403]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            u = n(r(d[3])),
            o = n(r(d[4])),
            f = n(r(d[5])),
            s = n(r(d[6])),
            c = t(r(d[7])),
            p = r(d[8]),
            v = n(r(d[9])),
            E = r(d[10]),
            y = r(d[11]),
            _ = r(d[12]),
            b = r(d[13]),
            N = n(r(d[14])),
            h = t(r(d[15])),
            V = (function (t) {
                function n() {
                    return (0, l.default)(this, n), (0, o.default)(this, (0, f.default)(n).apply(this, arguments));
                }
                return (
                    (0, s.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                return this.props._visible
                                    ? [
                                        c.default.createElement(
                                            v.default,
                                            { colors: h.NAVBAR_GRADIENT_COLORS, key: 1, pointerEvents: "none", style: h.default.gradient },
                                            c.default.createElement(p.SafeAreaView, null, c.default.createElement(p.View, { style: h.default.gradientStretchTop }))
                                        ),
                                        c.default.createElement(
                                            p.View,
                                            { key: 2, pointerEvents: "box-none", style: h.default.navBarWrapper },
                                            c.default.createElement(_.PictureInPictureButton, { styles: h.default.navBarButton }),
                                            c.default.createElement(
                                                p.View,
                                                { pointerEvents: "box-none", style: h.default.roomNameWrapper },
                                                c.default.createElement(p.Text, { numberOfLines: 1, style: h.default.roomName }, this.props._meetingName),
                                                c.default.createElement(N.default, null)
                                            )
                                        ),
                                    ]
                                    : null;
                            },
                        },
                    ]),
                    n
                );
            })(c.Component);
        var B = (0, y.connect)(function (t) {
            return { _meetingName: (0, E.getConferenceName)(t), _visible: (0, b.isToolboxVisible)(t) };
        })(V);
        e.default = B;
    },
    1556,
    [2, 3, 4, 5, 6, 9, 10, 13, 17, 1489, 383, 542, 1257, 1336, 1557, 1554]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e._mapStateToProps = T), (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            s = t(r(d[3])),
            u = t(r(d[4])),
            l = t(r(d[5])),
            c = r(d[6]),
            f = r(d[7]),
            v = r(d[8]),
            _ = r(d[9]),
            p = r(d[10]),
            h = (function (t) {
                function c(t) {
                    var o;
                    return (0, n.default)(this, c), ((o = (0, s.default)(this, (0, u.default)(c).call(this, t))).state = { timerValue: (0, v.getLocalizedDurationFormatter)(0) }), o;
                }
                return (
                    (0, l.default)(c, t),
                    (0, o.default)(c, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this._startTimer();
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this._stopTimer();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.state.timerValue;
                                return this.props._startTimestamp ? (0, p.renderConferenceTimer)(t) : null;
                            },
                        },
                        {
                            key: "_setStateFromUTC",
                            value: function (t, n) {
                                if (t && n && !(n < t)) {
                                    var o = n - t,
                                        s = (0, v.getLocalizedDurationFormatter)(o);
                                    this.setState({ timerValue: s });
                                }
                            },
                        },
                        {
                            key: "_startTimer",
                            value: function () {
                                var t = this;
                                this._interval ||
                                    (this._setStateFromUTC(this.props._startTimestamp, new Date().getTime()),
                                        (this._interval = setInterval(function () {
                                            t._setStateFromUTC(t.props._startTimestamp, new Date().getTime());
                                        }, 1e3)));
                            },
                        },
                        {
                            key: "_stopTimer",
                            value: function () {
                                this._interval && clearInterval(this._interval), this.setState({ timerValue: (0, v.getLocalizedDurationFormatter)(0) });
                            },
                        },
                    ]),
                    c
                );
            })(c.Component);
        function T(t) {
            return { _startTimestamp: (0, _.getConferenceTimestamp)(t) };
        }
        var y = (0, f.connect)(T)(h);
        e.default = y;
    },
    1557,
    [3, 4, 5, 6, 9, 10, 13, 542, 615, 1074, 1484]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
                return n.default.createElement(u.Text, { numberOfLines: 4, style: f.default.roomTimer }, t);
            });
        var n = t(r(d[1])),
            u = r(d[2]),
            f = t(r(d[3]));
    },
    1558,
    [3, 13, 17, 1554]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            c = r(d[2]),
            s = r(d[3]),
            o = r(d[4]),
            u = r(d[5]),
            f = r(d[6]),
            E = r(d[7]),
            p = r(d[8]),
            l = r(d[9]);
        f.MiddlewareRegistry.register(function (s) {
            return function (o) {
                return function (f) {
                    var E = o(f);
                    switch (f.type) {
                        case c.CONFERENCE_JOINED:
                        case u.SET_REDUCED_UI:
                            var v = s.dispatch,
                                _ = (0, s.getState)()["features/base/responsive-ui"].reducedUI;
                            v((0, l.setToolboxEnabled)(!_)), v((0, p.setFilmstripEnabled)(!_)), v((0, c.setPreferredReceiverVideoQuality)(_ ? c.VIDEO_QUALITY_LEVELS.LOW : c.VIDEO_QUALITY_LEVELS.HIGH));
                            break;
                        case c.KICKED_OUT:
                            var D = s.dispatch;
                            D(
                                (0, t.notifyKickedOut)(f.participant, function () {
                                    D((0, c.conferenceLeft)(f.conference)), D((0, n.appNavigate)(void 0));
                                })
                            );
                    }
                    return E;
                };
            };
        }),
            f.StateListenerRegistry.register(
                function (t) {
                    return (0, c.getCurrentConference)(t);
                },
                function (t, n, c) {
                    var u = n.dispatch,
                        f = n.getState,
                        p = f()["features/base/conference"],
                        l = p.authRequired,
                        v = p.passwordRequired;
                    t !== c && (u((0, o.pinParticipant)(null)), void 0 !== l || void 0 !== v || (0, s.isDialogOpen)(f(), E.FeedbackDialog) || u((0, s.hideDialog)()));
                }
            );
    },
    1559,
    [1485, 381, 383, 1079, 540, 1167, 542, 1560, 1290, 1336]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        }),
            r(d[3]);
    },
    1560,
    [1561, 1563, 1564, 1566]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.cancelFeedback = function (n, t) {
                return { type: o.CANCEL_FEEDBACK, message: t, score: n };
            }),
            (e.maybeOpenFeedbackDialog = function (n) {
                return function (o, f) {
                    var s = f(),
                        b = s["features/base/config"].feedbackPercentage,
                        l = void 0 === b ? 100 : b;
                    if (interfaceConfig.filmStripOnly || config.iAmRecorder);
                    else {
                        if (s["features/base/dialog"].component === c.FeedbackDialog) return Promise.reject(t.FEEDBACK_REQUEST_IN_PROGRESS);
                        if (s["features/feedback"].submitted) return Promise.resolve({ feedbackSubmitted: !0, showThankYou: !0 });
                        if (n.isCallstatsEnabled() && l > 100 * Math.random())
                            return new Promise(function (t) {
                                o(
                                    u(n, function () {
                                        var n = f()["features/feedback"].submitted;
                                        t({ feedbackSubmitted: n, showThankYou: !1 });
                                    })
                                );
                            });
                    }
                    return Promise.resolve({ feedbackSubmitted: !1, showThankYou: !0 });
                };
            }),
            (e.openFeedbackDialog = u),
            (e.submitFeedback = function (n, t, c) {
                return function (u) {
                    return c.sendFeedback(n, t).then(
                        function () {
                            return u({ type: o.SUBMIT_FEEDBACK_SUCCESS });
                        },
                        function (n) {
                            return u({ type: o.SUBMIT_FEEDBACK_ERROR, error: n }), Promise.reject(n);
                        }
                    );
                };
            });
        var n = r(d[0]),
            t = r(d[1]),
            o = r(d[2]),
            c = r(d[3]);
        function u(t, o) {
            return (0, n.openDialog)(c.FeedbackDialog, { conference: t, onClose: o });
        }
    },
    1561,
    [1079, 1562, 1563, 1564]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.FEEDBACK_REQUEST_IN_PROGRESS = void 0);
        e.FEEDBACK_REQUEST_IN_PROGRESS = "FeedbackRequestInProgress";
    },
    1562,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SUBMIT_FEEDBACK_SUCCESS = e.SUBMIT_FEEDBACK_ERROR = e.CANCEL_FEEDBACK = void 0);
        e.CANCEL_FEEDBACK = "CANCEL_FEEDBACK";
        e.SUBMIT_FEEDBACK_ERROR = "SUBMIT_FEEDBACK_ERROR";
        e.SUBMIT_FEEDBACK_SUCCESS = "SUBMIT_FEEDBACK_SUCCESS";
    },
    1563,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "FeedbackDialog", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
        var n = t(r(d[1]));
    },
    1564,
    [3, 1565]
);
__d(function (g, r, i, a, m, e, d) { }, 1565, []);
__d(
    function (g, r, i, a, m, e, d) {
        var s = r(d[0])(r(d[1])),
            t = r(d[2]),
            c = r(d[3]),
            u = { message: "", score: -1, submitted: !1 };
        t.ReducerRegistry.register("features/feedback", function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
                case c.CANCEL_FEEDBACK:
                    return (0, s.default)({}, t, { message: n.message, score: n.score });
                case c.SUBMIT_FEEDBACK_ERROR:
                case c.SUBMIT_FEEDBACK_SUCCESS:
                    return (0, s.default)({}, t, { message: "", score: -1, submitted: !0 });
            }
            return t;
        });
    },
    1566,
    [3, 54, 542, 1563]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        }),
            r(d[1]),
            r(d[2]);
    },
    1567,
    [1568, 1574, 1576]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.generateDeepLinkingURL = function () {
                var o = interfaceConfig.APP_SCHEME || "org.jitsi.meet",
                    p = window.location.href,
                    f = new RegExp(n.URI_PROTOCOL_PATTERN, "gi");
                if ("android" === t.Platform.OS) {
                    var s = p.replace(f, "").substr(2),
                        c = interfaceConfig.ANDROID_APP_PACKAGE || "org.jitsi.meet";
                    return "intent://" + s + "#Intent;scheme=" + o + ";package=" + c + ";end";
                }
                return p.replace(f, o + ":");
            }),
            (e.getDeepLinkingPage = function (n) {
                if (!n["features/base/conference"].room || n["features/base/config"].disableDeepLinking) return Promise.resolve();
                if ((0, o.isMobileBrowser)()) {
                    var t = "object" == typeof interfaceConfig && interfaceConfig.MOBILE_APP_PROMO;
                    return Promise.resolve(void 0 === t || Boolean(t) ? p.DeepLinkingMobilePage : p.NoMobileApp);
                }
                if (n["features/deep-linking"].launchInWeb) return Promise.resolve();
                return (0, f._openDesktopApp)(n).then(function (n) {
                    return n ? p.DeepLinkingDesktopPage : void 0;
                });
            }),
            (e.openDesktopApp = function (n) {
                return (0, f._openDesktopApp)(n);
            });
        var n = r(d[0]),
            o = r(d[1]),
            t = r(d[2]),
            p = r(d[3]),
            f = r(d[4]);
    },
    1568,
    [849, 1014, 394, 1569, 1573]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "DeepLinkingDesktopPage", {
                enumerable: !0,
                get: function () {
                    return t.default;
                },
            }),
            Object.defineProperty(e, "DeepLinkingMobilePage", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            }),
            Object.defineProperty(e, "NoMobileApp", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            });
        var t = n(r(d[1])),
            u = n(r(d[2])),
            o = n(r(d[3]));
    },
    1569,
    [3, 1570, 1571, 1572]
);
__d(function (g, r, i, a, m, e, d) { }, 1570, []);
__d(function (g, r, i, a, m, e, d) { }, 1571, []);
__d(function (g, r, i, a, m, e, d) { }, 1572, []);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._openDesktopApp = function (o) {
                return Promise.resolve(!1);
            });
    },
    1573,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            u = r(d[2]);
        t.MiddlewareRegistry.register(function (t) {
            return function (c) {
                return function (o) {
                    switch (o.type) {
                        case n.OPEN_DESKTOP_APP:
                            (0, u.openDesktopApp)(t.getState());
                    }
                    return c(o);
                };
            };
        });
    },
    1574,
    [542, 1575, 1568]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.OPEN_WEB_APP = e.OPEN_DESKTOP_APP = void 0);
        e.OPEN_DESKTOP_APP = "OPEN_DESKTOP_APP";
        e.OPEN_WEB_APP = "OPEN_WEB_APP";
    },
    1575,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0])(r(d[1])),
            t = r(d[2]),
            u = r(d[3]);
        t.ReducerRegistry.register("features/deep-linking", function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                case u.OPEN_WEB_APP:
                    return (0, n.default)({}, t, { launchInWeb: !0 });
            }
            return t;
        });
    },
    1576,
    [3, 54, 542, 1575]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1577,
    [1578]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "UnsupportedDesktopBrowser", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
        var n = t(r(d[1]));
    },
    1578,
    [3, 1579]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            s = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = s(r(d[2])),
            l = s(r(d[3])),
            u = s(r(d[4])),
            n = s(r(d[5])),
            f = s(r(d[6])),
            p = t(r(d[7])),
            c = r(d[8]),
            _ = r(d[9]),
            h = r(d[10]),
            k = (function (t) {
                function s() {
                    return (0, o.default)(this, s), (0, u.default)(this, (0, n.default)(s).apply(this, arguments));
                }
                return (
                    (0, f.default)(s, t),
                    (0, l.default)(s, [
                        {
                            key: "render",
                            value: function () {
                                return p.default.createElement(
                                    "div",
                                    { className: "unsupported-desktop-browser" },
                                    p.default.createElement("h2", { className: "unsupported-desktop-browser__title" }, "It looks like you're using a browser we don't support."),
                                    p.default.createElement(
                                        "p",
                                        { className: "unsupported-desktop-browser__description" },
                                        "Please try again with the latest version of\xa0",
                                        p.default.createElement("a", { className: "unsupported-desktop-browser__link", href: h.CHROME }, "Chrome"),
                                        "\xa0",
                                        this._showFirefox() && p.default.createElement(p.default.Fragment, null, "and ", p.default.createElement("a", { className: "unsupported-desktop-browser__link", href: h.FIREFOX }, "Firefox"))
                                    )
                                );
                            },
                        },
                        {
                            key: "_showFirefox",
                            value: function () {
                                return (0, c.isBrowsersOptimal)("firefox");
                            },
                        },
                    ]),
                    s
                );
            })(p.Component),
            w = (0, _.translate)(k);
        e.default = w;
    },
    1579,
    [2, 3, 4, 5, 6, 9, 10, 13, 1482, 615, 1580]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SAFARI = e.FIREFOX = e.EDGE = e.CHROMIUM = e.CHROME = void 0);
        e.CHROME = "http://google.com/chrome";
        e.CHROMIUM = "http://www.chromium.org/";
        e.EDGE = "https://www.microsoft.com/en-us/windows/microsoft-edge";
        e.FIREFOX = "http://www.getfirefox.com/";
        e.SAFARI = "https://support.apple.com/downloads/safari";
    },
    1580,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        }),
            r(d[2]);
    },
    1581,
    [1582, 1620, 1621]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "BlankPage", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            }),
            Object.defineProperty(e, "WelcomePage", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var n = t(r(d[1])),
            u = t(r(d[2]));
    },
    1582,
    [3, 1583, 1585]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var o = n(r(d[2])),
            l = n(r(d[3])),
            u = n(r(d[4])),
            c = n(r(d[5])),
            f = n(r(d[6])),
            s = t(r(d[7])),
            p = r(d[8]),
            y = r(d[9]),
            v = r(d[10]),
            h = r(d[11]),
            _ = (r(d[12]), r(d[13])),
            k = n(r(d[14])),
            C = (function (t) {
                function n() {
                    return (0, o.default)(this, n), (0, u.default)(this, (0, c.default)(n).apply(this, arguments));
                }
                return (
                    (0, f.default)(n, t),
                    (0, l.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.props.dispatch((0, _.destroyLocalTracks)());
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props._styles;
                                return s.default.createElement(p.View, { style: [k.default.blankPageWrapper, t.loadingOverlayWrapper] }, s.default.createElement(v.LoadingIndicator, { color: t.indicatorColor, size: "large" }));
                            },
                        },
                    ]),
                    n
                );
            })(s.Component);
        var L = (0, h.connect)(function (t) {
            return { _styles: y.ColorSchemeRegistry.get(t, "LoadConfigOverlay") };
        })(C);
        e.default = L;
    },
    1583,
    [2, 3, 4, 5, 6, 9, 10, 13, 17, 925, 394, 542, 406, 803, 1584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.SWITCH_UNDER_COLOR = e.SWITCH_THUMB_COLOR = e.SIDEBAR_AVATAR_SIZE = e.PLACEHOLDER_TEXT_COLOR = void 0);
        var o = t(r(d[1])),
            n = r(d[2]),
            l = r(d[3]);
        e.PLACEHOLDER_TEXT_COLOR = "rgba(255, 255, 255, 0.3)";
        e.SIDEBAR_AVATAR_SIZE = 100;
        var c = l.ColorPalette.blueHighlight;
        e.SWITCH_THUMB_COLOR = c;
        e.SWITCH_UNDER_COLOR = "rgba(0, 0, 0, 0.4)";
        var C = l.ColorPalette.white,
            u = {
                audioVideoSwitch: { marginHorizontal: 5 },
                audioVideoSwitchContainer: { alignItems: "center", flexDirection: "row" },
                blankPageWrapper: (0, o.default)({}, n.StyleSheet.absoluteFillObject, { alignItems: "center", flex: 1, flexDirection: "column", justifyContent: "center" }),
                button: { backgroundColor: l.ColorPalette.blue, borderColor: l.ColorPalette.blue, borderRadius: 4, borderWidth: 1, height: 30, justifyContent: "center", paddingHorizontal: 20 },
                buttonDisabled: { backgroundColor: "#cccccc", borderColor: "#999999" },
                buttonText: { alignSelf: "center", color: l.ColorPalette.white, fontSize: 14 },
                displayName: { color: l.ColorPalette.white, fontSize: 16, marginTop: l.BoxModel.margin, textAlign: "center" },
                header: { justifyContent: "space-between" },
                hintButtonContainer: { flexDirection: "row", justifyContent: "center" },
                hintContainer: {
                    backgroundColor: l.ColorPalette.white,
                    borderColor: l.ColorPalette.white,
                    borderRadius: 4,
                    borderWidth: 1,
                    flexDirection: "column",
                    marginVertical: 5,
                    overflow: "hidden",
                    paddingHorizontal: l.BoxModel.padding,
                    paddingVertical: 2 * l.BoxModel.padding,
                },
                hintText: { textAlign: "center" },
                hintTextContainer: { marginBottom: 2 * l.BoxModel.margin },
                itemContainer: { flexDirection: "column", paddingTop: 10 },
                joinControls: { padding: l.BoxModel.padding },
                localVideoTrackUnderlay: { alignSelf: "stretch", backgroundColor: "transparent", flex: 1 },
                page: { flex: 1, flexDirection: "column" },
                reducedUIContainer: { alignItems: "center", backgroundColor: l.ColorPalette.blue, flex: 1, justifyContent: "center" },
                reducedUIText: { color: C, fontSize: 12 },
                roomContainer: { alignSelf: "stretch", flexDirection: "column" },
                sideBar: { width: 250 },
                sideBarBody: { backgroundColor: l.ColorPalette.white, flex: 1 },
                sideBarHeader: { alignItems: "center", flexDirection: "column", height: 150, justifyContent: "center", padding: l.BoxModel.padding },
                sideBarItem: { padding: 13 },
                sideBarItemButtonContainer: { alignItems: "center", flexDirection: "row", justifyContent: "flex-start" },
                sideBarItemIcon: { color: l.ColorPalette.blueHighlight, fontSize: 20, marginRight: 15 },
                sideBarItemText: { color: l.ColorPalette.black, fontWeight: "bold" },
                switchLabel: { paddingHorizontal: 3 },
                textInput: { backgroundColor: "transparent", borderColor: l.ColorPalette.white, borderRadius: 4, borderWidth: 1, color: C, fontSize: 23, height: 50, padding: 4, textAlign: "center" },
                title: { color: C, fontSize: 25, marginBottom: 2 * l.BoxModel.margin, textAlign: "center" },
                welcomePage: { backgroundColor: l.ColorPalette.blue, overflow: "hidden" },
            };
        e.default = u;
    },
    1584,
    [3, 54, 17, 406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            u = n(r(d[4])),
            s = n(r(d[5])),
            c = n(r(d[6])),
            f = n(r(d[7])),
            h = n(r(d[8])),
            p = n(r(d[9])),
            y = n(r(d[10])),
            _ = r(d[11]),
            E = r(d[12]),
            b = r(d[13]),
            F = r(d[14]),
            v = r(d[15]),
            C = r(d[16]),
            w = r(d[17]),
            x = r(d[18]),
            B = r(d[19]),
            S = r(d[20]),
            T = r(d[21]),
            I = r(d[22]),
            V = r(d[23]),
            A = r(d[24]),
            k = n(r(d[25])),
            H = t(r(d[26])),
            L = n(r(d[27])),
            D = n(r(d[28])),
            P = n(r(d[29])),
            O = (function (t) {
                function n(t) {
                    var l;
                    return (
                        (0, o.default)(this, n),
                        ((l = (0, s.default)(this, (0, c.default)(n).call(this, t))).state._fieldFocused = !1),
                        (l.state.hintBoxAnimation = new _.Animated.Value(0)),
                        (l._onFieldFocusChange = l._onFieldFocusChange.bind((0, p.default)((0, p.default)(l)))),
                        (l._onShowSideBar = l._onShowSideBar.bind((0, p.default)((0, p.default)(l)))),
                        (l._renderHintBox = l._renderHintBox.bind((0, p.default)((0, p.default)(l)))),
                        (l._onFieldBlur = l._onFieldFocusChange.bind((0, p.default)((0, p.default)(l)), !1)),
                        (l._onFieldFocus = l._onFieldFocusChange.bind((0, p.default)((0, p.default)(l)), !0)),
                        l
                    );
                }
                return (
                    (0, h.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                (0, f.default)((0, c.default)(n.prototype), "componentDidMount", this).call(this);
                                var t = this.props.dispatch;
                                this.props._settings.startAudioOnly
                                    ? t((0, S.destroyLocalTracks)())
                                    : navigator.permissions.query({ name: "camera" }).then(function (n) {
                                        "granted" === n && t((0, S.createDesiredLocalTracks)(C.MEDIA_TYPE.VIDEO));
                                    });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return this._renderFullUI();
                            },
                        },
                        {
                            key: "_getHintBoxStyle",
                            value: function () {
                                return [H.default.hintContainer, { opacity: this.state.hintBoxAnimation }];
                            },
                        },
                        {
                            key: "_onFieldFocusChange",
                            value: function (t) {
                                var n = this;
                                t && this.setState({ _fieldFocused: !0 }),
                                    _.Animated.timing(this.state.hintBoxAnimation, { duration: 300, toValue: t ? 1 : 0 }).start(function (l) {
                                        return l.finished && !t && n.setState({ _fieldFocused: !1 });
                                    });
                            },
                        },
                        {
                            key: "_onShowSideBar",
                            value: function () {
                                _.Keyboard.dismiss(), this.props.dispatch((0, V.setSideBarVisible)(!0));
                            },
                        },
                        {
                            key: "_renderHintBox",
                            value: function () {
                                if (this.state._fieldFocused) {
                                    var t = this.props.t;
                                    return y.default.createElement(
                                        _.Animated.View,
                                        { style: this._getHintBoxStyle() },
                                        y.default.createElement(_.View, { style: H.default.hintTextContainer }, y.default.createElement(w.Text, { style: H.default.hintText }, t("welcomepage.roomnameHint"))),
                                        y.default.createElement(_.View, { style: H.default.hintButtonContainer }, this._renderJoinButton())
                                    );
                                }
                                return null;
                            },
                        },
                        {
                            key: "_renderJoinButton",
                            value: function () {
                                var t,
                                    n = this.props.t;
                                t = this.state.joining
                                    ? y.default.createElement(_.View, null, y.default.createElement(w.LoadingIndicator, { color: H.default.buttonText.color, size: "small" }))
                                    : y.default.createElement(w.Text, { style: H.default.buttonText }, this.props.t("welcomepage.join"));
                                var l = this._isJoinDisabled();
                                return y.default.createElement(
                                    _.TouchableHighlight,
                                    { accessibilityLabel: n("welcomepage.accessibilityLabel.join"), disabled: l, onPress: this._onJoin, style: [H.default.button, l ? H.default.buttonDisabled : null], underlayColor: B.ColorPalette.white },
                                    t
                                );
                            },
                        },
                        {
                            key: "_renderFullUI",
                            value: function () {
                                var t = this.props,
                                    n = t._headerStyles,
                                    l = t.t;
                                return y.default.createElement(
                                    k.default,
                                    { style: H.default.welcomePage },
                                    y.default.createElement(
                                        _.View,
                                        { style: n.page },
                                        y.default.createElement(
                                            w.Header,
                                            { style: H.default.header },
                                            y.default.createElement(_.TouchableOpacity, { onPress: this._onShowSideBar }, y.default.createElement(v.Icon, { src: v.IconMenu, style: n.headerButtonIcon })),
                                            y.default.createElement(L.default, null)
                                        ),
                                        y.default.createElement(
                                            _.SafeAreaView,
                                            { style: H.default.roomContainer },
                                            y.default.createElement(
                                                _.View,
                                                { style: H.default.joinControls },
                                                y.default.createElement(_.TextInput, {
                                                    accessibilityLabel: l("welcomepage.accessibilityLabel.roomname"),
                                                    autoCapitalize: "none",
                                                    autoComplete: "off",
                                                    autoCorrect: !1,
                                                    autoFocus: !1,
                                                    onBlur: this._onFieldBlur,
                                                    onChangeText: this._onRoomChange,
                                                    onFocus: this._onFieldFocus,
                                                    onSubmitEditing: this._onJoin,
                                                    placeholder: l("welcomepage.roomname"),
                                                    placeholderTextColor: H.PLACEHOLDER_TEXT_COLOR,
                                                    returnKeyType: "go",
                                                    style: H.default.textInput,
                                                    underlineColorAndroid: "transparent",
                                                    value: this.state.room,
                                                }),
                                                this._renderHintBox()
                                            )
                                        ),
                                        y.default.createElement(D.default, { disabled: this.state._fieldFocused }),
                                        y.default.createElement(I.SettingsView, null),
                                        y.default.createElement(T.DialInSummary, null)
                                    ),
                                    y.default.createElement(P.default, null)
                                );
                            },
                        },
                        {
                            key: "_renderReducedUI",
                            value: function () {
                                var t = this.props.t;
                                return y.default.createElement(_.View, { style: H.default.reducedUIContainer }, y.default.createElement(w.Text, { style: H.default.reducedUIText }, t("welcomepage.reducedUIText", { app: (0, E.getName)() })));
                            },
                        },
                    ]),
                    n
                );
            })(A.AbstractWelcomePage);
        var U = (0, F.translate)(
            (0, x.connect)(function (t) {
                return (0, l.default)({}, (0, A._mapStateToProps)(t), { _headerStyles: b.ColorSchemeRegistry.get(t, "Header") });
            })(O)
        );
        e.default = U;
    },
    1585,
    [2, 3, 54, 4, 5, 6, 9, 47, 10, 8, 13, 17, 381, 925, 615, 403, 754, 394, 542, 406, 803, 1179, 1586, 1601, 1603, 1604, 1584, 1605, 1606, 1618]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
        var n = r(d[1]);
        Object.keys(n).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t];
                    },
                });
        });
        var u = r(d[2]);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return u[t];
                    },
                });
        });
        var o = r(d[3]);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return o[t];
                    },
                });
        });
        var c = r(d[4]);
        Object.keys(c).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                        return c[t];
                    },
                });
        }),
            r(d[5]),
            r(d[6]);
    },
    1586,
    [1587, 1588, 1589, 1598, 1597, 1599, 1600]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setSettingsViewVisible = function (t) {
                return { type: u.SET_SETTINGS_VIEW_VISIBLE, visible: t };
            }),
            (e.openSettingsDialog = function (t) {
                return (0, n.openDialog)(l.SettingsDialog, { defaultTab: t });
            }),
            (e.submitMoreTab = function (n) {
                return function (u, l) {
                    var c = (0, s.getMoreTabProps)(l());
                    n.followMeEnabled !== c.followMeEnabled && u((0, t.setFollowMe)(n.followMeEnabled)),
                        (n.startAudioMuted === c.startAudioMuted && n.startVideoMuted === c.startVideoMuted) || u((0, t.setStartMutedPolicy)(n.startAudioMuted, n.startVideoMuted)),
                        n.currentLanguage !== c.currentLanguage && o.i18next.changeLanguage(n.currentLanguage);
                };
            }),
            (e.submitProfileTab = function (t) {
                return function (n, o) {
                    var u = (0, s.getProfileTabProps)(o());
                    t.displayName !== u.displayName && APP.conference.changeLocalDisplayName(t.displayName), t.email !== u.email && APP.conference.changeLocalEmail(t.email);
                };
            });
        var t = r(d[0]),
            n = r(d[1]),
            o = r(d[2]),
            u = r(d[3]),
            l = r(d[4]),
            s = r(d[5]);
    },
    1587,
    [383, 1079, 615, 1588, 1589, 1597]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SET_SETTINGS_VIEW_VISIBLE = void 0);
        e.SET_SETTINGS_VIEW_VISIBLE = "SET_SETTINGS_VIEW_VISIBLE";
    },
    1588,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1589,
    [1590]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        });
    },
    1590,
    [1591]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "SettingsView", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
        var n = t(r(d[1]));
    },
    1591,
    [3, 1592]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = t(r(d[1])),
            n = t(r(d[2])),
            s = t(r(d[3])),
            u = t(r(d[4])),
            o = t(r(d[5])),
            f = t(r(d[6])),
            c = t(r(d[7])),
            h = t(r(d[8])),
            v = r(d[9]),
            _ = r(d[10]),
            p = r(d[11]),
            b = r(d[12]),
            S = r(d[13]),
            w = r(d[14]),
            C = r(d[15]),
            R = t(r(d[16])),
            V = t(r(d[17])),
            E = r(d[18]),
            y = t(r(d[19])),
            A = v.NativeModules.AppInfo,
            L = (function (t) {
                function l(t) {
                    var s;
                    return (
                        (0, n.default)(this, l),
                        ((s = (0, u.default)(this, (0, o.default)(l).call(this, t))).state = { showAdvanced: !1 }),
                        (s._onBlurServerURL = s._onBlurServerURL.bind((0, c.default)((0, c.default)(s)))),
                        (s._onDisableCallIntegration = s._onDisableCallIntegration.bind((0, c.default)((0, c.default)(s)))),
                        (s._onDisableP2P = s._onDisableP2P.bind((0, c.default)((0, c.default)(s)))),
                        (s._onRequestClose = s._onRequestClose.bind((0, c.default)((0, c.default)(s)))),
                        (s._onShowAdvanced = s._onShowAdvanced.bind((0, c.default)((0, c.default)(s)))),
                        (s._setURLFieldReference = s._setURLFieldReference.bind((0, c.default)((0, c.default)(s)))),
                        (s._showURLAlert = s._showURLAlert.bind((0, c.default)((0, c.default)(s)))),
                        s
                    );
                }
                return (
                    (0, f.default)(l, t),
                    (0, s.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                return h.default.createElement(
                                    b.Modal,
                                    { onRequestClose: this._onRequestClose, presentationStyle: "overFullScreen", visible: this.props._visible },
                                    h.default.createElement(v.View, { style: this.props._headerStyles.page }, this._renderHeader(), this._renderBody())
                                );
                            },
                        },
                        {
                            key: "_onBlurServerURL",
                            value: function () {
                                this._processServerURL(!1);
                            },
                        },
                        {
                            key: "_onDisableCallIntegration",
                            value: function (t) {
                                this._updateSettings({ disableCallIntegration: t });
                            },
                        },
                        {
                            key: "_onDisableP2P",
                            value: function (t) {
                                this._updateSettings({ disableP2P: t });
                            },
                        },
                        {
                            key: "_onRequestClose",
                            value: function () {
                                this.setState({ showAdvanced: !1 }), this._processServerURL(!0);
                            },
                        },
                        {
                            key: "_onShowAdvanced",
                            value: function () {
                                this.setState({ showAdvanced: !this.state.showAdvanced });
                            },
                        },
                        {
                            key: "_processServerURL",
                            value: function (t) {
                                var l = this.props._settings.serverURL,
                                    n = (0, E.normalizeUserInputURL)(l);
                                null === n ? this._showURLAlert() : (this._onChangeServerURL(n), t && this.props.dispatch((0, C.setSettingsViewVisible)(!1)));
                            },
                        },
                        {
                            key: "_renderAdvancedSettings",
                            value: function () {
                                var t = this.props._settings,
                                    l = this.state.showAdvanced;
                                return l
                                    ? h.default.createElement(
                                        h.default.Fragment,
                                        null,
                                        h.default.createElement(
                                            R.default,
                                            { fieldSeparator: !0, label: "settingsView.disableCallIntegration" },
                                            h.default.createElement(v.Switch, { onValueChange: this._onDisableCallIntegration, value: t.disableCallIntegration })
                                        ),
                                        h.default.createElement(R.default, { fieldSeparator: !0, label: "settingsView.disableP2P" }, h.default.createElement(v.Switch, { onValueChange: this._onDisableP2P, value: t.disableP2P }))
                                    )
                                    : h.default.createElement(R.default, { fieldSeparator: !0, label: "settingsView.showAdvanced" }, h.default.createElement(v.Switch, { onValueChange: this._onShowAdvanced, value: l }));
                            },
                        },
                        {
                            key: "_renderBody",
                            value: function () {
                                var t = this.props._settings;
                                return h.default.createElement(
                                    v.SafeAreaView,
                                    { style: y.default.settingsForm },
                                    h.default.createElement(
                                        v.ScrollView,
                                        null,
                                        h.default.createElement(V.default, { label: "settingsView.profileSection" }),
                                        h.default.createElement(
                                            R.default,
                                            { fieldSeparator: !0, label: "settingsView.displayName" },
                                            h.default.createElement(v.TextInput, { autoCorrect: !1, onChangeText: this._onChangeDisplayName, placeholder: "John Doe", value: t.displayName })
                                        ),
                                        h.default.createElement(
                                            R.default,
                                            { label: "settingsView.email" },
                                            h.default.createElement(v.TextInput, {
                                                autoCapitalize: "none",
                                                autoCorrect: !1,
                                                keyboardType: "email-address",
                                                onChangeText: this._onChangeEmail,
                                                placeholder: "email@example.com",
                                                value: t.email,
                                            })
                                        ),
                                        h.default.createElement(V.default, { label: "settingsView.conferenceSection" }),
                                        h.default.createElement(
                                            R.default,
                                            { fieldSeparator: !0, label: "settingsView.serverURL" },
                                            h.default.createElement(v.TextInput, {
                                                autoCapitalize: "none",
                                                autoCorrect: !1,
                                                onBlur: this._onBlurServerURL,
                                                onChangeText: this._onChangeServerURL,
                                                placeholder: this.props._serverURL,
                                                value: t.serverURL,
                                            })
                                        ),
                                        h.default.createElement(
                                            R.default,
                                            { fieldSeparator: !0, label: "settingsView.startWithAudioMuted" },
                                            h.default.createElement(v.Switch, { onValueChange: this._onStartAudioMutedChange, value: t.startWithAudioMuted })
                                        ),
                                        h.default.createElement(R.default, { label: "settingsView.startWithVideoMuted" }, h.default.createElement(v.Switch, { onValueChange: this._onStartVideoMutedChange, value: t.startWithVideoMuted })),
                                        h.default.createElement(V.default, { label: "settingsView.buildInfoSection" }),
                                        h.default.createElement(R.default, { label: "settingsView.version" }, h.default.createElement(v.Text, null, A.version + " build " + A.buildNumber)),
                                        h.default.createElement(V.default, { label: "settingsView.advanced" }),
                                        this._renderAdvancedSettings()
                                    )
                                );
                            },
                        },
                        {
                            key: "_renderHeader",
                            value: function () {
                                return h.default.createElement(b.HeaderWithNavigation, { headerLabelKey: "settingsView.header", onPressBack: this._onRequestClose });
                            },
                        },
                        {
                            key: "_setURLFieldReference",
                            value: function (t) {
                                this._urlField = t;
                            },
                        },
                        {
                            key: "_showURLAlert",
                            value: function () {
                                var t = this,
                                    l = this.props.t;
                                v.Alert.alert(l("settingsView.alertTitle"), l("settingsView.alertURLText"), [
                                    {
                                        onPress: function () {
                                            return t._urlField.focus();
                                        },
                                        text: l("settingsView.alertOk"),
                                    },
                                ]);
                            },
                        },
                    ]),
                    l
                );
            })(w.AbstractSettingsView);
        var U = (0, p.translate)(
            (0, S.connect)(function (t) {
                return (0, l.default)({}, (0, w._mapStateToProps)(t), { _headerStyles: _.ColorSchemeRegistry.get(t, "Header") });
            })(L)
        );
        e.default = U;
    },
    1592,
    [3, 54, 4, 5, 6, 9, 10, 8, 13, 17, 925, 615, 394, 542, 1593, 1587, 1594, 1596, 1597, 1595]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t) {
                return { _serverURL: (0, h.getDefaultURL)(t), _settings: t["features/base/settings"], _visible: t["features/settings"].visible };
            }),
            (e.AbstractSettingsView = void 0);
        var n = t(r(d[1])),
            u = t(r(d[2])),
            s = t(r(d[3])),
            o = t(r(d[4])),
            l = t(r(d[5])),
            f = t(r(d[6])),
            _ = r(d[7]),
            h = r(d[8]),
            S = r(d[9]),
            p = (function (t) {
                function _(t) {
                    var u;
                    return (
                        (0, n.default)(this, _),
                        ((u = (0, s.default)(this, (0, o.default)(_).call(this, t)))._onChangeDisplayName = u._onChangeDisplayName.bind((0, f.default)((0, f.default)(u)))),
                        (u._onChangeEmail = u._onChangeEmail.bind((0, f.default)((0, f.default)(u)))),
                        (u._onChangeServerURL = u._onChangeServerURL.bind((0, f.default)((0, f.default)(u)))),
                        (u._onStartAudioMutedChange = u._onStartAudioMutedChange.bind((0, f.default)((0, f.default)(u)))),
                        (u._onStartVideoMutedChange = u._onStartVideoMutedChange.bind((0, f.default)((0, f.default)(u)))),
                        u
                    );
                }
                return (
                    (0, l.default)(_, t),
                    (0, u.default)(_, [
                        {
                            key: "_onChangeDisplayName",
                            value: function (t) {
                                this._updateSettings({ displayName: t });
                            },
                        },
                        {
                            key: "_onChangeEmail",
                            value: function (t) {
                                this._updateSettings({ email: t });
                            },
                        },
                        {
                            key: "_onChangeServerURL",
                            value: function (t) {
                                this._updateSettings({ serverURL: t });
                            },
                        },
                        {
                            key: "_onStartAudioMutedChange",
                            value: function (t) {
                                this._updateSettings({ startWithAudioMuted: t });
                            },
                        },
                        {
                            key: "_onStartVideoMutedChange",
                            value: function (t) {
                                this._updateSettings({ startWithVideoMuted: t });
                            },
                        },
                        {
                            key: "_updateSettings",
                            value: function (t) {
                                this.props.dispatch((0, S.updateSettings)(t));
                            },
                        },
                    ]),
                    _
                );
            })(_.Component);
        e.AbstractSettingsView = p;
    },
    1593,
    [3, 4, 5, 6, 9, 10, 8, 13, 381, 807]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = l(r(d[2])),
            n = l(r(d[3])),
            f = l(r(d[4])),
            o = l(r(d[5])),
            s = l(r(d[6])),
            p = l(r(d[7])),
            c = t(r(d[8])),
            h = r(d[9]),
            y = r(d[10]),
            _ = t(r(d[11])),
            v = (function (t) {
                function l(t) {
                    var n;
                    return (
                        (0, u.default)(this, l),
                        (n = (0, f.default)(this, (0, o.default)(l).call(this, t))),
                        c.default.Children.only(n.props.children),
                        (n._getDefaultFieldProps = n._getDefaultFieldProps.bind((0, p.default)((0, p.default)(n)))),
                        (n._getRowStyle = n._getRowStyle.bind((0, p.default)((0, p.default)(n)))),
                        n
                    );
                }
                return (
                    (0, s.default)(l, t),
                    (0, n.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props.t,
                                    l = c.default.cloneElement(this.props.children, this._getDefaultFieldProps(this.props.children));
                                return c.default.createElement(
                                    h.View,
                                    { style: this._getRowStyle() },
                                    c.default.createElement(h.View, { style: _.default.fieldLabelContainer }, c.default.createElement(h.Text, { style: [_.default.text, _.default.fieldLabelText] }, t(this.props.label))),
                                    c.default.createElement(h.View, { style: _.default.fieldValueContainer }, l)
                                );
                            },
                        },
                        {
                            key: "_getDefaultFieldProps",
                            value: function (t) {
                                if (t && t.type)
                                    switch (t.type.displayName) {
                                        case "TextInput":
                                            return { placeholderTextColor: _.PLACEHOLDER_COLOR, style: _.default.textInputField, underlineColorAndroid: _.ANDROID_UNDERLINE_COLOR };
                                    }
                                return {};
                            },
                        },
                        {
                            key: "_getRowStyle",
                            value: function () {
                                var t = [_.default.fieldContainer];
                                return this.props.fieldSeparator && t.push(_.default.fieldSeparator), t;
                            },
                        },
                    ]),
                    l
                );
            })(c.Component),
            C = (0, y.translate)(v);
        e.default = C;
    },
    1594,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 615, 1595]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.PLACEHOLDER_COLOR = e.ANDROID_UNDERLINE_COLOR = void 0);
        var t = r(d[0]);
        e.ANDROID_UNDERLINE_COLOR = "transparent";
        var o = t.ColorPalette.lightGrey;
        e.PLACEHOLDER_COLOR = o;
        var l = (0, t.createStyleSheet)({
            fieldContainer: { alignItems: "center", flexDirection: "row", minHeight: 65, paddingHorizontal: 8 },
            fieldLabelContainer: { alignItems: "center", flexDirection: "row", marginRight: 5 },
            fieldLabelText: { fontSize: 17 },
            fieldSeparator: { borderBottomWidth: 1, borderColor: "rgba(0, 0, 0, 0.1)" },
            fieldValueContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "flex-end" },
            formSectionTitle: { backgroundColor: "rgba(0, 0, 0, 0.1)", padding: 5 },
            settingsForm: { backgroundColor: t.ColorPalette.white, flex: 1 },
            text: { color: t.ColorPalette.black },
            textInputField: { color: t.ColorPalette.black, flex: 1, fontSize: 17, textAlign: "right" },
        });
        e.default = l;
    },
    1595,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var u = l(r(d[2])),
            n = l(r(d[3])),
            f = l(r(d[4])),
            o = l(r(d[5])),
            s = l(r(d[6])),
            c = t(r(d[7])),
            p = r(d[8]),
            v = r(d[9]),
            y = l(r(d[10])),
            h = (function (t) {
                function l() {
                    return (0, u.default)(this, l), (0, f.default)(this, (0, o.default)(l).apply(this, arguments));
                }
                return (
                    (0, s.default)(l, t),
                    (0, n.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    l = t.label,
                                    u = t.style,
                                    n = t.t;
                                return c.default.createElement(p.View, { style: [y.default.formSectionTitle, u] }, c.default.createElement(p.Text, null, n(l)));
                            },
                        },
                    ]),
                    l
                );
            })(c.Component),
            _ = (0, v.translate)(h);
        e.default = _;
    },
    1596,
    [2, 3, 4, 5, 6, 9, 10, 13, 17, 615, 1595]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isSettingEnabled = u),
            (e.normalizeUserInputURL = function (t) {
                if (t) {
                    t = t.replace(/\s/g, "").toLowerCase();
                    var o = new RegExp("^(\\w+://)?(.+)$"),
                        l = o.exec(t);
                    !l || (l[1] && l[1].startsWith("http")) || (t = "https://" + l[2]);
                    var u = (0, n.parseStandardURIString)(t);
                    return u.host ? u.toString() : null;
                }
                return t;
            }),
            (e.shouldShowOnlyDeviceSelection = function () {
                return 1 === interfaceConfig.SETTINGS_SECTIONS.length && u("devices");
            }),
            (e.getMoreTabProps = function (n) {
                var u = (0, t.toState)(n),
                    c = o.i18next.language || o.DEFAULT_LANGUAGE,
                    s = u["features/base/conference"],
                    f = s.conference,
                    S = s.followMeEnabled,
                    E = s.startAudioMutedPolicy,
                    h = s.startVideoMutedPolicy,
                    p = Boolean(u["features/follow-me"].moderator),
                    T = interfaceConfig.SETTINGS_SECTIONS || [],
                    L = Boolean(f && T.includes("moderator") && (0, l.isLocalParticipantModerator)(u));
                return {
                    currentLanguage: c,
                    followMeActive: Boolean(f && p),
                    followMeEnabled: Boolean(f && S),
                    languages: o.LANGUAGES,
                    showLanguageSettings: T.includes("language"),
                    showModeratorSettings: L,
                    startAudioMuted: Boolean(f && E),
                    startVideoMuted: Boolean(f && h),
                };
            }),
            (e.getProfileTabProps = function (n) {
                var o = (0, t.toState)(n),
                    u = o["features/base/conference"],
                    c = u.authEnabled,
                    s = u.authLogin,
                    f = u.conference,
                    S = (0, l.getLocalParticipant)(o);
                return { authEnabled: Boolean(f && c), authLogin: s, displayName: S.name, email: S.email };
            });
        var t = r(d[0]),
            n = r(d[1]),
            o = r(d[2]),
            l = r(d[3]);
        function u(t) {
            return interfaceConfig.SETTINGS_SECTIONS.includes(t);
        }
    },
    1597,
    [542, 849, 615, 540]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SETTINGS_TABS = void 0);
        e.SETTINGS_TABS = { CALENDAR: "calendar_tab", DEVICES: "devices_tab", MORE: "more_tab", PROFILE: "profile_tab" };
    },
    1598,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            u = r(d[2]);
        function c(t, n, c) {
            return (0, t.dispatch)((0, u.setSettingsViewVisible)(!1)), n(c);
        }
        n.MiddlewareRegistry.register(function (n) {
            return function (u) {
                return function (s) {
                    switch (s.type) {
                        case t.SET_ROOM:
                            return c(n, u, s);
                    }
                    return u(s);
                };
            };
        });
    },
    1599,
    [383, 542, 1587]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0])(r(d[1])),
            n = r(d[2]),
            s = r(d[3]);
        n.ReducerRegistry.register("features/settings", function () {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                u = arguments.length > 1 ? arguments[1] : void 0;
            switch (u.type) {
                case s.SET_SETTINGS_VIEW_VISIBLE:
                    return (0, t.default)({}, n, { visible: u.visible });
            }
            return n;
        });
    },
    1600,
    [3, 54, 542, 1588]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setSideBarVisible = function (_) {
                return { type: t.SET_SIDEBAR_VISIBLE, visible: _ };
            }),
            (e.setWelcomePageListsDefaultPage = function (_) {
                return { type: t.SET_WELCOME_PAGE_LISTS_DEFAULT_PAGE, pageIndex: _ };
            });
        var t = r(d[0]);
    },
    1601,
    [1602]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.SET_WELCOME_PAGE_LISTS_DEFAULT_PAGE = e.SET_SIDEBAR_VISIBLE = void 0);
        e.SET_SIDEBAR_VISIBLE = "SET_SIDEBAR_VISIBLE";
        e.SET_WELCOME_PAGE_LISTS_DEFAULT_PAGE = "SET_WELCOME_PAGE_LIST_DEFAULT_PAGE";
    },
    1602,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e._mapStateToProps = function (t) {
                return { _calendarEnabled: (0, p.isCalendarEnabled)(t), _room: t["features/base/conference"].room, _settings: t["features/base/settings"] };
            }),
            (e.AbstractWelcomePage = void 0);
        var o = t(r(d[1])),
            n = t(r(d[2])),
            u = t(r(d[3])),
            s = t(r(d[4])),
            l = t(r(d[5])),
            c = t(r(d[6])),
            h = r(d[7]),
            f = r(d[8]),
            _ = r(d[9]),
            v = r(d[10]),
            p = r(d[11]),
            R = r(d[12]),
            b = (function (t) {
                function f(t) {
                    var s;
                    return (
                        (0, o.default)(this, f),
                        ((s = (0, n.default)(this, (0, u.default)(f).call(this, t))).state = { animateTimeoutId: void 0, generatedRoomname: "", joining: !1, room: "", roomPlaceholder: "", updateTimeoutId: void 0 }),
                        (s._animateRoomnameChanging = s._animateRoomnameChanging.bind((0, c.default)((0, c.default)(s)))),
                        (s._onJoin = s._onJoin.bind((0, c.default)((0, c.default)(s)))),
                        (s._onRoomChange = s._onRoomChange.bind((0, c.default)((0, c.default)(s)))),
                        (s._updateRoomname = s._updateRoomname.bind((0, c.default)((0, c.default)(s)))),
                        s
                    );
                }
                return (
                    (0, l.default)(f, t),
                    (0, s.default)(f, null, [
                        {
                            key: "getDerivedStateFromProps",
                            value: function (t, o) {
                                return { room: t._room || o.room };
                            },
                        },
                    ]),
                    (0, s.default)(f, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                (this._mounted = !0), (0, _.sendAnalytics)((0, _.createWelcomePageEvent)("viewed", void 0, { value: 1 }));
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this._clearTimeouts(), (this._mounted = !1);
                            },
                        },
                        {
                            key: "_animateRoomnameChanging",
                            value: function (t) {
                                var o,
                                    n = this,
                                    u = this.state.roomPlaceholder + t.substr(0, 1);
                                t.length > 1 &&
                                    (o = setTimeout(function () {
                                        n._animateRoomnameChanging(t.substring(1, t.length));
                                    }, 70)),
                                    this.setState({ animateTimeoutId: o, roomPlaceholder: u });
                            },
                        },
                        {
                            key: "_clearTimeouts",
                            value: function () {
                                clearTimeout(this.state.animateTimeoutId), clearTimeout(this.state.updateTimeoutId);
                            },
                        },
                        {
                            key: "_isJoinDisabled",
                            value: function () {
                                return this.state.joining || !(0, R.isRoomValid)(this.state.room);
                            },
                        },
                        {
                            key: "_onJoin",
                            value: function () {
                                var t = this,
                                    o = this.state.room || this.state.generatedRoomname;
                                if (((0, _.sendAnalytics)((0, _.createWelcomePageEvent)("clicked", "joinButton", { isGenerated: !this.state.room, room: o })), o)) {
                                    this.setState({ joining: !0 });
                                    var n = function () {
                                        return t._mounted && t.setState({ joining: !1 });
                                    };
                                    this.props.dispatch((0, v.appNavigate)(o)).then(n, n);
                                }
                            },
                        },
                        {
                            key: "_onRoomChange",
                            value: function (t) {
                                this.setState({ room: t });
                            },
                        },
                        {
                            key: "_updateRoomname",
                            value: function () {
                                var t = this,
                                    o = (0, h.generateRoomWithoutSeparator)(),
                                    n = setTimeout(this._updateRoomname, 1e4);
                                this._clearTimeouts(),
                                    this.setState({ generatedRoomname: o, roomPlaceholder: "", updateTimeoutId: n }, function () {
                                        return t._animateRoomnameChanging(o);
                                    });
                            },
                        },
                    ]),
                    f
                );
            })(f.Component);
        e.AbstractWelcomePage = b;
    },
    1603,
    [3, 4, 6, 9, 5, 10, 8, 880, 13, 385, 381, 1491, 383]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = l(r(d[2])),
            u = l(r(d[3])),
            o = l(r(d[4])),
            c = l(r(d[5])),
            f = l(r(d[6])),
            s = t(r(d[7])),
            p = r(d[8]),
            k = r(d[9]),
            h = r(d[10]),
            v = r(d[11]),
            T = r(d[12]),
            V = l(r(d[13])),
            y = (function (t) {
                function l() {
                    return (0, n.default)(this, l), (0, o.default)(this, (0, c.default)(l).apply(this, arguments));
                }
                return (
                    (0, f.default)(l, t),
                    (0, u.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                return s.default.createElement(
                                    p.View,
                                    { style: [V.default.localVideoTrackUnderlay, this.props.style] },
                                    s.default.createElement(k.VideoTrack, { videoTrack: this.props._localVideoTrack }),
                                    s.default.createElement(h.TintedView, null, this.props.children)
                                );
                            },
                        },
                    ]),
                    l
                );
            })(s.Component);
        var _ = (0, v.connect)(function (t) {
            return { _localVideoTrack: (0, T.getLocalVideoTrack)(t["features/base/tracks"]) };
        })(y);
        e.default = _;
    },
    1604,
    [2, 3, 4, 5, 6, 9, 10, 13, 17, 754, 394, 542, 803, 1584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e._mapStateToProps = w), (e.default = void 0);
        var l = n(r(d[2])),
            u = n(r(d[3])),
            o = n(r(d[4])),
            s = n(r(d[5])),
            c = n(r(d[6])),
            h = n(r(d[7])),
            f = t(r(d[8])),
            y = r(d[9]),
            _ = r(d[10]),
            S = r(d[11]),
            O = r(d[12]),
            C = r(d[13]),
            A = r(d[14]),
            v = t(r(d[15])),
            p = (function (t) {
                function n(t) {
                    var u;
                    return (
                        (0, l.default)(this, n),
                        ((u = (0, o.default)(this, (0, s.default)(n).call(this, t)))._onStartAudioOnlyChange = u._onStartAudioOnlyChange.bind((0, h.default)((0, h.default)(u)))),
                        (u._onStartAudioOnlyFalse = u._onStartAudioOnlyChangeFn(!1)),
                        (u._onStartAudioOnlyTrue = u._onStartAudioOnlyChangeFn(!0)),
                        u
                    );
                }
                return (
                    (0, c.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t.t,
                                    l = t._headerStyles,
                                    u = t._settings;
                                return f.default.createElement(
                                    y.View,
                                    { style: v.default.audioVideoSwitchContainer },
                                    f.default.createElement(
                                        y.TouchableWithoutFeedback,
                                        { onPress: this._onStartAudioOnlyFalse },
                                        f.default.createElement(y.View, { style: v.default.switchLabel }, f.default.createElement(O.Text, { style: l.headerText }, n("welcomepage.audioVideoSwitch.video")))
                                    ),
                                    f.default.createElement(y.Switch, {
                                        onValueChange: this._onStartAudioOnlyChange,
                                        style: v.default.audioVideoSwitch,
                                        thumbColor: v.SWITCH_THUMB_COLOR,
                                        trackColor: { true: v.SWITCH_UNDER_COLOR },
                                        value: u.startAudioOnly,
                                    }),
                                    f.default.createElement(
                                        y.TouchableWithoutFeedback,
                                        { onPress: this._onStartAudioOnlyTrue },
                                        f.default.createElement(y.View, { style: v.default.switchLabel }, f.default.createElement(O.Text, { style: l.headerText }, n("welcomepage.audioVideoSwitch.audio")))
                                    )
                                );
                            },
                        },
                        {
                            key: "_onStartAudioOnlyChange",
                            value: function (t) {
                                (0, this.props.dispatch)((0, A.updateSettings)({ startAudioOnly: t }));
                            },
                        },
                        {
                            key: "_onStartAudioOnlyChangeFn",
                            value: function (t) {
                                var n = this;
                                return function () {
                                    return n._onStartAudioOnlyChange(t);
                                };
                            },
                        },
                    ]),
                    n
                );
            })(f.Component);
        function w(t) {
            return { _headerStyles: _.ColorSchemeRegistry.get(t, "Header"), _settings: t["features/base/settings"] };
        }
        var T = (0, S.translate)((0, C.connect)(w)(p));
        e.default = T;
    },
    1605,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 925, 615, 394, 542, 807, 1584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            o = n(r(d[3])),
            u = n(r(d[4])),
            c = n(r(d[5])),
            s = n(r(d[6])),
            f = n(r(d[7])),
            p = t(r(d[8])),
            v = r(d[9]),
            P = r(d[10]),
            _ = r(d[11]),
            h = r(d[12]),
            b = r(d[13]),
            E = r(d[14]),
            L = r(d[15]),
            S = (function (t) {
                function n(t) {
                    var o;
                    return (0, l.default)(this, n), ((o = (0, u.default)(this, (0, c.default)(n).call(this, t)))._onSelectPage = o._onSelectPage.bind((0, f.default)((0, f.default)(o)))), o;
                }
                return (
                    (0, s.default)(n, t),
                    (0, o.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t._calendarEnabled,
                                    l = t._defaultPage,
                                    o = t.t;
                                if (void 0 === l) return null;
                                var u = [{ component: E.RecentList, icon: P.IconRestore, title: o("welcomepage.recentList") }];
                                return (
                                    n && u.push({ component: b.CalendarList, icon: P.IconEventNote, title: o("welcomepage.calendar") }),
                                    p.default.createElement(_.PagedList, { defaultPage: l, disabled: this.props.disabled, onSelectPage: this._onSelectPage, pages: u })
                                );
                            },
                        },
                        {
                            key: "_onSelectPage",
                            value: function (t) {
                                this.props.dispatch((0, L.setWelcomePageListsDefaultPage)(t));
                            },
                        },
                    ]),
                    n
                );
            })(p.Component);
        var w = (0, v.translate)(
            (0, h.connect)(function (t) {
                var n = t["features/welcome"].defaultPage;
                if (void 0 === n) {
                    var l = t["features/recent-list"];
                    n = l && l.length ? 0 : 1;
                }
                return { _calendarEnabled: (0, b.isCalendarEnabled)(t), _defaultPage: n };
            })(S)
        );
        e.default = w;
    },
    1606,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 615, 403, 394, 542, 1491, 1607, 1601]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        }),
            r(d[1]),
            r(d[2]);
    },
    1607,
    [1608, 1615, 1616]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "RecentList", {
                enumerable: !0,
                get: function () {
                    return n.default;
                },
            });
        var n = t(r(d[1]));
    },
    1608,
    [3, 1609]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e._mapStateToProps = S), (e.default = void 0);
        var n = t(r(d[1])),
            o = t(r(d[2])),
            l = t(r(d[3])),
            s = t(r(d[4])),
            u = t(r(d[5])),
            f = t(r(d[6])),
            c = t(r(d[7])),
            _ = r(d[8]),
            p = r(d[9]),
            h = r(d[10]),
            v = r(d[11]),
            D = r(d[12]),
            L = r(d[13]),
            b = r(d[14]),
            y = r(d[15]),
            I = (function (t) {
                function _(t) {
                    var o;
                    return (
                        (0, n.default)(this, _),
                        ((o = (0, l.default)(this, (0, s.default)(_).call(this, t)))._onDelete = o._onDelete.bind((0, f.default)((0, f.default)(o)))),
                        (o._onShowDialInInfo = o._onShowDialInInfo.bind((0, f.default)((0, f.default)(o)))),
                        o
                    );
                }
                return (
                    (0, u.default)(_, t),
                    (0, o.default)(_, [
                        {
                            key: "render",
                            value: function () {
                                if (!(0, y.isRecentListEnabled)()) return null;
                                var t = this.props,
                                    n = t.disabled,
                                    o = t.t,
                                    l = t._defaultServerURL,
                                    s = t._recentList,
                                    u = (0, y.toDisplayableList)(s, o, l),
                                    f = [
                                        { backgroundColor: D.ColorPalette.blue, onPress: this._onShowDialInInfo, text: o("welcomepage.info") },
                                        { backgroundColor: "red", onPress: this._onDelete, text: o("welcomepage.recentListDelete") },
                                    ];
                                return c.default.createElement(h.NavigateSectionList, { disabled: n, onPress: this._onPress, renderListEmptyComponent: this._getRenderListEmptyComponent(), sections: u, slideActions: f });
                            },
                        },
                        {
                            key: "_onDelete",
                            value: function (t) {
                                this.props.dispatch((0, b.deleteRecentListEntry)(t));
                            },
                        },
                        {
                            key: "_onShowDialInInfo",
                            value: function (t) {
                                this.props.dispatch((0, L.showDialInSummary)(t.url));
                            },
                        },
                    ]),
                    _
                );
            })(t(r(d[16])).default);
        function S(t) {
            return { _defaultServerURL: (0, _.getDefaultURL)(t), _recentList: t["features/recent-list"] };
        }
        var w = (0, p.translate)((0, v.connect)(S)(I));
        e.default = w;
    },
    1609,
    [3, 4, 5, 6, 9, 10, 8, 13, 381, 615, 394, 542, 406, 1179, 1610, 1612, 1613]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.deleteRecentListEntry = function (t) {
                return { type: n.DELETE_RECENT_LIST_ENTRY, entryId: t };
            }),
            (e._storeCurrentConference = function (t) {
                return { type: n._STORE_CURRENT_CONFERENCE, locationURL: t };
            }),
            (e._updateConferenceDuration = function (t) {
                return { type: n._UPDATE_CONFERENCE_DURATION, locationURL: t };
            });
        var n = r(d[0]);
    },
    1610,
    [1611]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e._UPDATE_CONFERENCE_DURATION = e._STORE_CURRENT_CONFERENCE = e.DELETE_RECENT_LIST_ENTRY = void 0);
        e.DELETE_RECENT_LIST_ENTRY = "DELETE_RECENT_LIST_ENTRY";
        e._STORE_CURRENT_CONFERENCE = "_STORE_CURRENT_CONFERENCE";
        e._UPDATE_CONFERENCE_DURATION = "_UPDATE_CONFERENCE_DURATION";
    },
    1611,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.toDisplayableList = function (t, o, s) {
                var u = n.NavigateSectionList.createSection,
                    c = u(o("dateUtils.today"), "today"),
                    f = u(o("dateUtils.yesterday"), "yesterday"),
                    D = u(o("dateUtils.earlier"), "earlier"),
                    y = new Date().toDateString(),
                    h = new Date();
                h.setDate(h.getDate() - 1);
                for (var v = h.toDateString(), p = t, M = Array.isArray(p), S = 0, p = M ? p : p["function" == typeof Symbol ? Symbol.iterator : "@@iterator"](); ;) {
                    var b;
                    if (M) {
                        if (S >= p.length) break;
                        b = p[S++];
                    } else {
                        if ((S = p.next()).done) break;
                        b = S.value;
                    }
                    var w = b,
                        U = new Date(w.date).toDateString(),
                        L = l(w, s, o);
                    U === y ? c.data.push(L) : U === v ? f.data.push(L) : D.data.push(L);
                }
                var k = [];
                c.data.length && (c.data.reverse(), k.push(c));
                f.data.length && (f.data.reverse(), k.push(f));
                D.data.length && (D.data.reverse(), k.push(D));
                return k;
            }),
            (e.isRecentListEnabled = function () {
                return !0;
            });
        var t = r(d[0]),
            n = r(d[1]),
            o = r(d[2]);
        function l(t, n, l) {
            var c = (0, o.parseURIString)(t.conference),
                f = c.protocol + "//" + c.host === n ? null : c.host;
            return { colorBase: f, id: { date: t.date, url: t.conference }, key: "key-" + t.conference + "-" + t.date, lines: [u(t.date, l), s(t.duration), f], title: (0, o.safeDecodeURIComponent)(c.room), url: t.conference };
        }
        function s(n) {
            return n ? (0, t.getLocalizedDurationFormatter)(n) : null;
        }
        function u(n, o) {
            var l = (0, t.getLocalizedDateFormatter)(n),
                s = new Date(n),
                u = s.getTime(),
                c = new Date(),
                f = new Date().setHours(0, 0, 0, 0),
                D = f - 864e5;
            return u >= f ? l.fromNow() : u >= D ? o("dateUtils.yesterday") : s.getFullYear() !== c.getFullYear() ? l.format("ddd, MMMM DD h:mm A, gggg") : l.format("ddd, MMMM DD h:mm A");
        }
    },
    1612,
    [615, 394, 849]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = t(r(d[1])),
            l = t(r(d[2])),
            s = t(r(d[3])),
            u = t(r(d[4])),
            c = t(r(d[5])),
            o = t(r(d[6])),
            f = t(r(d[7])),
            p = r(d[8]),
            v = r(d[9]),
            y = r(d[10]),
            _ = t(r(d[11])),
            h = (function (t) {
                function h(t) {
                    var l;
                    return (0, n.default)(this, h), ((l = (0, s.default)(this, (0, u.default)(h).call(this, t)))._onPress = l._onPress.bind((0, o.default)((0, o.default)(l)))), l;
                }
                return (
                    (0, c.default)(h, t),
                    (0, l.default)(h, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                (0, p.sendAnalytics)((0, p.createRecentSelectedEvent)());
                            },
                        },
                        {
                            key: "_getRenderListEmptyComponent",
                            value: function () {
                                var t = this.props.t;
                                return f.default.createElement(
                                    y.Container,
                                    { className: "meetings-list-empty", style: _.default.emptyListContainer },
                                    f.default.createElement(y.Text, { className: "description", style: _.default.emptyListText }, t("welcomepage.recentListEmpty"))
                                );
                            },
                        },
                        {
                            key: "_onPress",
                            value: function (t) {
                                var n = this.props.dispatch;
                                (0, p.sendAnalytics)((0, p.createRecentClickedEvent)("recent.meeting.tile")), n((0, v.appNavigate)(t));
                            },
                        },
                    ]),
                    h
                );
            })(y.AbstractPage);
        e.default = h;
    },
    1613,
    [3, 4, 5, 6, 9, 10, 8, 13, 385, 381, 394, 1614]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = (0, r(d[0]).createStyleSheet)({
            emptyListText: { backgroundColor: "transparent", color: "rgba(255, 255, 255, 0.6)", textAlign: "center" },
            emptyListContainer: { alignItems: "center", justifyContent: "center", padding: 20 },
        });
        e.default = t;
    },
    1614,
    [406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]),
            o = r(d[2]),
            c = r(d[3]),
            s = r(d[4]),
            u = r(d[5]),
            f = r(d[6]);
        function _(t, n, c) {
            var u = t.dispatch,
                f = t.getState,
                _ = n(c),
                l = [],
                E = f()["features/recent-list"],
                h = Array.isArray(E),
                p = 0;
            for (E = h ? E : E["function" == typeof Symbol ? Symbol.iterator : "@@iterator"](); ;) {
                var v;
                if (h) {
                    if (p >= E.length) break;
                    v = E[p++];
                } else {
                    if ((p = E.next()).done) break;
                    v = p.value;
                }
                var L = v.conference,
                    R = (0, s.parseURIString)(L),
                    y = void 0;
                R && (y = R.host) && l.push(y);
            }
            return l.length && u((0, o.addKnownDomains)(l)), _;
        }
        function l(t, o, c) {
            var s,
                f = t.dispatch,
                _ = t.getState;
            return (s = "undefined" == typeof APP ? c.conference[n.JITSI_CONFERENCE_URL_KEY] : _()["features/base/connection"].locationURL), f((0, u._updateConferenceDuration)(s)), o(c);
        }
        function E(t, n, c) {
            var s = t.dispatch,
                f = t.getState;
            if (c.room) {
                var _ = f()["features/base/connection"].locationURL;
                _ && (s((0, u._storeCurrentConference)(_)), s((0, o.addKnownDomains)(_.host)));
            }
            return n(c);
        }
        c.MiddlewareRegistry.register(function (o) {
            return function (c) {
                return function (s) {
                    if ((0, f.isRecentListEnabled)())
                        switch (s.type) {
                            case t.APP_WILL_MOUNT:
                                return _(o, c, s);
                            case n.CONFERENCE_WILL_LEAVE:
                                return l(o, c, s);
                            case n.SET_ROOM:
                                return E(o, c, s);
                        }
                    return c(s);
                };
            };
        });
    },
    1615,
    [819, 383, 815, 542, 849, 1610, 1612]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.MAX_LIST_SIZE = void 0);
        var n = t(r(d[1])),
            c = r(d[2]),
            u = r(d[3]),
            o = r(d[4]),
            f = r(d[5]),
            l = r(d[6]),
            s = r(d[7]),
            R = t(r(d[8])),
            _ = [],
            E = "recentURLs",
            h = 30;
        e.MAX_LIST_SIZE = h;
        function v(t, n) {
            return t.filter(function (t) {
                return t.conference !== n.url || t.date !== n.date;
            });
        }
        function L(t) {
            if (t && "object" == typeof t) {
                if (Array.isArray(t)) return t;
                var n = t.list;
                if (Array.isArray(n) && n.length) return n.slice();
            }
            return _;
        }
        function y() {
            try {
                var t = window.localStorage.getItem(E);
                if (t) return JSON.parse(t);
            } catch (t) {
                R.default.warn("Failed to parse legacy recent-room list!");
            }
            return [];
        }
        function N(t, n) {
            var c = n.locationURL.href,
                u = t.filter(function (t) {
                    return !U(t.conference, c);
                });
            return u.push({ conference: c, date: Date.now(), duration: 0 }), u.splice(0, u.length - h), u;
        }
        function T(t, c) {
            var u = c.locationURL;
            if (u && u.href && t.length) {
                var o = t.length - 1,
                    f = t[o];
                if (U(f.conference, u.href)) {
                    var l = (0, n.default)({}, f, { duration: Date.now() - f.date });
                    delete l.conferenceDuration;
                    var s = t.slice();
                    return (s[o] = l), s;
                }
            }
            return t;
        }
        function U(t, n) {
            return (0, u.getURLWithoutParamsNormalized)(new URL(t)) === (0, u.getURLWithoutParamsNormalized)(new URL(n));
        }
        f.PersistenceRegistry.register("features/recent-list"),
            o.ReducerRegistry.register("features/recent-list", function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y(),
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if ((0, s.isRecentListEnabled)())
                    switch (n.type) {
                        case c.APP_WILL_MOUNT:
                            return L(t);
                        case l.DELETE_RECENT_LIST_ENTRY:
                            return v(t, n.entryId);
                        case l._STORE_CURRENT_CONFERENCE:
                            return N(t, n);
                        case l._UPDATE_CONFERENCE_DURATION:
                            return T(t, n);
                        default:
                            return t;
                    }
                return t;
            });
    },
    1616,
    [3, 54, 819, 1066, 542, 834, 1611, 1612, 1617]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = (0, r(d[0]).getLogger)("features/recent-list");
        e.default = t;
    },
    1617,
    [584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = l(r(d[2])),
            s = l(r(d[3])),
            o = l(r(d[4])),
            u = l(r(d[5])),
            c = l(r(d[6])),
            f = l(r(d[7])),
            p = t(r(d[8])),
            _ = r(d[9]),
            v = r(d[10]),
            S = r(d[11]),
            y = r(d[12]),
            h = r(d[13]),
            b = r(d[14]),
            B = r(d[15]),
            E = r(d[16]),
            I = l(r(d[17])),
            w = t(r(d[18])),
            V = (function (t) {
                function l(t) {
                    var s;
                    return (
                        (0, n.default)(this, l),
                        ((s = (0, o.default)(this, (0, u.default)(l).call(this, t)))._onHideSideBar = s._onHideSideBar.bind((0, f.default)((0, f.default)(s)))),
                        (s._onOpenSettings = s._onOpenSettings.bind((0, f.default)((0, f.default)(s)))),
                        s
                    );
                }
                return (
                    (0, c.default)(l, t),
                    (0, s.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                return p.default.createElement(
                                    h.SlidingView,
                                    { onHide: this._onHideSideBar, position: "left", show: this.props._visible, style: w.default.sideBar },
                                    p.default.createElement(
                                        h.Header,
                                        { style: w.default.sideBarHeader },
                                        p.default.createElement(v.Avatar, { participantId: this.props._localParticipantId, size: w.SIDEBAR_AVATAR_SIZE }),
                                        p.default.createElement(_.Text, { style: w.default.displayName }, this.props._displayName)
                                    ),
                                    p.default.createElement(
                                        _.SafeAreaView,
                                        { style: w.default.sideBarBody },
                                        p.default.createElement(
                                            _.ScrollView,
                                            { style: w.default.itemContainer },
                                            p.default.createElement(I.default, { icon: S.IconSettings, label: "settings.title", onPress: this._onOpenSettings }),
                                            p.default.createElement(I.default, { icon: S.IconInfo, label: "welcomepage.terms", url: "https://jitsi.org/meet/terms" }),
                                            p.default.createElement(I.default, { icon: S.IconInfo, label: "welcomepage.privacy", url: "https://jitsi.org/meet/privacy" }),
                                            p.default.createElement(I.default, { icon: S.IconInfo, label: "welcomepage.sendFeedback", url: "mailto:support@jitsi.org" })
                                        )
                                    )
                                );
                            },
                        },
                        {
                            key: "_onHideSideBar",
                            value: function () {
                                this.props.dispatch((0, E.setSideBarVisible)(!1));
                            },
                        },
                        {
                            key: "_onOpenSettings",
                            value: function () {
                                var t = this.props.dispatch;
                                t((0, E.setSideBarVisible)(!1)), t((0, B.setSettingsViewVisible)(!0));
                            },
                        },
                    ]),
                    l
                );
            })(p.Component);
        var H = (0, b.connect)(function (t) {
            var l = (0, y.getLocalParticipant)(t),
                n = null == l ? void 0 : l.id;
            return { _displayName: l && (0, y.getParticipantDisplayName)(t, n), _localParticipantId: n, _visible: t["features/welcome"].sideBarVisible };
        })(V);
        e.default = H;
    },
    1618,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 399, 403, 540, 394, 542, 1586, 1601, 1619, 1584]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            n = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[2])),
            u = n(r(d[3])),
            o = n(r(d[4])),
            f = n(r(d[5])),
            s = n(r(d[6])),
            c = n(r(d[7])),
            p = t(r(d[8])),
            y = r(d[9]),
            v = r(d[10]),
            h = r(d[11]),
            _ = n(r(d[12])),
            I = (function (t) {
                function n(t) {
                    var u;
                    return (0, l.default)(this, n), ((u = (0, o.default)(this, (0, f.default)(n).call(this, t)))._onOpenURL = u._onOpenURL.bind((0, c.default)((0, c.default)(u)))), u;
                }
                return (
                    (0, s.default)(n, t),
                    (0, u.default)(n, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    n = t.label,
                                    l = t.onPress,
                                    u = t.t,
                                    o = "function" == typeof l ? l : this._onOpenURL;
                                return p.default.createElement(
                                    y.TouchableOpacity,
                                    { onPress: o, style: _.default.sideBarItem },
                                    p.default.createElement(
                                        y.View,
                                        { style: _.default.sideBarItemButtonContainer },
                                        p.default.createElement(h.Icon, { src: this.props.icon, style: _.default.sideBarItemIcon }),
                                        p.default.createElement(y.Text, { style: _.default.sideBarItemText }, u(n))
                                    )
                                );
                            },
                        },
                        {
                            key: "_onOpenURL",
                            value: function () {
                                var t = this.props.url;
                                "string" == typeof t && y.Linking.openURL(t);
                            },
                        },
                    ]),
                    n
                );
            })(p.Component),
            L = (0, v.translate)(I);
        e.default = L;
    },
    1619,
    [2, 3, 4, 5, 6, 9, 10, 8, 13, 17, 615, 403, 1584]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isWelcomePageAppEnabled = function (n) {
                if ("ReactNative" === navigator.product) return Boolean((0, t.getFeatureFlag)(n, t.WELCOME_PAGE_ENABLED));
                return !0;
            }),
            (e.isWelcomePageUserEnabled = function (t) {
                return "undefined" == typeof APP || (0, n.toState)(t)["features/base/config"].enableWelcomePage;
            });
        var t = r(d[0]),
            n = r(d[1]);
    },
    1620,
    [1152, 542]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            s = r(d[1]),
            n = r(d[2]);
        s.PersistenceRegistry.register("features/welcome", { defaultPage: !0 }),
            t.ReducerRegistry.register("features/welcome", function () {
                var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    u = arguments.length > 1 ? arguments[1] : void 0;
                switch (u.type) {
                    case n.SET_SIDEBAR_VISIBLE:
                        return (0, t.set)(s, "sideBarVisible", u.visible);
                    case n.SET_WELCOME_PAGE_LISTS_DEFAULT_PAGE:
                        return (0, t.set)(s, "defaultPage", u.pageIndex);
                }
                return s;
            });
    },
    1621,
    [542, 834, 1602]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = r(d[0]);
        Object.keys(t).forEach(function (n) {
            "default" !== n &&
                "__esModule" !== n &&
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[n];
                    },
                });
        }),
            r(d[1]),
            r(d[2]);
    },
    1622,
    [1623, 1631, 1632]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "IncomingCallApp", {
                enumerable: !0,
                get: function () {
                    return t.default;
                },
            }),
            Object.defineProperty(e, "IncomingCallPage", {
                enumerable: !0,
                get: function () {
                    return u.default;
                },
            });
        var t = n(r(d[1])),
            u = n(r(d[2]));
    },
    1623,
    [3, 1624, 1627]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = t(r(d[1])),
            n = t(r(d[2])),
            o = t(r(d[3])),
            u = t(r(d[4])),
            f = t(r(d[5])),
            c = t(r(d[6])),
            p = r(d[7]),
            s = r(d[8]),
            h = t(r(d[9])),
            v = (function (t) {
                function p() {
                    return (0, l.default)(this, p), (0, o.default)(this, (0, u.default)(p).apply(this, arguments));
                }
                return (
                    (0, c.default)(p, t),
                    (0, n.default)(p, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var t = this;
                                (0, f.default)((0, u.default)(p.prototype), "componentDidMount", this).call(this),
                                    this._init.then(function () {
                                        var l = t.state.store.dispatch,
                                            n = t.props,
                                            o = n.callerAvatarURL,
                                            c = n.callerName,
                                            v = n.hasVideo;
                                        l((0, s.incomingCallReceived)({ avatarUrl: o, hasVideo: v, name: c })), (0, f.default)((0, u.default)(p.prototype), "_navigate", t).call(t, { component: h.default });
                                    });
                            },
                        },
                    ]),
                    p
                );
            })(p.BaseApp);
        e.default = v;
    },
    1624,
    [3, 4, 5, 6, 9, 47, 10, 819, 1625, 1627]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.incomingCallAnswered = function () {
                return { type: n.INCOMING_CALL_ANSWERED };
            }),
            (e.incomingCallDeclined = function () {
                return { type: n.INCOMING_CALL_DECLINED };
            }),
            (e.incomingCallReceived = function (t) {
                return { type: n.INCOMING_CALL_RECEIVED, caller: t };
            });
        var n = r(d[0]);
    },
    1625,
    [1626]
);
__d(
    function (g, r, i, a, m, e, d) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.INCOMING_CALL_RECEIVED = e.INCOMING_CALL_DECLINED = e.INCOMING_CALL_ANSWERED = void 0);
        e.INCOMING_CALL_ANSWERED = "INCOMING_CALL_ANSWERED";
        e.INCOMING_CALL_DECLINED = "INCOMING_CALL_DECLINED";
        e.INCOMING_CALL_RECEIVED = "INCOMING_CALL_RECEIVED";
    },
    1626,
    []
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            l = r(d[1]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var n = l(r(d[2])),
            u = l(r(d[3])),
            f = l(r(d[4])),
            c = l(r(d[5])),
            o = l(r(d[6])),
            s = t(r(d[7])),
            v = r(d[8]),
            y = l(r(d[9])),
            E = r(d[10]),
            _ = r(d[11]),
            p = r(d[12]),
            A = l(r(d[13])),
            C = l(r(d[14])),
            b = t(r(d[15])),
            T = (function (t) {
                function l() {
                    return (0, n.default)(this, l), (0, f.default)(this, (0, c.default)(l).apply(this, arguments));
                }
                return (
                    (0, o.default)(l, t),
                    (0, u.default)(l, [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    l = t.t,
                                    n = t._callerName,
                                    u = l(t._hasVideo ? "incomingCall.videoCallTitle" : "incomingCall.audioCallTitle");
                                return s.default.createElement(
                                    v.View,
                                    { style: b.default.pageContainer },
                                    s.default.createElement(v.View, { style: b.default.backgroundAvatar }, s.default.createElement(v.Image, { source: { uri: this.props._callerAvatarURL }, style: b.default.backgroundAvatarImage })),
                                    s.default.createElement(y.default, { colors: b.BACKGROUND_OVERLAY_GRADIENT, style: b.default.backgroundOverlayGradient }),
                                    s.default.createElement(v.Text, { style: b.default.title }, u),
                                    s.default.createElement(v.Text, { numberOfLines: 6, style: b.default.callerName }, n),
                                    s.default.createElement(v.Text, { style: b.default.productLabel }, l("incomingCall.productLabel")),
                                    this._renderCallerAvatar(),
                                    this._renderButtons()
                                );
                            },
                        },
                        {
                            key: "_renderButtons",
                            value: function () {
                                var t = this.props.t;
                                return s.default.createElement(
                                    v.View,
                                    { style: b.default.buttonsContainer },
                                    s.default.createElement(
                                        v.View,
                                        { style: b.default.buttonWrapper },
                                        s.default.createElement(C.default, { styles: b.default.declineButtonStyles }),
                                        s.default.createElement(v.Text, { style: b.default.buttonText }, t("incomingCall.decline"))
                                    ),
                                    s.default.createElement(
                                        v.View,
                                        { style: b.default.buttonWrapper },
                                        s.default.createElement(A.default, { styles: b.default.answerButtonStyles }),
                                        s.default.createElement(v.Text, { style: b.default.buttonText }, t("incomingCall.answer"))
                                    )
                                );
                            },
                        },
                        {
                            key: "_renderCallerAvatar",
                            value: function () {
                                return s.default.createElement(
                                    v.View,
                                    { style: b.default.avatarContainer },
                                    s.default.createElement(y.default, { colors: b.AVATAR_BORDER_GRADIENT, style: b.default.avatarBorder }),
                                    s.default.createElement(v.View, { style: b.default.avatar }, s.default.createElement(E.Avatar, { size: b.CALLER_AVATAR_SIZE, url: this.props._callerAvatarURL }))
                                );
                            },
                        },
                    ]),
                    l
                );
            })(s.Component);
        var V = (0, _.translate)(
            (0, p.connect)(function (t) {
                var l = (t["features/mobile/incoming-call"] || {}).caller;
                return { _callerAvatarURL: l.avatarUrl, _callerName: l.name, _hasVideo: l.hasVideo };
            })(T)
        );
        e.default = V;
    },
    1627,
    [2, 3, 4, 5, 6, 9, 10, 13, 17, 1489, 399, 615, 542, 1628, 1629, 1630]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var t = n(r(d[1])),
            l = n(r(d[2])),
            c = n(r(d[3])),
            u = n(r(d[4])),
            o = n(r(d[5])),
            s = r(d[6]),
            f = r(d[7]),
            h = r(d[8]),
            p = r(d[9]),
            v = r(d[10]),
            b = (function (n) {
                function s() {
                    var n, l;
                    (0, t.default)(this, s);
                    for (var o = arguments.length, h = new Array(o), p = 0; p < o; p++) h[p] = arguments[p];
                    return ((l = (0, c.default)(this, (n = (0, u.default)(s)).call.apply(n, [this].concat(h)))).accessibilityLabel = "incomingCall.answer"), (l.icon = f.IconHangup), (l.label = "incomingCall.answer"), l;
                }
                return (
                    (0, o.default)(s, n),
                    (0, l.default)(s, [
                        {
                            key: "_handleClick",
                            value: function () {
                                this.props.dispatch((0, v.incomingCallAnswered)());
                            },
                        },
                    ]),
                    s
                );
            })(p.AbstractButton),
            y = (0, s.translate)((0, h.connect)()(b));
        e.default = y;
    },
    1628,
    [3, 4, 5, 6, 9, 10, 615, 403, 542, 1053, 1625]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var l = n(r(d[1])),
            t = n(r(d[2])),
            c = n(r(d[3])),
            u = n(r(d[4])),
            o = n(r(d[5])),
            f = r(d[6]),
            s = r(d[7]),
            h = r(d[8]),
            p = r(d[9]),
            v = r(d[10]),
            b = (function (n) {
                function f() {
                    var n, t;
                    (0, l.default)(this, f);
                    for (var o = arguments.length, h = new Array(o), p = 0; p < o; p++) h[p] = arguments[p];
                    return ((t = (0, c.default)(this, (n = (0, u.default)(f)).call.apply(n, [this].concat(h)))).accessibilityLabel = "incomingCall.decline"), (t.icon = s.IconHangup), (t.label = "incomingCall.decline"), t;
                }
                return (
                    (0, o.default)(f, n),
                    (0, t.default)(f, [
                        {
                            key: "_handleClick",
                            value: function () {
                                this.props.dispatch((0, v.incomingCallDeclined)());
                            },
                        },
                    ]),
                    f
                );
            })(p.AbstractButton),
            y = (0, f.translate)((0, h.connect)()(b));
        e.default = y;
    },
    1629,
    [3, 4, 5, 6, 9, 10, 615, 403, 542, 1053, 1625]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.CALLER_AVATAR_SIZE = e.BACKGROUND_OVERLAY_GRADIENT = e.AVATAR_BORDER_GRADIENT = void 0);
        var o = t(r(d[1])),
            l = r(d[2]);
        e.AVATAR_BORDER_GRADIENT = ["#4C9AFF", "#0052CC"];
        e.BACKGROUND_OVERLAY_GRADIENT = ["#0052CC", "#4C9AFF"];
        e.CALLER_AVATAR_SIZE = 128;
        var n = { alignSelf: "center", color: l.ColorPalette.white, fontSize: 32 },
            u = { alignSelf: "center", borderRadius: 28, borderWidth: 0, flex: 0, flexDirection: "row", height: 56, justifyContent: "center", width: 56 },
            f = { color: l.ColorPalette.white, fontSize: 16 },
            A = (0, l.createStyleSheet)({
                answerButtonStyles: { iconStyle: (0, o.default)({}, n, { transform: [{ rotateZ: "130deg" }] }), style: (0, o.default)({}, u, { backgroundColor: l.ColorPalette.green }), underlayColor: l.ColorPalette.buttonUnderlay },
                avatar: { marginLeft: 3, marginTop: 3, position: "absolute" },
                avatarBorder: { borderRadius: 67, height: 134, position: "absolute", width: 134 },
                avatarContainer: { height: 134, marginTop: 32, width: 134 },
                backgroundAvatar: { bottom: 0, left: 0, position: "absolute", right: 0, top: 0 },
                backgroundAvatarImage: { flex: 1 },
                backgroundOverlayGradient: { bottom: 0, left: 0, opacity: 0.9, position: "absolute", right: 0, top: 0 },
                buttonsContainer: { alignItems: "flex-end", flex: 1, flexDirection: "row" },
                buttonText: (0, o.default)({}, f, { alignSelf: "center", marginTop: 12 }),
                buttonWrapper: { flex: 1 },
                callerName: (0, o.default)({}, f, { fontSize: 36, marginBottom: 8, marginLeft: 48, marginRight: 48, marginTop: 8, textAlign: "center" }),
                declineButtonStyles: { iconStyle: n, style: (0, o.default)({}, u, { backgroundColor: l.ColorPalette.red }), underlayColor: l.ColorPalette.buttonUnderlay },
                pageContainer: { alignItems: "center", flex: 1, paddingBottom: 48, paddingTop: 48 },
                productLabel: (0, o.default)({}, f),
                title: (0, o.default)({}, f),
            });
        e.default = A;
    },
    1630,
    [3, 54, 406]
);
__d(
    function (g, r, i, a, m, e, d) {
        var n = r(d[0]),
            t = r(d[1]),
            c = r(d[2]);
        n.MiddlewareRegistry.register(function (n) {
            return function (u) {
                return function (s) {
                    var N = u(s);
                    switch (s.type) {
                        case c.INCOMING_CALL_ANSWERED:
                        case c.INCOMING_CALL_DECLINED:
                            (0, t.sendEvent)(n, s.type, {});
                    }
                    return N;
                };
            };
        });
    },
    1631,
    [542, 1254, 1626]
);
__d(
    function (g, r, i, a, m, e, d) {
        var t = r(d[0]),
            c = r(d[1]);
        t.ReducerRegistry.register("features/mobile/incoming-call", function () {
            var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
                case c.INCOMING_CALL_ANSWERED:
                case c.INCOMING_CALL_DECLINED:
                    return (0, t.set)(l, "caller", void 0);
                case c.INCOMING_CALL_RECEIVED:
                    return (0, t.set)(l, "caller", n.caller);
            }
            return l;
        });
    },
    1632,
    [542, 1626]
);
__r(93);
__r(0);
