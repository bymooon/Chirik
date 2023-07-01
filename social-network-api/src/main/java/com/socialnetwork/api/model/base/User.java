package com.socialnetwork.api.model.base;

import com.socialnetwork.api.model.additional.Bookmark;
import com.socialnetwork.api.model.additional.Follow;
import com.socialnetwork.api.model.additional.Like;
import com.socialnetwork.api.model.additional.View;
import com.socialnetwork.api.security.oauth2.AuthProvider;
import com.socialnetwork.api.model.base.chat.Chat;
import com.socialnetwork.api.model.base.chat.Message;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "username")
  private String username;

  @Column(name = "name")
  private String name;

  @Column(name = "password")
  private String password;

  @Column(name = "email_address")
  private String emailAddress;

  @Column(name = "created_date")
  private LocalDateTime createdDate;

  @Column(name = "bio")
  private String bio;

  @Column(name = "location")
  private String location;

  @Column(name = "website")
  private String website;

  @Column(name = "birth_date")
  private LocalDateTime birthDate;

  @Column(name = "profile_background_image", length = 300)
  private String profileBackgroundImage;

  @Column(name = "profile_image", length = 300)
  private String profileImage;

  //relations
  @OneToMany(mappedBy = "author")
  private List<Post> posts;

  @OneToMany(mappedBy = "followedUser")
  private List<Follow> followers;

  @OneToMany(mappedBy = "followerUser")
  private List<Follow> followed;

  @OneToMany(mappedBy = "seenPost")
  private List<View> seenPosts;

  @OneToMany(mappedBy = "likedBy")
  private List<Like> likedPosts;

  @OneToMany(mappedBy = "bookmarkedBy")
  private List<Bookmark> bookmarkedPosts;

  @OneToMany(mappedBy = "sender")
  private List<Message> sentMessages;

  @OneToMany(mappedBy = "recipient")
  private List<Message> receivedMessages;

  @OneToMany(mappedBy = "recipient")
  private List<Notification> notifications;

  @Column(name = "is_enabled")
  private boolean isEnabled;

  @Transient
  private boolean isCurrUserFollower;

  @Enumerated(EnumType.STRING)
  private AuthProvider provider;

  private String googleId;

  @ManyToMany(mappedBy = "users")
  private List<Chat> chats;

  public User() {
  }

  public User(int id) {
    this.id = id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public List<Chat> getChats() {
    List<Chat> chats = new ArrayList<>();

    if (chats != null) {
      chats.addAll(this.chats);
    }

    return chats;
  }

}
