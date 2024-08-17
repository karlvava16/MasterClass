import React, { Component } from 'react';
import Identity from './Identity';
import Photo from './Photo';
import BiographyInfo from './BiographyInfo';

const person = {
    name: 'Lionel',
    surname: 'Messi',
    info: `Messi relocated to Spain and joined Barcelona aged 13, making his competitive debut at age 17 in October 2004. He established himself as an integral player for the club within the next three years, and in his first uninterrupted season in 2008–09 helped Barcelona achieve the first treble in Spanish football; that year, aged 22, Messi won his first Ballon d'Or. Messi won four consecutive Ballons d'Or, the first player to win it four times. During the 2011–12 season, he set La Liga and European records for most goals in a season, while establishing himself as Barcelona's all-time top scorer. The following two seasons, he finished second for the Ballon d'Or behind Cristiano Ronaldo, his perceived career rival, before regaining his best form during the 2014–15 campaign, becoming the all-time top scorer in La Liga and leading Barcelona to a historic second treble, and was awarded a fifth Ballon d'Or in 2015. Messi assumed captaincy of Barcelona in 2018, and won a record sixth Ballon d'Or in 2019. He signed for French club Paris Saint-Germain in August 2021, spending two seasons there and winning Ligue 1 twice. Messi joined American club Inter Miami in July 2023, winning the Leagues Cup in August.`,
    photo: `https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRbxE0r37OJ2A3W1VjwimRJX2WwxBoYbYAubAOLlj4P_TH2YMKz43r-uWuFcnJYHcNfWMZDvfvZlK7QZqg`,
};

class Biography extends Component {
    state = {};
    render() {
        return (
            <main>
                <div className="main-div">
                    <Photo profilePicture={person.photo}></Photo>
                    <Identity name={person.name} surname={person.surname} />
                    <div style={{ width: '500px' }}>
                        <BiographyInfo info={person.info}></BiographyInfo>
                    </div>
                </div>
            </main>
        );
    }
}

export default Biography;
