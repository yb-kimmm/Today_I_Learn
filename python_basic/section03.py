# Section03
# ㅍㅏ이썬 가상환경 개념 , 설정 및 pip 사용법 , vscode 연동

# 외부 설치 패키지 테흐트
import simplejson as json
test_dict = {'1': 95, '4': 77, '3': 65, '5': 100, '2': 88}

# simplejson실행
print(json.dumps(test_dict, sort_keys=True, indent=4 * ' '))
