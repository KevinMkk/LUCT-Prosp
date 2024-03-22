import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Faculty from './Faculty.js';
//import Course from './Courses.js';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./Limkokwing_Lesotho_Logo.jpg')}
          style={styles.schoolLogo}
        />
        <Image
          source={require('./Lesotho_flag.jpg')}
          style={styles.flag}
        />
        <Text style={styles.school}>LIMKOKWING UNIVERSITY</Text>
      </View>

      <Faculty
        fimg={require('./ict.jpg')}
        fname="Faculty of Information and Communication Technology"
        about="At the Faculty of ICT, we are committed to nurturing the next generation of tech leaders, innovators, and problem solvers. Our interdisciplinary approach integrates computer science, engineering, telecommunications, digital media, and information systems to prepare students for diverse careers in the rapidly evolving tech industry."
        name="Bachelor of Science in Computer Science"
        description="Dive deep into the world of algorithms, coding languages, and cutting-edge technologies."
        image={require('./Bachelor-of-Science-in-Computer-Science-General.jpg')}
      />
      <Faculty
        fimg={require('./FBG.jpg')}
        fname="Faculty of Business and Globalization"
        about="At the Faculty of Business and Globalization, we are dedicated to fostering a dynamic learning environment that prepares students to excel in the interconnected world of business. Our programs are designed to equip graduates with the knowledge, skills, and mindset required to navigate the complexities of global markets and drive positive change."
        name="Bachelor of Business Administration"
        description="Explore the world of business and management with our industry-relevant curriculum."
        image={require('./bba-degree.jpeg')}
      />
      <Faculty
        fimg={require('./FCMB.jpg')}
        fname="Faculty of Communication and Media Broadcasting"
        about="At the Faculty of Communication and Media Broadcasting, we are dedicated to nurturing the next generation of media professionals, storytellers, and communication experts. Our programs are designed to equip students with the skills, knowledge, and experience necessary to thrive in today's fast-paced media landscape."
        name="Bachelor of Broadcasting and Film"
        description="From script to screen, hone your craft in capturing captivating narratives that captivate audiences worldwide."
        image={require('./Media-Production-Hero.jpg')}
      />
      <Faculty
        fimg={require('./FABE.jpg')}
        fname="Faculty of Architecture and the Built Environment"
        about="The Faculty of Architecture and the Built Environment is dedicated to educating the next generation of architects, urban planners, and environmental designers who will lead the way in creating sustainable and inclusive built environments. Our programs integrate design excellence, technological innovation, and social responsibility to address the complex challenges facing our cities and communities."
        name="Bachelor of Architecture"
        description="Join us and embark on a journey to redefine architecture and leave your mark on the world."
        image={require('./Architecture.jpg')}
      />
      <Faculty
        fimg={require('./FDI.jpg')}
        fname="Faculty of Design and Innovation"
        about="The Faculty of Design and Innovation is a hub of creativity, where imagination meets ingenuity to shape the future of design in all its forms. Our faculty is dedicated to nurturing the next generation of designers, innovators, and problem-solvers who will redefine the boundaries of possibility and leave a lasting impact on the world."
        name="Bachelor of Arts in Design Innovation"
        description="Unleash your creativity and innovation with our design-focused degree program."
        image={require('./Foundations-in-Art-and-Design.jpg')}
      />
      <Faculty
        fimg={require('./FCTH.jpg')}
        fname="Faculty of Creativity in Tourism and Hospitality"
        about="The Faculty of Creativity in Tourism and Hospitality is dedicated to cultivating the next generation of hospitality professionals who are not only experts in their field but also creative thinkers, cultural ambassadors, and global leaders. Our faculty is committed to nurturing talents, fostering innovation, and instilling a passion for excellence in every aspect of the tourism and hospitality industry."
        name="Bachelor of Event Management"
        description="Join us and become a master of celebrations, shaping the future of the event industry one unforgettable experience at a time"
        image={require('./Leisure-&-Events.jpg')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
  },
  schoolLogo: {
    width: 350,
    height: 170,
    borderRadius: 10,
    marginTop: 20,   
  },
  flag: {
    width: 350,
    height: 170,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: -170,
    marginBottom: 20,
    opacity: 0.72,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  school: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
});

export default ProfileScreen;
/*
name="Bachelor of Information Systems Management"
        description="Become a leader who harnesses the power of data to drive decision-making and innovation."
        image={require('./ManagementInformationSystems.jpg')}
        */