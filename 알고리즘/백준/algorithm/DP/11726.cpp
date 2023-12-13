#include <iostream>


long arr[1001];
	
int main(){
	
	int num;
	std::cin >> num;
	
	arr[0] = 0;
	arr[1] = 1;
	arr[2] = 2;
	arr[3] = 3;
	
	for ( int n = 4; n <= num; n++ ){
		arr[n] = (arr[n-1] + arr[n-2]) % 10007;
	}
                       	
	std::cout << arr[num] << std::endl;
	
	return 0;
}
