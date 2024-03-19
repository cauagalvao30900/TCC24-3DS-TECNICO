import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Clipboard } from 'react-native';
import FileTree from '../FileTree/File';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const copyToClipboard = () => {
    Clipboard.setString(code);
    alert('Texto copiado para a área de transferência.');
  };

  // Função para destacar palavras-chave com cores diferentes
  const highlightKeywords = (text) => {
    const keywords = ['const', 'let', 'var', 'import', 'export', 'function', 'return', 'if', 'else', 'switch', 'case', 'default', 'for', 'while', 'break', 'continue', 'class', 'extends'];
    const coloredCode = text.replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'), (match) => `<span style="color: #FFD700">${match}</span>`);
    return coloredCode;
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Editor de Texto</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.sidebar}>
            <Text style={styles.sidebarHeader}>Pastas</Text>
            <FileTree />
          </View>
          <View style={styles.editor}>
            <TextInput
              value={code}
              onChangeText={handleChange}
              multiline={true}
              style={styles.textInput}
              placeholder="Digite seu código aqui..."
              autoCapitalize="none"
              spellCheck={false}
              autoCompleteType="off"
              textContentType="none"
              allowFontScaling={false}
              selectionColor="#ffffff"
            />
            <View style={styles.toolbar}>
              <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
                <Text style={styles.buttonText}>Copiar</Text>
              </TouchableOpacity>
              {/* Adicione mais botões conforme necessário */}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Cor de fundo escura
  },
  titleContainer: {
    padding: 10,
    backgroundColor: '#282828', // Cor de fundo da barra de título
    alignItems: 'center', // Centralizar o texto horizontalmente
  },
  titleText: {
    color: '#ffffff', // Cor do texto do título
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#333333', // Cor de fundo da barra lateral
    padding: 10,
  },
  sidebarHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // Cor do texto da barra lateral
  },
  editor: {
    flex: 3,
    paddingTop: 10, // Adicionando espaço acima do TextInput
    paddingHorizontal: 10, // Adicionando espaço horizontal ao redor do TextInput
  },
  textInput: {
    fontSize: 14,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333333', // Cor da borda do TextInput
    backgroundColor: '#282828', // Cor de fundo do TextInput
    color: '#ffffff', // Cor do texto do TextInput
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinhar os botões à direita
    marginTop: 10,
  },
  button: {
    padding: 5,
    backgroundColor: '#585858', // Cor de fundo dos botões
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#ffffff', // Cor do texto dos botões
  },
});

export default CodeEditor;
