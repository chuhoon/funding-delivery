# funding-delivery
RN expo 개발 연습(펀딩 시스템을 도입한 배달)




**1. P1 로그인**


![로그인](로그인.PNG)


<script>
      // 이메일, 패스워드 조건에 맞지 않을 시에 버튼이 활성화 되지 않는다.
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

// 파이어베이스에 회원 정보가 없을 시에 로그인 오류 알람을 출력한다.
// spinner를 통해 로그인 시 대기 시간에 로딩 마크를 출력한다.
const _handleSigninBtnPress = async () => {
    try {
        spinner.start();
        const user = await signin({email, password});
        setUser(user);
    } catch (e) {
        Alert.alert('로그인 오류', e.message);
    } finally{
        spinner.stop();
    }
};

//firebase.js 참조 (유저 로그인)
export const signin = async ({ email, password }) => {
  const { user } = await Auth.signInWithEmailAndPassword(email, password);
  return user;
};

</script>
