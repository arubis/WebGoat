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
                    // Sanitize input to prevent XML injection
                    var sanitizedFrom = this.escapeXml(fromField.value());
                    var xml = '<?xml version="1.0"?>' +
                        '<searchForm>' +
                        '  <from>' + sanitizedFrom + '</from>' +
                        '</searchForm>';
                    return xml;
                },

                escapeXml:function(unsafe) {
                    if (!unsafe) return '';
                    return unsafe.toString()
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&apos;');
                },
            }

            return customGoat;
    });
