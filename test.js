function out(outparam1, outparam2) {
  console.log(outparam1, outparam2);
  inner("3");
}

function inner(innerparam) {
  console.log("innerparam", innerparam);
}

out(1, 2);
