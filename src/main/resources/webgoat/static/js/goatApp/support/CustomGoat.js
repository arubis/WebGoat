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

                    // Escape XML special characters to prevent XML injection
                    function escapeXml(unsafe) {
                        if (!unsafe) return '';
                        return String(unsafe)
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;')
                            .replace(/'/g, '&apos;');
                    }

                    var xml = '<?xml version="1.0"?>' +
                        '<searchForm>' +
                        '  <from>' + escapeXml(fromField.value()) + '</from>' +
                        '</searchForm>';
                    return xml;
                },
            }

            return customGoat;
    });
