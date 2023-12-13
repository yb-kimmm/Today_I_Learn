/*
  2739
  구구단
*/ 

#include <iostream>
using namespace std;

int main(){
  
  int cnt = 0;
  cin >> cnt;

  for (int i = 1; i <= 9; i++){
    cout << cnt << " * " << i << " = " << cnt * i << "\n";
  }
}
