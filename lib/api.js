"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, [{
    key: "fetchHomepage",
    value: function fetchHomepage() {
      return {
        header: {
          title: "Joseph Buckley: Traitor Muscle",
          subtitle: "Current Exhibition",
          date: "September 22 - November 03 2018",
          image: "assets/images/exhibition_buckley_traitor_muscle.jpg",
          imageAlt: "Joseph Buckley: Traitor Muscle"
        },
        events: [{
          title: "Open Studios",
          subtitle: "Public Program",
          footnote: "",
          date: "October 4, 6pm"
        }, {
          title: "Young Girl Reading Group",
          subtitle: "Public Program",
          footnote: "",
          date: "October 12, 3pm"
        }, {
          title: "Unlearning Learning",
          subtitle: "Public Program",
          footnote: "Part of Traitor Muscle",
          date: "October 20, 5pm"
        }, {
          title: "Artist Talk: Joseph Buckley",
          subtitle: "Public Program",
          footnote: "Part of Traitor Muscle",
          date: "October 29, 8pm"
        }],
        collection: [{
          artist: "Joeseph Buckley",
          title: "The Aristocrat",
          date: "2018",
          footnote: "Included in Traitor Muscle",
          image: "./assets/images/artwork_buckley_traitor_muscle.jpg",
          imageAlt: "Joseph Buckley: The Aristocrat"
        }, {
          artist: "Rineke Dijkstra",
          title: "Hilton Head, SC",
          date: "1992",
          footnote: "",
          image: "./assets/images/artwork_dijkstra_hilton_head.jpg",
          imageAlt: "Rineke Dijkstra: Hilton Head, SC"
        }, {
          artist: "Valerie Export",
          title: "Abrundung II",
          date: "1976",
          footnote: "",
          image: "./assets/images/artwork_export_abrundung_ii.jpg",
          imageAlt: "Valerie Export: Abrudung II"
        }, {
          artist: "Robert Mapplethorpe",
          title: "Alice Neel",
          date: "1984",
          footnote: "",
          image: "./assets/images/artwork_mapplethorpe_alice_neel.jpg",
          imageAlt: "Robert Mapplethorpe: Alice Neel"
        }, {
          artist: "Helen Marten",
          title: "Decoy in D",
          date: "2008",
          footnote: "",
          image: "./assets/images/artwork_marten_decoy_in_d.png",
          imageAlt: "Helen Marten: Decoy in D"
        }, {
          artist: "Marisa Merz",
          title: "Untitled",
          date: "2001-2002",
          footnote: "",
          image: "./assets/images/artwork_merz_untitled.jpg",
          imageAlt: "Marisa Merz: Untitled"
        }, {
          artist: "Lorraine O'Grady",
          title: "Untitled",
          date: "1980-1983",
          footnote: "",
          image: "./assets/images/artwork_ogrady_untitled.jpg",
          imageAlt: "Lorraine O'Grady: Untitled"
        }, {
          artist: "Rosemarie Trockel",
          title: "Untitled",
          date: "1987",
          footnote: "",
          image: "./assets/images/artwork_trockel_untitled.jpg",
          imageAlt: "Rosemarie Trockel: Untitled"
        }]
      };
    }
  }]);

  return Api;
}();