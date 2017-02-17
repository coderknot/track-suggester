$(document).ready(function() {
  $("form#track-form").submit(function() {
    event.preventDefault();

    var design = $("input:radio[name='design']:checked").val();
    var ruby = $("input:radio[name='ruby']:checked").val();
    var php = parseInt($("#php").val());
    var enterprise = parseInt($("#enterprise").val());
    var microsoft = $("input:radio[name='microsoft']:checked").val();

    var designScore = 0;
    var programmingScore = 0;
    var enterpriseScore = 0;

    if(design === "yes") {
      designScore += 6;
    } else {
      programmingScore += 1;
    }

    if(ruby === "yes") {
      programmingScore += 6;
    } else {
      enterpriseScore += 1;
    }

    if(php === 3) {
      programmingScore += 3;
    } else if (php === 1) {
      designScore += 1;
    } else {
      enterpriseScore += 1;
    }

    if(enterprise === 3) {
      enterpriseScore += 2;
    } else if (enterprise === 1) {
      designScore += 1;
    } else {
      programmingScore += 1;
    }

    if(microsoft === "yes") {
      enterpriseScore += 6;
    } else {
      enterpriseScore += 0;
    }

  });
});
