#include <iostream>

using namespace std;

int main()
{
  int n =  0;
  cin >> n ;

  for(int i= 1; i<=n; i++){
    for (int j = i; j <= n-1; j++) cout << " ";
    for (int j = 2*i-1; j > 0 ; j--){ 
      cout << "*";
    }
    cout   <<endl;
  }
  return 0;
}
