$(document).ready(function() {
  $("form#track-form").submit(function() {

    event.preventDefault();

    $("#suggestion-hidden").show();
    $("#suggestion-showing").hide();

    var design = $("input:radio[name='design']:checked").val();
    var ruby = $("input:radio[name='ruby']:checked").val();
    var php = parseInt($("#php").val());
    var enterprise = parseInt($("#enterprise").val());
    var microsoft = $("input:radio[name='microsoft']:checked").val();

    var designScore = 0;
    var programmingScore = 0;
    var enterpriseScore = 0;

    var winningFactor = "";

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

    if(designScore > programmingScore && designScore > enterpriseScore) {
      winningFactor = "design";
    } else if (programmingScore > enterpriseScore) {
      winningFactor = "programming";
    } else {
      winningFactor = "enterprise";
    }

    if(winningFactor == "design") {
      $("#suggestion-showing").text("CSS/Design");
    } else if (winningFactor === "programming") {
      if(programmingScore <= 5) {
        $("#suggestion-showing").text("PHP/Drupal");
      } else {
        $("#suggestion-showing").text("Ruby/Rails");
      }
    } else {
      if(enterpriseScore <= 5) {
        $("#suggestion-showing").text("Java/Android");
      } else {
        $("#suggestion-showing").text("C#/.Net");
      }
    }

    $("#suggestion-hidden").hide();
    $("#suggestion-showing").show();

  });
});
