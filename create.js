function postToGoogle() {
                var emailid = $("#emailid").val();
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfNaReT96NWmLYFfh_XFflym8b7B4WpPtN29j0d_1uloSMzBg/formResponse?",
          data: {"entry.1955518625": emailid},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {

              $('#form').hide();
              window.open("create2.html", "_top");
            }
                });
        return false;
            }