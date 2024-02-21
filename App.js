import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const App = () => {
  const [currentSection, setCurrentSection] = useState('name');


  const data = {
    imageUrl: require('./assets/jona.jpg'),
    name: 'Jona P. Yumang',
    course: 'Bachelor of Science in Information Technology',
    education: {
      elementary: 'Lerma Elementary School',
      elementaryYear: '2012',
      highSchool: 'Florention Torres High School',
      highSchoolYear: '2019',
      seniorhighschool: 'Ama Computer College',
      seniorhighschoolYear: '2021',
      college: 'Global Reciprocal Colleges',
      collegeyear: '2025'
    },
    about: 'I am a normal college student loves reading wattpad fiction stories and hardcopy of books',
    hobby:
    {
      hobbyName: 'wattpad',
      imageSrc: require('./assets/wattpad.png'),
      link: 'https://www.wattpad.com/',
      description: 'wattpad app is give you freedom for bored'
    },
    contact:
    {
      email: 'yumangjona18@gmail.com',
      contact: '09457837071'
    }

  }

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about'
        case 'about':
          return 'hobby'
        case 'hobby':
          return 'contact'
        case 'contact':
          return 'name'
        default:
          return 'name'
      }
    });
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
          {currentSection === 'name' && (
            <>
              <View style={{alignItems:'center'}}>
                <Image source={data.imageUrl} style={styles.profileImg}/>
              </View>
              <View>
                <Text style={[styles.textHeader, {textAlign:'center'}]}>{data.name}</Text>
                <Text style={[styles.textBody, {textAlign:'center'}]}>{data.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View>
              <Text style={styles.textHeader}>Education: </Text>
              <Text style={styles.textHeaderSmall}>College:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeyear}</Text>
              <Text style={styles.textHeaderSmall}>High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.seniorhighschool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.seniorhighschoolYear}</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.highSchool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.highSchoolYear}</Text>
              <Text style={styles.textHeaderSmall}>Elementary:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.elementary}</Text>
              <Text style={styles.textBodySubtle}>{data.education.elementaryYear}</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View>
              <Text style={styles.textHeader}>About Me: </Text>
              <Text>{data.about}</Text>
            </View>
          )}
          {currentSection === 'hobby' && (
            <View>
              <Text style={styles.textHeader}>My Hobby:</Text>
              <Text style={styles.textHeaderSmall}>{data.hobby.hobbyName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.projectImg} source={data.hobby.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.hobby.link}</Text>
               <Text style={styles.textBody}>{data.hobby.description}</Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View>
               <Text style={styles.textHeader}>Contact Me:</Text>
               <Text style={styles.textBodySubtle}>Email:</Text>
               <Text style={styles.textBody}>yumangjona18@gmail.com</Text>
               <Text style={styles.textBodySubtle}>Contact Number:</Text>
               <Text style={styles.textBody}>09457837071</Text>
            </View>
          )}

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 20,
    justifyContent: 'center',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    marginBottom: 20,
  },
    projectImg: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textHeaderSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textBody: {
    fontSize: 18,
    marginBottom: 12
  },
  textBodySubtle: {
    fontSize: 18,
    marginBottom: 12,
    color: 'gray'
  }
})


export default App;