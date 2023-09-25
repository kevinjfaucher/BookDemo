import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '../styles/styles';

export default class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            genre: '',
        };
    }

    handleAddBook = () => {
        this.props.addBook(this.state);
        this.setState({ title: '', author: '', genre: '' });
    };

    render() {
        return (
            <View style={styles.form}>
                <Text>Title:</Text>
                <TextInput value={this.state.title} onChangeText={(text) => this.setState({ title: text })} style={styles.input} />
                <Text>Author:</Text>
                <TextInput value={this.state.author} onChangeText={(text) => this.setState({ author: text })} style={styles.input} />
                <Text>Genre:</Text>
                <TextInput value={this.state.genre} onChangeText={(text) => this.setState({ genre: text })} style={styles.input} />
                <Button title="Add Book" onPress={this.handleAddBook} />
            </View>
        );
    }
}
