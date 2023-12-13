#include <iostream>

using namespace std;

int main(){

  int n  = 0 ;
  cin >> n;
  int count  = 0;

  // 
  if(n < 10){
    n = n * 10;
  }
  
  int cycle = n;
  while ( true ){
    
    int mok = cycle / 10;
    
    int remainder = cycle % 10;
    
    int newValue = mok + remainder;

    if(newValue > 9){
      newValue = newValue % 10;
    }
    
    cycle = remainder * 10 + newValue;

    count++;

    if(cycle == n){
      break;
    }
  } 

  cout << count ;

  return 0;
}
