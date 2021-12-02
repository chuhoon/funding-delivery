# funding-delivery
RN expo 개발 연습(펀딩 시스템을 도입한 배달)




**1. P1 로그인**


![로그인](로그인.PNG)


```
useEffect(() => {
        setDisabled(!(email && password && !errorMessage));
      }, [email, password, errorMessage]);

const _handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
        validateEmail(changedEmail) ? '' : '이메일을 확인하세요.'
    );
};
const _handlePasswordChange = password => {
    setPassword(removeWhitespace(password));
};
```

_handleEmailChange 이메일 Input 값 속에 onChangeText로 들어간다.
이메일을 대입하는 것에 공백을 제거하고 이메일 양식과 맞지 않을 경우
이메일을 확인하라는 에러메세지를 출력한다.

이러한 방식으로 pw 모듈도 만들었고 알맞는 정보를 입력시에 로그인 한다.

```
  const _handleSigninBtnPress = async () => {
    try {
      spinner.start();
      const user = await signin({ email, password });
      setUser(user);
    } catch (e) {
      Alert.alert('로그인 오류', e.message);
    } finally {
      spinner.stop();
    }
  };
  ```
  
  로그인 버튼 onPress 값에 들어가는 모듈이다.
  로그인 버튼을 눌렀을 경우 옳바른 정보시에 로그인이 되고
  알맞지 않았을 경우 로그인 오류 에러메세지를 출력한다.
  

