
var COURSE_ENUM = {
    LOCK_MODE: {
        UNLOCKED: 0,
        LOCKED_NORMAL: 1,
        LOCKED_TIME: 2
    },
    EVENTS: {
        ON_READY_SCREEN: "ON_READY_SCREEN",
        ON_LOAD_SCREEN: "ON_LOAD_SCREEN",
        ON_LOAD_SCREEN_DATA: "ON_LOAD_SCREEN_DATA",
        ON_LOAD_COURSE_DATA: "ON_LOAD_COURSE_DATA",
        ON_LOAD_STYLE_DATA: "ON_LOAD_STYLE_DATA",
        ON_LOAD_FRAME_DATA: "ON_LOAD_FRAME_DATA",
        ON_LOAD_LOCALIZATION_DATA: "ON_LOAD_LOCALIZATION_DATA",
        ON_CHANGE_CONNECTION_DATA_LOCATION: "ON_CHANGE_CONNECTION_DATA_LOCATION",
        ON_CHANGE_CONNECTION_DATA_STATUS: "ON_CHANGE_CONNECTION_DATA_STATUS",
        ON_CHANGE_CONNECTION_DATA_SCORE: "ON_CHANGE_CONNECTION_DATA_SCORE",
        ON_CHANGE_CONNECTION_DATA_COOKIES: "ON_CHANGE_CONNECTION_DATA_COOKIES",
        ON_CHANGE_COOKIES: "ON_CHANGE_COOKIES",
        ON_FINISHED_EVALUATION: "ON_FINISHED_EVALUATION"
    },
    LOG_MESSAGE_TYPE: {
        NORMAL: 0,
        WARNING: 1,
        ERROR: 2
    },
    ICONS: {
        RADIOBOX: {
            CHECKED: "icon-exercise icon-exercise-radio-checked",
            UNCHECKED: "icon-exercise icon-exercise-radio-unchecked"
        },
        CHECKBOX: {
            CHECKED: "icon-exercise icon-exercise-checkbox-checked",
            UNCHECKED: "icon-exercise icon-exercise-checkbox-unchecked"
        },
        TRY_AGAIN: "icon-standard icon-standard-reload",
        REVIEW: "icon-standard icon-standard-review",
        CHECK: "icon-standard icon-standard-check",
        NEXT: "icon-standard icon-standard-forward",
        BACK: "icon-standard icon-standard-rewind",
        X: "icon-standard icon-standard-x",
        EXERCISE: "icon-standard icon-standard-question",
        IMPORTANT: "icon-standard icon-standard-important",
        ARROW_LEFT: "icon-standard icon-standard-arrow-left",
        ARROW_RIGHT: "icon-standard icon-standard-arrow-right",
        LOADING: "icon-standard-loading",
        FRAME_INDEX: "icon-frame icon-frame-index",
        FRAME_GLOSSARY: "icon-frame icon-frame-glossary",
        FRAME_INSTRUCTIONS: "icon-frame icon-frame-instructions",
        FRAME_FAQ: "icon-frame icon-frame-faq",
        FRAME_EXIT: "icon-frame icon-frame-exit",
        FRAME_LOCK: "icon-frame icon-frame-lock",
        FRAME_UNLOCK: "icon-frame icon-frame-unlock",
        FRAME_UNLOCK_ANIM_DESKTOP: "desktop-unlock",
        FRAME_UNLOCK_ANIM_MOBILE: "mobile-unlock",
        FRAME_ATTACH: "icon-frame icon-frame-attach",
        FRAME_ATTACH_DEFAULT: "icon-frame icon-frame-attach-default",
        FRAME_ATTACH_PDF: "icon-frame icon-frame-attach-pdf",
        FRAME_ATTACH_DOC: "icon-frame icon-frame-attach-doc",
        FRAME_ATTACH_XLS: "icon-frame icon-frame-attach-xls",
        FRAME_ATTACH_PPT: "icon-frame icon-frame-attach-ppt",
        FRAME_ATTACH_CSV: "icon-frame icon-frame-attach-csv",
        FRAME_ATTACH_MPG: "icon-frame icon-frame-attach-mpg",
        FRAME_ATTACH_FLV: "icon-frame icon-frame-attach-flv",
        FRAME_ATTACH_WMA: "icon-frame icon-frame-attach-wma",
        FRAME_ATTACH_ZIP: "icon-frame icon-frame-attach-zip",
        FRAME_ATTACH_RAR: "icon-frame icon-frame-attach-rar",
        FRAME_ATTACH_EXE: "icon-frame icon-frame-attach-exe",
        FRAME_ATTACH_DMG: "icon-frame icon-frame-attach-dmg",
        FRAME_ATTACH_MOV: "icon-frame icon-frame-attach-mov",
        FRAME_ATTACH_AVI: "icon-frame icon-frame-attach-avi",
        FRAME_ATTACH_PSD: "icon-frame icon-frame-attach-psd",
        FRAME_ATTACH_AI: "icon-frame icon-frame-attach-ai",
        FRAME_ATTACH_DLL: "icon-frame icon-frame-attach-dll",
        FRAME_ATTACH_PNG: "icon-frame icon-frame-attach-png",
        FRAME_ATTACH_GIF: "icon-frame icon-frame-attach-gif",
        FRAME_ATTACH_JPG: "icon-frame icon-frame-attach-jpg",
        TIMER: "icon-standard icon-standard-timer",
        ToArrayRadioboxCheckbox: function() {
            return ([this.RADIOBOX.CHECKED, this.RADIOBOX.UNCHECKED, this.CHECKBOX.CHECKED, this.CHECKBOX.UNCHECKED])
        }
    },
    CLASSES: {
        ELEMENT_STATE: {
            ENABLED: "enabled",
            DISABLED: "disabled",
            ToArray: function() {
                return ([this.ENABLED, this.DISABLED])
            }
        }
    },
    ICON_STATE: {
        NORMAL: "NORMAL",
        DISABLED: "DISABLED"
    },
    ELEMENT_TYPE: {
        TEXTO: "TEXTO",
        BOXTEXTO: "BOXTEXTO",
        MEDIA: "MEDIA",
        BOXIMPORTANTE: "BOXIMPORTANTE",
        BOXMOUSE: "BOXMOUSE",
        SOM: "SOM",
        ALTERNATIVA: "ALTERNATIVA",
        LAYOUT: "LAYOUT",
        TERMO: "TERMO",
        DEFINICAO: "DEFINICAO",
        PERGUNTA: "PERGUNTA",
        RESPOSTA: "RESPOSTA",
        FEEDBACKCORRETO: "FEEDBACKCORRETO",
        FEEDBACKERRADO: "FEEDBACKERRADO",
        PACOTE: "PACOTE",
        NOME: "NOME",
        ENDERECO: "ENDERECO",
        PERSONAGEM: "PERSONAGEM"
    },
    BACKGROUND_TYPE: {
        NONE: "0",
        FLASH: "1"
    },
    FILE_STATUS: {
        NOT_LOADED: "NOT_LOADED",
        LOADED_OK: "LOADED_OK",
        FAILED_TO_LOAD: "FAILED_TO_LOAD"
    },
    CONNECTION_MODE: {
        BROWSER_COOKIES: "BROWSERCOOKIES",
        OFFLINE: "OFFLINE",
        SCORM12: "SCORM"
    },
    LANGUAGE: {
        PORTUGUESE: "pt-BR",
        ENGLISH: "en-US",
        SPANISH: "es-ES",
        ARABIC: "ar-SA"
    },
    COURSE_STATUS: {
        INCOMPLETE: "incomplete",
        COMPLETED: "completed",
        PASSED: "passed",
        FAILED: "failed",
        NOT_ATTEMPTED: "not_attempted"
    },
    COURSE_MAP_NODES: {
        LEVEL: "nivel",
        EVALUATION: "avaliacao",
        QUESTION: "questao",
        QUESTION_BANK: "bancodequestao"
    },
    HALIGN: {
        LEFT: "LEFT",
        CENTER: "CENTER",
        RIGHT: "RIGHT",
        EXISTS: function(a) {
            a = String(a).toUpperCase();
            return ((a == this.LEFT) || (a == this.CENTER) || (a == this.RIGHT))
        }
    },
    VALIGN: {
        TOP: "TOP",
        MIDDLE: "MIDDLE",
        BOTTOM: "BOTTOM",
        EXISTS: function(a) {
            a = String(a).toUpperCase();
            return ((a == this.TOP) || (a == this.MIDDLE) || (a == this.BOTTOM))
        }
    },
    SPECIAL_SCREEN: {
        FAQ: {
            ID_COURSE: "faq",
            ID_INTERNAL: -1,
            ID_FILE: "faq.xml"
        },
        GLOSSARY: {
            ID_COURSE: "glossario",
            ID_INTERNAL: -2,
            ID_FILE: "glossario.xml"
        },
        INDEX: {
            ID_COURSE: "sumario",
            ID_INTERNAL: -3,
            ID_FILE: "sumario.xml"
        },
        ATTACH: {
            ID_COURSE: "anexos",
            ID_INTERNAL: -4,
            ID_FILE: "anexos.xml"
        },
        EXISTS: function(a) {
            a = String(a).toLowerCase();
            return ((a == this.FAQ.ID_COURSE) || (a == this.GLOSSARY.ID_COURSE) || (a == this.INDEX.ID_COURSE) || (a == this.ATTACH.ID_COURSE))
        }
    },
    EVALUATION_MODE: {
        NOT_ATTEMPTED: "NOT_ATTEMPTED",
        RUNNING: "RUNNING",
        COMPLETED: "COMPLETED"
    },
    QUESTION_FEEDBACK_MODE: {
        SHOW_NOTHING: "0",
        SHOW_FEEDBACK_ONLY: "1",
        SHOW_FEEDBACK_AND_CORRECT_ANSWER: "2"
    },
    EVALUATION_QUESTION_CONFIG: {
        FIXED_QUESTION: "fixa",
        RANDOM_QUESTION: "sorteio",
        EXISTS: function(a) {
            a = String(a).toLowerCase();
            return ((a == this.FIXED_QUESTION) || (a == this.RANDOM_QUESTION))
        }
    },
    QUESTION_TYPE: {
        TRUE_FALSE: "true-false",
        CHOICE: "choice",
        FILL_IN: "fill-in",
        MATCHING: "matching",
        PERFORMANCE: "performance",
        SEQUENCING: "sequencing",
        LIKERT: "likert",
        NUMERIC: "numeric"
    },
    ALERT_BOX_BUTTONS: {
        OK: "OK",
        YES: "YES",
        NO: "NO",
        YESNO: "YESNO"
    },
    ALERT_BOX_ICON: {
        INFO: "INFO",
        WARNING: "WARNING",
        QUESTION: "QUESTION",
        ERROR: "ERROR"
    }
};
var EventBroadcaster = {
    listeners: [],
    on: function(d, b, a, c) {
        if (arguments.length < 3) {
            a = null
        }
        if (arguments.length < 4) {
            c = null
        }
        var e = false;
        for (var f = 0; f < this.listeners.length; f++) {
            if ((this.listeners[f].event === d) && (this.listeners[f].callback === b)) {
                e = true
            }
        }
        if (!e) {
            this.listeners.push({
                event: d,
                callback: b,
                args: a,
                context: c
            })
        }
    },
    un: function(b, a) {
        for (var c = 0; c < this.listeners.length; c++) {
            if ((this.listeners[c].event == b) && (this.listeners[c].callback == a)) {
                this.listeners.splice(c, 1)
            }
        }
    },
    fire: function(b, a) {
        for (var c = 0; c < this.listeners.length; c++) {
            if (this.listeners[c].event == b) {
                if (this.listeners[c].context != null) {
                    this.listeners[c].callback.call(this.listeners[c].context, this, a, this.listeners[c].args)
                } else {
                    this.listeners[c].callback(this, a, this.listeners[c].args)
                }
            }
        }
    },
    resetEvents: function() {
        this.listeners = []
    },
    Initialize: function(a) {
        a.listeners = [];
        a.on = this.on;
        a.un = this.un;
        a.fire = this.fire;
        a.resetEvents = this.resetEvents
    }
};
if (typeof document.createStyleSheet === "undefined") {
    document.createStyleSheet = (function() {
        function b(d) {
            if (typeof d !== "undefined") {
                var c = document.createElement("link");
                c.type = "text/css";
                c.rel = "stylesheet";
                c.href = d
            } else {
                var c = document.createElement("style");
                c.type = "text/css"
            }
            document.getElementsByTagName("head")[0].appendChild(c);
            var e = document.styleSheets[document.styleSheets.length - 1];
            if (typeof e.addRule === "undefined") {
                e.addRule = a
            }
            if (typeof e.removeRule === "undefined") {
                e.removeRule = e.deleteRule
            }
            return (e)
        }

        function a(e, c, d) {
            if (typeof d === "undefined") {
                d = this.cssRules.length
            }
            this.insertRule(e + " {" + c + "}", d)
        }
        return (b)
    })()
}
var CourseAuxFunctions = {
    GetTimeStamp: function() {
        var f = new Date();
        var a = (f.getDate() < 10) ? "0" + f.getDate() : f.getDate();
        var c = ((f.getMonth() + 1) < 10) ? "0" + (f.getMonth() + 1) : (f.getMonth() + 1);
        var i = f.getFullYear();
        var b = (f.getHours() < 10) ? "0" + f.getHours() : f.getHours();
        var e = (f.getMinutes() < 10) ? "0" + f.getMinutes() : f.getMinutes();
        var g = (f.getSeconds() < 10) ? "0" + f.getSeconds() : f.getSeconds();
        return (a + "/" + c + "/" + i + " " + b + ":" + e + ":" + g)
    },
    FromBase2To32: function(f) {
        if (f == "") {
            return ("")
        }
        var a = [];
        var h = f.length;
        var e = Math.ceil(h / 5);
        for (var b = 0; b < e; b++) {
            var g = "";
            for (var c = 0; c < 5; c++) {
                if (f.charAt((5 * b) + c) == undefined) {
                    break
                }
                g += f.charAt((5 * b) + c)
            }
            var d = parseInt(g, 2);
            a[b] = d.toString(32)
        }
        return (a.join("") + "z" + h)
    },
    FromBase32To2: function(h) {
        if (h == "" || h.indexOf("z") == -1) {
            return
        }
        var j = "";
        var a = h.substring(0, h.indexOf("z"));
        var e = a.length;
        var f = parseInt(h.substring(h.indexOf("z") + 1, h.length));
        var g = f;
        for (var c = 0; c < e; c++) {
            var d = parseInt(h.charAt(c), 32);
            var k = d.toString(2);
            var b = Math.min(5, g);
            while (k.length < b) {
                k = "0" + k
            }
            j += k;
            if (g >= 5) {
                g -= 5
            }
        }
        return (j)
    },
    clickSeed: 0,
    clickContext: null,
    clickCallback: null,
    clickArgs: null,
    AddClick: function(d, e, g, f, b) {
        var c = $("#" + e, d);
        if (c.parent('button[id*="sysclick"]').length > 0) {
            c.unwrap()
        }
        if (c.length > 0) {
            this.clickContext = g;
            this.clickCallback = f;
            this.clickArgs = b;
            var h = "sysclick-" + this.clickSeed++;
            var a = '<button id="' + h + '" type="button" class="btn-ql"></a>';
            c.wrap(a);
            var i = $("#" + h, d);
            i.click(function() {
                f.call(g, b)
            })
        }
    },
    Click: function() {
        this.clickCallback.call(this.clickContext, this.clickArgs)
    },
    RemoveClick: function(b, c) {
        var a = $("#" + c, b);
        if (a.parent('button[id*="sysclick"]').length > 0) {
            a.unwrap()
        }
    },
    GetQuerystringVar: function(c) {
        var a = unescape(window.location.search) + "&";
        var b = new RegExp(".*?[&\\?]" + c + "=(.*?)&.*");
        val = a.replace(b, "$1");
        return val == a ? "" : val
    },
    CreatePopup: function(a) {
        $.fancybox.open(a)
    },
    DismissPopup: function() {
        $.fancybox.close()
    },
    modalContext: null,
    modalCallback: null,
    modalArgs: null,
    ModalClick: function(a) {
        if (this.modalCallback != null) {
            if (this.modalArgs != null) {
                this.modalArgs.buttonId = a;
                this.modalArgs.userInput = ""
            } else {
                this.modalArgs = {
                    buttonId: a,
                    userInput: ""
                }
            }
            this.modalCallback.call(this.modalContext, this.modalArgs)
        }
        $("#CourseModal").modal("hide")
    },
    ModalOnClose: function() {
        $("#CourseModal").remove()
    },
    ShowNotify: function(k, g, h, i, d, b, c) {
        this.modalContext = (arguments.length >= 4) ? d : null;
        this.modalCallback = (arguments.length >= 5) ? b : null;
        this.modalArgs = (arguments.length >= 6) ? c : null;
        var a = "";
        switch (h) {
            case "OK":
                a = '<button type="button" class="btn btn-default" onclick="CourseAuxFunctions.ModalClick(\'ok\');">OK</button>';
                break;
            case "YES":
                a = '<button type="button" class="btn btn-default" onclick="CourseAuxFunctions.ModalClick(\'yes\');">' + course.localization.GetMessage("073") + "</button>";
                break;
            case "NO":
                a = '<button type="button" class="btn btn-default" onclick="CourseAuxFunctions.ModalClick(\'no\');">' + course.localization.GetMessage("074") + "</button>";
                break;
            case "YESNO":
                a = '<button type="button" class="btn btn-default" onclick="CourseAuxFunctions.ModalClick(\'yes\');">' + course.localization.GetMessage("073") + '</button><button type="button" class="btn btn-default" onclick="CourseAuxFunctions.ModalClick(\'no\');">' + course.localization.GetMessage("074") + "</button>";
                break
        }
        var e = "";
        var f = {};
        f[COURSE_ENUM.ALERT_BOX_ICON.WARNING] = "glyphicon-warning-sign";
        f[COURSE_ENUM.ALERT_BOX_ICON.INFO] = "glyphicon-info-sign";
        f[COURSE_ENUM.ALERT_BOX_ICON.QUESTION] = "glyphicon-question-sign";
        f[COURSE_ENUM.ALERT_BOX_ICON.ERROR] = "glyphicon-minus-sign";
        var e = f[i];
        var j = '<div id="CourseModal" class="modal fade" role="dialog" hidden="true" aria-labelledby="modal-title"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 id="modal-title" class="modal-title"><span class="glyphicon ' + e + '" style="font-size:1.5em;"></span>&nbsp;' + k + '</h4></div><div class="modal-body"><p class="texto">' + g + '</p></div><div class="modal-footer">' + a;
        "</div></div></div></div>";
        $("body").append(j);
        $("#CourseModal").modal({
            backdrop: "static"
        });
        $("#CourseModal").on("hidden.bs.modal", this.ModalOnClose)
    },
    OpenModal: function(b, a, c) {
        var d = '<div id="CModal" class="modal fade" role="dialog" hidden="true" aria-labelledby="modal-title"><div class="modal-dialog ' + c + '"><div class="modal-content">' + b + "</div></div></div>";
        $("body").append(d);
        $("#CModal").modal({
            backdrop: a
        });
        $("#CModal").on("hidden.bs.modal", function() {
            $("#CModal").remove()
        })
    },
    GenerateRandomNumber: function(b, a) {
        var c = Math.floor(Math.random() * (a - b + 1)) + b;
        return (c)
    },
    SecondsToHours: function(d) {
        var a = Math.floor(d / 3600);
        var b = Math.floor(d / 60) - (a * 60);
        var c = Math.floor(d % 60);
        if (b == 60) {
            a++;
            b = 0
        }
        return ((((a < 10) ? "0" : "") + a.toString()) + ":" + (((b < 10) ? "0" : "") + b.toString()) + ":" + (((c < 10) ? "0" : "") + c.toString()))
    },
    SecondsToMinutes: function(d) {
        var a = Math.floor(d / 3600);
        var b = Math.floor(d / 60) - (a * 60);
        var c = Math.floor(d % 60);
        if (b == 60) {
            a++;
            b = 0
        }
        return ((((b < 10) ? "0" : "") + b.toString()) + ":" + (((c < 10) ? "0" : "") + c.toString()))
    },
    GetFileExtension: function(d) {
        var b = d.split(".");
        var e = b.length - 1;
        var c = b[e].toLowerCase();
        return c
    },
    Raffle: {
        GetSingleNumber: function(b, a) {
            var c = Math.floor(Math.random() * (a - b + 1)) + b;
            return c
        },
        GetSeveralUniqueNumbers: function(b, a, d) {
            if (d > (a - b + 1)) {
                throw ("Required total exceeds max-min range.")
            }
            var c = [];
            while (c.length < d) {
                var e = this.GetSingleNumber(b, a);
                if (c.indexOf(e) == -1) {
                    c.push(e)
                }
            }
            return c
        },
        RaffleArrayObjects: function(a, d) {
            if (d > a.length) {
                throw ("Required total " + d + " exceeds array length of " + a.length)
            }
            var c = [];
            var b = this.GetSeveralUniqueNumbers(0, a.length - 1, a.length);
            while (c.length < d) {
                c.push(a[b.pop()])
            }
            return (c)
        }
    },
    LoadBackgroundSound: function(b) {
        var a = $("#course-sound")[0];
        if (b.file == undefined) {
            $(a).removeAttr("src");
            $(a).removeAttr("loop");
            return
        }
        if (b.file != $(a).attr("src")) {
            $(a).attr("src", b.file);
            if (b.repeat == "1") {
                $(a).attr("loop", "loop")
            } else {
                $(a).removeAttr("loop")
            }
            a.volume = (b.volume / 100);
            a.play()
        }
    },
    InitializeSceneComponents: function(a) {
        $("[data-toggle=popover]", a.domNode).popover()
    },
    DestroyPopover: function() {
        $("[data-toggle=popover]").popover("destroy")
    },
    HidePopover: function() {
        $("[data-toggle=popover]").popover("hide")
    }
};

function Timer() {
    var b = new Date().getTime();
    this.GetElapsedTimeInSeconds = function() {
        var c = new Date().getTime();
        var d = Math.floor((c - b) / 1000);
        return (d)
    };
    this.GetElapsedTime = function() {
        var c = new Date().getTime();
        var d = (c - b) / 1000;
        return (a.call(this, d))
    };
    var a = function(c) {
        return CourseAuxFunctions.SecondsToHours(c)
    }
}

function ConnectionData() {
    EventBroadcaster.Initialize(this);
    this.connStatus = false;
    this.connErrorDescription = "";
    this.studentId = "";
    this.studentName = "";
    this.lessonLocation = "";
    this.lessonStatus = "";
    this.score = -1;
    this.sessionTime = "00:00:00";
    this.totalTime = "00:00:00";
    this.cookiesData = "";
    this.bookmark = (new APIContntScorm().getParameterByName("pagina") - 1) == -1 ? 0 : (new APIContntScorm().getParameterByName("pagina") - 1);//numero da pagina que o conteudo iria iniciar - 1
    this.visitedScenes = "";
    this.lockedScenes = "";
    this.UpdateStudentId = function(a) {
        this.studentId = a;
        CourseLog.AppendLine('ConnectionData.UpdateStudentId "' + this.studentId + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
    };
    this.UpdateStudentName = function(a) {
        this.studentName = a;
        CourseLog.AppendLine('ConnectionData.UpdateStudentName "' + this.studentName + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
    };
    this.UpdateLessonLocation = function(b) {
        this.lessonLocation = b;
        CourseLog.AppendLine('ConnectionData.UpdateLessonLocation.lessonLocation "' + this.lessonLocation + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        if (this.lessonLocation != "") {
            var a = this.lessonLocation.split(";");
            this.bookmark = parseInt(a[0]);
            this.visitedScenes = a[1];
            this.lockedScenes = a[2];
            CourseLog.AppendLine('ConnectionData.UpdateLessonLocation.bookmark "' + this.bookmark + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            CourseLog.AppendLine('ConnectionData.UpdateLessonLocation.visitedScenes "' + this.visitedScenes + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            CourseLog.AppendLine('ConnectionData.UpdateLessonLocation.lockedScenes "' + this.lockedScenes + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        }
    };
    this.UpdateLocation = function(a, c, b) {
        if ((this.bookmark != a) || (this.visitedScenes != c) || (this.lockedScenes != b)) {
            this.bookmark = a;
            this.visitedScenes = c;
            this.lockedScenes = b;
            this.lessonLocation = this.bookmark + ";" + this.visitedScenes + ";" + this.lockedScenes;
            this.fire(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_LOCATION, this.lessonLocation);
            CourseLog.AppendLine('ConnectionData.UpdateLocation.lessonLocation "' + this.lessonLocation + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            CourseLog.AppendLine('ConnectionData.UpdateLocation.bookmark "' + this.bookmark + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            CourseLog.AppendLine('ConnectionData.UpdateLocation.visitedScenes "' + this.visitedScenes + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            CourseLog.AppendLine('ConnectionData.UpdateLocation.lockedScenes "' + this.lockedScenes + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        }
    };
    this.UpdateStatus = function(a) {
        if (this.status != a) {
            this.status = a;
            this.fire(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_STATUS, this.status);
            CourseLog.AppendLine('ConnectionData.UpdateStatus "' + this.status + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        }
    };
    this.UpdateScore = function(a) {
        if (this.score != a) {
            this.score = a;
            this.fire(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_SCORE, this.score);
            CourseLog.AppendLine('ConnectionData.UpdateScore "' + this.score + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        }
    };
    this.UpdateTotalTime = function(a) {
        this.totalTime = a;
        CourseLog.AppendLine('ConnectionData.UpdateTotalTime "' + this.totalTime + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
    };
    this.UpdateSessionTime = function(a) {
        this.sessionTime = a;
        CourseLog.AppendLine('ConnectionData.UpdateSessionTime "' + this.sessionTime + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
    };
    this.UpdateCookieData = function(a) {
        if (this.cookiesData != a) {
            this.cookiesData = a;
            this.fire(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_COOKIES, this.cookiesData);
            CourseLog.AppendLine('ConnectionData.UpdateCookieData "' + this.cookiesData + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        }
    }
}

function IConnection() {
    this.data = null;
    this.Start = function() {
        this.data = new ConnectionData();
        this.data.connStatus = true
    };
    this.Finish = function() {};
    this.FillData = function() {};
    this.PutInteractions = function(b, c, a, e, d, f) {
        return ("")
    }
}

function Scorm12DataItem(a, b) {
    this.parameter = a;
    this.value = b;
    this.ToString = function() {
        return (this.parameter + ", " + this.value)
    }
}

function Scorm12() {
    this.data = null;
    var a = null;
    var l = new Timer();
    var k = "";
    var c = function() {
        var n = b.call(this, window);
        if ((n == null) && (window.opener != null) && (typeof(window.opener) !== "undefined")) {
            n = b.call(this, window.opener)
        }
        return (n)
    };
    var b = function(o) {
        var n = 0;
        while ((o.API == null) && (o.parent != null) && (o.parent != o)) {
            n++;
            if (n > 7) {
                return (null)
            }
            o = o.parent
        }
        return (o.API)
    };
    this.Start = function() {
        this.data = new ConnectionData();
        a = c.call(this);
        if (a != null) {
            var n = new String(a.LMSInitialize(""));
            if (n != "false") {
                this.data.connStatus = true
            } else {
                this.data.connStatus = false;
                this.data.connErrorDescription = "Could not initialize SCORM API."
            }
        } else {
            this.data.connStatus = false;
            this.data.connErrorDescription = "Could not find SCORM API."
        }
    };
    this.Finish = function() {
        if (this.data.connStatus) {
            m.call(this);
            a.LMSFinish("")
        }
    };
    this.FillData = function() {
        var n = new ConnectionData();
        if (this.data.connStatus) {
            k = a.LMSGetValue("cmi.interactions._children");
            this.data.UpdateStudentId(a.LMSGetValue("cmi.core.student_id"));
            this.data.UpdateStudentName(a.LMSGetValue("cmi.core.student_name"));
            this.data.UpdateLessonLocation(a.LMSGetValue("cmi.core.lesson_location"));
            this.data.UpdateStatus(a.LMSGetValue("cmi.core.lesson_status").toUpperCase());
            this.data.UpdateScore(a.LMSGetValue("cmi.core.score.raw"));
            this.data.UpdateTotalTime(a.LMSGetValue("cmi.core.total_time"));
            this.data.UpdateCookieData(a.LMSGetValue("cmi.suspend_data"));
            this.data.on(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_LOCATION, h, null, this);
            this.data.on(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_STATUS, j, null, this);
            this.data.on(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_SCORE, i, null, this);
            this.data.on(COURSE_ENUM.EVENTS.ON_CHANGE_CONNECTION_DATA_COOKIES, g, null, this)
        }
    };
    var m = function() {
        var n = l.GetElapsedTime();
        f.call(this, new Scorm12DataItem("cmi.core.session_time", n));
        this.data.UpdateSessionTime(n)
    };
    this.PutInteractions = function(r, u, p, x, v, z, s, y) {
        if (k == "") {
            return
        }
        var t = a.LMSGetValue("cmi.interactions._count");
        var o = new Array();
        if (e.call(this, "id")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + ".id", r))
        }
        if (e.call(this, "type")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + ".type", u))
        }
        if (e.call(this, "correct_responses")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + ".correct_responses.0.pattern", p))
        }
        if (e.call(this, "student_response") && (x != "")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + ".student_response", x))
        }
        if (e.call(this, "result")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + ".result", v))
        }
        if (e.call(this, "weighting")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + ".weighting", z))
        }
        if (e.call(this, "latency")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + ".latency", s))
        }
        if (e.call(this, "time")) {
            o.push(new Scorm12DataItem("cmi.interactions." + t + " +.time", y))
        }
        var w = "";
        for (var q = 0; q < o.length; q++) {
            w = f.call(this, o[q]);
            if (w != "") {
                w = "PutInteractions error. " + o[q].parameter + " - " + o[q].value + " - " + v;
                return (w)
            }
        }
        return ("")
    };
    var f = function(n) {
        var o = n.parameter;
        var p = n.value;
        a.LMSSetValue(o, p);
        a.LMSCommit("");
        return ("")
    };
    var d = function() {
        try {
            var n = a.LMSGetLastError();
            var o = a.LMSGetErrorString(n);
            return (n + " - " + o)
        } catch (p) {
            return (p.description)
        }
    };
    var e = function(p) {
        var n = k.toLowerCase().split(",");
        for (var o = 0; o < n.length; o++) {
            if (n[o] == p.toLowerCase()) {
                return (true)
            }
        }
        return (false)
    };
    var h = function(o, n) {
        if (this.data.connStatus) {
            f.call(this, new Scorm12DataItem("cmi.core.lesson_location", n));
            m.call(this)
        }
    };
    var j = function(o, n) {
        if (this.data.connStatus) {
            f.call(this, new Scorm12DataItem("cmi.core.lesson_status", n));
            m.call(this)
        }
    };
    var i = function(o, n) {
        if (this.data.connStatus) {
            f.call(this, new Scorm12DataItem("cmi.core.score.raw", n));
            m.call(this)
        }
    };
    var g = function(o, n) {
        if (this.data.connStatus) {
            f.call(this, new Scorm12DataItem("cmi.suspend_data", n));
            m.call(this)
        }
    }
}
var CourseLog = {
    line: 0,
    messages: [],
    logDOM: null,
    AppendLine: function(a, b) {
        if (arguments.length < 2) {
            b = COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL
        }
        this.messages.push({
            number: ++this.line,
            timestamp: CourseAuxFunctions.GetTimeStamp(),
            type: b,
            text: a
        });
        if (this.logDOM != null) {
            $(this.logDOM).html(this.ToString())
        }
    },
    ToString: function() {
        var e = "<p>";
        var c = "";
        var d = this.messages.length.toString().length;
        var f = "";
        var a = 0;
        for (var b = (this.messages.length - 1); b >= 0; b--) {
            switch (this.messages[b].type) {
                case COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL:
                    c = "normal";
                    break;
                case COURSE_ENUM.LOG_MESSAGE_TYPE.WARNING:
                    c = "warning";
                    break;
                case COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR:
                    c = "error";
                    break
            }
            f = this.messages[b].number.toString();
            a = d - f.length;
            while (a > 0) {
                f = "&nbsp;" + f;
                a--
            }
            e += f + ". {" + this.messages[b].timestamp + '} <span class="' + c + '">' + this.messages[b].text + "</span><br />"
        }
        e += "</p>";
        return (e)
    },
    SetDOMElement: function(a) {
        this.logDOM = a
    }
};

function CourseConfig(a) {
    this.dirData = "";
    this.dirLayouts = "";
    this.dirLayoutsSpecialScreen = "";
    this.dirMedia = "";
    this.dirSounds = "";
    this.dirAttachments = "";
    this.showDebug = false;
    this.connectionMode = COURSE_ENUM.CONNECTION_MODE.OFFLINE;
    this.startLevelPath = "1";
    this.styleFilePath = "";
    this.frameFilePath = "";
    this.language = "";
    this.base = "";
    this.demo = false;
    this.demoTimeout = 0;
    this.demoURL = "";
    var b = function(c) {
        CourseLog.AppendLine("Reading course config.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        this.dirData = $(c).find("dir_data").text();
        this.dirLayouts = $(c).find("dir_layouts").text();
        this.dirLayoutsSpecialScreen = $(c).find("dir_cenas_especiais").text();
        this.dirMedia = $(c).find("dir_media").text();
        this.dirSounds = $(c).find("dir_sounds").text();
        this.dirAttachments = $(c).find("dir_anexos").text();
        this.connectionMode = COURSE_ENUM.CONNECTION_MODE.OFFLINE;
        this.base = "layouts/" + $(c).find("base").text();
        this.showDebug = (($(c).find("modo_debug").text() == "sim") || ($(c).find("modo_debug").text() == "1"));
        if (CourseAuxFunctions.GetQuerystringVar("demo") != "") {
            var f = CourseAuxFunctions.GetQuerystringVar("demo");
            var d = CourseAuxFunctions.GetQuerystringVar("durl");
            if (!isNaN(f) && (d != "")) {
                this.demo = (f > 0);
                this.demoTimeout = parseInt(f);
                this.demoURL = d
            }
        }
        var e = CourseAuxFunctions.GetQuerystringVar("start_path");
        if (e != "") {
            this.startLevelPath = e
        } else {
            this.startLevelPath = $(c).find("nivel_inicial").text()
        }
        this.styleFilePath = $(c).find("estilo").text();
        this.frameFilePath = $(c).find("base").text();
        this.language = $(c).find("idioma").text();
        CourseLog.AppendLine('Config.dirData "' + this.dirData + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.dirLayouts "' + this.dirLayouts + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.dirMedia "' + this.dirMedia + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.dirSounds "' + this.dirSounds + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.dirAttachments "' + this.dirAttachments + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.showDebug "' + this.showDebug + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.connectionMode "' + this.connectionMode + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.startLevelPath "' + this.startLevelPath + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.styleFilePath "' + this.styleFilePath + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.frameFilePath "' + this.frameFilePath + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.language "' + this.language + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.demo "' + this.demo + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.demoTimeout "' + this.demoTimeout + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseLog.AppendLine('Config.demoURL "' + this.demoURL + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
    };
    b.call(this, a)
}

function CourseStyleColor(b, a) {
    this.name = b;
    this.hex = a;
    this.ToRGBA = function(c) {
        var f = parseInt(this.hex.substring(1, 3), 16);
        var e = parseInt(this.hex.substring(3, 5), 16);
        var d = parseInt(this.hex.substring(5, 7), 16);
        return "rgba({r}, {g}, {b}, {a})".replace("{r}", f).replace("{g}", e).replace("{b}", d).replace("{a}", c)
    };
    this.ToBackgroundColor = function() {
        return ("background-color:" + this.hex + ";")
    };
    this.ToForeColor = function() {
        return ("color:" + this.hex + ";")
    }
}

function CourseStyleTextFormat(b) {
    this.styleName = $(b).prop("tagName");
    this.fontName = $("font", b).text();
    this.fontSize = parseInt($("size", b).text());
    this.textAlign = $("align", b).text();
    this.textColor = $("color", b).text();
    var a = $("leading", b).text();
    this.fontWeight = (String($("bold", b).text()) == "1") ? "bold" : "normal";
    this.ToStyle = function() {
        var d = parseInt(a) >= 1.5 ? a : 1.5;
        var c = "";
        c += "font-family:" + this.fontName + ";";
        c += "font-size:" + this.fontSize + "px;";
        c += "text-align:" + this.textAlign + ";";
        if (this.styleName.indexOf("piv") != -1) {
            c += "color:" + this.textColor + ";"
        }
        c += "line-height:" + d + ";";
        c += "font-weight:" + this.fontWeight + ";";
        return (c)
    }
}

function CourseStyle() {
    EventBroadcaster.Initialize(this);
    this.colors = [];
    this.texts = [];
    this.defaultTextStyle = "";
    this.LoadStyle = function(d) {
        var c = this;
        CourseLog.AppendLine('Loading course style file at "' + d + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $.ajax({
            type: "GET",
            url: d,
            async: true,
            dataType: "xml",
            success: function(e, i, f) {
                CourseLog.AppendLine('Course style file at "' + d + '" loaded ok.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                var g = $("estilo > cores", e);
                var h = $("estilo > textos", e);
                if ((g.length == 1) && (h.length == 1)) {
                    a.call(c, g);
                    b.call(c, h);
                    CourseLog.AppendLine("Finished parsing course style.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                    c.fire(COURSE_ENUM.EVENTS.ON_LOAD_STYLE_DATA, true)
                } else {
                    CourseLog.AppendLine('Course style file is not valid. Could not find "cores" and/or "textos" node. Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                    c.fire(COURSE_ENUM.EVENTS.ON_LOAD_STYLE_DATA, false)
                }
            },
            error: function(e, f) {
                CourseLog.AppendLine('Could not load course style file at "' + d + '" (status "' + f + '"). Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                c.fire(COURSE_ENUM.EVENTS.ON_LOAD_STYLE_DATA, false)
            }
        })
    };
    var a = function(c) {
        var d = this;
        CourseLog.AppendLine("Reading colors.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $("*", c).each(function(h, g) {
            var f = $(g).prop("tagName");
            var e = $(g).text();
            if (e != "") {
                CourseLog.AppendLine('Read color "' + f + '" "' + e + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                d.colors.push(new CourseStyleColor(f, e))
            }
        })
    };
    var b = function(d) {
        var c = this;
        $(d).children().each(function(f, e) {
            c.texts.push(new CourseStyleTextFormat(e))
        })
    };
    this.ApplyStylesToDocument = function() {
        CourseLog.AppendLine("Applying course styles to document.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        for (var d = 0; d < this.texts.length; d++) {
            var e = document.createStyleSheet();
            e.addRule("." + this.texts[d].styleName, this.texts[d].ToStyle())
        }
        for (var d = 0; d < this.colors.length; d++) {
            var e = document.createStyleSheet();
            e.addRule("." + this.colors[d].name + "-bg", this.colors[d].ToBackgroundColor());
            e.addRule("." + this.colors[d].name + "-fc", this.colors[d].ToForeColor())
        }
        var c = this.GetColor("cor1").hex;
        e.addRule(".triangle-border.right:before", "border-color:transparent " + c + ";");
        e.addRule(".triangle-border", "border-color: " + c + ";");
        e.addRule(".triangle-border:before", "border-color:" + c + " transparent;");
        e.addRule(".triangle-border.left:before", "border-color:transparent " + c + ";")
    };
    this.GetColor = function(c) {
        for (var d = 0; d < this.colors.length; d++) {
            if (this.colors[d].name == c) {
                return this.colors[d]
            }
        }
        return (null)
    };
    this.GetText = function(d) {
        for (var c = 0; c < this.texts.length; c++) {
            if (this.texts[c].styleName == d) {
                return (this.texts[c])
            }
        }
        return (null)
    }
}

function BaseButton(a) {
    this.id = $(a).is("[scene]") ? $(a).attr("scene") : "";
    this.label = $(a).is("[label]") ? $(a).attr("label") : ""
}

function CourseBase(a) {
    EventBroadcaster.Initialize(this);
    this.logo = "";
    this.course = a;
    this.uiHeaderRawData = "";
    this.uiHeader = "";
    this.uiFooterRawData = "";
    this.uiFooter = "";
    this.uiInstructionsRawData = "";
    this.uiInstructions = "";
    this.jsData = "";
    this.fileHTML = "";
    this.fileHTMLStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
    this.fileJS = "";
    this.fileJSStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
    this.frameCode = null;
    this.dynamicButtons = [];
    this.isVisible = true;
    this.toogleTriggered = false;
    this.headerHeight = null;
    this.footerHeight = null;
    this.ToogleBase = function(b) {
        if (this.isVisible) {
            if ((this.headerHeight == null) || (this.footerHeight == null)) {
                this.headerHeight = $("#header").height() + 10;
                this.footerHeight = $("#footer").height() + 10
            }
            $("#header").fadeOut(b);
            $("#footer").fadeOut(b);
            $(".screen-holder").css("padding-top", "0").css("padding-bottom", "0")
        } else {
            $("#header").fadeIn(b);
            $("#footer").fadeIn(b);
            $(".screen-holder").css("padding-top", this.headerHeight + "px").css("padding-bottom", this.footerHeight + "px")
        }
        this.isVisible = !this.isVisible;
        this.toogleTriggered = true
    };
    this.LoadBaseData = function(c, b) {
        var d = this;
        CourseLog.AppendLine('Loading course frame file at "' + c + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $.ajax({
            type: "GET",
            url: c,
            async: true,
            dataType: "xml",
            success: function(e, h, f) {
                CourseLog.AppendLine('Course frame file at "' + c + '" loaded ok.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                var g = $(e).find("config");
                if (g.length == 1) {
                    if ($(g).find("logo").length > 0) {
                        d.logo = $(g).find("logo").text()
                    }
                    $(e).find("dynamic_buttons").children().each(function(l, k) {
                        var j = new BaseButton(k);
                        if (COURSE_ENUM.SPECIAL_SCREEN.EXISTS(j.id)) {
                            d.dynamicButtons.push(j)
                        }
                    });
                    CourseLog.AppendLine("Finished parsing course frame.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
                } else {
                    CourseLog.AppendLine('Course frame file is not valid. Could not find "config" node. Course will continue but logo configuration is unavailable.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR)
                }
                d.LoadBaseUI(b)
            },
            error: function(e, f) {
                CourseLog.AppendLine('Could not load course frame file at "' + c + '" (status "' + f + '"). Course will continue but logo configuration is unavailable.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                d.fire(COURSE_ENUM.EVENTS.ON_LOAD_FRAME_DATA, true)
            }
        })
    };
    this.DynamicButtonExists = function(b) {
        return (this.GetDynamicButton(b) != null)
    };
    this.GetDynamicButton = function(b) {
        for (var c = 0; c < this.dynamicButtons.length; c++) {
            if (this.dynamicButtons[c].id == b) {
                return (this.dynamicButtons[c])
            }
        }
        return (null)
    };
    this.LoadBaseUI = function(b) {
        this.fileHTML = b + ".html";
        this.fileJS = b + ".js";
        this.LoadBaseJS()
    };
    this.LoadBaseHTML = function() {
        var b = this;
        CourseLog.AppendLine('Loading frame ui file at "' + this.fileHTML + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $.ajax({
            type: "GET",
            url: this.fileHTML,
            async: true,
            dataType: "html",
            success: function(c, f, e) {
                CourseLog.AppendLine('Frame html file at "' + b.fileHTML + '" loaded ok.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                b.fileHTMLStatus = COURSE_ENUM.FILE_STATUS.LOADED_OK;
                b.uiHeaderRawData = $("#frameHeader", c).html();
                b.uiFooterRawData = $("#frameFooter", c).html();
                b.uiInstructionsRawData = $("#frameInstructions", c).html();
                var d = {
                    course: b.course,
                    base: b
                };
                b.uiHeader = new EJS({
                    text: b.uiHeaderRawData
                }).render(d);
                b.uiFooter = new EJS({
                    text: b.uiFooterRawData
                }).render(d);
                b.uiInstructions = new EJS({
                    text: b.uiInstructionsRawData
                }).render(d);
                b.LoadBaseJS()
            },
            error: function(c, d) {
                CourseLog.AppendLine('Could not load frame html file at "' + b.fileHTML + '" (status "' + d + '"). Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                b.fileHTMLStatus = COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD;
                b.fire(COURSE_ENUM.EVENTS.ON_LOAD_FRAME_DATA, false)
            }
        })
    };
    this.LoadBaseJS = function() {
        var b = this;
        CourseLog.AppendLine('Loading frame js file at "' + this.fileJS + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $.ajax({
            type: "GET",
            url: this.fileJS,
            async: true,
            dataType: "text",
            success: function(c, e, d) {
                CourseLog.AppendLine('Frame js file at "' + b.fileJS + '" loaded ok.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                b.jsData = c + ";return(frameCode);";
                b.fileJSStatus = COURSE_ENUM.FILE_STATUS.LOADED_OK;
                b.fire(COURSE_ENUM.EVENTS.ON_LOAD_FRAME_DATA, true)
            },
            error: function(c, d) {
                CourseLog.AppendLine('Could not load frame js file at "' + b.fileJS + '" (status "' + d + '"). Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                b.fileJSStatus = COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD;
                b.fire(COURSE_ENUM.EVENTS.ON_LOAD_FRAME_DATA, false)
            }
        })
    };
    this.RunJS = function(b, e, d) {
        if (this.fileJSStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK) {
            var c = new Function(this.jsData);
            this.frameCode = c();
            this.frameCode.headerDomNode = e;
            this.frameCode.footerDomNode = d;
            this.frameCode.base = this;
            this.frameCode.course = b;
            if (this.frameCode.OnFrameLoad) {
                this.frameCode.OnFrameLoad()
            }
            return this.frameCode
        }
        return null
    }
}

function CourseLocalizationMessage(a, b) {
    this.id = a;
    this.text = b
}

function CourseLocalization() {
    EventBroadcaster.Initialize(this);
    this.messages = [];
    this.GetMessage = function(e, b, a) {
        var g = 'Could not find message "' + e + '".';
        a = (arguments.length >= 3) ? a : true;
        for (var c = 0; c < this.messages.length; c++) {
            if (this.messages[c].id == e) {
                g = this.messages[c].text;
                if (arguments.length >= 2) {
                    var f = g.split("$$");
                    if (f.length == (b.length + 1)) {
                        g = f[0];
                        for (var d = 0; d < b.length; d++) {
                            if (a) {
                                g += '<span style="font-weight:bold;">' + b[d] + "</span>" + f[d + 1]
                            } else {
                                g += b[d] + f[d + 1]
                            }
                        }
                    }
                }
                break
            }
        }
        return (g)
    };
    this.LoadLocalization = function(b) {
        var a = this;
        CourseLog.AppendLine('Loading course localization file at "' + b + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $.ajax({
            type: "GET",
            url: b,
            async: true,
            dataType: "xml",
            success: function(c, f, d) {
                CourseLog.AppendLine('Course localization file at "' + b + '" loaded ok.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                var e = $(c).find("mensagens");
                if (e.length == 1) {
                    $("*", e).each(function(h, g) {
                        var j = $(g).attr("id");
                        var k = $(g).text();
                        a.messages.push(new CourseLocalizationMessage(j, k));
                        CourseLog.AppendLine('Read message "' + j + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
                    });
                    CourseLog.AppendLine("Course localization file read.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                    a.fire(COURSE_ENUM.EVENTS.ON_LOAD_LOCALIZATION_DATA, true)
                } else {
                    CourseLog.AppendLine('Course localization file is not valid. Could not find "mensagens" node. Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                    a.fire(COURSE_ENUM.EVENTS.ON_LOAD_LOCALIZATION_DATA, false)
                }
            },
            error: function(c, d) {
                CourseLog.AppendLine('Could not load course localization file at "' + b + '" (status "' + d + '"). Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                a.fire(COURSE_ENUM.EVENTS.ON_LOAD_LOCALIZATION_DATA, false)
            }
        })
    }
}

function CourseCookieItem(a, b) {
    this.id = a;
    this.value = b;
    this.div = "QLC";
    this.FromString = function(d) {
        var c = d.split(this.div);
        this.id = c[0];
        this.value = c[1]
    };
    this.ToString = function() {
        return (this.id + this.div + this.value)
    }
}

function CourseCookies(a) {
    EventBroadcaster.Initialize(this);
    this.version = 1;
    this.charsLimit = (arguments.length == 1) ? a : Infinity;
    this.div = "CLQ";
    this.cookies = [];
    this.currentCookiesValue = "";
    this.GetCookie = function(b) {
        for (var c = 0; c < this.cookies.length; c++) {
            if (this.cookies[c].id == b) {
                return (this.cookies[c])
            }
        }
        return (null)
    };
    this.CookieExists = function(b) {
        return (this.GetCookie(b) != null)
    };
    this.SetCookie = function(b, d) {
        var g = false;
        if (this.CookieExists(b)) {
            var e = this.GetCookie(b);
            var f = new CourseCookieItem(b, d);
            if ((this.GetFreeSpace() + escape(e.ToString()).length - escape(f.ToString()).length) >= 0) {
                this.DeleteCookie(b);
                this.cookies.push(f);
                g = true
            }
        } else {
            var f = new CourseCookieItem(b, d);
            if ((this.GetFreeSpace() - escape(f.ToString()).length) >= 0) {
                this.cookies.push(f);
                g = true
            }
        }
        if (g) {
            var c = this.ToString();
            if (c != this.currentCookiesValue) {
                this.currentCookiesValue = c;
                this.fire(COURSE_ENUM.EVENTS.ON_CHANGE_COOKIES, this.currentCookiesValue)
            }
            CourseLog.AppendLine('Cookie "' + b + '" stored ok.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        } else {
            CourseLog.AppendLine('Could not store cookie "' + b + '". Not enough free space.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR)
        }
        return (g)
    };
    this.DeleteCookie = function(b) {
        if (this.CookieExists(b)) {
            for (var c = 0; c < this.cookies.length; c++) {
                if (this.cookies[c].id == b) {
                    this.cookies.splice(c, 1)
                }
            }
        }
    };
    this.FromString = function(d) {
        if (d != "") {
            this.Reset();
            CourseLog.AppendLine("Cookies import. Data received: " + d, COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            d = unescape(d);
            var b = d.split(this.div);
            for (var c = 0; c < b.length; c++) {
                cookie = new CourseCookieItem("", "");
                cookie.FromString(b[c]);
                this.cookies.push(cookie)
            }
            this.currentCookiesValue = this.ToString();
            CourseLog.AppendLine("Cookies imported ok. Data parsed: " + d, COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        }
    };
    this.ToString = function(c) {
        var d = "";
        for (var b = 0; b < this.cookies.length; b++) {
            d += ((d != "") ? this.div : "") + this.cookies[b].ToString()
        }
        d = escape(d);
        if (c) {
            CourseLog.AppendLine("Exporting cookies: " + d, COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
        }
        return (d)
    };
    this.Reset = function() {
        this.cookies = [];
        this.cookies.push(new CourseCookieItem("VERSION", this.version))
    };
    this.GetFreeSpace = function() {
        return (this.charsLimit - this.ToString().length)
    };
    this.Reset()
}

function Question(b) {
    this.id = 0;
    this.originalId = 0;
    this.xml = "";
    this.title = "";
    this.transition = "";
    this.type = "";
    this.studentResponse = "";
    this.correctResponse = "";
    this.result = false;
    this.latency = 0;
    this.time = "00:00:00";
    this.timeout = 0;
    this.done = false;
    this.custom = "";
    this.weighting = "1";
    this.Clone = function(c) {
        var e = new Question();
        for (var d in this) {
            if ((d != "Clone") && (d != "FromString") && (d != "ToString") && (d != "Init")) {
                e[d] = this[d]
            }
        }
        e.originalId = e.id;
        e.id = c;
        return (e)
    };
    this.FromString = function(d) {
        var c = d.split(",");
        this.id = parseInt(c[0]);
        this.originalId = parseInt(c[1]);
        this.type = unescape(c[2]);
        this.studentResponse = unescape(c[3]);
        this.correctResponse = unescape(c[4]);
        this.result = (c[5] == "1");
        this.latency = parseInt(c[6]);
        this.time = unescape(c[7]);
        this.done = (c[8] == "1");
        this.custom = unescape(c[9]);
        this.timeout = parseInt(c[10])
    };
    this.ToString = function() {
        var c = [this.id, this.originalId, escape(this.type), escape(this.studentResponse), escape(this.correctResponse), (this.result ? "1" : "0"), this.latency, escape(this.time), (this.done ? "1" : "0"), escape(this.custom), this.timeout];
        return (c.join(","))
    };
    var a = function(c) {
        this.id = $(c).is("[id]") ? parseInt($(c).attr("id")) : 0;
        this.xml = $(c).attr("xml");
        this.title = $(c).attr("titulo");
        this.transition = $(c).attr("transicao")
    };
    if (arguments.length > 0) {
        a.call(this, b)
    }
}

function QuestionBank(b) {
    this.id = 0;
    this.questions = [];
    this.GetQuestion = function(d) {
        for (var c = 0; c < this.questions.length; c++) {
            if (this.questions[c].id == d) {
                return (this.questions[c])
            }
        }
        return (null)
    };
    this.Draw = function(g) {
        if ((g <= 0) || (g > this.questions.length)) {
            return ([])
        }
        var d = [];
        while (d.length < g) {
            var f = CourseAuxFunctions.GenerateRandomNumber(0, (this.questions.length - 1));
            var c = true;
            for (var e = 0; e < d.length; e++) {
                if (d[e].id == this.questions[f].id) {
                    c = false;
                    break
                }
            }
            if (c) {
                d.push(this.questions[f])
            }
        }
        return (d)
    };
    var a = function(d) {
        var c = this;
        this.id = parseInt($($(d).parent()).attr("id"));
        $(d).children().each(function(f, e) {
            var g = new Question(e);
            c.questions.push(g)
        })
    };
    a.call(this, b)
}

function QuestionBankCollection(b) {
    this.banks = [];
    this.GetQuestions = function(c) {
        var d = [];
        switch (c.config) {
            case COURSE_ENUM.EVALUATION_QUESTION_CONFIG.FIXED_QUESTION:
                d.push(this.GetQuestion(c.questionId));
                break;
            case COURSE_ENUM.EVALUATION_QUESTION_CONFIG.RANDOM_QUESTION:
                d = this.Draw(c.levelId, c.total);
                break
        }
        return (d)
    };
    this.Draw = function(d, f) {
        var e = [];
        var c = this.GetBank(d);
        if (c != null) {
            e = c.Draw(f)
        }
        return (e)
    };
    this.GetQuestion = function(e) {
        for (var c = 0; c < this.banks.length; c++) {
            var d = this.banks[c].GetQuestion(e);
            if (d != null) {
                return (d)
            }
        }
        return (null)
    };
    this.GetBank = function(c) {
        for (var d = 0; d < this.banks.length; d++) {
            if (this.banks[d].id == c) {
                return (this.banks[d])
            }
        }
        return (null)
    };
    var a = function(d) {
        var c = this;
        $(COURSE_ENUM.COURSE_MAP_NODES.QUESTION_BANK, d).each(function(g, f) {
            var e = new QuestionBank(f);
            c.banks.push(e)
        });
        $(COURSE_ENUM.COURSE_MAP_NODES.QUESTION_BANK, d).remove()
    };
    a.call(this, b)
}

function QuestionConfig(b) {
    this.config = null;
    this.levelId = null;
    this.total = null;
    this.questionId = null;
    var a = function(c) {
        this.config = $(c).prop("tagName").toLowerCase();
        switch (this.config) {
            case COURSE_ENUM.EVALUATION_QUESTION_CONFIG.RANDOM_QUESTION:
                this.levelId = parseInt($(c).attr("idnivel"));
                this.total = parseInt($(c).attr("numero"));
                break;
            case COURSE_ENUM.EVALUATION_QUESTION_CONFIG.FIXED_QUESTION:
                this.questionId = parseInt($(c).attr("id"));
                break
        }
    };
    a.call(this, b)
}

function EvaluationCollection(c, a, e) {
    EventBroadcaster.Initialize(this);
    this.evaluations = [];
    var f = 0;
    this.GetEvaluationByScreen = function(h) {
        for (var g = 0; g < this.evaluations.length; g++) {
            if (this.evaluations[g].ScreenExists(h)) {
                return (this.evaluations[g])
            }
        }
        return (null)
    };
    this.ResetEvaluation = function(h) {
        var g = this.GetEvaluationByScreen(h);
        f = g.Reset(f);
        return (g)
    };
    this.GetEvaluationById = function(g) {
        for (var h = 0; h < this.evaluations.length; h++) {
            if (this.evaluations[h].id == g) {
                return (this.evaluations[h])
            }
        }
        return (null)
    };
    this.RemoveUnusedEvaluations = function(g) {
        for (var k = 0; k < this.evaluations.length; k++) {
            var h = true;
            for (var l = 0; l < g.length; l++) {
                if (this.evaluations[k].id == g[l]) {
                    h = false;
                    break
                }
            }
            if (h) {
                this.evaluations.splice(k, 1);
                k--
            }
        }
    };
    this.IsCompleted = function() {
        for (var g = 0; g < this.evaluations.length; g++) {
            if (!this.evaluations[g].IsEvaluationComplete()) {
                return (false)
            }
        }
        return (true)
    };
    this.HasPassed = function() {
        for (var g = 0; g < this.evaluations.length; g++) {
            if (!this.evaluations[g].HasPassed()) {
                return (false)
            }
        }
        return (true)
    };
    this.RegisterEvaluationFinishCallback = function(h, g) {
        this.on(COURSE_ENUM.EVENTS.ON_FINISHED_EVALUATION, g, null, h)
    };
    var d = function(j) {
        if (this.IsCompleted()) {
            var l = 0;
            var k = this.evaluations.length;
            for (var h = 0; h < this.evaluations.length; h++) {
                l += this.evaluations[h].GetScoreForCurrentTry()
            }
            var g = Math.floor((l / k));
            this.fire(COURSE_ENUM.EVENTS.ON_FINISHED_EVALUATION, g)
        }
    };
    var b = function(h, g, j) {
        var i = this;
        $(COURSE_ENUM.COURSE_MAP_NODES.EVALUATION, h).each(function(m, l) {
            var k = new Evaluation(j, g);
            f = k.Init(l, f);
            k.on(COURSE_ENUM.EVENTS.ON_FINISHED_EVALUATION, d, null, i);
            i.evaluations.push(k)
        })
    };
    b.call(this, c, a, e)
}

function Evaluation(c, a) {
    EventBroadcaster.Initialize(this);
    this.id = 0;
    this.title = "";
    this.lockFowardNav = false;
    this.lockPrevNav = false;
    this.masteryScore = 0;
    this.mode = COURSE_ENUM.EVALUATION_MODE.NOT_ATTEMPTED;
    this.currentTry = 0;
    this.maxTries = 0;
    this.questionFeedbackMode = COURSE_ENUM.QUESTION_FEEDBACK_MODE.SHOW_FEEDBACK_AND_CORRECT_ANSWER;
    this.storeHighestScore = false;
    this.lockAfterPassed = false;
    this.keepIncompleteUntilLastAttempt = false;
    this.previousScore = [];
    this.canLeaveEvaluation = false;
    this.canFinishTheCourse = false;
    this.questionTimeout = 0;
    this.questionBanks = c;
    this.cookiesId = "";
    this.cookies = a;
    this.questionConfig = [];
    this.drawnQuestions = [];
    this.sourceNodeBackup = null;
    this.insertionPointNode = null;
    this.overridedScore = null;
    this.Init = function(r, q) {
        this.id = parseInt($(r).attr("id"));
        this.cookiesId = "AV" + this.id;
        this.title = $(r).attr("titulo");
        this.lockFowardNav = false;
        this.lockPrevNav = ($(r).attr("retornar") == "0");
        this.masteryScore = parseInt($(r).attr("nota_minima"));
        this.maxTries = parseInt($(r).attr("tentativas"));
        this.questionFeedbackMode = String($(r).attr("feedback"));
        this.storeHighestScore = ($(r).attr("salvar_maior_nota") == "1");
        this.lockAfterPassed = ($(r).attr("travar_apos_aprovacao") == "1");
        this.keepIncompleteUntilLastAttempt = ($(r).attr("manter_incompleto") == "1");
        this.canLeaveEvaluation = ($(r).attr("bloquear_saida") == "0");
        this.canFinishTheCourse = ($(r).attr("status_completo") == "1");
        this.questionTimeout = parseInt($(r).attr("tempo_questao"));
        $(r).removeAttr("avancar");
        $(r).removeAttr("retornar");
        $(r).removeAttr("nota_minima");
        $(r).removeAttr("tentativas");
        $(r).removeAttr("feedback");
        $(r).removeAttr("salvar_maior_nota");
        $(r).removeAttr("travar_apos_aprovacao");
        $(r).removeAttr("manter_incompleto");
        $(r).removeAttr("bloquear_saida");
        $(r).removeAttr("status_completo");
        $(r).removeAttr("tempo_questao");
        var l = this;
        $(r).children().each(function(u, t) {
            if (COURSE_ENUM.EVALUATION_QUESTION_CONFIG.EXISTS($(t).prop("tagName").toLowerCase())) {
                var v = new QuestionConfig(t);
                l.questionConfig.push(v)
            } else {
                $(t).attr("avancar", (l.lockFowardNav ? "0" : "-1"))
            }
        });
        var s = this.cookies.CookieExists(this.cookiesId) ? this.cookies.GetCookie(this.cookiesId).value : "";
        if (s == "") {
            q = this.Reset(q)
        } else {
            var e = s.split("-qdata:");
            var h = e[0].split("-eval:")[1];
            var f = h.split(",");
            this.mode = f[0];
            this.currentTry = f[1];
            this.previousScore = f[2].split("s");
            var m = e[1];
            var g = m.split(";");
            for (var j = 0; j < g.length; j++) {
                var p = parseInt(g[j].split(",")[1]);
                var o = parseInt(g[j].split(",")[0]);
                var n = this.questionBanks.GetQuestion(p).Clone(o);
                n.FromString(g[j]);
                this.drawnQuestions.push(n)
            }
        }
        this.insertionPointNode = b(r);
        for (var j = this.drawnQuestions.length - 1; j >= 0; j--) {
            var k = this.GetQuestionScreenNode(this.drawnQuestions[j]);
            if (this.insertionPointNode != null) {
                $(k).insertAfter(this.insertionPointNode)
            } else {
                $(this.insertionPointNode).append(k)
            }
        }
        $(COURSE_ENUM.EVALUATION_QUESTION_CONFIG.FIXED_QUESTION, r).remove();
        $(COURSE_ENUM.EVALUATION_QUESTION_CONFIG.RANDOM_QUESTION, r).remove();
        this.sourceNodeBackup = r;
        return (q)
    };
    var b = function(e) {
        if ($("nivel", e).length == 0) {
            return null
        }
        var f = $(e).children().first();
        while (f.index() > -1) {
            if (COURSE_ENUM.EVALUATION_QUESTION_CONFIG.EXISTS(f.prop("tagName"))) {
                return f.prev()
            }
            f = f.next()
        }
        return null
    };
    var d = function() {
        this.cookies.SetCookie(this.cookiesId, this.ToString())
    };
    this.ScreenExists = function(g) {
        var f = ($('nivel[id="' + g + '"]', this.sourceNodeBackup).length > 0);
        var e = ($('questao[id="' + g + '"]', this.sourceNodeBackup).length > 0);
        return (f || e)
    };
    this.ToString = function() {
        var f = "-eval:" + this.mode + "," + this.currentTry + "," + this.previousScore.join("s");
        f += "-qdata:";
        for (var e = 0; e < this.drawnQuestions.length; e++) {
            f += this.drawnQuestions[e].ToString();
            if (e < (this.drawnQuestions.length - 1)) {
                f += ";"
            }
        }
        return (f)
    };
    this.GetScoreForCurrentTry = function() {
        if (this.overridedScore != null) {
            return this.overridedScore
        }
        var f = 0;
        for (var e = 0; e < this.drawnQuestions.length; e++) {
            if (this.drawnQuestions[e].result) {
                f++
            }
        }
        return (Math.floor((f / this.drawnQuestions.length) * 100))
    };
    this.GetScore = function() {
        if (this.storeHighestScore) {
            var e = this.GetScoreForCurrentTry();
            for (var f = 0; f < this.previousScore.length; f++) {
                if (parseInt(this.previousScore[f]) > e) {
                    e = parseInt(this.previousScore[f])
                }
            }
            return (e)
        } else {
            return (this.GetScoreForCurrentTry())
        }
    };
    this.IsEvaluationComplete = function() {
        return (this.mode == COURSE_ENUM.EVALUATION_MODE.COMPLETED)
    };
    this.StartTry = function() {
        this.mode = COURSE_ENUM.EVALUATION_MODE.RUNNING;
        d.call(this)
    };
    this.FinishTry = function(e) {
        if (e) {
            this.overridedScore = e
        }
        this.currentTry++;
        this.mode = COURSE_ENUM.EVALUATION_MODE.COMPLETED;
        this.previousScore.push(this.GetScoreForCurrentTry());
        if (this.HasPassed() && this.lockAfterPassed) {
            this.currentTry = this.maxTries + 1
        }
        d.call(this);
        this.fire(COURSE_ENUM.EVENTS.ON_FINISHED_EVALUATION, this)
    };
    this.CanTryAgain = function() {
        return (this.GetRemainingTries() > 0)
    };
    this.GetRemainingTries = function() {
        return (this.maxTries - this.currentTry)
    };
    this.Reset = function(k) {
        this.drawnQuestions = [];
        for (var e = 0; e < this.questionConfig.length; e++) {
            var h = this.questionBanks.GetQuestions(this.questionConfig[e]);
            for (var f = 0; f < h.length; f++) {
                var g = h[f].Clone(++k);
                g.timeout = this.questionTimeout;
                this.drawnQuestions.push(g)
            }
        }
        d.call(this);
        return (k)
    };
    this.GetFirstQuestionId = function() {
        if (this.drawnQuestions.length > 0) {
            return (this.drawnQuestions[0].id)
        } else {
            return (null)
        }
    };
    this.GetFirstScreenId = function() {
        var e = $("nivel", this.sourceNodeBackup);
        if (e.length > 0) {
            var f = parseInt(e.eq(0).attr("id"));
            return (f)
        }
        return (null)
    };
    this.HasPassed = function() {
        return (this.GetScoreForCurrentTry() >= this.masteryScore)
    };
    this.SetInteraction = function(g, j, e, l, k, o, h, m, f, n) {
        var i = this.GetQuestion(g);
        i.type = j;
        i.correctResponse = e;
        i.studentResponse = l;
        i.result = k;
        i.weighting = o;
        i.latency += h;
        i.time = m;
        i.done = true;
        i.custom = f;
        i.timeout = n;
        d.call(this)
    };
    this.GetQuestion = function(f) {
        for (var e = 0; e < this.drawnQuestions.length; e++) {
            if (parseInt(this.drawnQuestions[e].id) == f) {
                return (this.drawnQuestions[e])
            }
        }
        return (null)
    };
    this.GetQuestionScreenNode = function(e) {
        var f = '<questao ppt="0" titulo="' + e.title + '" xml="' + e.xml + '" avancar="' + (this.lockFowardNav ? "0" : "-1") + '" transicao="none" id="' + e.id + '" bg="0" bgcolor="#FFFFFF" />';
        return (f)
    }
}

function ScreenElement(c) {
    var b = function(e) {
        var d;
        for (d = 0; isNaN(e.charAt(d)); d++) {}
        return (parseInt(e.substring(d)))
    };
    var a = function(e) {
        var d;
        for (d = 0; isNaN(e.charAt(d)); d++) {}
        return (e.substring(0, d))
    };
    this.tag = $(c).prop("tagName");
    this.type = a($(c).prop("tagName")).toUpperCase();
    this.number = b($(c).prop("tagName"));
    this.value = $(c).text();
    this.correctAnswer = (this.type == COURSE_ENUM.ELEMENT_TYPE.ALTERNATIVA) ? $(c).attr("gabarito") : null;
    this.width = $(c).is("[largura]") ? $(c).attr("largura") : 0;
    this.height = $(c).is("[altura]") ? $(c).attr("altura") : 0;
    this.alternateText = $(c).is("[alt]") ? $(c).attr("alt") : "";
    CourseLog.AppendLine('Found screen element "' + this.tag + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
}

function ElementsCollection(a) {
    this.elements = [];
    this.config = a;
    this.GetValue = function(d, c) {
        for (var e = 0; e < this.elements.length; e++) {
            if ((this.elements[e].type == d) && (this.elements[e].number == c)) {
                switch (this.elements[e].type) {
                    case COURSE_ENUM.ELEMENT_TYPE.MEDIA:
                    case COURSE_ENUM.ELEMENT_TYPE.SOM:
                    case COURSE_ENUM.ELEMENT_TYPE.PACOTE:
                    case COURSE_ENUM.ELEMENT_TYPE.PERSONAGEM:
                        var f = $.trim(this.elements[e].value);
                        if (f.toLowerCase().indexOf("http") != -1) {
                            return (f)
                        } else {
                            return (this.config.dirMedia + f)
                        }
                        break;
                    default:
                        return (this.elements[e].value);
                        break
                }
            }
        }
        return ("")
    };
    this.GetElement = function(d, c) {
        for (var e = 0; e < this.elements.length; e++) {
            if ((this.elements[e].type == d) && (this.elements[e].number == c)) {
                return (this.elements[e])
            }
        }
        return (null)
    };
    this.ElementExists = function(d, c) {
        for (var e = 0; e < this.elements.length; e++) {
            if ((this.elements[e].type == d) && (this.elements[e].number == c)) {
                return (this.elements[e].value != "")
            }
        }
        return (false)
    };
    this.GetYouTubeVideoId = function(d) {
        if (this.ElementExists(COURSE_ENUM.ELEMENT_TYPE.MEDIA, d)) {
            var e = this.GetValue(COURSE_ENUM.ELEMENT_TYPE.MEDIA, d);
            if ((e.indexOf("youtube") != -1) || (e.indexOf("youtu.be") != -1)) {
                var c = e.split("/");
                var f = c[c.length - 1];
                return (f)
            } else {
                return ("")
            }
        } else {
            return ("")
        }
    };
    this.IsYouTubeVideo = function(c) {
        var d = this.GetValue(COURSE_ENUM.ELEMENT_TYPE.MEDIA, c);
        return ((d.toLowerCase().indexOf("www.youtube.com") != -1) || (d.toLowerCase().indexOf("youtu.be") != -1))
    };
    this.GetVideoType = function(c) {
        var d = this.GetValue(COURSE_ENUM.ELEMENT_TYPE.MEDIA, c).toLowerCase();
        if ((d.indexOf("youtube.com") != -1) || (d.indexOf("youtu.be") != -1)) {
            return "youtube"
        }
        if (d.indexOf("vimeo.com") != -1) {
            return "vimeo"
        }
        return "html5"
    };
    this.GetCorrectAnswer = function() {
        var c = [];
        for (var d = 0; d < this.elements.length; d++) {
            if (this.elements[d].type == COURSE_ENUM.ELEMENT_TYPE.ALTERNATIVA) {
                c.push(this.elements[d].correctAnswer)
            }
        }
        return (c)
    };
    this.IsMulti = function() {
        var c = this.GetCorrectAnswer();
        var e = 0;
        for (var d = 0; d < c.length; d++) {
            if (c[d] == "1") {
                e++
            }
        }
        return (e > 1)
    };
    this.Count = function(e) {
        var d = 0;
        for (var f = 0; f < this.elements.length; f++) {
            if (this.elements[f].type == e) {
                d++
            }
        }
        return (d)
    };
    this.Fill = function(e) {
        e = b(e);
        var c = this;
        var d = $("*", e).children().length - 1;
        CourseLog.AppendLine("Parsing data file [XML]. Found " + d + " element(s).", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $("*", e).children().each(function(g, f) {
            if ($(f).prop("tagName").toLowerCase() != "layout") {
                c.elements.push(new ScreenElement(f))
            }
        });
        CourseLog.AppendLine("Finished parsing data file [XML].", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL)
    };
    var b = function(d) {
        if (($("item", d).length > 0) || ($("anexo", d).length > 0)) {
            var c = $("item", d).length > 0 ? "item" : "anexo";
            $(c, d).each(function(g, f) {
                var e = (g + 1);
                var k = $(f).children()[0].tagName;
                var l = $(f).children()[0].textContent;
                var m = $(f).children()[1].tagName;
                var n = $(f).children()[1].textContent;
                var h = "<" + k + e + ">" + l + "</" + k + e + ">";
                var j = "<" + m + e + ">" + n + "</" + m + e + ">";
                $(h).appendTo(c == "item" ? $(this).parent() : $($(this).parent()).parent());
                $(j).appendTo(c == "item" ? $(this).parent() : $($(this).parent()).parent());
                $(this).remove()
            })
        }
        return d
    }
}

function CourseScreenUI(b, c) {
    this.data = b;
    this.style = c;
    this.GetColor = function(d) {
        return (this.style.GetColor(d))
    };
    this.GetVideo = function(k, f, e) {
        var h;
        var j = this.data.GetElement(COURSE_ENUM.ELEMENT_TYPE.MEDIA, k);
        if (j != null) {
            if (this.data.IsYouTubeVideo(k)) {
                h = '<iframe class="youtubePlayer" width="' + f + '" height="' + e + '" src="https://www.youtube.com/embed/' + this.data.GetYouTubeVideoId(k) + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                return (h)
            } else {
                h = '<video controls="controls">$sourceInfo</video>';
                var l = a.call(this, j.value, this.data.config.dirMedia);
                if (l.length > 0) {
                    var g = "";
                    for (var d = 0; d < l.length; d++) {
                        g += '<source src="' + l[d].src + '" type="' + l[d].type + '" />'
                    }
                    return (h.replace("$sourceInfo", g))
                } else {
                    return ("<div>Video not found.</div>")
                }
            }
        } else {
            return ("<div>Video not found.</div>")
        }
    };
    var a = function(l, k) {
        l = $.trim(l);
        var d = [];
        if (l != "") {
            var h = l.split(";");
            for (var j = 0; j < h.length; j++) {
                var g = $.trim(h[j]);
                var e = g.split(".");
                if (e.length > 0) {
                    var f = new String(e[e.length - 1]).toLowerCase();
                    switch (f) {
                        case "mp4":
                            d.push({
                                src: k + g,
                                type: "video/mp4"
                            });
                            break;
                        case "ogg":
                            d.push({
                                src: k + g,
                                type: "video/ogg"
                            });
                            break;
                        case "webm":
                            d.push({
                                src: k + g,
                                type: "video/webm"
                            });
                            break
                    }
                }
            }
        }
        return (d)
    }
}

function CourseScreen(g, a, c, b) {
    EventBroadcaster.Initialize(this);
    this.config = a;
    this.style = c;
    this.course = b;
    this.id = 0;
    this.index = 0;
    this.path = "";
    this.title = "";
    this.fileXML = "";
    this.fileXMLStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
    this.xmlRawData = "";
    this.fileHTML = "";
    this.fileHTMLStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
    this.htmlRawData = "";
    this.fileJS = "";
    this.fileJsStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
    this.isLoaded = false;
    this.isLoading = false;
    this.isRendered = false;
    this.uiRawData = "";
    this.uiData = "";
    this.ui = null;
    this.jsData = "";
    this.code = {};
    this.data = new ElementsCollection(a);
    this.backgroundColor = "";
    this.backgroundImage = "";
    this.visited = false;
    this.lockMode = null;
    this.lockTimeOut = 0;
    this.isLocked = false;
    this.isQuestion = false;
    this.belongsToEvaluation = false;
    this.evaluationId = 0;
    this.screenCSS = null;
    this.domNode = null;
    this.isSpecialScreen = false;
    this.BackgroundImageExists = function() {
        return ((this.backgroundImage != COURSE_ENUM.BACKGROUND_TYPE.NONE) && (this.backgroundImage != COURSE_ENUM.BACKGROUND_TYPE.FLASH) && (this.backgroundImage.length >= 4))
    };
    this.backgroundSound = {};
    this.ParseHtmlStarted = false;
    this.Init = function(j) {
        var i = (this.id != 0);
        this.id = $(j).is("[id]") ? parseInt($(j).attr("id")) : 0;
        this.title = $(j).is("[titulo]") ? $(j).attr("titulo") : "";
        this.fileXML = this.config.dirData + $(j).attr("xml");
        this.backgroundColor = $(j).is("[bgcolor]") ? $(j).attr("bgcolor") : "";
        this.backgroundImage = $(j).is("[bg]") ? $(j).attr("bg") : "";
        this.isQuestion = ($(j).prop("tagName").toLowerCase() == COURSE_ENUM.COURSE_MAP_NODES.QUESTION);
        this.belongsToEvaluation = ($(j).parent().length > 0) ? ($(j).parent().prop("tagName").toLowerCase() == COURSE_ENUM.COURSE_MAP_NODES.EVALUATION) : false;
        this.evaluationId = this.belongsToEvaluation ? parseInt($(j).parent().attr("id")) : 0;
        var h = $(j).is("[avancar]") ? parseInt($(j).attr("avancar")) : -1;
        this.lockMode = (h < 0) ? COURSE_ENUM.LOCK_MODE.UNLOCKED : ((h == 0) ? COURSE_ENUM.LOCK_MODE.LOCKED_NORMAL : COURSE_ENUM.LOCK_MODE.LOCKED_TIME);
        this.lockTimeOut = (this.lockMode == COURSE_ENUM.LOCK_MODE.LOCKED_TIME) ? h : 0;
        this.isLocked = (this.lockMode != COURSE_ENUM.LOCK_MODE.UNLOCKED);
        this.containsPowerPoint = ($(g).attr("ppt") == "1");
        this.screenCSS = {
            "background-color": this.backgroundColor,
            "background-image": (this.BackgroundImageExists() ? "url('" + this.backgroundImage + "')" : "none"),
            "background-position": "center",
            "background-attachment": "fixed",
            "background-repeat": "no-repeat"
        };
        if (i) {
            this.fileXMLStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
            this.fileHTML = "";
            this.fileHTMLStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
            this.fileJS = "";
            this.fileJsStatus = COURSE_ENUM.FILE_STATUS.NOT_LOADED;
            this.isLoaded = false;
            this.isLoading = false;
            this.isRendered = false;
            this.uiRawData = "";
            this.uiData = "";
            this.jsData = "";
            this.code = {};
            this.data = new ElementsCollection(a);
            this.backgroundColor = "";
            this.backgroundImage = "";
            this.visited = false;
            this.ParseHtmlStarted = false
        }
    };
    this.GetLoadingError = function() {
        var h = "";
        if (this.fileXMLStatus == COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD) {
            h = 'Could not load file "' + this.fileXML + '"'
        } else {
            if (this.fileHTMLStatus == COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD) {
                h = 'Could not load file "' + this.fileHTML + '"'
            } else {
                if (this.fileJsStatus == COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD) {
                    h = 'Could not load file "' + this.fileJS + '"'
                } else {
                    h = "No error"
                }
            }
        }
        return (h)
    };
    this.LoadData = function() {
        if (this.fileXMLStatus == COURSE_ENUM.FILE_STATUS.NOT_LOADED) {
            var i = this;
            CourseLog.AppendLine('Loading screen "' + this.id + '" data file [XML] "' + this.fileXML + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            this.isLoading = true;
            $.ajax({
                type: "GET",
                url: this.fileXML,
                async: true,
                dataType: "xml",
                success: function(j, l, k) {
                    f.call(i, j, l, k)
                },
                error: function(j, k) {
                    CourseLog.AppendLine('Could not load screen "' + i.id + '" data file [XML] "' + i.fileXML + '" (status "' + k + '").', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                    i.fileXMLStatus = COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD;
                    CourseLog.AppendLine('Screen "' + i.id + '" dispatching "' + COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA + '" event.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                    i.fire(COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA, false)
                }
            })
        } else {
            var h = ((this.fileXMLStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK) && (this.fileHTMLStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK) && (this.fileJsStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK));
            this.fire(COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA, h)
        }
    };
    var f = function(i, p, k) {
        var o = this;
        CourseLog.AppendLine('Screen "' + this.id + '" data file [XML] "' + this.fileXML + '" loaded ok. Parsing data.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        var l = $("layout", i);
        var j = (l.is("[htmlFile]") && l.is("[jsFile]"));
        var m = j ? l.attr("htmlFile") : l.text() + ".html";
        var n = j ? l.attr("jsFile") : n = l.text() + ".js";
        this.xmlRawData = i;
        this.fileHTML = (this.isSpecialScreen ? this.config.dirLayoutsSpecialScreen : this.config.dirLayouts) + m;
        this.fileJS = (this.isSpecialScreen ? this.config.dirLayoutsSpecialScreen : this.config.dirLayouts) + n;
        this.fileXMLStatus = COURSE_ENUM.FILE_STATUS.LOADED_OK;
        this.data.Fill(i);
        this.ui = new CourseScreenUI(this.data, this.style);
        var h = $("som_fundo1", i);
        if ($.trim(h.text()) != "") {
            this.backgroundSound.file = this.config.dirMedia + h.text();
            this.backgroundSound.volume = h.attr("volume");
            this.backgroundSound.repeat = h.attr("repeticao")
        }
        CourseLog.AppendLine('Loading screen "' + this.id + '" template file [HTML] "' + this.fileHTML + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $.ajax({
            type: "GET",
            url: this.fileHTML,
            async: true,
            dataType: "html",
            success: function(q, s, r) {
                d.call(o, q, s, r)
            },
            error: function(q, r) {
                CourseLog.AppendLine('Could not load screen "' + o.id + '" template file [HTML] "' + o.fileHTML + '" (status "' + r + '").', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                o.fileHTMLStatus = COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD;
                CourseLog.AppendLine('Screen "' + o.id + '" dispatching "' + COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA + '" event.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                o.fire(COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA, false)
            }
        })
    };
    var d = function(h, m, j) {
        var k = this;
        if (this.ParseHtmlStarted) {
            return
        }
        this.htmlRawData = h;
        this.ParseHtmlStarted = true;
        CourseLog.AppendLine('Screen "' + this.id + '" template file [HTML] "' + this.fileHTML + '" loaded ok. Parsing data.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        this.uiRawData = h;
        var i = {
            data: this.data,
            ui: this.ui,
            course: this.course,
            screen: this
        };
        this.uiData = new EJS({
            text: this.uiRawData
        }).render(i);
        this.fileHTMLStatus = COURSE_ENUM.FILE_STATUS.LOADED_OK;
        if ($(h).is("[width]")) {
            this.width = $(h).attr("width")
        }
        if ($(h).is("[valign]")) {
            this.valign = $(h).attr("valign")
        }
        if (this.valign == "top") {
            this.position = "position: 'absolute', height: '100%',"
        }
        if ($(h).is("[scrollvertical]")) {
            this.scrollVertical = $(h).attr("scrollvertical")
        }
        var l = $(h).hasClass("full-area");
        if (l) {
            $(k.domNode).addClass("full-area")
        }
        CourseLog.AppendLine('Loading screen "' + this.id + '" code file [JS] "' + this.fileJS + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        $.ajax({
            type: "GET",
            url: this.fileJS,
            async: true,
            dataType: "text",
            success: function(n, p, o) {
                e.call(k, n, p, o)
            },
            error: function(n, o) {
                CourseLog.AppendLine('Could not load screen "' + k.id + '" code file [JS] "' + k.fileJS + '" (status "' + o + '").', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                k.fileJsStatus = COURSE_ENUM.FILE_STATUS.FAILED_TO_LOAD;
                CourseLog.AppendLine('Screen "' + k.id + '" dispatching "' + COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA + '" event.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                k.fire(COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA, false)
            }
        })
    };
    var e = function(h, k, j) {
        CourseLog.AppendLine('Screen "' + this.id + '" code file [JS] "' + this.fileJS + '" loaded ok. Parsing data.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        this.jsData = h + ";return(templateCode);";
        var i = new Function(this.jsData);
        this.code = i();
        this.code.course = this.course;
        this.code.screen = this;
        this.code.ui = this.ui;
        this.code.data = this.data;
        this.code.domNode = this.domNode;
        this.fileJsStatus = COURSE_ENUM.FILE_STATUS.LOADED_OK;
        this.isLoaded = true;
        this.isLoading = false;
        this.LoadContent();
        CourseLog.AppendLine('Screen "' + this.id + '" dispatching "' + COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA + '" event.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        this.fire(COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA, true)
    };
    this.LoadContent = function() {
        var h = "";
        if (this.fileXMLStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK) {
            if (this.fileHTMLStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK) {
                h = this.uiData
            } else {
                h = 'Could not load screen "' + this.id + '" template file at "' + this.fileHTML + '"'
            }
        } else {
            h = 'Could not load screen "' + this.id + '" data file at "' + this.fileXML + '"'
        }
        $(this.domNode).empty();
        $(h).appendTo(this.domNode);
        $(this.domNode).children().eq(0).addClass("screen");
        if (this.fileJsStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK) {
            if (this.code.OnTemplateLoad) {
                this.code.OnTemplateLoad()
            }
        }
    };
    this.Display = function() {
        if (this.fileJsStatus == COURSE_ENUM.FILE_STATUS.LOADED_OK) {
            if (this.code.OnTemplateShow) {
                this.code.OnTemplateShow();
                CourseAuxFunctions.LoadBackgroundSound(this.backgroundSound)
            }
        }
        this.isRendered = true
    };
    this.GetLocalizationMessage = function(h, i) {
        if (arguments.length == 1) {
            i = []
        }
        return (this.course.localization.GetMessage(h, i))
    };
    this.GetEvaluation = function() {
        return (this.course.evaluationCollection.GetEvaluationById(this.evaluationId))
    };
    this.GetCurrentTryScore = function() {
        var h = this.GetEvaluation();
        if (h != null) {
            return (h.GetScoreForCurrentTry())
        } else {
            return (null)
        }
    };
    this.BelongsToEvaluation = function() {
        return (this.GetEvaluation(this.id) != null)
    };
    this.GetEvaluationMode = function() {
        var h = this.GetEvaluation();
        if (h != null) {
            return (h.mode)
        } else {
            return (null)
        }
    };
    this.GetQuestionFeedbackMode = function() {
        var h = this.GetEvaluation();
        if (h != null) {
            return (h.questionFeedbackMode)
        } else {
            return (null)
        }
    };
    this.PassedEvaluation = function() {
        var h = this.GetEvaluation();
        if (h != null) {
            return (h.HasPassed())
        } else {
            return (false)
        }
    };
    this.GetQuestionData = function() {
        var h = this.GetEvaluation();
        if (h != null) {
            return (h.GetQuestion(this.id))
        } else {
            return (null)
        }
    };
    this.SetInteraction = function(l, h, n, m, q, k, o, i, p) {
        var j = this.GetEvaluation();
        if (j != null) {
            j.SetInteraction(this.id, l, h, n, m, q, k, o, i, p)
        }
    };
    this.Reload = function() {
        CourseLog.AppendLine('Screen "' + this.id + " reloading.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        CourseAuxFunctions.DestroyPopover();
        this.domNode.empty();
        this.ParseHtmlStarted = false;
        this.isLoaded = false;
        this.isLoading = false;
        this.isRendered = false;
        if (this.code.player && this.code.player.dispose) {
            this.code.player.dispose()
        }
        d.call(this, this.htmlRawData)
    };
    this.Init(g)
}

function CourseCache() {
    EventBroadcaster.Initialize(this);
    this.screensToCache = [];
    this.AddScreen = function(c) {
        if (!c.isLoaded && !c.isLoading) {
            c.on(COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA, b, null, this);
            this.screensToCache.push(c);
            if (this.screensToCache.length == 1) {
                a.call(this)
            }
        }
    };
    var a = function() {
        if (this.screensToCache.length > 0) {
            var c = this.screensToCache.shift();
            c.LoadData()
        }
    };
    var b = function(c, d) {
        a.call(this);
        this.fire(COURSE_ENUM.EVENTS.ON_READY_SCREEN, c)
    }
}

function Course() {
    EventBroadcaster.Initialize(this);
    this.ui = {
        logo: null,
        title: "",
        title1: "",
        title2: "",
        faq: null,
        glossary: null,
        index: 0,
        attachments: null,
        pagination: "",
        isFirstScreen: true,
        prevText: "",
        isLastScreen: false,
        nextText: "",
        exitText: "",
        screenCSS: "",
        hasExtraFeatures: false,
        hasLogo: false,
        language: "",
        disableExtraFeatures: false
    };
    this.$scope = null;
    this.$compiler = null;
    this.$timeout = null;
    this.$location = null;
    this.$anchorScroll = null;
    this.uiCarousel = null;
    this.uiLocker = null;
    this.uiScreenHolder = null;
    this.uiTimer = null;
    this.timerIntervalId = null;
    this.lockedByTimeIntervalId = null;
    var g = null;
    this.id = 0;
    this.version = "3.0";
    this.releaseDate = "01/10/2013";
    this.xml = null;
    this.config = null;
    this.style = new CourseStyle();
    this.localization = null;
    this.base = null;
    this.conn = null;
    this.cache = new CourseCache();
    this.screens = [];
    this.specialScreens = [];
    this.currentScreen = 2;
    this.courseTitle = "";
    this.cookies = null;
    this.evaluationCollection = null;
    this.evaluationExists = false;
    var a = true;
    this.ShowSpecialScreen = function(x) {
        var t = d(x);
        var w = null;
        for (var u = 0; u < this.specialScreens.length; u++) {
            if (this.specialScreens[u].id == t.ID_INTERNAL) {
                w = this.specialScreens[u];
                break
            }
        }
        if (w == null) {
            var v = new CourseScreen('<nivel id="' + t.ID_INTERNAL + '" xml="' + t.ID_FILE + '" />', this.config, this.style, this);
            v.isSpecialScreen = true;
            v.on(COURSE_ENUM.EVENTS.ON_LOAD_SCREEN_DATA, this.OnLoadSpecialScreen, null, this);
            v.LoadData();
            this.specialScreens.push(v)
        } else {
            this.OnLoadSpecialScreen(w, true)
        }
    };
    var d = function(u) {
        var t = {};
        t.FAQ = COURSE_ENUM.SPECIAL_SCREEN.FAQ;
        t.GLOSSARY = COURSE_ENUM.SPECIAL_SCREEN.GLOSSARY;
        t.INDEX = COURSE_ENUM.SPECIAL_SCREEN.INDEX;
        t.ATTACH = COURSE_ENUM.SPECIAL_SCREEN.ATTACH;
        return (t[u])
    };
    this.OnLoadSpecialScreen = function(u, v) {
        var s = v ? u.uiData : u.GetLoadingError();
        var t = {
            type: "inline",
            content: '<div class="texto">' + s + "</div>",
            scrolling: "auto",
            padding: 20,
            maxWidth: "80%",
            transitionIn: "fade",
            transitionOut: "fade",
            autoDimensions: true
        };
        CourseAuxFunctions.CreatePopup(t);
        if (u.code.OnTemplateLoad) {
            u.code.OnTemplateLoad()
        }
    };
    this.GetVisitedScreensFlag = function() {
        var t = "";
        for (var s = 0; s < this.screens.length; s++) {
            t += this.screens[s].visited ? "1" : "0"
        }
        return (t)
    };
    this.ExportVisitedScreens = function() {
        var s = this.GetVisitedScreensFlag();
        return (CourseAuxFunctions.FromBase2To32(s))
    };
    this.ImportVisitedScreens = function(t) {
        if (t != "") {
            var u = CourseAuxFunctions.FromBase32To2(t);
            for (var s = 0; s < u.length; s++) {
                this.screens[s].visited = (u.charAt(s) == "1")
            }
        }
    };
    this.GetLockedScreensFlag = function() {
        var u = "";
        for (var t = 0; t < this.screens.length; t++) {
            u += (this.screens[t].isLocked ? "1" : "0")
        }
        return (u)
    };
    this.ExportLockedScreens = function() {
        var t = this.GetLockedScreensFlag();
        return (CourseAuxFunctions.FromBase2To32(t))
    };
    this.ImportLockedScreens = function(u) {
        if (u != "") {
            var v = CourseAuxFunctions.FromBase32To2(u);
            for (var t = 0; t < v.length; t++) {
                this.screens[t].isLocked = (v.charAt(t) == "1")
            }
        }
    };
    this.IsCourseComplete = function() {
        var s = this.GetVisitedScreensFlag();
        return (s.indexOf("0") == -1)
    };
    this.GetCurrentScreenNumber = function() {
        return ((this.currentScreen != null) ? this.currentScreen.index + 1 : 0)
    };
    this.CountTotalScreens = function() {
        return (this.screens.length)
    };
    this.GetCurrentScreenLevelTitle = function(v) {
        var s = this.currentScreen.path.split(",");
        var w = this.xml;
        for (var t = 0;
            ((t < s.length) && (t < v)); t++) {
            w = $(w).children().get(s[t])
        }
        var u = $(w).is("[xml]");
        return (u ? "" : $(w).attr("titulo"))
    };
    this.GetLevelTitle = function(u) {
        if (typeof(u) != "string") {
            return
        }
        var s = u.split(",");
        var v = this.xml;
        for (var t = 0; t < s.length; t++) {
            if (s[t] < $(v).children().length) {
                v = $(v).children().eq(s[t])
            } else {
                return ("")
            }
        }
        return ($(v).is("[titulo]") ? $(v).attr("titulo") : "")
    };
    this.GetNodeName = function(u) {
        if (typeof(u) != "string") {
            return
        }
        var s = u.split(",");
        var v = this.xml;
        for (var t = 0; t < s.length; t++) {
            if (s[t] < $(v).children().length) {
                v = $(v).children().eq(s[t])
            } else {
                return ("")
            }
        }
        return $(v).prop("tagName")
    };
    this.PersistData = function(s) {
        var t = "";
        if (this.evaluationExists) {
            if (this.evaluationCollection.IsCompleted()) {
                t = this.evaluationCollection.HasPassed() ? COURSE_ENUM.COURSE_STATUS.PASSED : COURSE_ENUM.COURSE_STATUS.FAILED
            } else {
                t = COURSE_ENUM.COURSE_STATUS.INCOMPLETE
            }
        } else {
            t = this.IsCourseComplete() ? COURSE_ENUM.COURSE_STATUS.COMPLETED : COURSE_ENUM.COURSE_STATUS.INCOMPLETE
        }
        this.conn.data.UpdateStatus(t);
        this.conn.data.UpdateLocation(s, this.ExportVisitedScreens(), this.ExportLockedScreens())
    };
    this.OnCookiesChange = function(t, s) {
        this.conn.data.UpdateCookieData(s)
    };
    this.OnEvaluationFinished = function(t, s) {
        this.conn.data.UpdateScore(s);
        this.PersistData(this.currentScreen.index)
    };
    this.Next = function() {
        var s = false;
        if (this.currentScreen.isLocked) {
            this.uiLocker.tooltip("show");
            return s
        }
        if (this.currentScreen.index < (this.screens.length - 1) && a) {
            this.uiCarousel.carousel("next");
            this.currentScreen = this.screens[this.currentScreen.index + 1];
            s = true
        }
        l.call(this, this.currentScreen.index);
		new ApiContentHtml().navNext(this.currentScreen.index, this.screens.length);
        return s
    };
    this.Prev = function() {
        var s = false;
        if (this.currentScreen.index > 0 && a) {
            this.uiCarousel.carousel("prev");
            this.currentScreen = this.screens[this.currentScreen.index - 1];
            s = true
        }
        l.call(this, this.currentScreen.index);
		new ApiContentHtml().navPrev(this.currentScreen.index);
        return s
    };
    this.Reload = function() {
        var s = true;
        this.currentScreen.Reload();
        this.ActivateScreen();
        return s
    };
    this.IsCurrentScreenTheLast = function() {
        return (this.currentScreen.index == (this.screens.length - 1))
    };
    this.IsCurrentScreenTheFirst = function() {
        return (this.currentScreen.index == 0)
    };
    this.SetCurrentScreenByIndex = function(s) {
        if (s < this.screens.length) {
            this.currentScreen = this.screens[s];
            this.cache.AddScreen(this.screens[s]);
            if ((s + 1) < this.screens.length) {
                this.cache.AddScreen(this.screens[s + 1])
            }
            if ((s + 2) < this.screens.length) {
                this.cache.AddScreen(this.screens[s + 2])
            }
        }
    };
    this.SetScreenAsVisitedByIndex = function(s) {
        if (s < this.screens.length) {
            this.screens[s].visited = true
        }
    };
    this.GoToById = function(t) {
        for (var s = 0; s < this.screens.length; s++) {
            if (this.screens[s].id == t) {
                this.UpdateCarousel(s);
                this.SetCurrentScreenByIndex(s);
                this.ActivateScreen();
                return (true)
            }
        }
        return (false)
    };
    this.GoToCurrentEvaluationFirstQuestion = function() {
        var s = this.evaluationCollection.GetEvaluationByScreen(this.currentScreen.id);
        if (s != null) {
            var t = s.GetFirstQuestionId();
            if (t != null) {
                this.GoToById(t)
            }
        }
    };
    this.GoToEvaluationFirstScreen = function() {
        var s = this.evaluationCollection.GetEvaluationByScreen(this.currentScreen.id);
        if (s != null) {
            var t = s.GetFirstScreenId();
            if (t != null) {
                this.GoToById(t);
                this.ActivateScreen()
            }
        }
    };
    this.LockNavigation = function() {
        this.currentScreen.isLocked = true
    };
    this.UnlockNavigation = function() {
        if (this.currentScreen.lockMode != COURSE_ENUM.LOCK_MODE.LOCKED_TIME) {
            q.call(this)
        }
    };
    var q = function() {
        this.currentScreen.isLocked = false;
        if (!this.$scope.$$phase) {
            this.$scope.$apply()
        }
    };
    OnBookmarkClick = function(s) {
        if (s.buttonId == "yes") {
            this.UpdateCarousel(this.conn.data.bookmark);
            l.call(this, this.conn.data.bookmark)
        } else {
            l.call(this, 0)
        }
    };
    this.ResetCurrentEvaluation = function() {
        var s = this.evaluationCollection.ResetEvaluation(this.currentScreen.id);
        f.call(this, s);
        s.StartTry()
    };
    var f = function(s) {
        var u = 0;
        var v = this;
        var t = $('avaliacao[id="' + s.id + '"]', this.xml);
        $("questao", t).each(function(x, w) {
            var y = s.drawnQuestions[x];
            var A = s.GetQuestionScreenNode(y);
            if (s.insertionPointNode != null) {
                $(A).insertAfter(s.insertionPointNode)
            } else {
                $(s.insertionPointNode).append(z)
            }
            var z = $('questao[id="' + y.id + '"]', t).get(0);
            var B = parseInt($(w).attr("id"));
            var C = v.GetScreen(B);
            C.Init(z);
            $(w).attr("delete", "1");
            x++
        });
        $('questao[delete="1"]', t).remove()
    };
    this.GetScreen = function(v) {
        for (var t = 0; t < this.screens.length; t++) {
            var u = this.screens[t];
            if (u.id == v) {
                return (u)
            }
        }
        return (null)
    };
    this.TerminateCourse = function() {
        if (this.conn != null) {
            this.conn.Finish()
        }
    };
    var m = function(t, s) {
        if (this.currentScreen.index == s.index) {
            this.ActivateScreen()
        }
    };
    var l = function(s) {
        CourseAuxFunctions.HidePopover();
        if (templateCode != null) {
            if (typeof(templateCode.OnTemplateUnload) != "undefined") {
                templateCode.OnTemplateUnload()
            }
        }
        this.SetCurrentScreenByIndex(s);
        this.SetScreenAsVisitedByIndex(s);
        this.PersistData(s);
        this.ActivateScreen()
    };
    var p = function() {
        CourseLog.AppendLine('Starting "' + this.config.connectionMode + '" connection.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        switch (this.config.connectionMode) {
            case COURSE_ENUM.CONNECTION_MODE.OFFLINE:
            case COURSE_ENUM.CONNECTION_MODE.BROWSER_COOKIES:
                this.conn = new IConnection();
                break;
            case COURSE_ENUM.CONNECTION_MODE.SCORM12:
                this.conn = new Scorm12();
                break
        }
        this.conn.Start();
        this.conn.FillData();
        return (this.conn.data.connStatus)
    };
    var c = function() {
        var s = [];
        var t = 0;
        for (var u = 0; u < this.screens.length; u++) {
            if (this.screens[u].evaluationId != t) {
                t = this.screens[u].evaluationId;
                s.push(t)
            }
        }
        return (s)
    };
    this.LoadCourse = function(t) {
        var s = this;
        this.cache.on(COURSE_ENUM.EVENTS.ON_READY_SCREEN, m, null, this);
        CourseLog.AppendLine('Loading course data file at "' + t + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        this.uiCarousel = $(".carousel");
        this.uiLocker = $("#lockedTooltip");
        this.uiScreenHolder = $("#screen-collection");
        this.uiTimer = $("#timer-label");
        e.call(this);
        $.ajax({
            type: "GET",
            url: t,
            async: true,
            dataType: "xml",
            success: function(x, C, y) {
                CourseLog.AppendLine('Course data file at "' + t + '" loaded ok.', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                var A = $(x).find("mapa");
                var z = $(x).find("configuracao");
                if ((A.length == 1) && (z.length == 1)) {
                    s.id = $("*", A).eq(0).is("[id]") ? parseInt($("*", A).eq(0).attr("id")) : 0;
                    s.courseTitle = $("*", A).eq(0).attr("titulo");
                    s.config = new CourseConfig(z);
                    CourseLog.AppendLine("Course configuration read. Connecting with external environment.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                    var u = p.call(s);
                    if (u) {
                        CourseLog.AppendLine("Course connected to external environment. Starting course storage.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
                        var v = (s.config.connectionMode == COURSE_ENUM.CONNECTION_MODE.SCORM12) ? 4096 : Infinity;
                        s.cookies = new CourseCookies(v);
                        s.cookies.on(COURSE_ENUM.EVENTS.ON_CHANGE_COOKIES, s.OnCookiesChange, null, s);
                        s.cookies.FromString(s.conn.data.cookiesData);
                        var B = new QuestionBankCollection(A);
                        s.evaluationCollection = new EvaluationCollection(A, s.cookies, B);
                        s.evaluationCollection.RegisterEvaluationFinishCallback(s, s.OnEvaluationFinished);
                        n.call(s, $("*", A)[0]);
                        if (s.screens.length > 0) {
                            var w = c.call(s);
                            s.evaluationExists = (w.length > 0);
                            s.evaluationCollection.RemoveUnusedEvaluations(w);
                            s.currentScreen = s.screens[0];
                            s.ImportVisitedScreens(s.conn.data.visitedScenes);
                            s.ImportLockedScreens(s.conn.data.lockedScenes);
                            s.style.on(COURSE_ENUM.EVENTS.ON_LOAD_STYLE_DATA, i, null, s);
                            s.style.LoadStyle(s.config.styleFilePath)
                        } else {
                            CourseLog.AppendLine('Course could not filter any screen to show. Please verify the "start-level" config. Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                            s.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, false)
                        }
                    } else {
                        CourseLog.AppendLine("Could not connect to external environment. Course has stopped. Error info: " + this.conn.data.connErrorDescription, COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                        s.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, false)
                    }
                } else {
                    CourseLog.AppendLine('Course data file is not valid. Could not find "map" and/or "config" node. Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                    s.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, false)
                }
            },
            error: function(u, v) {
                CourseLog.AppendLine('Could not load course data file at "' + t + '" (status "' + v + '"). Course has stopped.', COURSE_ENUM.LOG_MESSAGE_TYPE.ERROR);
                s.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, false)
            }
        })
    };
    var i = function(s, t) {
        if (t) {
            this.style.ApplyStylesToDocument();
            this.localization = new CourseLocalization();
            this.localization.on(COURSE_ENUM.EVENTS.ON_LOAD_LOCALIZATION_DATA, k, null, this);
            this.localization.LoadLocalization("loc.xml")
        } else {
            this.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, false)
        }
    };
    var k = function(s, t) {
        if (t) {
            this.localization.un(COURSE_ENUM.EVENTS.ON_LOAD_LOCALIZATION_DATA, k);
            this.localization.on(COURSE_ENUM.EVENTS.ON_LOAD_LOCALIZATION_DATA, j, null, this);
            this.localization.LoadLocalization("qloc.xml")
        } else {
            this.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, false)
        }
    };
    var j = function(s, t) {
        this.base = new CourseBase(this);
        this.base.on(COURSE_ENUM.EVENTS.ON_LOAD_FRAME_DATA, h, null, this);
        this.base.LoadBaseData("base.xml", this.config.base)
    };
    var h = function(s, t) {
        if (t) {
            CourseLog.AppendLine("Course engine loaded and ready.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            b.call(this);
            this.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, true)
        } else {
            this.fire(COURSE_ENUM.EVENTS.ON_LOAD_COURSE_DATA, false)
        }
    };
    var n = function(t) {
        CourseLog.AppendLine("Reading course map.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
        this.xml = t;
        o.call(this, t, "", "");
        for (var s = 0; s < this.screens.length; s++) {
            this.screens[s].index = s;
            var u = "screen-" + this.screens[s].index;
            var v = '<div class="item full-height screen-container' + (s == 0 ? " active" : "") + '"><div id="' + u + '" class="screen-holder full-height"></div></div>';
            $(v).appendTo(this.uiScreenHolder);
            this.screens[s].domNode = $("#" + u)
        }
    };
    var o = function(x, t, w) {
        t += (t != "") ? "," + w : w;
        var s = $(x).children().size();
        if ((s == 0) && $(x).is("[xml]")) {
            var v = true;
            if (this.config.startLevelPath != "") {
                var y = parseInt(t.split(",")[0], 10);
                if (y != parseInt(this.config.startLevelPath)) {
                    v = false
                }
            }
            if (v) {
                var z = new CourseScreen(x, this.config, this.style, this);
                z.path = t;
                this.screens.push(z)
            }
        }
        for (var u = 0; u < s; u++) {
            o.call(this, $(x).children()[u], t, u)
        }
    };
    this.ActivateScreen = function() {
        this.ui.title = this.GetFrameText();
        this.ui.title1 = this.courseTitle;
        this.ui.title2 = this.GetCurrentScreenLevelTitle(1);
        this.ui.pagination = this.localization.GetMessage("108").replace("CURRENT", this.GetCurrentScreenNumber()).replace("TOTAL", this.CountTotalScreens());
        this.ui.paginationPercent = (this.GetCurrentScreenNumber() / this.CountTotalScreens()) * 100;
        this.ui.isFirstScreen = this.IsCurrentScreenTheFirst();
        this.ui.isLastScreen = this.IsCurrentScreenTheLast();
        this.ui.disableExtraFeatures = (this.currentScreen.evaluationId != 0) ? !this.evaluationCollection.GetEvaluationById(this.currentScreen.evaluationId).canLeaveEvaluation : false;
        this.ui.screenCSS = this.currentScreen.screenCSS;
        if (this.currentScreen.isLoaded) {
            templateCode = this.currentScreen.code;
            if (!this.currentScreen.isRendered) {
                var t = this.$scope.$new();
                t.screen = this.currentScreen;
                t.screen.code.$timeout = this.$timeout;
                var s = this;
                t.screen.code.Refresh = function() {
                    this.Refresh.call(s)
                };
                t.screen.code.IsMobile = this.$scope.isMobile;
                this.$compiler(this.currentScreen.domNode)(t)
            }
            this.currentScreen.Display();
            if (this.currentScreen.isLocked && this.currentScreen.lockMode == COURSE_ENUM.LOCK_MODE.LOCKED_TIME) {
                var s = this;
                clearInterval(this.lockedByTimeIntervalId);
                this.lockedByTimeIntervalId = setTimeout(function() {
                    q.call(s)
                }, this.currentScreen.lockTimeOut * 1000);
                g = new Date().getTime() + (this.currentScreen.lockTimeOut * 1000)
            }
            this.Refresh();
            CourseAuxFunctions.InitializeSceneComponents(this.currentScreen)
        }
    };
    this.Refresh = function() {
        if (!this.$scope.$$phase) {
            this.$scope.$apply()
        }
    };
    this.GetFrameText = function() {
        var s = this.courseTitle;
        var t = this.GetCurrentScreenLevelTitle(1);
        if (t != "") {
            s += " // " + this.GetCurrentScreenLevelTitle(1)
        }
        return (s)
    };
    var r = function() {
        this.config.demoTimeout--;
        if (this.config.demoTimeout == 0) {
            clearInterval(this.timerIntervalId);
            top.location.href = this.config.demoURL
        } else {
            $(this.uiTimer).text(this.config.demoTimeout)
        }
    };
    var b = function() {
        if (this.conn.data.connStatus) {
            CourseLog.AppendLine("Rendering course.", COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
            this.ui.logo = this.base.logo;
            this.ui.faq = this.base.GetDynamicButton(COURSE_ENUM.SPECIAL_SCREEN.FAQ.ID_COURSE);
            this.ui.glossary = this.base.GetDynamicButton(COURSE_ENUM.SPECIAL_SCREEN.GLOSSARY.ID_COURSE);
            this.ui.index = this.base.GetDynamicButton(COURSE_ENUM.SPECIAL_SCREEN.INDEX.ID_COURSE);
            this.ui.attachments = this.base.GetDynamicButton(COURSE_ENUM.SPECIAL_SCREEN.ATTACH.ID_COURSE);
            this.ui.prevText = this.localization.GetMessage("090");
            this.ui.nextText = this.localization.GetMessage("089");
            this.ui.exitText = this.localization.GetMessage("086");
            this.ui.title = this.GetFrameText();
            this.ui.title1 = this.courseTitle;
            this.ui.title2 = this.GetCurrentScreenLevelTitle(1);
            this.ui.pagination = this.localization.GetMessage("108").replace("CURRENT", this.GetCurrentScreenNumber()).replace("TOTAL", this.CountTotalScreens());
            this.ui.paginationPercent = (this.GetCurrentScreenNumber() / this.CountTotalScreens()) * 100;
            this.ui.isFirstScreen = this.IsCurrentScreenTheFirst();
            this.ui.isLastScreen = this.IsCurrentScreenTheLast();
            this.ui.screenCSS = this.currentScreen.screenCSS;
            this.ui.hasExtraFeatures = (this.ui.faq != null || this.ui.glossary != null || this.ui.index != null || this.ui.attachments != null);
            this.ui.hasLogo = !(!this.ui.logo);
            this.ui.language = this.config.language.split("-")[0];
            frameCode = this.base.RunJS(this, $("#header"), $("#footer"));
            this.$scope.$apply();
            if (this.conn.data.bookmark != 0) {
				this.UpdateCarousel(this.conn.data.bookmark);
				l.call(this, this.conn.data.bookmark);
            } else {
                l.call(this, 0);
            }
        } else {
            var t = this.localization.GetMessage("093");
            var s = this.localization.GetMessage("alert02a");
            CourseAuxFunctions.ShowNotify(t, s, COURSE_ENUM.ALERT_BOX_BUTTONS.OK, COURSE_ENUM.ALERT_BOX_ICON.ERROR)
        }
    };
    this.CloseBtClick = function() {
        var t = this.localization.GetMessage("086");
        var s = this.localization.GetMessage("061");
        CourseAuxFunctions.ShowNotify(t, s, COURSE_ENUM.ALERT_BOX_BUTTONS.YESNO, COURSE_ENUM.ALERT_BOX_ICON.WARNING, this, this.CloseCourse)
    };
    this.CloseCourse = function(s) {
        if (s.buttonId != "no") {
            window.open("", "_self", "");
            window.close()
        }
    };
    CourseLog.AppendLine('Starting course. Engine version "' + this.version + '", release date "' + this.releaseDate + '".', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
    CourseLog.AppendLine('Browser info: "' + navigator.userAgent + '"', COURSE_ENUM.LOG_MESSAGE_TYPE.NORMAL);
    var e = function() {
        var s = this;
        this.uiCarousel.on("slide.bs.carousel", function() {
            a = false;
            if (s.currentScreen && s.currentScreen.code.OnSwipeStart) {
                s.currentScreen.code.OnSwipeStart()
            }
        });
        this.uiCarousel.on("slid.bs.carousel", function() {
            a = true;
            if (s.currentScreen && s.currentScreen.code.OnSwipeEnd) {
                s.currentScreen.code.OnSwipeEnd()
            }
        });
        var t = this;
        if (this.$scope.isMobile) {
            this.uiCarousel.swipe({
                threshold: 20,
                allowPageScroll: "vertical",
                swipeLeft: function() {
                    t.Next.call(t)
                },
                swipeRight: function() {
                    t.Prev.call(t)
                }
            })
        }
    };
    this.UpdateCarousel = function(s) {
        this.uiCarousel.carousel(s)
    }
};