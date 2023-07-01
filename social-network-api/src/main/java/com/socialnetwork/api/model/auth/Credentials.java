package com.socialnetwork.api.model.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Credentials {

  private String username;

  private String password;

  private boolean rememberMe;
}
