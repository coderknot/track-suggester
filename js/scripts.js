var findTrackSuggestion = function(designInput, rubyInput, phpInput, enterpriseInput, microsoftInput) {
  /* Finds the track suggestion by using form input to add to score factors. The factor with the highest score becomes the winner. Based on winning factor, the track suggestion is determined.
  */

  // declare and initialize score factor, winning factor, and track suggestion variables
  var designScore = 0;
  var programmingScore = 0;
  var enterpriseScore = 0;
  var winningFactor = "";
  var trackSuggestion = "";

  // add to score factors based on design input
  if (designInput === "yes") {
    designScore += 6;
  } else if (designInput === "no") {
    programmingScore += 1;
  }

  // add to score factors based on ruby input
  if (rubyInput === "yes") {
    programmingScore += 6;
  } else if (rubyInput === "no") {
    enterpriseScore += 1;
  }

  // add to score factors based on php input
  if (phpInput === 3) {
    programmingScore += 3;
  } else if (phpInput === 1) {
    designScore += 1;
  } else if (phpInput === 2) {
    enterpriseScore += 1;
  }

  // add to score factors based on enterprise input
  if (enterpriseInput === 3) {
    enterpriseScore += 2;
  } else if (enterpriseInput === 1) {
    designScore += 1;
  } else if (enterpriseInput === 2) {
    programmingScore += 1;
  }

  // add to score factors based on microsoft input
  if (microsoftInput === "yes") {
    enterpriseScore += 6;
  } else if (microsoftInput === "no") {
    enterpriseScore += 0;
  }

  if (designScore === 0 && programmingScore === 0 && enterpriseScore === 0) {
    return "No input";
  }
  // determine winning factor by finding largest score factor
  if (designScore > programmingScore && designScore > enterpriseScore) {
    winningFactor = "design";
  } else if (programmingScore > enterpriseScore) {
    winningFactor = "programming";
  } else {
    winningFactor = "enterprise";
  }

  // determine track suggestion based on winning factor
  if (winningFactor === "design") {
    trackSuggestion = "CSS/Design";
  } else if (winningFactor === "programming") {
    if (programmingScore <= 5) {
      trackSuggestion = "PHP/Drupal";
    } else {
      trackSuggestion = "Ruby/Rails";
    }
  } else {
    if (enterpriseScore <= 5) {
      trackSuggestion = "Java/Android";
    } else {
      trackSuggestion = "C#/.NET";
    }
  }

  // return track suggestion
  return trackSuggestion;
};

$(document).ready(function() {
  $("form#track-form").submit(function(event) {

    // prevent actual form submission
    event.preventDefault();

    // hide prior track suggestion and show placeholder message
    $("#suggestion-showing").hide();
    $("#suggestion-hidden").show();

    // decalare input variables and initialize with form input
    var design = $("input:radio[name='design']:checked").val();
    var ruby = $("input:radio[name='ruby']:checked").val();
    var php = parseInt($("#php").val());
    var enterprise = parseInt($("#enterprise").val());
    var microsoft = $("input:radio[name='microsoft']:checked").val();

    console.log("Design: " + design);
    console.log("Design: " + ruby);
    console.log("Design: " + php);
    console.log("Design: " + enterprise);
    console.log("Design: " + microsoft);

    // pass input variables to function to find track suggestion
    var trackSuggestion = findTrackSuggestion(design, ruby, php, enterprise, microsoft);

    // only show track suggestion if all form inputs are valid
    if (trackSuggestion !== "No input") {
      // add track suggestion to suggestion-showing div
      $("#suggestion-showing").text(trackSuggestion);

      // display track suggestion and hide placeholder message
      $("#suggestion-hidden").hide();
      $("#suggestion-showing").show();
    }

  });

});
