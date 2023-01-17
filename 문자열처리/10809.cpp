#include <iostream>
#include <string>

using namespace std;

int main(){
	

	string t;
	cin >> t;
	
	//97 122
	
	int arr[26] = { };
	int length =  sizeof(arr) / sizeof(int);
	
	for (int i = 0; i < length; i++){
		arr[i] = -1;
	}
	
	for (int i = (int)'a'; i <= (int)'z'; i++){	
		for (int j = 0; j < t.length(); j++){
			if( i == (int)t[j] ){
				arr[i - 97] = j;
				break;
			}
		}	
	}
	
	for (int i = 0; i < length; i++){
		cout << arr[i] << " ";
	}
	
	
	return 0;
	
}

