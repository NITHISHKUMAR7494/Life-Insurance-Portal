package com.kds.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration

public class Config {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests(authorize -> authorize.anyRequest().authenticated())
            .httpBasic(Customizer.withDefaults())
            .cors(Customizer.withDefaults())
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.NEVER);
        return http.build();
    }
}
