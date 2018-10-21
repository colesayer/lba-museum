"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Homepage =
/*#__PURE__*/
function () {
  function Homepage() {
    _classCallCheck(this, Homepage);

    this.api = new Api();
  }

  _createClass(Homepage, [{
    key: "fetchContent",
    value: function fetchContent() {
      var homepageContent = this.api.fetchHomepage();
      var header = homepageContent.header,
          events = homepageContent.events,
          collection = homepageContent.collection;
      this.initializeHeader(header);
      this.initializeEvents(events);
      this.initializeCollection(collection);
    }
  }, {
    key: "initializeHeader",
    value: function initializeHeader(header) {
      var subtitle = header.subtitle,
          title = header.title,
          date = header.date,
          image = header.image,
          imageAlt = header.imageAlt;
      var headerTextContainer = document.getElementById('header-text-container');
      headerTextContainer.innerHTML = "\n    <h2>".concat(subtitle, "</h2>\n    <h1>").concat(title, "</h1>\n    <date>").concat(date, "</date>\n    ");
      var headerImageContainer = document.getElementById('header-image-container');
      headerImageContainer.innerHTML = "\n    <img src=\"".concat(image, "\" alt=").concat(imageAlt, " class=\"header-image\">\n    ");
    }
  }, {
    key: "initializeEvents",
    value: function initializeEvents(events) {
      var eventsList = document.getElementById('events-list');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var event = _step.value;
          var subtitle = event.subtitle,
              title = event.title,
              footnote = event.footnote,
              date = event.date;
          var eventCard = document.createElement("SECTION");
          eventCard.className = "event-card";
          eventCard.innerHTML = "\n        <h2>".concat(subtitle, "</h2>\n        <h1>").concat(title, "</h1>\n        <h2>").concat(footnote, "</h2>\n        <date>").concat(date, "</date>\n      ");
          eventsList.appendChild(eventCard);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "initializeCollection",
    value: function initializeCollection(collection) {
      var collectionList = document.getElementById('collection-list');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = collection[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          var artist = item.artist,
              title = item.title,
              date = item.date,
              footnote = item.footnote,
              image = item.image,
              imageAlt = item.imageAlt;
          var collectionCard = document.createElement("SECTION");
          collectionCard.className = "collection-card";
          collectionCard.innerHTML = "\n        <div class=\"collection-card-image\">\n          <img src=\"".concat(image, "\" alt=").concat(imageAlt, ">\n          <span class=\"image-overlay\"></span>\n        </div>\n        <h1>").concat(artist, "</h1>\n        <h2>").concat(title, ", ").concat(date, "</h2>\n      ");

          if (footnote) {
            var footnoteContainer = document.createElement("DIV");
            footnoteContainer.className = "collection-card-footnote";
            footnoteContainer.innerHTML = "\n          <div class=\"collection-bullet\"></div>\n          <h3>".concat(footnote, "</h3>\n        ");
            collectionCard.appendChild(footnoteContainer);
          }

          collectionList.appendChild(collectionCard);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Homepage;
}();