define(['jquery',
    'underscore',
    'backbone',
    'libs/jquery.form'
    ],
    function($,
      _,
      Backbone,
      JQueryForm) {
        var customGoat = {

                getFlights:function() {
                    var fromField = $('#travelFrom');
                    var toField = $('#travelTo');

                    // Use DOM API to safely construct XML
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString('<?xml version="1.0"?><searchForm><from></from></searchForm>', 'text/xml');

                    // Safely set text content (auto-escapes special characters)
                    var fromElement = xmlDoc.getElementsByTagName('from')[0];
                    fromElement.textContent = fromField.val();

                    // Serialize back to string
                    var serializer = new XMLSerializer();
                    var xml = serializer.serializeToString(xmlDoc);

                    return xml;
                },
            }

            return customGoat;
    });
