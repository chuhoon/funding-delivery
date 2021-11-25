import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ReviewWrite({ navigation, route }) {
    const [defaultRating, setDefaultRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const starImageFilled = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    const starImageCorner = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    const noimage = 'https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-6_89731.png';
    const [photoValid, setphotoValid] = useState(false);

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= defaultRating
                                        ? { uri: starImageFilled }
                                        : { uri: starImageCorner }
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const [title, setTitle] = useState("");
    const [titleValid, setTitleValid] = useState(false);
    const titleChangeHandler = (text) => {
        if (text.trim().length === 0) {
            setTitleValid(false);
        } else {
            setTitleValid(true);
        }
        setTitle(text);
    };

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,

        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    if (hasGalleryPermission === false) {
        return <Text>No access to Gallery</Text>;
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.imgView}>
                <Image source={{ uri: route.params.img }} style={styles.itemImg}></Image>
            </View>
            <View style={styles.container0}>
                <View style={styles.container1}>
                    <Text style={styles.titleText}>
                        {route.params.name}
                    </Text>
                    <CustomRatingBar />
                    <View style={styles.i4}>
                        <Text style={styles.textStyle}>
                            {defaultRating} / {Math.max.apply(null, maxRating)}
                            <Text> 점</Text>
                        </Text>
                        <Text></Text>
                        <Text>해당가게의 별점을 설정해주세요.</Text>
                    </View>
                </View>

                <View style={styles.i0}>
                    <Image source={
                        image == null
                            ? { uri: noimage }
                            : { uri: image }
                    }
                        style={{ flex: 3, marginTop: 15 }} resizeMode="contain" />

                    {!image && <Text style={styles.i5}>배달받은 사진을 업로드해주세요!</Text>}
                    <View style={styles.i6}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.buttonStyle2}
                            title="이미지 업로드 버튼"
                            onPress={() => pickImage()}>
                            <Text style={styles.buttonTextStyle}>이미지 업로드 버튼</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container2}>
                    <TextInput
                        style={styles.i2}
                        value={title}
                        placeholder="솔직한 리뷰를 작성해주세요. 가게에 많은 도움이 됩니다!"
                        //onChangeText={(text) => this.setState({ text })}
                        onChangeText={(text) => titleChangeHandler(text)}
                    />

                    {!titleValid && <Text style={styles.i5}>상단의 리뷰 코멘트를 입력해주세요!</Text>}
                    <Text style={styles.i3}>
                        솔직하게 작성하신 리뷰는 다른 고객 분들께 많은 도움이 됩니다. 하지만 허위리뷰나 명예훼손, 욕설 및 문제를 야기하는 리뷰는 서비스이용약관이나 관련 법률에 따라 제재를 받을 수 있습니다. 좋은 리뷰를 작성하여 주시길 부탁드립니다.
                    </Text>

                </View>
                <View style={styles.container3}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={() => defaultRating != 0 && titleValid == true && image != null
                            ? alert('해당 가게에 별점 ' + defaultRating + '점 리뷰를 등록합니까?')
                            : (defaultRating == 0 ? alert('해당 가게의 별점을 매겨주세요.')
                                : titleValid == false ? alert('리뷰 코멘트를 작성해주세요.') : alert('리뷰 사진을 업로드해주세요.'))}>
                        <Text style={styles.buttonTextStyle}>리뷰 작성 완료</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container0: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    container1: {
        flex: 1.3,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'lightgray',
        paddingBottom: 25,
        borderBottomWidth: 3

    },
    imgView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10

    },

    itemImg: {
        width: '95%',
        height: 270,
        resizeMode: 'cover',
        marginLeft: 10,
        borderColor: '#FAF082',
        borderWidth: 7,
        borderRadius: 2

    },
    container2: {
        flex: 5,
        backgroundColor: 'white',
        padding: 10,
        height: 300,
        justifyContent: 'center',
        textAlign: 'center',
    },
    container3: {
        flex: 0.5,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    i0: {
        flex: 2,
        height: 400,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 7,
        margin: 10,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 2,
        marginTop: 20
    },
    i2: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        flex: 1,
        borderRadius: 7,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray',
    },

    i3: {
        textAlign: 'center',
        fontSize: 12,
        color: 'gray',
        marginTop: 15,
    },
    i4: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    i5: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 15,
    },
    i6: {
        flex: 1 / 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 15,
        marginBottom: 15
    },

    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#A5FFE4',
        fontWeight: 'bold',

    },
    buttonStyle2: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#ffe65a',
        width: '78 %'
    },

    buttonTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10
    },
    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },

});