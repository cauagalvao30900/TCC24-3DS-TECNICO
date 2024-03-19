import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Text, Switch, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const tabs = [
  { name: 'Configurações', icon: 'settings' },
];

export default function Example() {
  const [value, setValue] = useState(0);
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });
  const [nome, setNome] = useState('');
  const [biografia, setBiografia] = useState('');
  const navigation = useNavigation();

  const saveUpdates = () => {
    // Aqui você implementará a lógica para salvar as atualizações no email cadastrado
  };

  const salvarAlteracoes = () => {
    console.log('Novo nome:', nome);
    console.log('Nova biografia:', biografia);

    // Aqui você enviaria os novos dados para o backend e atualizaria o perfil no banco de dados
    // Exemplo de requisição ao backend para atualizar o perfil:
    // fetch('https://seuservidor.com/atualizarperfil', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ nome, biografia }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Perfil atualizado com sucesso:', data);
    //   // Você pode adicionar aqui um feedback para o usuário indicando que as alterações foram salvas
    // })
    // .catch(error => {
    //   console.error('Erro ao atualizar perfil:', error);
    //   // Adicione aqui um feedback de erro para o usuário, caso ocorra algum problema ao salvar as alterações
    // });

    // Após salvar as alterações, você pode navegar de volta para a tela anterior ou para a tela do perfil
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={styles.container}>
        <View style={styles.header}>
        </View>

        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/11186876-simbolo-de-foto-de-perfil-masculino-vetor.jpg' }}
              style={styles.profileAvatar}
            />
            <View>
              <Text style={styles.profileName}>{nome}</Text>
              <Text style={styles.profileHandle}>{biografia}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Editar Biografia e Nome</Text>
              <FeatherIcon color="#fff" name="edit-3" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          {tabs.map(({ name, icon }, index) => {
            const isActive = index === value;

            return (
              <View
                key={name}
                style={[
                  styles.tabWrapper,
                  isActive && { borderBottomColor: '#6366f1' },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    setValue(index);
                  }}>
                  <View style={styles.tab}>
                    <FeatherIcon
                      color={isActive ? '#6366f1' : '#6b7280'}
                      name={icon}
                      size={16}
                    />
                    <Text
                      style={[
                        styles.tabText,
                        isActive && { color: '#6366f1' },
                      ]}>
                      {name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {value === 0 && (
          <ScrollView>
            <View style={styles.section}>
              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>

                </View>

                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <Text style={styles.rowLabel}>Atualizações por Gmail</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={emailNotifications =>
                        setForm({ ...form, emailNotifications })
                      }
                      style={{
                        transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }],
                      }}
                      value={form.emailNotifications}
                    />
                  </View>
                </View>

                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <Text style={styles.rowLabel}>Push Notifications</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={pushNotifications =>
                        setForm({ ...form, pushNotifications })
                      }
                      style={{
                        transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }],
                      }}
                      value={form.pushNotifications}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contatos</Text>

              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Contatar');
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Contatar nós</Text>
                    <View style={styles.rowSpacer} />
                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('relatarerro');
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Reportar erro</Text>
                    <View style={styles.rowSpacer} />
                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Equipe');
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Sobre nós</Text>
                    <View style={styles.rowSpacer} />
                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('privacidade');
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Termos de privacidade</Text>
                    <View style={styles.rowSpacer} />
                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  tabs: {
    flexDirection: 'row',
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3d3d3d',
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: '#989898',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
  },
  section: {
    marginTop: 12,
  },
  sectionBody: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    paddingLeft: 24,
  },
  sectionTitle: {
    marginTop: 0,
    marginHorizontal: 24,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 44,
    paddingRight: 24,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2c2c2c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: '500',
    color: '#7f7f7f',
    marginRight: 4,
  },
});
