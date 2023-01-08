#include <iostream>

using namespace std;
int main()
{
  int num = 0;
  cin >> num;

  for (int i = 0; i < num; i++){
      int count = 0;

      for (int j = num-1; j >= 0; j--){
        if( i < j){
          cout << " ";
        }else{
          cout << "*";
        }
      }

      cout <<  endl;
  }

  return 0;
}
