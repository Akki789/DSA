//Print Increasing Number using recursion

function increasing(n) {
  if(n==0){
    return ;
  }

  increasing(n-1);
  console.log(n);
}

increasing(5);
