#include <iostream>
#include <cmath>
#include <vector>
#include <cstring>

using namespace std;

int main(){
  string str;
  cin >> str;

  int array[26] = { 0 , };

  for ( int i = 0; i < str.length(); i++){
    int num = str.at(i);
    if( num < 97)
      array[num-65]++;
    else {
      array[num-97]++;
    }
  }

  int max = 0;
  int index = 0;
  for ( int i = 0; i < 26; i++){
    if( max < array[i]){
      max = array[i];
      index = i;
    }
  }

  int count = 0;
  for ( int i =  0; i< 26; i++){
    if (array[i] == max){
      count ++;
      if(count >= 2){
        cout << "?" << endl;
        return 0;
      }
    }
  }
  
  cout << (char)(index+65) << endl;

  return 0;
}


