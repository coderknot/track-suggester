$(document).ready(function() {
  $("form#track-form").submit(function() {
    event.preventDefault();

    var design = $("input:radio[name='design']:checked").val();
    var ruby = $("input:radio[name='ruby']:checked").val();
    var php = parseInt($("#php").val());
    var enterprise = parseInt($("#enterprise").val());
    var microsoft = $("input:radio[name='microsoft']:checked").val();

  });
});
