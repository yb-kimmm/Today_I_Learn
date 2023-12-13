#include <iostream>

using namespace std;
int main()
{
  int num = 0;
  cin >> num;

  for (int i = 0; i < num; i++){
      int count = 0;

      while(count <= i){
        cout << "*";
        count++;
      }

      cout << endl;
  }

  return 0;
}
