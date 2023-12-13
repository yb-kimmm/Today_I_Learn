#include <iostream>

using namespace std;
int main()
{
  int num = 0;
  cin >> num;

  for (int i = num ; i > 0 ; i--){
      int count = 0;
      while( count < i){
        count++;
        cout << "*";
      }
      cout <<  endl;
  }

  return 0;
}
