#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "DHT.h"
#include <NTPClient.h>
#include <WiFiUdp.h>

#define DHTTYPE DHT11   
#define DHTPIN 5   
#define wifi_ssid "LANCOMBEIA"
#define wifi_password "beialancom"
#define mqtt_server "mqtt.beia-telemetrie.ro"

DHT dht(DHTPIN, DHTTYPE);

String msg = "";
char mess1[512];
char mess2[512];
int counter;

// MQTT BROKER
const char *mqtt_broker = "mqtt.beia-telemetrie.ro";
const char *topic1 = "training/StefanGhiojdeanu/esp8266/temperatura";
const char *topic2 = "training/StefanGhiojdeanu/esp8266/umiditate";
const char *mqtt_username = "";
const char *mqtt_password = "";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);
StaticJsonDocument<512> doc;


/* CALLBACK FUNCTION
void callback(char *topic, byte *payload, unsigned int length)
{
  Serial.println("The message arrived in this topic: ");
  Serial.println(topic);
  Serial.println("Message: ");
  for (int i = 0; i < length; i++)
  {
    Serial.print((char) payload[i]);
  }
  Serial.println();
  Serial.println("------");
}
*/

void setup_wifi() 
{
  
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifi_ssid);

  WiFi.begin(wifi_ssid, wifi_password);
  
  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(2500);
    Serial.print("Connecting to the WiFi network...");
  }

  Serial.println("Connected succesfully to the WiFi network");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() 
{
  while (!client.connected()) 
  {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("changeMe")) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(2500);
    }
  }
}



void setup()
{
  Serial.begin(115200);
  Serial.print("Starting the program");
  dht.begin();
  Serial.print("Starting the wifi setup");
  setup_wifi();
  

  Serial.print("Connections at mqtt server");
  client.setServer(mqtt_broker, mqtt_port);
  /*client.setCallback(callback);*/
}


void mqtt_Publish1(float i , char* k)
{
  doc["sensor"] = k;
  doc["value"] = i;

  serializeJson(doc, mess1);
  client.publish(topic1, mess1);
  client.subscribe(topic1);
  delay(50);
}

void mqtt_Publish2(float p , char* n)
{
  doc["sensor"] = n;
  doc["value"] = p;

  serializeJson(doc, mess2);
  client.publish(topic2, mess2);
  client.subscribe(topic2);
  delay(50);

}

void loop() {

  delay(1000);
  if (!client.connected()) 
  {
    reconnect();
  }

   int8_t hum = dht.readHumidity(); 
   int8_t temp = dht.readTemperature(); 

  if (isnan(temp) || isnan(hum))
  {
    Serial.println("DHT11 couldn’t be read");
  }
  else
  {
    Serial.println ("Humidity: ");
    Serial.print(hum);
    mqtt_Publish2(hum, "Humidity");
    Serial.println(" %");
    Serial.println("Temperature: ");
    Serial.print(temp);
    mqtt_Publish1(temp, "Temperature");
    Serial.println(" C");

    delay(5000);
   
}
}
