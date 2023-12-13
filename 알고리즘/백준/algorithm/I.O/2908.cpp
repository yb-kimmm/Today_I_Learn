#include <iostream>
#include <cmath>

using namespace std;

int reverseNumber(int a){
  int result = 0;

  result = a / 100 * 1;
  result += (( a % 100 ) / 10) * 10;
  result += ((( a % 100 ) % 10)) * 100;

  return result ;
}

int main(){
  int n , m , r_n , r_m;
	cin >> n >> m;
  
  r_n = reverseNumber(n);
  r_m = reverseNumber(m);

  if( r_n > r_m){
    cout << r_n;
  }else{
    cout << r_m;
  }

  return 0;
}


